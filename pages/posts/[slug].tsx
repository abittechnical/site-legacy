import Head from 'next/head'
import { x } from '@xstyled/styled-components'
import { format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { Container, Heading, WindowFrame } from '../../components'
import { GetStaticPropsContext } from 'next'

const mdxComponents = {
  h1: Heading,
}
export const getStaticPaths = async () => {
  const paths = allPosts.map(post => post.url)
  console.log(paths)
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const post = allPosts.find(post => post._raw.flattenedPath === params?.slug)
  return {
    props: {
      post,
    },
  }
}
const Article = ({ post }: { post: Post }) => {
  const MDXContent = useMDXComponent(post.body.code, mdxComponents)
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Container>
        <WindowFrame withHeader>
          <article className="prose mx-auto lg:prose-xl">
            <x.div mb={6} textAlign="center">
              <x.h1 mb={1} fontSize="3xl" fontWeight="bold">
                {post.title}
              </x.h1>
              <x.time fontSize="sm" color="gray-600" dateTime={post.date}>
                {format(parseISO(post.date), 'LLLL d, yyyy')}
              </x.time>
            </x.div>
            <div className="cl-post-body">
              <MDXContent />
            </div>
          </article>
        </WindowFrame>
      </Container>
    </>
  )
}

export default Article
