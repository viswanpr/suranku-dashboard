
var gulp = require('gulp'),
    awspublish = require('gulp-awspublish'),
    conf = require('./gulp-config.json'),
    spawn = require('child_process').spawn;

var localConfig = {
    buildSrc: 'dist',
    getAwsConf: function (environment) {
        if (!conf[environment]) {
            throw 'No aws conf for env: ' + environment;
        }
        if (!conf[environment + 'Headers']) {
            throw 'No aws headers for env: ' + environment;
        }
        return { keys: conf[environment], headers: conf[environment + 'Headers'] };
    }
};

gulp.task('build', function(done) {
    var child = spawn('ng', ['build', '--aot', 'false'], {
        stdio: 'inherit'
    });

    child.on('close', function() {
        done();
    });
});

gulp.task('build:prod', function(done) {
    var child = spawn('ng', ['build', '--prod'], {
        stdio: 'inherit'
    });

    child.on('close', function() {
        done();
    });
});

gulp.task('deploy', ['build:prod'], function() {
    var awsConf = localConfig.getAwsConf('production');
    var publisher = awspublish.create(awsConf.keys);
    //console.log(publisher);
    return gulp.src(localConfig.buildSrc)
        .pipe(awspublish.gzip({ ext: '' }))
        .pipe(publisher.publish(awsConf.headers))
        .pipe(publisher.cache())
        .pipe(publisher.sync())
        .pipe(awspublish.reporter());
});