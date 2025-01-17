import logoRedview from '@/images/logos/redview.png'
import logoIdeahub from '@/images/logos/ideahub_logo.png'
import logoIona from '@/images/logos/iona_logo.svg'
import { ArrowDownIcon, BriefcaseIcon } from './Icons'
import Image from 'next/image'
import { Button } from './Button'

export function Resume() {
    let resume: any = [
        {
            company: 'Redview',
            title: 'React Developer',
            logo: logoRedview,
            start: 'Sept 18, 2017',
            end: {
                label: 'Present',
                dateTime: new Date().getFullYear(),
            },
        },
        {
            company: 'Ideahub',
            title: 'Web Developer',
            logo: logoIdeahub,
            start: 'Nov 17, 2016',
            end: 'Sept 5, 2016',
        },
        {
            company: 'IONA',
            title: 'Web Developer',
            logo: logoIona,
            start: 'May 2016',
            end: 'Nov 2016',
        },
    ]

    return (
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <BriefcaseIcon className="h-6 w-6 flex-none" />
                <span className="ml-3">Work</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {resume.map((role: any, roleIndex: number) => (
                    <li key={roleIndex} className="flex gap-4">
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Company</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                {role.company}
                            </dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                                {role.title}
                            </dd>
                            <dt className="sr-only">Date</dt>
                            <dd
                                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                                aria-label={`${role.start.label ?? role.start} until ${role.end.label ?? role.end
                                    }`}
                            >
                                <time dateTime={role.start.dateTime ?? role.start}>
                                    {role.start.label ?? role.start}
                                </time>{' '}
                                <span aria-hidden="true">—</span>{' '}
                                <time dateTime={role.end.dateTime ?? role.end}>
                                    {role.end.label ?? role.end}
                                </time>
                            </dd>
                        </dl>
                    </li>
                ))}
            </ol>
            <Button target="_blank" href="https://docs.google.com/document/d/1N4ps-fnz9ciJZcKlBjIHXF30a7sVIoHZU94YjxD4188/edit?usp=share_link" variant="secondary" className="group mt-6 w-full" download={true}>
                Download CV
                <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button>
        </div>
    )
}