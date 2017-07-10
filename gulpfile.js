var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var to5 = require('gulp-6to5');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');

var config = {
  source: './src/',
  dist: './public/'
};
var paths = {
  assets: 'assets/',
  html: '**/*.html',
  sass: 'scss/**/*.scss',
  js: 'js/**/*.js',
  mainSass: 'scss/main.scss',
  mainJS: 'js/**/*.js',
  img: 'img/**'
};
var sources = {
  assets: config.source + paths.assets,
  html: config.source + paths.html,
  sass: config.source + paths.assets + paths.sass,
  js: config.source + paths.assets + paths.js,
  rootSass: config.source + paths.assets + paths.mainSass,
  rootJS: config.source + paths.assets + paths.mainJS,
  img: config.source + paths.assets + paths.img
};

gulp.task('html', ()=> {
  gulp.src(sources.html).pipe(gulp.dest(config.dist));
});

gulp.task('img', ()=> {
  gulp.src(sources.img).pipe(gulp.dest(config.dist+ paths.assets + "img"));
});

gulp.task('sass', ()=> {
  gulp.src(sources.rootSass)
    .pipe(sass({
      outStyle: "compressed"
    }).on("error", sass.logError))
    .pipe(gulp.dest(config.dist + paths.assets + "css"))
    .pipe(browserSync.stream());

});

gulp.task('js', ()=> {
   gulp.src(sources.rootJS)
      .pipe(plumber())
      .pipe(to5())
      .pipe(concat("app.js"))
      .pipe(uglify())
      .pipe(gulp.dest(config.dist + paths.assets + "js"))
      .pipe(browserSync.stream());
});



// gulp.task('js', ()=> {
//    gulp.src(sources.rootJS)
//       .pipe(browserify())
//       .pipe(rename("app.js"))
//       .pipe(gulp.dest(config.dist + paths.assets + "js"))
//       .pipe(browserSync.stream());
// });

gulp.task('html-watch', ["html"], function (done) {
  browserSync.reload();
  done();
});
gulp.task('img-watch', ["img"], function (done) {
  browserSync.reload();
  done();
});

gulp.task('nodemon', function (cb) {
    var callbackCalled = false;
    return nodemon({script: 'server.js'}).on('start', function () {
        if (!callbackCalled) {
            callbackCalled = true;
            cb();
        }
    });
});

gulp.task('serve',['nodemon'], ()=> {
  browserSync.init(null,{
    proxy: "http://localhost:3000",
    // server: {
    //   baseDir: config.dist
    // }
  });
  gulp.watch(sources.sass, ['sass']);
  gulp.watch(sources.js, ['js']);
  gulp.watch(sources.html, ['img-watch']);
  gulp.watch(sources.html, ['html-watch']);
});

gulp.task('default', ['serve']);
