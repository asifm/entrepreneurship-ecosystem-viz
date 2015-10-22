var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
var es = require('event-stream');

gulp.task('coffee', function(){
    return gulp.src('coffee/*.coffee')
        .pipe(coffee())
        .pipe(gulp.dest('js'));
})

gulp.task('watch', function(){
    gulp.watch('coffee/*.coffee', ['coffee']);
});