/* eslint-disable no-restricted-globals */
// Absolute imports
// -- Node modules import
import $ from 'jquery';
import '../vendor/jquery.fullpage';

// console.log(fullpage);

const initFullPage = () => {
    $(document).ready(() => {
        $('#fullpage').fullpage({
            autoScrolling: true,
            scrollHorizontally: true,
            scrollingSpeed: 1300,
            easingcss3: 'ease-in-out',
            afterLoad() {
                this.find('.need-animate').each((_index, element) => {
                    setTimeout(() => {
                        $(element).addClass($(element).data('animation'));
                    }, $(element).data('delay') || 0);
                });
            },
        });
        if (!localStorage.getItem('confirmedOn')) {
            $.fn.fullpage.setAllowScrolling(false);
        }
    });
};

export default initFullPage;
