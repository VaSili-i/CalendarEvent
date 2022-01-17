import { AppDispatch } from "../..";
import { IUser } from "../../../models/Iuser";
import { SetAuthAction, SetErrorAction, SetUserAction, SetLoadingAction, AuthActionEnum } from './types'
import decode from 'jwt-decode'

import axios from "axios";

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({ type: AuthActionEnum.SET_USER, payload: user }),
    setIsAuth: (auth: boolean): SetAuthAction => ({ type: AuthActionEnum.FETCH_USER, payload: auth }),
    setErroe: (error: string): SetErrorAction => ({ type: AuthActionEnum.SET_ERROR, payload: error }),
    setisLoading: (fetch: boolean): SetLoadingAction => ({ type: AuthActionEnum.SET_IS_LOADING, payload: fetch }),
    login: (name: string, password: string) => (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setisLoading(true))
            setTimeout(async () => {

                const response = await axios.post('http://localhost:4000/auth/login', { name, password });
                let token = response.data;
                let user: any = decode(token);
                console.log(user)
                localStorage.setItem('auth', 'true');
                localStorage.setItem('user', user.name as string);
                dispatch(AuthActionCreators.setUser(user))
                dispatch(AuthActionCreators.setIsAuth(true))
                dispatch(AuthActionCreators.setErroe('dont correct login or password'))

                dispatch(AuthActionCreators.setisLoading(false))
            }, 1000)
        } catch (e) {
            dispatch(AuthActionCreators.setErroe('this is error'))
            console.log(3)
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem('auth');
        localStorage.removeItem('user');
        dispatch(AuthActionCreators.setUser({} as IUser));
        dispatch(AuthActionCreators.setIsAuth(false))
    }
}