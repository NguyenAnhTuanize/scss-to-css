let mix = require('laravel-mix');
require('mix-html-builder');
mix.options({
    processCssUrls: false
});
mix.copyDirectory('resources/images', 'public/images');
mix.copyDirectory('resources/fonts', 'public/fonts');
mix.copyDirectory('resources/*.php', 'public/');

mix.sass('resources/sass/app.scss', 'public/css/')
    .scripts(['resources/js/app.js'], 'public/js/app.js');

// mix.buildHtml({
//     htmlRoot: 'resources/views/index.html', // Your html root file
//     output: 'public/index.html', // The html output file
//     partialRoot: 'resources/views/partials'    // OPTIONAL: default partial path
// });

mix.browserSync({
    proxy: false,
    server: 'public'
});