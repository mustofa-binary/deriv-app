/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/br_fix_color/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/br_fix_color/css/1.css","e258203ae30c953024a1f9e5ce05442e"],["/br_fix_color/css/AccountSignupModal.css","d15ffe911b3712d506052311245d2629"],["/br_fix_color/css/account.css","8f91417efa72c7aaaca5ea6482bc0fb0"],["/br_fix_color/css/app.css","a621c9b1f92151881b7510c6e04d2361"],["/br_fix_color/css/modals.css","1b21cbf25097092e6ea9929fdb7d5434"],["/br_fix_color/css/mt5.css","8dacd9682c5c2f55758f0d08b86ffc60"],["/br_fix_color/css/notification-messages.css","c7fd1420d9c26acf7b97e464c8359a9c"],["/br_fix_color/css/reports.css","f70e420952e60ac7f03f6b13b700a073"],["/br_fix_color/css/screen-small.css","82a3cd3c1f88683306606ec4365f287e"],["/br_fix_color/css/settings-chart.css","9833db4e5ce2a50ec3350a305334d6da"],["/br_fix_color/css/smartcharts.css","f96099649bff90fd60bf594c0fdc1e16"],["/br_fix_color/css/work-in-progress.css","f933769638de07be2252cd6b1e839c38"],["/br_fix_color/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/br_fix_color/index.html","bfe5fa9f33ead182183efe3f8767be58"],["/br_fix_color/js/0.87e15bc9f9cb7673cd65.js","f766d9078798a16bd5e47041bc124976"],["/br_fix_color/js/1.87e15bc9f9cb7673cd65.js","95d8a0cca920cb4304c4117c55064373"],["/br_fix_color/js/10.87e15bc9f9cb7673cd65.js","1db6378a552a848983b707acbeb15c3e"],["/br_fix_color/js/11.87e15bc9f9cb7673cd65.js","34b8ecc85e72903b356316a0135448e3"],["/br_fix_color/js/12.87e15bc9f9cb7673cd65.js","e14b2940b09f518286356db69143a5fd"],["/br_fix_color/js/13.87e15bc9f9cb7673cd65.js","ee11319729e7345ccfe74f8d6abd1ffb"],["/br_fix_color/js/14.87e15bc9f9cb7673cd65.js","e37ed2f4f01c18136bd7bef185951a31"],["/br_fix_color/js/15.87e15bc9f9cb7673cd65.js","7aeb89ae1a7c645ce4ce0eeb297c8c0b"],["/br_fix_color/js/16.87e15bc9f9cb7673cd65.js","7df81347ab10bb77e057cd2db6b2e8d4"],["/br_fix_color/js/17.87e15bc9f9cb7673cd65.js","2a3fd98d13c11ca30874844bd48c3e77"],["/br_fix_color/js/18.87e15bc9f9cb7673cd65.js","1bc3a19d1c2717e6f7404dfa6ee0c526"],["/br_fix_color/js/19.87e15bc9f9cb7673cd65.js","a913ca591c258e40308e051af96d55fa"],["/br_fix_color/js/2.87e15bc9f9cb7673cd65.js","fdbe6d76d3d0f6bc35701cc36ccca868"],["/br_fix_color/js/20.87e15bc9f9cb7673cd65.js","f47e69fc070e93b79dfaabdc66df12c2"],["/br_fix_color/js/21.87e15bc9f9cb7673cd65.js","d79729359ea422162af0d979a047effd"],["/br_fix_color/js/22.87e15bc9f9cb7673cd65.js","de0a90adfeddfe8707b52258877af7c5"],["/br_fix_color/js/23.87e15bc9f9cb7673cd65.js","067284fce2b22b8bcdf59f25523453de"],["/br_fix_color/js/24.87e15bc9f9cb7673cd65.js","44705dfcda1a825a2e44377f03ea9569"],["/br_fix_color/js/25.87e15bc9f9cb7673cd65.js","44b93d0b0c68e00157b1ea54ab5ffc11"],["/br_fix_color/js/26.87e15bc9f9cb7673cd65.js","ac5d76c849593c98fb6a2b912bb3e14a"],["/br_fix_color/js/27.87e15bc9f9cb7673cd65.js","8ac50a24759ea4b794df36ad0f117b7a"],["/br_fix_color/js/28.87e15bc9f9cb7673cd65.js","e91a0a255e7f516c1812182a8de09afb"],["/br_fix_color/js/29.87e15bc9f9cb7673cd65.js","199eb2b3fc8b518860e5e3c1755081db"],["/br_fix_color/js/3.87e15bc9f9cb7673cd65.js","91bb92da3488db58f6967dbf17b13d47"],["/br_fix_color/js/30.87e15bc9f9cb7673cd65.js","e3bae2551d95a1721e236904a358b082"],["/br_fix_color/js/31.87e15bc9f9cb7673cd65.js","642cf8d278025eab3ce168d18071b0cf"],["/br_fix_color/js/32.87e15bc9f9cb7673cd65.js","18fdb22c7597d89d138efb36e2d116b7"],["/br_fix_color/js/33.87e15bc9f9cb7673cd65.js","4e963fdce3b68ee8711b34fe5f2c0a83"],["/br_fix_color/js/34.87e15bc9f9cb7673cd65.js","861df5115fcd8ef9e7e8825261f3aa20"],["/br_fix_color/js/35.87e15bc9f9cb7673cd65.js","5f307da4a1d5144a7a5042ba62e7cd12"],["/br_fix_color/js/36.87e15bc9f9cb7673cd65.js","73bab6da3f814fbf812b848103fa6e59"],["/br_fix_color/js/37.87e15bc9f9cb7673cd65.js","86b9c6eab19d5eea2054483636dbc32c"],["/br_fix_color/js/38.87e15bc9f9cb7673cd65.js","3ba6a2860850e65fd2e9075fa828fd01"],["/br_fix_color/js/39.87e15bc9f9cb7673cd65.js","d9d4744e66500eb2e9870567a72622a4"],["/br_fix_color/js/4.87e15bc9f9cb7673cd65.js","358ce4c72947126a17ab1c53af08e1e7"],["/br_fix_color/js/40.87e15bc9f9cb7673cd65.js","f46479785470f086658e90059e5db9cd"],["/br_fix_color/js/404.87e15bc9f9cb7673cd65.js","15e3b95eec7f9dc9762ce8d1fa7c639b"],["/br_fix_color/js/41.87e15bc9f9cb7673cd65.js","bbb787cc3eb7c42ecea826eddee6e5b1"],["/br_fix_color/js/42.87e15bc9f9cb7673cd65.js","995071a2f86d66a764cee3b13b03dfef"],["/br_fix_color/js/43.87e15bc9f9cb7673cd65.js","93e2b225b33298d99e94d7ecaf2de2df"],["/br_fix_color/js/44.87e15bc9f9cb7673cd65.js","b08ed60a8e3b4f8fe7520cd5fa36903b"],["/br_fix_color/js/45.87e15bc9f9cb7673cd65.js","24c2227bf6ecf7a6179c266ced3477ae"],["/br_fix_color/js/46.87e15bc9f9cb7673cd65.js","36fbfe6815e53aec1b5bbf2985b49a12"],["/br_fix_color/js/47.87e15bc9f9cb7673cd65.js","001f8b71fb6a277afec7b450e5f0fe89"],["/br_fix_color/js/48.87e15bc9f9cb7673cd65.js","c21d33f811b7bed86585a5a57c718369"],["/br_fix_color/js/49.87e15bc9f9cb7673cd65.js","f90de404a64b140e79f5257c58dad37f"],["/br_fix_color/js/5.87e15bc9f9cb7673cd65.js","9d5fa6014d84aec8dfb7a67eedbec0b9"],["/br_fix_color/js/50.87e15bc9f9cb7673cd65.js","e09261183ab46f1f5e06d1f69d73ac08"],["/br_fix_color/js/51.87e15bc9f9cb7673cd65.js","97fa0c79b0827c7342fc2c82be608b11"],["/br_fix_color/js/52.87e15bc9f9cb7673cd65.js","28ad2a9269b9a026d779b79dd6877be6"],["/br_fix_color/js/53.87e15bc9f9cb7673cd65.js","748669a1206fd0e5fc5cf230993d9c0b"],["/br_fix_color/js/54.87e15bc9f9cb7673cd65.js","d79e93982738849bcca907ceeabc3aad"],["/br_fix_color/js/55.87e15bc9f9cb7673cd65.js","0c9bfd42cca6c1b99323b12fa8ec1e46"],["/br_fix_color/js/56.87e15bc9f9cb7673cd65.js","ffaad3b3683f6e7d593616a6789df3f0"],["/br_fix_color/js/57.87e15bc9f9cb7673cd65.js","f8ab9a811345f606a41bbc461bfe6ada"],["/br_fix_color/js/58.87e15bc9f9cb7673cd65.js","eed00e9741f0ae50696d0a15682c755a"],["/br_fix_color/js/59.87e15bc9f9cb7673cd65.js","0dbbd61484481e2a3ae78e95230b40d9"],["/br_fix_color/js/6.87e15bc9f9cb7673cd65.js","26d31aeb9fd216e329976319a7aad745"],["/br_fix_color/js/60.87e15bc9f9cb7673cd65.js","619211cd3ca67b2aa6c67aca78f73cc6"],["/br_fix_color/js/61.87e15bc9f9cb7673cd65.js","a8effbb824ed1658eebac92453a7e42a"],["/br_fix_color/js/62.87e15bc9f9cb7673cd65.js","ea86ee863e9b4a5d842a3e870fc39e9e"],["/br_fix_color/js/63.87e15bc9f9cb7673cd65.js","53fab78c029f903b0eb211d87f2f58c3"],["/br_fix_color/js/64.87e15bc9f9cb7673cd65.js","5d3fda5a6697432afa96585bcac8ed76"],["/br_fix_color/js/65.87e15bc9f9cb7673cd65.js","4c0908abae46e6f021daef5f5d622e8a"],["/br_fix_color/js/66.87e15bc9f9cb7673cd65.js","69e5281e51c0da9363e1ace3260cc4a9"],["/br_fix_color/js/67.87e15bc9f9cb7673cd65.js","61b3a42237551dff51e40150bbfd173c"],["/br_fix_color/js/68.87e15bc9f9cb7673cd65.js","69a4cf55e8e144cbeb7851ba9516642f"],["/br_fix_color/js/69.87e15bc9f9cb7673cd65.js","6fafb2b4ad5d247f6499bb25f1f6557c"],["/br_fix_color/js/7.87e15bc9f9cb7673cd65.js","0ac781a8835a16fb00738e8a3213a92a"],["/br_fix_color/js/70.87e15bc9f9cb7673cd65.js","ccc9f022a01715925f5b7087514f63df"],["/br_fix_color/js/71.87e15bc9f9cb7673cd65.js","ebae86f5a73cfa602cace47bafb81f51"],["/br_fix_color/js/72.87e15bc9f9cb7673cd65.js","b9260e43ad2902ad53322f0542fcaabb"],["/br_fix_color/js/73.87e15bc9f9cb7673cd65.js","78a1d3e2a7e785b89841b3384f7c7c3a"],["/br_fix_color/js/74.87e15bc9f9cb7673cd65.js","b89031c9fc4a3f5c34cdd5537eb563c3"],["/br_fix_color/js/75.87e15bc9f9cb7673cd65.js","31e9c1ef38edf7d009bd6a306a5ed634"],["/br_fix_color/js/76.87e15bc9f9cb7673cd65.js","055262e734408a8c24372be75f4f9391"],["/br_fix_color/js/77.87e15bc9f9cb7673cd65.js","ba796fda1855d61fc7dd218088e91bbb"],["/br_fix_color/js/78.87e15bc9f9cb7673cd65.js","33f4ad8775bc80d6c5fcca65a60df483"],["/br_fix_color/js/79.87e15bc9f9cb7673cd65.js","ad60305ee654505a50d8ba2996c87402"],["/br_fix_color/js/8.87e15bc9f9cb7673cd65.js","f6629aa5aee4c6e6653a4216d7269888"],["/br_fix_color/js/80.87e15bc9f9cb7673cd65.js","dc0fbb45fbf07df19c1bfdc073547761"],["/br_fix_color/js/81.87e15bc9f9cb7673cd65.js","5e9750547b98fb68e52c6223460182d1"],["/br_fix_color/js/82.87e15bc9f9cb7673cd65.js","b4beb2316056e655784d83e0a50c0df4"],["/br_fix_color/js/83.87e15bc9f9cb7673cd65.js","bf285872371c565882ae9f4cee47b217"],["/br_fix_color/js/84.87e15bc9f9cb7673cd65.js","64492f4d3b0e7cbf76985441ccc2dc46"],["/br_fix_color/js/85.87e15bc9f9cb7673cd65.js","cb0025b3e8d6ba2ca8829eefc508b757"],["/br_fix_color/js/86.87e15bc9f9cb7673cd65.js","98e91ea6c0674a452955cacd84a6eaf8"],["/br_fix_color/js/87.87e15bc9f9cb7673cd65.js","a79bd94d22bc7eeb339ef092754d5666"],["/br_fix_color/js/88.87e15bc9f9cb7673cd65.js","b033a7729314ea2cfa83648cf43e79ce"],["/br_fix_color/js/89.87e15bc9f9cb7673cd65.js","4c3ac5463da3739906c686e84d052892"],["/br_fix_color/js/9.87e15bc9f9cb7673cd65.js","f10b4b659dc06cd0621b404f277946f0"],["/br_fix_color/js/90.87e15bc9f9cb7673cd65.js","495cbf6fd15cb56829ecb4d581131d92"],["/br_fix_color/js/91.87e15bc9f9cb7673cd65.js","30aa98cf83a1cf6a022a3ad875c1f799"],["/br_fix_color/js/AccountSignupModal.87e15bc9f9cb7673cd65.js","3f9cdeed6b78255df05f0841062a0b39"],["/br_fix_color/js/ResetPasswordModal.87e15bc9f9cb7673cd65.js","5da75701563593d1ff86d951c2f2a8dc"],["/br_fix_color/js/account-info.87e15bc9f9cb7673cd65.js","bb672f064b4efcd5c9006ee726d0a57b"],["/br_fix_color/js/account.87e15bc9f9cb7673cd65.js","23b0939dea4fe8d0364f6899eecf98a4"],["/br_fix_color/js/contract.87e15bc9f9cb7673cd65.js","9b44e6a77b9df5969218138e1e7233b2"],["/br_fix_color/js/modals.87e15bc9f9cb7673cd65.js","19ac3b5554dcfcbcf154996cd3cb9cdc"],["/br_fix_color/js/mt5.87e15bc9f9cb7673cd65.js","2985603132842cc1c33ea44ac22da1f0"],["/br_fix_color/js/notification-messages.87e15bc9f9cb7673cd65.js","27594c506ac828f2ab8f3b0641fd343d"],["/br_fix_color/js/push-notification.87e15bc9f9cb7673cd65.js","0b12df6e5ba12101d9d791943e5994ca"],["/br_fix_color/js/reports.87e15bc9f9cb7673cd65.js","3ce2ac1c893b7ec0f9c99c4424375b6e"],["/br_fix_color/js/screen-small.87e15bc9f9cb7673cd65.js","2a5e918f77b02d51f1ca71af6f442c58"],["/br_fix_color/js/settings-chart.87e15bc9f9cb7673cd65.js","ba0c4d7303acb59c0cd510773bb9c715"],["/br_fix_color/js/settings-language.87e15bc9f9cb7673cd65.js","07acdadb84ebc179dcbc8eb8585b0a8e"],["/br_fix_color/js/settings-theme.87e15bc9f9cb7673cd65.js","eaf1703cf4e4a92d77975b3d92347ac1"],["/br_fix_color/js/smartcharts/chartiq-302ec2.smartcharts.js","885ab4d19a35ef179fe5df6dff271e82"],["/br_fix_color/js/smartcharts/de-po-19b36a.smartcharts.js","93276add9f19a88a6abbd68beb85966b"],["/br_fix_color/js/smartcharts/es-po-b9a6df.smartcharts.js","7bddc7b125daae2ef6d857918b4f6d86"],["/br_fix_color/js/smartcharts/fr-po-dd5658.smartcharts.js","fb85f8bfc515f5029e5fc2cb41d6d231"],["/br_fix_color/js/smartcharts/html2canvas-d83c30.smartcharts.js","57079e3ad10d2b8a6fd07d2fc8d3b03d"],["/br_fix_color/js/smartcharts/id-po-d54e7d.smartcharts.js","fea611375ba01ede6bfbae7d244107f5"],["/br_fix_color/js/smartcharts/it-po-5fbfc0.smartcharts.js","b695cb48dc6da8d4c3455533ca7245a6"],["/br_fix_color/js/smartcharts/nl-po-a0b37e.smartcharts.js","b4d6e6a1de4da23f935fc0efb5d87577"],["/br_fix_color/js/smartcharts/pl-po-92d503.smartcharts.js","ddf8904cd29f8658ed87fdeed29982da"],["/br_fix_color/js/smartcharts/pt-po-1e3948.smartcharts.js","111b75d1bf89b71b5f4a9375447b56da"],["/br_fix_color/js/smartcharts/ru-po-f66380.smartcharts.js","0ae3f1d3e2f64aacfe79f6edac2f664e"],["/br_fix_color/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/br_fix_color/js/smartcharts/th-po-dad07a.smartcharts.js","b69242075fd4d7dabe9d285938d7b729"],["/br_fix_color/js/smartcharts/vendors~resize-observer-polyfill-f331bc.smartcharts.js","6d2364b12f8c4350ea65b61435de450d"],["/br_fix_color/js/smartcharts/vi-po-680676.smartcharts.js","8e50f1de3e358ecf5a035b24ede0dcc8"],["/br_fix_color/js/smartcharts/zh_cn-po-d1e9aa.smartcharts.js","a1c3abe7fa584136b67e033c12d8bb9c"],["/br_fix_color/js/smartcharts/zh_tw-po-e26699.smartcharts.js","d72a8ad084ecc8184026fbd037b9d0a0"],["/br_fix_color/js/toggle-menu-drawer.87e15bc9f9cb7673cd65.js","df941bd2e4bfb7c0b0b73dfd23d3fefb"],["/br_fix_color/js/two-month-picker.87e15bc9f9cb7673cd65.js","7ffcebff91118e847097df8afcb893b7"],["/br_fix_color/js/vendors~smart_chart.87e15bc9f9cb7673cd65.js","93fb3cec2734211bb4a690d4c34080a3"],["/br_fix_color/js/work-in-progress.87e15bc9f9cb7673cd65.js","694c057ec7838bb4b68034d289016484"],["/br_fix_color/manifest.json","c39db1ead9be44b85da06bfb24c45de4"],["/br_fix_color/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/br_fix_color/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/br_fix_color/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/br_fix_color/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/br_fix_color/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/br_fix_color/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/br_fix_color/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/br_fix_color/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/br_fix_color/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/br_fix_color/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/br_fix_color/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/br_fix_color/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/br_fix_color/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/br_fix_color/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/br_fix_color/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/br_fix_color/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/br_fix_color/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/br_fix_color/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/br_fix_color/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/br_fix_color/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/br_fix_color/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/br_fix_color/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/br_fix_color/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/br_fix_color/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/br_fix_color/robots.txt","6978a616c585d03cb5b542a891995efb"],["/br_fix_color/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
var cacheName = 'sw-precache-v3-app-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /\.\w{8}\./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/br_fix_color/';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







