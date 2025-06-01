export const PROJECTS = [
  {
    id: 'oasisw',
    imageSrc: '/oasisw/oasisw.svg',
    imageAlt: 'oasisw-project',
    title: 'OasisW - (주)핏펀즈',
    description:
      '웹 브라우저를 이용해 게임 서버 인스턴스를 생성해주고 게임 서버 기능을 관리 및 운영할 수 있게 도와주는 클라우드 기반 개발도구입니다. 초기 프로젝트 설정부터 배포까지 Next.JS로 개발했습니다.',
    link: '/oasisw'
  },
  {
    id: '42stat',
    imageSrc: '/42stat/42stat.svg',
    imageAlt: '42stat-project',
    title: '42STAT',
    description:
      '42서울에서 진행한 프로젝트로, 42서울 교육생들의 통계를 보여주는 반응형 대시보드 웹서비스입니다. React와 GraphQL을 사용했으며 42서울 교육생 90% 이상이 사용하는 서비스로 DAU 100명 이상을 기록하고 있습니다.',
    link: '/42stat'
  },
  {
    id: '42gg',
    imageSrc: '/42gg/42gg.svg',
    imageAlt: '42gg-project',
    title: '42GG',
    description:
      '42서울에서 진행한 프로젝트로, 42서울 교육생들을 위한 탁구 매칭 및 랭킹 웹 서비스입니다. Next.JS의 page 기반 라우팅을 사용했으며 관리자 페이지와 유저 페이지를 구분하여 개발했습니다.',
    link: '/42gg'
  }
] as const
