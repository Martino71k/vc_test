const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var rename = require("gulp-rename")
const imagemin = require('gulp-imagemin');

exports.default = () => (
    gulp.src('style.css')
        .pipe(autoprefixer({
            cascade: false
				}))
				.pipe(csso())
				.pipe(rename("style.min.css"))
        .pipe(gulp.dest('dist'))
);


gulp.task("images", function() {
  return gulp.src("assets/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),

  ]))
    .pipe(gulp.dest("dist/img"));
});