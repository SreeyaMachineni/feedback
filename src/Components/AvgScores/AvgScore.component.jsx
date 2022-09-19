
import { useSelector } from "react-redux"
import { feedbackCount } from "../../Store/feedback/feedback.selector"

const AvgScore = () => {

    const feedbackCnt = useSelector(feedbackCount)

    return (
        <div>Avg Score {feedbackCnt}</div>

    )
}

export default AvgScore