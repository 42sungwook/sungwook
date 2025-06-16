import React from 'react';
import ProjectLayout from '../components/ProjectLayout';
import ImageSlider from '../components/ImageSlider';
import styles from './project.module.scss';

const projectImages = Array.from(
  { length: 16 },
  (_, i) => `/assets/42stat/stat_${i + 1}.png`
);

const Project42STAT: React.FC = () => {
  const techStack = [
    'React',
    'Apollo Client',
    'Emotion',
    'Styled Component',
    'Apex Charts',
    'Jotai',
  ];

  return (
    <ProjectLayout>
      <div className={styles.projectTitleContainer}>
        <h1 className={styles.projectTitle}>42STAT</h1>
      </div>

      <ImageSlider images={projectImages} />

      <div className={styles.projectOverview}>
        <h2 className={styles.overviewTitle}>프로젝트 개요</h2>
        <p className={styles.overviewDescription}>
          42서울 교육생들의 통계를 보여주는 반응형 대시보드 웹서비스입니다.
          실시간 데이터 시각화와 직관적인 UI/UX를 통해 사용자들이 쉽게 정보를
          파악할 수 있도록 설계되었습니다.
        </p>
        <div className={styles.overviewHighlight}>
          🏆 42서울 경진대회 대상 수상작 • 일일 활성 사용자 100명 이상 • 42서울
          교육생 90% 이상 사용
        </div>
        <a
          href="https://github.com/42Statistics/42Stat-Frontend"
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
            <strong>2023.08 - 2023.10</strong>
            <br />
            42서울 경진대회 준비
          </p>
          <p>
            <strong>2023.11 - 2024.04</strong>
            <br />
            신규 서비스 개발
          </p>
          <p>
            <strong>2024.05 - 현재</strong>
            <br />
            서비스 유지보수 및 개선
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
            <strong>총 4명</strong>
          </p>
          <p>• 프론트엔드 개발자 2명</p>
          <p>• 백엔드 개발자 2명</p>
          <p>
            <strong>담당 역할:</strong> 프론트엔드 개발자
          </p>
        </div>

        <div className={styles.infoSection}>
          <h2>📊 서비스 성과</h2>
          <p>
            • <strong>DAU 100명+</strong> 일일 활성 사용자
          </p>
          <p>
            • <strong>90%+</strong> 42서울 교육생 사용률
          </p>
          <p>
            • <strong>대상 수상</strong> 42서울 경진대회
          </p>
          <p>
            • <strong>지속적 운영</strong> 1년 이상 안정적 서비스
          </p>
        </div>
      </div>

      <div className={styles.roleSection}>
        <h2>주요 개발 내용</h2>
        <div className={styles.roleContent}>
          <div className={styles.roleItem}>
            <p>
              <strong>🔥 블랙홀 계산기 신규 서비스 개발</strong>
            </p>
            <p className={styles.subItem}>• 반응형 UI/UX 디자인 설계 및 구현</p>
            <p className={styles.subItem}>• 다크 테마 지원 기능 추가</p>
            <p className={styles.subItem}>
              • Apex Charts 라이브러리 커스터마이징
            </p>
          </div>

          <div className={styles.roleItem}>
            <p>
              <strong>📈 활동 내역 시각화 컴포넌트</strong>
            </p>
            <p className={styles.subItem}>• GitHub 스타일 잔디 UI 구현</p>
            <p className={styles.subItem}>• 인터랙티브 데이터 시각화</p>
            <p className={styles.subItem}>• 성능 최적화 및 반응형 대응</p>
          </div>

          <div className={styles.roleItem}>
            <p>
              <strong>🎨 사용자 경험 개선</strong>
            </p>
            <p className={styles.subItem}>• 프로필 사진 UI 개선 및 최적화</p>
            <p className={styles.subItem}>• 다양한 필터 조건 추가</p>
            <p className={styles.subItem}>• 실시간 랭킹 차트 구현</p>
            <p className={styles.subItem}>• 사용자 피드백 기반 지속적 개선</p>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
};

export default Project42STAT;
