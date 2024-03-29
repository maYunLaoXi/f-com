module.exports =  function(api) {
  // process.env.NODE_ENV
  console.log('env', process.env.NODE_ENV)
  const isTest = api.env('test')
  const presets =  [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ]
  ]
  const dom = {
    presets: [
      [
        "@babel/preset-env",
        {
          modules: false,
          useBuiltIns: "usage",
          corejs: "2"
        }
      ]
    ],
    ignore: ["./src/node/*.js", "./src/weapp/bmap-wx.js"]
  }
  let config = isTest ? { presets } : dom
  return config
}