import React, {FC} from 'react';
import {WithChildren} from "../../../types/withChildren";
import Aside from "../Aside/Aside";

import styles from "./PageWrapper.module.css"
import {ThemeVariant, useTheme} from "../../../context/ThemeContext";

const PageWrapper: FC<WithChildren> = ({children}) => {

    const {theme} = useTheme()


    return (
            <div className={`${styles.pageWrapper}
            ${theme === ThemeVariant.light ? styles.lightPageWrapper : styles.darkPageWrapper}`}>
                <Aside/>
                {children}
            </div>
    );
};

export default PageWrapper;