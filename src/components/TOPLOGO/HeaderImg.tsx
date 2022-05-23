import Image from 'next/image'
import React from 'react'

export const HeaderImg = () => {
  return (
    <Image
      width={1200}
      height={655}
      src={`/img/2.jpg`}
      alt='logo'
      className='object-cover w-1/1'
      // priority
    />
  )
}
