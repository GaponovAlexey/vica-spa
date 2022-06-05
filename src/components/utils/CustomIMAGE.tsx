import Image from 'next/image'
import React from 'react'

interface img {
  height: number
  width: number
  src: string
  style: string
}

export const CustomIMAGE = ({ style, width, height, src }: img) => {
  return (
    <Image
      width={width}
      height={height}
      src={src}
      alt='logo'
      quality={100}
      className={style}
      priority
    />
  )
}
