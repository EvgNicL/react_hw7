
export const loggerMiddleWare = (store) => (next) => (action) => {
  console.log('dispatching: ', action);
  console.log(store);  
  console.log('state до action: ', store.getState());  


  const result = next(action);

  console.log('state после action: ', store.getState()); 
  return result;
}
