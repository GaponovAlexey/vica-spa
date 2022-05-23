import Image from 'next/image'
import React from 'react'

export const HeaderImg = () => {
  return (
    <Image
      width={600}
      height={355}
      src={`/img/2.jpg`}
      alt='logo'
      className='object-cover '
      // priority
    />
  )
}