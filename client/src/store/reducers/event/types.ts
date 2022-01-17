import { IUser } from '../../../models/Iuser';
import { IEvent } from '../../../models/IEvents'


export enum UsersEnum {
    GET_USER = 'GET_USER',
    GET_EVENT = 'GET_EVENT',

}

export interface ISetUsers {
    type: UsersEnum.GET_USER,
    payload: IUser[]
}

export interface ISetEvents {
    type: UsersEnum.GET_EVENT,
    payload: IEvent[]
}
export interface EventState {
    users: IUser[],
    events: IEvent[]
}

export type UserAction = ISetUsers | ISetEvents;
