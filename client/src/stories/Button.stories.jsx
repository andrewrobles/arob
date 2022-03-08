import React from 'react'

import { Button } from '../components/Button'

export default {
    title: 'Button',
    component: Button,
}  

export const LogIn = () => <Button style="primary">Log In</Button>

export const LogOut = () => <Button style="light">Log Out</Button>