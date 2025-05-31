import ProjectLayout from '@/app/(project)/ProjectLayout'
import ImageSlider from '@/app/_components/ImageSlider'
import { H1, H2 } from '@/ui'

export default function Oasisw() {
  return (
    <ProjectLayout>
      <div className="flex w-full text-title mb-12 gap-6">
        <div className="flex flex-col justify-center">
          <H1 className="font-extrabold text-5xl">OasisW GFaaS</H1>
          <p className="text-3xl">Game Frontend as a Service</p>
        </div>
        <p className="flex justify-center items-center text-3xl">(주)핏펀즈</p>
      </div>
      <ImageSlider
        images={[
          '/oasisw/oasis_1.png',
          '/oasisw/oasis_2.png',
          '/oasisw/oasis_3.png',
          '/oasisw/oasis_4.png',
          '/oasisw/oasis_5.png',
          '/oasisw/oasis_6.png',
          '/oasisw/oasis_7.png',
          '/oasisw/oasis_8.png',
          '/oasisw/oasis_9.png',
          '/oasisw/oasis_10.png'
        ]}
      />
      <div className="w-full mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <div>
          <H2 className="mb-8">서비스 소개</H2>
          <p>
            웹 브라우저를 이용해 게임 서버 인스턴스를 생성해주고 게임 서버
            기능을 관리 및 운영할 수 있게 도와주는 클라우드 기반 개발도구입니다.
          </p>
        </div>
        <div>
          <H2 className="mb-8">작업 기간</H2>
          <p>2024. 05. 16 - 2024. 05. 31 도메인 및 업무 파악</p>
          <p>2024. 06. 01 - 2024. 08. 15 프로젝트 초기 환경설정 및 배포</p>
        </div>
        <div>
          <H2 className="mb-8">기술 스택</H2>
          <p>
            Next.js, TanStack-Query, TailwindCSS, shadcnUI, Apex Charts,
            Zustand, json-editor, monaco-editor, DynamoDB
          </p>
        </div>
        <div>
          <H2 className="mb-8">팀 구성</H2>
          <p>FE 1, BE 1, CTO (총 3명)</p>
          <p>담당: 프론트엔드 개발자(FE)</p>
        </div>
      </div>
      <div className="w-full flex flex-col flex-start mt-16">
        <H2 className="mb-8">역할</H2>
        <p>- Next.js로 개발환경 세팅부터 사이트 배포까지 완성</p>
        <p>- Frontend용 Lambda 서버 구축</p>
        <p>- OAuth 로그인 구현 (DynamoDB를 활용하여 3개의 access token 관리)</p>
        <p>- Tanstack Query를 활용한 비동기 요청 관리 및 서버사이드 렌더링</p>
        <p>- Zustand를 활용하여 비동기 요청을 제외한 상태 관리</p>
        <p>- Tailwindcss, shadcn을 활용한 디자인 시스템 구축</p>
        <p>- 약 100개의 api 연결 및 기능 추가, 30여개의 페이지 제작</p>
        <p>
          - json-editor, ApexCharts, monaco-editor 등 기능 구현에 필요한
          라이브러리 탐색 및 적용
        </p>
      </div>
    </ProjectLayout>
  )
}
