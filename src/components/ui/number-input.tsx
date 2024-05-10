'use client'

import {useState} from 'react'

interface Props {
  initialValue?: number
}

const NumberInput: React.FC<Props> = ({initialValue = 1}) => {
  const [value, setValue] = useState<number>(initialValue)

  const updateValue = (newValue) => setValue(Math.max(1, newValue))
  const controlStyles = 'px-3 py-1.5 text-custom-primary text-2xl font-book'

  return (
    <div className="flex items-center overflow-hidden text-lg border-2 rounded-md backdrop-blur-sm border-custom-primary">
      <button className={controlStyles} onClick={() => updateValue(value - 1)}>
        -
      </button>
      <input className="w-full h-full text-center bg-transparent border-none outline-none font-book text-custom-primary placeholder:text-custom-primary" value={value} onChange={(e) => updateValue(parseInt(e.target.value) || 1)} />
      <button className={controlStyles} onClick={() => updateValue(value + 1)}>
        +
      </button>
    </div>
  )
}

export {NumberInput}
