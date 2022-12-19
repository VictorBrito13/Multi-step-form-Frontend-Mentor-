import { PersonalInfoComponent } from "./js/personal-info.js";
import { StepsNavigatorComponent } from "./js/steps.js"

customElements.define('personal-info', PersonalInfoComponent);
customElements.define('steps-nav', StepsNavigatorComponent);

document.addEventListener('DOMContentLoaded', e => {
    const root = document.getElementById('root');
    const form = document.querySelector('form');

    root.innerHTML = '<steps-nav></steps-nav>'
    form.innerHTML += '<personal-info></personal-info>';
    root.appendChild(form)
})