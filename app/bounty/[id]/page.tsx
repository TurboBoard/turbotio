import { dynamo } from '@Apis/aws';

import get_message from '@Helpers/get_message';

import Message from '@Components/message/Message';

export async function getStaticPaths() {
    const { Items } = await dynamo.scan({
        TableName: 'turbot_messages',
    });

    if (!Items?.length) {
        throw new Error('Could not retrieve messages from turbot_messages');
    }

    const paths = Items.map(e => ({
        params: {
            id: e.turbot_id,
        },
    }));

    return {
        paths,
        fallback: true,
    };
}

export default async function Page({ params: { id } }: { params: { id: string } }) {
    const message = await get_message(id);

    if (!message) {
        throw new Error('Could not retrieve message');
    }

    return (
        <main className="py-8">
            <div className="gutter">
                <div className="bounty xl:w-3/4 xl:mx-auto">
                    <Message {...message} />
                </div>
            </div>
        </main>
    );
}
