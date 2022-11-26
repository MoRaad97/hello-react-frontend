import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadGreeting } from '../Redux/Greetings_Reducer'

const Greeting = () => {
  const dispatch = useDispatch();

  const randomGreetings = () => {
    dispatch(loadGreeting());
  }

  useEffect(() => {
    randomGreetings()
  }, [])

  const { greeting } = useSelector((state) => state.greetings)

  return (
    <div>

      <p>{greeting}</p>
      <button onClick={() => randomGreetings()}>Generate New Greeting</button>
    </div>
  )
}

export default Greeting