import React, { useEffect} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { GrInstallOption} from "react-icons/gr";
import {deleteOperationsFromAPI} from '../store/actions/index'

const AllListOperations = ({ opreationsArray }) => {
    const history = useHistory()
    const dispatch = useDispatch()

  let operationsEntry = [];
  let operationsEgress = [];

    useEffect(() => {

    }, [opreationsArray])
    

  opreationsArray.map((operat) => {
    if (operat.typeOperation === "Entry") {
      operationsEntry.push(operat);
    } else {
      operationsEgress.push(operat);
    }
  });



  function onClickEdit(e){
    e.preventDefault()
    history.push(`/operations/${e.target.id}`)
    console.log(e.target.id)
  }

    function onClickDelete(e){
      e.preventDefault()
      dispatch(deleteOperationsFromAPI(e.target.id))
      console.log(e.target.id)
  }

  return (
    <>
      <div className="container" style={{width: "80%", marginTop: "55rem"}}>
        <h2>Entry</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Concept</th>
              <th scope="col">Amount</th>
              <th scope="col">Date</th>
              <th scope="col">Operation</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {operationsEntry?.map((operation, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{operation.id}</th>
                  <td>{operation.concept}</td>
                  <td>{operation.amount}</td>
                  <td>{operation.date}</td>
                  <td>
                    {operation.typeOperation == "Entry" ? (
                      <>
                        <GrInstallOption /> {operation.typeOperation}
                      </>
                    ) : (
                      <>
                        <BsFillArrowUpCircleFill /> {operation.typeOperation}
                      </>
                    )}
                  </td>
                  <td>
                      <button id={operation.id} onClick={onClickEdit}>
                          Edit

                      </button>
                      <button id={operation.id} onClick={onClickDelete}>
                            Delete
                      </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <h2>Egress</h2>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Concept</th>
              <th scope="col">Amount</th>
              <th scope="col">Date</th>
              <th scope="col">Operation</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {operationsEgress?.map((operation, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{operation.id}</th>
                  <td>{operation.concept}</td>
                  <td>{operation.amount}</td>
                  <td>{operation.date}</td>
                  <td>
                    {operation.typeOperation == "Entry" ? (
                      <>
                        <GrInstallOption /> {operation.typeOperation}
                      </>
                    ) : (
                      <>
                        <BsFillArrowUpCircleFill /> {operation.typeOperation}
                      </>
                    )}
                  </td>
                  <td>
                      <button id={operation.id} onClick={onClickEdit}>
                          Edit

                      </button>
                      <button id={operation.id} onClick={onClickDelete}>
                            Delete
                      </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllListOperations;
