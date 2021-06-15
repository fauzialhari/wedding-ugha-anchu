// -----------------------------------------------------------------
// Note:
// Avoid any implicit dependencies!
// Import everything that you need to make this script run correctly
// Let webpack handle the dependencies graph
// ref: https://webpack.js.org/guides/getting-started/
// -----------------------------------------------------------------

// Absolute imports
// -- Node modules import
import $ from 'jquery';

export default function initMakeImageCover() {
    // check
    if ($('.img-wrap').length !== 0) {
        $('img', '.img-wrap').each(() => {
            const img = this;
            $('<img/>')
                .attr('src', $(img).attr('src'))
                .waitForImages()
                .done(() => {
                    if (this.width < this.height) {
                        $(img).addClass('portrait');
                    }
                });
        });
    }
}
