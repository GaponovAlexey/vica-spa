import Image from 'next/image'
import React from 'react'

export const HeaderImg = () => {
  return (
    <Image
      width={600}
      height={300}
      src={`/img/2.jpg`}
      alt='logo'
      quality={100}
      className='object-cover '
      priority
    />
  )
}
