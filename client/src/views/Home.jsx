import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TotalBalance from '../components/TotalBalance';
import ListOperation from '../components/ListOperation'
import {getOperationsFromAPI, getLatestOperationsFromAPI} from '../store/actions/index'

const Home = () => {

  const {operations} = useSelector(state => state.operations);
  const {latestOperations} = useSelector(state => state.operations);
  const {loading} = useSelector(state => state.loading);
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getOperationsFromAPI())
    dispatch(getLatestOperationsFromAPI(10))
  },[])

  return (
    <>
    { loading ?
      (
        <div className='w-100 h-50 d-flex flex-column justify-content-center align-items-center'>

        <div className="spinner-border text-primary" role="status" style={{width: "15rem", height: "1rem"}}>
          <span className="visually-hidden">Loading...</span>
        </div>
        </div>
      ) :
      (
        <>
          <TotalBalance allOperations={operations} />
          <ListOperation allOperations={latestOperations}/>
        </>
      )
    }
    </>

  )
}

export default Home