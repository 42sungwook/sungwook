import React from 'react';
import ProjectLayout from '../components/ProjectLayout';
import ImageSlider from '../components/ImageSlider';
import styles from './project.module.scss';

const projectImages = Array.from(
  { length: 10 },
  (_, i) => `/oasis/oasis_${i + 1}.png`
);

const ProjectOasis: React.FC = () => {
  const techStack = [
    'Next.js',
    'TanStack Query',
    'TailwindCSS',
    'shadcn/ui',
    'Apex Charts',
    'Zustand',
    'Monaco Editor',
    'DynamoDB',
  ];

  return (
    <ProjectLayout>
      <div className={styles.projectTitleContainer}>
        <h1 className={styles.projectTitle}>OasisW GFaaS</h1>
        <div className={styles.projectVersion}>Game Frontend as a Service</div>
      </div>

      <ImageSlider images={projectImages} />

      <div className={styles.projectOverview}>
        <h2 className={styles.overviewTitle}>프로젝트 개요</h2>
        <p className={styles.overviewDescription}>
          웹 브라우저를 이용해 게임 서버 인스턴스를 생성하고 게임 서버 기능을
          관리 및 운영할 수 있게 도와주는 클라우드 기반 개발도구입니다.
          개발자들이 쉽게 게임 서버를 배포하고 관리할 수 있는 통합 플랫폼을
          제공합니다.
        </p>
        <div className={styles.overviewHighlight}>
          ☁️ 클라우드 기반 게임 서버 관리 • 실시간 모니터링 • 자동 배포 시스템
        </div>
      </div>

      <div className={styles.projectInfoGrid}>
        <div className={styles.infoSection}>
          <h2>📅 개발 기간</h2>
          <p>
            <strong>2024.05.16 - 2024.05.31</strong>
            <br />
            도메인 및 업무 파악
          </p>
          <p>
            <strong>2024.06.01 - 2024.08.15</strong>
            <br />
            프로젝트 개발 및 배포
          </p>
        </div>

        <div className={styles.infoSection}>
          <h2>🛠 기술 스택</h2>
          <div className={styles.techStack}>
            {techStack.map((tech, index) => (
              <span key={index} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.infoSection}>
          <h2>👥 팀 구성</h2>
          <p>
            <strong>총 3명</strong>
          </p>
          <p>• 프론트엔드 개발자 1명</p>
          <p>• 백엔드 개발자 1명</p>
          <p>• CTO 1명</p>
          <p>
            <strong>담당 역할:</strong> 프론트엔드 개발자
          </p>
        </div>

        <div className={styles.infoSection}>
          <h2>🏢 회사 정보</h2>
          <p>
            • <strong>(주)핏펀즈</strong> 스타트업
          </p>
          <p>
            • <strong>게임 인프라</strong> 전문 기업
          </p>
          <p>
            • <strong>클라우드 서비스</strong> 개발
          </p>
          <p>
            • <strong>B2B 솔루션</strong> 제공
          </p>
        </div>
      </div>

      <div className={styles.roleSection}>
        <h2>주요 개발 내용</h2>
        <div className={styles.roleContent}>
          <div className={styles.roleItem}>
            <p>
              <strong>🚀 풀스택 개발 환경 구축</strong>
            </p>
            <p className={styles.subItem}>
              • Next.js 개발환경 세팅부터 배포까지 완성
            </p>
            <p className={styles.subItem}>• Frontend용 Lambda 서버 구축</p>
            <p className={styles.subItem}>• AWS 인프라 설계 및 배포 자동화</p>
          </div>

          <div className={styles.roleItem}>
            <p>
              <strong>🔐 인증 및 상태 관리 시스템</strong>
            </p>
            <p className={styles.subItem}>
              • OAuth 로그인 구현 (DynamoDB 활용)
            </p>
            <p className={styles.subItem}>• 3개의 access token 관리 시스템</p>
            <p className={styles.subItem}>• TanStack Query 비동기 요청 관리</p>
            <p className={styles.subItem}>• Zustand 전역 상태 관리</p>
          </div>

          <div className={styles.roleItem}>
            <p>
              <strong>🎨 UI/UX 및 기능 개발</strong>
            </p>
            <p className={styles.subItem}>
              • TailwindCSS, shadcn/ui 디자인 시스템 구축
            </p>
            <p className={styles.subItem}>• 약 100개의 API 연결 및 기능 구현</p>
            <p className={styles.subItem}>• 30여개의 페이지 제작</p>
            <p className={styles.subItem}>
              • json-editor, ApexCharts, monaco-editor 통합
            </p>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
};

export default ProjectOasis;
