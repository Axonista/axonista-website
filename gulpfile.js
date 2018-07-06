var     gulp            = require('gulp'),
        sass            = require('gulp-sass'),
        rename          = require('gulp-rename'),
        cssnano         = require('gulp-cssnano'),
        watch           = require('gulp-watch');

gulp.task('scss', function() {
        return gulp.src('sass/*.scss')
                .pipe(sass())
                .pipe(cssnano())
                .pipe(rename({extname:".css"}))
                .pipe(gulp.dest('stylesheets'))
})

gulp.task('build',['scss']);


gulp.task('watch', function() {
        return gulp.watch('sass/*.scss',['scss']);
});
