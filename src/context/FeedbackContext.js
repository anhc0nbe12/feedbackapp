import { createContext, useState,useEffect } from "react";
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
      const response = await fetch(`/feedback?_sort=id&_order=desc`)
      const data = await response.json()
      setfeedbackData(data)
   }

   const updateFeedback = async (id, updateItem) =>{
      const response = await fetch(`/feedback/${id}`,{
         method: 'PUT',
         headers:{
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(updateItem)
      })
      const data = await response.json()
      setfeedbackData(feedbackData.map((item)=>
         (item.id === id ? {...item ,...data} : item)
      ))
   }
   const deleteFeedback = async (id) => {
      await fetch(`/feedback/${id}`,{
         method: 'DELETE'
      })
      setfeedbackData(feedbackData.filter((item) => item.id !== id))
   }
   const addFeedback = async (newFeedback) => {
      const response = await fetch(`/feedback`, {
         method: 'POST',
         headers: {
            'Content-Type':'application/json'
         },
         body: JSON.stringify(newFeedback)
      })
      const data = await response.json()
      console.log(data)
      setfeedbackData([data, ...feedbackData])
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