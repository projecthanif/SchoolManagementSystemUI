
// HOME PAGE

const dropdownBtn = document.querySelector('#dropdownBtn');

dropdownBtn.addEventListener('click', toggleDropDown);
// console.log(dropdownBtn.classList);

function toggleDropDown() {
    const dropdown = document.querySelector('#dropdown');
    if (dropdown.classList.contains('hidden')) {
        dropdown.classList.remove('hidden')
        console.log(dropdown.classList);
    } else {
        dropdown.classList.add('hidden')
        console.log(dropdown.classList);
    }
}

