// An action is just a plain JavaScript object that tells Redux what you want to do.
// Now these action gets dispatch from our component 
// eg dispacth(showLoader()) or dispatch(hideLoader())
// it becomes like thsi dispatch({type: 'SHOW_LOADER'}) or dispatch({type: 'HIDE_LOADER'})


export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';

export const showLoader = () => {
    return { type: SHOW_LOADER }
}

export const hideLoader = () => {
    return { type: HIDE_LOADER }
}