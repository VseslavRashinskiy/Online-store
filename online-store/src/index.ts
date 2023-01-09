import firstSlider from './js/range-slider/first-range-slider';
import secondSlider from './js/range-slider/second-range-slider';
import LocalStorageUtil from './js/utils/localStorageUtil';
import Products from './js/Cards/product';
import Counter from './js/Cards/counter';
import Filters from './js/filters/filters';
import DATA from './js/constant/catalog';

//Filters
const filter = new Filters();
filter.app();

//Cards
const productsPage = new Products();
productsPage.render(DATA);

const test = document.querySelectorAll('.products-element') as NodeListOf<Element>;
test.forEach((element) => {
    element.addEventListener('click', (): void => {
        productsPage.handleSetLocationStorage(element, element.id);
    });
});
//Application
const localStorage = new LocalStorageUtil();
//Counter
const headerCounter = new Counter();
const productsStore = localStorage.getProducts();
headerCounter.render(productsStore.length.toString());

firstSlider();
secondSlider();
