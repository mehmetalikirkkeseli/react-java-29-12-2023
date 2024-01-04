export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";


//react-redux,redux ve redux-devtools-extension paketleri yüklenmiştir.
//redux-devtools-extension paketi npm i @redux-devtools/extension komutu ile yüklenmiştir.

//Sepete veri ekleme
//payload => gönderilen değerdir.
export function addToCart(product){
    return{
        type : ADD_TO_CART,
        payload: product
    }
}

//Sepetten veri silme
export function removeFromCart(product){
    return{
        type : REMOVE_FROM_CART,
        payload: product
    }
}