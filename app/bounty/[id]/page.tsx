import get_message from '@Helpers/get_message';

import Message from '@Components/message/Message';

export default async function Page({ params: { id } }: { params: { id: string } }) {
    const message = await get_message(id);

    if (!message) {
        throw new Error('Could not retrieve message');
    }

    return (
        <main className="py-8">
            <div className="xl:w-3/4 xl:mx-auto">
                <Message {...message} />
            </div>
        </main>
    );
}
