

export const initialState = {
    basket: [
        {
            item: "1234",
            title: "this is a test"
        }
    ],
    user:null
};
export const getBasketTotal = basket => basket?.reduce((amount, item) => item.price + amount, 0)

function reducer(state, action) {

    switch (action.type) {
        case "LOGIN_USER":
            return {
                ...state,user:action.user
            }
            break;
        case "LOGOUT_USER":
                return {
                    ...state,user:null
                }
                break;
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
            break;
        case 'REMOVE_FROM_BASKET':
            let basket = state.basket.filter(item => item.id !== action.id);
            return { ...state, basket }
            break;
        default:
            return state
    }
}

export default reducer;