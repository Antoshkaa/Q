
const initialState ={cards: []}

export const cardsReducer = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_CARD' :
      return { ...state,cards:action.payload}
    default: 
    return state
  }

}
