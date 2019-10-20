const mix = require('laravel-mix');

mix
    .setPublicPath('dist')
    .js('src/js/index.js', 'dist/js/cards.min.js')
    .js('src/js/test.js', 'dist/js/test.js')
    .sass('src/sass/cards20.scss', 'dist/css/cards20.min.css')
	.copyDirectory('src/images', 'dist/images')
    .options({
        processCssUrls: false
    });