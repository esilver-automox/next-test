import Link from 'next/link'
import Layout from '../components/Layout'
const NEXT_PUBLIC_HOSTNAME = process.env.NEXT_PUBLIC_HOSTNAME

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>

    <h3>This is {NEXT_PUBLIC_HOSTNAME}</h3>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
