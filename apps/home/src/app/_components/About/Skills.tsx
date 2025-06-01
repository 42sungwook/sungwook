function Skills({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="px-6 py-2 mb-2 mr-2 text-sm rounded-md bg-gray-200 dark:bg-purple-800 font-semibold gray-800">
      {children}
    </div>
  )
}

export default Skills
