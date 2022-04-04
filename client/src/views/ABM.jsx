import React, { useEffect } from 'react';
import FormOperation from '../components/FormOperation';
import { useSelector, useDispatch } from 'react-redux';
import {getOperationsFromAPI} from '../store/actions/index'
import AllListOperations from '../components/AllListOperations';

const ABM = () => {
  const {operations} = useSelector(state => state.operations);
  const {loading} = useSelector(state => state.loading);
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getOperationsFromAPI())
  }, [])
  return (
    <>

    <div className='w-100 h-50 d-flex flex-column justify-content-center align-items-center'>
      <FormOperation />
    </div>
      <div className='w-100 h-50 d-flex flex-column justify-content-center align-items-center'>
      { loading ?
      (

        <div className="spinner-border text-primary" role="status" style={{width: "15rem", height: "1rem"}}>
          <span className="visually-hidden">Loading...</span>
        </div>

      ) :
      (
        <>
          <AllListOperations opreationsArray={operations} />
        </>
      )
    }

    </div>
    </>
  )
}

export default ABM