/* eslint-disable no-restricted-globals */
// Absolute imports
// -- Node modules import
import $ from 'jquery';
// require('fullpage.js');
// eslint-disable-next-line no-unused-vars
// import '../vendor/scrolloverflow';
import '../vendor/jquery.fullpage';

// console.log(fullpage);

const initFullPage = () => {
    // check
    // Importing fullpage.js

    // When using fullPage extensions replace the previous import
    // of fullpage.js for this file
    // import fullpage from 'fullpage.js/dist/fullpage.extensions.min';

    // Initializing it
    // const fullPageInstance = new Fullpage('#myFullpage', {
    //     navigation: true,
    //     sectionsColor: ['#ff5f45', '#0798ec', '#fc6c7c', 'grey'],
    // });

    // // Calling methods
    // // fullpage_api.moveSectionDown();
    // // Or
    // fullPageInstance.moveSectionDown();
    $(document).ready(() => {
        $('#fullpage').fullpage({
            // options here
            autoScrolling: true,
            scrollHorizontally: true,
            // scrollOverflow: true,
        });

        // methods
        // $.fn.fullpage.setAllowScrolling(false);
    });
};

export default initFullPage;
