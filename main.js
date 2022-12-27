import { PersonalInfoComponent } from "./js/personal-info.js";
import { StepsNavigatorComponent } from "./js/steps.js";
import { SelectPlanComponent } from "./js/select-plan.js";
import { PlanComponent } from "./js/plan.js";
import { AddOnsComponent } from "./js/add-ons.js";
import { OnsComponent } from "./js/ons.js";

//*Components
customElements.define('app-personal-info', PersonalInfoComponent);
customElements.define('app-select-plan', SelectPlanComponent);
customElements.define('app-add-ons', AddOnsComponent);

//*UI-Components
customElements.define('app-steps-nav', StepsNavigatorComponent);
customElements.define('app-plan', PlanComponent);
customElements.define('app-ons', OnsComponent)

document.addEventListener('DOMContentLoaded', e => {
    const root = document.getElementById('root');
    const form = document.querySelector('form');

    root.innerHTML = '<app-steps-nav></app-steps-nav>';
    form.innerHTML += '<app-add-ons></app-add-ons>';
    root.appendChild(form);
});