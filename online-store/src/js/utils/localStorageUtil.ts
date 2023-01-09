import { Put } from '../../types';

class LocalStorageUtil {
    keyName: string;
    constructor() {
        this.keyName = 'products';
    }

    getProducts(): (string | number | null)[] {
        const productsLocalStorage: string | null = localStorage.getItem(this.keyName);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        } else {
            return [];
        }
    }

    putProducts(num: string): Put {
        const products = this.getProducts();
        let pushProduct = false;
        const index = products.indexOf(num);

        if (index === -1) {
            if (products.length > 19) {
                alert('Извините, все слоты заполнены');
            } else {
                products.push(num);
                pushProduct = true;
            }
        } else {
            products.splice(index, 1);
        }

        localStorage.setItem(this.keyName, JSON.stringify(products));

        return { pushProduct, products };
    }
}

export default LocalStorageUtil;
