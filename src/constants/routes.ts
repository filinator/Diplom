import {FC} from "react";

import {RouteObject} from "react-router-dom";

import {PageProps} from "../types/page";
import Content from "../pages/ContentPages/ContentPages";
import Main from "../pages/Main/Main";
import SettingsPage from "../pages/SettingsPage/SettingsPage";
import TrendsPage from "../pages/TrendsPage/TrendsPage";
import FavoritesPage from "../pages/FavoritesPage/FavoritesPage";
import SearchPage from "../pages/SearchPage/SearchPage";

// @ts-ignore
export interface IRoute extends RouteObject{
    path: string,
    Element: FC<PageProps>,
    title?: string
}

export enum Routes {
    signIn = "/signin",
    signUp = "/signup",
    main = "/main",
    films= "/films",
    trends = "/trends",
    content = "/main/:id",
    favorites = "/favorites",
    search = "/search-by-keyword",
    settings = "/settings",
    resetPasswordSuccess = "/reset-password/success",
    resetPasswordEmail = "/reset-password",
    resetPassword = "/reset-password/new-password",
}

export const PUBLIC_ROUTES: IRoute[] = [
    {path: Routes.main, Element: Main, title: "Main"},
    {path: Routes.content, Element: Content, title: 'Films'},
    {path: Routes.trends, Element: TrendsPage},
    {path: Routes.favorites, Element: FavoritesPage},
    {path: Routes.settings, Element: SettingsPage, title: "Settings"},
    {path: Routes.search, Element: SearchPage},
]

export const PRIVATE_ROUTES: IRoute[] = [
    ...PUBLIC_ROUTES,
]

