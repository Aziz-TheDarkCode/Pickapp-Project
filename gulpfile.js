var gulp = require('gulp');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();

// gulp.task('browserSync', function() {
//   browserSync.init({
//     server: {
//       baseDir: '.'
//     },
//   })
// })

gulp.task('sass', function(){
  return gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// gulp.task('watch', ['browserSync', 'sass'], function (){
//   gulp.watch('scss/**/*.scss', ['sass']); 
//   gulp.watch('html/*.html', browserSync.reload); 
//   gulp.watch('js/**/*.js', browserSync.reload); 
// });

function runGulp(){
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
  gulp.watch('html/*.html', browserSync.reload); 
  gulp.watch('js/**/*.js', browserSync.reload); 
  gulp.watch('scss/**/*.scss', gulp.series('sass')); 
  
}

// function runGulp(cb){
//   runSequence(['sass', 'browserSync'], 'watch',
//     cb
//   )
//   cb()
// }

exports.default = runGulp
