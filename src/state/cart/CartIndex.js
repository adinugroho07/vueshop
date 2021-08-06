import CartMutations from './CartMutations.js';
import CartActions from './CartActions.js';
import CartGetters from './CartGetters.js';

const cartState = {
    namespaced: true,
    state: () => ({
        cart: { items: [], total: 0, qty: 0 }
    }),
    mutations: CartMutations,
    actions: CartActions,
    getters: CartGetters,
};

export default cartState;