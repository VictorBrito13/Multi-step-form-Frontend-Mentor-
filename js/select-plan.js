import { selectEvent, toggleClass } from "../helpers/select-plans.js";

const { Subject } = rxjs;

const obs = new Subject();

function get_obs(){
    return obs.asObservable();
}

class SelectPlanComponent extends HTMLElement {
    plans = [
        { image: './assets/images/icon-arcade.svg', title: 'Arcade', price: 9 },
        { image: './assets/images/icon-advanced.svg', title: 'Advanced', price: 12 },
        { image: './assets/images/icon-pro.svg', title: 'Pro', price: 15 }
    ];
    planTime = 'mo'

    constructor(){
        super();
    }

    plansHtml(){
        const plans_container = document.createElement('div');
        plans_container.classList.add('plans');

        this.plans.forEach(plan => {
            plans_container.innerHTML +=
            `<app-plan
            data-selected='false'
            data-image="${plan.image}"
            data-title="${plan.title}"
            data-price="${plan.price}">
            </app-plan>`
        });
        return plans_container;
    }

    connectedCallback(){
        localStorage.setItem('money-time', 'mo');
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
            <p>You have the option of monthly or yearly billing</p>
            ${this.plansHtml().outerHTML}
            <div class="plan-time-container">
                <span class="month selection-active">Monthly</span>
                <div class="selection-container">
                    <span class="selection"></span>
                </div>
                <span class="year">Yearly</span>
            </div>

            <div class="steps-stages"
            style="display:flex; justify-content: space-between; margin-top: 25px">
                <a href="#personal-info" class="prev-step">Go Back</a>
                <a href="#add-ons" class="next-step">Next Step</a>
            </div>
        `;

        const plansComponents = selectPlan.querySelectorAll('.plans app-plan');

        const timeSelector = selectPlan.querySelector('.plan-time-container');
        timeSelector.addEventListener('click', () => {
            toggleClass(timeSelector.querySelector('.selection'), 'selection-yr');
            toggleClass(timeSelector.querySelector('.month'), 'selection-active');
            toggleClass(timeSelector.querySelector('.year'), 'selection-active');

            this.planTime = localStorage.getItem('money-time');

            const data_user = JSON.parse(localStorage.getItem('data_user'));

            if(this.planTime === 'mo'){
                localStorage.setItem('money-time', 'yr');
                plansComponents.forEach(plan => plan.dataset.price = plan.dataset.price * 10);
                data_user.plan.price = data_user.plan.price * 10;
            }
            else{
                localStorage.setItem('money-time', 'mo');
                plansComponents.forEach(plan => plan.dataset.price = plan.dataset.price / 10);
                data_user.plan.price = data_user.plan.price / 10;
            }
            this.planTime = localStorage.getItem('money-time');
            localStorage.setItem('data_user', JSON.stringify(data_user));

            obs.next(this.planTime);
        });

        customElements.whenDefined('app-plan').then(() => {
            selectEvent(
                plansComponents,
                plansComponents[0],
                'plan-selected'
            );

            plansComponents.forEach(component => {
                component.addEventListener('click', e => selectEvent(plansComponents, component, 'plan-selected'));
            });
        });

        shadow.appendChild(globalStyles);
        shadow.appendChild(style);
        shadow.appendChild(selectPlan);
    }
}

export { SelectPlanComponent, get_obs, obs };