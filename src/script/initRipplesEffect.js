/* eslint-disable no-restricted-globals */
// Absolute imports
// -- Node modules import
import $ from 'jquery';
// require('fullpage.js');
// eslint-disable-next-line no-unused-vars
import '../vendor/jquery.ripples-min';

const initRipplesEffect = () => {
    if ($('.ripple').length) {
        $('.ripple').ripples({
            // resolution: 512,
            dropRadius: 4,
            perturbance: 0.5,
        });

        // Automatic drops
        setInterval(() => {
            const $el = $('.ripple');
            const x = Math.random() * $el.outerWidth();
            const y = Math.random() * $el.outerHeight();
            const dropRadius = 20;
            // eslint-disable-next-line no-mixed-operators
            const strength = 0.04 + Math.random() * 0.04;

            $el.ripples('drop', x, y, dropRadius, strength);
        }, 400);
    }
};

export default initRipplesEffect;
