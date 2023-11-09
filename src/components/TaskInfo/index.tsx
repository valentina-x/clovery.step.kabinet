import React from 'react';
import TaskInfoStyles from './style.module.scss';
import PaperClipSVG from '/public/images/svg/s_paperclip.svg';
import FileSVG from '/public/images/svg/s_file.svg';

const TaskInfo: React.FC = () => {
  return (
    <div className={`${TaskInfoStyles.taskinfo}`} id='task_description'>
      <div className={`${TaskInfoStyles.taskinfo__header}`}>
        <div
          className={`${TaskInfoStyles.taskinfo__category} ${TaskInfoStyles.taskinfo__category_graph}`}
        >
          Граф. дизайн
        </div>
        <div className={`${TaskInfoStyles.taskinfo__dates}`}>
          <span>Приём работ:</span>
          <div className={`${TaskInfoStyles.taskinfo__dates_elements}`}>
            <span>01.10.2023</span> - <span>25.10.2023</span>
          </div>
        </div>
      </div>
      <h1 className={`${TaskInfoStyles.taskinfo__title}`}>Логотип для проекта «Кловери.Шаг»</h1>
      <div className={`${TaskInfoStyles.taskinfo__text}`}>
        <b>Полное название сервиса:</b> Шаг <br />
        <b>Главная идея:</b> развитие начинающих специалистов через конкурсы от реальных заказчиков{' '}
        <br />
        <b>Целевая аудитория:</b> начинающие IT-специалисты и заказчики <br />
        <b>Цветовое решение:</b> любое, можно использовать цвета основного логотипа Кловери <br />
        <b>Изображения и символы:</b> будет плюсом, если в лого получится использовать фигуру
        треугольника
        <br />
        <b>Предпочтения по визуалу:</b> простая геометрия и базовые формы, логотип должен передавать
        легкое и дружелюбное настроение, символизировать рост / развитие / ШАГ <br />
        <b>Где будет использоваться:</b> онлайн-платформа, лендинги, обложки тг-каналов, соц. сети,
        портфолио участников, сертификаты и т. п. <br />
        <b>Дополнительно:</b> вы можете предложить любые визуальные образы по своим представлениям о
        Шаге, так как вы уже являетесь целевой аудиторией проекта.
        <a
          href='https://www.figma.com/file/ZDoL0HzSN4JqfCqQeRpVNY/%D0%A8%D0%B0%D0%B3%2C-7-%D0%B9-%D0%BF%D0%BE%D1%82%D0%BE%D0%BA?type=design&node-id=220%3A2165&mode=design&t=UjQnpEArAykrGDGP-1'
          target='_blank'
        >
          https://www.figma.com/file/ZDoL0HzSN4JqfCqQeRpVNY/%D0%A8%D0%B0%D0%B3%2C-7-%D0%B9-%D0%BF%D0%BE%D1%82%D0%BE%D0%BA?type=design&node-id=220%3A2165&mode=design&t=UjQnpEArAykrGDGP-1
        </a>
      </div>
      <div className={`${TaskInfoStyles.taskinfo__files}`}>
        <div className={`${TaskInfoStyles.taskinfo__files_title}`}>
          <PaperClipSVG />
          <span>Вложения</span>
        </div>
        <a className={`${TaskInfoStyles.taskinfo__files_item}`} href='#'>
          <FileSVG />
          <div>
            <span>Цвета кловери.pdf</span>
            <span>500.07 KB</span>
          </div>
        </a>
        <a className={`${TaskInfoStyles.taskinfo__files_item}`} href='#'>
          <FileSVG />
          <div>
            <span>Пожелания заказчика.png</span>
            <span>100.06 KB</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export { TaskInfoStyles };
export default TaskInfo;
