var     gulp            = require('gulp'),
        postcss         = require('gulp-postcss'),
        sass            = require('gulp-sass'),
        rename          = require('gulp-rename'),
        minify          = require('cssnano'),
        watch           = require('gulp-watch');

sass.compiler = require('node-sass');

gulp.task('scss', function() {
        return gulp.src('sass/*.scss')
                .pipe(sass().on('error', sass.logError))
                .pipe(postcss([
                        minify()
                ]))
                .pipe(rename({extname:".css"}))
                .pipe(gulp.dest('./stylesheets'))
})

gulp.task('build',gulp.series('scss'));


gulp.task('watch', function() {
        return gulp.watch('sass/*.scss',gulp.series('scss'));
});
