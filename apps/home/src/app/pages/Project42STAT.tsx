import React from 'react';
import ProjectLayout from '../components/ProjectLayout';
import ImageSlider from '../components/ImageSlider';
import Tooltip from '../components/Tooltip';
import styles from './project.module.scss';

const projectImages = Array.from(
  { length: 14 },
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
        <div className={styles.buttonWrapper}>
          <a
            href="https://github.com/42Statistics/42Stat-Frontend"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            GitHub 저장소 보기
          </a>
          <Tooltip content="42관계자만 회원가입 가능합니다" position="top">
            <a
              href="https://stat.42seoul.kr/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.siteLink}
            >
              사이트 바로가기 ⚠️
            </a>
          </Tooltip>
        </div>
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
            서비스 유지보수
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
            <p className={styles.subItem}>
              • <strong>레퍼런스 없는 UI/UX 디자인 도전:</strong> 데이터 분석과
              입력 폼을 결합한 독특한 UI 요구사항으로 인해 적절한 레퍼런스를
              찾지 못함
            </p>
            <p className={styles.subItem}>
              • <strong>3차례 디자인 갈아엎기:</strong> 동료들의 피드백을
              바탕으로 반복적인 UI/UX 개선을 통해 현재의 직관적인 인터페이스
              완성
            </p>
            <p className={styles.subItem}>
              • <strong>Apex Charts 라이브러리 심화 활용:</strong> 게이지
              차트에서 도넛 차트로 전환하여 더 나은 사용자 경험 제공
            </p>
            <p className={styles.subItem}>
              • <strong>복잡한 정보의 직관적 전달:</strong> 툴팁과 색상 코딩을
              활용해 복잡한 블랙홀 계산 로직을 사용자가 쉽게 이해할 수 있도록
              구현
            </p>
          </div>

          <div className={styles.roleItem}>
            <p>
              <strong>📊 테이블 시스템 및 검색 기능 구현</strong>
            </p>
            <p className={styles.subItem}>
              • <strong>동적 검색 결과 위치 조정:</strong> Table 내 input
              요소에서 발생하는 검색 결과 창의 위치 문제를 해결
            </p>
            <p className={styles.subItem}>
              • <strong>크로스 브라우저 호환성:</strong> Chrome과 Safari 간의
              렌더링 차이를 해결하여 일관된 사용자 경험 제공
            </p>
            <p className={styles.subItem}>
              • <strong>Stack Overflow 기반 문제 해결:</strong> 실무에서
              발생하는 다양한 브라우저 이슈들을 체계적으로 해결
            </p>
          </div>

          <div className={styles.roleItem}>
            <p>
              <strong>📈 활동 내역 시각화 (잔디 UI)</strong>
            </p>
            <p className={styles.subItem}>
              • <strong>GitHub 레퍼런스 기반 설계:</strong> 개발자들에게 친숙한
              인터페이스를 42서울 환경에 맞게 커스터마이징
            </p>
            <p className={styles.subItem}>
              • <strong>스마트 스크롤 시스템:</strong> 컴포넌트 크기 계산을 통한
              자동 스크롤 위치 조정으로 최신 활동 내역 자동 표시
            </p>
            <p className={styles.subItem}>
              • <strong>년도별 데이터 관리:</strong> overflow 속성을 활용한
              효율적인 대용량 데이터 표시 방식 구현
            </p>
          </div>

          <div className={styles.roleItem}>
            <p>
              <strong>🎨 프로필 사진 UI 개선 및 사용자 경험 최적화</strong>
            </p>
            <p className={styles.subItem}>
              • <strong>사용자 피드백 기반 문제 발견:</strong> "두 명 모두 기본
              사진일 때 구분 불가" 피드백을 통한 새로운 아바타 시스템 필요성
              인식
            </p>
            <p className={styles.subItem}>
              • <strong>고유 색상 알고리즘 구현:</strong> 사용자 ID를 기반으로
              한 해시 함수를 통해 각 사용자마다 고유하고 일관된 색상 부여
            </p>
            <p className={styles.subItem}>
              • <strong>접근성 개선:</strong> 라이트/다크 모드에서의 색상 대비를
              고려한 밝기 계산 알고리즘 추가
            </p>
            <p className={styles.subItem}>
              • <strong>로딩 성능 최적화:</strong> 점진적 이미지 로딩 중 아바타
              컴포넌트를 먼저 표시하여 사용자 대기 시간 체감 단축
            </p>
          </div>

          <div className={styles.roleItem}>
            <p>
              <strong>🔧 기술적 성장과 학습</strong>
            </p>
            <p className={styles.subItem}>
              • <strong>라이브러리 이해도 향상:</strong> Apex Charts의 한계를
              파악하고 적절한 차트 타입 선택을 통한 최적의 사용자 경험 구현
            </p>
            <p className={styles.subItem}>
              • <strong>실사용자 서비스 운영 경험:</strong> 실제 사용자들의
              피드백을 받으며 서비스를 개선하는 전체 사이클 경험
            </p>
            <p className={styles.subItem}>
              • <strong>UI/UX 설계 역량 강화:</strong> 복잡한 정보를 직관적으로
              전달하는 인터페이스 설계 능력 향상
            </p>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
};

export default Project42STAT;
