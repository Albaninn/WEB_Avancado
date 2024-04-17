"use client"
import React, { ReactNode, useState } from "react"
import "./window.css"

const Window = (): ReactNode => {  
    const [open, setOpen] = useState(false)
  // const backgorundColor = isDark ? "#0e4a66" : "#0e4aaa"
  // const textColor = isDark ? "#ffff00" : "#ffffff"

  return (
    <div className="window">
        <h3>{open? "Open":"Closed"}</h3>
      <button className="window-button" onClick={()=>{setOpen(!open)}}>
        Open/Close
      </button>
    </div>
  )
}

export default Window