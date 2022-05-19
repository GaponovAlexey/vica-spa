import Image from 'next/image'
import React from 'react'

export const HeaderImg = () => {
  return (
    <div
      className=''
      // className={css`
      //   @media (max-width: 768px) {
      //     width: 350px;
      //     height: 300px;
      //   }
      //   @media (max-width: 420px) {
      //     width: 350px;
      //     height: 220px;
      //   }
      // `}
    >
      <Image
        width='1333'
        height='444'
        quality='100'
        src='/img/2.jpg'
        alt='logo'
        className='object-cover object-[-360px] border-radius-[5px] pt-5'
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
