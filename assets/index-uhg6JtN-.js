var e=Object.defineProperty,t=(t,s,r)=>(((t,s,r)=>{s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[s]=r})(t,"symbol"!=typeof s?s+"":s,r),r);import{p as s}from"./phaser-C2_wa_Fb.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const s of e)if("childList"===s.type)for(const e of s.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();class r extends s.Scene{constructor(){super("Boot")}preload(){this.load.image("background","assets/bg.png")}create(){this.scene.start("Preloader")}}class a extends s.Scene{constructor(){super("Game"),t(this,"camera"),t(this,"background"),t(this,"msg_text")}create(){this.camera=this.cameras.main,this.camera.setBackgroundColor(65280),this.background=this.add.image(512,384,"background"),this.background.setAlpha(.5),this.msg_text=this.add.text(512,384,"Make something fun!\nand share it with us:\nsupport@phaser.io",{fontFamily:"Arial Black",fontSize:38,color:"#ffffff",stroke:"#000000",strokeThickness:8,align:"center"}),this.msg_text.setOrigin(.5),this.input.once("pointerdown",(()=>{this.scene.start("GameOver")}))}}class i extends s.Scene{constructor(){super("GameOver"),t(this,"camera"),t(this,"background"),t(this,"gameover_text")}create(){this.camera=this.cameras.main,this.camera.setBackgroundColor(16711680),this.background=this.add.image(512,384,"background"),this.background.setAlpha(.5),this.gameover_text=this.add.text(512,384,"Game Over",{fontFamily:"Arial Black",fontSize:64,color:"#ffffff",stroke:"#000000",strokeThickness:8,align:"center"}),this.gameover_text.setOrigin(.5),this.input.once("pointerdown",(()=>{this.scene.start("MainMenu")}))}}class o extends s.Scene{constructor(){super("MainMenu"),t(this,"background"),t(this,"logo"),t(this,"title")}create(){this.background=this.add.image(512,384,"background"),this.logo=this.add.image(512,300,"logo"),this.title=this.add.text(512,460,"Main Menu",{fontFamily:"Arial Black",fontSize:38,color:"#ffffff",stroke:"#000000",strokeThickness:8,align:"center"}).setOrigin(.5),this.input.once("pointerdown",(()=>{this.scene.start("Game")}))}}class n extends s.Scene{constructor(){super("Preloader")}init(){this.add.image(512,384,"background"),this.add.rectangle(512,384,468,32).setStrokeStyle(1,16777215);const e=this.add.rectangle(282,384,4,28,16777215);this.load.on("progress",(t=>{e.width=4+460*t}))}preload(){this.load.setPath("assets"),this.load.image("logo","logo.png")}create(){this.scene.start("MainMenu")}}const c={type:Phaser.AUTO,width:1024,height:768,parent:"game-container",backgroundColor:"#028af8",scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH},scene:[r,n,o,a,i]};new s.Game(c);
