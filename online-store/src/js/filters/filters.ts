import { IData } from '../../types';
import Products from '../Cards/product';
import DATA from '../constant/catalog';

class Filters {
    app(): void {
        const buttons = document.querySelectorAll('.filter-color') as NodeListOf<Element>;
        const result: IData[] = DATA.filter((el) => el.color === 'желтый');
        const result1: IData[] = DATA.filter((el) => el.color === 'белый');
        const result2: IData[] = DATA.filter((el) => el.color === 'красный');
        buttons.forEach((button: Element) => {
            button.addEventListener('click', () => {
                const productsPage = new Products();
                if (document.querySelector('.type-yellow')) {
                    button.classList.add('filter-color-active');
                    productsPage.render(result1);
                } else if (document.querySelector('.type-white')) {
                    button.classList.add('filter-color-active');
                    productsPage.render(result);
                } else {
                    button.classList.add('filter-color-active');
                    productsPage.render(result2);
                }
            });
        });
    }
}

export default Filters;
