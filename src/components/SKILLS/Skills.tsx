import s from '../../../styles/css/Home.module.css'
import { CustomIMAGE } from '../utils/CustomIMAGE'
export const Skills = () => {
  return (
    <div className={`${s.layout} ${s.skills}`}>
      <h1>Что можно сделать</h1>
      <div>
        <div className=' '>
          <div className=' p-4'>
            <CustomIMAGE
              src='/img/2.jpg'
              style={'object-cover object-[0_95%] '}
              width={350}
              height={400}
            />
          </div>
          <h2>Масаж</h2>
        </div>
        <div>Педикюр</div>
        <div>Косметология</div>
      </div>
    </div>
  )
}
