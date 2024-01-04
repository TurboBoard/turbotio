import { dynamo } from '@Apis/aws';

import { Author, AuthorItem, Guild, GuildItem, Message, MessageItem } from '@Types';

const get_author = async (author_id: AuthorItem['id']): Promise<Author> => {
    const { Item } = await dynamo.get_item({
        TableName: 'turbot_authors',
        Key: {
            id: author_id,
        },
    });

    if (!Item) {
        throw new Error('Could not get author from turbot_authors');
    }

    const { avatar_url, id, name } = Item as AuthorItem;

    return {
        avatar: avatar_url,
        id,
        name,
    };
};

const get_guild = async (guild_id: GuildItem['id']): Promise<Guild> => {
    const { Item } = await dynamo.get_item({
        TableName: 'turbot_guilds',
        Key: {
            id: guild_id,
        },
    });

    if (!Item) {
        throw new Error('Could not get guild from turbot_guilds');
    }

    const { icon_url, id, invite_url, name } = Item as GuildItem;

    return {
        icon: icon_url,
        id,
        invite: invite_url,
        name,
    };
};

const get_message = async (turbot_id: MessageItem['turbot_id']): Promise<Message | null> => {
    try {
        const { Items } = await dynamo.scan({
            TableName: 'turbot_messages',
            FilterExpression: '#turbot_id = :turbot_id',
            ExpressionAttributeNames: {
                '#turbot_id': 'turbot_id',
            },
            ExpressionAttributeValues: {
                ':turbot_id': turbot_id,
            },
        });

        if (!Items?.length) throw new Error('Could not retrieve message from turbot_messages');

        const { author_id, content, created_at, guild_id, turbot_count } = Items[0];

        const author = await get_author(author_id);

        const guild = await get_guild(guild_id);

        const message: Message = {
            author,
            content,
            count: turbot_count,
            date: new Date(created_at).toDateString(),
            guild,
            id: turbot_id,
        };

        return message;
    } catch {
        return null;
    }
};

export default get_message;
