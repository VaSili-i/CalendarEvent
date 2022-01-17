import axios from 'axios'
import { AppDispatch } from '../..'
import { IEvent } from '../../../models/IEvents'
import { UsersEnum, ISetUsers, ISetEvents } from './types'


export const UserEventActionCreators = {
    setUser: (payload: any): ISetUsers => ({ type: UsersEnum.GET_USER, payload }),
    setEvent: (events: IEvent[]): ISetEvents => ({ type: UsersEnum.GET_EVENT, payload: events }),
    fetchUsers: () => async (dispatch: AppDispatch) => {
        try {
            let response = await axios.get('http://localhost:4000/auth/all');
            dispatch(UserEventActionCreators.setUser(response.data))
        } catch (e) {
            console.log(e)
        }
    },
    createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
        try {
            let { data } = await axios.post<IEvent[]>('http://localhost:4000/event', event);
            dispatch(UserEventActionCreators.setEvent(data));
        } catch (e) {
            console.log(e)
        }
    },
    fetchEvents: (username: string,) => async (dispatch: AppDispatch) => {
        try {
            const response = await axios.get('http://localhost:4000/event');
            let json = response.data as IEvent[];

            const currentUserEvents = json.filter(ev => ev.author === username || ev.guest === username)

            dispatch(UserEventActionCreators.setEvent(currentUserEvents));
        } catch (e) {
            console.log(e)
        }
    }
}