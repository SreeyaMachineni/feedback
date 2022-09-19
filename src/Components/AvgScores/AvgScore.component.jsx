import { useContext } from "react"
import { FeedbackContext } from "../../Contexts/Feedback.context"

const AvgScore = () => {

    const {feedbackCount} = useContext(FeedbackContext)

    return (
        <div>Avg Score {feedbackCount}</div>

    )
}

export default AvgScore