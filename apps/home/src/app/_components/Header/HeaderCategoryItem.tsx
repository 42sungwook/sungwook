import Link from 'next/link'

function HeaderCategoryItem({
  link,
  label,
  onClick
}: {
  link: string
  label: string
  onClick: () => void
}) {
  return (
    <div
      onClick={onClick}
      className="w-full flex items-center"
    >
      <Link
        href={link}
        className="w-full"
      >
        {label}
      </Link>
    </div>
  )
}

export default HeaderCategoryItem
