import { PersonalInfoComponent } from "./js/personal-info.js";
import { StepsNavigatorComponent } from "./js/steps.js";
import { SelectPlanComponent } from "./js/select-plan.js";
import { PlanComponent } from "./js/plan.js";
import { AddOnsComponent } from "./js/add-ons.js";
import { OnsComponent } from "./js/ons.js";
import { router } from "./router/router.js";
import { SummaryComponent } from "./js/summary.js";
import { SuccesSubscribedComponent } from "./js/succes-subscribe.js";

//*UI-Components
customElements.define('app-steps-nav', StepsNavigatorComponent);
customElements.define('app-plan', PlanComponent);
customElements.define('app-ons', OnsComponent);

//*Components
customElements.define('app-personal-info', PersonalInfoComponent);
customElements.define('app-select-plan', SelectPlanComponent);
customElements.define('app-add-ons', AddOnsComponent);
customElements.define('app-summary', SummaryComponent);
customElements.define('app-succes-subscribed', SuccesSubscribedComponent)

document.addEventListener('DOMContentLoaded', e => {
    const root = document.getElementById('root');
    const form = document.querySelector('form');
    root.innerHTML = '<app-steps-nav></app-steps-nav>';
    root.appendChild(form);
    router(form)
});

window.addEventListener('hashchange' , e => router(document.querySelector('form')));