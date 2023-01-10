import { toggleClass } from "../helpers/select-plans.js";

class AddOnsComponent extends HTMLElement {
    planTime = 'mo'
    ons = [
        { title: 'Online service', description: 'Acces to multiplayer games', price: 1 },
        { title: 'Larger storage', description: 'Extra 1TB of cloud save', price: 2 },
        { title: 'Customizable profile', description: 'Custom theme on your profile', price: 2 }
    ];
    data_user = null;

    constructor(){
        super();
    }

    addOnsTemplate(){
        const template = document.createElement('div');
        template.classList.add('ons-container');

        this.ons.forEach(on => {
            if(this.planTime === 'yr') on.price = on.price * 10;
            template.innerHTML +=
            `<app-ons
            data-title="${on.title}"
            data-description="${on.description}"
            data-price=${on.price}>
            </app-ons>`
        });

        return template;
    }

    connectedCallback(){
        this.data_user = JSON.parse(localStorage.getItem('data_user'));
        this.data_user['ons'] = [];
        localStorage.setItem('data_user', JSON.stringify(this.data_user));
        this.planTime = localStorage.getItem('money-time');
        const shadow = this.attachShadow({ mode: 'open' });
        const styles = document.createElement('link'),
            globalStyles = document.createElement('link'),
            addOnsContainer = document.createElement('div')

        styles.rel = 'stylesheet';
        styles.href = './css/add-ons.css';
        globalStyles.rel = 'stylesheet';
        globalStyles.href = './css/global-styles-form.css';
        addOnsContainer.classList.add('add-ons-container');

        addOnsContainer.innerHTML =
        `
            <h1 class="titel-component">Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
            ${this.addOnsTemplate().outerHTML}
            <a href="#select-plan" class="prev-step" style="float: left; margin-top: 25px;">Go Back</a>
            <a href="#summary" class="next-step" style="float: right; margin: 25px;">Next Step</a>
        `

        customElements.whenDefined('app-ons').then(() => {
            const ons = addOnsContainer.querySelectorAll('app-ons');
            ons.forEach(on => {
                on.addEventListener('input', e => {
                    toggleClass(on.shadowRoot.querySelector('div .ons-container'), 'ons-active');
                    if(!this.data_user.ons.some(element => element.title === on.title)){
                        this.data_user.ons.push({title: on.dataset.title, price: parseInt(on.dataset.price)});
                    }else{
                        const index = this.data_user.ons.findIndex(element => element.title === on.title);
                        this.data_user.ons.splice(index, 1);
                    }
                    localStorage.setItem('data_user', JSON.stringify(this.data_user));
                });
            });
        });

        shadow.appendChild(globalStyles);
        shadow.appendChild(styles);
        shadow.appendChild(addOnsContainer);
    }

}

export { AddOnsComponent }