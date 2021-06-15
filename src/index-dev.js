// ---------------------------------------------------------------------------------
// Note:
//   This entry point index is only used for development purpose and
//   the corresponding bundled file is also useful ONLY in development.
//   So make sure that Backend Developer only include bundle related to production
//   since index-dev.js will be bundled as node script that browser don't understand.
// ---------------------------------------------------------------------------------
// This is the entry point of webpack buildchain
// Please import all necessary module here otherwise it won't get bundled by webpack
// Also make sure that you remove unnecessay imports to prevent big bundled files
// ref: https://webpack.js.org/concepts/entry-points/
// ---------------------------------------------------------------------------------

// Pug Template Import
function requireAll(r) {
    r.keys().forEach(r);
}

// requireAll(require.context('./template', true, /^((?![\\/]includes[\\/]).)*\.pug$/));
requireAll(
    require.context(
        './_modules/pages',
        true,
        /^((?![\\/]includes[\\/]).)*\.pug$/,
    ),
);
