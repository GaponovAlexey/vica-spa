import { useAppSelector } from '../../redux'

export const Header = () => {
  const lang = useAppSelector((state) => state.lang.language)

  return (
    <header
      id='home'
      className='fixed h-1/1 w-full max-w-[1080px] left-auto top-0 z-10 '
    >
      <div
        className='
        flex flex-wrap justify-between px-4 py-4 cursor-pointer border-b-2 border-sky-300'
      >
        <li>
          <a href='#home'>{lang ? 'Home' : 'Главная'}</a>
        </li>
        <li>
          <a href='#about'>{lang ? 'About' : 'Обо мне'}</a>
        </li>
        <li>
          <a href='#skills'>{lang ? 'Skills' : 'Услуги'}</a>
        </li>
        <li>
          <a href='#comments'>{lang ? 'Comments' : 'Отзывы'}</a>
        </li>
        <li>
          <a href='#certificates'>{lang ? 'Certificates' : 'Сертификаты'}</a>
        </li>
        <li>
          <a href='#contacts'>{lang ? 'Contacts' : 'Контакты'}</a>
        </li>
      </div>

      {/* <div className='fixed top-[15px]'>
        <svg viewBox='0 0 100 80' width='40' height='40'>
          <rect width='100' height='20' rx='8' />
          <rect y='30' width='100' height='20' rx='8' />
          <rect y='60' width='100' height='20' rx='8' />
        </svg>
      </div> */}
    </header>
  )
}
