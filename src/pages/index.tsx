import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next.js Starter</title>
        <meta
          name="description"
          content="An opinionated launch pad for Next.js projects"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Next.js Starter</h1>
      </main>
    </div>
  )
}

export default Home
