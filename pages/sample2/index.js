import { useState, useRef } from 'react'
const Sample2 = () => {
  const inputRef = useRef('')
  const [value, setValue, current] = useState([])
  const handleClick = e => {
    setValue(inputRef, current, value)
  }
  inputRef.current.value = ''
  return (
    <>
      <input type='text' ref={inputRef} />
      <button onClick={handleClick}>click me</button>
      <ul>
        {value.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    </>
  )
}

export default Sample2
