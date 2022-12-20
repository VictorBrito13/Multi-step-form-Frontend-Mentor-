import { PersonalInfoComponent } from "./js/personal-info.js";
import { StepsNavigatorComponent } from "./js/steps.js";
import { SelectPlanComponent } from "./js/select-plan.js";
import { PlanComponent } from "./js/plan.js";

customElements.define('app-personal-info', PersonalInfoComponent);
customElements.define('app-steps-nav', StepsNavigatorComponent);
customElements.define('app-select-plan', SelectPlanComponent);
customElements.define('app-plan-component', PlanComponent);

document.addEventListener('DOMContentLoaded', e => {
    const root = document.getElementById('root');
    const form = document.querySelector('form');

    root.innerHTML = '<app-steps-nav></app-steps-nav>';
    form.innerHTML += '<app-select-plan></app-select-plan>';
    root.appendChild(form);
});