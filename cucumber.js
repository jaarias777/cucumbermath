const common = [
    'features/**/*.feature',
    '--require features/step_definitions/**/*.js',
    '--format summary',
  ].join(' ');
  
  module.exports = {
    default: common
  };
  