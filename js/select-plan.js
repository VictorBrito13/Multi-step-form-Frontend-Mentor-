class SelectPlanComponent extends HTMLElement {
    plans = [
        { image: './assets/images/icon-arcade.svg', title: 'Arcade', price: 9 },
        { image: './assets/images/icon-advanced.svg', title: 'Advanced', price: 12 },
        { image: './assets/images/icon-pro.svg', title: 'Pro', price: 15 }
    ];

    constructor(){
        super();
    }

    plansHtml(){
        const plans_container = document.createElement('div');
        plans_container.classList.add('plans');

        this.plans.forEach(plan => {
            plans_container.innerHTML +=
            `<app-plan-component
            image=${plan.image} title=${plan.title} price=${plan.price}></app-plan-component>`
        });
        return plans_container;
    }

    connectedCallback(){
        const shadow = this.attachShadow({ mode: 'open' });
        const style = document.createElement('link'),
            globalStyles = document.createElement('link'),
            selectPlan = document.createElement('div');

        selectPlan.classList.add('select-plan-container');
        style.rel = 'stylesheet';
        style.href = './css/select-plan.css';
        globalStyles.rel = 'stylesheet';
        globalStyles.href = './css/global-styles-form.css';

        selectPlan.innerHTML =
        `
        <h1 class="titel-component">Select your plan</h1>
        <p>You have the option of monthly of yearly billing</p>
        `
        selectPlan.appendChild(this.plansHtml());
        selectPlan.innerHTML +=
        `
        <div class="plan-time-container">
            <span class="selection-active">Monthly</span>
            <div class="selection-container">
                <span class="selection"></span>
            </div>
            <span>Yearly</span>
        </div>

        <div class="steps-stages"
        style="display:flex; justify-content: space-between; margin-top: 25px">
            <button type="button" class="prev-step">Go Back</button>
            <button type="button" class="next-step">Next Step</button>
        </div>
        `;

        shadow.appendChild(globalStyles);
        shadow.appendChild(style);
        shadow.appendChild(selectPlan);
    }
}

export { SelectPlanComponent };