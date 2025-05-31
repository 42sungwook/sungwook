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
    <ul className="flex flex-col max-w-6xl my-10 !px-4">
      {recentPosts.map((post) => (
        <li
          key={post.routePath}
          className="relative max-w-4xl pr-50 py-4 min-h-30 !border-b !border-gray-200"
        >
          <a href={post.routePath}>
            {post.frontmatter.thumbnail && (
              <img
                className="absolute top-4 right-0 w-42 h-30"
                src={post.frontmatter.thumbnail}
                alt={post.frontmatter.title}
              />
            )}
            <h2 className="text-xl font-bold line-clamp-2">
              {post.frontmatter.title}
            </h2>
            <p className="text-sm text-gray-500 line-clamp-2">
              {post.frontmatter.description}
            </p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default RecentPosts;
