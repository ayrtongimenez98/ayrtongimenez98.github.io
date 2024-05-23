'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"android/android-launchericon-144-144.png": "47e3c69b658db2e61a25be804e725fda",
"android/android-launchericon-192-192.png": "0fbfbf33c539a87e873806a021c4fb9c",
"android/android-launchericon-48-48.png": "4d484f533c502433b6cc5490e7880b27",
"android/android-launchericon-512-512.png": "2f94a4d1017e6054584298ca77c7cfc0",
"android/android-launchericon-72-72.png": "ac92ea7deae38842f46b697e3cb5d36e",
"android/android-launchericon-96-96.png": "a4bc51b7614fc6617d6eb2d22ed762fa",
"assets/AssetManifest.bin": "b7c905643ab690678489bbf0a4bf6e3c",
"assets/AssetManifest.bin.json": "88b339d85cd20daa6330bbd33f0f9736",
"assets/AssetManifest.json": "89e2c3023c1368246198263957b2442e",
"assets/assets/fonts/InterTight.ttf": "18915174b5436deb4265dabe66d0d5fd",
"assets/assets/images/bottom1.png": "2bb2cf5aa65b0d57008536517236a964",
"assets/assets/images/bottom2.png": "8b7ed694addc9ca2f3f8d963c8893646",
"assets/assets/images/logo.png": "7fe8485315fe57e570dee05627b8107b",
"assets/assets/images/main.png": "ed5594c7fd001875ae8a4c82a525dd40",
"assets/assets/images/top1.png": "b18d5150a72490b677e02ed356f98e89",
"assets/assets/images/top2.png": "b18d5150a72490b677e02ed356f98e89",
"assets/FontManifest.json": "f46a943866ebc2d5830f2382acabaf9e",
"assets/fonts/MaterialIcons-Regular.otf": "1f03f5f54e7032d897df479383f81b23",
"assets/NOTICES": "ce4f1db9b3990d0154f0238b5d4c1e65",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/sn_progress_dialog/images/cancel.png": "be94b63af32e39fabad56e2cab611b4b",
"assets/packages/sn_progress_dialog/images/completed.png": "4f4ec717f6bb773c80db76261bb367c3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "055fdd524378523f7b3a12f486c83c4f",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1429667c4f8e7e18e4f4c9458d570ed0",
"/": "1429667c4f8e7e18e4f4c9458d570ed0",
"ios/100.png": "93fc5f28148ecd419ddbca8ee6855f36",
"ios/1024.png": "66a59bcee1a4c87289256f901d92f880",
"ios/114.png": "b441035893efd275d8c606cafb9bf8a6",
"ios/120.png": "bd6e170fee31c8354840ef817b4d9163",
"ios/128.png": "d60d16826a44d2a773508ee28a1ddaf3",
"ios/144.png": "47e3c69b658db2e61a25be804e725fda",
"ios/152.png": "60a57267e4c990de4c961975f2e96e9b",
"ios/16.png": "fdc787016980b376bfb1bfcd89f7f0ad",
"ios/167.png": "57437d11d8af70bfbd980b1d1b101539",
"ios/180.png": "0de2338998aaaa8a937703936aae1975",
"ios/192.png": "0fbfbf33c539a87e873806a021c4fb9c",
"ios/20.png": "b38767fab49f6bd4cdc0ceffbc363a0a",
"ios/256.png": "e55ee53a968e662283a9006c58b55f31",
"ios/29.png": "f6b8e0c4889be2e9dab0cb7e617faa07",
"ios/32.png": "fd12755209fcc374df7877288a51a9ac",
"ios/40.png": "f0433bea3d686463f164f546854bc244",
"ios/50.png": "bfb2b7a4bfbafae9191b20348c26ed73",
"ios/512.png": "2f94a4d1017e6054584298ca77c7cfc0",
"ios/57.png": "d341ce1c7cf68edc4cc698429210caf7",
"ios/58.png": "7f75c8f1fb1dd1e504bef1d5a60bd785",
"ios/60.png": "fa9288f535d0efec52d717e4a1f46903",
"ios/64.png": "b6a17c9b0d672e2ebcb8a560c601d785",
"ios/72.png": "ac92ea7deae38842f46b697e3cb5d36e",
"ios/76.png": "00cf30d0980d3a93294e57317b3a1b38",
"ios/80.png": "76636abd357ba6e00aaf010c5ac15b7b",
"ios/87.png": "839d1950521347e66838ecd768492963",
"main.dart.js": "868b5940c26ea764b098fecd84d6bd2e",
"manifest.json": "3a8ce0ebd9f01f745ab9865d1fc47cd4",
"version.json": "83b0c27af2dbf52599db26f4f90bf8fc",
"windows11/LargeTile.scale-100.png": "99f0ebd454147a2f2a3edcbaba5c8fa9",
"windows11/LargeTile.scale-125.png": "b587f9165e0d62255e8ab3c6d67fe89d",
"windows11/LargeTile.scale-150.png": "981ff3b926c918c6ba4a7d27f9cc8173",
"windows11/LargeTile.scale-200.png": "f2b80f6dfb8f9df43e37e625b0306999",
"windows11/LargeTile.scale-400.png": "72928bcae877315c854a699d978733b2",
"windows11/SmallTile.scale-100.png": "919a465b85947bb99253bdfea3dc4a6d",
"windows11/SmallTile.scale-125.png": "eea0c14f090fb6681fad76ad622da273",
"windows11/SmallTile.scale-150.png": "1f602c4ab2f219ad56d3ca9c3fe5806d",
"windows11/SmallTile.scale-200.png": "e8839ccbf40aee2e8610edc75593d88d",
"windows11/SmallTile.scale-400.png": "e4dc2323a3bc747bb705193f124076ae",
"windows11/SplashScreen.scale-100.png": "c46d787de370500e8dfde1d1942113e4",
"windows11/SplashScreen.scale-125.png": "04316e782c7e1056bedc7f4ac4641eed",
"windows11/SplashScreen.scale-150.png": "f531638a1c173621f5bbd56e4c1c996d",
"windows11/SplashScreen.scale-200.png": "c8fa70ffda202b9d4359c672d7067224",
"windows11/SplashScreen.scale-400.png": "197400d16e7637056e4a2cc30adc1fcf",
"windows11/Square150x150Logo.scale-100.png": "4ba3555941e1a2f426143b07262cfb66",
"windows11/Square150x150Logo.scale-125.png": "f068901e0257e935e10eba9ebfbe3893",
"windows11/Square150x150Logo.scale-150.png": "6f351c4da3f52b3d0386b832b2c6a076",
"windows11/Square150x150Logo.scale-200.png": "a21dbdfc75a5a737866f6c945aaf7fb6",
"windows11/Square150x150Logo.scale-400.png": "ba50e2d46b1b98f0d0eb8f733e8e9f67",
"windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png": "fdc787016980b376bfb1bfcd89f7f0ad",
"windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png": "b38767fab49f6bd4cdc0ceffbc363a0a",
"windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png": "975fb2df7952e2e3a32241a3e0f8669a",
"windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png": "e55ee53a968e662283a9006c58b55f31",
"windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png": "100f66303b8ebeee7482aaf77771af80",
"windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png": "fd12755209fcc374df7877288a51a9ac",
"windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png": "7548f2338412e540e089efcae067b38a",
"windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png": "f0433bea3d686463f164f546854bc244",
"windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png": "fd0e5566ef1e0695cf6de1e8b4795a53",
"windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png": "4d484f533c502433b6cc5490e7880b27",
"windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png": "fa9288f535d0efec52d717e4a1f46903",
"windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png": "b6a17c9b0d672e2ebcb8a560c601d785",
"windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png": "ac92ea7deae38842f46b697e3cb5d36e",
"windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png": "76636abd357ba6e00aaf010c5ac15b7b",
"windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png": "a4bc51b7614fc6617d6eb2d22ed762fa",
"windows11/Square44x44Logo.altform-unplated_targetsize-16.png": "fdc787016980b376bfb1bfcd89f7f0ad",
"windows11/Square44x44Logo.altform-unplated_targetsize-20.png": "b38767fab49f6bd4cdc0ceffbc363a0a",
"windows11/Square44x44Logo.altform-unplated_targetsize-24.png": "975fb2df7952e2e3a32241a3e0f8669a",
"windows11/Square44x44Logo.altform-unplated_targetsize-256.png": "e55ee53a968e662283a9006c58b55f31",
"windows11/Square44x44Logo.altform-unplated_targetsize-30.png": "100f66303b8ebeee7482aaf77771af80",
"windows11/Square44x44Logo.altform-unplated_targetsize-32.png": "fd12755209fcc374df7877288a51a9ac",
"windows11/Square44x44Logo.altform-unplated_targetsize-36.png": "7548f2338412e540e089efcae067b38a",
"windows11/Square44x44Logo.altform-unplated_targetsize-40.png": "f0433bea3d686463f164f546854bc244",
"windows11/Square44x44Logo.altform-unplated_targetsize-44.png": "fd0e5566ef1e0695cf6de1e8b4795a53",
"windows11/Square44x44Logo.altform-unplated_targetsize-48.png": "4d484f533c502433b6cc5490e7880b27",
"windows11/Square44x44Logo.altform-unplated_targetsize-60.png": "fa9288f535d0efec52d717e4a1f46903",
"windows11/Square44x44Logo.altform-unplated_targetsize-64.png": "b6a17c9b0d672e2ebcb8a560c601d785",
"windows11/Square44x44Logo.altform-unplated_targetsize-72.png": "ac92ea7deae38842f46b697e3cb5d36e",
"windows11/Square44x44Logo.altform-unplated_targetsize-80.png": "76636abd357ba6e00aaf010c5ac15b7b",
"windows11/Square44x44Logo.altform-unplated_targetsize-96.png": "a4bc51b7614fc6617d6eb2d22ed762fa",
"windows11/Square44x44Logo.scale-100.png": "fd0e5566ef1e0695cf6de1e8b4795a53",
"windows11/Square44x44Logo.scale-125.png": "e9017582dafc37e81c140683a7cf0295",
"windows11/Square44x44Logo.scale-150.png": "2cee816e8d4d46606dd68bf4d4619a29",
"windows11/Square44x44Logo.scale-200.png": "41146ee97be42fa52cc847f765295c47",
"windows11/Square44x44Logo.scale-400.png": "bc38c08fd83f78c9f387201ad3cfb270",
"windows11/Square44x44Logo.targetsize-16.png": "fdc787016980b376bfb1bfcd89f7f0ad",
"windows11/Square44x44Logo.targetsize-20.png": "b38767fab49f6bd4cdc0ceffbc363a0a",
"windows11/Square44x44Logo.targetsize-24.png": "975fb2df7952e2e3a32241a3e0f8669a",
"windows11/Square44x44Logo.targetsize-256.png": "e55ee53a968e662283a9006c58b55f31",
"windows11/Square44x44Logo.targetsize-30.png": "100f66303b8ebeee7482aaf77771af80",
"windows11/Square44x44Logo.targetsize-32.png": "fd12755209fcc374df7877288a51a9ac",
"windows11/Square44x44Logo.targetsize-36.png": "7548f2338412e540e089efcae067b38a",
"windows11/Square44x44Logo.targetsize-40.png": "f0433bea3d686463f164f546854bc244",
"windows11/Square44x44Logo.targetsize-44.png": "fd0e5566ef1e0695cf6de1e8b4795a53",
"windows11/Square44x44Logo.targetsize-48.png": "4d484f533c502433b6cc5490e7880b27",
"windows11/Square44x44Logo.targetsize-60.png": "fa9288f535d0efec52d717e4a1f46903",
"windows11/Square44x44Logo.targetsize-64.png": "b6a17c9b0d672e2ebcb8a560c601d785",
"windows11/Square44x44Logo.targetsize-72.png": "ac92ea7deae38842f46b697e3cb5d36e",
"windows11/Square44x44Logo.targetsize-80.png": "76636abd357ba6e00aaf010c5ac15b7b",
"windows11/Square44x44Logo.targetsize-96.png": "a4bc51b7614fc6617d6eb2d22ed762fa",
"windows11/StoreLogo.scale-100.png": "3f5f6b389273c7de25377ab47d69d9a8",
"windows11/StoreLogo.scale-125.png": "814654abb4dc1ad93f1aa8b77f4735a5",
"windows11/StoreLogo.scale-150.png": "3e18ee4b298c41e0c642ea1ffe4e2343",
"windows11/StoreLogo.scale-200.png": "a27b34c572088fb938a223d6e9bfce5f",
"windows11/StoreLogo.scale-400.png": "17e644c2ce52135f0ccdb028f8c1c6c6",
"windows11/Wide310x150Logo.scale-100.png": "67d89f32049baaceccd68655b8199449",
"windows11/Wide310x150Logo.scale-125.png": "51585fdef69a9d7c8137cd1b38a5d092",
"windows11/Wide310x150Logo.scale-150.png": "9aa5bd3ccbbcc0403e961cdaf6bef309",
"windows11/Wide310x150Logo.scale-200.png": "c46d787de370500e8dfde1d1942113e4",
"windows11/Wide310x150Logo.scale-400.png": "c8fa70ffda202b9d4359c672d7067224"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
