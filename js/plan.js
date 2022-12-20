class PlanComponent extends HTMLElement {
    image = '';
    title = '';
    price = 0;

    constructor(){
        super();
    }

    static get observedAttributes(){
        return ['image', 'title', 'price'];
    }

    attributeChangedCallback(name, oldValue, newValue){
        switch(name){
            case 'image':
                this.image = newValue;
            break;
            case 'title':
                this.title = newValue;
            break;
            case 'price':
                this.price = newValue;
            break;
        }
    }

    connectedCallback(){
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
            <p>$${this.price}/mo</p>
        </span>
        `

        shadow.appendChild(style)
        shadow.appendChild(plan);
    }
}

export { PlanComponent };