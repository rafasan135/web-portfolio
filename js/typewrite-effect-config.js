var typed = new Typed('.typed', {
    strings: [
        '<Last Projects>'
    ],

    // stringsElement: '#cadenas-texto'
 
    typeSpeed: 65, /* @property {number} typeSpeed type speed in millisecond*/
 
    startDelay: 1000,  // @property {number} startDelay time before typing starts in milliseconds

    backSpeed: 30,  // @property {number} backSpeed backspacing speed in milliseconds

    smartBackspace: true,  // @property {boolean} smartBackspace only backspace what doesn't match the previous string

    shuffle: false, //  @property {boolean} shuffle shuffle the strings

    backDelay: 3000, //  @property {number} backDelay time before backspacing in milliseconds

    loop: true,

    loopCount: false,

    showCursor: true,

    cursorChar: "_",

    contentType: null,
});
