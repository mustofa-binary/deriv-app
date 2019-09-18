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

var precacheConfig = [["/br_update_colors/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/br_update_colors/css/AccountSignupModal.css","eade664c1d3a263e1940d276f7591069"],["/br_update_colors/css/app.css","1b006119317f34679207adc146aa505a"],["/br_update_colors/css/default~open_position~1833eefb.css","2bcaf44c26ecbfe94ba266b56ea7619f"],["/br_update_colors/css/modals.css","3a5b833435f7a68706d203d7bcee9b09"],["/br_update_colors/css/notification-messages.css","5387a0647608beb30182d355cf8a77ec"],["/br_update_colors/css/reports.css","ff577b24426391cdd7ea839630125c72"],["/br_update_colors/css/screen-small.css","1cec48c0719b5e04351b28baf610492c"],["/br_update_colors/css/settings-chart.css","5267a1d56819a5a2da0992b895a9703a"],["/br_update_colors/css/smartcharts.css","abc265e8f0847879f0a2e3e35cdfa641"],["/br_update_colors/css/work-in-progress.css","76fe496c6a76cafce1c5a9636b63aedc"],["/br_update_colors/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/br_update_colors/index.html","c3614d786e870e7a4630c27c28cc580d"],["/br_update_colors/js/0.5bded078c6c5ef7e1965.js","d8b9079dcad29812a4e0b65db3a8c89b"],["/br_update_colors/js/1.5bded078c6c5ef7e1965.js","d5b227514040f9243fd1bd65d8f4d25e"],["/br_update_colors/js/10.5bded078c6c5ef7e1965.js","54a459cc2c159748a3058ad8d1f0bb56"],["/br_update_colors/js/11.5bded078c6c5ef7e1965.js","ac18460f3dc609f0767faf9c63919817"],["/br_update_colors/js/12.5bded078c6c5ef7e1965.js","e5dced7cb9bddac48ec90a2c8be36292"],["/br_update_colors/js/13.5bded078c6c5ef7e1965.js","c7cd2b7e82ab43863fc2e1e5d05b330e"],["/br_update_colors/js/14.5bded078c6c5ef7e1965.js","fc4c930d83e93dc5dd64e7e288efd1cc"],["/br_update_colors/js/15.5bded078c6c5ef7e1965.js","89d436a2e156b44d258d6fc9a12f1512"],["/br_update_colors/js/16.5bded078c6c5ef7e1965.js","f722fc7c8f66e35c8f83e698393368fc"],["/br_update_colors/js/17.5bded078c6c5ef7e1965.js","b3e2675d8382a4aef932568bf2515562"],["/br_update_colors/js/18.5bded078c6c5ef7e1965.js","5385b8c32372bb61b19041a6e694f757"],["/br_update_colors/js/19.5bded078c6c5ef7e1965.js","984499c59b14d0cb976a7847aeb6cd7b"],["/br_update_colors/js/2.5bded078c6c5ef7e1965.js","d6729726c1d4fbfdfd85b12620e52515"],["/br_update_colors/js/20.5bded078c6c5ef7e1965.js","480b636963d993212400bc9dbc9ad331"],["/br_update_colors/js/21.5bded078c6c5ef7e1965.js","d5fbd7dcfe12074ddbc56f4b276488ba"],["/br_update_colors/js/22.5bded078c6c5ef7e1965.js","2b4541d406c97ecfda3cd64530086dea"],["/br_update_colors/js/23.5bded078c6c5ef7e1965.js","a3afc9fb59468f08bf9200e1aaee6b49"],["/br_update_colors/js/24.5bded078c6c5ef7e1965.js","dcc79dde6277fa18578dac9a72c078aa"],["/br_update_colors/js/25.5bded078c6c5ef7e1965.js","086882fdf77fdb69393f3d6e6c228c7d"],["/br_update_colors/js/26.5bded078c6c5ef7e1965.js","19ab53981cad1bd606e08479bee2a597"],["/br_update_colors/js/27.5bded078c6c5ef7e1965.js","a2d5f4edadf628913662f311cbfc4a93"],["/br_update_colors/js/28.5bded078c6c5ef7e1965.js","4f98e13e962950e875125219c070ce89"],["/br_update_colors/js/29.5bded078c6c5ef7e1965.js","879fe5ad8c318eddaf6bc4d6586b8052"],["/br_update_colors/js/3.5bded078c6c5ef7e1965.js","e46b170f7047561d1c538c38480fa04e"],["/br_update_colors/js/30.5bded078c6c5ef7e1965.js","cbc71da2d545fd84a64f77ee7bc99113"],["/br_update_colors/js/31.5bded078c6c5ef7e1965.js","c34142d165055a67444cfb3fb92c50c5"],["/br_update_colors/js/32.5bded078c6c5ef7e1965.js","eb677656d6cb95657c27154b0a82c78d"],["/br_update_colors/js/33.5bded078c6c5ef7e1965.js","95740970e50f3bb60eb7140a6d76d2b5"],["/br_update_colors/js/34.5bded078c6c5ef7e1965.js","2e934d89dee8f0d74d198945b3aecfb9"],["/br_update_colors/js/35.5bded078c6c5ef7e1965.js","127fadbcc0723415cbd54ae3991e119f"],["/br_update_colors/js/36.5bded078c6c5ef7e1965.js","e5650d3836ca87707ce4208e5e60e45c"],["/br_update_colors/js/37.5bded078c6c5ef7e1965.js","f19e6d433c9012f3739951a95ce4f56c"],["/br_update_colors/js/38.5bded078c6c5ef7e1965.js","6007e7a7b5584508c304950ff9fff598"],["/br_update_colors/js/39.5bded078c6c5ef7e1965.js","cec7178924b84f5ae1726f1347b1bbc3"],["/br_update_colors/js/4.5bded078c6c5ef7e1965.js","98d11c18123dadd3fa0da60d4a1d8e4d"],["/br_update_colors/js/40.5bded078c6c5ef7e1965.js","b47c45a8b88f455667c1bca63c736280"],["/br_update_colors/js/404.5bded078c6c5ef7e1965.js","15e3b95eec7f9dc9762ce8d1fa7c639b"],["/br_update_colors/js/41.5bded078c6c5ef7e1965.js","aecf3cf22ca3d3689f0b639193257dcd"],["/br_update_colors/js/42.5bded078c6c5ef7e1965.js","f89a4806497db871eff0093d461b0416"],["/br_update_colors/js/43.5bded078c6c5ef7e1965.js","4032533b01f651c255f26eaeb46a065b"],["/br_update_colors/js/44.5bded078c6c5ef7e1965.js","fdbf9e6bc33e9c292783982a61af152a"],["/br_update_colors/js/45.5bded078c6c5ef7e1965.js","d9dded6affcfed7f4e6b8f4d7bdaa343"],["/br_update_colors/js/46.5bded078c6c5ef7e1965.js","b2092b991e5e5c44d60d671900b3aa3e"],["/br_update_colors/js/47.5bded078c6c5ef7e1965.js","6625880f0ad1ba6ef8f4ded2a699c5c4"],["/br_update_colors/js/48.5bded078c6c5ef7e1965.js","4f57e2259157b02676cca1982a626269"],["/br_update_colors/js/49.5bded078c6c5ef7e1965.js","6542b35d4c21aac226994b611930bb39"],["/br_update_colors/js/5.5bded078c6c5ef7e1965.js","e19694b05c322ab4c4072b087d6c8208"],["/br_update_colors/js/50.5bded078c6c5ef7e1965.js","ca518180bafce941baac53d85c36b10a"],["/br_update_colors/js/51.5bded078c6c5ef7e1965.js","67e5f0683828447885c9d135b8f9cb84"],["/br_update_colors/js/52.5bded078c6c5ef7e1965.js","3c54a95cdea68d2850ff1188fd09a45b"],["/br_update_colors/js/53.5bded078c6c5ef7e1965.js","528cb98fc984bb66d921d9c60fcdc486"],["/br_update_colors/js/54.5bded078c6c5ef7e1965.js","e66d575f4ab891f17948a3877681b50e"],["/br_update_colors/js/55.5bded078c6c5ef7e1965.js","9d7e23431ef82fa6505e8b7b24e05803"],["/br_update_colors/js/56.5bded078c6c5ef7e1965.js","414da20cfc2953951d88f788c7794b5b"],["/br_update_colors/js/57.5bded078c6c5ef7e1965.js","008dede4f645104b58bf741763fb8aea"],["/br_update_colors/js/58.5bded078c6c5ef7e1965.js","0488582af3aaa334f17f367a027e9324"],["/br_update_colors/js/59.5bded078c6c5ef7e1965.js","334277b2fdde55e7eef5a4a69033adab"],["/br_update_colors/js/6.5bded078c6c5ef7e1965.js","038eba775e0b0344ccbab8bb33da274d"],["/br_update_colors/js/60.5bded078c6c5ef7e1965.js","dec20508f4b2b90b6730e846cdb05116"],["/br_update_colors/js/61.5bded078c6c5ef7e1965.js","1f1e3cf65b070b7a4b76696da525fd78"],["/br_update_colors/js/62.5bded078c6c5ef7e1965.js","27282c15f69c7b886617c13a3dda7f54"],["/br_update_colors/js/63.5bded078c6c5ef7e1965.js","64e45487fb8a656f9295aaab196a4b95"],["/br_update_colors/js/64.5bded078c6c5ef7e1965.js","68e78bc85b42cab6a3f7ee87be884e3a"],["/br_update_colors/js/65.5bded078c6c5ef7e1965.js","5294d27473f963cde45216f59f066362"],["/br_update_colors/js/66.5bded078c6c5ef7e1965.js","137c17f5990c73a6736fe26c7785fca9"],["/br_update_colors/js/67.5bded078c6c5ef7e1965.js","f01fccc7895771110e3e47ce56c5e3db"],["/br_update_colors/js/68.5bded078c6c5ef7e1965.js","6a8e6806ba17b1f152f9df8b886a1140"],["/br_update_colors/js/69.5bded078c6c5ef7e1965.js","f2bac35717b7909631451bcd2b12b0d3"],["/br_update_colors/js/7.5bded078c6c5ef7e1965.js","91d7697c8f31c23ebeab95d30ad084ea"],["/br_update_colors/js/70.5bded078c6c5ef7e1965.js","05b0469d203596fe18a94d1b9b3e8066"],["/br_update_colors/js/71.5bded078c6c5ef7e1965.js","c6dab1114ef612fb61fd5e915b6460ec"],["/br_update_colors/js/72.5bded078c6c5ef7e1965.js","acc84ce6a8b9dfdc50f276b2caed38ed"],["/br_update_colors/js/73.5bded078c6c5ef7e1965.js","44b239c4482485ed42e94d3a3b8e19f9"],["/br_update_colors/js/74.5bded078c6c5ef7e1965.js","ac2c2966445724b0d1a5486aeddef7c7"],["/br_update_colors/js/75.5bded078c6c5ef7e1965.js","85b31ba1abcac39d051f9d46cbb3c662"],["/br_update_colors/js/76.5bded078c6c5ef7e1965.js","8b42a73bbcf685b04c4e908ff2baf454"],["/br_update_colors/js/77.5bded078c6c5ef7e1965.js","4f64cdbb1148b0a3a7a08c5036b4403d"],["/br_update_colors/js/8.5bded078c6c5ef7e1965.js","55abb3ef084764a7cf2685de8f3c9522"],["/br_update_colors/js/9.5bded078c6c5ef7e1965.js","c2e1df36b41e5f885f9825b057ba6b5e"],["/br_update_colors/js/AccountSignupModal.5bded078c6c5ef7e1965.js","1b13518ed5dad4905aaaacbd2d3e3f08"],["/br_update_colors/js/account-info.5bded078c6c5ef7e1965.js","3838205d370f6fa50dc4f6c7607487f1"],["/br_update_colors/js/contract.5bded078c6c5ef7e1965.js","5678dda6d04cb12e9415ab73281b8fe2"],["/br_update_colors/js/default~open_position~1833eefb.5bded078c6c5ef7e1965.js","25da4c8d140a672da99f51da4b6eec4a"],["/br_update_colors/js/modals.5bded078c6c5ef7e1965.js","ac67435e38fa2cb2493c20ad06b03e32"],["/br_update_colors/js/notification-messages.5bded078c6c5ef7e1965.js","27594c506ac828f2ab8f3b0641fd343d"],["/br_update_colors/js/open_positions.5bded078c6c5ef7e1965.js","1fc1b7b908937b9cd37fa021895fed7b"],["/br_update_colors/js/profit_table.5bded078c6c5ef7e1965.js","e86e8eab70e2f1fba5861e9a8fba578d"],["/br_update_colors/js/push-notification.5bded078c6c5ef7e1965.js","0b12df6e5ba12101d9d791943e5994ca"],["/br_update_colors/js/reports.5bded078c6c5ef7e1965.js","2aa56fadea2a5594b7caf36854fb5691"],["/br_update_colors/js/screen-small.5bded078c6c5ef7e1965.js","2a5e918f77b02d51f1ca71af6f442c58"],["/br_update_colors/js/settings-chart.5bded078c6c5ef7e1965.js","c089655f7224fbd4bc3321722bd2e6b4"],["/br_update_colors/js/settings-language.5bded078c6c5ef7e1965.js","07acdadb84ebc179dcbc8eb8585b0a8e"],["/br_update_colors/js/settings-theme.5bded078c6c5ef7e1965.js","420614688fb778ae8320fe9d295b21cf"],["/br_update_colors/js/smartcharts/chartiq-20e7d9.smartcharts.js","bff0550267141f484e80bd85a653d525"],["/br_update_colors/js/smartcharts/de-po-2be090.smartcharts.js","add4442c58a7566295b9d2dd4af1c66f"],["/br_update_colors/js/smartcharts/es-po-13563c.smartcharts.js","a1fe9d146280432fd352a12db2ffc267"],["/br_update_colors/js/smartcharts/fr-po-68d56d.smartcharts.js","da7115f055ca710a9bc12ecdf5a3ad1a"],["/br_update_colors/js/smartcharts/html2canvas-fb6a61.smartcharts.js","9c599654d508fd876e10a24a0ada1b79"],["/br_update_colors/js/smartcharts/id-po-b0a940.smartcharts.js","188c6bee2e66a7e06d42265b789753c5"],["/br_update_colors/js/smartcharts/it-po-ed7ac7.smartcharts.js","e27729e8ba56a2169c1555066115fe1f"],["/br_update_colors/js/smartcharts/nl-po-85ccc7.smartcharts.js","e4429757bdce370683fb0445834017b4"],["/br_update_colors/js/smartcharts/pl-po-db1605.smartcharts.js","6bc8bf5b0c78b4889a5eafb6ce59e4c8"],["/br_update_colors/js/smartcharts/pt-po-056cd5.smartcharts.js","01e422ae46f341ec59b835abba6e6366"],["/br_update_colors/js/smartcharts/ru-po-85c8e0.smartcharts.js","a798f555c2b26c2b8886be49b06e35de"],["/br_update_colors/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/br_update_colors/js/smartcharts/th-po-8641c6.smartcharts.js","8e52e408600ab67b033a16aaa9eb2efa"],["/br_update_colors/js/smartcharts/vendors~resize-observer-polyfill-a9bbdb.smartcharts.js","8b6ac48c545f617e07626a394a4ae6df"],["/br_update_colors/js/smartcharts/vi-po-9a11b6.smartcharts.js","51ed5d1e8ff12b5575c0ab985d177ed5"],["/br_update_colors/js/smartcharts/zh_cn-po-d2943e.smartcharts.js","d52097a138017b87b75fa968ef9c8cf7"],["/br_update_colors/js/smartcharts/zh_tw-po-33941e.smartcharts.js","f48370516c26d072d20764a77cbd61c3"],["/br_update_colors/js/statement.5bded078c6c5ef7e1965.js","9a8f9ce973af0c135b292708a3f209dd"],["/br_update_colors/js/toggle-menu-drawer.5bded078c6c5ef7e1965.js","df941bd2e4bfb7c0b0b73dfd23d3fefb"],["/br_update_colors/js/two-month-picker.5bded078c6c5ef7e1965.js","7ffcebff91118e847097df8afcb893b7"],["/br_update_colors/js/vendors~AccountSignupModal.5bded078c6c5ef7e1965.js","6c1945274f21d09e280a8526c6199ff9"],["/br_update_colors/js/vendors~open_position~7c650be5.5bded078c6c5ef7e1965.js","35e9a0b928d379da3420c5b85c32e316"],["/br_update_colors/js/vendors~smart_chart.5bded078c6c5ef7e1965.js","0265f8a9d600ee235a15a15723158f34"],["/br_update_colors/js/work-in-progress.5bded078c6c5ef7e1965.js","694c057ec7838bb4b68034d289016484"],["/br_update_colors/manifest.json","1ea1fdebbe54047fb949134c51fc8cd3"],["/br_update_colors/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/br_update_colors/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/br_update_colors/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/br_update_colors/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/br_update_colors/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/br_update_colors/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/br_update_colors/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/br_update_colors/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/br_update_colors/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/br_update_colors/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/br_update_colors/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/br_update_colors/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/br_update_colors/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/br_update_colors/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/br_update_colors/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/br_update_colors/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/br_update_colors/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/br_update_colors/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/br_update_colors/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/br_update_colors/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/br_update_colors/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/br_update_colors/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/br_update_colors/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/br_update_colors/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/br_update_colors/robots.txt","6978a616c585d03cb5b542a891995efb"],["/br_update_colors/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







