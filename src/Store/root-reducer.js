import { combineReducers } from "redux";
import { FeedbackReducer } from "./feedback/feedback.reducer";

export const rootReducer = combineReducers({feedback:FeedbackReducer})