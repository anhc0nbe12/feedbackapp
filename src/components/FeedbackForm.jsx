import { useState } from 'react'
import RatingSelect from './RatingSelect'
import { useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
  const { addFeedback, feedbackEdit, updateFeedback,setfeedbackEdit } = useContext(FeedbackContext)
  const [comment, setComment] = useState('')
  const [rate, setRate] = useState(5)
  const commentChanged = (e) => {
    setComment(e.target.value)
  }
  useEffect(()=>{
    if(feedbackEdit.edit === true){
      setComment(feedbackEdit.item.comment)
      setRate(feedbackEdit.item.rate)
    }
  },[feedbackEdit])
  const handlerAdd = (e) => {
    e.preventDefault()
    const newFeedback = {
      rate,
      comment,
    }
    if(feedbackEdit.edit === true){
      updateFeedback(feedbackEdit.item.id, newFeedback)
    }
    else{
      addFeedback(newFeedback)
    }   
    setfeedbackEdit({
      item:{
        rate:newFeedback.rate,
      },
      edit:false
    })

  }
  return (
    <div className="container py-2 border">
      <form className="form-group" onSubmit={handlerAdd}>
        <h3 className="bg-info text-wrap text-center border">FeedBack Form </h3>
        <RatingSelect select={(selected) => setRate(selected)} />
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Your Comment"
            value={comment}
            onChange={commentChanged}
          />
          <button className="btn btn-outline-info" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default FeedbackForm
