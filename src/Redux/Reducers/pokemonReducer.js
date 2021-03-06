import { SET_POKEMON } from "../Actions/type"

const initialState={
    list:[]
}

const pokemonReducer = (state=initialState,action) =>{
    switch(action.type){
        case SET_POKEMON:
            return {
                ...state,
                list: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export {
    pokemonReducer
}