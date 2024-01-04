import Label from './Label';

import { Input } from '@Types';

const Component = ({
    disabled,
    handle_change,
    id,
    label,
    max_length,
    min,
    placeholder,
    required = false,
    type = 'text',
    value,
}: Input) => {
    const props = {
        id,
        label,
        value,
    } as {
        disabled: Input['disabled'];
        onChange?: React.ChangeEventHandler<HTMLInputElement>;
        id: Input['id'];
        label: Input['label'];
        maxLength: Input['max_length'];
        min: Input['min'];
        placeholder: Input['placeholder'];
        required: Input['required'];
        type: Input['type'];
        value: Input['value'];
    };

    if (disabled) props.disabled = disabled;

    if (handle_change)
        props.onChange = (e: React.FormEvent<HTMLInputElement>) => handle_change(id, e.currentTarget.value);

    if (max_length) props.maxLength = max_length;

    if (min) props.min = min;

    if (placeholder) props.placeholder = placeholder;

    if (required) props.required = required;

    if (type) props.type = type;

    return (
        <div className="flex flex-col">
            <Label required={required || false} text={label} />

            <input className="border-silver border-b focus:border-byzantium bg-transparent" {...props} />
        </div>
    );
};

export default Component;
