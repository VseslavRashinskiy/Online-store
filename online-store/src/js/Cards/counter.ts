class Counter {
    render(count: string) {
        const html = `
            <span class="header-counter">
                ${count}
            </span>
        `;
        const i = document.getElementById('bucket') as HTMLElement;
        i.innerHTML = html;
    }
}

export default Counter;
