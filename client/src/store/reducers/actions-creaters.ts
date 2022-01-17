import { AuthActionCreators } from "./auth/action-creators";
import { UserEventActionCreators } from "./event/action-creators";

export const allActionCreators = {
    ...UserEventActionCreators,
    ...AuthActionCreators,

}