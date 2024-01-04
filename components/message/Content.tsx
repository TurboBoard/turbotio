// @ts-nocheck
import Markdown from 'markdown-to-jsx';

import { Message } from '@Types';

export default function Component({ content }: { content: Message['content'] }) {
    return (
        <div className="content">
            <Markdown>{content}</Markdown>
        </div>
    );
}
