export default function ProjectLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="section bg-background-light dark:bg-background-dark">
      <div className="section-container">
        <div className="pt-4 md:px-24 lg:px-32 flex flex-col items-center">
          {children}
        </div>
      </div>
    </div>
  )
}
