export interface IData {
    num: string;
    name: string;
    count: string;
    year: string;
    shape: string;
    color: string;
    size: string;
    img: string;
    favorite: boolean;
}

export type Put = {
    pushProduct: boolean;
    products: (string | number | null)[];
};
