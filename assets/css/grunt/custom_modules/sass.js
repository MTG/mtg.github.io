exports.task = {
  dist: {
    options: {
      style: 'expanded',
      lineNumbers: true, // 1
      sourcemap: 'none'
    },
    files: [{
      expand: true, // 2
      cwd: '../src',
      src: 'theme.scss',
      dest: '../src',
      ext: '_compiled.css'
    }]
  }
};
