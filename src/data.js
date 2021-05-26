import {About} from './components/About'
import {Contacts} from './components/Contacts'
import {Home} from './components/Home'

export const data = [
    {
        route: '/about',
        exact: true,
        name: 'О нас',
        component: About
    },
    {
        route: '/contacts',
        name: 'Контакты',
        component: Contacts
    },
    {
        route: '/',
        exact: true,
        name: 'Главная',
        component: Home
    },

]