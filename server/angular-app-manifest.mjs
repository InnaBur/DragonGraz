
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7363, hash: 'ccb36988664f5b7e9fd357c6063e07da5b6fec7759f9763fc9497c2980a45212', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 948, hash: 'd7aae6902dc5612d4304022afaf35288b61caec5daed9f2b39d954208f0f0fdc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 26602, hash: '4727d9e9b1762b36fd802a6ddc18157a22c89272b9eb4b5cb2018472b07216b8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-7KVLRBU3.css': {size: 22066, hash: 'CsCg4lneL10', text: () => import('./assets-chunks/styles-7KVLRBU3_css.mjs').then(m => m.default)}
  },
};
