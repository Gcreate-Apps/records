'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "606393e5133cee28021a5ae57c779630",
"index.html": "d4f802d7d1e2892dabf770399fbbeb56",
"/": "d4f802d7d1e2892dabf770399fbbeb56",
"main.dart.js": "9019194e69a3b034b4ea1d1db199b021",
"favicon.png": "d3ef7e86792515f7a423a41bc65cf585",
"icons/Icon-192.png": "d3ef7e86792515f7a423a41bc65cf585",
"icons/Icon-512.png": "d3ef7e86792515f7a423a41bc65cf585",
"manifest.json": "7c89611f1a3eb4fc147d5b58b4e7df2e",
".git/ORIG_HEAD": "9323525a798b1690610d607a33b5b8b5",
".git/config": "e5a63487b9d0a9aec914305927783fa0",
".git/objects/0d/1e5b5c77639b131c6e6cfe9bc56873f73bb334": "66aeb28aa811faac038b991c6b6c28fa",
".git/objects/95/d6f7f546ef0de3d58ef485fadc6fb7c5003258": "db7d4c8eba0e0ba34b5ada67987a3b70",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/57/19d65cbad8439f6f854a09f9234a0cdaf72b1a": "fece0310101f7b1925d278e694aa5a23",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/69/6e8b8c4394e5602d9574ce127b30cee5a4968d": "7f9c68fb4f6379a2865b0dbd5c25afb2",
".git/objects/67/bd84202ad5b2e307d3b6fac1731c2a5d963e0b": "aa161ace139f434c81be219b6f6205e5",
".git/objects/94/8f0a5d26e899539e7821aa5a500932f76ba582": "e9093d046b81c96e5fd46a48a0b68b11",
".git/objects/94/8218209a1bdd4756bad1f5bd5642f822fc479c": "34b31cb5f198081e20741cd28458492d",
".git/objects/34/58a51be15c5962978409aac071a2e4a6ce41dc": "255750207d3f147860cadbe90b0d014a",
".git/objects/34/5fa0c813d85c67afef3fb2b72f9e0c30c7b816": "2b4e0297f7197a83fc5a8ce3e2320440",
".git/objects/5a/e99328975db941310ef037d8119194269c400f": "22f47b367359f402942e6d307c1b97a5",
".git/objects/5a/215cbb012416f5836bb9651e0f68e35953832c": "d608c4255395f9706b9a7e5f1fa225bd",
".git/objects/5f/72e9127ffaae2a500cd9d950067f46c21b277c": "9334d3373cb9fc449377becf4cba5477",
".git/objects/a3/09313d5fb20765dff1d8f41dbd72c558097611": "ce77a88cc2b115d907f98afb245fa5f6",
".git/objects/ad/ec69ba745afbceeeebac6996f27e4e08147705": "2c82f17a1d043c58a69df2f92bc38b53",
".git/objects/d1/78c5fb101cf0ffb5934251a3f40426983d12c2": "c9c95f3992cc7cf72921e67cbd711018",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/76313e82b9e5d8e81baf50e919ed867d9d3f1d": "4109840b8648777d761bc05b92ab4f2a",
".git/objects/fc/90bd4ecb2f0e0eaeb68a8219c3ceaeddacc257": "1d5fdee7586e4dbf76651d778bc4b4cd",
".git/objects/fc/963dfe2292c4e241afb5950e063414d544c093": "8cd8693ced3c797431323a7707d38029",
".git/objects/fd/ec01d51114f4873a6b464ab51d7fa83c4dc1d6": "e91757d4d76b0a1b21f40f9670ef2df1",
".git/objects/f5/eaf7eb1511bd9532cebfae70e47524663de109": "50b1229f40423533da8629dc65d38889",
".git/objects/cf/9d069ba7bdc6a09e49a67568f23284c4b982df": "14db2d176994db263d36486b7686d503",
".git/objects/cf/e2d9f8fd1f1602ac2944104150deb151250322": "138cd42be5f7f5389f94211921b22a97",
".git/objects/e4/c52b96deba42ff59d29e8b563d65b701598c58": "4f411d5c018ba315bbdf22f54248128a",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "c1fb9fd9132eb732a1d95b1d7a283648",
".git/objects/c8/df92b853992397794e13e57140bbab28367e15": "4e587a7e4ba7acfc9ac1796c5c862e78",
".git/objects/20/c19bfd185a9a89115b516f410def69fa17152b": "c5dfe754f61e77ab4c4fa77d232fbcc2",
".git/objects/16/859891bfe2c2bd9806ab09db9956dcad75ed68": "c14650939e6eb803fe892a3b514a1a25",
".git/objects/42/f8780eac50987bb38f6c6c280a7a3e4c5eecb6": "57d37ef46991702f148440d8c3b70fd3",
".git/objects/45/53761b94ccb8d9921064574c32662acaa5332a": "8c7d974c9b8dd02b457b7f47f69f4f1a",
".git/objects/80/37bf07e334b0e042be0bdc69041ba9dccee971": "3548f518966137c6936badba2da03a02",
".git/objects/17/5a9c25d19eb68aa4d71d9a3ec3fc71481f6945": "fa9082e7222220d8977679adc619024d",
".git/objects/7e/ce3282a4f7824b249d9e568819d98bd2fa3da6": "8c71b613b9912dfd1fdf473a52e99214",
".git/objects/19/cc5a8f89df284d9feab4cb7c11556974ab9f9c": "c0b66d7b48423fa144a8ef4a9a70d894",
".git/objects/19/b0aa91ceca3bd765c2ebb786a1fc51adb5a361": "0f39d82f72ae5c1d5499456304e1f203",
".git/objects/21/c6eb96611abba21c7197a61b3d7d75598ea941": "00bab236f195f796ec88291a9f6a3b39",
".git/objects/44/8652c3404a4775b7e840fe781c282a5215698e": "fbe3214a1fd7c59775624140c5733fd6",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/5c/864864b8f6c231235a8d5cb0d8c8148c107d32": "43846ec6823a98d402c01a5883aab8fc",
".git/objects/09/4976638d4803f867e573eaaa0ea6dd4bca3b6b": "1c0f6070896e9efe5fab92750c977709",
".git/objects/98/344948aa859aafe79d94c2468c6a1c901721ea": "178d089ed31736a2ae22feb1fa13aca4",
".git/objects/3f/fd05dfd8ad66d881ee71685600ad742709704c": "49c42402fdc1078a397f73dfaef11988",
".git/objects/5e/e01228cdf290ecbbdfbf039590e33db25fadb8": "7591cd1f2fd508096d4fa6545bd89e2f",
".git/objects/01/ad1f2b9fd819c412340d928eb6bf1474ef82fe": "15fd4c2708fb4190a358ba3efd0ec254",
".git/objects/06/51596fef5e753cd190e1e115bcb747f7a4e405": "bbad31fb0a49d2396c2eaee6506891fe",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/6c/e14c9dacd2244d2d58194f51524e772d0753c9": "cf564f116a33b468a2a4193bb7d4a3a9",
".git/objects/55/c417816182e01d3a5e87dbd6ea1e3b3324d0e3": "da958d5e0d44ae2ad9a3b794098dbc97",
".git/objects/0f/fe00b92b2e2d21c1f33024760f685cbb7ffdb8": "6655e717f185770489b36816ed0d52de",
".git/objects/b8/66479baa089ce79276f4db1a5fb958e6a4e806": "1539fde27f4a23f10469e3f4ba7cdd78",
".git/objects/b1/824a6e4acd42e105dfc45625fe9c11ba3aed93": "f37c64f4a20849cce2cc7c9dc739fd75",
".git/objects/b1/b7ff4511e103d7e1af4a6b2c16be4e0f196677": "1dd172c99f7fb67357eaa6e6f4967a94",
".git/objects/dc/a37aac5a1c8888027838d0f3b2a9fa92488ff8": "5e8ec76649f4537ef4a3fa1002a47c7c",
".git/objects/db/59057f78d04a95eea5e6edbfb3c1f697996b05": "8aadc9d12893574aa94d9b758c5d8e60",
".git/objects/db/bceb51e9051d8007b7c5c855273f8bf407d47c": "374c67815a79ce78a720051ca8932533",
".git/objects/db/a961494bf2f76b6a97412ab46cb4c6a5a481a8": "ec0ad84da74e93d73b67100eeb393896",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/39f3252d591a64511be319b4bfe5d0f73318b2": "ac5e30056622dab2167991ff68e1339d",
".git/objects/f0/12666c31636b4116353d417d1fc98a0433ed85": "7e8c120716ec088da3d96b82e921fda5",
".git/objects/f8/d4e8fecff0ae827f2419cc45a43140748f3909": "7b9785e19a4514a8abc1c70959682234",
".git/objects/ce/a2e4c6723ba6bbc54d764089dc3072f5bc3c96": "7fb3703b7858f4bb2593b16b231e079a",
".git/objects/ce/b890a46e3574bda16b98434e7fd6548073d287": "81767e7de7bbfc4006892a6a3cc09332",
".git/objects/2c/17cf8be6d14b06bf8ced253acd23f8c5212ba8": "eb8483e02410a32da61ca0cdd2b7b063",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/23/ce5a310f31226b3fdfc0c657fad5d657523528": "6fe23e9f10d6f45e98e5633f6b3b6aef",
".git/objects/23/9bb505e45d22109207344dd9387933251525b3": "3046d7793ba8f195adba9e3d88baeccb",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "7d52f9ae3b3fac811829018aea2c668f",
".git/objects/40/15b9c30d52aef03887d9a443d2836c93d61be9": "464744582299aa6b45f8218126ff34c7",
".git/objects/2e/39af7295eaa6204b9b0721685e1cdfa79626ab": "642d55ccfedd7c6d93cd0ed12fea04a4",
".git/objects/2e/cc03ec79eeeb8255deff0ee6ea09805f211afc": "6a45aa8631536a686c4a6a46f64e1a60",
".git/objects/47/d46e1c77ed3f7c9a01cff9fd205d3a143d3e6a": "76dd3a679fcc9881cac2a7f4f4b3bde2",
".git/objects/8e/76e308d4a551a1004ec4cda4266756c1087bd8": "0b23e917888c32bb203e8e2f97c1a710",
".git/HEAD": "23f0603cacb03deeee8472aa5922a9d2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b80e5702f2a9138c4a0ed1c50e6e541c",
".git/logs/refs/heads/prod": "8ec36ced400a0ce3726564bf9c7d10fd",
".git/logs/refs/heads/gh-pages": "f5bf13b1902de608eb6c7e4021b4e87e",
".git/logs/refs/heads/dev": "0916f54a49d3de65852f741e539116cb",
".git/logs/refs/remotes/records-web/prod": "35a5affbabea9ecfa7ec5d3ca81eda43",
".git/logs/refs/remotes/records-web/gh-pages": "7de3a6ef48a0831ee74cffc0a8b53c49",
".git/logs/refs/remotes/records-web/dev": "fff8ad2e37982984fa403944aa87bf29",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/prod": "9323525a798b1690610d607a33b5b8b5",
".git/refs/heads/gh-pages": "f4ba6a4e54fab364388d15c7eea5ec70",
".git/refs/heads/dev": "f4ba6a4e54fab364388d15c7eea5ec70",
".git/refs/remotes/records-web/prod": "9323525a798b1690610d607a33b5b8b5",
".git/refs/remotes/records-web/gh-pages": "69e47d7bc148a61b810f748ad2b63c57",
".git/refs/remotes/records-web/dev": "f4ba6a4e54fab364388d15c7eea5ec70",
".git/index": "7b21ab65ce8ce60baa213cc0260634d0",
".git/COMMIT_EDITMSG": "d38afd7718ad7ffc5942242eab7f1369",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "c0d4121c3a2c088772b344e2cf6aebbb",
"assets/NOTICES": "504fb7a65eeb5ebefebb01182614d3c6",
"assets/FontManifest.json": "d34be72a417b25f7cb81984ef0710863",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/simple_fontellico_progress_dialog/fonts/Fontelico.ttf": "18d30ed3f43334e8cea0cca546e334d5",
"assets/packages/frino_icons/lib/fonts/FrinoIcons.ttf": "374031c28b365ea9539e8160b2931afc",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/instagram.png": "8baf41e8db95f2ef80ea8e86cfa98f91",
"assets/assets/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/assets/whatsapp.png": "c008573a4b637eaa2204c90c7ca306a4",
"assets/assets/facebook.png": "9841724515ce4eb57ba65282086d21ef"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
