import resolve from 'rollup-plugin-node-resolve'
import { uglify } from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'
import merge from 'webpack-merge'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'

const outputDisk = './dist/'

const config = {
  input: './src/index.ts',
  output: {
    name: 'fCom',
    file: outputDisk + 'f-com.js',
    format: 'umd'
  },
  plugins: [
    commonjs({
      include: 'node_modules/**'
    }),
    resolve(),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**' // 只编译我们的源代码
    }),
    typescript()
  ]
}

const packages = [
  {},
  {
    output: {
      file: outputDisk + 'f-com.min.js',
      format: 'umd',
    },
    plugins: [
      uglify()
    ]
  },
  {
    output: {
      file: outputDisk + 'f-com.es.js',
      format: 'es'
    }
  },
  {
    output: {
      file: outputDisk + 'f-com.cjs.js',
      format: 'cjs'
    }
  }
]
const result = []
for(let item of packages) {
  result.push(merge(config, item))
}
export default result