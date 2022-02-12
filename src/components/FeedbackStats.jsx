import {useContext} from "react"
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
   const {feedbackData} = useContext(FeedbackContext)
   const rate = feedbackData.reduce((start, item)=>{
      return start + item.rate
   }, 0) / feedbackData.length
   
  return (
    <div className="container pt-3">
      <div className="d-flex justify-content-between"> 
         <p>{feedbackData.length} totals</p>
         <p>rating: {isNaN(rate) ? '0': rate.toFixed(1) }</p>
      </div>
    </div>
  )
}


export default FeedbackStats
