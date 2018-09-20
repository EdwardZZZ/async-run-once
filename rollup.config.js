import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/index.js',
  dest: 'index.js',
  format: 'umd',
  moduleName: 'module',
  sourceMap: 'inline',
  plugins: [
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    // eslint()
  ],
};