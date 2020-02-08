import { NavObj } from "./navigation.service";

export const allowedRoutes: NavObj[] = [
    {
        to: 'about',
        from: 'home',
        component: 'AboutComponent'
    },
    {
        to: 'home',
        from: 'app',
        component: 'AppComponent'
    },
]