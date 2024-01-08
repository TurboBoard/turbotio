import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { SendEmailCommand, SendEmailCommandInput, SESClient } from '@aws-sdk/client-ses';

import {
    DynamoDBDocumentClient,
    GetCommand,
    GetCommandInput,
    QueryCommand,
    QueryCommandInput,
    ScanCommand,
    ScanCommandInput,
} from '@aws-sdk/lib-dynamodb';

const client = {
    dynamo: new DynamoDBClient({
        credentials: {
            accessKeyId: process.env.AMAZON_ACCESS_KEY_ID as string,
            secretAccessKey: process.env.AMAZON_SECRET_ACCESS_KEY as string,
        },
        region: 'us-east-1',
    }),
    ses: new SESClient({
        credentials: {
            accessKeyId: process.env.AMAZON_ACCESS_KEY_ID as string,
            secretAccessKey: process.env.AMAZON_SECRET_ACCESS_KEY as string,
        },
        region: 'us-east-1',
    }),
};

const doc = DynamoDBDocumentClient.from(client.dynamo);

const dynamo = {
    get_item: async (input: GetCommandInput) => {
        const command = new GetCommand(input);

        return doc.send(command);
    },
    query: async (input: QueryCommandInput) => {
        const command = new QueryCommand(input);

        return doc.send(command);
    },
    scan: async (input: ScanCommandInput) => {
        const command = new ScanCommand(input);

        return doc.send(command);
    },
};

const ses = {
    send: async (input: SendEmailCommandInput) => {
        const command = new SendEmailCommand(input);

        return client.ses.send(command);
    },
};

export { dynamo, ses };
