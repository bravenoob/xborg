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
                    A simple site that shows the collective progress of the <b><a target="_blank" href="https://xbg-challenge.xborg.com">XBorg challenge</a></b>.
                    <br/>
                    <br/>
                    <i>Feeling supportive? Join <b><a target="_blank" href="https://layer3.xyz/?ref=4L206">Layer3</a></b> - Web3 Quests and potential airdrops.</i>
                </p>
                <VerticalTimeline/>
            </main>

        </div>
    )
}
