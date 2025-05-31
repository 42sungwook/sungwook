import ProjectLayout from '@/app/(project)/ProjectLayout'
import ImageSlider from '@/app/_components/ImageSlider'
import { H1, H2 } from '@/ui'
import Link from 'next/link'

export default function FtGG() {
  return (
    <ProjectLayout>
      <div className="flex w-full text-title mb-12 gap-6">
        <H1>42GG</H1>
      </div>
      <ImageSlider
        images={[
          '/42gg/42gg_1.png',
          '/42gg/42gg_2.png',
          '/42gg/42gg_3.png',
          '/42gg/42gg_4.png',
          '/42gg/42gg_5.png',
          '/42gg/42gg_6.png',
          '/42gg/42gg_7.png',
          '/42gg/42gg_8.png',
          '/42gg/42gg_9.png',
          '/42gg/42gg_10.png',
          '/42gg/42gg_11.png',
          '/42gg/42gg_12.png'
        ]}
      />
      <div className="w-full mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <div>
          <H2 className="mb-8">서비스 소개</H2>
          <p>42서울 교육생들을 위한 탁구 매칭 및 랭킹 서비스입니다.</p>
          <Link
            href="https://github.com/42organization/42gg.client"
            target="_blank"
            className="text-blue-500"
          >
            깃허브 링크
          </Link>
        </div>
        <div>
          <H2 className="mb-8">작업 기간</H2>
          <p>2023. 01. - 2023. 03. 2기 참여</p>
          <p>2023. 04. - 2024. 06. 3기 참여</p>
        </div>
        <div>
          <H2 className="mb-8">기술 스택</H2>
          <p>Next.js, Recoil, SCSS, MUI, Story Book, Cypress </p>
        </div>
        <div>
          <H2 className="mb-8">팀 구성</H2>
          <p>2기: FE 4, BE 4, 디자이너 1 (총 9명)</p>
          <p>3기: FE 5, BE 5, 디자이너 1 (총 11명)</p>
          <p>담당: 프론트엔드 개발자(FE)</p>
        </div>
      </div>
      <div className="w-full flex flex-col flex-start mt-16">
        <H2 className="mb-8">역할</H2>
        <p>2기</p>
        <p>- 관리자 페이지 제작</p>
        <p>&emsp;- 유저 관리 페이지 및 모달</p>
        <p>&emsp;- 매칭 테이블 관리 페이지</p>
        <p>&emsp;- 경기 기록 관리 페이지</p>
        <br />
        <p>3기</p>
        <p>- 신규 인원을 위한 온보딩 진행</p>
        <p>- Kakao Oauth 추가</p>
        <p>- Cypress E2E 테스트 추가</p>
        <p>- 백엔드 리팩토링에 따른 API 명세 및 상태관리 수정</p>
        <p>- 디자인 변경에 따른 CSS 수정</p>
      </div>
    </ProjectLayout>
  )
}
