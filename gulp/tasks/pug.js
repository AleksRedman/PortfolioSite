'use strict';

module.exports = function () {
  const fs = require('fs')
  $.gulp.task('pug', function () {
    return $.gulp.src('./source/template/pages/*.pug')
      .pipe($.gp.pug({ 
        locals : JSON.parse(fs.readFileSync('./content.json', 'utf8')), 
        pretty: '\t' 
      }))
      .on('error', $.gp.notify.onError(function (error) {
        return {
          title: 'Pug',
          message:  error.message
        };
      }))
      .pipe($.gulp.dest($.config.root));
  });
};
