export const initialState = {
   product:[],
   basket:[],
    user: null
}



const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {

//action for products
case 'ADD_TO_PRODUCT': 
      return{
        ...state,
        product:action.product
      }


//action for Basket

 case 'ADD_TO_BASKET': {
            return {
                ...state,
                basket: action.basket
            }
        }

        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )
            let newBasket = [...state.basket]

            if (index >= 0) {
                newBasket.splice(index, 1);

            } else {
                console.warn(
                    `Cant warn product (id: ${action.id} as its not in cart)`
                )
            }

            return {
                ...state,
                basket: newBasket
            }


//action for user
        case 'SET_USER': {
            return {
                ...state,
                user: action.user
            }
        }

        case 'REMOVE_USER': {
            return {
                ...state,
                user: null
            }
        }

        default:
            return state;
    }
}

export default reducer