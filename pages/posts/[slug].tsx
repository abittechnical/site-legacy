import { useState } from 'react'
import Head from 'next/head'
import { format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { WindowFrame } from '../../components'
import { GetStaticPropsContext } from 'next'
import EditPostDialog from '../../components/molecules/EditPostDialog'

export const getStaticPaths = async () => {
  const paths = allPosts.map(post => post.url)
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
  const MDXContent = useMDXComponent(post.body.code)
  const [showModal, setShowModal] = useState(false)
  const handleEditPost = () => {
    console.log('Editing post')
    setShowModal(false)
  }
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div className="container">
        <WindowFrame withHeader leftAction={() => setShowModal(true)}>
          <article className="mx-auto">
            <div className="mb-4 text-center">
              <h1 className="display-text text-7xl">{post.title}</h1>
              <time dateTime={post.date} className="text-sm text-slate-600">
                {format(parseISO(post.date), 'LLLL d, yyyy')}
              </time>
            </div>
            <div className="prose prose-headings:display-text prose-a:text-secondary-500 xl:prose-xl">
              <MDXContent />
            </div>
          </article>
        </WindowFrame>
        <EditPostDialog show={showModal} onHide={() => setShowModal(false)} onEdit={handleEditPost} />
      </div>
    </>
  )
}

export default Article
