'use strict';
module.exports = {
  root: './build',
  source: {
    html: './source/template/pages/*.pug',
    js: './source/js/app.js',
    css: './source/style/app.scss',
    img: './source/images/**/*.*',
    fonts: './source/fonts/**/*.*',
    spriteImg: './source/sprite/*.+(png|gif|jpg|jpeg|PNG|JPG|JPEG)',
    spriteImgRetina: './source/sprite/*@2x.+(png|gif|jpg|jpeg|PNG|JPG|JPEG)',
    spriteSvg: './source/sprite/*.svg'
  },
  build: {
    html: './build/',
    js: './build/assets/js',
    css: './build/assets/css',
    img: './build/assets/img',
    fonts: './build/assets/fonts',
    spriteImg: './source/images',
    spriteCss: './source/style/common'
  },
  watch: {
    html: './source/template/**/*.pug',
    js: './source/js/**/*.js',
    css: './source/style/**/*.scss',
    img: './source/images/**/*.*',
    fonts: './source/fonts/**/*.*',
    spriteImg: './source/sprite/**/*.+(png|gif|jpg|jpeg|PNG|JPG|JPEG)',
    spriteSvg: './source/sprite/**/*.svg'
  },
  autoprefixerConfig: ['last 3 version', '> 1%', 'ie 8', 'ie 9', 'Opera 12.1']
};

