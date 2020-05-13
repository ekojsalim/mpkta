import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Image from "gatsby-image"

import tw from "twin.macro"
import styled from "@emotion/styled"

import ReactFullpage from "@fullpage/react-fullpage"
import ReactPlayer from "react-player"

import headerLogo from "../images/9-nilai-ui.png"

import SEO from "../components/seo"

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
`

const dataNilai = [
  {
    nama: "Kejujuran",
    deskripsi: ` Sifat lurus, ikhlas hati, berkata dan bertindak benar, tidak berbohong, tidak menipu, tidak korupsi, tidak curang, yang dalam pelaksanaannya diiringi sikap lurus, arif bijaksana serta dilandasi keluhuran budi. Kejujuran mencakup seluruh sikap tindak, termasuk tidak melakukan plagiat dalam kegiatan akademik atau pengembangan ilmu pengetahuan, tidak menyalahgunakan jabatan, pangkat, gelar, atau fasilitas akademik lainnya.`,
    indikator: [
      `Menjadi pribadi yang senantiasa memegang teguh prinsip kejujuran, menjaga kredibilitas dan mempertahankan kebenaran.`,
      `Menjadi teladan bagi orang lain dan saling mengingatkan untuk tidak mendukung tindakan yang bertentangan dengan kejujuran`,
    ],
  },
  {
    nama: "Keadilan",
    deskripsi: `Memberikan kesempatan dan perlakuan yang sama secara adil dan non-diskriminatif bagi setiap warga dalam melaksanakan tugas masing-masing, termasuk dalam mengembangkan kegiatan akademik dan kegiatan lainnya, tidak didasarkan pada pertimbangan yang bersifat rasial, etnis, agama, gender, status perkawinan, usia, difabilitas, dan orientasi seksual.`,
    indikator: [
      `Menjaga kehormatan dengan menjunjung tinggi nilai-nilai keadilan.`,
      `Bersikap responsif, santun dan tidak diskriminatif.`,
      `Turut berupaya untuk mewujudkan keadilan.`,
    ],
  },
  {
    nama: "Keterpercayaan",
    deskripsi: `Bersikap dan berperilaku amanah serta dapat dipercaya dalam menjalankan mandat maupun dalam melaksanakan setiap kegiatan atau kewajiban yang diembannya, baik dalam jabatan, fungsi, maupun sebagai warga negara pada umumnya.`,
    indikator: [
      `Bersikap amanah dan dapat dipercaya serta dapat diandalkan dalam menjalankan tugas dan tanggung jawabnya.`,
      `Menunjukkan komitmen untuk tidak menyalahgunakan informasi, posisi, kedudukan atau jabatan serta fasilitas UI yang telah diamanatkan.`,
      `Menjaga nama baik Universitas Indonesia baik di dalam maupun di luar lingkungan UI.`,
    ],
  },
  {
    nama: "Kemartabatan",
    deskripsi: `Komitmen untuk memperlakukan setiap orang dengan rasa hormat, manusiawi, ketaatan pada norma kesusilaan, kepatutan, atau kepantasan dalam situasi apa pun.`,
    indikator: [
      `Menjunjung tinggi norma kesusilaan dan sopan santun.`,
      `Memberikan pelayanan prima untuk mencapai kepentingan bersama.`,
      `Menciptakan area dan wilayah kampus UI sebagai zona yang aman.`,
    ],
  },
  {
    nama: "Tanggung Jawab",
    deskripsi: `Bertanggungjawab dalam melaksanakan tugas jabatan maupun tugas fungsionalnya, serta menghindarkan diri dari benturan kepentingan (conflict of interest) yang dapat merugikan kepentingan UI maupun kepentingan Warga UI lainnya. Termasuk dalam upaya menghindarkan diri dari benturan kepentingan adalah tindakan menolak suap atau sejenisnya yang dapat mempengaruhi pengambilan keputusan dalam jabatan dan fungsinya, yang dapat mengakibatkan kerugian UI maupun Warga UI lainnya.`,
    indikator: [
      `Menunjukkan sikap disiplin dalam menuntaskan tanggung jawabnya secara efektif dan efisien.`,
      `Melakukan tindakan proaktif dan inisiatif yang tinggi sehingga berdampak pada hasil yang berkualitas.`,
      `Mengupayakan proses pengembangan diri secara terus menerus sebagai bentuk tanggung jawab terhadap diri sendiri, profesi, dan lingkup kerja.`,
    ],
  },
  {
    nama: "Kebersamaan",
    deskripsi: `Keragaman/kemajemukan merupakan karakteristik bangsa Indonesia yang menjadi kekuatan dan kekayaan Universitas Indonesia. Pengakuan akan kebhinekaan budaya merupakan dasar dari rasa kebersamaan dan menjadi bagian dari jati diri Warga UI sebagai bagian dari bangsa Indonesia. Olah karenanya Warga UI bertekad untuk menjunjung tinggi toleransi dan semangat kebersamaan dalam meniti serta melaksanakan tugas dan tanggungjawab yang dibebankan keada setiap Warga UI di lingkungan kerjanya.`,
    indikator: [
      `Memegang teguh identitas sebagai bangsa dan memprioritaskan kemanfaatan bagi Indonesia dengan didasari sikap peduli terhadap kepentingan masyarakat`,
      `Menjunjung tinggi toleransi terhadap kebhinekaan atau keberagaman suku bangsa, agama dan ras sebagai kekayaan budaya.`,
      `Bekerjasama dan berkolaborasi untuk membangun sinergi dalam mencapai tujuan bersama.`,
      `Saling mendukung pencapaian hasil dengan disertai kepekaan terhadap kebutuhan orang lain dan rasa empati.`,
    ],
  },
  {
    nama: "Keterbukaan",
    deskripsi: `Keterbukaan nurani dan keterbukaan sikap untuk bersedia mendengarkan dan mempertimbangkan dengan sungguh-sungguh pendapat orang lain; keterbukaan akademik untuk secara kritis menerima semua informasi dan hasil temuan akademik pihak lain; dan bersedia membuka/membagi semua informasi pengetahuan yang dimiliki kepada pihak yang berhak mengetahui/berkepentingan, kecuali yang bersifat rahasia.`,
    indikator: [
      `Menunjukkan kesediaan untuk mendengarkan, mempertimbangkan, dan menerima masukan dan pendapat orang lain dengan kerendahan hati.`,
      `Memberikan informasi dengan benar secara terbuka dan dapat dipertanggungjawabkan.`,
    ],
  },
  {
    nama: "Kebebasan akademik dan otonomi keilmuan",
    deskripsi: `Menjunjung tinggi kebebasan akademik, yaitu kewajiban untuk memelihara dan memajukan ilmu pengetahuan, menjunjung tinggi kebebasan mimbar akademik, yaitu kebebasan menyampaikan pikiran dan pendapat di dalam lingkungan UI maupun dalam forum akademik lainnya.`,
    indikator: [
      `Memberikan kebebasan untuk menyampaikan pikiran dan pendapat yang bertanggung jawab di lingkungan UI.`,
      `Menunjukkan rasa ingin tahu dan memberikan ide-ide kreatif untuk mendorong inovasi dan/atau melakukan perbaikan berkelanjutan`,
      `Memberikan inspirasi untuk menghasilkan pembaruan baik lewat tulisan, ucapan, mapun tindakan.`,
    ],
  },
  {
    nama: "Kepatuhan pada peraturan perundang-undangan yang berlaku ",
    deskripsi: `Melaksanakan semua kegiatan di lingkungan UI dengan mematuhi semua peraturan yangberlaku.`,
    indikator: [
      `Memahami dan menunaikan tugas dengan cara-cara yang berpadanan dengan peraturan perundang-undangan, aturan, prosedur, panduan UI serta panduan lainnya yang relevan.`,
      `Melakukan tindakan yang sesuai dengan aturan yang berlaku baik di dalam maupun di luar lingkungan UI.`,
    ],
  },
]

const Nilai = ({ nama, deskripsi, indikator }) => (
  <div className="slide" css={tw`-mt-20`}>
    <div css={tw`flex items-center justify-center`}>
      <div css={tw`md:w-8/12`}>
        <h3
          css={tw`font-bold text-4xl md:text-5xl uppercase font-mono md:mb-5`}
        >
          {nama}
        </h3>
        <div css={tw`md:px-6 px-3 py-5 bg-o md:rounded-lg`}>
          <p css={tw`md:text-justify mb-3 md:text-lg`}>{deskripsi}</p>
          <div css={tw`md:block hidden`}>
            <h4 css={tw`font-bold text-lg`}>Indikator Perilaku Kunci:</h4>
            <ul css={tw`text-left list-inside list-disc`}>
              {indikator.map(i => (
                <li>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const Anggota = () => {
  const data = useStaticQuery(graphql`
    query {
      alif: file(relativePath: { eq: "alif.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      eko: file(relativePath: { eq: "eko.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      faizah: file(relativePath: { eq: "faizah.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      joni: file(relativePath: { eq: "joni.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tharra: file(relativePath: { eq: "tharra.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <div css={tw`px-16 py-6 flex flex-col w-full h-full`}>
        <h2 css={tw`text-center font-bold text-3xl mb-8`}>Anggota FG 5</h2>
        <div css={tw`flex flex-wrap md:flex-no-wrap`}>
          <div css={tw`md:w-1/5 mx-5 w-full mb-3 text-center`}>
            <Image
              fluid={data.alif.childImageSharp.fluid}
              css={tw`rounded-lg`}
            />
            <span css={tw`font-bold text-lg`}>Alif</span>
            <p css={tw`italic text-sm`}>
              "Berani mengambil risiko, bermimpi lebih tinggi, dan berharap
              lebih besar!"
            </p>
          </div>
          <div css={tw`md:w-1/5 mx-5 w-full mb-3 text-center`}>
            <Image
              fluid={data.eko.childImageSharp.fluid}
              css={tw`rounded-lg`}
            />
            <span css={tw`font-bold text-lg`}>Eko</span>
            <p css={tw`italic text-sm`}>"Hiduplah hidup tanpa penyesalan"</p>
          </div>
          <div css={tw`md:w-1/5 mx-5 w-full mb-3 text-center`}>
            <Image
              fluid={data.faizah.childImageSharp.fluid}
              css={tw`rounded-lg`}
            />
            <span css={tw`font-bold text-lg`}>Faizah</span>
            <p css={tw`italic text-sm`}>
              "Jadilah diri sendiri karena setiap manusia diciptakan spesial"
            </p>
          </div>
          <div css={tw`md:w-1/5 mx-5 w-full mb-3 text-center`}>
            <Image
              fluid={data.joni.childImageSharp.fluid}
              css={tw`rounded-lg`}
            />
            <span css={tw`font-bold text-lg`}>Joni</span>
            <p css={tw`italic text-sm`}>
              "Hidup adalah sebuah perjuangan, selalu berusaha dan pantang
              menyerah"
            </p>
          </div>
          <div css={tw`md:w-1/5 mx-5 w-full mb-8 md:mb-3 text-center`}>
            <Image
              fluid={data.tharra.childImageSharp.fluid}
              css={tw`rounded-lg`}
            />
            <span css={tw`font-bold text-lg`}>Tharra</span>
            <p css={tw`italic text-sm`}>
              "Ukirlah kebaikan maka kebaikan akan mengukirmu"
            </p>
          </div>
        </div>
      </div>
      <div css={tw`absolute bottom-0 text-center w-full mb-2 text-sm italic`}>
        <span>Website ini dibuat oleh Two Epochs (Eko dan Joni)</span>
      </div>
    </>
  )
}

const Fullpage = () => (
  <>
    <SEO description="9 Nilai UI by FG 5" title="9 Nilai UI" />
    <ReactFullpage
      scrollingSpeed={1000} /* Options here */
      sectionsColor={["#fffff", "#f6d74c"]}
      navigation={true}
      slidesNavigation={true}
      controlArrows={false}
      fixedElements={"#header"}
      paddingTop={"5rem"}
      anchors={["video", "nilai", "anggota"]}
      scrollOverflow
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            <div id="header" css={tw`fixed top-0 h-20 py-4 px-8 w-screen`}>
              <div css={tw`flex md:justify-between justify-center`}>
                <div css={tw`flex items-center`}>
                  <img src={headerLogo} alt="9 Nilai UI" css={tw`w-16`} />
                </div>
                <div css={tw`hidden md:flex justify-center items-center`}>
                  <a
                    href="#video"
                    css={tw`mx-2 hover:border-b border-black text-lg`}
                  >
                    Video
                  </a>
                  <a
                    href="#nilai"
                    css={tw`mx-2 hover:border-b border-black text-lg`}
                  >
                    9 Nilai
                  </a>
                  <a
                    href="#anggota"
                    css={tw`mx-2 hover:border-b border-black text-lg`}
                  >
                    Anggota
                  </a>
                </div>
              </div>
            </div>
            <div className="section">
              <div
                css={tw`w-full h-full flex justify-center flex-col items-center -mt-20 px-10`}
              >
                <h2
                  css={tw`font-bold text-4xl border-b border-black mb-6 text-center`}
                >
                  9 Nilai{" "}
                  <span css={tw`text-orange-400`}>Universitas Indonesia</span>
                </h2>
                <div css={tw`w-full md:w-9/12`}>
                  <PlayerWrapper>
                    <ReactPlayer
                      url="https://www.youtube.com/watch?v=aKx8NuTVl98"
                      controls
                      css={tw`absolute top-0 left-0`}
                      width="100%"
                      height="100%"
                    />
                  </PlayerWrapper>
                </div>
                <div
                  css={tw`mt-6 bg-orange-500 px-3 py-2 md:text-xl text-center`}
                >
                  Silakan ditonton dan diambil hikmahnya!
                  <span css={tw`italic`}> - FG 5</span>
                </div>
              </div>
            </div>
            <div className="section" css={tw`text-center`}>
              {dataNilai.map(Nilai)}
            </div>
            <div className="section">
              <Anggota />
            </div>
          </ReactFullpage.Wrapper>
        )
      }}
    />
  </>
)

export default Fullpage
