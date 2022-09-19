import { useContext } from "react"
import { FeedbackContext } from "../../Contexts/Feedback.context"

const Feedbacklist = () => {

    const {feedbacklist} = useContext(FeedbackContext)
    console.log(feedbacklist)
    return (
        <div>
            {
                feedbacklist?.map((fl)=> (
                    <div key={fl.id}>
                        {fl.rating} - {fl.description}
                    </div>
                )) 
        
            }
        </div>
    )
}

export default Feedbacklist