import { useState } from 'react'
import styles from './Style.module.scss'

export function Counter() {
  const [count, setCount] = useState<number>(0)

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h1>{count}</h1>
      <button className={styles.counter} onClick={increment}>
        Increment
      </button>
    </>
  )
}
