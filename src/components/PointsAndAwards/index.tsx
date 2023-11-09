import React from 'react';
import PointsAndAwardsStyles from './style.module.scss';

const PointsAndAwards: React.FC = () => {
  return (
    <div
      className={`${PointsAndAwardsStyles.pointsandawards} ${PointsAndAwardsStyles.pointsandawards_mode}`}
      id='points_awards'
    >
      <div className={`${PointsAndAwardsStyles.pointsandawards__title}`}>Отправка решения</div>
      <div className={`${PointsAndAwardsStyles.pointsandawards__text}`}>
        <b>20 баллов</b> — 1 место (+подарочное издание книги Джона Клиффорда «Иконы графического
        дизайна»)
        <br />
        <br />
        <b>10 баллов</b> — 2-4 место
        <br />
        <br />
        <b>5 баллов</b> — всем участникам
      </div>
    </div>
  );
};

export { PointsAndAwardsStyles };
export default PointsAndAwards;
