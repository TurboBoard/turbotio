'use client';

import { useState } from 'react';

import Input from '@Inputs/Input';
import TextArea from '@Inputs/TextArea';

type State = {
    email: string;
    message: string;
};

export default function Component({ handle_send }: { handle_send: Function }) {
    const [state, set_state] = useState<State>({
        email: '',
        message: '',
    });

    const handle_change = (key: string, value: any) =>
        set_state({
            ...state,
            [key]: value,
        });

    const handle_submit = (e: any) => {
        e.preventDefault();

        handle_send(state);
    };

    return (
        <form className="space-y-7" onSubmit={handle_submit}>
            <Input
                handle_change={handle_change}
                id="email"
                label="Your email"
                placeholder="ryu@streetfighter.com"
                required={true}
                type="email"
                value={state.email}
            />

            <TextArea
                handle_change={handle_change}
                id="message"
                label="How can we help you?"
                max_length={1024}
                placeholder="What's up..."
                required={true}
                value={state.message}
            />

            <div>
                <button className="button inline" type="submit" disabled={!state.email || !state.message}>
                    Submit
                </button>
            </div>
        </form>
    );
}
