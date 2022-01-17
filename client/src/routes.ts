import React from "react"
import Login from "./pages/Login"
import Event from "./pages/Event"

export enum RouteNames {
    LOGIN = '/login',
    EVENT = '/'
}
type TRouter = {
    path: string,
    Element: React.ComponentType
}


export const publicRouter: TRouter[] = [
    { path: RouteNames.LOGIN, Element: Login }
]

export const privateRouter: TRouter[] = [
    { path: RouteNames.EVENT, Element: Event }
]