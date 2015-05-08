var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass        = require('gulp-sass'),
    plumber     = require('gulp-plumber'),
    reload      = browserSync.reload;

// Serve static files using browser-sync
gulp.task('serve', ['sass'], function () {
  // Initialize browser-sync
  browserSync.init({
    server: "public",
    browser: "google chrome",
    notify: false,
    port: 5757
  });

  // Setup watch for scss, html
  gulp.watch("public/scss/*.scss", ['sass']);
  gulp.watch("public/*.html").on('change', reload);
  gulp.watch("public/*.js").on('change', reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("public/scss/*.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest("public/css"))
        .pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);
