import { FEEDBACK_ACTION_TYPES } from "./feedback.type";
import { createAction } from "../../utils/createAction";

const addFeedback = (feedbacklist,item) => {
    return [...feedbacklist, item]
}

export const addFeedbackItem = (feedbacklist,item) => {
    console.log(feedbacklist,item)
    const newFeedbacklist = addFeedback(feedbacklist,item);
    console.log(newFeedbacklist,'---------')
    return createAction(FEEDBACK_ACTION_TYPES.SET_FEEDBACK, newFeedbacklist)

}