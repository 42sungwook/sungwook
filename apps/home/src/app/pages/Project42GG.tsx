import React from 'react';
import ProjectLayout from '../components/ProjectLayout';
import ImageSlider from '../components/ImageSlider';
import styles from './project.module.scss';

const projectImages = Array.from(
  { length: 12 },
  (_, i) => `/42gg/42gg_${i + 1}.png`
);

const Project42GG: React.FC = () => {
  const techStack = [
    'Next.js',
    'Recoil',
    'SCSS',
    'MUI',
    'Storybook',
    'Cypress',
  ];

  return (
    <ProjectLayout>
      <div className={styles.projectTitleContainer}>
        <h1 className={styles.projectTitle}>42GG</h1>
      </div>

      <ImageSlider images={projectImages} />

      <div className={styles.projectOverview}>
        <h2 className={styles.overviewTitle}>프로젝트 개요</h2>
        <p className={styles.overviewDescription}>
          42서울 교육생들을 위한 탁구 매칭 및 랭킹 서비스입니다. 실시간 매칭
          시스템과 랭킹 관리를 통해 교육생들이 탁구를 통한 네트워킹과 건전한
          경쟁을 즐길 수 있도록 설계된 웹 서비스입니다.
        </p>
        <div className={styles.overviewHighlight}>
          🏓 42서울 공식 탁구 서비스 • 실시간 매칭 시스템 • 랭킹 및 통계 관리
        </div>
        <a
          href="https://github.com/42organization/42gg.client"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.githubLink}
        >
          GitHub 저장소 보기
        </a>
      </div>

      <div className={styles.projectInfoGrid}>
        <div className={styles.infoSection}>
          <h2>📅 개발 기간</h2>
          <p>
            <strong>2023.01 - 2023.03</strong>
            <br />
            2기 참여 (초기 개발)
          </p>
          <p>
            <strong>2023.04 - 2024.06</strong>
            <br />
            3기 참여 (서비스 확장)
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
            <strong>2기: 총 9명</strong>
          </p>
          <p>• 프론트엔드 4명, 백엔드 4명, 디자이너 1명</p>
          <p>
            <strong>3기: 총 11명</strong>
          </p>
          <p>• 프론트엔드 5명, 백엔드 5명, 디자이너 1명</p>
          <p>
            <strong>담당 역할:</strong> 프론트엔드 개발자
          </p>
        </div>

        <div className={styles.infoSection}>
          <h2>🎯 서비스 특징</h2>
          <p>
            • <strong>실시간 매칭</strong> 탁구 상대 자동 매칭
          </p>
          <p>
            • <strong>랭킹 시스템</strong> 실력별 등급 관리
          </p>
          <p>
            • <strong>관리자 도구</strong> 효율적인 서비스 운영
          </p>
          <p>
            • <strong>E2E 테스트</strong> 안정적인 서비스 품질
          </p>
        </div>
      </div>

      <div className={styles.roleSection}>
        <h2>주요 개발 내용</h2>
        <div className={styles.roleContent}>
          <div className={styles.roleItem}>
            <p>
              <strong>🔧 관리자 페이지 개발 (2기)</strong>
            </p>
            <p className={styles.subItem}>
              • 유저 관리 페이지 및 모달 시스템 구현
            </p>
            <p className={styles.subItem}>• 매칭 테이블 관리 페이지 개발</p>
            <p className={styles.subItem}>• 경기 기록 관리 시스템 구축</p>
          </div>

          <div className={styles.roleItem}>
            <p>
              <strong>🚀 서비스 확장 및 개선 (3기)</strong>
            </p>
            <p className={styles.subItem}>• 신규 팀원 온보딩 프로세스 진행</p>
            <p className={styles.subItem}>• Kakao OAuth 소셜 로그인 추가</p>
            <p className={styles.subItem}>• Cypress E2E 테스트 환경 구축</p>
          </div>

          <div className={styles.roleItem}>
            <p>
              <strong>🔄 시스템 리팩토링 및 유지보수</strong>
            </p>
            <p className={styles.subItem}>
              • 백엔드 API 명세 변경에 따른 상태관리 수정
            </p>
            <p className={styles.subItem}>
              • 디자인 시스템 변경에 따른 CSS 리팩토링
            </p>
            <p className={styles.subItem}>• 성능 최적화 및 사용자 경험 개선</p>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
};

export default Project42GG;
