exports.task = {
  my_target: {
    files: [{
      expand: true,
      cwd: '../',
      src: 'bundle.css',
      dest: '../',
      ext: '.min.css'
    }]
  }
};
