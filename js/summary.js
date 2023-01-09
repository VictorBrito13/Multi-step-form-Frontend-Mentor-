class SummaryComponent extends HTMLElement {
    constructor(){
        super();
    }
    data_user = null;
    planTime = null;
    total = 0;

    connectedCallback(){
        this.data_user = JSON.parse(localStorage.getItem('data_user'));
        this.planTime = localStorage.getItem('money-time');

        const shadow = this.attachShadow({ mode: 'closed' });
        const styles = document.createElement('link'),
            globalStyles = document.createElement('link'),
            summaryContainer = document.createElement('div');

        globalStyles.rel = 'stylesheet';
        globalStyles.href = './css/global-styles-form.css';
        styles.rel = 'stylesheet';
        styles.href = './css/summary.css';

        summaryContainer.innerHTML =
        `
        <h1 class="titel-component">Finishing up</h1>
        <p>Double-check everything looks OK before confirming</p>

        <div class="summary-info-container">
            <div class="summary-info">
                <h2 class="plan">${this.data_user.plan.title} <span class="plan-time">(${this.planTime})</span></h2>
                <button type="button" class="change-time-plan">Change</button>
                <span class="price">$<span class="price__">${this.data_user.plan.price}</span>/<span class="plan-time">(${this.planTime})</span></span>
            </div>
            <hr>
            <div class="add-ons-container"></div>
        </div>
        <div class="total">
            <p>Total <span class="plan-time">(${this.planTime})</span></p>
            <h3 class="total-price">+<span class="total__price">0</span>/<span class="plan-time">(${this.planTime})</span></h3>
        </div>

        <a href="#add-ons" class="prev-step">Go Back</a>
        <a href="#confirm" class="confirm">Confirm</a>
        `

        summaryContainer.querySelector('.change-time-plan').addEventListener('click', e => {
            if(this.planTime === 'mo') {
                localStorage.setItem('money-time', 'yr');
                this.data_user['plan'].price = this.data_user['plan'].price * 10;
                this.total = this.total * 10;
                this.data_user['ons']?.forEach(on => on.price = on.price * 10);
            }
            else {
                localStorage.setItem('money-time', 'mo');
                this.data_user['plan'].price = this.data_user['plan'].price / 10;
                this.total = this.total / 10;
                this.data_user['ons']?.forEach(on => on.price = on.price / 10);
            }

            localStorage.setItem('data_user', JSON.stringify(this.data_user))
            summaryContainer.querySelector('.total__price').textContent = this.total;
            summaryContainer.querySelector('.add-ons-container').innerHTML = null;

            this.data_user.ons.forEach(element => {
                const p = document.createElement('p');
                p.classList.add('add-ons');
                p.innerHTML =
                `${element.title} <span class="add-ons-price">+${element.price}/<span class="plan-time">(${this.planTime})</span></span>`

                summaryContainer.querySelector('.add-ons-container').appendChild(p);
            });

            summaryContainer.querySelector('.price__').textContent = this.data_user.plan.price;

            this.planTime = localStorage.getItem('money-time');
            summaryContainer.querySelectorAll('.plan-time').forEach(element => {
                element.textContent = `(${this.planTime})`;
            });
        });

        this.data_user.ons.forEach(element => {
            const p = document.createElement('p');
            p.classList.add('add-ons');
            p.innerHTML =
            `${element.title} <span class="add-ons-price">+${element.price}/<span class="plan-time">(${this.planTime})</span></span>`

            summaryContainer.querySelector('.add-ons-container').appendChild(p);
            this.total += element.price;
        });

        this.total += this.data_user.plan.price;
        summaryContainer.querySelector('.total__price').textContent = this.total;


        shadow.appendChild(globalStyles);
        shadow.appendChild(styles);
        shadow.appendChild(summaryContainer);
    }
}

export { SummaryComponent };