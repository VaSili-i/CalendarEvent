import { BooleanLiteral } from "typescript";
import { IUser } from "../../../models/Iuser";

export enum AuthActionEnum {
    FETCH_USER = 'FETCH_USER',
    SET_ERROR = 'SET_ERROR',
    SET_USER = 'SET_USER',
    SET_IS_LOADING = 'SET_IS_LOADING'
}
export interface IDefaultUser {
    isAuth: boolean;
    user: IUser;
    isLoading: boolean;
    error: string;

}

export interface SetAuthAction {
    type: AuthActionEnum.FETCH_USER;
    payload: boolean
}

export interface SetErrorAction {
    type: AuthActionEnum.SET_ERROR;
    payload: string
}

export interface SetUserAction {
    type: AuthActionEnum.SET_USER;
    payload: IUser
}

export interface SetLoadingAction {
    type: AuthActionEnum.SET_IS_LOADING;
    payload: boolean
}



export type AuthAction =
    SetAuthAction |
    SetErrorAction |
    SetLoadingAction |
    SetUserAction

