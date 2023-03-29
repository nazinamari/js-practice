/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
    items: [],
    getItems() {
        return this.items;
    },

    add(product) {
        for (const item of this.items) {
            if (item.name === product.name) {
                item.quantity += 1;
                return;
            }
        }

        const newProduct = {
            ...product,
            quantity: 0,
        };

        this.items.push(newProduct);
    },

    remove(productName) {
        const { items } = this;
        for (let i = 0; i < items.length; i += 1) {
            const { name } = items[i];

            // const element = items.[i];
            // if (productName === element.name) {}

            if (productName === name) {
                console.log('нашли', productName);
                console.log(i);

                items.splice(i, 1)
            }
        }
    },

    clear() {
        this.items = [];
    },
    
    countTotalPrice() {
        const { items } = this; 
        let total = 0;

        for (const { price, quantity } of items) {
            total += price * quantity;
        };

        return total;
    },

    increaseQuantity(productName) {},
    decreaseQuantity(productName) {},
};

cart.add({ name: '🍎', price: 50 })
cart.add({ name: '🍇', price: 70 })
cart.add({ name: '🍋', price: 60 })
cart.add({ name: '🍓', price: 110 })
cart.add({ name: '🍓', price: 110 })
cart.add({ name: '🍓', price: 110 })

console.table(cart.getItems());

cart.remove('🍋');

console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

// cart.clear();
// console.log(cart.getItems());

