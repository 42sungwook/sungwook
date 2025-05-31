import React from 'react';
import RecentPosts from '@/components/RecentPosts';

export const frontmatter = {
  pageType: 'custom',
};

const HomePage: React.FC = () => {
  return (
    <div className="screen">
      <RecentPosts length={10} />
    </div>
  );
};

export default HomePage;
