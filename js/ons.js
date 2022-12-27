class OnsComponent extends HTMLElement {
    title = null
    description = null
    price = null

    constructor(){
        super();
    }

    static get observedAttributes(){
        return ['title', 'description', 'price'];
    }

    attributeChangedCallback(attr, oldValue, newValue){
        switch(attr){
            case 'title':
            this.title = newValue;
            break;

            case 'description':
            this.description = newValue;
            break;

            case 'price':
            this.price = newValue;
            break;
        }
    }

    connectedCallback(){
        const shadow = this.attachShadow({ mode: 'closed' });
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
            <span class="price">$${this.price}/mo</span>
            </label>
        `;
        const ons = onsContainer.querySelectorAll('.ons-container');
        ons.forEach(on => {
            on.addEventListener('click', e => {
                this.addClass(on, 'ons-active', on.querySelector('input[type="checkbox"]').checked);
            });
        });


        shadow.appendChild(styles);
        shadow.appendChild(onsContainer);
    }

    addClass(el, cssClass, controller=undefined){
        el.classList.toggle(cssClass, controller);
    }
}

export { OnsComponent }