import React, { useState } from 'react'
import pieceDatas from './components/OnePieceData'

import PieceForm from './components/PieceForm'; 

export default function App() { 

  const [pieceData,SetpieceData] = useState(pieceDatas) 



  const AddHandler = (data) => {

    SetpieceData([...pieceData,data])  
    
    console.log(data); 

  } 



  return (
    <div>
      <PieceForm  AddHandler={AddHandler}  SetpieceData={SetpieceData}    pieceData={pieceData}      />
    </div>
  )
}
