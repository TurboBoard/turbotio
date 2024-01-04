import Image from 'next/image';
import Link from 'next/link';

import Content from './Content';

import Tiger from '@Svgs/Tiger';

import { Message } from '@Types';

export default function Component({ author, content, count, date, guild, id }: Message) {
    return (
        <div className="message md:flex md:space-x-7 space-y-6 md:space-y-0">
            <div className="flex-1 min-h-[89px] md:min-h-full p-6 md:p-7 bg-stone rounded-lg shadow-lg">
                <div className="float-right">
                    <div className="inline-flex items-center space-x-6">
                        <div className="h-8">
                            <Tiger />
                        </div>

                        <div className="font-racing text-pink text-2xl">{count}</div>
                    </div>
                </div>

                <Content content={content} />
            </div>

            <div className="md:w-1/6">
                <ul className="space-y-7 text-sm">
                    <li>
                        <div className="mb-4">
                            <strong>ID</strong>
                        </div>

                        <Link
                            className="message-list__alt-text underline-link text-sm break-all"
                            href={`/bounty/${id}`}
                        >
                            {id}
                        </Link>
                    </li>
                    <li>
                        <div className="mb-4">
                            <strong>User</strong>
                        </div>

                        <div className="flex items-center space-x-5">
                            <Image
                                alt="User avatar"
                                className="h-8 w-8 rounded-full"
                                height={128}
                                src={author.avatar}
                                width={128}
                            />

                            <div className="message-list__alt-text">{author.name}</div>
                        </div>
                    </li>
                    <li>
                        <div className="mb-4">
                            <strong>Server</strong>
                        </div>

                        <div className="flex items-center space-x-5">
                            <Image
                                alt="Guild icon"
                                className="h-8 w-8 rounded-full"
                                height={128}
                                src={guild.icon}
                                width={128}
                            />

                            <span className="message-list__alt-text">{guild.name}</span>
                        </div>
                    </li>
                    <li className="flex-1">
                        <div className="mb-4">
                            <strong>Created</strong>
                        </div>

                        <div className="message-list__alt-text">{date}</div>
                    </li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
}
