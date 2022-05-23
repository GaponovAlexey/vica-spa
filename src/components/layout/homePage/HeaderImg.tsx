import Image from 'next/image'
import React from 'react'

export const HeaderImg = () => {
  return (
    <Image
      width={1080}
      height={555}
      src={`/img/2.jpg`}
      alt='logo'
      className='object-cover  border-radius-[5px] pt-5'
      priority
    />
  )
}
