import loader from "./components/loader.js";
import showMenu from "./components/showMenu.js";
import showCart from "./components/showCart.js";
import products from "./components/products.js";
import darkMode from "./components/darkMode.js";
import cart from "./components/cart.js";
/* UI Elements */

/* Ocultar Loader */

loader();

/* Mostrar Dark Mode */

darkMode();

/* Mostrar Menu */

showMenu();

/* Mostrar Carrito */

showCart();

/* End UI Elements */

/* Products */

const {db,printProducts} = products();

/* Cart */

cart(db,printProducts);