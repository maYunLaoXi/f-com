import resolve from 'rollup-plugin-node-resolve'
import { uglify } from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'
import merge from 'webpack-merge'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import dts from 'rollup-plugin-dts'

const outputDisk = './dist/'
const miniprogramDisk = './miniprogram_dist/'

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
  },
  { // 小程序版
    input: './src/miniprogram.ts',
    output: {
      file: miniprogramDisk + 'index.js',
      format: 'umd'
    },
    // plugins: [
    //   uglify()
    // ]
  }
]
const result = []
for(let item of packages) {
  result.push(merge(config, item))
}
result.push({
  input: 'dist/index.d.ts',
  output: [{ file: 'dist/types.d.ts', format: 'es' }],
  plugins: [dts()]
}, {
  input: 'miniprogram_dist/miniprogram.d.ts',
  output: [{ file: 'miniprogram_dist/types.d.ts', format: 'es' }],
  plugins: [dts()]
})
export default result