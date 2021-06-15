// This function initialize lazy load image functionality
// Using 'vanilla-lazyload' library we can speeds up our website
// by loading images, video or iframes as they enter the viewport.
//
// Please refer to https://github.com/verlok/lazyload
// for complete reference on how to use 'vanilla-lazyload'

import $ from 'jquery';
import LazyLoad from 'vanilla-lazyload/dist/lazyload.amd';

export default function initLazyLoadImages() {
    if ($('.lazyload-images').length > 0) {
        const myLazyLoad = new LazyLoad({
            elements_selector: '.lazyload-images',
        });
        window.myLazyLoad = myLazyLoad;
    }
}
