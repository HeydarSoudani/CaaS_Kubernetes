const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withOptimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');

module.exports = withPlugins([
    withSass,
    withCSS,
    [withOptimizedImages, {
        inlineImageLimit: 8192,
        imagesFolder: 'images',
        imagesName: '[name]-[hash].[ext]',
        handleImages: ['jpg', 'jpeg', 'png', 'svg', 'webp', 'gif', 'ico'],
        optimizeImages: true,
        optimizeImagesInDev: false,
        mozjpeg: {
            quality: 80,
        },
        optipng: {
            optimizationLevel: 3,
        },
        pngquant: false,
        gifsicle: {
            interlaced: true,
            optimizationLevel: 3,
        },
        svgo: {
            plugins: [
                { removeComments: false }
            ]
        },
        webp: {
            preset: 'default',
            quality: 75,
        },
    }],
    [withFonts, {
        enableSvg: true
    }]
]);