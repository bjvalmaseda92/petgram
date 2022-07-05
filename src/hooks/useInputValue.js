import { useState } from 'react'

function useInputValue (initial) {
  const [value, setValue] = useState(initial)

  const onChange = (e) => setValue(e.target.value)
  return { value, onChange }
}

export { useInputValue }
