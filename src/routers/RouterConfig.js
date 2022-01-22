import React from 'react'
import Movies from '@/page/Movies'
import NotFound from '@/page/NotFound'
import Home from '@/page/Home'
import Front from "@/page/Front"
import Admin from "@/page/Admin"
import AdminHome from "@/page/Admin/Home"
import AdminStstem from "@/page/Admin/SystemManage"
import AdminUser from "@/page/Admin/UserManage"
import AdminNotFound from "@/page/Admin/NotFound"
import { Redirect } from 'react-router-dom'

export default [
    {
        key: 'admin',
        path: '/admin',
        component: Admin,
        routes: [
            {
                key: 'AdminHome',
                path: '/admin',
                exact: true,
                component: AdminHome
            },
            {
                key: 'AdminStstem',
                path: '/admin/system',
                exact: true,
                component: AdminStstem
            },
            {
                key: 'AdminUser',
                path: '/admin/user',
                exact: true,
                component: AdminUser
            },
            {
                key: 'AdminNotFound',
                path: '/admin/notfound',
                exact: true,
                component: AdminNotFound
            },
        ]
    },
    {
        key: 'front',
        path: '/',
        component: Front,
        routes: [
            {
                key: 'Home',
                path: '/',
                exact: true,
                component: Home
            },
            {
                key: 'movies',
                path: '/movies',
                exact: true,
                component: Movies
            },
            // 实现重定向
            {
                key: 'temp',
                path: '/temp',
                exact: true,
                component: () => {
                    return <Redirect to='./movies' />
                }
            },
            {
                key: 'notfound',
                component: NotFound
            }
        ]
    }
]