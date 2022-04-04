import React, {useRef, useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { putOperationsFromAPI } from '../store/actions'

const FormUpdateOperation = ({dateOperationId}) => {
    const dispatch = useDispatch();
    const {loading} = useSelector(state => state.loading);

    let [form, setForm] = useState({})
    const formValidation = useRef();
    const selectValidation = useRef()
    const [Validation, setValidation] = useState("row g-3 needs-validation");
    const [SelectValidation, setSelectValidation] = useState("form-select")
    let number = 0.00;


  
    useEffect(() => {
        if(dateOperationId.hasOwnProperty('id')){
            setForm(dateOperationId)
        }
    }, [dateOperationId])
    
  
    function onChangeInput(e){
      e.preventDefault()
      
      if(e.target.name === 'typeOperation'){
        setForm({
          ...form,
         typeOperation: e.target.value,
        })
      }
      if(e.target.name === 'amount') {
        number = e.target.value
        number /= 100;
        console.log(number)
        setForm({
          ...form,
        amount: number,
        })
      }
      if(e.target.name === 'concept') {
        setForm({
          ...form,
        concept: e.target.value,
        })
      }
      if(e.target.name === 'date') {
        setForm({
          ...form,
        date: e.target.value,
        })
      }
    }
  
    function onSubmitForm(e) {
      e.preventDefault()
      setValidation(Validation + " was-validated")
      if(selectValidation.current.value === "Entry" || selectValidation.current.value === "Egress"){
        setSelectValidation(SelectValidation + " is-valid")
      } else {
        setSelectValidation(SelectValidation + " is-invalid")
      }
  
      if(form.hasOwnProperty('amount') && form.hasOwnProperty('concept') && form.hasOwnProperty('typeOperation') && form.hasOwnProperty('date')) {
        dispatch(putOperationsFromAPI(form));
      }
  
    }
  
    return (
        <form ref={formValidation} className={Validation} onSubmit={onSubmitForm} style={{marginTop: "10rem", width: "90%"}} noValidate>
          <div className="mb-3">
            <label className="form-label" htmlFor="conceptInput">Concept</label>
            <input value={form.concept} name="concept" type="text" className="form-control" placeholder="concept" id="conceptInput" required onChange={onChangeInput}/>
            <div className="invalid-feedback">
              Please choose a concept.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="amountInput">Amount</label>
            <div className="input-group">
              <span className="input-group-text">$ {form.amount}</span>
              <input value={form.amount} name="amount" type="number" className="form-control" placeholder="0.00" id="amountInput" required onChange={onChangeInput}/>
              <div className="invalid-feedback">
                Please entry a amount.
              </div>
          </div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="dateInput">Date</label>
            <input value={form.date} name="date" type="date" className="form-control" placeholder="date" id="dateInput" required onChange={onChangeInput}/>
            <div className="invalid-feedback">
              Please choose a date.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="typeOperationInput">Type Operation</label>
            <select name="typeOperation" ref={selectValidation} className={SelectValidation} id="typeOperationInput" required onChange={onChangeInput}>
                { form.hasOwnProperty('typeOperation') ? (
                    <>
                        <option selected value="Entry">Entry</option>
                        <option value="Egress">Egress</option>
                    </>
                ) :
                (
                    <>
                    <option value="Entry">Entry</option>
                    <option selected value="Egress">Egress</option>
                    </>
                )

                }
            </select>
          </div>
          { loading ?
          (
            <button className="btn btn-primary" type="button" disabled>
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              <span className="visually-hidden">Loading...</span>
            </button>
          ) : 
          (
            <div className="col-12">
              <button className="btn btn-warning" type="submit">Update Operation</button>
            </div>
          )
  
          }
        </form>
    )
  }

export default FormUpdateOperation