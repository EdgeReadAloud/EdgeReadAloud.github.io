'use strict';const a1_0x574ff9=a1_0x3333;(function(_0x4423ed,_0x3dc963){const _0x2ee9b7=a1_0x3333,_0x2a05d8=_0x4423ed();while(!![]){try{const _0x34fd36=parseInt(_0x2ee9b7(0x1ab))/0x1+parseInt(_0x2ee9b7(0x1d0))/0x2+parseInt(_0x2ee9b7(0x1bc))/0x3*(parseInt(_0x2ee9b7(0x1df))/0x4)+-parseInt(_0x2ee9b7(0x1ea))/0x5*(-parseInt(_0x2ee9b7(0x1b5))/0x6)+-parseInt(_0x2ee9b7(0x1fc))/0x7+-parseInt(_0x2ee9b7(0x1c2))/0x8*(parseInt(_0x2ee9b7(0x169))/0x9)+-parseInt(_0x2ee9b7(0x191))/0xa;if(_0x34fd36===_0x3dc963)break;else _0x2a05d8['push'](_0x2a05d8['shift']());}catch(_0x512c63){_0x2a05d8['push'](_0x2a05d8['shift']());}}}(a1_0x4b3f,0x7e0a4));var ScrollBy;(function(_0x1d9b93){const _0x5a1de3=a1_0x3333;_0x1d9b93[_0x1d9b93[_0x5a1de3(0x1b9)]=0x0]=_0x5a1de3(0x1b9),_0x1d9b93[_0x1d9b93[_0x5a1de3(0x1fd)]=0x1]=_0x5a1de3(0x1fd);}(ScrollBy||(ScrollBy={})));var Setting;(function(_0x1d91a1){const _0xdf98e0=a1_0x3333;_0x1d91a1[_0xdf98e0(0x173)]='theme',_0x1d91a1[_0xdf98e0(0x1c0)]='font-size',_0x1d91a1[_0xdf98e0(0x14b)]=_0xdf98e0(0x1c1),_0x1d91a1['expandBtnPos']=_0xdf98e0(0x16b);}(Setting||(Setting={})));class Line{[a1_0x574ff9(0x1cb)];[a1_0x574ff9(0x16c)];}var ThemeKey;(function(_0x478859){const _0x31742f=a1_0x574ff9;_0x478859[_0x31742f(0x163)]=_0x31742f(0x163),_0x478859[_0x31742f(0x18d)]='dark',_0x478859['advance']=_0x31742f(0x1f5);}(ThemeKey||(ThemeKey={})));const themes={'light':{'backgroundColor':a1_0x574ff9(0x1c7),'fontColor':'#000','fontHighlightColor':a1_0x574ff9(0x160),'lineHighlightColor':a1_0x574ff9(0x1c7),'svgClassName':a1_0x574ff9(0x158)},'dark':{'backgroundColor':a1_0x574ff9(0x172),'fontColor':a1_0x574ff9(0x1c7),'fontHighlightColor':a1_0x574ff9(0x186),'lineHighlightColor':'#1e1e1e','svgClassName':a1_0x574ff9(0x1f4)}},container=document[a1_0x574ff9(0x199)]('container'),DATA_ID=a1_0x574ff9(0x14f),DATA_HASH='data-hash',DATA_LAST_READ_TIME='data-last-read-time',bufferTop=0x19,changeEvent=new Event('change'),clickEvent=new Event('click');let linesObj=[],scrollPosition=a1_0x574ff9(0x1b8),gistHash,localHash;const overrideDefaultCss=a1_0x574ff9(0x17a);let overrided=![];initializeTheme(),setSettingOverlayPosition();const mutationObserver=new MutationObserver(function(_0x587c98){const _0x434731=a1_0x574ff9;_0x587c98[_0x434731(0x150)](function(_0x37fda5){const _0x27c2f4=_0x434731;if(_0x37fda5['target']instanceof HTMLParagraphElement)setProgress(_0x37fda5['target'][_0x27c2f4(0x16a)](DATA_HASH));else _0x37fda5['target'][_0x27c2f4(0x159)][_0x27c2f4(0x171)](_0x27c2f4(0x1d1))&&_0x37fda5['target']['scrollIntoView']({'block':scrollPosition});});}),observerForFirstParagraph=new MutationObserver(function(){const _0x5d9f11=a1_0x574ff9;!overrided&&(document[_0x5d9f11(0x1e1)]['insertAdjacentHTML'](_0x5d9f11(0x1ed),replaceOverrideDefaultCss()),overrided=!![],observerForFirstParagraph['disconnect']());}),onScrollContainer=_0x514852=>{const _0x4ab9ad=a1_0x574ff9;let _0x390364=document[_0x4ab9ad(0x15b)]('item');if(_0x390364[_0x4ab9ad(0x1f7)]<bufferTop)return;if(container[_0x4ab9ad(0x1f2)]>_0x390364[bufferTop][_0x4ab9ad(0x1e3)]()[_0x4ab9ad(0x194)]){let _0x5be44e=getLastChildId();_0x5be44e++;if(_0x5be44e>=linesObj[_0x4ab9ad(0x1f7)])return;_0x390364[0x0]['remove'](),appendChild(_0x5be44e);}if(container[_0x4ab9ad(0x1f2)]===0x0){let _0x2bcc87=getFirstChildId();if(_0x2bcc87===0x0)return;let _0x3e06cc=!![],_0x4b4636=0x0;while(_0x3e06cc&&_0x4b4636<0x19){_0x3e06cc=scrollUpAction(),_0x4b4636++;}document[_0x4ab9ad(0x176)](_0x4ab9ad(0x168)+_0x2bcc87+'\x22]')?.[_0x4ab9ad(0x1d4)]();}};document['addEventListener']('DOMContentLoaded',async()=>{const _0x518ede=a1_0x574ff9;checkIsEdge(),addUnloadEvent(),container['addEventListener'](_0x518ede(0x18f),onScrollContainer),document['getElementById'](_0x518ede(0x1e6))?.[_0x518ede(0x189)]('click',async _0x1f5d2e=>{const _0x4b9707=_0x518ede;await setLinesObj(document[_0x4b9707(0x199)](_0x4b9707(0x1a1))['value']),await generateItems(),document[_0x4b9707(0x199)](_0x4b9707(0x17d))[_0x4b9707(0x16d)][_0x4b9707(0x1b0)]='none',container['style']['display']=_0x4b9707(0x1f0);}),document[_0x518ede(0x199)](_0x518ede(0x1e4))?.['addEventListener'](_0x518ede(0x19a),function(){const _0x16820e=_0x518ede;showLoadingDiv();var _0xf99294=this[_0x16820e(0x1bd)][0x0],_0x4f87a9=new FileReader();_0x4f87a9['onload']=async function(_0x51046e){const _0x335f37=_0x16820e;await setLinesObj(_0x51046e[_0x335f37(0x161)]['result']),await generateItems(),document['getElementById'](_0x335f37(0x17d))['style'][_0x335f37(0x1b0)]='none',container[_0x335f37(0x16d)][_0x335f37(0x1b0)]=_0x335f37(0x1f0),hideLoadingDiv();},_0x4f87a9[_0x16820e(0x170)](_0xf99294),saveFileObject(_0xf99294);}),document['getElementById'](_0x518ede(0x1c9))?.[_0x518ede(0x189)]('click',function(){const _0x3f5e23=_0x518ede;if(!linesObj)return;const _0x50b131=document[_0x3f5e23(0x199)](_0x3f5e23(0x1e8))[_0x3f5e23(0x1aa)];let _0x99b2fc=[];linesObj[_0x3f5e23(0x150)]((_0x2c0691,_0x31ff4e)=>{const _0x8def6c=_0x3f5e23;_0x2c0691[_0x8def6c(0x1cb)]===_0x50b131&&_0x99b2fc[_0x8def6c(0x1cd)](_0x31ff4e);});const _0x53f9af=document['getElementById'](_0x3f5e23(0x1a5)),_0x3da10d=getSetting(Setting[_0x3f5e23(0x173)]);for(let _0x40d05f=0x0;_0x40d05f<_0x99b2fc[_0x3f5e23(0x1f7)];_0x40d05f++){let _0x43e627=_0x99b2fc[_0x40d05f],_0x195030=linesObj[_0x43e627<linesObj[_0x3f5e23(0x1f7)]?++_0x43e627:_0x43e627];while(!_0x195030['text'][_0x3f5e23(0x1ec)]()&&_0x43e627<linesObj[_0x3f5e23(0x1f7)]){_0x43e627++,_0x195030=linesObj[_0x43e627];}let _0x1ecbc8=document[_0x3f5e23(0x183)]('p');_0x1ecbc8[_0x3f5e23(0x151)]=_0x195030[_0x3f5e23(0x1cb)],_0x1ecbc8['setAttribute'](DATA_HASH,_0x195030['hash']),_0x1ecbc8[_0x3f5e23(0x159)][_0x3f5e23(0x18e)](_0x3f5e23(0x177)),_0x1ecbc8['classList'][_0x3f5e23(0x18e)](_0x3f5e23(0x155)),_0x1ecbc8['addEventListener'](_0x3f5e23(0x1fa),_0x47c7b9),_0x1ecbc8[_0x3f5e23(0x16d)][_0x3f5e23(0x1cc)]=themes[_0x3da10d]['fontColor'],_0x53f9af[_0x3f5e23(0x16f)](_0x1ecbc8);}});function _0x47c7b9(_0x527409){const _0x2affc8=_0x518ede,_0x1cc570=_0x527409['target']['getAttribute'](DATA_HASH);resetContainer(),generateItems(_0x1cc570),document['getElementById'](_0x2affc8(0x1c4))[_0x2affc8(0x16d)][_0x2affc8(0x1b0)]='none',container[_0x2affc8(0x16d)][_0x2affc8(0x1b0)]=_0x2affc8(0x1f0),container[_0x2affc8(0x1f2)]=0x0;}document[_0x518ede(0x199)]('btn-upload')?.[_0x518ede(0x189)](_0x518ede(0x1fa),function(){const _0x52c975=_0x518ede;this[_0x52c975(0x1aa)]='',closeSettingOverlay();}),document['getElementById'](_0x518ede(0x18b))?.['addEventListener'](_0x518ede(0x1fa),function(){const _0x17b818=_0x518ede;showDiv(document[_0x17b818(0x199)](_0x17b818(0x1b2))),closeSettingOverlay();}),document['getElementById'](_0x518ede(0x162))?.[_0x518ede(0x189)](_0x518ede(0x1fa),function(){const _0x571119=_0x518ede;showDiv(document['getElementById'](_0x571119(0x17d))),closeSettingOverlay();}),document[_0x518ede(0x199)](_0x518ede(0x15d))?.[_0x518ede(0x189)]('click',async function(){await saveProgress(localHash),closeSettingOverlay();}),document[_0x518ede(0x199)]('chapter-svg')?.[_0x518ede(0x189)](_0x518ede(0x1fa),function(){const _0xaa6a55=_0x518ede;showDiv(document[_0xaa6a55(0x199)](_0xaa6a55(0x1c4))),closeSettingOverlay();}),document[_0x518ede(0x199)](_0x518ede(0x1c3))?.[_0x518ede(0x189)](_0x518ede(0x1fa),function(_0x3d7016){const _0x47ae83=_0x518ede;_0x3d7016[_0x47ae83(0x167)](),showDiv(document['getElementById']('lock-div')),closeSettingOverlay();}),document[_0x518ede(0x199)](_0x518ede(0x1f9))?.[_0x518ede(0x189)](_0x518ede(0x1fa),function(){showDiv(),closeSettingOverlay();}),document[_0x518ede(0x199)](_0x518ede(0x1b7))?.[_0x518ede(0x189)](_0x518ede(0x1fa),function(){const _0x14805a=_0x518ede;showDiv(),closeSettingOverlay(),document[_0x14805a(0x199)]('setting-overlay-container')?.[_0x14805a(0x16d)][_0x14805a(0x16e)]===_0x14805a(0x1ee)?(document['getElementById']('setting-overlay-container')?.[_0x14805a(0x16d)][_0x14805a(0x157)](_0x14805a(0x16e),'0'),document[_0x14805a(0x199)](_0x14805a(0x17e))?.[_0x14805a(0x16d)][_0x14805a(0x157)]('background',_0x14805a(0x1d8)),registerExpandSvgEvent(),settingOverlay[_0x14805a(0x154)](_0x14805a(0x1ad),onDown),settingOverlayContainer[_0x14805a(0x154)](_0x14805a(0x1dd),onMove),settingOverlayContainer['removeEventListener']('mouseup',onUp),settingOverlay[_0x14805a(0x154)](_0x14805a(0x1c5),onDown),settingOverlayContainer[_0x14805a(0x154)](_0x14805a(0x1bf),onMove),settingOverlayContainer[_0x14805a(0x154)]('touchend',onUp)):(document['getElementById'](_0x14805a(0x17e))?.[_0x14805a(0x16d)][_0x14805a(0x157)](_0x14805a(0x16e),_0x14805a(0x1ee)),document[_0x14805a(0x199)](_0x14805a(0x17e))?.['style'][_0x14805a(0x157)](_0x14805a(0x182),themes[getTheme()]['lineHighlightColor']),document[_0x14805a(0x199)]('expand-svg')?.[_0x14805a(0x154)](_0x14805a(0x1fa),onClickExpandSvg),settingOverlay[_0x14805a(0x189)](_0x14805a(0x1ad),onDown),settingOverlayContainer[_0x14805a(0x189)](_0x14805a(0x1dd),onMove),settingOverlayContainer[_0x14805a(0x189)](_0x14805a(0x1a6),onUp),settingOverlay[_0x14805a(0x189)](_0x14805a(0x1c5),onDown),settingOverlayContainer['addEventListener']('touchmove',onMove),settingOverlayContainer['addEventListener'](_0x14805a(0x1e9),onUp),showToast(_0x14805a(0x15f)));}),document[_0x518ede(0x199)]('collapse-svg')?.['addEventListener'](_0x518ede(0x1fa),function(){const _0x1c6ba9=_0x518ede;document[_0x1c6ba9(0x1cf)](_0x1c6ba9(0x1ba))['forEach'](_0x27bc58=>{const _0x4b9933=_0x1c6ba9;_0x27bc58[_0x4b9933(0x159)][_0x4b9933(0x1ca)](_0x4b9933(0x190)),_0x27bc58[_0x4b9933(0x159)][_0x4b9933(0x18e)](_0x4b9933(0x166));}),document[_0x1c6ba9(0x199)](_0x1c6ba9(0x1db))[_0x1c6ba9(0x16d)][_0x1c6ba9(0x1b0)]='flex',document['getElementById'](_0x1c6ba9(0x1db))['classList']['remove']('hide'),document[_0x1c6ba9(0x199)]('expand-svg')['classList'][_0x1c6ba9(0x18e)](_0x1c6ba9(0x190));}),registerExpandSvgEvent(),document[_0x518ede(0x199)]('container')?.[_0x518ede(0x189)](_0x518ede(0x1fa),function(){showDiv(),closeSettingOverlay();}),document[_0x518ede(0x199)](Setting[_0x518ede(0x173)])?.[_0x518ede(0x189)](_0x518ede(0x19a),function(_0x171b5f){const _0x4272ad=_0x518ede,_0x7318e3=_0x171b5f[_0x4272ad(0x161)][_0x4272ad(0x1aa)];if(_0x7318e3!==ThemeKey[_0x4272ad(0x1f5)]){replaceTheme(_0x7318e3);const _0x55b643=document[_0x4272ad(0x1ac)]('style');_0x55b643[_0x55b643[_0x4272ad(0x1f7)]-0x1]?.[_0x4272ad(0x1ca)](),document['head'][_0x4272ad(0x19f)](_0x4272ad(0x1ed),replaceOverrideDefaultCss()),saveSetting(Setting[_0x4272ad(0x173)],_0x7318e3);return;}}),document['getElementById'](Setting['fontSize'])?.[_0x518ede(0x189)](_0x518ede(0x19a),function(_0x8aaec5){const _0x8b6914=_0x518ede;document[_0x8b6914(0x1a4)][_0x8b6914(0x16d)][_0x8b6914(0x1c0)]=_0x8aaec5[_0x8b6914(0x161)][_0x8b6914(0x1aa)]+'pt',saveSetting(Setting['fontSize'],_0x8aaec5[_0x8b6914(0x161)]['value']);}),document[_0x518ede(0x199)](Setting['autoScroll'])?.[_0x518ede(0x189)]('change',function(_0x50a46a){const _0x24cd51=_0x518ede;scrollPosition=_0x50a46a[_0x24cd51(0x161)][_0x24cd51(0x1aa)],saveSetting(Setting['autoScroll'],_0x50a46a['target'][_0x24cd51(0x1aa)]);}),setSettingValue(),document['addEventListener']('click',function(_0x1f0d8b){const _0xaee2ec=_0x518ede;_0x1f0d8b[_0xaee2ec(0x161)]['classList']['contains'](_0xaee2ec(0x14d))&&(copyHash(_0x1f0d8b[_0xaee2ec(0x161)]),showToast(_0xaee2ec(0x175)));},![]),document[_0x518ede(0x199)](_0x518ede(0x17d))[_0x518ede(0x16d)][_0x518ede(0x1b0)]='none',showDiv(document[_0x518ede(0x199)](_0x518ede(0x17d))),ifvisible['setIdleDuration'](0x5);const _0x1aacc8=document[_0x518ede(0x199)](_0x518ede(0x1c8)),_0x3cf54e=document[_0x518ede(0x199)](_0x518ede(0x1db));ifvisible[_0x518ede(0x184)](function(){const _0x12beef=_0x518ede;_0x1aacc8['classList']['contains'](_0x12beef(0x190))&&_0x1aacc8[_0x12beef(0x192)](clickEvent),setTimeout(()=>{const _0x26247a=_0x12beef;_0x3cf54e['classList'][_0x26247a(0x1ca)](_0x26247a(0x179)),_0x3cf54e[_0x26247a(0x159)][_0x26247a(0x18e)](_0x26247a(0x1e0));},0x3e8);}),ifvisible['on']('wakeup',function(){const _0x401503=_0x518ede;_0x3cf54e[_0x401503(0x159)]['contains'](_0x401503(0x190))&&(_0x3cf54e['classList'][_0x401503(0x1ca)](_0x401503(0x1e0)),_0x3cf54e[_0x401503(0x159)][_0x401503(0x18e)](_0x401503(0x179)));}),openDB(autoOpenTextFile);});function setSettingOverlayPosition(){const _0x104a4e=a1_0x574ff9;document[_0x104a4e(0x199)]('setting-overlay')?.[_0x104a4e(0x16d)][_0x104a4e(0x157)](_0x104a4e(0x194),getSetting(Setting[_0x104a4e(0x153)]));}function registerExpandSvgEvent(){const _0x278dfb=a1_0x574ff9;document[_0x278dfb(0x199)](_0x278dfb(0x1db))?.['addEventListener'](_0x278dfb(0x1fa),onClickExpandSvg);}function onClickExpandSvg(){const _0x20537b=a1_0x574ff9;document[_0x20537b(0x1cf)]('.collapsible')[_0x20537b(0x150)](_0x41ee5f=>{const _0x17c064=_0x20537b;_0x41ee5f['classList'][_0x17c064(0x1ca)]('hide'),_0x41ee5f['classList'][_0x17c064(0x18e)](_0x17c064(0x190));}),document['getElementById'](_0x20537b(0x1db))[_0x20537b(0x16d)][_0x20537b(0x1b0)]='none',document[_0x20537b(0x199)]('expand-svg')[_0x20537b(0x159)][_0x20537b(0x1ca)]('show'),document[_0x20537b(0x199)](_0x20537b(0x1db))[_0x20537b(0x159)][_0x20537b(0x18e)](_0x20537b(0x166));}async function autoOpenTextFile(){getFileText(async _0x41f0d0=>{const _0x49a1b5=a1_0x3333;_0x41f0d0&&(await setLinesObj(_0x41f0d0),await generateItems(),document[_0x49a1b5(0x199)](_0x49a1b5(0x17d))[_0x49a1b5(0x16d)][_0x49a1b5(0x1b0)]='none',container['style'][_0x49a1b5(0x1b0)]='block'),hideLoadingDiv();});}function resetLinesObj(){linesObj=[];}function resetContainer(){container['innerHTML']='';}async function setLinesObj(_0x2ce4f2){const _0x2b3b79=a1_0x574ff9;resetLinesObj(),resetContainer();let _0x579203=_0x2ce4f2['split'](/[\r\n]+/);for(let _0x954070=0x0;_0x954070<_0x579203['length'];_0x954070++){const _0x5e7c93=_0x579203[_0x954070];_0x5e7c93&&linesObj[_0x2b3b79(0x1cd)]({'text':_0x5e7c93,'hash':await hashwasm[_0x2b3b79(0x197)](_0x5e7c93)});}}const readLastOffset=0x0,defaultLineCount=0x32;async function generateItems(_0x1baec1){const _0x33d42e=a1_0x574ff9;let _0x2c3623=-0x1;!_0x1baec1&&(_0x1baec1=await getHash());_0x1baec1&&(_0x2c3623=linesObj['findIndex'](_0x6aefd8=>_0x6aefd8[_0x33d42e(0x16c)]===_0x1baec1));if(_0x2c3623!==-0x1){_0x2c3623=_0x2c3623-readLastOffset<0x0?0x0:_0x2c3623-readLastOffset;const _0x20d0f6=linesObj[_0x33d42e(0x1f7)]<_0x2c3623+defaultLineCount?linesObj[_0x33d42e(0x1f7)]:_0x2c3623+defaultLineCount;for(let _0x4cc917=_0x2c3623;_0x4cc917<_0x20d0f6;_0x4cc917++){if(_0x4cc917===_0x2c3623){let _0x15876b=createParagraph(_0x4cc917['toString'](),linesObj[_0x4cc917]);observerForFirstParagraph[_0x33d42e(0x1ce)](_0x15876b,{'childList':!![]}),container?.[_0x33d42e(0x16f)](_0x15876b);}else container?.[_0x33d42e(0x16f)](createParagraph(_0x4cc917['toString'](),linesObj[_0x4cc917]));}}else{const _0x5b9148=linesObj[_0x33d42e(0x1f7)]<defaultLineCount?linesObj[_0x33d42e(0x1f7)]:defaultLineCount;for(let _0x160346=0x0;_0x160346<_0x5b9148;_0x160346++){if(_0x160346===0x0){let _0xa2685e=createParagraph(_0x160346[_0x33d42e(0x17b)](),linesObj[_0x160346]);observerForFirstParagraph['observe'](_0xa2685e,{'childList':!![]}),container?.['appendChild'](_0xa2685e);}else container?.[_0x33d42e(0x16f)](createParagraph(_0x160346[_0x33d42e(0x17b)](),linesObj[_0x160346]));}}}function appendChild(_0xc354ac){const _0x12424b=a1_0x574ff9;container?.[_0x12424b(0x16f)](createParagraph(_0xc354ac[_0x12424b(0x17b)](),linesObj[_0xc354ac]));}function appendChildToFirst(_0x415bdd){const _0x4a55b7=a1_0x574ff9;container?.[_0x4a55b7(0x1a9)]('afterbegin',createParagraph(_0x415bdd[_0x4a55b7(0x17b)](),linesObj[_0x415bdd]));}function createParagraph(_0x588cca,_0x52064a){const _0x481bfc=a1_0x574ff9;let _0x5afcd9=document[_0x481bfc(0x183)]('p');return _0x5afcd9[_0x481bfc(0x159)][_0x481bfc(0x18e)](_0x481bfc(0x14d)),_0x5afcd9[_0x481bfc(0x1ef)]=_0x52064a[_0x481bfc(0x1cb)],_0x5afcd9[_0x481bfc(0x1e2)](DATA_ID,_0x588cca[_0x481bfc(0x17b)]()),_0x5afcd9[_0x481bfc(0x1e2)](DATA_HASH,_0x52064a[_0x481bfc(0x16c)]),mutationObserver['observe'](_0x5afcd9,{'childList':!![],'subtree':!![]}),_0x5afcd9;}function getFirstChildId(){const _0x314b35=getItems();return parseInt(_0x314b35[0x0]['getAttribute'](DATA_ID));}function getLastChildId(){const _0x7d7d15=a1_0x574ff9,_0x21cfaa=getItems();return parseInt(_0x21cfaa[_0x21cfaa[_0x7d7d15(0x1f7)]-0x1][_0x7d7d15(0x16a)](DATA_ID));}function getItems(){const _0x59fbb6=a1_0x574ff9;return document[_0x59fbb6(0x15b)](_0x59fbb6(0x14d));}function drop(_0x4867d6){const _0x4dce6e=a1_0x574ff9;_0x4867d6[_0x4dce6e(0x1a7)]();if(_0x4867d6[_0x4dce6e(0x1bb)][_0x4dce6e(0x1bd)]['length']>0x0){var _0x44bcba=_0x4867d6['dataTransfer'][_0x4dce6e(0x1bd)][0x0],_0x5f04d2=new FileReader();_0x5f04d2[_0x4dce6e(0x17c)]=function(_0x1f4cc8){const _0x4a211f=_0x4dce6e;document[_0x4a211f(0x199)]('input')[_0x4a211f(0x1aa)]=_0x1f4cc8[_0x4a211f(0x161)][_0x4a211f(0x1d7)];},_0x5f04d2['readAsText'](_0x44bcba);}else document[_0x4dce6e(0x199)](_0x4dce6e(0x1a1))[_0x4dce6e(0x1aa)]=_0x4867d6[_0x4dce6e(0x1bb)][_0x4dce6e(0x1f1)]('Text');return![];}function scrollUpAction(){const _0xb5a82=a1_0x574ff9;let _0x154269=getItems(),_0x2b2de8=getFirstChildId();if(_0x2b2de8>0x0)_0x2b2de8--;else return![];return _0x154269[_0x154269[_0xb5a82(0x1f7)]-0x1][_0xb5a82(0x1ca)](),appendChildToFirst(_0x2b2de8),!![];}function isEdge(){const _0x180707=a1_0x574ff9;let _0x2572d4=navigator[_0x180707(0x1b4)];if(!_0x2572d4[_0x180707(0x1d3)](/edg/i))return hideLoadingDiv(),![];return!![];}function checkIsEdge(){const _0x3968ca=a1_0x574ff9;!localStorage[_0x3968ca(0x185)]('warned')&&(!isEdge()&&(alert(_0x3968ca(0x164)),localStorage[_0x3968ca(0x1f8)](_0x3968ca(0x1fb),'true')));}function setProgress(_0x5b137c){const _0xa9b3f5=a1_0x574ff9;_0x5b137c&&(localHash=_0x5b137c,localStorage[_0xa9b3f5(0x1f8)](DATA_HASH,_0x5b137c));}function setLastReadTime(){const _0x856f87=a1_0x574ff9;localStorage[_0x856f87(0x1f8)](DATA_LAST_READ_TIME,new Date()[_0x856f87(0x198)]()['toString']());}function a1_0x4b3f(){const _0x347ca2=['Hash\x20copied','querySelector','form-control','.svg-icon','active','\x0a<style>\x0a.msreadout-word-highlight:not(.msreadout-inactive-highlight)\x20{\x0a\x20\x20\x20\x20background:\x20fontHighlightColor\x20!important;\x0a\x20\x20\x20\x20color:\x20fontColor\x20!important;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.msreadout-line-highlight:not(.msreadout-inactive-highlight)\x20{\x0a\x20\x20\x20\x20background:\x20lineHighlightColor\x20!important;\x0a\x20\x20\x20\x20color:\x20fontColor\x20!important;\x0a\x20\x20}\x0a</style>\x0a','toString','onload','input-div','setting-overlay-container','clientY','returnValue','request','background','createElement','idle','getItem','#515151','.overlay-div','changedTouches','addEventListener','offsetTop','setting-svg','none','dark','add','scroll','show','14261930MLjAMC','dispatchEvent','17OeQ4g4OR7','top','writeText','8b1ec583ef96928250e4defed4e29004','md5','getTime','getElementById','change','content','PATCH\x20/gists/','input-hash','data','insertAdjacentHTML','GET\x20/gists/','input','Octokit','map','body','chapter-list','mouseup','preventDefault','d2MjYqFfB5Baf1vGNY7','insertAdjacentElement','value','829112KJzNBR','getElementsByTagName','mousedown','data-hash.txt','#setting-overlay','display','concat','setting-div','className','userAgent','66CIfMxO','replaceAll','move-svg','end','word','.collapsible','dataTransfer','4929CENgDu','files','status','touchmove','fontSize','auto-scroll','8polGxE','lock-svg','chapter-div','touchstart','fontColor','#fff','collapse-svg','btn-seperator','remove','text','color','push','observe','querySelectorAll','1524222YkKokV','msreadout-word-highlight','start','match','scrollIntoView','fontHighlightColor','round','result','transparent','lastReadTimeStr\x20undefined','beforeunload','expand-svg','Detect\x20offline,\x20progress\x20not\x20able\x20to\x20retrieve','mousemove','svg','212oallRt','inactive','head','setAttribute','getBoundingClientRect','btn-upload','initial','btn-go','svgClassName','seperator','touchend','399045iZVTsd','backgroundColor','trim','beforeend','100vh','innerHTML','block','getData','scrollTop','ghp_LGQgix','svg-fill-white','advance','abs','length','setItem','unlock-svg','click','warned','17542zRbntr','line','autoScroll','Detect\x20offline,\x20progress\x20not\x20saved','item','toUTCString','data-id','forEach','innerText','type','expandBtnPos','removeEventListener','chapter-item','pointerEvents','setProperty','svg-fill-black','classList','replace','getElementsByClassName','onLine','save-svg','loading-div','Drap\x20the\x20Expand\x20Icon\x20to\x20move\x20its\x20position.','yellow','target','edit-svg','light','Current\x20browser\x20is\x20not\x20Microsoft\x20Edge.\x20This\x20tools\x20is\x20used\x20to\x20open\x20large\x20text\x20file\x20for\x20ReadAloud\x20feature\x20in\x20Micorsoft\x20Edge.','lineHighlightColor','hide','stopPropagation','[data-id=\x22','5501178cHyghm','getAttribute','expand-btn-pos','hash','style','height','appendChild','readAsText','contains','#000','theme','flex'];a1_0x4b3f=function(){return _0x347ca2;};return a1_0x4b3f();}const maxStoppedSecond=0x5,millisecondToSecond=0x3e8;function checkIfStopped(){const _0x326272=a1_0x574ff9,_0x13fa9e=localStorage[_0x326272(0x185)](DATA_LAST_READ_TIME);if(!_0x13fa9e)throw new Error(_0x326272(0x1d9));const _0x39976a=parseInt(_0x13fa9e),_0x20e265=new Date()[_0x326272(0x198)]();Math[_0x326272(0x1d6)](_0x20e265/millisecondToSecond)-Math[_0x326272(0x1d6)](_0x39976a/millisecondToSecond)>=maxStoppedSecond&&console['warn']('Stopped\x20more\x20than\x20'+maxStoppedSecond+'\x20seconds');}async function getHash(){const _0x31da5f=a1_0x574ff9,_0x7dfa37=document[_0x31da5f(0x199)](_0x31da5f(0x19d))[_0x31da5f(0x1aa)];if(_0x7dfa37)return _0x7dfa37;return localHash=localStorage['getItem'](DATA_HASH),gistHash=await getProgress(),gistHash;}function copyHash(_0x3bf618){const _0x317b0b=a1_0x574ff9;navigator['clipboard'][_0x317b0b(0x195)](_0x3bf618[_0x317b0b(0x16a)](DATA_HASH));}function saveSetting(_0x536546,_0x43b089){localStorage['setItem'](_0x536546,_0x43b089);}function getSetting(_0x370fb4){const _0x2c5681=a1_0x574ff9;let _0x293911=localStorage[_0x2c5681(0x185)](_0x370fb4);if(_0x293911)return _0x293911;switch(_0x370fb4){case Setting[_0x2c5681(0x14b)]:const _0xa70c9b=_0x2c5681(0x1d2);_0x293911=_0xa70c9b;break;case Setting[_0x2c5681(0x1c0)]:_0x293911='12';break;case Setting['theme']:_0x293911=ThemeKey[_0x2c5681(0x18d)];break;case Setting['expandBtnPos']:_0x293911=(window['innerHeight']/0x2)[_0x2c5681(0x17b)]()+'px';break;default:break;}return _0x293911;}function setSettingValue(){const _0x57df78=a1_0x574ff9;for(let _0x545632 of Object['values'](Setting)){if(_0x545632===Setting[_0x57df78(0x153)])continue;document[_0x57df78(0x199)](_0x545632)[_0x57df78(0x1aa)]=getSetting(_0x545632),document[_0x57df78(0x199)](_0x545632)[_0x57df78(0x192)](changeEvent);}}function getTheme(){const _0x5af259=a1_0x574ff9;return document['getElementById'](Setting['theme'])[_0x5af259(0x1aa)];}function replaceOverrideDefaultCss(){const _0x4a4c78=a1_0x574ff9,_0xee065b=getTheme();return overrideDefaultCss[_0x4a4c78(0x15a)](propertyOf('fontHighlightColor'),themes[_0xee065b][_0x4a4c78(0x1d5)])['replace'](propertyOf('lineHighlightColor'),themes[_0xee065b][_0x4a4c78(0x165)])[_0x4a4c78(0x1b6)](propertyOf('fontColor'),themes[_0xee065b]['fontColor']);}const propertyOf=_0x483635=>_0x483635;function addUnloadEvent(){const _0x14c293=a1_0x574ff9;window[_0x14c293(0x189)](_0x14c293(0x1da),function(_0x3eefde){const _0x28679e=_0x14c293;return saveProgress(localHash),_0x3eefde[_0x28679e(0x1a7)](),_0x3eefde[_0x28679e(0x180)]='',null;});}let octokit;const gistId=a1_0x574ff9(0x196),fileName=a1_0x574ff9(0x1ae);function init(){const _0x1a075b=a1_0x574ff9,_0x142b36=_0x1a075b(0x1f3)[_0x1a075b(0x1b1)](_0x1a075b(0x193));octokit=new window[(_0x1a075b(0x1a2))]({'auth':_0x142b36+_0x1a075b(0x1a8)});}async function getProgress(){const _0x37d0ea=a1_0x574ff9;!octokit&&init();let _0xc220de;try{_0xc220de=await octokit[_0x37d0ea(0x181)](_0x37d0ea(0x1a0)+gistId);}catch(_0x2f3cfb){return!navigator[_0x37d0ea(0x15c)]&&showToast(_0x37d0ea(0x1dc)),'';}return _0xc220de[_0x37d0ea(0x19e)][_0x37d0ea(0x1bd)][fileName][_0x37d0ea(0x19b)];}async function saveProgress(_0xc79673){const _0x8917dd=a1_0x574ff9;!octokit&&init();if(!_0xc79673)return;if(window['disabledGist'])return;if(_0xc79673===gistHash)return;let _0x116607;try{_0x116607=await octokit['request'](_0x8917dd(0x19c)+gistId,{'gist_id':gistId,'description':'update\x20'+new Date()[_0x8917dd(0x14e)](),'files':{'data-hash.txt':{'content':_0xc79673}}}),_0x116607?.[_0x8917dd(0x1be)]===0xc8&&showToast('Saved');}catch(_0x2350ea){!navigator[_0x8917dd(0x15c)]?showToast(_0x8917dd(0x14c)):showToast(_0x116607);}}function showToast(_0x580521){const _0x4b5108=a1_0x574ff9;var _0x496fc6=document['getElementById']('snackbar');_0x496fc6[_0x4b5108(0x1b3)]=_0x4b5108(0x190),_0x496fc6[_0x4b5108(0x151)]=_0x580521,setTimeout(function(){const _0x195bf4=_0x4b5108;_0x496fc6[_0x195bf4(0x1b3)]=_0x496fc6[_0x195bf4(0x1b3)][_0x195bf4(0x15a)](_0x195bf4(0x190),'');},0xbb8);}function showDiv(_0x513c47,_0x54d0c8=a1_0x574ff9(0x174)){const _0x45628c=a1_0x574ff9,_0x224d25=_0x513c47?.[_0x45628c(0x16d)][_0x45628c(0x1b0)];document[_0x45628c(0x1cf)](_0x45628c(0x187))[_0x45628c(0x150)](_0x1e52f6=>{const _0x3a8973=_0x45628c;_0x1e52f6[_0x3a8973(0x16d)]['display']=_0x3a8973(0x18c);}),_0x224d25&&(_0x224d25===_0x54d0c8?_0x513c47['style'][_0x45628c(0x1b0)]=_0x45628c(0x18c):_0x513c47['style'][_0x45628c(0x1b0)]=_0x54d0c8);}function initializeTheme(){const _0x5b1624=a1_0x574ff9,_0x289cc2=getSetting(Setting[_0x5b1624(0x173)]);if(_0x289cc2!==ThemeKey[_0x5b1624(0x1f5)]){replaceTheme(_0x289cc2);return;}}function replaceTheme(_0x3e2fc6){const _0x115f81=a1_0x574ff9;if(_0x3e2fc6!==ThemeKey[_0x115f81(0x1f5)]){document[_0x115f81(0x1a4)][_0x115f81(0x16d)][_0x115f81(0x1eb)]=themes[_0x3e2fc6]['backgroundColor'],document['getElementById'](_0x115f81(0x1b2))[_0x115f81(0x16d)][_0x115f81(0x1eb)]=themes[_0x3e2fc6][_0x115f81(0x1eb)],container[_0x115f81(0x16d)][_0x115f81(0x1eb)]=themes[_0x3e2fc6][_0x115f81(0x1eb)],container[_0x115f81(0x16d)][_0x115f81(0x1cc)]=themes[_0x3e2fc6][_0x115f81(0x1c6)],document[_0x115f81(0x1cf)](_0x115f81(0x1de))[_0x115f81(0x150)](_0x11a9b2=>{const _0x2a56d2=_0x115f81;_0x11a9b2[_0x2a56d2(0x159)][_0x2a56d2(0x1ca)](...Object['values'](themes)[_0x2a56d2(0x1a3)](_0x3dad72=>_0x3dad72[_0x2a56d2(0x1e7)])),_0x11a9b2[_0x2a56d2(0x159)][_0x2a56d2(0x18e)](themes[_0x3e2fc6][_0x2a56d2(0x1e7)]);}),document['querySelectorAll'](_0x115f81(0x178))[_0x115f81(0x150)](_0x43f378=>{const _0x44bc1e=_0x115f81;_0x43f378[_0x44bc1e(0x16d)][_0x44bc1e(0x1eb)]=themes[_0x3e2fc6][_0x44bc1e(0x1eb)];}),document[_0x115f81(0x1cf)]('#loading-div')[_0x115f81(0x150)](_0x88fc0e=>{const _0x4e0c4e=_0x115f81;_0x88fc0e[_0x4e0c4e(0x16d)][_0x4e0c4e(0x1eb)]=themes[_0x3e2fc6]['backgroundColor'];}),document['querySelectorAll']('.overlay-div')['forEach'](_0x3c86d5=>{const _0x3d3fde=_0x115f81;_0x3c86d5[_0x3d3fde(0x16d)][_0x3d3fde(0x1eb)]=themes[_0x3e2fc6][_0x3d3fde(0x1eb)];}),document[_0x115f81(0x1cf)]('.form-control')[_0x115f81(0x150)](_0x5a91e3=>{const _0x4481a8=_0x115f81;_0x5a91e3[_0x4481a8(0x16d)][_0x4481a8(0x1eb)]=themes[_0x3e2fc6][_0x4481a8(0x1eb)],_0x5a91e3[_0x4481a8(0x16d)][_0x4481a8(0x1cc)]=themes[_0x3e2fc6][_0x4481a8(0x1c6)];}),saveSetting(Setting[_0x115f81(0x173)],_0x3e2fc6);return;}}function showLoadingDiv(){const _0x344d8a=a1_0x574ff9;document[_0x344d8a(0x199)](_0x344d8a(0x15e))['style']['display']=_0x344d8a(0x174),setTimeout(()=>{hideLoadingDiv();},0x1388);}function hideLoadingDiv(){const _0x57408b=a1_0x574ff9;document[_0x57408b(0x199)](_0x57408b(0x15e))['style'][_0x57408b(0x1b0)]=_0x57408b(0x18c);}function a1_0x3333(_0x1711fe,_0x8b3fff){const _0x4b3f8b=a1_0x4b3f();return a1_0x3333=function(_0x333369,_0x3ba1b3){_0x333369=_0x333369-0x14b;let _0x1a7715=_0x4b3f8b[_0x333369];return _0x1a7715;},a1_0x3333(_0x1711fe,_0x8b3fff);}function closeSettingOverlay(){const _0x50e8f7=a1_0x574ff9;document['getElementById']('collapse-svg')?.[_0x50e8f7(0x1fa)]();}var settingOverlayContainer=document[a1_0x574ff9(0x176)]('#setting-overlay-container'),settingOverlay=document[a1_0x574ff9(0x176)](a1_0x574ff9(0x1af)),state={'distX':0x0,'distY':0x0};function onDown(_0x3eb6cb){const _0x462096=a1_0x574ff9;_0x3eb6cb[_0x462096(0x1a7)]();var _0x3c55f5=_0x3eb6cb[_0x462096(0x152)]==='touchstart'?_0x3eb6cb['changedTouches'][0x0]:_0x3eb6cb;state['distY']=Math[_0x462096(0x1f6)](settingOverlay[_0x462096(0x18a)]-_0x3c55f5[_0x462096(0x17f)]),settingOverlay[_0x462096(0x16d)][_0x462096(0x156)]=_0x462096(0x18c);};function onUp(_0x46da5b){const _0x43f04e=a1_0x574ff9;settingOverlay[_0x43f04e(0x16d)][_0x43f04e(0x156)]=_0x43f04e(0x1e5),document[_0x43f04e(0x199)](_0x43f04e(0x1b7))?.['dispatchEvent'](clickEvent),saveSetting(Setting[_0x43f04e(0x153)],document[_0x43f04e(0x199)]('setting-overlay')?.[_0x43f04e(0x16d)][_0x43f04e(0x194)]['toString']());};function onMove(_0x5ac04b){const _0x347759=a1_0x574ff9;if(settingOverlay[_0x347759(0x16d)]['pointerEvents']===_0x347759(0x18c)){var _0x574613=_0x5ac04b[_0x347759(0x152)]==='touchmove'?_0x5ac04b[_0x347759(0x188)][0x0]:_0x5ac04b;settingOverlay['style']['top']=_0x574613[_0x347759(0x17f)]-state['distY']+'px';};};