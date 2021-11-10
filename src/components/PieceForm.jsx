import React, { useState } from 'react'
import PieceMaping from './PieceMaping'

export default function PieceForm({AddHandler,pieceData,SetpieceData}) {

    const [InputData,SetInputData] = useState ({
        id : '' ,
        Name : '' , 
        img : '', 
    }) 


    const nameHandler = (e) => {
        const value = e.target.value
        SetInputData({...InputData, Name : value })
    } 


    const ImgHandler = (e) => {
        const value = e.target.value

        SetInputData({...InputData, img : value })

    }




    const handlerSubmit = (e) => {
       e.preventDefault()

      

          AddHandler({
              ...InputData ,
              id : Math.round(Math.random() *1000), 
          }) 


          SetInputData({ ...InputData, Name : '' , img : ''})

    }




    return (
        <div>
            <h1> One piece Charcter </h1> 

            <form onSubmit={handlerSubmit}>  

                    <input type="text" placeholder='charcter Name' value={InputData.Name} onChange={nameHandler}  />

                    <input type="text" placeholder=' charcter Imag' value={InputData.img} onChange={ImgHandler}  /> 

                    <button type ='submit'> Add one piece charcter </button>  

             </form> 

             <PieceMaping  pieceData={pieceData}  SetpieceData={SetpieceData}   /> 
        </div>
    )
}
