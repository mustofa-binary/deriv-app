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

var precacheConfig = [["/br_update_colors/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/br_update_colors/css/1.css","33618e9d58eddcc44ae7ab737cac3349"],["/br_update_colors/css/AccountSignupModal.css","c57365f18109c4e862be347e12327929"],["/br_update_colors/css/account.css","e504b71a23043d08a1aed0f80d0aef3c"],["/br_update_colors/css/app.css","fa0735407404547e48e2ccb01d2cbf1d"],["/br_update_colors/css/modals.css","ee331d34b874962524e2e5d6dc9057d6"],["/br_update_colors/css/notification-messages.css","a84209801281078282b1336958b6ac75"],["/br_update_colors/css/reports.css","27a6d06130f472676501ab9ca02a2042"],["/br_update_colors/css/screen-small.css","6ddc4529992c0ada0e4116659e4c2c20"],["/br_update_colors/css/settings-chart.css","4b52c6d9d478bee71edce650582a8f7e"],["/br_update_colors/css/smartcharts.css","abc265e8f0847879f0a2e3e35cdfa641"],["/br_update_colors/css/work-in-progress.css","fe7ce39ffcaa3ad2b9daca2e2d411638"],["/br_update_colors/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/br_update_colors/index.html","9fa3ce2ea9286f6798a1567de2dd2db8"],["/br_update_colors/js/0.2ff69420350febef921e.js","d8b9079dcad29812a4e0b65db3a8c89b"],["/br_update_colors/js/1.2ff69420350febef921e.js","838a02c9cc8f08715e1a70319559924a"],["/br_update_colors/js/10.2ff69420350febef921e.js","0cd85a14eed7d682e69c0c1974fffd8b"],["/br_update_colors/js/11.2ff69420350febef921e.js","d8f34879dcddfe470cd4bdf51ef5cadf"],["/br_update_colors/js/12.2ff69420350febef921e.js","d086dd7bfca88aff416b763147eb830b"],["/br_update_colors/js/13.2ff69420350febef921e.js","c5317072a1a67a7dce4b5df88f80a7e4"],["/br_update_colors/js/14.2ff69420350febef921e.js","c6f38fd86cc5cf7141747c74a7af60be"],["/br_update_colors/js/15.2ff69420350febef921e.js","70a1bf2f8211d6111c5322966d7f70f9"],["/br_update_colors/js/16.2ff69420350febef921e.js","5e05557b74537369dff9144034370912"],["/br_update_colors/js/17.2ff69420350febef921e.js","18a4ff3a533fe1015971a3911267426b"],["/br_update_colors/js/18.2ff69420350febef921e.js","d063d254fe8414bdfc4206b9a9e92ab1"],["/br_update_colors/js/19.2ff69420350febef921e.js","b5d2a56e3f3e01b7974279c0c7519889"],["/br_update_colors/js/2.2ff69420350febef921e.js","a5afd210153f763aa6abceaa39e9c533"],["/br_update_colors/js/20.2ff69420350febef921e.js","eea83daf85d38efad77bfecd2c1a2b15"],["/br_update_colors/js/21.2ff69420350febef921e.js","269cc93931f62e06f684563ca6692367"],["/br_update_colors/js/22.2ff69420350febef921e.js","416e26360756bad6c1c1ba506f6aa235"],["/br_update_colors/js/23.2ff69420350febef921e.js","d830df32b93e212aff8968203d4272fe"],["/br_update_colors/js/24.2ff69420350febef921e.js","f4909939b51179b2d98247d46e1b5ae1"],["/br_update_colors/js/25.2ff69420350febef921e.js","e9f73548e63d215cd3f30d394fc939e2"],["/br_update_colors/js/26.2ff69420350febef921e.js","be1dd2ee2268a0437dbb515a597f9c95"],["/br_update_colors/js/27.2ff69420350febef921e.js","96771416830025a4a8af5739f800c53f"],["/br_update_colors/js/28.2ff69420350febef921e.js","d0b889817d9da975ddf2d86c93a43bd8"],["/br_update_colors/js/29.2ff69420350febef921e.js","3d6c379f5f912b56eba661d2bc0f0748"],["/br_update_colors/js/3.2ff69420350febef921e.js","b79ad8ee14a5caff7809e87f7cf317cd"],["/br_update_colors/js/30.2ff69420350febef921e.js","2a647aae0d544e1a8725103dd186ba5f"],["/br_update_colors/js/31.2ff69420350febef921e.js","783231e26e081a941010e9a0158b8762"],["/br_update_colors/js/32.2ff69420350febef921e.js","f3b0d99ba80b2a5479f7279c39636ceb"],["/br_update_colors/js/33.2ff69420350febef921e.js","a3adcbe89eb698f6cb14115e6703a052"],["/br_update_colors/js/34.2ff69420350febef921e.js","88e73c6f97bb9333c94e6a42e5da9fea"],["/br_update_colors/js/35.2ff69420350febef921e.js","cd5b67f94c5def9fb7a8cfdcbd04b816"],["/br_update_colors/js/36.2ff69420350febef921e.js","e6ee6551ab8458345d467190f1bd6290"],["/br_update_colors/js/37.2ff69420350febef921e.js","5112d1e5291b8a64ded3c123cab4509c"],["/br_update_colors/js/38.2ff69420350febef921e.js","69e74c29e47340bfb50fbd98811cab7d"],["/br_update_colors/js/39.2ff69420350febef921e.js","0318644f87aea81ec77aa5ef54ea359b"],["/br_update_colors/js/4.2ff69420350febef921e.js","35e7977f4de6e34d99a8f79ad0a23eaf"],["/br_update_colors/js/40.2ff69420350febef921e.js","b27a9ba883aaa174ddc0933538e21fd1"],["/br_update_colors/js/404.2ff69420350febef921e.js","15e3b95eec7f9dc9762ce8d1fa7c639b"],["/br_update_colors/js/41.2ff69420350febef921e.js","058f2bf084270622f53e47022aa41dd6"],["/br_update_colors/js/42.2ff69420350febef921e.js","6942d469ec106d5ee72e21bfa11d17cc"],["/br_update_colors/js/43.2ff69420350febef921e.js","0bc10534c7bb60b4ed71e8235fe4c43f"],["/br_update_colors/js/44.2ff69420350febef921e.js","62981d72ef485d8f831ecea9aa51d8c7"],["/br_update_colors/js/45.2ff69420350febef921e.js","3bf0bf21c1af67c523824e2cbd00ab4e"],["/br_update_colors/js/46.2ff69420350febef921e.js","f33c1c2f4b53ff622e661b14271b2312"],["/br_update_colors/js/47.2ff69420350febef921e.js","4c6f3179ce6b6182a9eeac1274f8f908"],["/br_update_colors/js/48.2ff69420350febef921e.js","e412bfb727c1aa933b0189dd8229e6f7"],["/br_update_colors/js/49.2ff69420350febef921e.js","33d47c21c2d28b3cfe6ef93110797a36"],["/br_update_colors/js/5.2ff69420350febef921e.js","85f2e50c42fbe3fafb4297c789bb18c4"],["/br_update_colors/js/50.2ff69420350febef921e.js","61f15d4666cacc736bd62e8a7f53a9be"],["/br_update_colors/js/51.2ff69420350febef921e.js","3da29057e26d83bf1c8d3c1af85f46a5"],["/br_update_colors/js/52.2ff69420350febef921e.js","7dd23c32e314a7fa726a43aba97d5c84"],["/br_update_colors/js/53.2ff69420350febef921e.js","a842451fa51486bbdfb9caced571a70e"],["/br_update_colors/js/54.2ff69420350febef921e.js","8a22fb47a1969b92f457a37e96e62fc0"],["/br_update_colors/js/55.2ff69420350febef921e.js","972d15cf9ac9fc8723285a96d851b443"],["/br_update_colors/js/56.2ff69420350febef921e.js","a04e58d3cea3dda1a30d3a013d0f4f7f"],["/br_update_colors/js/57.2ff69420350febef921e.js","1660b18c05d65a368ce0853831a4b5ae"],["/br_update_colors/js/58.2ff69420350febef921e.js","6acc611081370e936cff20ea39aeb3c7"],["/br_update_colors/js/59.2ff69420350febef921e.js","cb38fb0dcf308fcf200227124352706b"],["/br_update_colors/js/6.2ff69420350febef921e.js","25757d4297a39f8d33e7a4f49712f4d5"],["/br_update_colors/js/60.2ff69420350febef921e.js","c9bee25a97c62a705dadf1b0d7963817"],["/br_update_colors/js/61.2ff69420350febef921e.js","7ebb0579e2d986fe1e2d36351242ee10"],["/br_update_colors/js/62.2ff69420350febef921e.js","17cf7f6b575388677352ad295d782356"],["/br_update_colors/js/63.2ff69420350febef921e.js","863365246d58d487ea401410e90313de"],["/br_update_colors/js/64.2ff69420350febef921e.js","306cb4305a60b16ab7c7c31292e2c89a"],["/br_update_colors/js/65.2ff69420350febef921e.js","d8c3804a12af1adea21657ed3265e6c4"],["/br_update_colors/js/66.2ff69420350febef921e.js","9d0e7e2a64aeb1d9b59681744e631e2c"],["/br_update_colors/js/67.2ff69420350febef921e.js","bb8d3d15643f8e913393d707a18bfd03"],["/br_update_colors/js/68.2ff69420350febef921e.js","832bd97afdc01ecf71feeba76afc503b"],["/br_update_colors/js/69.2ff69420350febef921e.js","fffbdf0c3a6e2b6ec86309b6e99c4b39"],["/br_update_colors/js/7.2ff69420350febef921e.js","81dc1141c0cf755da110b3b8ac0b38e2"],["/br_update_colors/js/70.2ff69420350febef921e.js","c766a6ea921cfac165ca3ed3e0097a9e"],["/br_update_colors/js/71.2ff69420350febef921e.js","ed879fb9f6b34106f7f7549c29533448"],["/br_update_colors/js/72.2ff69420350febef921e.js","69a4d61c1ec64a04120c997f185d9354"],["/br_update_colors/js/73.2ff69420350febef921e.js","1457587fd4ceeed47e390bc7ca334a87"],["/br_update_colors/js/74.2ff69420350febef921e.js","b34f8c134d6ece6caa6fdd97b856c19f"],["/br_update_colors/js/75.2ff69420350febef921e.js","368bf7d8e627f1db59ccf77568886c72"],["/br_update_colors/js/76.2ff69420350febef921e.js","5197a6e79a66fa829bffbcb970b5c5b0"],["/br_update_colors/js/77.2ff69420350febef921e.js","5f309e9af2fb181bd2f8e7a670a4fe33"],["/br_update_colors/js/78.2ff69420350febef921e.js","0bd46fa77d296ca840355b8e08cf65bc"],["/br_update_colors/js/79.2ff69420350febef921e.js","4e26e95b1c7a230200171583cf806dcf"],["/br_update_colors/js/8.2ff69420350febef921e.js","19fdc5f65692437838d04546db0b5226"],["/br_update_colors/js/80.2ff69420350febef921e.js","beee288332e8ac4c7cff19c4ac158be9"],["/br_update_colors/js/81.2ff69420350febef921e.js","6a018259015fb2a12b9c5dc2f28bab40"],["/br_update_colors/js/82.2ff69420350febef921e.js","823ddd4ad507646615589c672d7f2ae0"],["/br_update_colors/js/83.2ff69420350febef921e.js","ce0e1fa2356544b43ab90472e59dd7b2"],["/br_update_colors/js/84.2ff69420350febef921e.js","0669077394eb83e7d2ddfbd8cc1877d9"],["/br_update_colors/js/9.2ff69420350febef921e.js","4ee8dfc71903af77bb08a37aeba5305a"],["/br_update_colors/js/AccountSignupModal.2ff69420350febef921e.js","9f11db15a164ea9b5917441038db5dde"],["/br_update_colors/js/account-info.2ff69420350febef921e.js","3838205d370f6fa50dc4f6c7607487f1"],["/br_update_colors/js/account.2ff69420350febef921e.js","23b0939dea4fe8d0364f6899eecf98a4"],["/br_update_colors/js/contract.2ff69420350febef921e.js","5678dda6d04cb12e9415ab73281b8fe2"],["/br_update_colors/js/modals.2ff69420350febef921e.js","483364a01e6483c5e4fe4035a254b454"],["/br_update_colors/js/notification-messages.2ff69420350febef921e.js","27594c506ac828f2ab8f3b0641fd343d"],["/br_update_colors/js/push-notification.2ff69420350febef921e.js","0b12df6e5ba12101d9d791943e5994ca"],["/br_update_colors/js/reports.2ff69420350febef921e.js","3ce2ac1c893b7ec0f9c99c4424375b6e"],["/br_update_colors/js/screen-small.2ff69420350febef921e.js","2a5e918f77b02d51f1ca71af6f442c58"],["/br_update_colors/js/settings-chart.2ff69420350febef921e.js","9be3358d9ee7fb9c2b9eca66dbb7fa3d"],["/br_update_colors/js/settings-language.2ff69420350febef921e.js","07acdadb84ebc179dcbc8eb8585b0a8e"],["/br_update_colors/js/settings-theme.2ff69420350febef921e.js","420614688fb778ae8320fe9d295b21cf"],["/br_update_colors/js/smartcharts/chartiq-20e7d9.smartcharts.js","bff0550267141f484e80bd85a653d525"],["/br_update_colors/js/smartcharts/de-po-2be090.smartcharts.js","add4442c58a7566295b9d2dd4af1c66f"],["/br_update_colors/js/smartcharts/es-po-13563c.smartcharts.js","a1fe9d146280432fd352a12db2ffc267"],["/br_update_colors/js/smartcharts/fr-po-68d56d.smartcharts.js","da7115f055ca710a9bc12ecdf5a3ad1a"],["/br_update_colors/js/smartcharts/html2canvas-fb6a61.smartcharts.js","9c599654d508fd876e10a24a0ada1b79"],["/br_update_colors/js/smartcharts/id-po-b0a940.smartcharts.js","188c6bee2e66a7e06d42265b789753c5"],["/br_update_colors/js/smartcharts/it-po-ed7ac7.smartcharts.js","e27729e8ba56a2169c1555066115fe1f"],["/br_update_colors/js/smartcharts/nl-po-85ccc7.smartcharts.js","e4429757bdce370683fb0445834017b4"],["/br_update_colors/js/smartcharts/pl-po-db1605.smartcharts.js","6bc8bf5b0c78b4889a5eafb6ce59e4c8"],["/br_update_colors/js/smartcharts/pt-po-056cd5.smartcharts.js","01e422ae46f341ec59b835abba6e6366"],["/br_update_colors/js/smartcharts/ru-po-85c8e0.smartcharts.js","a798f555c2b26c2b8886be49b06e35de"],["/br_update_colors/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/br_update_colors/js/smartcharts/th-po-8641c6.smartcharts.js","8e52e408600ab67b033a16aaa9eb2efa"],["/br_update_colors/js/smartcharts/vendors~resize-observer-polyfill-a9bbdb.smartcharts.js","8b6ac48c545f617e07626a394a4ae6df"],["/br_update_colors/js/smartcharts/vi-po-9a11b6.smartcharts.js","51ed5d1e8ff12b5575c0ab985d177ed5"],["/br_update_colors/js/smartcharts/zh_cn-po-d2943e.smartcharts.js","d52097a138017b87b75fa968ef9c8cf7"],["/br_update_colors/js/smartcharts/zh_tw-po-33941e.smartcharts.js","f48370516c26d072d20764a77cbd61c3"],["/br_update_colors/js/toggle-menu-drawer.2ff69420350febef921e.js","df941bd2e4bfb7c0b0b73dfd23d3fefb"],["/br_update_colors/js/two-month-picker.2ff69420350febef921e.js","7ffcebff91118e847097df8afcb893b7"],["/br_update_colors/js/vendors~smart_chart.2ff69420350febef921e.js","0265f8a9d600ee235a15a15723158f34"],["/br_update_colors/js/work-in-progress.2ff69420350febef921e.js","694c057ec7838bb4b68034d289016484"],["/br_update_colors/manifest.json","1ea1fdebbe54047fb949134c51fc8cd3"],["/br_update_colors/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/br_update_colors/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/br_update_colors/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/br_update_colors/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/br_update_colors/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/br_update_colors/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/br_update_colors/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/br_update_colors/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/br_update_colors/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/br_update_colors/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/br_update_colors/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/br_update_colors/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/br_update_colors/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/br_update_colors/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/br_update_colors/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/br_update_colors/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/br_update_colors/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/br_update_colors/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/br_update_colors/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/br_update_colors/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/br_update_colors/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/br_update_colors/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/br_update_colors/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/br_update_colors/robots.txt","6978a616c585d03cb5b542a891995efb"],["/br_update_colors/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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
    var navigateFallback = '/br_update_colors/';
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







