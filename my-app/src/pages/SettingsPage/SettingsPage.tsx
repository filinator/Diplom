import React, {ChangeEventHandler, FC, useEffect, useState} from 'react';

import {PageProps} from "../../types/page";
import PageWrapper from "../../components/common/PageWrapper/PageWrapper";
import SettingsForm, {ISettingsFormProps} from "../../components/common/SettingsForm/SettingsForm";

import {ThemeVariant, useTheme} from "../../context/ThemeContext";



interface ISettingsForm {
    name: string,
    email: string,
    password: string,
    newPassword: string,
    confirmPassword: string
}

const initialISettingsForm = {
    name: "",
    email: "",
    password: "",
    newPassword: "",
    confirmPassword: ""
}

const SettingsPage:FC<PageProps> = () => {

    // @ts-ignore
    const [settingsForm, setSettingsForm] = useState<ISettingsForm>(initialISettingsForm);

    const {theme, setTheme, isLightTheme} = useTheme()
    

    const handleSetTheme = () => {
        theme === ThemeVariant.dark ? setTheme(ThemeVariant.light) : setTheme(ThemeVariant.dark)
    };


    useEffect(() => {
            // @ts-ignore
            setSettingsForm({email : "filinator3000@gmail.com", name : "FILINATOR3000",
                password:"",
                confirmPassword:"",
                newPassword:""})
        }
        , [])

    const handleCancelForm = () => {
        setSettingsForm(initialISettingsForm)
    }


    const handleSetEmail: ChangeEventHandler<HTMLInputElement> = ({target: {value: email }}): void => {
        // setSettingsFormInputError(prevState => ({ ...prevState, email: initialErrorValue }))
        setSettingsForm(prevState => ({...prevState, email}))};

    const handleSetName: ChangeEventHandler<HTMLInputElement> = ({target: {value: name }}): void => {
        // setSettingsFormInputError(prevState => ({ ...prevState, name: initialErrorValue }))
        setSettingsForm(prevState => ({...prevState, name}))};

    const handleSetPassword: ChangeEventHandler<HTMLInputElement> = ({target: {value: password }}): void => {
        // setSettingsFormInputError(prevState => ({ ...prevState, password: initialErrorValue }))
        setSettingsForm(prevState => ({...prevState, password}))};

    const handleSetNewPassword: ChangeEventHandler<HTMLInputElement> = ({target: {value: newPassword }}): void => {
        // setSettingsFormInputError(prevState => ({ ...prevState, password: initialErrorValue }))
        setSettingsForm(prevState => ({...prevState, newPassword}))};

    const handleSetConfirmPassword: ChangeEventHandler<HTMLInputElement> = ({target: {value: confirmPassword }})
        : void => {
        // setSettingsFormInputError(prevState => ({ ...prevState, confirmPassword: initialErrorValue }))
        setSettingsForm(prevState => ({...prevState, confirmPassword}))};

    const settingsFormConfig: ISettingsFormProps = {
        profileInputs: [
            {
                title: "Name",
                id: "name",
                name: "userName",
                value: settingsForm.name,
                onChange: handleSetName,
                placeholder: "Enter your Name",
                required: true,
            },
            {
                title: "Email",
                id: "email",
                name: "userEmail",
                value: settingsForm.email,
                onChange: handleSetEmail,
                placeholder: "Enter your Email",
            },
        ],
        passwordInputs: [
            {
                title: "Password",
                id: "password",
                name: "userPassword",
                value: settingsForm.password,
                onChange: handleSetPassword,
                type: "password",
                placeholder: "Enter your Password",
            },
            {
                title: "New Password",
                id: "newPassword",
                name: "userNewPassword",
                value: settingsForm.newPassword,
                onChange: handleSetNewPassword,
                type: "password",
                placeholder: "New Password",
                required: true,
            },
            {
                title: "Confirm Password",
                id: "confirmPassword",
                name: "userConfirmPassword",
                value: settingsForm.confirmPassword,
                onChange: handleSetConfirmPassword,
                type: "password",
                placeholder: "Confirm your Password",
                required: true,
            }
        ],
        actionButtonCancel: {
            onCancel: handleCancelForm,
            title: "Cancel",
        },
        themeSwitcherOnClick: handleSetTheme,
        condition: theme === ThemeVariant.dark,
        isLightTheme: isLightTheme,
    }

    return (
        <PageWrapper>
            <SettingsForm {...settingsFormConfig} />
        </PageWrapper>
    );
};

export default SettingsPage;
