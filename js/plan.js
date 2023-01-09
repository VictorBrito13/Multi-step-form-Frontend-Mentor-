import { get_obs } from "./select-plan.js";

class PlanComponent extends HTMLElement {
    image = '';
    title = '';
    price = 0;
    time = null;

    constructor(){
        super();
    }

    static get observedAttributes(){
        return ['data-image', 'data-title', 'data-price', 'data-time'];
    }

    attributeChangedCallback(name, oldValue, newValue){
        switch(name){
            case 'data-image':
                this.image = newValue;
            break;
            case 'data-title':
                this.title = newValue;
            break;
            case 'data-price':
                this.price = newValue;
            break;
            case 'data-time':
                this.time = newValue;
            break;
        }
    }

    connectedCallback(){
        this.time = localStorage.getItem('money-time');
        const shadow = this.attachShadow({ mode: 'open' });
        const style = document.createElement('link'),
            plan = document.createElement('div');

        style.rel = 'stylesheet';
        style.href = './css/plan.css';
        plan.classList.add('plan-container');

        plan.innerHTML =
        `
        <img src="${this.image}">
        <span class="plan-info">
            <h2>${this.title}</h2>
            <p>$<span class="price">${this.price}</span>/<span class="time">${this.time}</span></p>
        </span>
        `

        get_obs().subscribe(data => {
            this.time = data;
            plan.querySelector('.time').innerHTML = this.time;
            plan.querySelector('.price').innerHTML = this.price;
        });

        shadow.appendChild(style);
        shadow.appendChild(plan);
    }
}

export { PlanComponent };