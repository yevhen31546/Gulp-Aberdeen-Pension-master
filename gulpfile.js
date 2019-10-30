"use strict";

const gulp      = require('gulp'),
  browserSync   = require('browser-sync'),
  sass          = require('gulp-sass'),
  imagemin      = require('gulp-imagemin'),
  sequence      = require('gulp-sequence'),
  del           = require('del'),
  autoprefixer  = require('gulp-autoprefixer'),
  useref        = require('gulp-useref'),
  babel         = require('gulp-babel'),
  util          = require('gulp-util'),
  concat        = require('gulp-concat'),
  gulpif        = require('gulp-if'),
  rename        = require('gulp-rename'),
  gutil         = require('gulp-util'),
  rev           = require('gulp-rev'),
  revReplace    = require('gulp-rev-replace');




/*------------SASS TO CSS (ROOT)--------------------------------------------------------------------------------------*/
gulp.task('sass', function () {

  log('---------------------------------> COMPILING SASS CSS');

  return gulp.src('./development/css/main.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false
    }))
    .pipe(rev())
    .pipe(rev.manifest({
            base: '.',
            merge: false
        }))
    .pipe(gulp.dest('./dist/css'));
});

/*------------IMAGES--------------------------------------------------------------------------------------------------*/
 gulp.task('imagemin', function () {

   log('---------------------------------> COPYING IMAGES');

   return gulp.src('./development/img/**/*')
     .pipe(imagemin())
     .pipe(gulp.dest('./dist/img'));
 });

 /*------------JS-----------------------------------------------------------------------------------------------*/
  gulp.task('js', function () {

    log('---------------------------------> Concate js');

    gulp.src('./development/js/**/*')
        .pipe(gulp.dest('./dist/js'));

     gulp.src([
       './development/vendors/jquery/dist/jquery.js',
       './development/vendors/angular/angular.js',
       './development/vendors/angular-ui-router/release/angular-ui-router.js',
       './development/vendors/angulartics/dist/angulartics.min.js',
       './development/vendors/angulartics-google-analytics/dist/angulartics-ga.min.js',
       './development/vendors/bootstrap/dist/js/bootstrap.min.js',
       './development/js/aberdeenApp.js',
       './development/js/global.controller.js',
       './development/js/directives/navbar/navigation.directive.js',
       './development/js/directives/footer/footer.directive.js',
       './development/js/aberdeenApp.routes.js',
       './development/js/committee.controller.js',
       './development/js/news.menu.controller.js',
       './development/js/directives/active-dot.directive.js',
       './development/js/scroll.top.run.js',
       './development/js/directives/resource/resource.directive.js'
     ])
       .pipe(concat('all.js'))
       .pipe(rev())
       .pipe(gulp.dest('./dist/js'))
       .pipe(rev.manifest({
               base: '.',
               merge: false
           }));
  });


/*------------LEMONADE-FONTS------------------------------------------------------------------------------------------*/
 gulp.task('webfonts', function () {

   log('---------------------------------> COPYING WEB-FONTS');

   return gulp.src('./development/css/web-fonts/**/*.*')
     .pipe(gulp.dest('./dist/css/web-fonts'));
  });


/*------------TEMPLATES HTML FILES-----------------------------------------------------------------------------------------------*/
 var manifestCss = gulp.src("./dist/css/rev-manifest.json");
  var manifestJs = gulp.src("./dist/js/rev-manifest.json");

 gulp.task('views', function () {

   log('---------------------------------> COPYING TEMPLATES & htaccess');

    gulp.src('./development/views/**/*.html')
      .pipe(gulp.dest('./dist/views'));
    gulp.src('./development/*.html')
      .pipe(revReplace({manifest: manifestCss}))
      .pipe(revReplace({manifest: manifestJs}))
      .pipe(gulp.dest('./dist/'));
    gulp.src('./development/.htaccess')
        .pipe(gulp.dest('./dist/'));
 });

 /*------------DOCS--------------------------------------------------------------------------------------------------*/
  gulp.task('docs', function () {

    log('---------------------------------> COPYING DOCS');

    return gulp.src('./docs/**/*')
      .pipe(gulp.dest('./dist/docs'));
  });

  /*------------vendors--------------------------------------------------------------------------------------------------*/
   gulp.task('vendors', function () {

     log('---------------------------------> COPYING DOCS');

     return gulp.src('./development/vendors/**/*')
       .pipe(gulp.dest('./dist/vendors'));
   });



/*------------WATCH---------------------------------------------------------------------------------------------------*/
gulp.task('src', function () {
  gulp.watch('./development/css/**/*.scss', ['sass']);
  gulp.watch('./development/js/**/*', ['js']);
  gulp.watch('./development/img/**/*', ['imagemin']);
  gulp.watch('./development/*.html', ['views']);
  gulp.watch('./development/views/**/*.html', ['views']);
});



gulp.task('fulltask', ['sass','js','views','imagemin','docs','vendors','webfonts']);
gulp.task('default', ['sass','js','views','imagemin']);
//gulp.task('sequence', sequence('clean', 'views', 'jslibs', 'csslibrary', 'webfonts', 'fonts', 'imagemin', 'policy', 'files',  'useref'));
//gulp.task('build', ['sequence']);

/*------------HELPER FUNCTIONS----------------------------------------------------------------------------------------*/

function log(msg) {
  if(typeof(msg) === 'object') {
    for ( let item in msg) {
      if(msg.hasOwnProperty(item)) {
        util.log(util.colors.yellow(msg[item]));
      }
    }
  }else {
    util.log(util.colors.yellow(msg));
  }
}
