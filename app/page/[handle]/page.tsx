import contentful from '@Apis/contentful';

import { Entry } from '@Types';

import { rte } from '@Lib';

export default async function Page({ params: { handle } }: { params: { handle: string } }) {
    const { items } = await contentful.getEntries({
        content_type: 'page',
        'fields.handle': handle,
        limit: 1,
    });

    if (!items?.length) {
        throw new Error('Could not get page from contentful');
    }

    const { fields }: Entry = items[0];

    return (
        <main className="space-y-9 py-8">
            <div className="gutter">
                <h1>{fields.title as string}</h1>

                <div className="rte">{rte(fields.content)}</div>
            </div>
        </main>
    );
}
