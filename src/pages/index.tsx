import Head from 'next/head'
import Container from '@/components/Container'
import { GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from '@/components/SocialIcons'
import { getAllArticles } from '@/lib/getAllArticles'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { Resume } from '@/components/Resume'
import { SocialLink } from '@/components/SocialLink'
import { Article } from '@/components/Article'

export default function Home({ articles }: any) {
  return (
    <>
      <Head>
        <title>
          Software Developer
        </title>
        <meta
          name="description"
          content="My name is Norman Aranez. Living in Panabo City, Philippines, I am software developer."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software Developer
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
            {/* <Newsletter /> */}
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
