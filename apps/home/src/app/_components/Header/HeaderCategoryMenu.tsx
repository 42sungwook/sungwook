'use client'

import { useMemo, useState, useCallback } from 'react'
import HeaderCategoryItem from './HeaderCategoryItem'
import { CATEGORIES } from '@/constants/category'
import Image from 'next/image'
import { useDevice } from '@/hooks/device'

function HeaderCategoryMenu({ initialDevice }: { initialDevice: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const device = useDevice({ initialDevice: initialDevice })
  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), [])

  const categories = useMemo(
    () =>
      CATEGORIES.map(({ link, label }) => (
        <div
          key={label}
          className="p-4"
        >
          <HeaderCategoryItem
            link={link}
            label={label}
            onClick={() => toggleMenu()}
          />
        </div>
      )),
    [toggleMenu]
  )

  if (device !== 'mobile') {
    return <nav className="flex">{categories}</nav>
  }

  return (
    <>
      <div
        className="flex items-center cursor-pointer w-30 h-12"
        onClick={toggleMenu}
      >
        <Image
          src="/hamburger.svg"
          alt="menu"
          width={24}
          height={24}
        />
      </div>
      <nav
        className={`
          absolute top-24 left-0 right-0 bg-white dark:bg-gray-900 backdrop-blur-md
          ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
          overflow-hidden transition-all duration-300 ease-in-out
        `}
      >
        {categories}
      </nav>
    </>
  )
}

export default HeaderCategoryMenu
