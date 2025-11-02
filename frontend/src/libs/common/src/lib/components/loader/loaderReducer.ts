
import { createSelector } from "reselect"

interface LoaderState {
    loaderInProgress: boolean
}

const initialLoaderState :LoaderState  = {
    loaderInProgress: false
}

export const loaderReducer = (state = initialLoaderState, action: any) => {
      switch(action.type){
        case 'SHOW_LOADER':
           return{...state, loaderInProgress:true}
        case 'HIDE_LOADER':
            return {...state, loaderInProgress:false}
        default:
            return state
      }
}


export const getLoaderState = (state:any) => state.loader as LoaderState; 
export const selectLoaderState = createSelector(getLoaderState,(s)=>s.loaderInProgress)