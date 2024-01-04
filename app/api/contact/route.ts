import { ses } from '@Apis/aws';

import { SendEmailCommandInput } from '@aws-sdk/client-ses';

export async function POST(req: Request) {
    try {
        const { email, message } = await req.json();

        const input: SendEmailCommandInput = {
            Destination: {
                ToAddresses: ['hello@turboboard.io'],
            },
            Message: {
                Body: {
                    Html: {
                        Charset: 'UTF-8',
                        Data: `<p>A user has reached out via <a href="https://turboboard.io/" target="_blank">TurboBoard.io</a></p>
                        <p><strong>Email:</strong> ${email}<br />
                        <strong>Message:</strong> ${message}<br /></p>`,
                    },
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: 'Contact Form',
                },
            },
            Source: 'Turboboard.io <admin@turboboard.io>',
        };

        await ses.send(input);

        return Response.json({ success: true });
    } catch {
        return Response.json({ success: false });
    }
}
