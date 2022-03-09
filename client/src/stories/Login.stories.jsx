import React from 'react'

import { Login } from '../components/Login'

export default {
    title: 'Login',
    component: Login,
}  

export const Default = () => <Login />

export const Error = () => <Login errorMessage="Incorrect username or password."/>