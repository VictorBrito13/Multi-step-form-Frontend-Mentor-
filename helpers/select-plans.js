/**
    Iterate over all the elements searching an data-selected attribute.
    If the attribute is true change to false and viceversa and add a class
    depending if the attribute is true

    * @param HTMLElements Elements to iterate
    * @param HTMLElement Element to add the class
    * @param string Is the class to add
    * @returns void
*/
function selectEvent(elements, element, htmlClass){
    element.shadowRoot.querySelector('.plan-container').classList.add(htmlClass);
    element.dataset.selected = 'true';

    elements.forEach(el => {
        if(el !== element){
            el.shadowRoot.querySelector('.plan-container').classList.remove(htmlClass);
            el.dataset.selected = 'false';
        }
    });

    const data_user = JSON.parse(localStorage.getItem('data_user'));
    data_user['plan'] = {title: element.dataset.title, price: parseInt(element.dataset.price)}
    localStorage.setItem('data_user', JSON.stringify(data_user));
}

/**
    * @param HTMLElement
    * @param cssClass
    * @returns void
*/
function toggleClass(element, htmlClass){
    element.classList.toggle(htmlClass);
}

export { selectEvent, toggleClass };