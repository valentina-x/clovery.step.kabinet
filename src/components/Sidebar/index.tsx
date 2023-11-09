import React from 'react';
import SidebarStyles from './style.module.scss';
import EnterLeftSVG from '../../assets/images/svg/s_enter-left.svg';
import AllTaskSVG from '../../assets/images/svg/s_default-tasks.svg';
import MyTaskSVG from '../../assets/images/svg/s_mytask-default.svg';
import GiftSVG from '../../assets/images/svg/s_gift.svg';
import RatingSVG from '../../assets/images/svg/s_rating.svg';
import SettingSVG from '../../assets/images/svg/s_settings.svg';
import NotificationSVG from '../../assets/images/svg/s_notification.svg';
import Logo from '../../assets/images/svg/s_logo.svg';

const Sidebar: React.FC = () => {
  return (
    <>
      <aside id='menuIcon' className={`${SidebarStyles.sidebar} ${SidebarStyles.sidebar_open}`}>
        <div className={`${SidebarStyles.sidebar__icon}`}>
          <EnterLeftSVG />
        </div>
        <div className={`${SidebarStyles.sidebar__logo}`}>
          <Logo />
        </div>
        <div className={`${SidebarStyles.sidebar__menu}`}>
          <div className={`${SidebarStyles.sidebar__upper_part}`}>
            <div className={`${SidebarStyles.sidebar__menu_item}`}>
              <AllTaskSVG />
              <div className={`${SidebarStyles.sidebar__menu_item_text}`}>Все задания</div>
            </div>
            <div className={`${SidebarStyles.sidebar__menu_item}`}>
              <MyTaskSVG />
              <div className={`${SidebarStyles.sidebar__menu_item_text}`}>Мои задания</div>
            </div>
            <div className={`${SidebarStyles.sidebar__menu_item}`}>
              <GiftSVG />
              <div className={`${SidebarStyles.sidebar__menu_item_text}`}>Каталог наград</div>
            </div>
            <div className={`${SidebarStyles.sidebar__menu_item}`}>
              <RatingSVG />
              <div className={`${SidebarStyles.sidebar__menu_item_text}`}>Рейтинг</div>
            </div>
          </div>
          <div className={`${SidebarStyles.sidebar__lower_part}`}>
            <div className={`${SidebarStyles.sidebar__menu_item}`}>
              <SettingSVG />
              <div className={`${SidebarStyles.sidebar__menu_item_text}`}>Настройки</div>
            </div>
            <div className={`${SidebarStyles.sidebar__menu_item}`}>
              <NotificationSVG />
              <div className={`${SidebarStyles.sidebar__menu_item_text}`}>Уведомления</div>
            </div>
            <div className={`${SidebarStyles.sidebar__menu_item}`}>
              <img src='/images/user-avatar.jpg'></img>
              <div className={`${SidebarStyles.sidebar__menu_item_user}`}>
                <div className={`${SidebarStyles.sidebar__menu_item_text_user}`}>
                  Логин пользователя
                </div>
                <div className={`${SidebarStyles.sidebar__menu_item_text_cat}`}>категория</div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export { SidebarStyles };
export default Sidebar;
