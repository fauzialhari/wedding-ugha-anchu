// Require all tested function //
// import initHeader from '../components/initHeader';

// Require all function dependecy //
const $ = require('jquery');
const matchers = require('jest-jquery-matchers');
const path = require('path');
const pugToHtml = require('../helper/pugToHtmlGenerator');

// BEGIN TESTING //
// Header Unit undet test //
describe('Header Component', () => {
    beforeEach(() => {
        jest.addMatchers(matchers);
    });

    // The html structure should bound with all toggle function in header
    // Load pug template and set the document body//
    const template = path.join(__dirname, '..', '..', 'template', 'includes', 'header.pug');
    // pugToHtml is a function that convert pug into html string
    document.body.innerHTML = pugToHtml(template);

    // INCLUDE TESTED FUNCTION OF HEADER //
    //     initHeader(); // initiation function for header //

    describe('header toggle function check', () => {
        // Testing notification open close //
        it('passes if header-open class appened into header upon click and the html structure correct', () => {
            // Use jquery to emulate a click on our button
            $('.xb-header').click();
            expect($('header')).toHaveClass('header-open');
            expect($.parseHTML(pugToHtml(template))).toMatchSnapshot();
        });
    });
});
