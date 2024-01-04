import Link from 'next/link';

import Envelope from '@Svgs/Envelope';
import Discord from '@Svgs/Discord';
import Github from '@Svgs/Github';
import Logo from '@Svgs/Logo';
import Twitter from '@Svgs/Twitter';

export default function Component() {
    return (
        <footer className="bg-byzantium bg-turbo bg-cover bg-fixed bg-bottom">
            <div className="divider divider--right-up bg-dark" />

            <div className="gutter py-7">
                <Link className="inline-block h-9 mb-7" href="/">
                    <Logo />
                </Link>

                <div className="sm:flex sm:justify-between space-y-7 sm:space-y-0">
                    <ul className="flex space-x-7">
                        {[
                            { href: 'https://twitter.com/TurboBoardIO', icon: <Twitter />, key: 'twitter' },
                            { href: 'https://discord.gg/7cZvW3AZ7M', icon: <Discord />, key: 'discord' },
                            { href: 'https://github.com/TurboBoard/turbot', icon: <Github />, key: 'github' },
                            { href: 'mailto:hello@turboboard.io', icon: <Envelope />, key: 'envelope' },
                        ].map(({ href, icon, key }) => (
                            <li key={key}>
                                <a className="inline-block h-7 text-light" href={href} rel="noreferrer" target="_blank">
                                    {icon}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <ul className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-7">
                        {[
                            { handle: 'faq', text: 'FAQ' },
                            { handle: 'privacy-policy', text: 'Privacy Policy' },
                            { handle: 'terms-and-conditions', text: 'Terms & Conditions' },
                        ].map(({ handle, text }) => (
                            <li key={handle}>
                                <Link className="text-light" href={`/page/${handle}`}>
                                    {text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}
