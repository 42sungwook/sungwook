import { H2 } from '@/ui'
import ProjectList from './ProjectList'

function Project() {
  return (
    <section
      id="PROJECTS"
      className="section bg-background-light dark:bg-background-dark"
    >
      <div className="section-container">
        <H2 className="mb-20 text-center">PROJECTS</H2>
        <ProjectList />
      </div>
    </section>
  )
}

export default Project
