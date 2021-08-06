export default {
    addProductToCartActions(context, payload) {
        context.commit('addProductToCart', payload);
    },
    removeProductFromCartActions(context, payload) {
        context.commit('removeProductFromCart', payload);
    }
};