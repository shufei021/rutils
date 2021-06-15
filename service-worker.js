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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1.png",
    "revision": "ab18d09df9b21365c9105ef9e424a22d"
  },
  {
    "url": "404.html",
    "revision": "c6ce46daeac5f26e254cd7acad4319af"
  },
  {
    "url": "about/index.html",
    "revision": "e1028664cae007d4ba2a999c4b522dbb"
  },
  {
    "url": "articles/index.html",
    "revision": "0314551f49c8e33040ef21f134f7d8eb"
  },
  {
    "url": "articles/VuePress搭建博客并发布到GitHub Pages.html",
    "revision": "d6a34b872edddae34fa0b232c94cf97a"
  },
  {
    "url": "assets/css/1.styles.380afd09.css",
    "revision": "bd2953ae21f32746ddb8402e019843e8"
  },
  {
    "url": "assets/css/2.styles.f6f4c535.css",
    "revision": "5050eeadc11224fc835c322dc6892581"
  },
  {
    "url": "assets/css/3.styles.8a388077.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.4adcc782.css",
    "revision": "9bc496f222bb99e4345ba65312ca5bf3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.380afd09.js",
    "revision": "e12d2de0092dd8f6b6f00437ca791878"
  },
  {
    "url": "assets/js/10.7af472b8.js",
    "revision": "b9860671836f32e5bc85ac7d6b7db1e4"
  },
  {
    "url": "assets/js/11.3497f631.js",
    "revision": "3eeeb193f5305081a08e748ae3178a64"
  },
  {
    "url": "assets/js/2.f6f4c535.js",
    "revision": "86cd5074ee0c74df755513f48cc9dc5b"
  },
  {
    "url": "assets/js/3.8a388077.js",
    "revision": "d77e2571194fa5cb936beb055b5168e1"
  },
  {
    "url": "assets/js/4.c036a7b5.js",
    "revision": "58afc77c1c6318071d45f34897f43d05"
  },
  {
    "url": "assets/js/5.16d5b44a.js",
    "revision": "9210e7ed4f2e0a7961bed5de0c391076"
  },
  {
    "url": "assets/js/6.937d4fac.js",
    "revision": "70dce680492c6c8bd36d77ae808e0875"
  },
  {
    "url": "assets/js/7.c52e138e.js",
    "revision": "7147d77127f040c37eb282221635137f"
  },
  {
    "url": "assets/js/8.13acf589.js",
    "revision": "4797a2c3e634021d04ac99aebc1550e5"
  },
  {
    "url": "assets/js/9.4b08e189.js",
    "revision": "350c93c40258fdc8f41575dbde6b3709"
  },
  {
    "url": "assets/js/app.4adcc782.js",
    "revision": "0a31abc3ac029e9bc2db7f0075900c64"
  },
  {
    "url": "avatar.png",
    "revision": "342f85dd3fb50682df5c952052644c05"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
    "revision": "e92f31b47df9a4af935f746ba4584b62"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "projects/index.html",
    "revision": "5b35f43d92c838ff6445ad536adde8f8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
