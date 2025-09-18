import React from 'react';
import ProjectLayout from '../components/ProjectLayout';
import ImageSlider from '../components/ImageSlider';
import styles from './project.module.scss';

const projectImages = Array.from(
  { length: 4 },
  (_, i) => `/assets/gacha3d/gacha3d_${i + 1}.png`
);

const ProjectGacha3D: React.FC = () => {
  const techStack = [
    'React',
    'TypeScript',
    'Three.js',
    '@react-three/fiber',
    '@react-three/cannon',
    'Styled Components',
    'Rsbuild',
  ];

  return (
    <ProjectLayout>
      <div className={styles.projectTitleContainer}>
        <h1 className={styles.projectTitle}>🎲 Gacha 3D</h1>
      </div>

      <ImageSlider images={projectImages} />

      <div className={styles.projectOverview}>
        <h2 className={styles.overviewTitle}>프로젝트 개요</h2>
        <p className={styles.overviewDescription}>
          React + TypeScript + Three.js로 구현한 3D 물리 기반 레이싱 게임입니다.
          Cannon.js 물리 엔진과 React Three Fiber를 활용해 실시간 중력 조절과
          카메라 추적 시스템을 구현했습니다. JSON 기반 맵 시스템으로 다양한 3D
          맵을 자유자재로 생성할 수 있습니다.
        </p>
        <div className={styles.overviewHighlight}>
          🎮 3D 물리 기반 레이싱 • ⚡ 실시간 중력 조절 • 🎯 자동 카메라 추적
        </div>
        <div className={styles.buttonWrapper}>
          <a
            href="https://github.com/42sungwook/gacha-3d"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            GitHub 저장소 보기
          </a>
          <a
            href="https://gacha3d.vercel.app/"
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
            <strong>2025.08</strong>
            <br />
            1차 개발 - 3일 소요
          </p>
          <p>
            <strong>현재 진행형</strong>
            <br /> 다양한 맵, 설정 추가 예정
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
          <p>• 3D 물리 엔진 구현 및 최적화</p>
        </div>

        <div className={styles.infoSection}>
          <h2>🎯 게임 특징</h2>
          <p>
            • <strong>3D 물리 기반</strong> Cannon.js 물리 엔진
          </p>
          <p>
            • <strong>실시간 중력 조절</strong> 약함/보통/지구/강함
          </p>
          <p>
            • <strong>카메라 추적</strong> 가장 낮은 플레이어 자동 추적
          </p>
          <p>
            • <strong>지능형 파싱</strong> "이름*개수" 형식 플레이어 생성
          </p>
        </div>
      </div>

      <div className={styles.roleSection}>
        <h2>주요 개발 내용</h2>
        <div className={styles.roleContent}>
          <div className={styles.roleItem}>
            <p>
              <strong>🌍 React Three Fiber 기반 3D 렌더링</strong>
            </p>
            <p className={styles.subItem}>
              • Three.js를 React 컴포넌트로 추상화한 선언적 3D 구조
            </p>
            <p className={styles.subItem}>
              • OrbitControls와 Physics 시스템 통합 구현
            </p>
            <p className={styles.subItem}>
              • useFrame 훅을 활용한 실시간 애니메이션 처리
            </p>
          </div>

          <div className={styles.roleItem}>
            <p>
              <strong>⚡ Cannon.js 물리 엔진 통합</strong>
            </p>
            <p className={styles.subItem}>
              • useSphere, useBox 훅으로 물리 바디 생성 및 관리
            </p>
            <p className={styles.subItem}>
              • 실시간 위치 구독 시스템으로 플레이어 상태 추적
            </p>
            <p className={styles.subItem}>
              • 질량, 마찰력, 반발력 등 물리 속성 세밀 조정
            </p>
          </div>

          <div className={styles.roleItem}>
            <p>
              <strong>🎨 Styled Components 기반 UI 시스템</strong>
            </p>
            <p className={styles.subItem}>
              • 테마 기반 일관된 디자인 시스템 구축
            </p>
            <p className={styles.subItem}>
              • 3D 캔버스 위 오버레이 UI 컴포넌트 개발
            </p>
            <p className={styles.subItem}>
              • 반응형 디자인으로 다양한 화면 크기 대응
            </p>
          </div>

          <div className={styles.roleItem}>
            <p>
              <strong>🎮 실시간 카메라 추적 시스템</strong>
            </p>
            <p className={styles.subItem}>
              • 가장 낮은 위치 플레이어 자동 감지 및 추적
            </p>
            <p className={styles.subItem}>
              • Vector3 lerp를 활용한 부드러운 카메라 이동
            </p>
            <p className={styles.subItem}>
              • 경주 상황에 따른 카메라 제어 ON/OFF 기능
            </p>
          </div>
        </div>
      </div>

      <div className={styles.roleSection}>
        <h2>핵심 성능 최적화</h2>
        <div className={styles.roleContent}>
          <div className={styles.roleItem}>
            <p>
              <strong>🎯 커스텀 훅 기반 상태 관리</strong>
            </p>
            <p className={styles.subItem}>
              • useRef 기반 상태 관리로 불필요한 리렌더링 방지
            </p>
            <p className={styles.subItem}>
              • api.position.subscribe로 물리 바디 실시간 위치 추적
            </p>
            <p className={styles.subItem}>
              • PlayerData 타입 정의로 타입 안전성 보장
            </p>
          </div>

          <div className={styles.roleItem}>
            <p>
              <strong>🗺️ 동적 맵 시스템 설계</strong>
            </p>
            <p className={styles.subItem}>
              • JSON 기반 맵 정의로 3D 월드 자유자재 구성
            </p>
            <p className={styles.subItem}>
              • mapRegistry 패턴으로 동적 맵 로딩 시스템 구축
            </p>
            <p className={styles.subItem}>
              • 플레이어 시작 위치 자동 계산 알고리즘 구현
            </p>
          </div>

          <div className={styles.roleItem}>
            <p>
              <strong>🚀 지능형 플레이어 파싱 시스템</strong>
            </p>
            <p className={styles.subItem}>
              • "김철수*10" 형식으로 대량 플레이어 생성 지원
            </p>
            <p className={styles.subItem}>
              • 정규표현식 기반 입력 검증 및 파싱
            </p>
            <p className={styles.subItem}>
              • 자동 색상 배정 및 위치 할당 시스템
            </p>
          </div>

          <div className={styles.roleItem}>
            <p>
              <strong>📊 실시간 순위 및 경계 감지</strong>
            </p>
            <p className={styles.subItem}>
              • 완주선 감지 시스템으로 실시간 순위 관리
            </p>
            <p className={styles.subItem}>
              • 경계 이탈 감지로 자동 플레이어 제거
            </p>
            <p className={styles.subItem}>
              • useFrame 최적화로 60fps 안정적 유지
            </p>
          </div>
        </div>
      </div>

      <div className={styles.roleSection}>
        <h2>기술적 고민과 해결</h2>
        <div className={styles.roleContent}>
          <div className={styles.roleItem}>
            <p>
              <strong>
                🤔 맵 시스템 설계: 자유자재로 설정 가능한 Config 구조
              </strong>
            </p>
            <p className={styles.subItem}>
              • 타입 시스템 설계: 컴포넌트별 세분화된 설정 구조
            </p>
            <p className={styles.subItem}>
              • JSON 기반 맵 정의로 3D 좌표 직관적 관리
            </p>
            <p className={styles.subItem}>
              • 동적 맵 로딩 시스템으로 런타임 맵 변경 지원
            </p>
          </div>

          <div className={styles.roleItem}>
            <p>
              <strong>🚀 물리 엔진 성능 최적화</strong>
            </p>
            <p className={styles.subItem}>
              • 물리 바디 수 증가 시 프레임 드롭 현상 발견
            </p>
            <p className={styles.subItem}>
              • useRef 기반 상태 관리로 React 렌더링 사이클 분리
            </p>
            <p className={styles.subItem}>
              • 필요한 순간만 물리 계산 활성화하는 조건부 Physics
            </p>
          </div>

          <div className={styles.roleItem}>
            <p>
              <strong>📱 3D UI/UX 개선</strong>
            </p>
            <p className={styles.subItem}>
              • 3D Text 컴포넌트가 항상 카메라를 바라보도록 구현
            </p>
            <p className={styles.subItem}>
              • 중력 슬라이더로 실시간 물리 법칙 변경 지원
            </p>
            <p className={styles.subItem}>
              • 경주 중/후 카메라 제어 모드 자동 전환 시스템
            </p>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
};

export default ProjectGacha3D;
