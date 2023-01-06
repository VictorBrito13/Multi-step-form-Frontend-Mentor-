/**
     *
     * @param HTMLElement Element to toggle the class
     * @param String Css class to toggle
     * @param Boolean (optional)
     */
function toggleClass(el, cssClass, controller=undefined){
    el.classList.toggle(cssClass, controller);
}

export { toggleClass }
