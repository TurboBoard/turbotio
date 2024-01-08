//@ts-nocheck
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const render = document =>
    documentToReactComponents(document, {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: node => {
                const { fields } = node.data.target;

                // eslint-disable-next-line
                return <img className="mb-5" alt={fields.description} src={fields.file.url} />;
            },
            [BLOCKS.LIST_ITEM]: node => {
                const transformedChildren = documentToReactComponents(node, {
                    renderMark: {
                        [MARKS.BOLD]: text => <strong>{text}</strong>,
                    },
                    renderNode: {
                        [BLOCKS.PARAGRAPH]: (node, children) => children,
                        [BLOCKS.LIST_ITEM]: (node, children) => children,
                    },
                });

                return <li>{transformedChildren}</li>;
            },
            [INLINES.HYPERLINK]: node => {
                return (
                    <a href={node.data.uri} rel="noreferrer" target="_blank">
                        {node.content[0].value}
                    </a>
                );
            },
        },
    });

export default render;
