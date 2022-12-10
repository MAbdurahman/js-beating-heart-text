/**
 * The Beating Heart With Text 2 Script Sheet
 * @author:  Mahdi Abdurrahman
 * @date:  28 March 2019
 * @version:  1.0.0
 */
$(function () {
    var typedMaterial;
    typedMaterial = new Typed('.typing', {

        strings: ['I love everything about YOU!',
            'I love everything about YOU!',
            'I cannot get YOU off my mind!',
            'I know you are not good for me, ',
            'but I love YOU, anyway&nbsp;&nbsp;&#9892;'
        ],
        typeSpeed: 120,
        backSpeed: 70,
        backDelay: 3000,
        cursorChar: '_',
        showCursor: false,
        shuffle: false,
        smartBackspace: true,
        loop: true,
        loopCount: 3

    });
});
