import React from 'react';
import ProjectLayout from '../components/ProjectLayout';
import ImageSlider from '../components/ImageSlider';
import styles from './project.module.scss';

const projectImages = Array.from(
  { length: 4 },
  (_, i) => `/assets/minesweeper/minesweeper_${i + 1}.png`
);

const ProjectMinesweeper: React.FC = () => {
  const techStack = [
    'React',
    'TypeScript',
    'Redux Toolkit',
    'SCSS Modules',
    'Vite',
  ];

  return (
    <ProjectLayout>
      <div className={styles.projectTitleContainer}>
        <h1 className={styles.projectTitle}>💣 지뢰찾기</h1>
      </div>

      <ImageSlider images={projectImages} />

      <div className={styles.projectOverview}>
        <h2 className={styles.overviewTitle}>프로젝트 개요</h2>
        <p className={styles.overviewDescription}>
          React + TypeScript + Redux Toolkit으로 구현한 클래식 지뢰찾기
          게임입니다. 3가지 난이도를 지원하며, BFS 알고리즘을 활용한 빈 셀 자동
          공개와 React.memo를 통한 렌더링 최적화를 적용했습니다.
        </p>
        <div className={styles.overviewHighlight}>
          🎮 3가지 난이도 지원 • ⚡ React.memo 렌더링 최적화 • 🚀 BFS 알고리즘
          적용
        </div>
        <div className={styles.buttonWrapper}>
          <a
            href="https://github.com/42sungwook/minesweeper"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            GitHub 저장소 보기
          </a>
          <a
            href="https://mine-sweeper-mini.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.siteLink}
          >
            사이트 바로가기
          </a>
        </div>
      </div>

      <div className={styles.projectInfoGrid}>
        <div className={styles.infoSection}>
          <h2>📅 개발 기간</h2>
          <p>
            <strong>2025.07</strong>
            <br />총 3일 소요
          </p>
          <p>
            <strong>실제 개발 시간</strong>
            <br />약 6~7시간
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
            <strong>1인 개발</strong>
          </p>
          <p>• 기획, 디자인, 개발 전체 담당</p>
          <p>• 성능 최적화 및 알고리즘 구현</p>
        </div>

        <div className={styles.infoSection}>
          <h2>🎯 게임 특징</h2>
          <p>
            • <strong>3가지 난이도</strong> 초급/중급/고급
          </p>
          <p>
            • <strong>첫 클릭 보장</strong> 첫 클릭 시 지뢰 안전
          </p>
          <p>
            • <strong>모바일 지원</strong> 터치 및 더블탭 대응
          </p>
          <p>
            • <strong>클래식 UI</strong> 윈도우 95 스타일
          </p>
        </div>
      </div>

      <div className={styles.roleSection}>
        <h2>주요 개발 내용</h2>
        <div className={styles.roleContent}>
          <div className={styles.roleItem}>
            <p>
              <strong>🧠 Redux Toolkit 기반 게임 상태 관리</strong>
            </p>
            <p className={styles.subItem}>
              • 게임 보드, 타이머, 상태 통합 관리
            </p>
            <p className={styles.subItem}>
              • 불변성 보장 및 예측 가능한 상태 변화
            </p>
            <p className={styles.subItem}>
              • 디버깅 도구 연동으로 개발 효율성 향상
            </p>
          </div>

          <div className={styles.roleItem}>
            <p>
              <strong>⚡ 성능 최적화 및 렌더링 개선</strong>
            </p>
            <p className={styles.subItem}>
              • React.memo + useCallback으로 불필요한 리렌더링 90% 감소
            </p>
            <p className={styles.subItem}>
              • SVG → PNG 전환으로 이미지 렌더링 40% 향상
            </p>
            <p className={styles.subItem}>
              • 100×100 대용량 보드에서도 부드러운 동작
            </p>
          </div>

          <div className={styles.roleItem}>
            <p>
              <strong>🔍 BFS 알고리즘 구현</strong>
            </p>
            <p className={styles.subItem}>
              • 빈 셀 자동 공개를 위한 너비 우선 탐색
            </p>
            <p className={styles.subItem}>• 메모리 효율적인 큐 기반 구현</p>
            <p className={styles.subItem}>• 깃발이 설정된 셀 보호 로직 추가</p>
          </div>

          <div className={styles.roleItem}>
            <p>
              <strong>🎮 사용자 경험 최적화</strong>
            </p>
            <p className={styles.subItem}>
              • 첫 클릭 보장 시스템으로 게임 실패 방지
            </p>
            <p className={styles.subItem}>• 모바일 더블탭 깃발 설정 기능</p>
            <p className={styles.subItem}>
              • 영역 열기 기능으로 고급 플레이 지원
            </p>
            <p className={styles.subItem}>
              • 실시간 타이머 및 이모지 상태 표시
            </p>
          </div>
        </div>
      </div>

      <div className={styles.roleSection}>
        <h2>기술적 고민과 해결</h2>
        <div className={styles.roleContent}>
          <div className={styles.roleItem}>
            <p>
              <strong>🤔 알고리즘 선택 고민</strong>
            </p>
            <p className={styles.subItem}>
              • 지뢰 생성: Fisher-Yates vs Set 기반 랜덤
            </p>
            <p className={styles.subItem}>• 빈 셀 공개: DFS vs BFS 탐색</p>
            <p className={styles.subItem}>
              • 최종 선택: BFS + Set 기반 (직관성과 성능 고려)
            </p>
          </div>

          <div className={styles.roleItem}>
            <p>
              <strong>🚀 대용량 보드 렌더링 최적화</strong>
            </p>
            <p className={styles.subItem}>
              • 100×100 보드에서 지뢰 폭발 시 성능 저하 발견
            </p>
            <p className={styles.subItem}>
              • CSS Sprite 기법 적용 → PNG 최적화 단계적 개선
            </p>
            <p className={styles.subItem}>• 벡터 연산 제거로 GPU 가속 활용</p>
          </div>

          <div className={styles.roleItem}>
            <p>
              <strong>📱 모바일 UX 개선</strong>
            </p>
            <p className={styles.subItem}>
              • 터치 디바이스에서 우클릭 대신 더블탭 구현
            </p>
            <p className={styles.subItem}>• 300ms 더블탭 딜레이 최적화</p>
            <p className={styles.subItem}>
              • 반응형 셀 크기 조정으로 터치 정확도 향상
            </p>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
};

export default ProjectMinesweeper;
