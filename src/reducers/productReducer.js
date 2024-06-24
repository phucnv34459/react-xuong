const productReducer = (state, action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return {
                ...state,
                products: action.payload
            };
        case "REMOVE":
            return {
                ...state,
                products: state.products.filter((p) => p.id !== action.payload)
            };
        case "UPDATE":
            return {
                ...state,
                products: state.products.map((p) => (p.id === action.payload.id ? action.payload : p))
            };
        case "ADD":
            return {
                ...state,
                products: [...state.products, action.payload]
            };
        default:
            return state
    }
};

export default productReducer;