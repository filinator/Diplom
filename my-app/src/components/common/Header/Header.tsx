
import React, {ChangeEvent, FC, FormEvent, useEffect, useMemo, useState} from 'react';


import styles from './Header.module.css'
import {useLocation, useNavigate} from "react-router-dom";
import Search from "./Search/Search";
import Logo from "./Logo/Logo";
import {Routes} from "../../../constants/routes";
import DefaultInfo from "./DefaultInfo/DefaultInfo";
import {useDispatch} from "react-redux";

const Header: FC = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [open, setOpen] = useState<boolean>(false);

    const navigate = useNavigate()
    const location = useLocation()

    const handleSearchQueryChange = async (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        location.search = `?search=${event.target.value}`};

    const handleToggleBurgerMenu = () => setOpen(prevState => !prevState);
    const handleDefaultInfoOnClick = () => navigate(Routes.signIn)
    const handleLogoOnClick = () => navigate(Routes.main)

    const handleSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate(`${Routes.search}?search=${searchQuery}`)
        setSearchQuery("")
    }

    return (
        <header className={`${styles.headerWrapper}`}>
            <Logo onClick={handleLogoOnClick}/>
            <Search query={searchQuery} onChange={handleSearchQueryChange} onSubmit={handleSearch}/> 
            <DefaultInfo onClick={handleDefaultInfoOnClick}/>
        </header>
    );
};

export default Header;
