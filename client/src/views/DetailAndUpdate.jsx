import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getIDOperationFromAPI } from '../store/actions';
import FormUpdateOperation from '../components/FormUpdateOperation';


const DetailAndUpdate = () => {
    let { id } = useParams()
    let {idOperation} = useSelector((state) => state.operations)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getIDOperationFromAPI(id))
    }, [])
    
  return (
    <div className='w-100 h-50 d-flex flex-column justify-content-center align-items-center'>
        <FormUpdateOperation dateOperationId={idOperation}/>
    </div>
  )
}

export default DetailAndUpdate