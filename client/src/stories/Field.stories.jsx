import { Field } from '../components/Field'

export default {
    title: 'Field',
    component: Field,
}  

export const Default = () => <Field label="Email address" placeholder="Enter email"/>

export const Invalid = () => <Field label="Email address" placeholder="Enter email" invalid/>

export const InvalidFeedback = () => <Field label="Email address" placeholder="Enter email" invalid feedback="Please provide an email address."/>