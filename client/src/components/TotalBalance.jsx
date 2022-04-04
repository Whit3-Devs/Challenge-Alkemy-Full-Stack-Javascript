import React, { useEffect, useRef, useState } from 'react'

const TotalBalance = ({allOperations}) => {

    let balance = onLoadOperations(allOperations);

    function onLoadOperations(arrayOperations) {
        let total = 0;
        if(arrayOperations.length > 0){
            for (const value of arrayOperations) {
                value.typeOperation === 'entry' ? total = total + parseFloat(value.amount) : total = total - parseFloat(value.amount);
            }
        }
        return total
    }

  return (
        <div className='w-100 h-50 d-flex flex-column justify-content-center align-items-center'>
            <h1 className='text-muted fs-1'>Total Balance:</h1>
            <h3 className='text-success fs-2'>{balance}</h3>
        </div>
  )
}

export default TotalBalance