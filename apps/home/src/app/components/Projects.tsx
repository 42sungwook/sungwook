import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Projects.module.scss';

const projects = Object.freeze([
  {
    title: 'Gacha 3D',
    description:
      'React + TypeScript + Three.js로 구현한 3D 물리 기반 레이싱 게임입니다. Cannon.js 물리 엔진과 React Three Fiber를 활용해 실시간 중력 조절과 카메라 추적 시스템을 구현했습니다.',
    technologies: [
      'React',
      'TypeScript',
      'Three.js',
      '@react-three/fiber',
      '@react-three/cannon',
      'Styled Components',
    ],
    image: '/assets/gacha3d.png',
    github: 'https://github.com/42sungwook/gacha-3d',
    detailPage: '/projects/gacha3d',
    sitePage: 'https://gacha3d.vercel.app/',
  },
  {
    title: '지뢰찾기',
    description:
      'React + TypeScript + Redux Toolkit으로 구현한 지뢰찾기 게임입니다. 3가지 난이도를 지원하며, BFS 알고리즘을 활용한 빈 셀 자동 공개와 React.memo를 통한 렌더링 최적화를 적용했습니다.',
    technologies: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'SCSS Modules',
      'Vite',
    ],
    image: '/assets/minesweeper.png',
    github: 'https://github.com/42sungwook/mine_sweeper',
    detailPage: '/projects/minesweeper',
    sitePage: 'https://mine-sweeper-mini.vercel.app/',
  },
  {
    title: '42STAT',
    description:
      '42서울 교육생들의 통계를 보여주는 반응형 대시보드 웹서비스입니다. React와 GraphQL을 사용했으며 42서울 교육생 90% 이상이 사용하는 서비스로 2024년 2월 기준 DAU 100명 이상을 기록하고 있습니다.',
    technologies: [
      'React',
      'GraphQL(Apollo Client)',
      'Emotion(Styled Component)',
      'Apex Charts',
      'Jotai',
    ],
    image: '/assets/42stat.png',
    github: 'https://github.com/42Statistics/42Stat-Frontend',
    detailPage: '/projects/42stat',
  },
  {
    title: '42GG',
    description:
      '42서울 교육생들을 위한 탁구 매칭 및 랭킹 웹 서비스입니다. Next.JS의 page 기반 라우팅을 사용했으며 관리자 페이지와 유저 페이지를 구분하여 개발했습니다.',
    technologies: ['Next.js', 'Recoil', 'SCSS', 'MUI', 'Story Book', 'Cypress'],
    image: '/assets/42gg.png',
    github: 'https://github.com/42organization/42gg.client',
    detailPage: '/projects/42gg',
  },
]);

const Projects: React.FC = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
                <div className={styles.projectTechnologies}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  {project.detailPage ? (
                    <Link
                      to={project.detailPage}
                      className={styles.projectLink}
                    >
                      <span>자세히</span>
                    </Link>
                  ) : null}
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      <span>GitHub</span>
                    </a>
                  ) : null}
                  {project.sitePage ? (
                    <a
                      href={project.sitePage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      <span>Website</span>
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
