webpackJsonp(["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css":
/***/ (function(module, exports) {

module.exports = ".material-icons {\n\tvertical-align: middle;\n}\n\n.mb-10 {\n\tmargin-bottom: 10px!important;\n}\n\nbutton, input[type=\"submit\"], input[type=\"reset\"] {\n    background: none;\n    color: inherit;\n    border: none;\n    padding: 0;\n    font: inherit;\n    cursor: pointer;\n    outline: inherit;\n}\n\n.yellow {\n\tcolor: #ffc107;\n}\n\n.yellow:hover {\n\topacity: 0.5;\n\tcolor: #ffc107;\n\n}\n\n.p20 {\n\tpadding: 20px;\n}\n\n.responsive-nav {\n\tdisplay: none;\n}\n\n.head-title {\n\tmargin: 0 0 30px 0;\n    line-height: 48px;\n    font-weight: 600;\n    font-size: 31px;\n    color: #222;\n    border-bottom: solid #311B92 4px;\n    padding-bottom: 10px;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    text-align: center;\n    padding-top: 20px;\n}\n\n.show {\n\tdisplay: block!important;\n}\n\n.responsive-hr {\n\tdisplay: none;\n}\n\n.screenshots > a {\n\tmargin-bottom: 20px;\n}\n\n.subtitle {\n\topacity: 0.5;\n    font-size: 12px;\n\ttext-transform: uppercase;\n}\n\n.bg-primary {\n    background-color: #673ab7!important;\n}\n\n.pb-20 {\n\tpadding-bottom: 20px;\n}\n\n.btn-light {\n\tbackground-color: #fff!important;\n\tcolor: #673ab7!important;\n\tborder-color: #673ab7!important;\n}\n\n.btn-light:hover {\n\tbackground-color: #673ab7!important;\n\tcolor: #ffc107!important;\n}\n\n.btn-alternative {\n\tbackground-color: #ffc107!important;\n\tcolor: #673ab7!important;\n\tborder-color: #ffc107!important;\n}\n\n.btn-alternative:hover {\n\tbackground-color: #673ab7!important;\n\tcolor: #ffc107!important;\n\tborder-color: #ffc107!important;\n}\n\n.btn-main {\n\tbackground-color: #673ab7!important;\n\tcolor: #ffc107!important;\n\tborder-color: #673ab7!important;\n}\n\n.btn-main:hover {\n\tbackground-color: #fff!important;\n\tcolor: #673ab7!important;\n\tborder-color: #673ab7!important;\n}\n\n.btn-secondary {\n\tbackground-color: #fff!important;\n\tcolor: #673ab7!important;\n\tborder-color: #673ab7!important;\n}\n\n.btn-secondary:hover {\n\tbackground-color: #673ab7!important;\n\tcolor: #ffc107!important;\n\tborder-color: #673ab7!important;\n}\n\n.hidden {\n\tdisplay: none!important;\n}\n\n.divloader {\n\n\tposition: fixed;\n    z-index: 99999;\n    background-color: #fff;\n    width: 100%;\n    height: 100%;\n  }\n\n#loading {\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    position: fixed;\n    display: block;\n    background: #673ab7;\n    background: -webkit-gradient(linear, left bottom, left top, from(#673ab7), to(#7E57C2));\n    background: linear-gradient(to top, #673ab7, #7E57C2);\n    z-index: 999999;\n    text-align: center;\n}\n\n.loading-div {\n           height: 100%;\n    top: 40%!important;\n    position: relative!important;\n}\n\n.radar-spinner, .radar-spinner * {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n    }\n\n.radar-spinner {\n      height: 60px;\n      width: 60px;\n      position: relative;\n      margin: auto;\n      top: 46%;\n    }\n\n.radar-spinner .circle {\n      position: absolute;\n      height: 100%;\n      width: 100%;\n      top: 0;\n      left: 0;\n      -webkit-animation: radar-spinner-animation 2s infinite;\n              animation: radar-spinner-animation 2s infinite;\n    }\n\n.radar-spinner .circle:nth-child(1) {\n      padding: calc(60px * 5 * 2 * 0 / 110);\n      -webkit-animation-delay: 300ms;\n              animation-delay: 300ms;\n    }\n\n.radar-spinner .circle:nth-child(2) {\n      padding: calc(60px * 5 * 2 * 1 / 110);\n      -webkit-animation-delay: 300ms;\n              animation-delay: 300ms;\n    }\n\n.radar-spinner .circle:nth-child(3) {\n      padding: calc(60px * 5 * 2 * 2 / 110);\n      -webkit-animation-delay: 300ms;\n              animation-delay: 300ms;\n    }\n\n.radar-spinner .circle:nth-child(4) {\n      padding: calc(60px * 5 * 2 * 3 / 110);\n      -webkit-animation-delay: 0ms;\n              animation-delay: 0ms;\n    }\n\n.radar-spinner .circle-inner, .radar-spinner .circle-inner-container {\n      height: 100%;\n      width: 100%;\n      border-radius: 50%;\n      border: calc(60px * 5 / 110) solid transparent;\n    }\n\n.radar-spinner .circle-inner {\n      border-left-color: #FFC107;\n      border-right-color: #FFC107;\n    }\n\n@-webkit-keyframes radar-spinner-animation {\n      50% {\n        -webkit-transform: rotate(180deg);\n                transform: rotate(180deg);\n      }\n      100% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n      }\n    }\n\n@keyframes radar-spinner-animation {\n      50% {\n        -webkit-transform: rotate(180deg);\n                transform: rotate(180deg);\n      }\n      100% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n      }\n    }\n\n.loader {\n\tborder: 16px solid #f3f3f3;\n\tborder-radius: 50%;\n\tborder-top: 16px solid #3498db;\n\twidth: 120px;\n\theight: 120px;\n\t-webkit-animation: spin 2s linear infinite; /* Safari */\n\tanimation: spin 2s linear infinite;\n\tmargin: auto;\n\tmargin-top: 30px;\n}\n\n/* Safari */\n\n@-webkit-keyframes spin {\n\t0% { -webkit-transform: rotate(0deg); }\n\t100% { -webkit-transform: rotate(360deg); }\n  }\n\n@keyframes spin {\n\t0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n\t100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n  }\n\n/* \n/*GENERAL STYLES*/\n\nbody, div, span, h1, h2, h3, h4, h5, h6, p, q, ul, ol, header, footer, nav, section, article, figure, aside {\n\tdisplay: block;\n\tmargin: 0;\n\tpadding: 0;\n\tvertical-align: top;\n}\n\n.hero-img {\n\twidth: 100%;\n    max-width: 340px;\n}\n\n.github-div {\n\tmargin: auto;\n    text-align: -webkit-match-parent;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n}\n\n.navbar{\n\tmargin-bottom: -1px;\n}\n\n.mr-10 {\n\tmargin-right: 10px!important;\n}\n\n.mr-20 {\n\tmargin-right: 20px;\n}\n\n.gradient-bg {\n\tbackground: -webkit-gradient(linear, left bottom, left top, from(rgba(255,255,255,0)), color-stop(65%, rgba(255,255,255,0.15)), to(rgba(255,255,255,0.37)));\n\tbackground: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 65%, rgba(255,255,255,0.37) 100%);\n\tmargin: -14px;\n\tpadding-top: 20px;\n    padding-bottom: 30px;\n}\n\n.tile-bg {\n\tmargin-top: -10px;\n    background: radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,253,253,0.10127801120448177) 65%, rgba(255,255,255,0.3169642857142857) 100%);\n    padding-bottom: 1px;\n\tmargin-bottom: -9px;\n\tpadding: 10px 0;\n}\n\n.tile-bg:hover{\n    background: radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,253,253,0.050127801120448177) 65%, rgba(255,255,255,0.1169642857142857) 100%);\n}\n\n.topbanner::after {\n\tbackground-color: #fff;\n\twidth: 20px;\n\theight: 20px;\n\tposition: absolute;\n\tleft: 0;\n\tz-index: 999;\n\ttop: 0;\n}\n\n.pt-50 {\n\tpadding-top: 50px;\n}\n\n.container-fluid {\n    padding-right: 0px;\n    padding-left: 0px;\n}\n\n.tile-title {\n\ttext-transform: capitalize;\n    font-weight: 500;\n    margin-top: 10px;\n}\n\n.flex-display {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\n\n.text-center {\n\ttext-align: center;\n}\n\n.mt-40 {\n\tmargin-top: 40px;\n}\n\n.mt-20 {\n\tmargin-top: 20px;\n}\n\n.mb-20 {\n\tmargin-bottom: 20px;\n}\n\n.mb-10 {\n\tmargin-bottom: 10px!important;\n}\n\n.mt-10 {\n\tmargin-top: 10px!important;\n}\n\nbody {\n\tfont-family: 'Montserrat', sans-serif;\n\tfont-size: 16px;\n\tfont-weight: 400;\n\t-webkit-font-smoothing: antialiased;\n\tcolor: #414340;\n\tbackground: #fff;\n\tcursor: default;\n\t\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -html-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\nsection {\n\tmargin-bottom: 40px;\n\tpadding: 20px 0;\n}\n\na {\n\tfont-weight: 500;\n\ttext-decoration: none;\n\tcolor: #6a3db8;\n\tcursor: pointer;\n}\n\na:hover {color: #00a1df;}\n\np a:hover {background: #dcfaff;}\n\nh1 {\n\tmargin: 10 0 0px;\n\tfont-weight: 500;\n\tfont-size: 30px;\n\tline-height: 32px;\n}\n\nh2 {\n\tmargin: 0 0 24px;\n\tfont-weight: 500;\n\tfont-size: 24px;\n\tline-height: 24px;\n}\n\nh3 {\n\tmargin: 0 0 16px;\n\tfont-weight: 300;\n\tfont-size: 16px;\n\tline-height: 18px;\n}\n\nh2, p, ul, ol {\n\tmargin: 0 0 24px;\n\tline-height: 24px;\n}\n\nul, ol {padding: 0 0 0 10px;}\n\nli {margin: 0 0 6px;}\n\n.dark {\n\tdisplay: inline-block;\n\tmargin: 0 5px 0 0;\n\tpadding: 5px 15px;\n\tfont-size: 14px;\n\ttext-transform: uppercase;\n\tcolor: #333;\n\tbackground: none;\n\tborder: solid 1px #333;\n\tborder-radius: 2px;\n\t-webkit-transition: background ease-out .5s;\n\ttransition: background ease-out .5s;\n}\n\na:hover.dark {\n\tcolor: #000;\n\tbackground: rgba(255,255,255,.10);\n}\n\na {\n\t-webkit-transition: all 0.3s;\n    -moz-transition: all 0.3s;\n    -o-transition: all 0.3s;\n    /* transition: all 0.3s; */\n}\n\n.ghost {\n    display: inline-block;\n    margin: 0 5px 0 0;\n    padding: 8px 20px;\n\tfont-size: 14px;\n\ttext-decoration: blink!important;\n    text-transform: uppercase;\n    color: #fff;\n    background: none;\n    border: solid 2px #fff;\n\tborder-radius: 2px;\n\n\tfont-weight: 600;\n    border-radius: 20px;\n}\n\na:hover.ghost {\n\tcolor: #fff;\n\tpadding: 8px 30px;\n\tbackground: rgba(255,255,255,.25);\n}\n\n.ghost-dark {color: #414340; border: solid 1px #414340;}\n\na:hover.ghost-dark {color:#414340; background: rgba(65,67,64,.25);}\n\n.ghost-gray {color: #414340; border: solid 1px #ccc;}\n\na:hover.ghost-gray {color: #414340; background: rgba(170,170,170,.25);}\n\n.ghost-brown {color: #754c24; border: solid 1px #754c24;}\n\na:hover.ghost-brown {color:#754c24; background: rgba(117,76,36,.25);}\n\n.ghost-blue {color: #001e4b; border: solid 1px #001e4b;}\n\na:hover.ghost-blue {color:#001e4b; background: rgba(0,30,75,.25);}\n\n.wrapper {\n\tmax-width: 900px;\n\tmargin: 0 auto;\n\tpadding-left: 10px;\n\tpadding-right: 10px;\n}\n\n.col-2 {\n\tdisplay: inline-block;\n\twidth: 46%;\n\tpadding: 0 2%;\n}\n\n.feat {display: inline; font-weight: bold;}\n\n/* HEADER */\n\nheader {\n\tmin-height: 60px;\n\tpadding: 20px 0 0;\n\ttext-align: right;\n\tcolor: #fff;\n    background: #673ab7;\n    background: -webkit-gradient(linear, left bottom, left top, from(#673ab7), to(#7E57C2));\n    background: linear-gradient(to top, #673ab7, #7E57C2);\n\tborder-bottom: 1px solid #fff;\n}\n\nheader a {\n\tdisplay: inline-block;\n\theight: 40px;\n\tpadding: 0 10px;\n\toverflow: hidden;\n\tfont-size: 14px;\n\tline-height: 40px;\n\tcolor: #fff;\n\tborder-radius: 2px;\n}\n\nheader a:hover {\n\tcolor: #fff;\n\tbackground: rgba(255,255,255,.2);\n}\n\nheader a:active {\n\tcolor: #fff;\n\tbackground: rgba(255,255,255,.4);\n}\n\n#logo {\n\tfloat: left;\n\twidth: 170px;\n\tpadding: 0;\n}\n\na:hover#logo, a:active#logo {background: none;}\n\n#logo img {\n\tmargin-left: -10px;\n\tpadding-top: 4px;\n}\n\n/* BANNER */\n\n#banner {\n\tmin-height: 360px;\n\tmargin-bottom: -15px;\n\tpadding: 15px 0 80px;\n\tfont-size: 0;\n\tcolor: #fff;\n\tbackground-repeat: no-repeat;\n\tbackground-position: top center;\n}\n\n#hero {\n\tmin-height: 360px;\n\tmargin: 32px 0 0;\n}\n\n#hero img {\n\twidth: 100%;\n\tmax-width: 360px;\n}\n\n#client-logo {\n\twidth: 150px;\n\tmin-height: 100px;\n\tmargin: 0 0 20px;\n}\n\n#client-logo img {height: 100%;}\n\n#banner h1 {margin: 0 0 10px; font-weight: 700;}\n\n#banner p {\n\tfont-size: 14px;\n\tline-height: 30px;\n\tmax-width: 500px;\n\tmargin-bottom: 20px\n}\n\n/* PROJECTS */\n\n#projects {font-size: 0;}\n\n.tile {\n    display: inline-block;\n\n    min-width: 100%;\n\n    margin: 10px 10px;\n    padding: 10px 0 10px;\n    font-size: 13px;\n    text-align: center;\n    line-height: 15px;\n    vertical-align: top;\n    overflow: hidden;\n    color: rgba(255,255,255,1);\n    background-color: #000;\n    border: solid 1px transparent;\n\t\n    border-radius: 20px;\n    opacity: 0.9;\n    -webkit-transition: opacity ease-out .4s;\n    transition: opacity ease-out .4s;\n    background-size: 108px 72px;\n    background-position: center -4px;\n}\n\na:hover.tile {\n    /* opacity: .5; */\n    text-decoration: none;\n\tborder: solid 1px rgba(0,0,0,0.5);\n\tcolor: #fff;\n\t-webkit-box-shadow: 2px 2px 7px #bbb;\n\t        box-shadow: 2px 2px 7px #bbb;\n\topacity: 1;\n}\n\na:hover.white-text {color: rgba(255,255,255,.75);}\n\n.tile-all {\n\tfont-style: #ffffff;\n\tfont-size: 20px;\n\tfont-weight: 300;\n\tbackground-color: #27baef;\n\t/*background-image: url(../images/icons/all.png);\n*/\tbackground-position: top;\n}\n\n.tile-blue {background-color: #1869af;}\n\n.tile-cyan {background-color: #1fbbee;}\n\n.tile-yellow {background-color: #FFC107\t;}\n\n.tile-orange {background-color: #f26522;}\n\n.tile-lightgreen {background-color: #8BC34A\t;}\n\n.tile-purple {background-color: #7B1FA2\t;}\n\n.tile-darkblue {background-color: #1A237E;}\n\n.m-auto {\n\tmargin: auto;\n}\n\n.line {\n\twidth: 60%;\n\topacity: 0.2;\n}\n\n#tech {\n\tmax-width: 100%;\n\tmargin: 0 auto 0px;\n\tpadding: 0;\n\tlist-style: none;\n\tfont-size: 0;\n\ttext-align: center;\n}\n\n.tech {\n\tfont-weight: 600;\n    display: inline-block;\n    margin: 0 2px 9px;\n    padding: 9px 18px;\n    font-size: 12px;\n    font-weight: 400px;\n    line-height: 29px;\n    vertical-align: top;\n    color: #000;\n    border: solid 1px #CCC;\n\tborder-radius: 30px;\n\topacity: 0.5;\n}\n\n.actile-tech {\n\tborder: solid 1px #6a3db8;\n    opacity: 1;\n}\n\n.tech-pageflow {/*background-image: url(../images/tech/pageflow.png);*/}\n\n.tech-prototype {/*background-image: url(../images/tech/prototype.png);*/}\n\n.tech-research {/*background-image: url(../images/tech/research.png);*/}\n\n.tech-specs {/*background-image: url(../images/tech/specs.png);*/}\n\n.tech-ui {/*background-image: url(../images/tech/ui.png);*/}\n\n.tech-wireframe {/*background-image: url(../images/tech/wireframe.png);*/}\n\n#projects .tech {\n\tbackground-color: #fff;\n\t-webkit-transition: all ease-out .3s;\n\ttransition: all ease-out .3s;\n\tcursor: pointer;\n}\n\n#projects li:hover.tech {\n\tborder: solid 1px #6a3db8;\n\topacity: 1;\n}\n\n#projects .selected-tech {\n\tcolor: #6a3db8;\n\tbackground-color: #ddf6ff;\n\tborder: solid 1px #6a3db8;\n\topacity: 1;\n}\n\n#projects li:hover.tech-pageflow, #projects .tech-pageflow.selected-tech {\n\t/*background-image: url(../images/tech/active-pageflow.png);*/\n}\n\n#projects li:hover.tech-prototype, #projects .tech-prototype.selected-tech {\n\t/*background-image: url(../images/tech/active-prototype.png);*/\n}\n\n#projects li:hover.tech-research, #projects .tech-research.selected-tech {\n\t/*background-image: url(../images/tech/active-research.png);*/\n}\n\n#projects li:hover.tech-specs, #projects .tech-specs.selected-tech {\n\t/*background-image: url(../images/tech/active-specs.png);*/\n}\n\n#projects li:hover.tech-ui, #projects .tech-ui.selected-tech {\n\t/*background-image: url(../images/tech/active-ui.png);*/\n}\n\n#projects li:hover.tech-wireframe, #projects .tech-wireframe.selected-tech {\n\t/*background-image: url(../images/tech/active-wireframe.png);*/\n}\n\n/* METRICS */\n\n#metrics {\n\tmargin-bottom: 40px;\n\tpadding: 0;\n\tlist-style: none;\n\ttext-align: center;\n}\n\n#metrics li {\n\tdisplay: inline-block;\n\twidth: 26%;\n\tmin-width: 80px;\n\tpadding: 90px 2% 0;\n\tfont-size: 14px;\n\tfont-weight: 200px;\n\tline-height: 14px;\n\tvertical-align: top;\n\tbackground-repeat: no-repeat;\n\tbackground-position: top center;\n}\n\n#metrics span {\n\tfont-size: 32px;\n\tfont-weight: bold;\n\tline-height: 32px;\n}\n\n/* GALLERY */\n\n.gallery {font-size: 0;}\n\n.gallery figure {\n\tdisplay: inline-block;\n\twidth: 31%;\n\tpadding: 0 2% 30px 0;\n\ttext-align: center;\n\tvertical-align: middle;\n}\n\n.gallery img {\n\twidth: auto;\n    -webkit-box-shadow: 2px 2px 4px #ccc;\n    max-width: 100%;\n    box-shadow: 2px 2px 4px #ccc;\n    max-height: 220px;\n    margin-bottom: 20px;\n}\n\n.gallery img:hover {\n\t-webkit-box-shadow: 2px 2px 10px #ccc;\n\t        box-shadow: 2px 2px 10px #ccc;\n\t}\n\n.gallery img.screen {\n\tborder: 1px solid rgba(0,0,0,.15);\n}\n\n.gallery figcaption {\n\tdisplay: none;\n\ttext-align: center;\n}\n\n.pswp .pswp__caption__center{\n\tmargin-top: 10px;\n\tfont-size: 14px;\n\ttext-align: center;\n}\n\n@media screen and (max-width: 991px) {\n\t\n\t.responsive-nav {\n\t\tdisplay: block!important;\n\t}\n\t#banner {\n\t\tmin-height: 360px;\n\t\tmargin-bottom: 30px;\n\t\tpadding: 15px 0 30px;\n\t\tfont-size: 0;\n\t\tcolor: #fff;\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-position: top center;\n\t}\n\t.responsive-curve {\n\t\tdisplay: none;\n\t}\n\t#footer{\n\t\tpadding-top: 40px!important;\n\t}\n\t\n}\n\n@media screen and (max-width: 767px) {\n.tile {\n\topacity: 1;\n}\n\t#banner p {\n\t\tmargin: auto;\n\t\tmargin-bottom: 20px;\n\t}\n\n\t.responsive-hr {\n\t\tdisplay: block;\n\t}\n\n\n\t.responsive-info {\n\t\ttext-align: center;\n\t}\n}\n\n@media screen and (max-width: 640px) {\n\n\t\n   header {min-height: 60px; padding: 15px 0 0;}\n\t#logo {\n\t\twidth: 60px;\n\t\theight: 0;\n\t\tpadding: 40px 0 0;\n\t\toverflow: hidden;\n\t\t/* background: url(../images/icons/logo.png) no-repeat center; */\n\t}\n\t#logo img {width: 0;}\n\t\n\t.col-2 {\n\t\tdisplay: block;\n\t\twidth: 90%;\n\t\tmargin-bottom: 20px;\n\t\tpadding: 0 5%;\n\t}\n\t#banner {padding: 10px;}\n\t#hero {min-height: 300px; text-align: center;}\n\t#client-logo {width: 120px; min-height: 60px; margin: 20px 0 0;}\n\t\n}\n\n@media screen and (max-width: 400px) {\n\ta:hover.ghost {\n\t\tpadding: 8px 20px!important;\n\t}\n\t#logo {\n\t\twidth: 60px;\n\t\theight: 0;\n\t\tpadding: 40px 0 0;\n\t\toverflow: hidden;\n\t\t/* background: url(../images/icons/logo.png) no-repeat center; */\n\t}\n\t#logo img {width: 0;}\n\t\n\t.tile-360, .tile-desk, .tile-gbo, .tile-sf-adv, .tile-sf-cc, .tile-sf-dev, .tile-sf-mkt, .tile-startups {\n\tbackground-size: auto;\n\t/*background-image: url(../images/icons/salesforce-logo.png);*/\n\t}\n\n\t.tile-conektta {\n\tbackground-size: auto;\n\t/*background-image: url(../images/icons/conektta-logo.png);*/\n\t}\n\n\t.tile-all {\n\t/*background-image: url(../images/icons/all2.png);\n*/\n}\n\t\n\t.gallery figure {width: 48%;}\n}"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__("./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!./styles.css", function() {
			var newContent = require("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map