import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import VerticalTimeline from "@components/VerticalTimeline";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <Header title="XBorg $XBG Challange" />
        <p className="description">
            A simple site that show the collective progress of the XBorg challange.
            <br/>
            <br/>
            Todo's:
            <br/>
            - Show number of participants
            <br/>
            - Fetch impressions numbers from x or lunar
            <br/>
            - Add details of each milestone
            <br/>
            - Improve design
        </p>
        <VerticalTimeline currentPercent={5} />
      </main>

      <Footer />
    </div>
  )
}
