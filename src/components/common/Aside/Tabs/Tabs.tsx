import React, { FC } from "react";

import styles from "./Tabs.module.css";
import TabItem, { ITabItem, ITabItemProps } from "./TabItem/TabItem";

interface ITabs {
  config: ITabItem[];
  onClick: any;
}

const Tabs: FC<ITabs & ITabItemProps> = ({
  config,
  onClick,
  activeTabItem,
}) => {
  return (
    <nav className={styles.tabs}>
      {config.map((tab) => (
        <TabItem
          activeTabItem={activeTabItem}
          className={styles.tabItem}
          key={tab.id}
          id={tab.id}
          title={tab.title}
          onClick={() => onClick(tab.id)}
          icon={tab.icon}
        />
      ))}
    </nav>
  );
};

export default Tabs;
