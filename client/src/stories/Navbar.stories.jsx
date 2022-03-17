import { Navbar } from '../components/Navbar'

export default {
    component: Navbar,
}

export const Default = () => <Navbar text="MY ORDER"/>

export const Bottom = () => <Navbar bottom buttons={buttons}/>

const buttons = [
    {
        label: 'FULL MENU',
        action: () => alert('Full menu button click')
    },
    {
        label: 'MY ORDER',
        action: () => alert('My order button click')
    }
]