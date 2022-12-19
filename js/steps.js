class StepsNavigatorComponent extends HTMLElement {
    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });
        const style = document.createElement('link'),
            navigatorContainer = document.createElement('div');

        navigatorContainer.classList.add('navigator-container');
        style.rel = 'stylesheet';
        style.href = './css/stepsNav.css';
        navigatorContainer.innerHTML =
        `
        <span class="step-container">
            <span class="step-number">1</span>
            <h2>Step 1</h2>
            <p>Your Info</p>
        </span>

        <span class="step-container">
            <span class="step-number">2</span>
            <h2>Step 2</h2>
            <p>Select plan</p>
        </span>

        <span class="step-container">
            <span class="step-number">3</span>
            <h2>Step 3</h2>
            <p>Add-ONS</p>
        </span>

        <span class="step-container">
            <span class="step-number">4</span>
            <h2>Step 4</h2>
            <p>Summary</p>
        </span>
        `;

        shadow.appendChild(style);
        shadow.appendChild(navigatorContainer);
    }
}

export { StepsNavigatorComponent }