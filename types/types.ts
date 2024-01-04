export type Author = {
    avatar: string;
    id: string;
    name: string;
};

export type AuthorItem = {
    avatar_url: string;
    id: string;
    name: string;
};

export type Guild = {
    icon: string;
    id: string;
    invite: string;
    name: string;
};

export type GuildItem = {
    active: boolean;
    icon_url: string;
    id: string;
    invite_url: string;
    name: string;
};

export type Input = {
    disabled?: boolean;
    handle_change?: Function;
    id: string;
    label: string;
    max_length?: number;
    min?: number;
    placeholder?: string;
    required?: boolean;
    type?: string;
    value: string | number;
};

export type Label = { required: boolean; text: string };

export type MessageItem = {
    author_id: string;
    content: string;
    created_at: number;
    guild_id: string;
    id: string;
    turbot_count: number;
    turbot_id: string;
};

export type Message = {
    author: Author;
    content: string;
    count: number;
    date: string;
    guild: Guild;
    id: string;
};

export type Messages = Message[];

export type TextArea = {
    disabled?: boolean;
    handle_change?: Function;
    id: string;
    label: string;
    max_length?: number;
    placeholder?: string;
    required?: boolean;
    type?: string;
    value: string;
};
