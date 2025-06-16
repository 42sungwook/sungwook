import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProjectLayout.module.css';

interface ProjectLayoutProps {
  children: React.ReactNode;
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.projectLayout}>
      <div className="container">
        <div className={styles.projectHeader}>
          <button onClick={() => navigate('/')} className={styles.backButton}>
            홈으로 돌아가기
          </button>
        </div>
        <div className={styles.projectContent}>{children}</div>
      </div>
    </div>
  );
};

export default ProjectLayout;
