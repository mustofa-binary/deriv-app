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

var precacheConfig = [["/br_fix_transparentize_bot/404.html","d30827c9a8ace12d042be3b8f95b34ff"],["/br_fix_transparentize_bot/css/1.css","df740eea021cfb5cf737f8dd3c699890"],["/br_fix_transparentize_bot/css/AccountSignupModal.css","c3b46688c9d368475daa1a16a2123727"],["/br_fix_transparentize_bot/css/ResetPasswordModal.css","986a65517413b3ec42ad2e52485bf9fa"],["/br_fix_transparentize_bot/css/app.css","ee5fa879a420e95e5cdb02e960d993f8"],["/br_fix_transparentize_bot/css/bot.css","db893f1a1f36eed5cfc00d13d6bd13f3"],["/br_fix_transparentize_bot/css/modals.css","1835dd0948c17327d881bc3b329f5668"],["/br_fix_transparentize_bot/css/smartcharts.css","007fc0d38a6950834223c1ba71b89032"],["/br_fix_transparentize_bot/css/work-in-progress.css","b07125b7f80d64fe1f58774c9221284f"],["/br_fix_transparentize_bot/favicon.ico","f0f5ae91043173a44666de5f8a92e863"],["/br_fix_transparentize_bot/index.html","9c0b608b89522870f381df4a42e896b6"],["/br_fix_transparentize_bot/js/0.b0f785582f90730dd51d.js","f766d9078798a16bd5e47041bc124976"],["/br_fix_transparentize_bot/js/1.b0f785582f90730dd51d.js","475bea612581ca7232d7c87eebde81dc"],["/br_fix_transparentize_bot/js/10.b0f785582f90730dd51d.js","c5198e433881b262f2601e226f097682"],["/br_fix_transparentize_bot/js/11.b0f785582f90730dd51d.js","58b9f41004779bad07908ae22c92571b"],["/br_fix_transparentize_bot/js/12.b0f785582f90730dd51d.js","405e986ed9c2a33245a6db1ffa6a79f0"],["/br_fix_transparentize_bot/js/13.b0f785582f90730dd51d.js","c0a9df882380b3dab58c8565277f1005"],["/br_fix_transparentize_bot/js/14.b0f785582f90730dd51d.js","37468cd85338f22b09c2b5737fb70a45"],["/br_fix_transparentize_bot/js/15.b0f785582f90730dd51d.js","5882e6d8aaf6cb8ef15cfc13e14d36ac"],["/br_fix_transparentize_bot/js/16.b0f785582f90730dd51d.js","9e120c0ec1f8dc5791d5c7f598d13751"],["/br_fix_transparentize_bot/js/17.b0f785582f90730dd51d.js","362dcfc884c2a666a34e499340b3a2c3"],["/br_fix_transparentize_bot/js/18.b0f785582f90730dd51d.js","069c2943a288e9d862419d3d60496bbd"],["/br_fix_transparentize_bot/js/19.b0f785582f90730dd51d.js","58eae6dbc7ec9dc85e48fdf02eddb217"],["/br_fix_transparentize_bot/js/2.b0f785582f90730dd51d.js","1bf088c2e1a980b1e55e6f7b024e7743"],["/br_fix_transparentize_bot/js/20.b0f785582f90730dd51d.js","fa9fd3bced6c2eda39e3fb4547d639b2"],["/br_fix_transparentize_bot/js/21.b0f785582f90730dd51d.js","b9400cd35424434c033039617d6b5a85"],["/br_fix_transparentize_bot/js/22.b0f785582f90730dd51d.js","3f9dc8a42e57d185081821c6a702cd60"],["/br_fix_transparentize_bot/js/23.b0f785582f90730dd51d.js","a1d5df2883cf4cd99da0c965f2f52afa"],["/br_fix_transparentize_bot/js/24.b0f785582f90730dd51d.js","20780f690489510f7322451c8d232319"],["/br_fix_transparentize_bot/js/25.b0f785582f90730dd51d.js","0674dc963dd0b461e1306c00e0bbe865"],["/br_fix_transparentize_bot/js/26.b0f785582f90730dd51d.js","8b69507df39b1633966c9b8a049e9a90"],["/br_fix_transparentize_bot/js/27.b0f785582f90730dd51d.js","99569555aae9bc62bceb134f2a057c0f"],["/br_fix_transparentize_bot/js/28.b0f785582f90730dd51d.js","b974e2b754e2d0b1311454bd293bf717"],["/br_fix_transparentize_bot/js/29.b0f785582f90730dd51d.js","a0e89e5803b2955ccea4689e0ee8ccf8"],["/br_fix_transparentize_bot/js/3.b0f785582f90730dd51d.js","ac67c261941d1dfc3c64ea7f549ec646"],["/br_fix_transparentize_bot/js/30.b0f785582f90730dd51d.js","1d2f378a28be00fe6c9598d7ac69f313"],["/br_fix_transparentize_bot/js/31.b0f785582f90730dd51d.js","f80bb2ce825c8127b5016f129b432515"],["/br_fix_transparentize_bot/js/32.b0f785582f90730dd51d.js","8bc3e74609ecd2db78dfaa9252bc6616"],["/br_fix_transparentize_bot/js/33.b0f785582f90730dd51d.js","20afb725ae2b66d6689b9a566f22101e"],["/br_fix_transparentize_bot/js/34.b0f785582f90730dd51d.js","88de3ac87f1ec327ffdda5ccf6172c1c"],["/br_fix_transparentize_bot/js/35.b0f785582f90730dd51d.js","db91c681eaa677e0dfd0087d9e099da1"],["/br_fix_transparentize_bot/js/36.b0f785582f90730dd51d.js","f82902e4eddcac8687e9d7d62df64535"],["/br_fix_transparentize_bot/js/37.b0f785582f90730dd51d.js","dd8bd6820f1eec80fd9f85da835b2b81"],["/br_fix_transparentize_bot/js/38.b0f785582f90730dd51d.js","2dc075e5f59fd94f540db55989e42c05"],["/br_fix_transparentize_bot/js/39.b0f785582f90730dd51d.js","4652c8f8317283e19519bbc692433709"],["/br_fix_transparentize_bot/js/4.b0f785582f90730dd51d.js","98ab1c7ec37fd377c4364af9e73a5bc1"],["/br_fix_transparentize_bot/js/40.b0f785582f90730dd51d.js","ec7ac06704f2f85589cd4d31d66f616f"],["/br_fix_transparentize_bot/js/404.b0f785582f90730dd51d.js","15e3b95eec7f9dc9762ce8d1fa7c639b"],["/br_fix_transparentize_bot/js/41.b0f785582f90730dd51d.js","29381716c084dba2aee8b075a898d3ee"],["/br_fix_transparentize_bot/js/42.b0f785582f90730dd51d.js","f0ae09fdee7fa87f68a9324faeab5bc5"],["/br_fix_transparentize_bot/js/43.b0f785582f90730dd51d.js","f4c399dc97a8122cf6ebcb2cba037983"],["/br_fix_transparentize_bot/js/44.b0f785582f90730dd51d.js","be2159e9f4388d9e05554371948a0f8c"],["/br_fix_transparentize_bot/js/45.b0f785582f90730dd51d.js","4380f59877fb868e1a26ccc784a03543"],["/br_fix_transparentize_bot/js/46.b0f785582f90730dd51d.js","045b041720984b2ffbea71bd94cc4d0d"],["/br_fix_transparentize_bot/js/47.b0f785582f90730dd51d.js","cc294036c07094e47f532219bcfb884f"],["/br_fix_transparentize_bot/js/48.b0f785582f90730dd51d.js","e43ffed9a2c4a165df7a573b37810935"],["/br_fix_transparentize_bot/js/49.b0f785582f90730dd51d.js","778b07adad62698ecb59e1ad661cde4c"],["/br_fix_transparentize_bot/js/5.b0f785582f90730dd51d.js","7b07f95eefbfef448f571aedd18437cb"],["/br_fix_transparentize_bot/js/50.b0f785582f90730dd51d.js","4d444be4281d2866a16b9265e05190c4"],["/br_fix_transparentize_bot/js/51.b0f785582f90730dd51d.js","2b6f0df078d4cd5404fa60bdcbc39415"],["/br_fix_transparentize_bot/js/52.b0f785582f90730dd51d.js","a4ee4ec954ae3c0cfb83e8eba17e5d0c"],["/br_fix_transparentize_bot/js/53.b0f785582f90730dd51d.js","0df503e8436863c3231af0d957add404"],["/br_fix_transparentize_bot/js/54.b0f785582f90730dd51d.js","736459d69130ea54c811223cdaf8a891"],["/br_fix_transparentize_bot/js/55.b0f785582f90730dd51d.js","361c2e97d203d674f31f5b43c8f2f55e"],["/br_fix_transparentize_bot/js/56.b0f785582f90730dd51d.js","e7159cd560f43c04d51aa09b63fb994a"],["/br_fix_transparentize_bot/js/57.b0f785582f90730dd51d.js","5a28b88c98a0bee1e71e5f189ff5cec0"],["/br_fix_transparentize_bot/js/58.b0f785582f90730dd51d.js","acf171b24fcbc53870089136e84434e0"],["/br_fix_transparentize_bot/js/59.b0f785582f90730dd51d.js","b2d9cc53cda22a2983a592f7e4cd1a8c"],["/br_fix_transparentize_bot/js/6.b0f785582f90730dd51d.js","18eb55ee65ae019f6d503c0a81266973"],["/br_fix_transparentize_bot/js/60.b0f785582f90730dd51d.js","da3efa90d14908bb140add37b77e2ef2"],["/br_fix_transparentize_bot/js/61.b0f785582f90730dd51d.js","c7f3ebab315e69a9e0c6aed9161c0276"],["/br_fix_transparentize_bot/js/62.b0f785582f90730dd51d.js","da72401d0817076c55b8b98dd09273d5"],["/br_fix_transparentize_bot/js/63.b0f785582f90730dd51d.js","1214ace7e93eba4563b5dcbd5fa51790"],["/br_fix_transparentize_bot/js/64.b0f785582f90730dd51d.js","48b90c64577f419bdcd36f6878f041b2"],["/br_fix_transparentize_bot/js/65.b0f785582f90730dd51d.js","73b5c3593274af00581ed9732c9ff771"],["/br_fix_transparentize_bot/js/66.b0f785582f90730dd51d.js","ca068b7847ab4954a63c99619908860b"],["/br_fix_transparentize_bot/js/67.b0f785582f90730dd51d.js","584e764dcc6fcd5d4892f0c8b1d4ec5d"],["/br_fix_transparentize_bot/js/68.b0f785582f90730dd51d.js","e9b8c25b21fe7f09c6048b3ca80ad6a6"],["/br_fix_transparentize_bot/js/69.b0f785582f90730dd51d.js","6374691a6e4bae68affad0ad515e297a"],["/br_fix_transparentize_bot/js/7.b0f785582f90730dd51d.js","44ad42496ee4e631d190e47ae9a06ec9"],["/br_fix_transparentize_bot/js/70.b0f785582f90730dd51d.js","743fe34f40c191d1c64d708a6206c7f4"],["/br_fix_transparentize_bot/js/71.b0f785582f90730dd51d.js","1ee4bc9f2dbf937537db9d7ddc3e7a0d"],["/br_fix_transparentize_bot/js/72.b0f785582f90730dd51d.js","c259fb13657052a223ddf93fccca66a9"],["/br_fix_transparentize_bot/js/73.b0f785582f90730dd51d.js","c339dce7f85b91e63fa089847477bfb1"],["/br_fix_transparentize_bot/js/74.b0f785582f90730dd51d.js","9444ebe01e1abe891296b5c8068c9b36"],["/br_fix_transparentize_bot/js/75.b0f785582f90730dd51d.js","7dc28712ad783bf097a36e672b082529"],["/br_fix_transparentize_bot/js/76.b0f785582f90730dd51d.js","e1e3b0cf2cbd4168a77406ade4e79eb4"],["/br_fix_transparentize_bot/js/77.b0f785582f90730dd51d.js","9428b1407c5ec6de2ed8ed797a80f0e9"],["/br_fix_transparentize_bot/js/78.b0f785582f90730dd51d.js","27b418d222873587e8fa574074ed1e79"],["/br_fix_transparentize_bot/js/79.b0f785582f90730dd51d.js","2d6ebfa99a4e86a2b7878a46a4dac95d"],["/br_fix_transparentize_bot/js/8.b0f785582f90730dd51d.js","7cf75cc8a2086c64b9ac065e87c4c2fd"],["/br_fix_transparentize_bot/js/80.b0f785582f90730dd51d.js","3ed96f67a6f5b6f9e7d91a1f72fb9020"],["/br_fix_transparentize_bot/js/81.b0f785582f90730dd51d.js","cbbe1f785163cdc94f38767992378f67"],["/br_fix_transparentize_bot/js/82.b0f785582f90730dd51d.js","13e023493d3fde0030269610322c9646"],["/br_fix_transparentize_bot/js/83.b0f785582f90730dd51d.js","ada8eeb47099b3e25b4e82c44608f802"],["/br_fix_transparentize_bot/js/84.b0f785582f90730dd51d.js","a42672a549e600e48f16596c5ebdf565"],["/br_fix_transparentize_bot/js/85.b0f785582f90730dd51d.js","73c866d6051c7eeb83f63588ab87e91d"],["/br_fix_transparentize_bot/js/86.b0f785582f90730dd51d.js","23eaf5de2f310ef0609fa0dc38f12831"],["/br_fix_transparentize_bot/js/87.b0f785582f90730dd51d.js","1c550330e15abe526a014e5afe11e36f"],["/br_fix_transparentize_bot/js/88.b0f785582f90730dd51d.js","3a871ca4045525cd14e96393a89e0aca"],["/br_fix_transparentize_bot/js/89.b0f785582f90730dd51d.js","eb71ffd4e351bda1e8724fa9e65dd470"],["/br_fix_transparentize_bot/js/9.b0f785582f90730dd51d.js","af5fcbbbc7a87df286289358c855a2bb"],["/br_fix_transparentize_bot/js/90.b0f785582f90730dd51d.js","da679376cd3a5932269858d7180d79c7"],["/br_fix_transparentize_bot/js/91.b0f785582f90730dd51d.js","9284338421fd23a39df914583af4ddeb"],["/br_fix_transparentize_bot/js/92.b0f785582f90730dd51d.js","f43bd3d7c5bd6f6c538430964c536ed8"],["/br_fix_transparentize_bot/js/93.b0f785582f90730dd51d.js","b75091b6e72b108b25a3436e9ef051ba"],["/br_fix_transparentize_bot/js/94.b0f785582f90730dd51d.js","43d434c417323ac2b5d132e18740f9b2"],["/br_fix_transparentize_bot/js/95.b0f785582f90730dd51d.js","3b0480bf3ebf7876f5f72cb512071d29"],["/br_fix_transparentize_bot/js/96.b0f785582f90730dd51d.js","713375a4d6f68fa380c9fa8b0ca8c56e"],["/br_fix_transparentize_bot/js/AccountSignupModal.b0f785582f90730dd51d.js","494ff482f58cc476d206264d78d2dddd"],["/br_fix_transparentize_bot/js/ResetPasswordModal.b0f785582f90730dd51d.js","020fc80ce1bc946313fbb7c5542bc519"],["/br_fix_transparentize_bot/js/account-info.b0f785582f90730dd51d.js","17e6799d01d0f514505d20c3dd8f49cb"],["/br_fix_transparentize_bot/js/bot/1-652f1e.bot.js","3d2a834d280f8c37804da943326099e3"],["/br_fix_transparentize_bot/js/bot/10-e1b364.bot.js","6211039493098f8507354fe5e20848e5"],["/br_fix_transparentize_bot/js/bot/11-a97940.bot.js","db1e3c7b2d8c0ef5cb47d74c5947792b"],["/br_fix_transparentize_bot/js/bot/12-c21a59.bot.js","e1c159960723e6a205fb23b79811b84f"],["/br_fix_transparentize_bot/js/bot/13-fc5145.bot.js","2986427ddcd8353766dc13e393a5b607"],["/br_fix_transparentize_bot/js/bot/14-a93114.bot.js","d28beb16110ff052c7960d38c59f6c9d"],["/br_fix_transparentize_bot/js/bot/15-870cdd.bot.js","f44a6c2bf5f01fa4dc57630e9109080b"],["/br_fix_transparentize_bot/js/bot/16-85b71c.bot.js","e11f18233676cbf91244b4bb0df16af7"],["/br_fix_transparentize_bot/js/bot/17-b65125.bot.js","ba397ad1dbab0e231efdc2aa6946c42e"],["/br_fix_transparentize_bot/js/bot/18-247798.bot.js","b02fb5291a37d984360e934c96dbf2ed"],["/br_fix_transparentize_bot/js/bot/19-24dc6c.bot.js","3cf07b50069ff1a147a1ca077d751623"],["/br_fix_transparentize_bot/js/bot/2-b79d62.bot.js","6c7291b6d03d7ffea0bf2da037480f27"],["/br_fix_transparentize_bot/js/bot/20-f1e866.bot.js","4aaa51db17855b26cdbd99f0b2ed9469"],["/br_fix_transparentize_bot/js/bot/21-a4df33.bot.js","a1ed52cfe16413b701d8b81b54d19ab8"],["/br_fix_transparentize_bot/js/bot/22-e5b25d.bot.js","58c4680ec923fdf5ee94ba8fd1e9fe13"],["/br_fix_transparentize_bot/js/bot/23-09d474.bot.js","64e231741268041aa132a3a2d2f07480"],["/br_fix_transparentize_bot/js/bot/24-3cceda.bot.js","d0a5d0a9e385f51a1f0b48107289fc05"],["/br_fix_transparentize_bot/js/bot/25-1b321e.bot.js","1fc7e433a15932b69c3dc73ead5e5c68"],["/br_fix_transparentize_bot/js/bot/26-414e6f.bot.js","7b2095719c7fbf78f39be05e65249f89"],["/br_fix_transparentize_bot/js/bot/27-889ed5.bot.js","b9144f4a0327113ba1e8bf194a790fcb"],["/br_fix_transparentize_bot/js/bot/28-37b115.bot.js","0e1564e643ba4e54f881932578d3630e"],["/br_fix_transparentize_bot/js/bot/29-55ab78.bot.js","4b6f381c3c68bb7153a0e765eedfdf0b"],["/br_fix_transparentize_bot/js/bot/3-3a7d0b.bot.js","cc4880c009a527c1c67e13a5e99508c3"],["/br_fix_transparentize_bot/js/bot/30-b87e79.bot.js","f94a053fee1def21938d46ef8173878d"],["/br_fix_transparentize_bot/js/bot/31-042087.bot.js","291b3fd702efea970d97973f96e52c28"],["/br_fix_transparentize_bot/js/bot/32-0a1b34.bot.js","3050912583f3687608897416266dbf2b"],["/br_fix_transparentize_bot/js/bot/33-031143.bot.js","974b102cb9a15b88231730e40bbea25c"],["/br_fix_transparentize_bot/js/bot/34-a1454e.bot.js","a18a5b09249f7dc9ead1c1b943126833"],["/br_fix_transparentize_bot/js/bot/35-64e510.bot.js","6ee18244bfd44b886a483669c9ac7f14"],["/br_fix_transparentize_bot/js/bot/36-a6c6f2.bot.js","e6b8a6f3ce65d160aa2ce7fbebcd5e22"],["/br_fix_transparentize_bot/js/bot/37-8daeb5.bot.js","bc79989760df4a6462597fb934e91bc6"],["/br_fix_transparentize_bot/js/bot/38-d16851.bot.js","46bf48b1893b45692078057c7b38e973"],["/br_fix_transparentize_bot/js/bot/39-778ccb.bot.js","0815ae66b0b74b0b67adecf3e4b0f51e"],["/br_fix_transparentize_bot/js/bot/4-5ffce9.bot.js","64196dcccfc9b902c32998cbab65b29c"],["/br_fix_transparentize_bot/js/bot/5-986245.bot.js","1ab337ad05e50c74c474272f673bd01a"],["/br_fix_transparentize_bot/js/bot/6-9472a7.bot.js","d1281f8fbf44f5bbc5d42596f2b8dd3a"],["/br_fix_transparentize_bot/js/bot/7-bea47f.bot.js","b581835f0685129e28229918c41a2ebf"],["/br_fix_transparentize_bot/js/bot/8-a6cca3.bot.js","61d4e65360b517b1dc9d04c0aee7878e"],["/br_fix_transparentize_bot/js/bot/9-bdf3eb.bot.js","871cc2fd23e632bba43708892feaf991"],["/br_fix_transparentize_bot/js/bot/bot-sprite.svg","b256e57d119c13376a4f7e00d88a7f5e"],["/br_fix_transparentize_bot/js/bot/bot.css","db893f1a1f36eed5cfc00d13d6bd13f3"],["/br_fix_transparentize_bot/js/bot/media/1x1.gif","4b252c2abb0553eeb61ed061862f7540"],["/br_fix_transparentize_bot/js/bot/media/arrow.svg","e349301923b796d8dd6b56b6203c5188"],["/br_fix_transparentize_bot/js/bot/media/arrow_button.svg","af12c5eec2bd1f1e25d072869364cced"],["/br_fix_transparentize_bot/js/bot/media/break_out.png","389292b608291d05870de4e1ac97372b"],["/br_fix_transparentize_bot/js/bot/media/candle_list.png","f43494bc7e430218d2a14c7e6501e0bf"],["/br_fix_transparentize_bot/js/bot/media/candle_list_1.png","024749ea807d25be83ad510e90f6dd97"],["/br_fix_transparentize_bot/js/bot/media/check_result.png","23806d8bb4f54193205537b19e32de68"],["/br_fix_transparentize_bot/js/bot/media/click.mp3","f71910b391538a67231e088bba0d47eb"],["/br_fix_transparentize_bot/js/bot/media/click.ogg","abef65ecb98a4828172f263fd5ff7064"],["/br_fix_transparentize_bot/js/bot/media/click.wav","39c900d2154fec42201e998bcf305a4f"],["/br_fix_transparentize_bot/js/bot/media/comment-arrow-down.svg","5574bacda3e4e4ff0d6e8e954102b253"],["/br_fix_transparentize_bot/js/bot/media/comment-arrow-up.svg","003e1e1c67962afe7ecb9430b959deaf"],["/br_fix_transparentize_bot/js/bot/media/compare_logic.png","fe2dcee8f26f119960429de18c00c97b"],["/br_fix_transparentize_bot/js/bot/media/constrain.png","1ae50a795be1452098d6da18970363df"],["/br_fix_transparentize_bot/js/bot/media/continue.png","69b7ac5d0c65e9440292358e28b4c12c"],["/br_fix_transparentize_bot/js/bot/media/control_forever.svg","11e7bf044cf13076eb1f9f63309017cc"],["/br_fix_transparentize_bot/js/bot/media/control_repeat.svg","35db6c180f639644f5bbd79d658eaf64"],["/br_fix_transparentize_bot/js/bot/media/control_stop.svg","0a513fecbaa8fb54d5d105d529f158c6"],["/br_fix_transparentize_bot/js/bot/media/control_wait.svg","55c2a2baaf2a4508b7d883a71e6606fe"],["/br_fix_transparentize_bot/js/bot/media/controls_for.png","12fc68f3dad2deffcb156364f92c7e69"],["/br_fix_transparentize_bot/js/bot/media/controls_forEach.png","58733f070a0788209eee78bedcfb9ded"],["/br_fix_transparentize_bot/js/bot/media/controls_if.png","bec72ea49d083e68cee719ea0f647923"],["/br_fix_transparentize_bot/js/bot/media/delete-x.svg","8d3241cf86fcac1cd1656fec47d9a0b6"],["/br_fix_transparentize_bot/js/bot/media/delete.mp3","611d9f6a9392bb80d2000e143aa64323"],["/br_fix_transparentize_bot/js/bot/media/delete.ogg","404bc7b7f1119d2eae0532a228814cf3"],["/br_fix_transparentize_bot/js/bot/media/delete.wav","f079a6272c75b7ddce61f72a98a07731"],["/br_fix_transparentize_bot/js/bot/media/dropdown-arrow-dark.svg","000650484bd9fc536153dc5d7d064996"],["/br_fix_transparentize_bot/js/bot/media/dropdown-arrow.svg","be850da552699b8705b5902cb59c6d37"],["/br_fix_transparentize_bot/js/bot/media/epoch.png","5aad262f4afe0fc29f3feb3d62ea962a"],["/br_fix_transparentize_bot/js/bot/media/event_broadcast_blue.svg","66d4fdeb552c48adb936dd134f9a7cc3"],["/br_fix_transparentize_bot/js/bot/media/event_broadcast_coral.svg","1c866d5fc9b809e085f815d4cc528c3d"],["/br_fix_transparentize_bot/js/bot/media/event_broadcast_green.svg","07fc1baf5962aa6035c259dedfbdf10b"],["/br_fix_transparentize_bot/js/bot/media/event_broadcast_magenta.svg","4288ba3e3534c6c3bf065f888c74276a"],["/br_fix_transparentize_bot/js/bot/media/event_broadcast_orange.svg","fe7e38133cf1be78f504777da6864807"],["/br_fix_transparentize_bot/js/bot/media/event_broadcast_purple.svg","97e3a8d9596074ccb0f02f888e290920"],["/br_fix_transparentize_bot/js/bot/media/event_when-broadcast-received_blue.svg","a1c3ec8129337cdc6a0e00d51ba75b75"],["/br_fix_transparentize_bot/js/bot/media/event_when-broadcast-received_coral.svg","5cddf42acdb787c2cf03bdd5c3507e16"],["/br_fix_transparentize_bot/js/bot/media/event_when-broadcast-received_green.svg","7fdc28bcbc5bae41c0e55e8c1009bf6a"],["/br_fix_transparentize_bot/js/bot/media/event_when-broadcast-received_magenta.svg","1ada6afd03b601a82d0f7650f72b39b3"],["/br_fix_transparentize_bot/js/bot/media/event_when-broadcast-received_orange.svg","fcd47384fbb6dc6e136a6961b042bb0e"],["/br_fix_transparentize_bot/js/bot/media/event_when-broadcast-received_purple.svg","0da127529cc813e1f615b87cdcf87d28"],["/br_fix_transparentize_bot/js/bot/media/event_whenflagclicked.svg","b93d2d06ce25b6a10a8af6caac0890f3"],["/br_fix_transparentize_bot/js/bot/media/eyedropper.svg","ad88aac393c2d7d9e88f7229ac5bcdde"],["/br_fix_transparentize_bot/js/bot/media/get_candle.png","b0ade6ef41382e091226788a8896bed2"],["/br_fix_transparentize_bot/js/bot/media/green-flag.svg","6a025d288965050155abca89738f6b10"],["/br_fix_transparentize_bot/js/bot/media/handclosed.cur","6b45ea439228cba3afaa23022f1246a2"],["/br_fix_transparentize_bot/js/bot/media/handdelete.cur","b0b4b0b44ed0136f7899c8b2957ca68f"],["/br_fix_transparentize_bot/js/bot/media/handopen.cur","505cbb975d6102c374ec64aa92397051"],["/br_fix_transparentize_bot/js/bot/media/if-return.png","bb611be28a973077bb6f6b11b4caeded"],["/br_fix_transparentize_bot/js/bot/media/in_candle_list_read.png","bf78c9849331b6577136e4a61979fb95"],["/br_fix_transparentize_bot/js/bot/media/is_candle_black.jpeg","51be3a2c0fbef85906ae894c5f9675f7"],["/br_fix_transparentize_bot/js/bot/media/is_candle_black_1.jpeg","d72d98eff294937daeec896afd174776"],["/br_fix_transparentize_bot/js/bot/media/logic.png","ce964ddad66e93551850d06021bb04f4"],["/br_fix_transparentize_bot/js/bot/media/microbit-block-icon.svg","762e3f99bc602ad35add07a3d34cc177"],["/br_fix_transparentize_bot/js/bot/media/music-block-icon.svg","9d9e41ee9e7df510bcbb5c65cc927526"],["/br_fix_transparentize_bot/js/bot/media/notify_telegram.png","e6707af81bf665fed6e4e72007090771"],["/br_fix_transparentize_bot/js/bot/media/pen-block-icon.svg","2d0b6dcc703fcf4cdfd2c9c19c407f9f"],["/br_fix_transparentize_bot/js/bot/media/read_candle_value.png","357ae750a0dae068a18949de40a37354"],["/br_fix_transparentize_bot/js/bot/media/remove.svg","c9b4db61d6901dc5326d8af8f00eb770"],["/br_fix_transparentize_bot/js/bot/media/repeat.svg","faeda723162340d506d259eab15a57fc"],["/br_fix_transparentize_bot/js/bot/media/repeat_until.png","257c8e4cdb56c67430fc05107ded3bd1"],["/br_fix_transparentize_bot/js/bot/media/repeat_while.png","f950108af6350a3ed0c5d01f7ff75bd0"],["/br_fix_transparentize_bot/js/bot/media/rotate-left.svg","09b2fa9a323038e25e0d71f2e204c714"],["/br_fix_transparentize_bot/js/bot/media/rotate-right.svg","68c6346a929214004666a69407245ce4"],["/br_fix_transparentize_bot/js/bot/media/sell_available.png","31cc42dc0074dc018ea86f1ca8c58276"],["/br_fix_transparentize_bot/js/bot/media/sell_pl.png","8d9e6b733be449ca305fe295d7b783fc"],["/br_fix_transparentize_bot/js/bot/media/set-led_blue.svg","64e271cacd79c04f51e4140976ed69aa"],["/br_fix_transparentize_bot/js/bot/media/set-led_coral.svg","0f819c06f38eec93562e8a7e0390aa8d"],["/br_fix_transparentize_bot/js/bot/media/set-led_green.svg","95d552a2bf92aaf29ea7b7850efc1e78"],["/br_fix_transparentize_bot/js/bot/media/set-led_magenta.svg","bab1714e185b0cce2134c239d7f9dad4"],["/br_fix_transparentize_bot/js/bot/media/set-led_mystery.svg","7f11f033db1a2764ba822a9492113802"],["/br_fix_transparentize_bot/js/bot/media/set-led_orange.svg","8b9ac813216487a8c0ab20120d55e22c"],["/br_fix_transparentize_bot/js/bot/media/set-led_purple.svg","208edc4045ede72b45a4242e9237dde4"],["/br_fix_transparentize_bot/js/bot/media/set-led_white.svg","a8a2fcc4c60a3c2c4a093081568c2456"],["/br_fix_transparentize_bot/js/bot/media/set-led_yellow.svg","59a03bf890f2c2223b47faa092451e3c"],["/br_fix_transparentize_bot/js/bot/media/sma_array.png","5d47121a70ca20944ed2fc018987339f"],["/br_fix_transparentize_bot/js/bot/media/sma_array_explanation.jpeg","79c52881f915825a5e9ed0e54b56fdc1"],["/br_fix_transparentize_bot/js/bot/media/sma_block.jpeg","809aad7cf886d7e41edc3d9eff605dc2"],["/br_fix_transparentize_bot/js/bot/media/sma_block_example.png","6dfece091e3ce56929df1f3c4bd7f1c0"],["/br_fix_transparentize_bot/js/bot/media/sma_block_example_1.png","bda6a7ef636af1eee27d6c899851cd93"],["/br_fix_transparentize_bot/js/bot/media/sma_chart_1.png","3a31f9b46813ac814bc3fb312e7361ad"],["/br_fix_transparentize_bot/js/bot/media/sma_chart_2.png","7a7e8de40b21134a0be32ca8687ef689"],["/br_fix_transparentize_bot/js/bot/media/sma_formula.png","15c459793534844fda8711db850b728d"],["/br_fix_transparentize_bot/js/bot/media/sprites.png","525a87801f9b33ec2cf606683aefed54"],["/br_fix_transparentize_bot/js/bot/media/sprites.svg","911d25e52cb1d95f2d942ec5b7670d06"],["/br_fix_transparentize_bot/js/bot/media/status-not-ready.svg","f78900031c49204a86c16c7bf733b88f"],["/br_fix_transparentize_bot/js/bot/media/status-ready.svg","48ce534fd447c2be7e4e914640a29f01"],["/br_fix_transparentize_bot/js/bot/media/todatetime.png","dcc439ff765277b4c3675582f8e50faa"],["/br_fix_transparentize_bot/js/bot/media/totimestamp.png","a0e16856157f4f6a07e73ada8ca0f16b"],["/br_fix_transparentize_bot/js/bot/media/trade_again.png","9330d1be8643db34bd433f536f0c2d34"],["/br_fix_transparentize_bot/js/bot/media/wedo2-block-icon.svg","1a0ef9e4545e669d48764fc8af37adf9"],["/br_fix_transparentize_bot/js/bot/media/wedo_motor-clockwise.svg","4829ed554af2e113d3893e7ddfcacdec"],["/br_fix_transparentize_bot/js/bot/media/wedo_motor-counterclockwise.svg","ff174bda55c2cbd90fa98409845454eb"],["/br_fix_transparentize_bot/js/bot/media/wedo_motor-speed_fast.svg","c6ccc23958f6f1f63bf3da24397ce6d0"],["/br_fix_transparentize_bot/js/bot/media/wedo_motor-speed_med.svg","043ca7700cb3d77feb7c961e20902445"],["/br_fix_transparentize_bot/js/bot/media/wedo_motor-speed_slow.svg","5d36448f0913922583b23bbda55723f6"],["/br_fix_transparentize_bot/js/bot/media/wedo_when-distance_close.svg","a0a0a92846810f59ef052cea7335a80e"],["/br_fix_transparentize_bot/js/bot/media/wedo_when-tilt-backward.svg","9fbb87c4587ecaf99818cf2e32aa121c"],["/br_fix_transparentize_bot/js/bot/media/wedo_when-tilt-forward.svg","50ad4484043907a264ddd3d8959845c4"],["/br_fix_transparentize_bot/js/bot/media/wedo_when-tilt-left.svg","e37ddacb2f596649efccf371b6ea14af"],["/br_fix_transparentize_bot/js/bot/media/wedo_when-tilt-right.svg","1a3d9d81b6d8844a8a1442c4d2601861"],["/br_fix_transparentize_bot/js/bot/media/wedo_when-tilt.svg","eda90cb35927caf62a93effa8139cf1b"],["/br_fix_transparentize_bot/js/bot/media/zoom-in.svg","db8254dc60f8e2b5190a2f19440ddf74"],["/br_fix_transparentize_bot/js/bot/media/zoom-out.svg","6dcc03cf4f57ffe8e5738cc0fc0ca731"],["/br_fix_transparentize_bot/js/bot/media/zoom-reset.svg","c70243f271cbeec1c06acbff9d525dd5"],["/br_fix_transparentize_bot/js/bot/scratch.min.js","0e908ed1f31bda40d5d085cca8bc37d8"],["/br_fix_transparentize_bot/js/bot/xml/main.xml","afbb279480fdaa2062b4372cca6ceb73"],["/br_fix_transparentize_bot/js/bot/xml/toolbox.xml","efcbe36a261fc9dee94784b2c1f2d0bc"],["/br_fix_transparentize_bot/js/modals.b0f785582f90730dd51d.js","453706c0ace20966ecac0802829e10b3"],["/br_fix_transparentize_bot/js/push-notification.b0f785582f90730dd51d.js","0b12df6e5ba12101d9d791943e5994ca"],["/br_fix_transparentize_bot/js/settings-language.b0f785582f90730dd51d.js","07acdadb84ebc179dcbc8eb8585b0a8e"],["/br_fix_transparentize_bot/js/settings-theme.b0f785582f90730dd51d.js","c275a03643b29be3c53cec69ec744bdd"],["/br_fix_transparentize_bot/js/smartcharts/chartiq-20e7d9.smartcharts.js","bff0550267141f484e80bd85a653d525"],["/br_fix_transparentize_bot/js/smartcharts/de-po-2be090.smartcharts.js","add4442c58a7566295b9d2dd4af1c66f"],["/br_fix_transparentize_bot/js/smartcharts/es-po-13563c.smartcharts.js","a1fe9d146280432fd352a12db2ffc267"],["/br_fix_transparentize_bot/js/smartcharts/fr-po-68d56d.smartcharts.js","da7115f055ca710a9bc12ecdf5a3ad1a"],["/br_fix_transparentize_bot/js/smartcharts/html2canvas-fb6a61.smartcharts.js","9c599654d508fd876e10a24a0ada1b79"],["/br_fix_transparentize_bot/js/smartcharts/id-po-b0a940.smartcharts.js","188c6bee2e66a7e06d42265b789753c5"],["/br_fix_transparentize_bot/js/smartcharts/it-po-ed7ac7.smartcharts.js","e27729e8ba56a2169c1555066115fe1f"],["/br_fix_transparentize_bot/js/smartcharts/nl-po-85ccc7.smartcharts.js","e4429757bdce370683fb0445834017b4"],["/br_fix_transparentize_bot/js/smartcharts/pl-po-db1605.smartcharts.js","6bc8bf5b0c78b4889a5eafb6ce59e4c8"],["/br_fix_transparentize_bot/js/smartcharts/pt-po-056cd5.smartcharts.js","01e422ae46f341ec59b835abba6e6366"],["/br_fix_transparentize_bot/js/smartcharts/ru-po-85c8e0.smartcharts.js","a798f555c2b26c2b8886be49b06e35de"],["/br_fix_transparentize_bot/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/br_fix_transparentize_bot/js/smartcharts/th-po-8641c6.smartcharts.js","8e52e408600ab67b033a16aaa9eb2efa"],["/br_fix_transparentize_bot/js/smartcharts/vendors~resize-observer-polyfill-a9bbdb.smartcharts.js","8b6ac48c545f617e07626a394a4ae6df"],["/br_fix_transparentize_bot/js/smartcharts/vi-po-9a11b6.smartcharts.js","51ed5d1e8ff12b5575c0ab985d177ed5"],["/br_fix_transparentize_bot/js/smartcharts/zh_cn-po-d2943e.smartcharts.js","d52097a138017b87b75fa968ef9c8cf7"],["/br_fix_transparentize_bot/js/smartcharts/zh_tw-po-33941e.smartcharts.js","f48370516c26d072d20764a77cbd61c3"],["/br_fix_transparentize_bot/js/toggle-menu-drawer.b0f785582f90730dd51d.js","df941bd2e4bfb7c0b0b73dfd23d3fefb"],["/br_fix_transparentize_bot/js/vendors~ResetPasswordModal.b0f785582f90730dd51d.js","2aeb1c90e1c7146cc6b6750c5b7e8063"],["/br_fix_transparentize_bot/js/vendors~bot.b0f785582f90730dd51d.js","efa7c049c6193b542401a343e248fa48"],["/br_fix_transparentize_bot/js/work-in-progress.b0f785582f90730dd51d.js","694c057ec7838bb4b68034d289016484"],["/br_fix_transparentize_bot/manifest.json","bfaffa9afb70b43091c3d83fce24e749"],["/br_fix_transparentize_bot/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/br_fix_transparentize_bot/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/br_fix_transparentize_bot/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/br_fix_transparentize_bot/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/br_fix_transparentize_bot/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/br_fix_transparentize_bot/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/br_fix_transparentize_bot/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/br_fix_transparentize_bot/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/br_fix_transparentize_bot/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/br_fix_transparentize_bot/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/br_fix_transparentize_bot/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/br_fix_transparentize_bot/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/br_fix_transparentize_bot/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/br_fix_transparentize_bot/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/br_fix_transparentize_bot/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/br_fix_transparentize_bot/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/br_fix_transparentize_bot/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/br_fix_transparentize_bot/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/br_fix_transparentize_bot/public/images/favicons/favicon.ico","f0f5ae91043173a44666de5f8a92e863"],["/br_fix_transparentize_bot/robots.txt","6978a616c585d03cb5b542a891995efb"],["/br_fix_transparentize_bot/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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
    var navigateFallback = '/br_fix_transparentize_bot/';
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







