import React from 'react';
import { usePageData } from '@rspress/runtime';

interface PageFrontmatter {
  create_date: string;
  title: string;
}

export const frontmatter = {
  pageType: 'custom',
};

const HomePage: React.FC = () => {
  const pageData = usePageData();
  const recentPosts = pageData.siteData.pages
    .filter((page): page is typeof page & { frontmatter: PageFrontmatter } =>
      Boolean(page.frontmatter?.create_date)
    )
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter.create_date);
      const dateB = new Date(b.frontmatter.create_date);
      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, 5);

  return (
    <div className="screen">
      <ul>
        {recentPosts.map((post) => (
          <li key={post.routePath}>
            <a href={post.routePath}>
              <h3>{post.frontmatter.title}</h3>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
