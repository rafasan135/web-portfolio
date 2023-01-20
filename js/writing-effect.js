let messageArray = ["Last-Projects"];
let textPosition = 0;
let speed = 100;

typewriter = () => {
    document.querySelector(".last-projects-h2").innerHTML = messageArray[0].substring(0,textPosition) + "<span>\u005f</span>";

    if(textPosition++ != messageArray[0].length)
    setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter);


// Original code

// let messageArray = ["Last-Projects"];
// let textPosition = 0;
// let speed = 100;

// typewriter = () => {
//     document.querySelector("#last-projects-h2").innerHTML = messageArray[0].substring(0,textPosition) + "<span>\u005f</span>";

//     if(textPosition++ != messageArray[0].length)
//     setTimeout(typewriter, speed);
// }

// window.addEventListener("load", typewriter);

