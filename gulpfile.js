// Include Plugins
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const gulp = require('gulp');
const gulpPostcss = require('gulp-postcss');
const gulpRename = require('gulp-rename');
const gulpSass = require('gulp-sass');


const paths = {
  scss: {
    src: 'src/*.+(scss|sass)',
    dest: 'dist/css'
  },
};

function compileCss() {
  return gulp.src(paths.scss.src)
    .pipe(gulpSass())
    .pipe(gulpPostcss([autoprefixer( {remove: false} )]))
    .pipe(gulp.dest(paths.scss.dest))
    .pipe(gulpRename(function(path) {
      path.extname = '.min.css';
    }))
    .pipe(gulpPostcss([cssnano()]))
    .pipe(gulp.dest(paths.scss.dest));
}

function watch() {
  gulp.watch(paths.scss.src, compileCss);
}

exports.compileCss = compileCss;

exports.default = gulp.series(compileCss, watch);
