import $ from 'jquery';
// import initD3 from './init-d3';

// ----------------------------------------
// Dynamic imports to enable code-splitting
// ----------------------------------------
const initD3 = () =>
    import(/* webpackChunkName: "page-template" */ './init-d3.js');

export default function initLazyLoadImages() {
    if ($('.d3-container').length > 0) {
        initD3();
    }
}
