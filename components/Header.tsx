import Link from 'next/link';

import Logo from '@Svgs/Logo';

export default function Component() {
    return (
        <header className="bg-byzantium bg-turbo bg-cover bg-fixed bg-bottom">
            <div className="gutter flex justify-between items-center py-7">
                <div className="flex-1">
                    <Link className="inline-block h-9" href="/">
                        <Logo />
                    </Link>
                </div>

                <div className="flex-1 text-right">
                    <a
                        className="button"
                        href={process.env.NEXT_PUBLIC_DISCORD_INVITE_URL}
                        rel="noreferrer"
                        target="_blank"
                    >
                        Add Bot <span className="hidden sm:inline">To Your Server</span>
                    </a>
                </div>
            </div>

            <div className="divider divider--left-down bg-dark" />
        </header>
    );
}
