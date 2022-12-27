class AddOnsComponent extends HTMLElement {
    ons = [
        { title: 'Online service', description: 'Acces to multiplayer games', price: 1 },
        { title: 'Larger storage', description: 'Extra 1TB of cloud save', price: 2 },
        { title: 'Customizable profile', description: 'Custom theme on your profile', price: 2 }
    ]

    constructor(){
        super();
    }

    addOnsTemplate(){
        const template = document.createElement('div');
        template.classList.add('ons-container');

        this.ons.forEach(on => {
            template.innerHTML +=
            `<app-ons
            title="${on.title}"
            description="${on.description}"
            price="${on.price}">
            </app-ons>`
        });

        return template;
    }

    connectedCallback(){
        const shadow = this.attachShadow({ mode: 'open' });
        const styles = document.createElement('link'),
            globalStyles = document.createElement('link'),
            addOnsContainer = document.createElement('div')

        globalStyles.rel = 'stylesheet';
        globalStyles.href = './css/global-styles-form.css'
        styles.rel = 'stylesheet';
        styles.href = './css/add-ons.css';

        addOnsContainer.innerHTML =
        `
            <h1 class="titel-component">Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
            ${this.addOnsTemplate().innerHTML}
            <button type="button" class="prev-step" style="margin: 10px;">Go Back</button>
            <button type="button" class="next-step" style="float: right; margin: 10px;">Next Step</button>
        `



        shadow.appendChild(globalStyles);
        shadow.appendChild(styles);
        shadow.appendChild(addOnsContainer);
    }

}

export { AddOnsComponent }