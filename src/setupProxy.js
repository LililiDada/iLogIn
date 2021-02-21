const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/devApi", {
      target: "http://47.93.186.87:8001/adminservice",
      changeOrigin: true,
      pathRewrite: {
        "/devApi": "",
      },
    })
  );
};
