import React, {useEffect, useRef, useState} from 'react'

function App() {
  const [value, setValue] = useState('initial')
  const renderCount = useRef(1)
  const inputRef = useRef(null)
  const prevValue = useRef('')
  
  useEffect(() => {
    renderCount.current++
    console.log(inputRef.current.value)
  })

  useEffect(() => {
    prevValue.current = value
  }, [value])

  const focus = () => inputRef.current.focus()

  return (
    <div>
      <h1>Quantity of renders: {renderCount.current}</h1>
      <h2>Prev of renders: {prevValue.current}</h2>
      <input ref={inputRef} type='text' onChange={e => setValue(e.target.value)} value={value} />
      <button className = 'btn btn-success' onClick={focus}>Focus</button>  
    </div>
  );
}

export default App;
