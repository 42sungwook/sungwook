import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
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
      image: '/oasis.png',
    },
    {
      title: '42STAT',
      description:
        '42서울에서 진행한 프로젝트로, 42서울 교육생들의 통계를 보여주는 반응형 대시보드 웹서비스입니다. React와 GraphQL을 사용했으며 42서울 교육생 90% 이상이 사용하는 서비스로 DAU 100명 이상을 기록하고 있습니다.',
      technologies: [
        'React',
        'GraphQL(Apollo Client)',
        'Emotion(Styled Component)',
        'Apex Charts',
        'Jotai',
      ],
      image: '/42stat.png',
      github: 'https://github.com/42Statistics/42Stat-Frontend',
    },
    {
      title: '42GG',
      description:
        '42서울에서 진행한 프로젝트로, 42서울 교육생들을 위한 탁구 매칭 및 랭킹 웹 서비스입니다. Next.JS의 page 기반 라우팅을 사용했으며 관리자 페이지와 유저 페이지를 구분하여 개발했습니다.',
      technologies: [
        'Next.js',
        'Recoil',
        'SCSS',
        'MUI',
        'Story Book',
        'Cypress',
      ],
      image: '/42gg.png',
      github: 'https://github.com/42organization/42gg.client',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <span>GitHub</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
