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
    "url": "404.html",
    "revision": "66d27edccaf4cf253afea03cb9ef91d8"
  },
  {
    "url": "assets/css/0.styles.eb958297.css",
    "revision": "d85ebb57179e8d06ecfd257ac0659d33"
  },
  {
    "url": "assets/img/01-project.208f3b69.png",
    "revision": "208f3b6973b8b9680c4cf29d4de9be59"
  },
  {
    "url": "assets/img/02-folder.579c6a0e.png",
    "revision": "579c6a0e175fed85dac7fed2de85705d"
  },
  {
    "url": "assets/img/03-task.99bbf979.png",
    "revision": "99bbf9795e5a4fc7a1e22377b3295068"
  },
  {
    "url": "assets/img/04-duedate.63c31c82.png",
    "revision": "63c31c82493ebf6204dc34023098e28f"
  },
  {
    "url": "assets/img/05-milestone.7a977990.png",
    "revision": "7a977990212e9781635d3cdbf7e3be1c"
  },
  {
    "url": "assets/img/06-list.b9851ab1.png",
    "revision": "b9851ab1250c8db299b0a2ba6649feea"
  },
  {
    "url": "assets/img/07-timeline.70c2a079.png",
    "revision": "70c2a0798537725a0188e277e0589c1d"
  },
  {
    "url": "assets/img/high-level-architecture.6ba3394b.png",
    "revision": "6ba3394bba21456a4e8649c3e5d6a34d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2a84ea5f.js",
    "revision": "ea60706a50ccf1f35ca3bc4e8596dbab"
  },
  {
    "url": "assets/js/11.b4c45dea.js",
    "revision": "ba1b791edb1416a262602d144e241140"
  },
  {
    "url": "assets/js/12.755b89ee.js",
    "revision": "ebb192e2fe8a8a1b379875a757783aee"
  },
  {
    "url": "assets/js/13.5d1b7507.js",
    "revision": "af9f6772328ead28da74f9cc2a4b114e"
  },
  {
    "url": "assets/js/14.512e6de8.js",
    "revision": "4afef1311f70719f26bf8cf1062fdcbb"
  },
  {
    "url": "assets/js/15.9b188fa3.js",
    "revision": "dbfebb20367cba945873d22017cde819"
  },
  {
    "url": "assets/js/16.5f867fd7.js",
    "revision": "c9443d487ce6c2ac6896c788237edfc4"
  },
  {
    "url": "assets/js/17.568b072b.js",
    "revision": "d42fa1759d7f2c4da12122138cb7bdad"
  },
  {
    "url": "assets/js/18.f5d788d6.js",
    "revision": "ae2c58349adb16b753684dada202b8df"
  },
  {
    "url": "assets/js/19.3619a468.js",
    "revision": "7dfa237ca13ac37b100457ac5d4c29c1"
  },
  {
    "url": "assets/js/2.d6021d62.js",
    "revision": "d563e9cb1a1c82bd922977b970957ecf"
  },
  {
    "url": "assets/js/20.37d3088e.js",
    "revision": "c12bfa43bd66bc0be908f39e4649e876"
  },
  {
    "url": "assets/js/21.85be60f3.js",
    "revision": "765b4cb7ee614866df8e2ffc74c5a6ea"
  },
  {
    "url": "assets/js/22.a31ce47e.js",
    "revision": "a6815745a41f283c24dfcaadc2c659c3"
  },
  {
    "url": "assets/js/23.0fe5a42c.js",
    "revision": "9d400f071fb561c4cffb76a70f0160ea"
  },
  {
    "url": "assets/js/24.c5973020.js",
    "revision": "1d3be7cf4e46d2bb377bb3e3b990d643"
  },
  {
    "url": "assets/js/25.5f3be1dd.js",
    "revision": "05ca10e3f38aa3e72bd13e18f0a24d9c"
  },
  {
    "url": "assets/js/26.8a16368b.js",
    "revision": "3f055996ae71d6c40995e973556de49d"
  },
  {
    "url": "assets/js/27.7e01beda.js",
    "revision": "e814dcac8dae0311c64efbae1f40e535"
  },
  {
    "url": "assets/js/28.5c9bed7b.js",
    "revision": "d5a156770d6429d7b39e67daec078672"
  },
  {
    "url": "assets/js/29.aa69e3df.js",
    "revision": "11916484b0bcaff18185f0d7cffb8204"
  },
  {
    "url": "assets/js/3.2928bf87.js",
    "revision": "a228fc86500ebea48c880fbd15c09181"
  },
  {
    "url": "assets/js/30.d5057b1c.js",
    "revision": "b02f2d318e73467dddd3891bb550ef9c"
  },
  {
    "url": "assets/js/31.51960ab1.js",
    "revision": "b07e648021e7d3977e408b41c6aec8f5"
  },
  {
    "url": "assets/js/32.edf4f065.js",
    "revision": "8a922b83fff2f6a5088e53871c6491dd"
  },
  {
    "url": "assets/js/33.426ad6f4.js",
    "revision": "f7e5be686faa2fa9882581bb2e1930f5"
  },
  {
    "url": "assets/js/34.5ec6e5d9.js",
    "revision": "805f6e5ee714c053797498bcc754fff4"
  },
  {
    "url": "assets/js/35.cbd7e516.js",
    "revision": "b6bc110373e7befc8260e33d6c544c54"
  },
  {
    "url": "assets/js/36.272d6484.js",
    "revision": "89ade67ff0e142dff95a8b9f2a7bc03d"
  },
  {
    "url": "assets/js/37.c32d0a2f.js",
    "revision": "e3e40f3cfc6c2c074fc82f4918e3ba66"
  },
  {
    "url": "assets/js/38.c6b8fca8.js",
    "revision": "aed0bd34cb8f586580e338093b06462a"
  },
  {
    "url": "assets/js/39.a3507c6a.js",
    "revision": "18dba577e737ceabd7190240baddaa2d"
  },
  {
    "url": "assets/js/4.62ce3bb3.js",
    "revision": "571a5d7224f2b277da6df31f983d1d0a"
  },
  {
    "url": "assets/js/40.31957ca9.js",
    "revision": "730ad1604498bafba80fe0b4d9ab5fc3"
  },
  {
    "url": "assets/js/41.4220fe86.js",
    "revision": "40c74f19658fc98ee9f854fc735f6b29"
  },
  {
    "url": "assets/js/42.ace76760.js",
    "revision": "00faf1d05bf8efd64ef4942770d562e1"
  },
  {
    "url": "assets/js/43.7de7f90e.js",
    "revision": "4f8f960f5756d43aee412977209e2dbc"
  },
  {
    "url": "assets/js/44.407a6a6b.js",
    "revision": "dc2c4cdd62b68b48963b14fb10b6e5c8"
  },
  {
    "url": "assets/js/45.71c888bc.js",
    "revision": "3a5ab8e586578ac6001f4f2ff9fc226c"
  },
  {
    "url": "assets/js/46.b51e3204.js",
    "revision": "65555a8812d6d152a914b78381812642"
  },
  {
    "url": "assets/js/47.5bbb72a0.js",
    "revision": "ffebda03aa1495af6f1d8fbb8aa29f32"
  },
  {
    "url": "assets/js/48.c916144b.js",
    "revision": "14da36e66d17be78ab9e62c4f1b342cc"
  },
  {
    "url": "assets/js/49.2ca6ec34.js",
    "revision": "091d6401c3bafb74af0f0b1b84f09050"
  },
  {
    "url": "assets/js/5.8db11327.js",
    "revision": "52e7d6804dda8f5ee743ba8be4c2d250"
  },
  {
    "url": "assets/js/50.6798b8c1.js",
    "revision": "bc0b182fcaa3104f97b98e62a2b0fbc4"
  },
  {
    "url": "assets/js/51.1874ce59.js",
    "revision": "6c4441d38d6d6f5b9ca48246d54c6879"
  },
  {
    "url": "assets/js/52.5f161167.js",
    "revision": "193a92974e6b1c92846b71d8b221ceb8"
  },
  {
    "url": "assets/js/53.42322872.js",
    "revision": "9e4cb598f3f910ebb93356f7b937042e"
  },
  {
    "url": "assets/js/54.cb2cdaf5.js",
    "revision": "1ec735c4980939104e4710bb637ec6dc"
  },
  {
    "url": "assets/js/55.243f0d4a.js",
    "revision": "3d3a9c6b39b032b768c6a5a6e5267ee7"
  },
  {
    "url": "assets/js/56.08764fad.js",
    "revision": "d8be578bb9751234a37a5f60d107e31b"
  },
  {
    "url": "assets/js/57.34db2155.js",
    "revision": "ce19e1d30044fafa756a81030e519bb9"
  },
  {
    "url": "assets/js/58.f52219a6.js",
    "revision": "4d048949d3cdc6bcdcb353e1921dbdda"
  },
  {
    "url": "assets/js/59.e6ed78bf.js",
    "revision": "5bf4ee2bb541f0cb45c2f7d462131188"
  },
  {
    "url": "assets/js/6.91290b5a.js",
    "revision": "dd94bb72290e61bd81b55a22e543c833"
  },
  {
    "url": "assets/js/60.5054142d.js",
    "revision": "d7fd0a56568306f756f4f3d7ff0a8a29"
  },
  {
    "url": "assets/js/61.b9799428.js",
    "revision": "e2da0c732f3e7026292dfe52765b2cba"
  },
  {
    "url": "assets/js/62.5369b9a0.js",
    "revision": "24b50aa885f5087657a09ea98c5b3a15"
  },
  {
    "url": "assets/js/7.c49ad4b9.js",
    "revision": "db2ca19bf20b678eca2359b2e76ae9aa"
  },
  {
    "url": "assets/js/8.fac0e38f.js",
    "revision": "0b72c84b66c411f60a82cb20f5e13e49"
  },
  {
    "url": "assets/js/9.32a38d7f.js",
    "revision": "86ebe3efff2f257ca7a23a6b287c90f3"
  },
  {
    "url": "assets/js/app.61005953.js",
    "revision": "07d7ae6529aa8e4755e65d4e07c48fc8"
  },
  {
    "url": "assignments/api-design.html",
    "revision": "02c6157a63b147527f79781bc221fa7d"
  },
  {
    "url": "assignments/architecture.html",
    "revision": "1ecb52567c432c1eac25b184913c32e2"
  },
  {
    "url": "assignments/ari-poster.html",
    "revision": "1b20633b1d5329252824bcf9ff87297a"
  },
  {
    "url": "assignments/bug-fix.html",
    "revision": "1b66470cd802adce2ecd7e80c9d4dcf4"
  },
  {
    "url": "assignments/data-structures.html",
    "revision": "9225c91fa7364d7ad9897f5eca8240a3"
  },
  {
    "url": "assignments/deployment.html",
    "revision": "b34084460f418afd8008cc03e524a27b"
  },
  {
    "url": "assignments/dev-demos.html",
    "revision": "44ef8f06b3df181766b3016ad470a19d"
  },
  {
    "url": "assignments/features.html",
    "revision": "257d65eb5fb759339fb4740b4bfa75e7"
  },
  {
    "url": "assignments/final-code.html",
    "revision": "d74f678dfd8fa872ec48e971bc42578d"
  },
  {
    "url": "assignments/full-visual-design.html",
    "revision": "676b1925498f5301965c0f67065cbae3"
  },
  {
    "url": "assignments/gantt.html",
    "revision": "7ec6d14ce18d1cf14e12a0a04b435aad"
  },
  {
    "url": "assignments/identity.html",
    "revision": "738a02c6f5b91c90b53f47dd64189d62"
  },
  {
    "url": "assignments/index.html",
    "revision": "36f017aa9b0ca9d72210abf73837f2b8"
  },
  {
    "url": "assignments/information-architecture.html",
    "revision": "1c9c5e18331f77547e7d684725bdd534"
  },
  {
    "url": "assignments/interactive-wireframe.html",
    "revision": "b1cef2561bbc16da64100d9090e83fc9"
  },
  {
    "url": "assignments/mid-present.html",
    "revision": "a4f1065f2f6765a6fc2fea61ff1961dd"
  },
  {
    "url": "assignments/mid-term-client-presentation.html",
    "revision": "2ed86e76be4735c93b922cd3fa677b49"
  },
  {
    "url": "assignments/mockup.html",
    "revision": "b75032ce560c2371a34c1d7822c87cef"
  },
  {
    "url": "assignments/order.html",
    "revision": "0d163ecaf25dc0722942ef3369b0b3a2"
  },
  {
    "url": "assignments/paper-prototype.html",
    "revision": "3db4c1380a76a91036de00b237c1ce8c"
  },
  {
    "url": "assignments/personas.html",
    "revision": "ca4f42c6e78a05526f949a435d385d06"
  },
  {
    "url": "assignments/pitches.html",
    "revision": "3fca22b8ab1a120963e561d1b1ee4954"
  },
  {
    "url": "assignments/poc.html",
    "revision": "fe989fd33b6114ad3db8726406cf8254"
  },
  {
    "url": "assignments/product-research.html",
    "revision": "c1b451efdcae8c857cc9b92177aea30d"
  },
  {
    "url": "assignments/reaction.html",
    "revision": "b15fcea2d1f7d50f83f57a77f2265e4a"
  },
  {
    "url": "assignments/responses.html",
    "revision": "d88e636fc8088bdb36c693ad6a2c58e9"
  },
  {
    "url": "assignments/team-contract.html",
    "revision": "346cffd7f2ed8b5d172efe93c98cf8b5"
  },
  {
    "url": "assignments/tech-research.html",
    "revision": "3d1c2afc1ee97430de98d8598a209a32"
  },
  {
    "url": "assignments/test-documents.html",
    "revision": "f5e57ad8019d215800a84fd36f9aeea2"
  },
  {
    "url": "assignments/test-results.html",
    "revision": "4297f9825021a52d064663abcdf09ea4"
  },
  {
    "url": "assignments/testing.html",
    "revision": "3f9ea08cc5d1546b3dcf9e3dd6b7a5f6"
  },
  {
    "url": "assignments/ui-wireframe.html",
    "revision": "44a0b9a0ee19005a883b046cd82c2e82"
  },
  {
    "url": "assignments/usage-scenarios.html",
    "revision": "b17967095f56b1e771e68a448538a460"
  },
  {
    "url": "assignments/user-research.html",
    "revision": "b604325d0932693d015790483c0c0999"
  },
  {
    "url": "assignments/visual-design-concept.html",
    "revision": "c2f0de55370425f72baeab6c062e6db1"
  },
  {
    "url": "assignments/visual-design.html",
    "revision": "3337f63457935c61eb40b6b137bb7b61"
  },
  {
    "url": "assignments/wireframes.html",
    "revision": "b99e14afb11b27e663cfdafeb153d9d9"
  },
  {
    "url": "HeadshotPlaceholder.png",
    "revision": "dd905cc985945c4b067ad8e177bbefe0"
  },
  {
    "url": "hero.png",
    "revision": "a77ff0e74d076093d400c27e493f4974"
  },
  {
    "url": "index.html",
    "revision": "9f721027826f3cc3e8e0229f499ca50f"
  },
  {
    "url": "modules/design-prototyping/index.html",
    "revision": "17f6b92b8052c8c766844f3c843a754b"
  },
  {
    "url": "modules/design-prototyping/workbench.html",
    "revision": "41a1a0e371f7374c63155b56a43d7e6c"
  },
  {
    "url": "modules/development-testing/index.html",
    "revision": "ebe10ab05f4e21bb355acb0e0b4be144"
  },
  {
    "url": "modules/finalizing-hand-off/index.html",
    "revision": "2623e02c29b44d6b20fe351631cb1a6e"
  },
  {
    "url": "modules/research-planning/agile-2.html",
    "revision": "9a72876e3c620e3eb7d082c95688938c"
  },
  {
    "url": "modules/research-planning/agile-3.html",
    "revision": "35b98fe78da31b90e1bd5fa7773948e3"
  },
  {
    "url": "modules/research-planning/agile.html",
    "revision": "2fc7f70a53cb969ffb027268663a4b1a"
  },
  {
    "url": "modules/research-planning/index.html",
    "revision": "a991bb391968398e368c1edda31b25c4"
  },
  {
    "url": "modules/research-planning/questions.html",
    "revision": "20523f60b038ff434d65563976bad167"
  },
  {
    "url": "modules/research-planning/service-design.html",
    "revision": "fbe647eb1ae9512cf572975427304543"
  },
  {
    "url": "modules/research-planning/wrike.html",
    "revision": "f57279397f4d7197d65dbf1aa17f2234"
  },
  {
    "url": "modules/week1/index.html",
    "revision": "61123d377c5ab1dfa6e102513e48bc53"
  },
  {
    "url": "modules/week2/index.html",
    "revision": "780a8454186fdb4d263003702a45eac1"
  },
  {
    "url": "modules/week3/index.html",
    "revision": "41b3188a874692a0e6e23758faefc592"
  },
  {
    "url": "modules/week4/index.html",
    "revision": "8f9862938b884c977880520a7352fe2c"
  },
  {
    "url": "overview/contacts.html",
    "revision": "411e003cc0d2a5f500892ed3baf0a358"
  },
  {
    "url": "overview/course-section-information.html",
    "revision": "51115c037dbe629a6902da3e94b2a5cc"
  },
  {
    "url": "overview/index.html",
    "revision": "ac7459e5a7cef15df66132154a7d787b"
  },
  {
    "url": "steve-griffith.jpeg",
    "revision": "3fb81c0d91a190afe01fd27de65080f2"
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
