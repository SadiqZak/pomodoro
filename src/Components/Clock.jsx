import React, { useState } from 'react'

export const Clock = () => {
    //call useEffect for every change in second
    const [timer, setTimer] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

  return (
    <div>{timer}</div>
  )
}
