import { usePageData } from '@rspress/runtime';

interface PageFrontmatter {
  title: string;
  description?: string;
  create_date: string;
  thumbnail?: string;
}

interface RecentPostsProps {
  length?: number;
}

const RecentPosts: React.FC<RecentPostsProps> = ({ length = 5 }) => {
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
    .slice(0, length);

  return (
    <ul>
      <div className="flex flex-col max-w-6xl my-10 px-4">
        {recentPosts.map((post) => (
          <li key={post.routePath} className="relative max-w-4xl pr-50">
            <a href={post.routePath}>
              {post.frontmatter.thumbnail && (
                <img
                  className="absolute top-0 right-0 w-42 h-30"
                  src={post.frontmatter.thumbnail}
                  alt={post.frontmatter.title}
                />
              )}
              <h2>{post.frontmatter.title}</h2>
              <p>{post.frontmatter.description}</p>
            </a>
          </li>
        ))}
      </div>
    </ul>
  );
};

export default RecentPosts;
