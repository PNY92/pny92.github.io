
// VARIABLES \\

const heading = document.getElementById("header");
var i = 0;
heading.style.opacity = 0
function loop() {
    setTimeout(() => {
        heading.style.opacity = i;
        i += 0.1;
        if (i < 1){
            loop()
        }
    },100)
}

loop()
