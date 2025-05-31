import { usePageData } from '@rspress/runtime';

interface PageFrontmatter {
  title: string;
  description?: string;
  create_date: string;
  thumbnail?: string;
}

const RecentPosts: React.FC = () => {
  const pageData = usePageData();
  const recentPosts = pageData.siteData.pages
    .filter((page): page is typeof page & { frontmatter: PageFrontmatter } =>
      Boolean(page.frontmatter?.create_date)
    )
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter.create_date);
      const dateB = new Date(b.frontmatter.create_date);
      return dateB.getTime() - dateA.getTime();
    });

  return (
    <ul className="flex flex-col justify-center items-center max-w-6xl w-full my-10 !px-4">
      {recentPosts.map((post) => (
        <li
          key={post.routePath}
          className="relative max-w-4xl w-full pr-50 py-4 min-h-34 !border-b !border-gray-200"
        >
          <a href={post.routePath}>
            {post.frontmatter.thumbnail && (
              <img
                className="absolute top-4 right-0 w-42 h-30"
                src={post.frontmatter.thumbnail}
                alt={post.frontmatter.title}
              />
            )}
            <h2 className="text-xl font-bold mb-2 line-clamp-2">
              {post.frontmatter.title}
            </h2>
            <p className="text-sm text-gray-500 line-clamp-2">
              {post.frontmatter.description}
            </p>
          </a>
          <p className="text-xs text-gray-500 !mt-4">
            {post.frontmatter.create_date}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default RecentPosts;
