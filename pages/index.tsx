import Head from "next/head"
import Image from "next/image"
import Header from "@/components/Header"
import Banner from "@/components/Banner"
import Row from "@/components/Row"
import requests from "@/utils/request"
import { Movie } from "@/typings"

interface Props {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  anime1: Movie[]
  anime2: Movie[]
  anime3: Movie[]
  anime4: Movie[]
  anime5: Movie[]
  anime6: Movie[]
}

const Home = ({ 
  netflixOriginals,
  trendingNow,
  topRated,
  anime1,
  anime2,
  anime3,
  anime4,
  anime5,
  anime6,
}: Props) => {
  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <Head>
        <title>화성플릭</title>
      </Head>
      <Header/>
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner anime2={anime2}/>
        <section className="md:space-y-24">
          <Row title="화성플릭 인기 영화" movies={trendingNow} />
          <Row title="최고 평점" movies={topRated} />
          <Row title="이 넘치는 감동을 그대에게" movies={anime1} />
          <Row title="가족들과 보기 좋은 애니메이션" movies={anime2}/>
          <Row title="일본에서 만든 컨텐츠" movies={anime3} />
          <Row title="덕후가 새상을 지배한다. ChatGpt가 추천하는 2021년 애니메이션" movies={anime4} />
          <Row title="씹문개방?" movies={anime5} />
          <Row title="기분이 말랑해지고 싶을 때" movies={anime6} />
        </section>
      </main>
      {/* 모달 */}
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    animeSerials1,
    animeSerials2,
    animeSerials3,
    animeSerials4,
    animeSerials5,
    animeSerials6,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchAnimeSerials1).then((res) => res.json()),
    fetch(requests.fetchAnimeSerials2).then((res) => res.json()),
    fetch(requests.fetchAnimeSerials3).then((res) => res.json()),
    fetch(requests.fetchAnimeSerials4).then((res) => res.json()),
    fetch(requests.fetchAnimeSerials5).then((res) => res.json()),
    fetch(requests.fetchAnimeSerials6).then((res) => res.json()),
  ])

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      anime1: animeSerials1.results,
      anime2: animeSerials2.results,
      anime3: animeSerials3.results,
      anime4: animeSerials4.results,
      anime5: animeSerials5.results,
      anime6: animeSerials6.results,
  },
}
}
