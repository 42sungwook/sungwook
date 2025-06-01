import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <div className="flex items-center justify-center text-sm bg-black text-white p-8 w-full gap-4">
      <p>© Copyright 2024. Made by Sungwook</p>
      <Link
        target="_blank"
        href="https://github.com/42sungwook/sungwook.dev"
      >
        <Image
          src="/github-logo.svg"
          alt="github-logo"
          width={24}
          height={24}
        />
      </Link>
    </div>
  )
}

export default Footer
