import { IUser } from '../../../models/Iuser'
import { IDefaultUser, AuthAction, AuthActionEnum } from './types'

const defaultState: IDefaultUser = {
    isAuth: false,
    user: {} as IUser,
    isLoading: false,
    error: ''
}

export default function authReducer(state = defaultState, action: AuthAction): IDefaultUser {
    switch (action.type) {
        case AuthActionEnum.FETCH_USER:
            return { ...state, isAuth: action.payload, isLoading: false }
        case AuthActionEnum.SET_USER:
            return { ...state, user: action.payload }
        case AuthActionEnum.SET_ERROR:
            return { ...state, error: action.payload, isLoading: false }
        case AuthActionEnum.SET_IS_LOADING:
            return { ...state, isLoading: action.payload }
        default:
            return state
    }
}