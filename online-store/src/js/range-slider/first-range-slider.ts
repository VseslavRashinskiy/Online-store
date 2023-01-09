import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

function firstSlider(): void {
    const rangeSlider = document.getElementById('range-slider1') as noUiSlider.target;

    if (rangeSlider) {
        noUiSlider.create(rangeSlider, {
            start: [1, 12],
            connect: true,
            step: 1,
            range: {
                min: [1],
                max: [12],
            },
        });

        const input0 = document.getElementById('input-0') as HTMLInputElement;
        const input1 = document.getElementById('input-1') as HTMLInputElement;

        rangeSlider.noUiSlider?.on('update', () => {
            const values = (rangeSlider as noUiSlider.target).noUiSlider?.get(true) as Array<number>;
            input0.value = Math.round(values[0]).toString();
            input1.value = Math.round(values[1]).toString();
        });
    }
}

export default firstSlider;
