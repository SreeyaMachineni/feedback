import { createContext,useState } from "react";

export const FeedbackContext = createContext()

export const FeedbackContextProvider = ({children}) => {
    const [feedbacklist, setFeedbacklist] = useState([])
    const feedbackCount = feedbacklist.length

    const addFeedback = (feedbackItem)=>{
        setFeedbacklist([...feedbacklist, feedbackItem])
    }

    const value = {feedbacklist,addFeedback,feedbackCount}

    return (
        <FeedbackContext.Provider value={value}>
            {children}  
        </FeedbackContext.Provider>
    )
    
}