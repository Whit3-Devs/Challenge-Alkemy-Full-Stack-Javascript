import React from 'react';
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs'
import { GrInstallOption} from "react-icons/gr";
import '../assets/css/ListOperation.css';

const ListOperation = ({ allOperations }) => {
  console.log(allOperations)
  return (
    <>
    <div className='container'>

    <table className="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Concept</th>
      <th scope="col">Amount</th>
      <th scope="col">Date</th>
      <th scope="col">Operation</th>
    </tr>
  </thead>
  <tbody>
    {
      allOperations?.map((operation, index)=>{
        return (

          <tr key={index}>
            <th scope="row">{operation.id}</th>
            <td>{operation.concept}</td>
            <td>{operation.amount}</td>
            <td>{operation.date}</td>
            <td>{operation.typeOperation == 'Entry' ? (<><GrInstallOption /> {operation.typeOperation}</>) : (<><BsFillArrowUpCircleFill /> {operation.typeOperation}</>)}</td>
          </tr>
        )
      })
    }
  </tbody>
</table>
    </div>
    </>
  )
}

export default ListOperation