import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

function secondSlider(): void {
    const rangeSlider = document.getElementById('range-slider2') as noUiSlider.target;

    if (rangeSlider) {
        noUiSlider.create(rangeSlider, {
            start: [1940, 2020],
            connect: true,
            step: 10,
            range: {
                min: [1940],
                max: [2020],
            },
        });

        const input2 = document.getElementById('input-2') as HTMLInputElement;
        const input3 = document.getElementById('input-3') as HTMLInputElement;

        rangeSlider.noUiSlider?.on('update', () => {
            const values = (rangeSlider as noUiSlider.target).noUiSlider?.get(true) as Array<number>;
            input2.value = Math.round(values[0]).toString();
            input3.value = Math.round(values[1]).toString();
        });
    }
}

export default secondSlider;
