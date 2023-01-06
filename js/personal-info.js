import { validateStateInput } from "../validators/validators-form.js";

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
                <input type='text' name='name' placeholder='e.g. Stephen King' required pattern="[A-Za-z .]{5,}">
                <label>Email Address</label>
                <input type='email' name='email' placeholder='e.g. stephenking@lorem.com' required pattern="[\\w.-]+@[\\w]+(\\.){1}[a-z]{2,4}">
                <label>Phone Number</label>
                <input type='tel' name='cellphone' placeholder='e.g. + 1234 567 890' required pattern="(\\+ ){1}([\\d ]{5}){1}([\\d ]{4}){1}(\\d{3}){1}">
            </div>

            <a href="#select-plan" class="next-step" style="margin: 50px; float: left;">
                Next Step
            </a>
        `;

        const validityState = {};
        const data_user = {}

        const personalInfoData = personalInfo.querySelectorAll('input');

        for(let data of personalInfoData){
            data.addEventListener('blur', e => {
                data_user[e.target.name] = e.target.value;
                validityState[e.target.name] = validateStateInput(e.target);
            });
            validityState[data.name] = validateStateInput(data);
        }

        personalInfo.querySelector('a.next-step').addEventListener('click', e => {
            const stateValue = Object.values(validityState).every(value => value);
            if(!stateValue) {e.preventDefault(); alert('Hey some field was not filled correctly');}
            localStorage.setItem('data_user', JSON.stringify(data_user))
        });

        shadow.appendChild(globalStyles);
        shadow.appendChild(style);
        shadow.appendChild(personalInfo);
    }
}


export { PersonalInfoComponent };