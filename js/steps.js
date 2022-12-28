import { get_obs } from '../router/router.js'

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
            <span class="step-number" id="step1">1</span>
            <h2>Step 1</h2>
            <p>Your Info</p>
        </span>

        <span class="step-container">
            <span class="step-number" id="step2">2</span>
            <h2>Step 2</h2>
            <p>Select plan</p>
        </span>

        <span class="step-container">
            <span class="step-number" id="step3">3</span>
            <h2>Step 3</h2>
            <p>Add-ONS</p>
        </span>

        <span class="step-container">
            <span class="step-number" id="step4">4</span>
            <h2>Step 4</h2>
            <p>Summary</p>
        </span>
        `;

        shadow.appendChild(style);
        shadow.appendChild(navigatorContainer);

        get_obs().subscribe(data => {
            const $steps = navigatorContainer.querySelectorAll('.step-number');
            let $step
            $steps.forEach(step => {
                if(step.id === data.stepNav) $step = step
                if(step.classList.contains('step-active') && step.id !== data.stepNav) step.classList.remove('step-active');
            });
            $step.classList.add('step-active');

        })
    }
}

export { StepsNavigatorComponent };