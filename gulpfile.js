var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var transform = require('vinyl-transform');
var reactify = require('reactify');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('browserify', function(){
  var browserified = transform(function(filename) {
    var b = browserify();
    b.transform(reactify);
    b.add(filename);
    return b.bundle();
  });

  return gulp.src(['./js/**/*', './js/*'])
  .pipe(browserified)
  //.pipe(uglify())
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('./public'));
});

gulp.task('watch', function(){
  gulp.watch('./js/*/*', ['browserify']);
  gulp.watch('./js/*', ['browserify']);
})

gulp.task('default', ['browserify', 'watch'])
