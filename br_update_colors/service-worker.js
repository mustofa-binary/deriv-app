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

var precacheConfig = [["/br_update_colors/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/br_update_colors/css/1.css","0ea4846cbb42d811f69e1461cf34cd62"],["/br_update_colors/css/3.css","33618e9d58eddcc44ae7ab737cac3349"],["/br_update_colors/css/AccountSignupModal.css","2237be41ec1f5d99eb2d1b7b91f32669"],["/br_update_colors/css/app.css","1f9df62c99c2ea52ec23a2a0ceec1100"],["/br_update_colors/css/default~open_position~1833eefb.css","f4a8c01f4e963fffd5f35f412bd06063"],["/br_update_colors/css/modals.css","ee331d34b874962524e2e5d6dc9057d6"],["/br_update_colors/css/notification-messages.css","a84209801281078282b1336958b6ac75"],["/br_update_colors/css/reports.css","726c0e212cba8b6494c238d7d7c5f2eb"],["/br_update_colors/css/screen-small.css","6ddc4529992c0ada0e4116659e4c2c20"],["/br_update_colors/css/settings-chart.css","4b52c6d9d478bee71edce650582a8f7e"],["/br_update_colors/css/smartcharts.css","abc265e8f0847879f0a2e3e35cdfa641"],["/br_update_colors/css/wallet-information.css","f4a8c01f4e963fffd5f35f412bd06063"],["/br_update_colors/css/work-in-progress.css","fe7ce39ffcaa3ad2b9daca2e2d411638"],["/br_update_colors/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/br_update_colors/index.html","644bd4f8cad39fef02f2524d1e8d6157"],["/br_update_colors/js/0.c1a058f3fa35aca52150.js","6290c7f6f722e56f18b4c918a4f8284b"],["/br_update_colors/js/1.c1a058f3fa35aca52150.js","bfff335191ad1fa2c49339a96e2389a6"],["/br_update_colors/js/10.c1a058f3fa35aca52150.js","e9851154950818dcef9f123d1415cef5"],["/br_update_colors/js/11.c1a058f3fa35aca52150.js","123b4a1a441ac0f8db199e0244721502"],["/br_update_colors/js/12.c1a058f3fa35aca52150.js","290b1671e70efe67f60e8694f7aede23"],["/br_update_colors/js/13.c1a058f3fa35aca52150.js","e8d7b1df90993868f6ac149164451fba"],["/br_update_colors/js/14.c1a058f3fa35aca52150.js","d2628fbc229a6b6deb8dc922105a7811"],["/br_update_colors/js/15.c1a058f3fa35aca52150.js","dceb7e9f83782c4fbab4486f6d98afdc"],["/br_update_colors/js/16.c1a058f3fa35aca52150.js","ba91759ee0dd999b3781208fe5f09d9b"],["/br_update_colors/js/17.c1a058f3fa35aca52150.js","7e0de77bbd031e2b2006151bcf3582b0"],["/br_update_colors/js/18.c1a058f3fa35aca52150.js","da1216224d7070a5034245eefeab5c1d"],["/br_update_colors/js/19.c1a058f3fa35aca52150.js","dc01c32949afb6e88750e4affd69d338"],["/br_update_colors/js/2.c1a058f3fa35aca52150.js","f9ffbe5545cb3be7b4fa88166415b710"],["/br_update_colors/js/20.c1a058f3fa35aca52150.js","8df7d5d2b18c551852c370dada372282"],["/br_update_colors/js/21.c1a058f3fa35aca52150.js","cfb86993cf356f9643a0bc8fa09cf7d5"],["/br_update_colors/js/22.c1a058f3fa35aca52150.js","9c30b544392cfeb4aa2b5d97f65e323a"],["/br_update_colors/js/23.c1a058f3fa35aca52150.js","ce9dda30613d64bd27bca8d8b52c4947"],["/br_update_colors/js/24.c1a058f3fa35aca52150.js","7d33cdc712f2fc3346f0024a793d0b65"],["/br_update_colors/js/25.c1a058f3fa35aca52150.js","ba63ce8505c0dfc75e59b6a171dbaa6e"],["/br_update_colors/js/26.c1a058f3fa35aca52150.js","c224bcf4ae71fc7f7bfeb2ea7be0a47c"],["/br_update_colors/js/27.c1a058f3fa35aca52150.js","cf89e12ba351929322c43014a479791a"],["/br_update_colors/js/28.c1a058f3fa35aca52150.js","3732667961d024b1bd5eadaffabab0e9"],["/br_update_colors/js/29.c1a058f3fa35aca52150.js","8d09b69510f20c72bc5b7c00e3dde76e"],["/br_update_colors/js/3.c1a058f3fa35aca52150.js","4b5a9d31ef83f5e91586223c968b68a0"],["/br_update_colors/js/30.c1a058f3fa35aca52150.js","6e57f5b1a9d72dfb80269e0b9cbbc4a5"],["/br_update_colors/js/31.c1a058f3fa35aca52150.js","03b9a39cab9c15b509af4e7a1d8ef16c"],["/br_update_colors/js/32.c1a058f3fa35aca52150.js","9f784070cd5bf69f690a9a8abe39a68f"],["/br_update_colors/js/33.c1a058f3fa35aca52150.js","9c175dcea4399e73b0625a07c116ee9e"],["/br_update_colors/js/34.c1a058f3fa35aca52150.js","cb1b7f8e5f0922d661263abaf37568b6"],["/br_update_colors/js/35.c1a058f3fa35aca52150.js","109db955a8ccf97db4a469665f939fe0"],["/br_update_colors/js/36.c1a058f3fa35aca52150.js","0a24287b500d1090b9fb3637444554c9"],["/br_update_colors/js/37.c1a058f3fa35aca52150.js","76bc1e00974ffcd16cb824f53c638f5a"],["/br_update_colors/js/38.c1a058f3fa35aca52150.js","0ad522904ebc4fb09d67c0721036cc3b"],["/br_update_colors/js/39.c1a058f3fa35aca52150.js","6f106c2be595f377684c595a26ce0a3d"],["/br_update_colors/js/4.c1a058f3fa35aca52150.js","4331ee9b23bd1cae73f4f5b07ad3a01f"],["/br_update_colors/js/40.c1a058f3fa35aca52150.js","5c4a281ff6a778cac8efbe2125ce8a26"],["/br_update_colors/js/404.c1a058f3fa35aca52150.js","15e3b95eec7f9dc9762ce8d1fa7c639b"],["/br_update_colors/js/41.c1a058f3fa35aca52150.js","04bb627ef548cd15ac87e21c1ceff0ac"],["/br_update_colors/js/42.c1a058f3fa35aca52150.js","1c59b327a5601121e6476576acaa7d21"],["/br_update_colors/js/43.c1a058f3fa35aca52150.js","86fc1aa59614cfa347ceab5e3dcbef81"],["/br_update_colors/js/44.c1a058f3fa35aca52150.js","43ce8c567f09c94f0e2136aeea752b6f"],["/br_update_colors/js/45.c1a058f3fa35aca52150.js","d62358a712bf33cfcca0782ac93d2920"],["/br_update_colors/js/46.c1a058f3fa35aca52150.js","156b367467d22d62dcd4fb0cb2406807"],["/br_update_colors/js/47.c1a058f3fa35aca52150.js","49d2ee02ebd564fb0bda16d4bc118fd5"],["/br_update_colors/js/48.c1a058f3fa35aca52150.js","35123dd64e5320debfd76e25f12f0367"],["/br_update_colors/js/49.c1a058f3fa35aca52150.js","6735015a3ae3ec6ec0343a6bed7f3c04"],["/br_update_colors/js/5.c1a058f3fa35aca52150.js","384734f14b575cc133bbbb71826e8824"],["/br_update_colors/js/50.c1a058f3fa35aca52150.js","d8df825f46dc904b0021be11dab7eeeb"],["/br_update_colors/js/51.c1a058f3fa35aca52150.js","f9eea8f7f1048617cbd9c64895a55cb0"],["/br_update_colors/js/52.c1a058f3fa35aca52150.js","9e97bb6b7ccfdce3e8afa725567c8748"],["/br_update_colors/js/53.c1a058f3fa35aca52150.js","005ea117dbafb5cccc5fba49a5a4a7b5"],["/br_update_colors/js/54.c1a058f3fa35aca52150.js","8a6b89ed17de42fcb04fc80c1c05173b"],["/br_update_colors/js/55.c1a058f3fa35aca52150.js","31dbd660bbbeb5aa54a6da3200776128"],["/br_update_colors/js/56.c1a058f3fa35aca52150.js","ab8f8175d1c81219d3d12f909de5fa42"],["/br_update_colors/js/57.c1a058f3fa35aca52150.js","f36b1cd3218e4c5b3b178b936ee685b7"],["/br_update_colors/js/58.c1a058f3fa35aca52150.js","b6ca034a2fb7a26b06cb68691dcb0a0d"],["/br_update_colors/js/59.c1a058f3fa35aca52150.js","5c9051ce8eb459a04be4f17cb46d854f"],["/br_update_colors/js/6.c1a058f3fa35aca52150.js","18eb55ee65ae019f6d503c0a81266973"],["/br_update_colors/js/60.c1a058f3fa35aca52150.js","5a14581f85a8184d59906826d2a25375"],["/br_update_colors/js/61.c1a058f3fa35aca52150.js","afff86b1d937cdb2c032ae01fd77ac97"],["/br_update_colors/js/62.c1a058f3fa35aca52150.js","4a9aa2880d63f4516037be4245f61a03"],["/br_update_colors/js/63.c1a058f3fa35aca52150.js","0b464c9921cd1e106b149de640a422af"],["/br_update_colors/js/64.c1a058f3fa35aca52150.js","4c0ce5ff3e3ab337242a284ed389a3a3"],["/br_update_colors/js/65.c1a058f3fa35aca52150.js","cbb2f00af89d6c6f9daa01cd9a2f816c"],["/br_update_colors/js/66.c1a058f3fa35aca52150.js","87a58e9d0677bb67e1f2ed71a0878a1a"],["/br_update_colors/js/67.c1a058f3fa35aca52150.js","dbb6a01d8a4fc567fd775cab7207f97f"],["/br_update_colors/js/68.c1a058f3fa35aca52150.js","0a27d2883df5657d0b3ce441cef795c7"],["/br_update_colors/js/69.c1a058f3fa35aca52150.js","755bbeea09e87d22573161cda98c2809"],["/br_update_colors/js/7.c1a058f3fa35aca52150.js","5a31c2b065e1baf688fae236c963642e"],["/br_update_colors/js/70.c1a058f3fa35aca52150.js","2adf1de14e2f043441030980d2f21cb9"],["/br_update_colors/js/71.c1a058f3fa35aca52150.js","813d38d6ca74c40caa7494df43cecbce"],["/br_update_colors/js/72.c1a058f3fa35aca52150.js","c5b38fa76610ab6a1ca8ba1b1f5d9567"],["/br_update_colors/js/73.c1a058f3fa35aca52150.js","5679e3ae2aefbc6ec5488cd3593e6f78"],["/br_update_colors/js/74.c1a058f3fa35aca52150.js","c1c963ce81dd13b96e31373dac3790c9"],["/br_update_colors/js/75.c1a058f3fa35aca52150.js","349eea34e9e53adc3021f334eadaac6d"],["/br_update_colors/js/76.c1a058f3fa35aca52150.js","4e717b22e70d249e906ba6ec6788d3fd"],["/br_update_colors/js/77.c1a058f3fa35aca52150.js","4a4364c2533b0faff31ef382f37f7082"],["/br_update_colors/js/78.c1a058f3fa35aca52150.js","02d1e2eff1c09b2ed79b8202f47c6b27"],["/br_update_colors/js/79.c1a058f3fa35aca52150.js","724bb3f9a11f60fbe4c507168cb2ecc0"],["/br_update_colors/js/8.c1a058f3fa35aca52150.js","8566f14bc8df129062432681c0f67eed"],["/br_update_colors/js/80.c1a058f3fa35aca52150.js","303b37ca59c66e853ab14c0ca89e4f60"],["/br_update_colors/js/81.c1a058f3fa35aca52150.js","673cda3ef0f20bebb8daa99bb0604244"],["/br_update_colors/js/82.c1a058f3fa35aca52150.js","a7cb66128020b3fd22ed04771b3882ad"],["/br_update_colors/js/9.c1a058f3fa35aca52150.js","63d22e8360cbb2ef485c1fb0b659e96f"],["/br_update_colors/js/AccountSignupModal.c1a058f3fa35aca52150.js","7eb3f29bf0b347f242b97d1ba1ad3681"],["/br_update_colors/js/account-info.c1a058f3fa35aca52150.js","3838205d370f6fa50dc4f6c7607487f1"],["/br_update_colors/js/contract.c1a058f3fa35aca52150.js","5678dda6d04cb12e9415ab73281b8fe2"],["/br_update_colors/js/default~open_position~1833eefb.c1a058f3fa35aca52150.js","ecf2eae244e16d758d9a10224d583967"],["/br_update_colors/js/modals.c1a058f3fa35aca52150.js","d75655ecf076e4830bc025fa681ac1c7"],["/br_update_colors/js/notification-messages.c1a058f3fa35aca52150.js","27594c506ac828f2ab8f3b0641fd343d"],["/br_update_colors/js/open_positions.c1a058f3fa35aca52150.js","1fc1b7b908937b9cd37fa021895fed7b"],["/br_update_colors/js/profit_table.c1a058f3fa35aca52150.js","e86e8eab70e2f1fba5861e9a8fba578d"],["/br_update_colors/js/push-notification.c1a058f3fa35aca52150.js","0b12df6e5ba12101d9d791943e5994ca"],["/br_update_colors/js/reports.c1a058f3fa35aca52150.js","842e435529f148ecee5cd9ba70d86475"],["/br_update_colors/js/screen-small.c1a058f3fa35aca52150.js","2a5e918f77b02d51f1ca71af6f442c58"],["/br_update_colors/js/settings-chart.c1a058f3fa35aca52150.js","c6f4bc7e754f8121533a19864913a05f"],["/br_update_colors/js/settings-language.c1a058f3fa35aca52150.js","07acdadb84ebc179dcbc8eb8585b0a8e"],["/br_update_colors/js/settings-theme.c1a058f3fa35aca52150.js","420614688fb778ae8320fe9d295b21cf"],["/br_update_colors/js/smartcharts/chartiq-20e7d9.smartcharts.js","bff0550267141f484e80bd85a653d525"],["/br_update_colors/js/smartcharts/de-po-2be090.smartcharts.js","add4442c58a7566295b9d2dd4af1c66f"],["/br_update_colors/js/smartcharts/es-po-13563c.smartcharts.js","a1fe9d146280432fd352a12db2ffc267"],["/br_update_colors/js/smartcharts/fr-po-68d56d.smartcharts.js","da7115f055ca710a9bc12ecdf5a3ad1a"],["/br_update_colors/js/smartcharts/html2canvas-fb6a61.smartcharts.js","9c599654d508fd876e10a24a0ada1b79"],["/br_update_colors/js/smartcharts/id-po-b0a940.smartcharts.js","188c6bee2e66a7e06d42265b789753c5"],["/br_update_colors/js/smartcharts/it-po-ed7ac7.smartcharts.js","e27729e8ba56a2169c1555066115fe1f"],["/br_update_colors/js/smartcharts/nl-po-85ccc7.smartcharts.js","e4429757bdce370683fb0445834017b4"],["/br_update_colors/js/smartcharts/pl-po-db1605.smartcharts.js","6bc8bf5b0c78b4889a5eafb6ce59e4c8"],["/br_update_colors/js/smartcharts/pt-po-056cd5.smartcharts.js","01e422ae46f341ec59b835abba6e6366"],["/br_update_colors/js/smartcharts/ru-po-85c8e0.smartcharts.js","a798f555c2b26c2b8886be49b06e35de"],["/br_update_colors/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/br_update_colors/js/smartcharts/th-po-8641c6.smartcharts.js","8e52e408600ab67b033a16aaa9eb2efa"],["/br_update_colors/js/smartcharts/vendors~resize-observer-polyfill-a9bbdb.smartcharts.js","8b6ac48c545f617e07626a394a4ae6df"],["/br_update_colors/js/smartcharts/vi-po-9a11b6.smartcharts.js","51ed5d1e8ff12b5575c0ab985d177ed5"],["/br_update_colors/js/smartcharts/zh_cn-po-d2943e.smartcharts.js","d52097a138017b87b75fa968ef9c8cf7"],["/br_update_colors/js/smartcharts/zh_tw-po-33941e.smartcharts.js","f48370516c26d072d20764a77cbd61c3"],["/br_update_colors/js/statement.c1a058f3fa35aca52150.js","9a8f9ce973af0c135b292708a3f209dd"],["/br_update_colors/js/toggle-menu-drawer.c1a058f3fa35aca52150.js","df941bd2e4bfb7c0b0b73dfd23d3fefb"],["/br_update_colors/js/two-month-picker.c1a058f3fa35aca52150.js","7ffcebff91118e847097df8afcb893b7"],["/br_update_colors/js/vendors~open_position~7c650be5.c1a058f3fa35aca52150.js","35e9a0b928d379da3420c5b85c32e316"],["/br_update_colors/js/vendors~smart_chart.c1a058f3fa35aca52150.js","0265f8a9d600ee235a15a15723158f34"],["/br_update_colors/js/wallet-information.c1a058f3fa35aca52150.js","6b53da4fd063ed50188541d69ee50108"],["/br_update_colors/js/work-in-progress.c1a058f3fa35aca52150.js","694c057ec7838bb4b68034d289016484"],["/br_update_colors/manifest.json","1ea1fdebbe54047fb949134c51fc8cd3"],["/br_update_colors/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/br_update_colors/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/br_update_colors/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/br_update_colors/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/br_update_colors/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/br_update_colors/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/br_update_colors/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/br_update_colors/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/br_update_colors/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/br_update_colors/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/br_update_colors/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/br_update_colors/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/br_update_colors/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/br_update_colors/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/br_update_colors/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/br_update_colors/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/br_update_colors/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/br_update_colors/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/br_update_colors/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/br_update_colors/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/br_update_colors/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/br_update_colors/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/br_update_colors/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/br_update_colors/robots.txt","6978a616c585d03cb5b542a891995efb"],["/br_update_colors/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







