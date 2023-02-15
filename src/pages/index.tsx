import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import logoRedview from '@/images/logos/redview.png'
import logoIdeahub from '@/images/logos/ideahub_logo.png'
import logoIona from '@/images/logos/iona_logo.svg'
import { Card } from '@/components/Card'
import { formatDate } from '@/lib/formatDate'
import { Button } from '@/components/Button'
import Container from '@/components/Container'
import { GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from '@/components/SocialIcons'
import { getAllArticles } from '@/lib/getAllArticles'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { ArrowDownIcon, BriefcaseIcon, MailIcon } from '@/components/Icons'


interface ArticleProps {
  article: {
    title: string;
    slug: string;
    date: string;
    description: string;
  }
}

function Article({ article }: ArticleProps) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

interface SocialLinkProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  className?: string;
  href: string;
};

function SocialLink({ icon: Icon, ...props }: SocialLinkProps) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Resume() {
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
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
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

export default function Home({ articles }: any) {
  return (
    <>
      <Head>
        <title>
        Frontend/Backend Developer
        </title>
        <meta
          name="description"
          content="My name is Norman Aranez. Living in Panabo City, Philippines, I am software developer."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Frontend/Backend Developer
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {`I am Norman, a versatile software developer with extensive experience in both frontend and backend development. As a full-stack developer, I can bring a project from conception to completion with proficiency in both the client and server-side of a web application. I am passionate about creating solutions that improve people's lives and make a positive impact on the world.`}
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/AranezNorman"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://www.instagram.com/normanaranez/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/normanaranez"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/norman-ara%C3%B1ez-71766b137/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article: any) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
