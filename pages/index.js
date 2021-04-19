import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Jacob</p>
        <p>
       This is a sample website for me to learn{' '}
          <a href="https://nextjs.org/learn">Next.js</a>.
        </p>
      </section>
    </Layout>
  )
}