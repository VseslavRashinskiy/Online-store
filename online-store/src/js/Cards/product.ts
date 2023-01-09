import { IData } from '../../types';
import LocalStorageUtil from '../utils/localStorageUtil';
import Counter from './counter';

class Products {
    classNameActive: string;

    constructor() {
        this.classNameActive = 'products-element_active';
    }

    handleSetLocationStorage(element: Element, id: string): void {
        const localStorageUtil = new LocalStorageUtil();
        const { pushProduct, products } = localStorageUtil.putProducts(id);

        if (pushProduct) {
            element.classList.add(this.classNameActive);
        } else {
            element.classList.remove(this.classNameActive);
        }

        const headerCounter = new Counter();
        headerCounter.render(products.length.toString());
    }

    render(arr: IData[]) {
        const localStorageUtil = new LocalStorageUtil();
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        arr.forEach(({ num, name, count, year, shape, color, size, img, favorite }) => {
            let activeClass = '';

            if (productsStore.indexOf(num) !== -1) {
                activeClass = ' ' + this.classNameActive;
            }

            htmlCatalog += `
            <div class="products-element ${activeClass}" id="${num}">
                <h4>${name}</h4>
                <div class="products-element__img">
                    <img src="${img}" />
                </div>
                <ul class="products-element_props">
                    <li>Количество:${count}</li>
                    <li>Год выхода:${year}</li>
                    <li>Форма:${shape}</li>
                    <li>Цвет:${color}</li>
                    <li>Размер:${size}</li>
                    <li>Популярный:${favorite}</li>
                </ul>
            </div>
            `;
        });

        const html = `
        <div class="products-container">
            ${htmlCatalog};
        </div>
        `;
        (document.getElementById('products') as HTMLElement).innerHTML = html;
    }
}

export default Products;
