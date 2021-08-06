import LoginState from './login/Index.js';
import ProductIndex from './product/ProductIndex.js';
import CartIndex from './cart/CartIndex.js';
import { createStore } from 'vuex';

const master = createStore({
    modules: {
        loginstate: LoginState,
        productstate: ProductIndex,
        cartstate: CartIndex,
    }
});

export default master;

