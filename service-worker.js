/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "bdd778c9a6e518aba332787e66c9ce85"
  },
  {
    "url": "assets/css/0.styles.86a9e901.css",
    "revision": "9e79f2ae8329ebab3e41ebe1b62e79f1"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.157fda13.js",
    "revision": "0025e163d2d9789e7708bd4d6269e60d"
  },
  {
    "url": "assets/js/10.6e071061.js",
    "revision": "ca28a5c551a846846c95f2e8915c4288"
  },
  {
    "url": "assets/js/14.a1005c61.js",
    "revision": "520f82df5d45ecd2b5864e192cf5be1b"
  },
  {
    "url": "assets/js/15.5cfa5c82.js",
    "revision": "610b7cb9db75ad609af315bc08d4d56b"
  },
  {
    "url": "assets/js/16.ce107e76.js",
    "revision": "62c00fa74bb836c41347d4371bf78955"
  },
  {
    "url": "assets/js/17.9d582f7f.js",
    "revision": "26387e289e247650a67392ceea52947e"
  },
  {
    "url": "assets/js/18.2389bf87.js",
    "revision": "42673be34290eb490bf0090e03c42c6f"
  },
  {
    "url": "assets/js/19.7c0e9af1.js",
    "revision": "5ae1a4bac0444da958bbe5ba2e8f95cb"
  },
  {
    "url": "assets/js/2.b2486df3.js",
    "revision": "e6698e851c6fb06c762000b7dd026808"
  },
  {
    "url": "assets/js/20.4c5a7bbf.js",
    "revision": "f3baff87af788696b4b7a14b72d10753"
  },
  {
    "url": "assets/js/21.b373e2e0.js",
    "revision": "8fb0ed13b370c223b1fea6084f0ddd58"
  },
  {
    "url": "assets/js/22.1122767b.js",
    "revision": "1d4c7200fc5828a33f237728ab928ef8"
  },
  {
    "url": "assets/js/23.56095149.js",
    "revision": "b4fe5c2a0b1b8135edf113f2ee710cd5"
  },
  {
    "url": "assets/js/24.20caa42c.js",
    "revision": "97ca5a2d9dd366702063a37967ca47bc"
  },
  {
    "url": "assets/js/25.6908d982.js",
    "revision": "311d443ea63d45595b7f1ae1ec9863ba"
  },
  {
    "url": "assets/js/26.cb234c0b.js",
    "revision": "7787ab3254f3efb8fc97ad8a05b5c1f6"
  },
  {
    "url": "assets/js/27.7766776e.js",
    "revision": "815f8f9a7a0b5a3198a18ab849fd5457"
  },
  {
    "url": "assets/js/28.800ce331.js",
    "revision": "bfa2678bd7a901722e8dd6befa64e0fa"
  },
  {
    "url": "assets/js/29.8b774d57.js",
    "revision": "a95a0bb3b9c01d3bbbe16caf7646aad1"
  },
  {
    "url": "assets/js/3.55c0b3eb.js",
    "revision": "b326195172eae3d8a496b031adf3c70a"
  },
  {
    "url": "assets/js/30.76e12d6a.js",
    "revision": "e2537f922d89029a9f25ab76a0f32f1d"
  },
  {
    "url": "assets/js/31.715cd18b.js",
    "revision": "74e6762921991aeb8f365be50431109a"
  },
  {
    "url": "assets/js/32.299f3a28.js",
    "revision": "204ae51eb2055932f216b14a092769cb"
  },
  {
    "url": "assets/js/33.a0510a1b.js",
    "revision": "9eb2a06e7598b8c04ba27db7e263f799"
  },
  {
    "url": "assets/js/34.1c866000.js",
    "revision": "f73b03d9c250049aa937cee31febdd8f"
  },
  {
    "url": "assets/js/35.bba59a96.js",
    "revision": "fd132f6ad5ab3701617d26c38b339ea7"
  },
  {
    "url": "assets/js/36.5c16cfe3.js",
    "revision": "08934e3edb81fc90d7449efb3529f7a3"
  },
  {
    "url": "assets/js/37.da03d051.js",
    "revision": "f0e0fbdedc65fcbf9e04653430d05c9e"
  },
  {
    "url": "assets/js/38.84ea9503.js",
    "revision": "ea5c7e20f2cf123d2c939eb6edeaa498"
  },
  {
    "url": "assets/js/39.2e692aae.js",
    "revision": "2e47c686614d847e993da55e15f20573"
  },
  {
    "url": "assets/js/4.ae2965bf.js",
    "revision": "1ec79bf42479596ae68ab8aaec921a75"
  },
  {
    "url": "assets/js/40.670a2a78.js",
    "revision": "5ac1a8b4ae5810aa7a5e49ac4e17a747"
  },
  {
    "url": "assets/js/41.4a8b6a29.js",
    "revision": "489b163ef5f49be664905aec25d273f4"
  },
  {
    "url": "assets/js/42.6a4a5104.js",
    "revision": "8a7172139f74ac1177d06996d5c11fa2"
  },
  {
    "url": "assets/js/43.f8374c2c.js",
    "revision": "94aa390f9f73e83c779c07d71f7bdd03"
  },
  {
    "url": "assets/js/44.0aa0512a.js",
    "revision": "210c043e08e7f8fd1a403d87b9a8b956"
  },
  {
    "url": "assets/js/45.359104a6.js",
    "revision": "4b00ffe12ced01007db8fad88ff103d8"
  },
  {
    "url": "assets/js/5.e91d217c.js",
    "revision": "cc6ee74b0a528408ad40412e82415756"
  },
  {
    "url": "assets/js/6.c2228eeb.js",
    "revision": "780b822012e841a32f1d1642f3b9e29d"
  },
  {
    "url": "assets/js/7.1d05d7ab.js",
    "revision": "064646ebe69114f06d8e40af1176f953"
  },
  {
    "url": "assets/js/8.baf6d0ef.js",
    "revision": "be5c43568e9d20ec1f653b595c41b2e9"
  },
  {
    "url": "assets/js/9.7a138c51.js",
    "revision": "884a439b7bb2fa3918d78a30e8e458db"
  },
  {
    "url": "assets/js/app.4f9fd55a.js",
    "revision": "684c83c59a408e742b5b1954cbac7b11"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~docsearch.a24449db.js",
    "revision": "0a6c922abd855057b663f8c5581acc66"
  },
  {
    "url": "assets/js/vendors~flowchart.af2c82a5.js",
    "revision": "bd267d5696890fed7f370b7d4d7fea66"
  },
  {
    "url": "categories/index.html",
    "revision": "cdd97649f74ef398c0981efd137193ce"
  },
  {
    "url": "categories/java/index.html",
    "revision": "1ae87eec7d5ebd290c5cf8bf44eeecde"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "50e60dba1251087f777480bf17b5dad4"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "207678872b60d991e1e00612733c435c"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "dba10136d9427e5eaae539cc35e024cc"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "468c1b980c0abd594eea5c7331cd1276"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "31f6e5a6f5ce65217d55befe3e19b5f5"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "rain.jpg",
    "revision": "567d998154f75c4694e7edfe37b8d022"
  },
  {
    "url": "tag/index.html",
    "revision": "0b332bf9488de538f7f9fc1e8b0c245a"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "57352c31171f9d1dee86e02c76295ec7"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "5cc228d11cf532eefd309479d61c64de"
  },
  {
    "url": "tags/js/index.html",
    "revision": "7dbfac215096b6be12254f168af47611"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "8abecbc7be59d0e75416036bf3a15688"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "08e7e9ed03c6f6dd60533f4be00c4dfe"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "4127f6ee96f6829c84e0f9024c6f047e"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "59f5469fc196f31f4af6bdc55367c7b6"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "870ceb1c9ff2ea52b78120b45d240e6f"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "61777513e4b946a8c8863bbe5be4a289"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "83a9e4ef053031c04b8dee1ce554b583"
  },
  {
    "url": "timeline/index.html",
    "revision": "5d07a7a3a27632460c98df0b50f76379"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "dfb9a82133e36ff76efb482337a6189a"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "c1b8c84ab4c31b24154f2a317f76a0c1"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "bb33859f1b9a8d3a716e08944f0782ca"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "c4254bc6971b56d04f28b2c22c04d931"
  },
  {
    "url": "生活分享/life.html",
    "revision": "b48cb86e09f58d6c2229280c3656a76b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
