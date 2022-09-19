import { FEEDBACK_ACTION_TYPES } from "./feedback.type";

const FEEDBACK_INITITALSTATE = {
    feedbacklist:[]
}

export const FeedbackReducer = (state=FEEDBACK_INITITALSTATE, action={}) => {
    const {type, payload} = action
    switch(type){
        case FEEDBACK_ACTION_TYPES.SET_FEEDBACK:
            return {...state, feedbacklist:payload}
        default:
            return state
    }   
}