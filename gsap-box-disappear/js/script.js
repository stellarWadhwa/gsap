const green = document.getElementsByClassName('green');
const blue = document.getElementsByClassName('blue');
const purple = document.getElementsByClassName('purple');
const greencheck = document.getElementById('greencheck');
const bluecheck = document.getElementById('bluecheck');
const purplecheck = document.getElementById('purplecheck');

function handleCheckboxChange(elements, checkbox) {
    checkbox.addEventListener('change', function() {
        const isChecked = this.checked;

        Array.from(elements).forEach(element => {
            gsap.to(element, {
                height: isChecked ? 0 : 200,
                width: isChecked ? 0 :200,
                duration: 1,
                opacity: isChecked ? 0 : 1
            });
        });
    });
}

// Call the function for each color
handleCheckboxChange(green, greencheck);
handleCheckboxChange(blue, bluecheck);
handleCheckboxChange(purple, purplecheck);
