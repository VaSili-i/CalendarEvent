import { UserAction, UsersEnum, EventState } from './types'


const stateDefault: EventState = {
    users: [],
    events: []
}


export default function (state = stateDefault, action: UserAction): EventState {
    switch (action.type) {
        case UsersEnum.GET_USER:
            return { ...state, users: action.payload }
        case UsersEnum.GET_EVENT:
            return { ...state, events: action.payload }
        default:
            return state
    }
}




