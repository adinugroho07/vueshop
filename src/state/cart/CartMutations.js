export default {
    addProductToCart: function (state, payload) {
        const productInCartIndex = state.cart.items.findIndex(
            (ci) => ci.productId === payload.id
        );

        if (productInCartIndex >= 0) {
            state.cart.items[productInCartIndex].qty++;
        } else {
            const newItem = {
                productId: payload.id,
                title: payload.title,
                image: payload.image,
                price: payload.price,
                qty: 1,
            };
            state.cart.items.push(newItem);
        }
        state.cart.qty++;
        state.cart.total += payload.price;
    },
    removeProductFromCart(state, payload) {
        const productInCartIndex = state.cart.items.findIndex(
            (cartItem) => cartItem.productId === payload.id
        );
        if (payload.qty > 1) {
            state.cart.items[productInCartIndex].qty -= 1;
            const hargasatuan = state.cart.items[productInCartIndex].price
            state.cart.total = state.cart.total.toFixed(2) - hargasatuan.toFixed(2);
            state.cart.qty -= 1;
        } else {
            const prodData = state.cart.items[productInCartIndex];
            state.cart.items.splice(productInCartIndex, 1);
            console.log(prodData.qty, prodData.price, state.cart.total, (state.cart.total - (prodData.price * prodData.qty)));
            state.cart.qty -= prodData.qty;
            state.cart.total -= prodData.price;
        }
    },
};