import { legacy_createStore as createStore } from "redux";
import rootReducer from "./routeReducer";
import { devToolsEnhancer } from "@redux-devtools/extension";

//createStore metoduna versiyon farklılığından dolayı import bölünümde tanımlama yapılmıştır.
//redux devtools eklentisi chrome'a yüklenmiştir.
export function configureStore() {
    return createStore(rootReducer,devToolsEnhancer());
}