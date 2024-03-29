import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
    cartItems: cartItems,
};

//state'in varsayılan değeri initialState olarak verilmiştir.
//... (spread) ile state içerisinde elemanlar yeniden oluşur.
//redux'ta push ifadesi kullanılmaz.
export default function cartReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems.find(c => c.product.id === payload.id);
            if (product) {
                product.quantity++;
                return {
                    ...state,
                };
            } else {
                return {
                    //Bu ifade birden fazla eleman olabileceği için yazılmıştır.
                    ...state,
                    cartItems: [...state.cartItems, { quantity: 1, product: payload }],
                };
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(c => c.product.id !== payload.id),
            };
        default:
            return state;
    }
}