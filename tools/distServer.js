import browserSync from 'browser-sync';

browserSync({
  port: 8000,
  ui: {
    port: 8001,
  },
  server: {
    baseDir: ['dist'],
  },
  browser: 'chrome',
});
