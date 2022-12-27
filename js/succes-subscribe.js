class SuccesSubscribedComponent extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        const shadow = this.attachShadow({ mode: 'closed' });
        const styles = document.createElement('link'),
            globalStyles = document.createElement('link'),
            succesContainer = document.createElement('div');

        globalStyles.rel = 'stylesheet';
        globalStyles.href = './css/global-styles-form.css'
        styles.rel = 'stylesheet';
        styles.href = './css/succes-subscribed.css';
        succesContainer.classList.add('succes-subscribed-container');

        succesContainer.innerHTML =
        `
        <img src="./assets/images/icon-thank-you.svg" alt="Thank You">
        <h1 class="titel-component">Thank you!</h1>
        <p>
            Thanks for confirming your subscription! We hope you have fun using our plataform.
            If you ever need support, please feel free email us at support@loregaming.com.
        </p>
        `

        shadow.appendChild(globalStyles)
        shadow.appendChild(styles);
        shadow.appendChild(succesContainer);
    }
}

export { SuccesSubscribedComponent };