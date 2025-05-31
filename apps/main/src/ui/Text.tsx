import clsx from 'clsx'

interface HeadingProps {
  children: React.ReactNode
  className?: string
}

function H1({ children, className }: HeadingProps) {
  return (
    <h1 className={clsx('font-extrabold text-5xl tracking-wider', className)}>
      {children}
    </h1>
  )
}

function H2({ children, className }: HeadingProps) {
  return (
    <h1 className={clsx('text-2xl font-bold tracking-wider', className)}>
      {children}
    </h1>
  )
}

function H3({ children, className }: HeadingProps) {
  return (
    <h2 className={clsx('text-xl font-bold tracking-wider', className)}>
      {children}
    </h2>
  )
}

export { H1, H2, H3 }
