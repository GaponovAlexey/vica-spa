import { useAppSelector } from '../../redux'

export const About = () => {
  const lang = useAppSelector((state) => state.lang.language)
  return (
    <div>
      {lang
        ? `My name is Victoria and I most of all I love to see the results of my work.
        I started in profession in 2014.
        Finished more than 20 courses.
        Did more than 6000 procedures.
        In spite of that I'm not burnout emotionally because:
        I love what I'm doing, I always grow as a professional, I work in different  areas. 
        Now I'm getting my second high education in psychology. 
        By the way, my first education is English teacher 🙃
        On this site you can find some information about my services and answers to your questions about particular problems. 
        You can  make an appointment here.`
        : `Меня зовут Виктория и я обожаю видеть плоды своей работы. В профессии
          с 2014 года. Прошла более 20 курсов Провела больше 6000 процедур Не
          выгораю по трём причинам: Очень люблю то, чем занимаюсь; Постоянно
          развиваюсь; Работаю в разных направлениях. Получаю второе высшее
          образование по специальности "психолог" По первому образованию
          "учитель английского" так что май инглиш из квайт вэл🙃 На этом сайте
          вы сможете увидеть то, чем я могу быть вам полезна, и, возможно, найти
          некоторые ответы на свои вопросы по конкретным проблемам. Записаться
          на процедуру можно `}{' '}
      <span></span>
    </div>
  )
}
