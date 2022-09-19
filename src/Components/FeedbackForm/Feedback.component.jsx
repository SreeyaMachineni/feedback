import { useState } from "react"
import { v4 as uuidv4 } from "uuid";
import { feedbacklist } from "../../Store/feedback/feedback.selector";
import { addFeedbackItem } from "../../Store/feedback/feedback.action";
import { useSelector,useDispatch } from "react-redux";


const Feedback = () => {

    const [rating,setRating] = useState()
    const [description,setDescription] = useState()

 
    const dispatch = useDispatch()
   const feedbcklist = useSelector(feedbacklist)


    const descHandler = (e) => {
        setDescription(e.target.value)
    }


    const submitFeedback = (e)=>{
        e.preventDefault()
        dispatch(addFeedbackItem(feedbcklist, {'rating': rating,'description': description, 'id':uuidv4()}))
       
       
    }

    return (
        <>
            <div>Feedback</div>
            <form onSubmit={submitFeedback}>
                <div>
                    <button type="button" onClick={()=>setRating(1)}>1</button>
                    <button type="button" onClick={()=>setRating(2)}>2</button>
                    <button type="button" onClick={()=>setRating(3)}>3</button>
                    <button type="button" onClick={()=>setRating(4)}>4</button>
                    <button type="button" onClick={()=>setRating(5)}>5</button>
                </div>
                <textarea onChange={descHandler}></textarea>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Feedback