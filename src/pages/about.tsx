import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import Container from '@/components/Container'
import { MailIcon } from '@/components/Icons'

interface SocialLinkProps {
  className?: string;
  href: string;
  children: React.ReactNode;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

function SocialLink({ className, href, children, icon: Icon }: SocialLinkProps) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Norman Aranez</title>
        <meta
          name="description"
          content="I’m Norman Aranez. I live in New York City, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              My name is Norman Aranez. Living in Panabo City, Philippines, I am software developer.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                As a software developer with over 7 years of experience in testing, designing, and maintenance of various software systems. Proficient in React, Typescript, GraphQL, REST API, ASP.NET, MySQL and MSSQL. Seeking a challenging role as a software developer to utilize my skills and knowledge to cater to the specific needs of the people and company.
              </p>
              <p>
              I have experience in the software development sector and have held senior positions at Redview (Frontend) and HP Outsourcing (Fullstack), where I oversaw the creation of several products and online apps utilizing React, Typescript, GraphQL, Laravel, and Vuejs among other technologies.
              </p>
              <p>
                In addition to my work experience, I have received a Bachelor of Science in Information Technology and have strong communication and problem-solving skills. Also proficient in various technologies including MySQL, Stored Procedures, Database Design, Triggers, Views, Java, Codeigniter, webpack, gulp, grunt, php, CSS/CSS3, html, Photoshop, Sage, and are familiar with operating systems including Linux, Windows, and IOS.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/AranezNorman" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://www.instagram.com/normanaranez/" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://github.com/normanaranez" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/norman-ara%C3%B1ez-71766b137/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:araneznorman12@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                araneznorman12@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
