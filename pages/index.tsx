import Head from 'next/head'
import { x } from '@xstyled/styled-components'
import { compareDesc, format, parseISO } from 'date-fns'
import { Container, CustomLink, WindowFrame } from '../components'
import { allPosts, Post } from 'contentlayer/generated'

const PostCard = ({ title, date, url }: Post) => (
  <div>
    <x.p fontSize="sm" color="gray-500">
      <time dateTime={date}>{format(parseISO(date), 'LLLL d, yyyy')}</time>
    </x.p>
    <x.div mt={2}>
      <x.p fontSize="xl" fontWeight="semibold" color="gray-900">
        {title}
      </x.p>
      <x.p mt={3} color="gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam cupiditate dolorum eligendi enim et, ex
        excepturi inventore ipsam ipsum libero minima obcaecati quas sed?
      </x.p>
    </x.div>
    <x.div mt={3}>
      <CustomLink href={url} className="text-base font-semibold text-secondary-400 hover:text-indigo-500">
        Read full story
      </CustomLink>
    </x.div>
  </div>
)

const Home = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <Head>
        <title>A Bit Technical | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <WindowFrame>
          <x.div textAlign="center">
            <x.h1
              mt={1}
              fontSize={{ _: '4xl', sm: '5xl', lg: '6xl' }}
              fontWeight="bold"
              letterSpacing="tight"
              fontFamily="sunny"
              className="casual-text"
            >
              A Bit
              <x.span position="relative" display="inline-block">
                <x.span position="relative">Technical</x.span>
              </x.span>
            </x.h1>
            <x.p mx="auto" mt={5} maxW="xl" fontSize="xl" color="gray-500">
              Start building for free, then add a site plan to go live. Account plans unlock additional features.
            </x.p>
          </x.div>
          <x.div mt={6} pt={10} className="mt-6 grid gap-16 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {posts.map(post => (
              <PostCard key={post._id} {...post} />
            ))}
          </x.div>
        </WindowFrame>
      </Container>
    </>
  )
}
export default Home

export const getStaticProps = async () => {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { posts } }
}
