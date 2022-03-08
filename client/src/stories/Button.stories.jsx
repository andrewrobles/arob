import React from 'react'

import { Button } from '../components/Button'

export default {
    title: 'Button',
    component: Button,
}  

export const LogIn = () => <Button text="Log In" style="primary"/>

export const LogOut = () => <Button text="Log Out" style="light"/>