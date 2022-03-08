import React from 'react'

import { Button } from '../components/Button'

export default {
    title: 'Button',
    component: Button,
}  

const Template = (args) => <Button {...args}/>

export const Default = Template.bind({
    args: {
        label: 'Log In'
    }
})

export const Logout = Template.bind({
    args: {
        label: 'Log Out'
    }
})