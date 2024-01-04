'use client';

import { useState } from 'react';

import Form from '@Forms/Contact';

const contact = async (body: string, set_success: Function) => {
    const response = await fetch(`/api/contact`, {
        method: 'POST',
        body,
    });

    const { success } = await response.json();

    if (!success) return;

    set_success(true);
};

export default function Component() {
    const [success, set_success] = useState<boolean>(false);

    const handle_send = ({ email, message }: { email: string; message: string }) => {
        contact(JSON.stringify({ email, message }), set_success);
    };

    if (success)
        return (
            <p className="text-center">{`Thank you for getting in touch! We'll get back to you as soon as we can.`}</p>
        );

    return <Form handle_send={handle_send} />;
}
