const gulp          = require('gulp');
const browserSync   = require('browser-sync').create();
const concat        = require('gulp-concat');
const uglify        = require('gulp-uglify');
const sourcemaps    = require('gulp-sourcemaps');
const imagemin      = require('gulp-imagemin');
const clean         = require('gulp-clean');
const gutil         = require('gulp-util');

const ngAnnotate    = require('gulp-ng-annotate');
const ngDocs        = require('gulp-ngdocs');

/* ====================================
  Conts && Options 
==================================== */

const ENVIROMENT = 'develop';

const optionsUglify = {
  mangle: true
};

const optionsConcat = {
  newLine: ';'
};

// true helps add where @ngInject is not used. It infers.
// Doesn't work with resolve, so we must be explicit there
const optionsAnnotate = {
  add: true
};

const optionsServer = {
  port: 9090,
  server: {
    baseDir: './dist',
    index: 'index.html'
  }
};

const optionsNgDocs = {
  scripts: ['./src/app/**/*.js'],
  html5Mode: true,
  startPage: '/api',
  title: 'The Bit Library Docs',
  image: '',
  imageLink: '',
  titleLink: ''
};

/* ====================================
  Paths 
==================================== */

const baseSrc     = './src/';
const baseDist    = './dist/';
const pathsSrc    = {};
const pathsDist   = {};

pathsSrc.scripts     = baseSrc + 'app/**/*.js';
pathsSrc.templates   = baseSrc + 'app/**/*.html';
pathsSrc.assets      = baseSrc + 'app/assets/';
pathsSrc.mocks       = baseSrc + 'mocks/**/*.json';
pathsSrc.vendor      = baseSrc + 'vendor/**/*.js';
pathsSrc.sass        = 'sass/**/*.sass';

pathsDist.scripts    = baseDist + 'app/scripts';
pathsDist.vendor     = baseDist + 'app/vendor';
pathsDist.templates  = baseDist + 'app/';
pathsDist.mocks      = baseDist + 'mocks/';

/* ====================================
  Tasks 
==================================== */

/* Builder */

gulp.task('clean', (done)=> {

  gulp.src(baseDist + '/*', {read: false})
    .pipe(clean());
  done();
});

gulp.task('prepareStatics', (done)=> {

  gulp.src( baseSrc + 'index.html' )
    .pipe(gulp.dest( baseDist ));

  gulp.src( pathsSrc.templates )
    .pipe(gulp.dest( pathsDist.templates ));

  gulp.src( pathsSrc.assets )
    .pipe(gulp.dest( pathsDist.templates ));

  gulp.src( pathsSrc.vendor )
    .pipe(gulp.dest( pathsDist.vendor )); 

  if ( ENVIROMENT !== 'production' ) {
    gulp.src( pathsSrc.mocks )
      .pipe(gulp.dest( pathsDist.mocks ));   
  }

  done();
});


gulp.task('prepareScripts', (done)=> {

  gulp.src(pathsSrc.scripts)
    .pipe(sourcemaps.init())
    .pipe( concat('main.min.js', optionsConcat) )
    // Annotate before uglify so the code get's min'd properly.
    .pipe( ngAnnotate(optionsAnnotate) )
    // .pipe(bytediff.start())
    .pipe( ENVIROMENT === 'production' ? uglify(optionsUglify) :  gutil.noop() )
    //  .pipe(bytediff.stop())
    .pipe(sourcemaps.write('./'))
    .pipe( gulp.dest(pathsDist.scripts) );

  done();
});

gulp.task('build', gulp.parallel('prepareScripts', 'prepareStatics', (done)=> {
    done();
}));

/* Server */

gulp.task('server', ()=> {

  browserSync.init(optionsServer);
  //gulp.watch(baseSrc + '/**/*.js').on('change', browserSync.reload);

  gulp.watch(baseSrc + '/**/*.js').on('change', gulp.series('build'), (done)=> {
    browserSync.reload();
    done();
  });

    gulp.watch(baseSrc + '/**/*.html').on('change', gulp.series('build'), (done)=> {
    browserSync.reload();
    done();
  });

});


/* Others */

// todo
// gulp.task('ngdocs', [], (done)=> {

//   gulp.src(pathsSrc.scripts)
//     .pipe(ngDocs.process(optionsNgDocs))
//     .pipe(gulp.dest('./docs'));

//   done();
// });



gulp.task('default', gulp.series('build', 'server'), (done)=> {

  gutil.log('Gulp is running!');
  done();
});