/**
* Check if the input is valid
* @param { HTMLInput } HTMLInput
* @returns { boolean } Validity of the input
*/
function validateStateInput(input){
    return input.checkValidity();
}

export { validateStateInput }