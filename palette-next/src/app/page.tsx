'use client'
import styles from './page.module.css'
import { ColorPicker, useColor } from 'react-color-palette'
import "react-color-palette/css"
import Quad from '../app/componets/Quad'

export default function Home() {
  const[color, setColor] = useColor("#ffffff");

  return (
    <main className={styles.main}>
      <ColorPicker color={color} onChange={setColor}/>
      <Quad backgroundColor={color.hex} textColor={''}anchorColor={''}buttonColor={''}blob1Color={''}blob2Color={''}/>
      </main>
  )
}
