import s from '../../../styles/css/Home.module.css'
import { CustomIMAGE } from '../utils/CustomIMAGE'
export const Skills = (size = 'md') => {
  let scale = 350
  if (size === 'sm') scale = 200
  if (size === 'md') scale = 500
  return (
    <div className={`${s.layout} ${s.skills}`}>
      <h1>Что можно сделать</h1>
      <div>
        <div className=' '>
          <div className='p-4'>
            <CustomIMAGE
              src='/img/2.jpg'
              style={'object-cover object-[0_45%] '}
              width={500}
              height={350}
            />
          </div>
          <h2>Масаж</h2>
        </div>
        <div>
          <div className='p-4'>
            <CustomIMAGE
              src='/img/2.jpg'
              style={'object-cover object-[0_45%] '}
              width={500}
              height={350}
            />
          </div>
          Педикюр
        </div>
        <div>
          <div className='p-4'>
            <CustomIMAGE
              src='/img/2.jpg'
              style={'object-cover object-[0_45%] '}
              width={500}
              height={350}
            />
          </div>
          Косметология
        </div>
      </div>
    </div>
  )
}
