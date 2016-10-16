var dest = './release';
var src = './app';

module.exports = {
  app: './app',
  build: './release',
  browserSync: {
    server: {
      // We're serving the src folder as well for sass sourcemap linking
      baseDir: [dest, src]
    },
    notify: false, //hide the annoying notification
    files: [
      dest + '/**',
      // Exclude Map files
      '!' + dest + '/**.map'
    ]
  },
  sass: {
    src: src + '/styles/sass/**/*.{sass,scss}',
    dest: dest + '/styles',
    settings: {
      bundleExec: true,
      css: dest + '/styles',
      debug: false,
      relative: false,
      sass: src + '/styles/sass',
      sourcemap: false,
      includePaths: ['node_modules']
    }
  },
  fonts: {
    src: src + '/fonts/**',
    dest: dest + '/fonts'
  },
  images: {
    src: src + '/images/**',
    dest: dest + '/images'
  },
  markup: {
    src: src + '/**/*.html',
    dest: dest
  },
  scripts: {
    all: src + '/scripts/**/*.js',
    modules: src + '/scripts/modules',
    src: src + '/scripts/app.js',
    dest: dest + '/scripts',
    libsSrc: src + '/scripts/libs/**/*.js',
    libsDest: dest + '/scripts/libs/',
    uglifyOptions: {
      mangle: true,
      sourceMap: false,
      compress: {
        sequences: true,
        properties: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: false,
        evaluate: true,
        if_return: true,
        join_vars: true,
        drop_console: true,
        global_defs: {
          DEBUG: false
        }
      },
      output: {
        beautify: true,
        indent_level: 0
      }
    }
  }
};
