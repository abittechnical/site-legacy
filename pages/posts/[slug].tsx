import Head from 'next/head'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { WindowFrame } from '../../components'

export const getStaticPaths = async () => {
  const paths = allPosts.map(post => post.url)
  console.log(paths)
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = allPosts.find(post => post._raw.flattenedPath === params.slug)
  return {
    props: {
      post,
    },
  }
}
const Article = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code)
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div className="container">
        <WindowFrame withHeader>
          <article className="prose mx-auto lg:prose-xl">
            <div className="mb-6 text-center">
              <h1 className="mb-1 text-3xl font-bold">{post.title}</h1>
              <time dateTime={post.date} className="text-sm text-slate-600">
                {format(parseISO(post.date), 'LLLL d, yyyy')}
              </time>
            </div>
            <div className="cl-post-body">
              <MDXContent />
            </div>
          </article>
        </WindowFrame>
      </div>
    </>
  )
}

export default Article
