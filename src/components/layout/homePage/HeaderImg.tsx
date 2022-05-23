import Image from 'next/image'
import React from 'react'

export const HeaderImg = () => {
  return (
    <div className='m-auto'>
      <Image
        width={1080}
        height={544}
        src={`/img/2.jpg`}
        alt='logo'
        priority
        className='object-cover  border-radius-[5px] pt-5'
        // className={css`
        //   object-fit: cover;
        //   object-position: 0px -360px;
        //   border-radius: 5px;
        //   padding-top: 20px;
        //
      />
    </div>
  )
}
