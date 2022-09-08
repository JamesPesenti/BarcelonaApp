import { useState } from 'react'
import GaudiItem from "../Modals/GaudiItem"
import GaudiData from "../GaudiData"

const GaudiList = ({ gaudiInfo }) => {
  return (
    <>
        {gaudiInfo.map((item) => (
          <>
          <GaudiItem 
                key={item.id}
                item={item}
            />  
          </>
        ))}
    </>
  )
}

export default GaudiList