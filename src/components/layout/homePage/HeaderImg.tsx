import Image from 'next/image'
import React from 'react'

export const HeaderImg = () => {
  return (
    <Image
      width={1080}
      height={555}
      src={`/img/2.jpg`}
      alt='logo'
      priority
      className='object-cover bg-red-200  border-radius-[5px] pt-5'
    />
  )
}
