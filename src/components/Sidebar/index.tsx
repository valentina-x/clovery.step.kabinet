import React from 'react';
import SidebarStyles from './style.module.scss';

const Sidebar: React.FC = () => {
  // el.classList.add(`${SidebarStyles.sidebar_close}`)
  return (
    <>
      <aside className={`${SidebarStyles.sidebar} `}>SIDEBAR</aside>
      <h1>Hello</h1>
    </>
  );
};

export { SidebarStyles };
export default Sidebar;
