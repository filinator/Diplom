import React, {FC, useMemo} from 'react';
import {PageProps} from "../../../types/page";
import {WithChildren} from "../../../types/withChildren";
import Aside from "../Aside/Aside";

import styles from "./PageWrapper.module.css"

const PageWrapper: FC<WithChildren> = ({children}) => {

    // const {theme} = useTheme()


    return (
            <div className={`${styles.pageWrapper}
                ${styles.darkPageWrapper}`}>
                <Aside/>
                {children}
            </div>
    );
};

export default PageWrapper;