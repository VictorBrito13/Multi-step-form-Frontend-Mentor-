class SummaryComponent extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
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
                <h2 class="plan">Arcade <span class="plan-time">(Monthly)</span></h2>
                <button type="button" class="change-time-plan">Change</button>
                <span class="price">$9/mo</span>
            </div>
            <hr>
            <div class="add-ons-container">
                <p class="add-ons">Online Service <span class="add-ons-price">+1/mo</span></p>
                <p class="add-ons">Larger Storage <span class="add-ons-price">+2/mo</span></p>
            </div>
        </div>
        <div class="total">
            <p>Total <span>(per month)</span></p>
            <h3 class="total-price">+12/mo</h3>
        </div>

        <a href="#add-ons" class="prev-step">Go Back</a>
        <a href="#confirm" class="confirm">Confirm</a>
        `


        shadow.appendChild(globalStyles);
        shadow.appendChild(styles);
        shadow.appendChild(summaryContainer);
    }
}

export { SummaryComponent };