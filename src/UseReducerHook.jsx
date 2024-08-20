import React, { useReducer } from 'react'

const initialState = {
    name: '',
    email: '',
    password: ''
}

const reducer = (state, action) =>  {
switch (action.type) {
    case 'SET_NAME': 
        return {...state, name : action.payload};
        case 'SET_EMAIL' : 
        return {...state, email: action.payload};
        case 'SET_PASSWORD' : 
        return {...state, password: action.payload};
        case 'RESET' : 
        return initialState;
    default:
        return state
}
}

const UseReducerHook = () => {
    const [state, dispatch] = useReducer(reducer,initialState);

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form Data', state);
      dispatch({type:'RESET'});
    }
    
  return (
    <>
    <h2>UseReducerHook</h2>
    <form onSubmit={handleSubmit}>
        <input type="text" value={state.name} onChange={(e) => dispatch({
            type:'SET_NAME', payload: e.target.value})}  />
        <input type="email" value={state.email}  onChange={(e) => dispatch({
            type:'SET_EMAIL', payload: e.target.value})} />
        <input type="password" value={state.password}  onChange={(e) => dispatch({
            type:'SET_PASSWORD', payload: e.target.value})} />
        <button type='submit'>Submit</button>
        <button onClick={() => dispatch({type: 'RESET'})} >Reset</button>
    </form>
    </>
  )
}

export default UseReducerHook