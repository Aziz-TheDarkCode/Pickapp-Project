var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var fileinclude = require('gulp-file-include');

gulp.task('sass', function () {
  return gulp
    .src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});

gulp.task('fileinclude', function () {
  return gulp
    .src('src/html/**/*.html')
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: '@file'
      })
    )
    .pipe(gulp.dest('dist/html'))
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});

function runGulp() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  // gulp.watch('src/html/**/*.html').on('change', function () {
  //   browserSync.reload();
  // });
  // gulp.watch('src/js/**/*.js').on('change', function () {
  //   browserSync.reload();
  // });
  gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('src/html/**/*.html', gulp.series('fileinclude'));
}

exports.default = runGulp;
