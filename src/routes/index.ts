import { lazy } from 'react';

const HomePage = lazy(() => import("@/app/pages/home"))
const FollowingPage = lazy(() => import("@/app/pages/following"))
const ProfilePage = lazy(() => import("@/app/pages/profile"))
const UploadPage = lazy(() => import("@/app/pages/upload"))

const DefaultLayout = lazy(() => import("@/app/components/Layout/DefaultLayout"))

//Public routes
const publicRoutes = [
    {
        path: '/',
        component: HomePage,
        layout: DefaultLayout
    },
    {
        path: '/following',
        component: FollowingPage,
        layout: DefaultLayout
    },
    {
        path: '/@:nickname',
        component: ProfilePage,
        layout: DefaultLayout
    },
    {
        path: '/upload',
        component: UploadPage,
        layout: null
    },
]

// const privateRoute = [

// ]

export { publicRoutes } 