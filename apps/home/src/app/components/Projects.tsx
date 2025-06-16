import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Projects.module.scss';

const projects = Object.freeze([
  {
    title: 'OasisW - (주)핏펀즈',
    description:
      '웹 브라우저를 이용해 게임 서버 인스턴스를 생성해주고 게임 서버 기능을 관리 및 운영할 수 있게 도와주는 클라우드 기반 개발도구입니다. 초기 프로젝트 설정부터 배포까지 Next.JS로 개발했습니다.',
    technologies: [
      'Next.js',
      'TanStack-Query',
      'TailwindCSS',
      'shadcnUI',
      'Apex Charts',
      'Zustand',
    ],
    image: '/assets/oasis.png',
    detailPage: '/projects/oasis',
  },
  {
    title: '42STAT',
    description:
      '42서울에서 진행한 프로젝트로, 42서울 교육생들의 통계를 보여주는 반응형 대시보드 웹서비스입니다. React와 GraphQL을 사용했으며 42서울 교육생 90% 이상이 사용하는 서비스로 2024년 2월 기준 DAU 100명 이상을 기록하고 있습니다.',
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
      '42서울에서 진행한 프로젝트로, 42서울 교육생들을 위한 탁구 매칭 및 랭킹 웹 서비스입니다. Next.JS의 page 기반 라우팅을 사용했으며 관리자 페이지와 유저 페이지를 구분하여 개발했습니다.',
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
