import Head from 'next/head'
import Header from '@components/Header'
import VerticalTimeline from "@components/VerticalTimeline";

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>$XBG Challenge Stats</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>

                <Header title="XBorg $XBG Challenge"/>
                <p className="description">
                    A simple site that show the collective progress of the XBorg challange.
                    <br/>
                    <br/>
                    Todo's:
                    <br/>
                    - Add details of each milestone
                    <br/>
                    - Improve design
                </p>
                <VerticalTimeline/>
            </main>

        </div>
    )
}
