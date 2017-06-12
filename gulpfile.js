const gulp = require('gulp');
const ts = require('gulp-typescript');
const JSON_FILES = ['src/*.json', 'src/**/*.json', 'src/*.html', 'src/**/*.html'];
const del = require('del');
const exec = require('child_process').exec;

// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');

gulp.task('clean', () => {
    return del(['dist/*']);
});

gulp.task('docs', function(cb) {
    exec('/usr/local/bin/markdown README.mb > dist/README.html', function(err) {
        if (err) return cb(err); // return the error if any
        cb(); // finish the task
    });
});

gulp.task('build', ['assets'], () => {
    const tsResult = tsProject.src()
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('watch', ['build'], () => {
    gulp.watch('src/**/*.ts', ['build']);
});

gulp.task('assets', function() {
    return gulp.src(JSON_FILES)
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['watch', 'assets']);
