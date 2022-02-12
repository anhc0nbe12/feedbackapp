import { useState,useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function RatingSelect({select}) {
  const [selected, setSelected] = useState(5)
  const {feedbackEdit} = useContext(FeedbackContext)
  const handleChange = (e) => {
    setSelected(+e.currentTarget.value)
    select(+e.currentTarget.value)
  }
  useEffect(()=>{
    setSelected(feedbackEdit.item.rate)
  },[feedbackEdit])
  return (
    <ul className="d-flex justify-content-around  ">
      <li>
        <input
          type="radio"
          name="rate"
          className="rounded-circle btn-radio"
          id="btn1"
          value="1"
          onChange={handleChange}
          checked={selected === 1}
        />
        <label htmlFor="btn1">1</label>
      </li>
      <li>
        <input
          type="radio"
          name="rate"
          className="rounded-circle btn-radio"
          id="btn2"
          value="2"
          onChange={handleChange}
          checked={selected === 2}
        />
        <label htmlFor="btn2">2</label>
      </li>
      <li>
        <input
          type="radio"
          name="rate"
          className="rounded-circle btn-radio"
          id="btn3"
          value="3"
          onChange={handleChange}
          checked={selected === 3}
        />
        <label htmlFor="btn3">3</label>
      </li>
      <li>
        <input
          type="radio"
          name="rate"
          className="rounded-circle btn-radio"
          id="btn4"
          value="4"
          onChange={handleChange}
          checked={selected === 4}
        />
        <label htmlFor="btn4">4</label>
      </li>
      <li>
        <input
          type="radio"
          name="rate"
          className="rounded-circle btn-radio"
          id="btn5"
          value="5"
          onChange={handleChange}
          checked={selected === 5}
        />
        <label htmlFor="btn5">5</label>
      </li>
    </ul>
  )
}

export default RatingSelect
