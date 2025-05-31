interface Project {
  id: string
  imageSrc: string
  imageAlt: string
  title: string
  description: string
  link: string
}

interface ProjectImageProps {
  src: string
  alt: string
}

interface ProjectDescriptionProps {
  title: string
  description: string
  link: string
  className?: string
}

interface ProjectProps {
  project: Project
  isLast: boolean
}

export type {
  Project,
  ProjectImageProps,
  ProjectDescriptionProps,
  ProjectProps
}
