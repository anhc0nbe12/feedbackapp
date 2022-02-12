import { createContext, useState,useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{
   const [feedbackData, setfeedbackData] = useState([])
   const [feedbackEdit, setfeedbackEdit] = useState({
      item: {},
      edit:false
   })
   const editFeedback = (item) => {
      setfeedbackEdit({
         item,
         edit: true
      })
      
   }
   //load API data
   useEffect(()=>{
      feedbackAPI()
   },[])

   // fetch feedback api
   const feedbackAPI = async () =>{
      const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)
      const data = await response.json()
      setfeedbackData(data)
   }

   const updateFeedback = (id, updateItem) =>{
      setfeedbackData(feedbackData.map((item)=>
         (item.id === id ? {...item ,...updateItem} : item)
      ))
   }
   const deleteFeedback = (id) => {
      setfeedbackData(feedbackData.filter((item) => item.id !== id))
    }
   const addFeedback = (newFeedback) => {
      newFeedback.id = uuidv4()
      setfeedbackData([newFeedback, ...feedbackData])
   }
   

   return <FeedbackContext.Provider value={{
      feedbackData,
      feedbackEdit,
      deleteFeedback,
      addFeedback,
      editFeedback,
      setfeedbackEdit,
      updateFeedback,
   }}>
      {children}
   </FeedbackContext.Provider>
}
export default FeedbackContext