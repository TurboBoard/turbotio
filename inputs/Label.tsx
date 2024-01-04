import { Label } from '@Types';

export default function Component({ required, text }: Label) {
    return (
        <label className="mb-4">
            {text} {required && <span>*</span>}
        </label>
    );
}
