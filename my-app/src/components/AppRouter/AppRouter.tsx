import React, {FC, useEffect} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {PRIVATE_ROUTES, PUBLIC_ROUTES} from "../../constants/routes";
// import {useDispatch, useSelector} from "react-redux";

const AppRouter: FC = () => {
  
    const isAuth = true
   
    return (
            <Routes>
                {isAuth
                    ?
                    PRIVATE_ROUTES.map(({ path, Element, title}) => <Route key={path} path={path} element={<Element title={title} />} />)
                    :
                    PUBLIC_ROUTES.map(({ path, Element, title}) => <Route key={path} path={path} element={<Element title={title} />} />)
                }
                <Route path={"*"} element={<Navigate to={"/main"} replace />} />
            </Routes>
    );
};

export default AppRouter;