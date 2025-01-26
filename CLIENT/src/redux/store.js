import { createStore } from "redux";

// Estado inicial
const initialState = {
    user: null, // Ejemplo: puedes agregar propiedades según lo que manejes
};

// Reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER":
            return { ...state, user: action.payload };
        default:
            return state;
    }
};

// Crear el store
const store = createStore(rootReducer);

export default store;
