import React, {FC} from 'react';

import styles from './TabItem.module.css'

export interface ITabItem {
    id: number
    title: string
    icon?: any
    className?: string
}

export interface ITabItemProps {
    activeTabItem: number
    onClick?: any
}

const TabItem: FC <ITabItem & ITabItemProps> = ({id,title,icon,activeTabItem,onClick, className}) => {
    return (
        <li
            onClick={onClick}
            className={`${styles.tabItem} ${activeTabItem === id ? styles.active : ""}`}
        >
            {icon}
            {title}
        </li>
    );
};

export default TabItem;
