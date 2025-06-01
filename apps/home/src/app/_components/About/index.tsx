import { H2, H3 } from '@/ui'
import Skills from './Skills'

function About() {
  return (
    <section
      id="ABOUT"
      className="section bg-background-light dark:bg-background-dark"
    >
      <div className="section-container">
        <H2 className="mb-20 text-center">ABOUT ME</H2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-40">
          <div>
            <H3 className="mb-8">저는 이런 사람이에요!</H3>
            <p className="mb-16">
              안녕하세요 저는 프론트엔드 개발자로 성장하고 있는 김성욱입니다.
              <br />
              주로 React와 Next를 사용해서 프로젝트를 진행해왔으며 진행한
              프로젝트들은 아래에서 확인하실 수 있습니다.
              <br />
              <br />
              C와 C++ 언어를 기반으로 쉘, 웹 서버 등 여러 과제를 수행하며
              소프트웨어 개발에 대한 기본적인 이해를 가지고 있습니다. 진행중인
              프로젝트 중간에 합류하여 프로젝트를 완성하거나 새로운 기능을
              추가하는 경험을 많이 가지고 있으며 프로젝트 초기 환경설정부터
              배포까지 작업한 경험이 있습니다.
              <br />
              <br />
              저는 현재 구직 중이며 새로운 기회를 찾고 있습니다. 언제든지
              연락주세요!
            </p>
            <H3 className="mb-4">교육</H3>
            <p>(2022.11 - 2024.08) 42서울 [공통과정 수료]</p>
            <p className="mb-8">
              (2015.03 - 2022.02) 한양대학교 화학공학과 학사 [졸업]
            </p>
            <H3 className="mb-4">경력</H3>
            <p className="mb-8">(2024.05 - 2024.08) (주)핏펀즈 [인턴]</p>
            <H3 className="mb-4">수상 및 자격증</H3>
            <p>(2024.09) PCCP Javascript Lv3.</p>
            <p>(2024.08) Opic 영어 IH 등급</p>
            <p>
              (2023.10) 42서울 경진대회 대상(과학기술정보통신부 장관상) [활동
              내용: 42STAT 프로젝트]
            </p>
            <p>
              (2014.02) 2013 STEAM R&E 페스티벌 최우수상(교육부 장관상) [활동
              내용: 파력 발전기 프로토타입 개발]
            </p>
          </div>
          <div>
            <H3 className="mb-8">기술 스택</H3>
            <div className="flex flex-wrap gap-2">
              <Skills>HTML</Skills>
              <Skills>CSS</Skills>
              <Skills>JavaScript</Skills>
              <Skills>Typescript</Skills>
              <Skills>React</Skills>
              <Skills>Next.JS</Skills>
              <Skills>C</Skills>
              <Skills>C++</Skills>
              <Skills>Docker</Skills>
              <Skills>Tailwind CSS</Skills>
              <Skills>Emotion</Skills>
              <Skills>Zustand</Skills>
              <Skills>Tanstack Query</Skills>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
