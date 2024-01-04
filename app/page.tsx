import { dynamo } from '@Apis/aws';

import get_message from '@Helpers/get_message';

import Contact from '@Components/Contact';
import Message from '@Components/message/Message';

import { Messages, MessageItem } from '@Types';

const get_messages = async (items: MessageItem[]): Promise<Messages> => {
    const messages: Messages = [];

    for (const item of items) {
        const message = await get_message(item.turbot_id);

        if (!message) {
            throw new Error('Could not get message from get_messages');
        }

        messages.push(message);
    }

    return messages;
};

export default async function Page() {
    const { Items } = await dynamo.scan({
        TableName: 'turbot_messages',
    });

    if (!Items?.length) {
        throw new Error('Could not scan turbot_messages');
    }

    const items = Items?.sort((a, b) => b.created_at - a.created_at).slice(0, 3);

    const messages = await get_messages(items as MessageItem[]);

    const featured = messages.find(e => e.id === 'zkEjFUJKxeVInj64iUH0R');

    if (!featured) {
        throw new Error('Could not find featured message');
    }

    return (
        <main className="space-y-9 py-8">
            <div className="gutter">
                <h1>Latest Bounties</h1>

                <ul className="xl:w-3/4 xl:mx-auto space-y-8">
                    {messages.map(message => (
                        <div key={message.id} className="pb-8 border-stone border-b last:border-b-0 last:pb-0">
                            <Message {...message} />
                        </div>
                    ))}
                </ul>
            </div>

            <div className="bg-byzantium bg-turbo bg-cover bg-fixed bg-center">
                <div className="divider divider--right-up bg-dark" />

                <div className="gutter py-8">
                    <h1 className="text-light">Featured Bounty</h1>

                    <div className="featured xl:w-3/4 xl:mx-auto md:pb-6">
                        <Message {...featured} />
                    </div>
                </div>

                <div className="divider divider--left-down -mt-1 bg-dark" />
            </div>

            <div className="gutter">
                <div className="xl:w-3/4 mx-auto">
                    <h1>Get In Touch</h1>

                    {/* prettier-ignore */}
                    <p className="mb-7 text-center">
                        Are you looking to sponsor a bounty? Would you like to advertise your game? Need help organizing a bounty for your community?<br />
                        Fill out the form below or email us at <a href="mailto:hello@turboboard.io" target="_blank">hello@turboboard.io</a> and {`we'll`} help you out.
                    </p>

                    <Contact />
                </div>
            </div>
        </main>
    );
}
