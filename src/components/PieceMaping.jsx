import React from 'react'
import PieceCard from './PieceCard'

export default function PieceMaping({pieceData,SetpieceData}) { 


    const deletHandler =(e,ClikedId) => {

        const Delete = pieceData.filter((piece,id) => id !== ClikedId  )

        SetpieceData(Delete)
    }


    return (
        <div>
            {pieceData.map(({Name,...otherprops},id) => (

                    <PieceCard  Name={Name} {...otherprops} key={id}  id={id} deletHandler={deletHandler} />
            ))} 

        </div>
    )
}
