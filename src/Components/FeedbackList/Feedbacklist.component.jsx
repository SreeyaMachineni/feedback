
// import { FeedbackContext } from "../../Contexts/Feedback.context"
import { useSelector } from "react-redux"
import { feedbacklist } from "../../Store/feedback/feedback.selector"

const Feedbacklist = () => {

    const feedbacklst = useSelector(feedbacklist)
    console.log(feedbacklst)
    return (
        <div>
            {
                feedbacklst?.map((fl)=> (
                    <div key={fl.id}>
                        {fl.rating} - {fl.description}
                    </div>
                )) 
        
            }
        </div>
    )
}

export default Feedbacklist