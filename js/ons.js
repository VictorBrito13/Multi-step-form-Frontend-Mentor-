class OnsComponent extends HTMLElement {
    title = null;
    description = null;
    price = 0;
    planTime = 'mo';

    constructor(){
        super();
    }

    static get observedAttributes(){
        return ['data-title', 'data-description', 'data-price'];
    }

    attributeChangedCallback(attr, oldValue, newValue){
        switch(attr){
            case 'data-title':
            this.title = newValue;
            break;

            case 'data-description':
            this.description = newValue;
            break;

            case 'data-price':
            this.price = newValue;
            break;
        }
    }

    connectedCallback(){
        this.planTime = localStorage.getItem('money-time');

        const shadow = this.attachShadow({ mode: 'open' });
        const styles = document.createElement('link'),
            onsContainer = document.createElement('div');

        styles.rel = 'stylesheet';
        styles.href = './css/ons.css';

        onsContainer.innerHTML =
        `
            <label class="ons-container">
            <input type="checkbox">
            <span class="title">${this.title}</span>
            <span class="description">${this.description}</span>
            <span class="price">$${this.price}/<span>${this.planTime}</span></span>
            </label>
        `

        shadow.appendChild(styles);
        shadow.appendChild(onsContainer);
    }
}

export { OnsComponent }