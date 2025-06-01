import { Button, H3 } from '@/ui'
import Image from 'next/image'
import type {
  Project,
  ProjectImageProps,
  ProjectDescriptionProps,
  ProjectProps
} from '@/types/project'
import { PROJECTS } from '@/constants/project'

const ProjectImage = ({ src, alt }: ProjectImageProps) => {
  return (
    <div className="w-full relative aspect-[16/9]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 90vw, 50vw"
        priority
        style={{
          objectFit: 'cover'
        }}
      />
    </div>
  )
}

const ProjectDescription = ({
  title,
  description,
  link,
  className = ''
}: ProjectDescriptionProps) => {
  return (
    <div className={`w-full px-4 md:px-12 pt-8 ${className}`}>
      <H3 className="mb-8">{title}</H3>
      <p className="mb-8">{description}</p>
      <Button link={link}>자세히 보기</Button>
    </div>
  )
}

const Project = ({ project, isLast }: ProjectProps) => {
  return (
    <>
      <div className="w-full max-w-[800px] lg:max-w-none mx-auto">
        <ProjectImage
          src={project.imageSrc}
          alt={project.imageAlt}
        />
      </div>
      <ProjectDescription
        title={project.title}
        description={project.description}
        link={project.link}
        className={isLast ? '' : 'mb-24 lg:mb-0'}
      />
    </>
  )
}

function ProjectList() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] lg:gap-20 mb-20">
      {PROJECTS.map((project, index) => (
        <Project
          key={project.id}
          project={project}
          isLast={index === PROJECTS.length - 1}
        />
      ))}
    </div>
  )
}

export default ProjectList
