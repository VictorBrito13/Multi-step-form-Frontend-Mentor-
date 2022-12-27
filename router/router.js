function router(renderParent){
    let hash = location.hash || '#personal-info';

    const routes = [
        {
            path: '#personal-info',
            component: '<app-personal-info></app-personal-info>'
        },
        {
            path: '#select-plan',
            component: '<app-select-plan></app-select-plan>'
        },
        {
            path: '#add-ons',
            component: '<app-add-ons></app-add-ons>'
        }
    ];

    const route = routes.filter(route => route.path === hash);

    renderParent.innerHTML = route[0].component
}

export { router }