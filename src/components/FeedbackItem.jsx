import Card from './shared/Card'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({feedbackData}) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
  return (
    <>
      <Card textCenter={true} my={2} border={true} borderColor={'dark'}>
        <h3 className="card-title">{feedbackData.rate}</h3>
        <div className="card-body d-inline-flex justify-content-between">
          <p className="card-text">{feedbackData.comment}</p>
          <div className="flex-end">
            <a href="#edit" className="card-link" onClick={() => editFeedback(feedbackData)}>
              edit
            </a>
            <a href="#remove" className="card-link" onClick={() => deleteFeedback(feedbackData.id)}>
              remove
            </a>
          </div>
        </div>
      </Card>
    </>
  )
}

export default FeedbackItem
