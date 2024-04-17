'use client'
import styles from './page.module.css'
import useCountStore from './state/CountState'

export default function Home() {
  
  const localCount = useCountStore((state) => state.count)
  const increase = useCountStore((state) => state.increase)

  return (
    <main className={styles.main}>
      <h1>{localCount}</h1>
      <button onClick={() => increase(1)}>Click ME</button>
    </main>
  )
}
