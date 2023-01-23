import React, {FC} from 'react';

import {WithChildren} from "../../../types/withChildren";

import styles from "./MainWrapper.module.css";

const MainWrapper: FC<WithChildren> = ({children}) => {
    return (
            <main className={styles.containerWrapper}>
                {children}
            </main>
        );
};

export default MainWrapper;