import { createClient } from 'contentful';

const contentful = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
    host: process.env.CONTENTFUL_HOST,
});

export default contentful;
