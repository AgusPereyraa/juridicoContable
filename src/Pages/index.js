import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import IndexLayout from '../Layout/IndexLayout/IndexLayout'
import Index from './Index/Index'
import MainLayout from '../Layout/MainLayout/MainLayout'
import Contact from '../Pages/Contact/Contact'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <IndexLayout />,
        children: [
            { path: '/', element: <Index />}
        ]
    },
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '/contact', element: <Contact />}
        ]
    }
])
