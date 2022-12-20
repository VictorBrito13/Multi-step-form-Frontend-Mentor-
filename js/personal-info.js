class PersonalInfoComponent extends HTMLElement {

    constructor(){
        super();
    }

    connectedCallback(){
        const shadow = this.attachShadow({ mode: 'open' });
        const style = document.createElement('link'),
                globalStyles = document.createElement('link'),
                personalInfo = document.createElement('div');

        personalInfo.classList.add('personal-info-container');
        globalStyles.rel = 'stylesheet';
        globalStyles.href = './css/global-styles-form.css';
        style.rel = 'stylesheet';
        style.href = './css/personal-info.css';

        personalInfo.innerHTML =
        `
            <h1 class='titel-component'>Personal info</h1>
            <p>Please provide your name, email address, and phone number</p>

            <div class="form-content-container">
                <label>Name</label>
                <input type='text' name='name' placeholder='e.g. Stephen King'>
                <label>Email Address</label>
                <input type='email' placeholder='e.g. stephenking@lorem.com'>
                <label>Phone Number</label>
                <input text='tel' placeholder='e.g. + 1234 567 890'>
            </div>

            <button type='button' class="next-step" style="margin: 50px; float: left;">Next Step</button>
        `;


        shadow.appendChild(globalStyles);
        shadow.appendChild(style);
        shadow.appendChild(personalInfo);
    }
}


export { PersonalInfoComponent };