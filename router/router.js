const { Subject } = rxjs;

const obs = new Subject();

function get_obs(){
    return obs.asObservable();
}

function router(renderParent){

    let hash = location.hash || '#personal-info';

    const routes = [
        {
            path: '#personal-info',
            component: '<app-personal-info></app-personal-info>',
            stepNav: 'step1'
        },
        {
            path: '#select-plan',
            component: '<app-select-plan></app-select-plan>',
            stepNav: 'step2'
        },
        {
            path: '#add-ons',
            component: '<app-add-ons></app-add-ons>',
            stepNav: 'step3'
        },
        {
            path: '#summary',
            component: '<app-summary></app-summary>',
            stepNav: 'step4'
        },
        {
            path: '#confirm',
            component: '<app-succes-subscribed></app-succes-subscribed>',
            stepNav: 'step4'
        }
    ];

    const route = routes.filter(route => route.path === hash);
    renderParent.innerHTML = route[0].component;
    obs.next(route[0])
}

export { router, get_obs };