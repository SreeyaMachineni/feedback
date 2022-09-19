import { useState, useContext } from "react"
import { FeedbackContext } from "../../Contexts/Feedback.context"
import { v4 as uuidv4 } from "uuid";

const Feedback = () => {

    const [rating,setRating] = useState()
    const [description,setDescription] = useState()

    const {addFeedback} = useContext(FeedbackContext)

    const descHandler = (e) => {
        setDescription(e.target.value)
    }


    const submitFeedback = (e)=>{
        e.preventDefault()
        addFeedback({'rating': rating,'description': description, 'id':uuidv4()})
       
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