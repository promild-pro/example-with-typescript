// // src/setupProxy.js (atau src/setupProxy.ts untuk TypeScript)
// import { createProxyMiddleware } from 'http-proxy-middleware'

// module.exports = function (app) {
//   app.use(
//     '/api', // Atur ini sesuai dengan endpoint API Anda
//     createProxyMiddleware({
//       target: 'http://localhost:3001', // Ganti dengan URL server Anda
//       changeOrigin: true,
//     }),
//   )
// }
