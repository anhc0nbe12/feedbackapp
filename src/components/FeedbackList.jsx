import FeedbackItem from './FeedbackItem'
import {motion, AnimatePresence} from 'framer-motion'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
  const {feedbackData, deleteFeedback} = useContext(FeedbackContext)
  return (
    <div className="container py-3 ">
      <AnimatePresence>
        {feedbackData.map((item) => (
          <motion.div key={item.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <FeedbackItem key={item.id} feedbackData={item} deleteFeedback={deleteFeedback}/>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default FeedbackList
