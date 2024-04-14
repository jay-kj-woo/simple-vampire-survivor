var e=Object.defineProperty,i=(i,t,a)=>(((i,t,a)=>{t in i?e(i,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[t]=a})(i,"symbol"!=typeof t?t+"":t,a),a);import{p as t}from"./phaser-C2_wa_Fb.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&i(e)})).observe(document,{childList:!0,subtree:!0})}function i(e){if(e.ep)return;e.ep=!0;const i=function(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?i.credentials="include":"anonymous"===e.crossOrigin?i.credentials="omit":i.credentials="same-origin",i}(e);fetch(e.href,i)}}();const a={images:{background1:"background1",background2:"background2",background3:"background3",beam:"beam",player:"player",mob1:"mob1",mob2:"mob2",mob3:"mob3",mob4:"mob4",lion:"lion",bullet:"bullet",explosion:"explosion",clawWhite:"clawWhite",clawYellow:"clawYellow",catnip:"catnip",expUp:"expUp"},audios:{beam:"beam_audio",scratch:"scratch_audio",hitMob:"hitMob_audio",growl:"growl_audio",explosion:"explosion_audio",expUp:"expUp_audio",hurt:"hurt_audio",nextLevel:"nextLevel_audio",gameOver:"gameOver_audio",gameClear:"gameClear_audio",pauseIn:"pauseIn_audio",pauseOut:"pauseOut_audio"},fonts:{pixelFont:"pixelFont"},anims:{mob1:"mob1_anim",mob2:"mob2_anim",mob3:"mob3_anim",mob4:"mob4_anim",lion:"lion_anim",lionIdle:"lionIdle_anim",player:"player_anim",playerIdle:"playerIdle_anim",explode:"explode_anim",scratchWhite:"scratchWhite_anim",scratchYellow:"scratchYellow_anim",catnip:"catnip_anim",expRed:"expRed_anim",expBlue:"expBlue_anim",expYellow:"expYellow_anim",expGreen:"expGreen_anim"}};class A extends t.Physics.Arcade.Sprite{constructor(e){super(e,x.width/2,x.height/2,a.images.player),i(this,"speed",1),i(this,"vector",{x:0,y:0}),this.scale=2,this.setDepth(20),this.setSpeed(2)}setPlayerPhysics(){this.setBodySize(28,32)}setSpeed(e){this.speed=e}setVector(e){this.vector.x=e.x,this.vector.y=e.y}move(){this.x+=this.vector.x*this.speed,this.y+=this.vector.y*this.speed,this.vector.x<0&&this.setFlipX(!1),this.vector.x>0&&this.setFlipX(!0)}}const s="game",o={mob1:{texture:a.images.mob1,animKey:a.anims.mob1,initialHp:1,dropRate:.1,bodysize:{width:24,height:14}},mob2:{texture:a.images.mob2,animKey:a.anims.mob2,initialHp:2,dropRate:.2,bodysize:{width:24,height:32}},mob3:{texture:a.images.mob3,animKey:a.anims.mob3,initialHp:3,dropRate:.3,bodysize:{width:24,height:32}},mob4:{texture:a.images.mob4,animKey:a.anims.mob4,initialHp:4,dropRate:.4,bodysize:{width:24,height:32}},lion:{texture:a.images.lion,animKey:a.anims.lion,initialHp:5,dropRate:.5,bodysize:{width:40,height:64}}};class r extends t.Physics.Arcade.Sprite{constructor({scene:e,x:t,y:A,id:s,initialHp:r,dropRate:n}){const{texture:d,initialHp:h,dropRate:m}=o[s];super(e,t,A,d),i(this,"animKey"),i(this,"initialHp"),i(this,"dropRate"),i(this,"id"),i(this,"speed",1),this.id=s,this.play(a.anims[s]),this.setDepth(10),this.initialHp=r||h,this.dropRate=n||m,this.setSpeed(50),this.scale=2}setMobPhysics(){const e=o[this.id];this.setBodySize(e.bodysize.width,e.bodysize.height)}setSpeed(e){this.speed=e}facePlayer(e){this.x<e.x?this.setFlipX(!0):this.setFlipX(!1)}moveToPlayer(e,i){e.physics.moveToObject(this,i,this.speed)}}class n extends t.Scene{constructor(){super(s),i(this,"background"),i(this,"player"),i(this,"mobs"),i(this,"mobsEvents"),i(this,"beamSound"),i(this,"scratchSound"),i(this,"hitMobSound"),i(this,"growlSound"),i(this,"explosionSound"),i(this,"expUpSound"),i(this,"hurtSound"),i(this,"nextLevelSound"),i(this,"gameOverSound"),i(this,"gameClearSound"),i(this,"pauseInSound"),i(this,"pauseOutSound"),i(this,"cursorKeys")}create(){var e;this.sound.pauseOnBlur=!1,this.beamSound=this.sound.add(a.audios.beam),this.scratchSound=this.sound.add(a.audios.scratch),this.hitMobSound=this.sound.add(a.audios.hitMob),this.growlSound=this.sound.add(a.audios.growl),this.explosionSound=this.sound.add(a.audios.explosion),this.expUpSound=this.sound.add(a.audios.expUp),this.hurtSound=this.sound.add(a.audios.hurt),this.nextLevelSound=this.sound.add(a.audios.nextLevel),this.gameOverSound=this.sound.add(a.audios.gameOver),this.gameClearSound=this.sound.add(a.audios.gameClear),this.pauseInSound=this.sound.add(a.audios.pauseIn),this.pauseOutSound=this.sound.add(a.audios.pauseOut),this.player=new A(this),this.addPlayer(this.player),this.addBackground(),this.cursorKeys=(null==(e=this.input.keyboard)?void 0:e.createCursorKeys())||null,this.mobs=this.physics.add.group();const i=(({scene:e,center:i,hp:t,dropRate:a,id:A,repeatRate:s})=>e.time.addEvent({delay:s,callback:()=>{const[s,o]=function(e,i){const t=Math.random()*Math.PI*2,a=Math.sqrt(x.width*x.width+x.height*x.height)/2;return[e+a*Math.cos(t),i+a*Math.sin(t)]}(i.x,i.y),n=new r({scene:e,x:s,y:o,id:A,initialHp:t,dropRate:a});e.addMob(n)},loop:!0}))({scene:this,center:{x:this.player.x,y:this.player.y},id:"mob1",repeatRate:1e3});this.mobsEvents=[i]}addBackground(){var e;this.background=(this,e=a.images.background1,this.add.tileSprite(0,0,x.width,x.height,e).setOrigin(0,0))}update(){this.movePlayer(),this.followCameraOnPlayer(),this.moveMobs()}movePlayer(){if(!this.cursorKeys)return;const e=this.player,{left:i,right:t,up:A,down:s}=this.cursorKeys;i.isDown||t.isDown||A.isDown||s.isDown?e.play(a.anims.player,!0):(e.play(a.anims.playerIdle,!0),e.setVector({x:0,y:0})),e.setVector({x:0,y:0}),i.isDown?e.setVector({x:-1,y:e.vector.y}):t.isDown&&e.setVector({x:1,y:e.vector.y}),A.isDown?e.setVector({x:e.vector.x,y:-1}):s.isDown&&e.setVector({x:e.vector.x,y:1}),e.move()}followCameraOnPlayer(){this.cameras.main.startFollow(this.player),this.background.setX(this.player.x-x.width/2),this.background.setY(this.player.y-x.height/2),this.background.tilePositionX=this.player.x-x.width/2,this.background.tilePositionY=this.player.y-x.height/2}addPlayer(e){this.add.existing(e),this.physics.add.existing(e),e.setPlayerPhysics()}addMob(e){this.add.existing(e),this.physics.add.existing(e),e.setMobPhysics(),this.mobs.add(e)}moveMobs(){this.mobs.getChildren().forEach((e=>{e.facePlayer(this.player),e.moveToPlayer(this,this.player)}))}}const d=""+new URL("font-DtOx_0R1.xml",import.meta.url).href,h=""+new URL("background-BbcVVSSl.png",import.meta.url).href,m=""+new URL("background-2-BFgraFf9.png",import.meta.url).href,g=""+new URL("background-3-CAiMYrjP.png",import.meta.url).href,l=""+new URL("lion-DshvhJGq.png",import.meta.url).href,u=""+new URL("beam-CUsNQDBo.ogg",import.meta.url).href,c=""+new URL("scratch-DzINauev.ogg",import.meta.url).href,p=""+new URL("hitMob-DwoaeNED.ogg",import.meta.url).href,f=""+new URL("growl-D_z_Hv1M.ogg",import.meta.url).href,b=""+new URL("explosion-CnVfge0I.ogg",import.meta.url).href,w=""+new URL("hurt-DVdvWGwC.ogg",import.meta.url).href,P=""+new URL("expUp-cRmo6z66.ogg",import.meta.url).href,v=""+new URL("nextLevel-Df7TGWNl.ogg",import.meta.url).href,R=""+new URL("gameover-BIQ7gGdx.ogg",import.meta.url).href,y=""+new URL("gameClear-C4Lf0YKL.ogg",import.meta.url).href,I=""+new URL("pauseIn-SzWQUyex.ogg",import.meta.url).href,U=""+new URL("pauseOut-B7aN07CA.ogg",import.meta.url).href;class E extends t.Scene{constructor(){super("loading")}preload(){this.load.image(a.images.background1,h),this.load.image(a.images.background2,m),this.load.image(a.images.background3,g),this.load.image(a.images.beam,"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAASlJREFUOI2Fk0tugzAURQ/UaUQURGQJCRHBpFOWkEmWUSn760ayhEwzCUqFxDBqLBIqOgC75tfekX/3vPf8bIcZvUVhY8/PRelMnRNzxt3tTrJcApBXFXTrQ5AYmrVxv9n8bngeiVIGZEMc2/z++OYgZS+jq1JmXD6fnOqaj9cXk4lrRz5IiR8ExGlKnKYAbD3PAMLFgkwIdre7KdXVm7pePwhYS8laykmIfRZA6Oi9mv9Rm8UXRGEjhsTPy4XYGs9Je3pduCrF1vP+NA7lQtdnCzLUcO1U18YjzkXpEIVNohT77rKmINC2UevorzgXpWO6kFdV78Cc2Y4O3R2YLB412SyiNdvRwXqJ0H/KmRAjY15VPfMIoCEw/kxHf4XJ1tLkF7VBWnPf+QcGU5t3DisUlQAAAABJRU5ErkJggg=="),this.load.spritesheet(a.images.player,"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAAAkCAYAAACQVDZDAAAAAXNSR0IArs4c6QAACB5JREFUeJztXX9oE1cc/1yz0iAKwrwapH8IEYU5whq6FP3DSjnoNsc20LGCWgpDEMpEOgoS/zYUOkoRCgP3R3EIHXZ/KEwbCKX9p8VMUyn+mmtAocyY8w9hopXS3P64vuu7u3e5uzTJy17ygdDkcrnv5/v9fO7de6+XF6CBBhrgBok3gVIQDslaNqdK4ZCskW3ZnCqR9+h9yfYGxIFI+n/Am4BfhEOy1t26CkDWUj0a0moBqZU1AHrhUz2b9U+rBcQzuljl5iCKAUoBz/xF07+kE5CXAOGQrCWi64hngrg/GMOrh3cQk5sANANYxeipI3j18A4AvfgAQMQqFw/RDFBKbF75i6i/7xOQlwDhEIkHo/gEqZU1xNtbTNvI9pl80Pg8sDVDimgAv7F55S+q/r7IbBIImIpATMAiQIpQLgGsSKuFjSIU30agJKWSuGwaoIAvjh4yiZ1YfI94e4uNA20AgvIYgF/9eeUvqv6eifAUgBjPqaheQXPyy0NUA/iNb0U18hdZf99d0JjcZBI/rRaY4sfkJsTkFsRhJq0kS+uO0AkpSQlOgujdrgAAe3esVBADAPZ4LA5OxU+rBXS36t3FUk8EHvWvhfxF1d9Tk7JJwA7/BFZtEwVuse8PxozXSlLC0lw/Uitr2HWwE7sOdpqOH88EMD/Vi8tDUSjJTY1jctOWumNWAzgJmlYLUJKSKTbZXip41p91zGrmL7r+nq/pPA1IWnwlKeHvJ5Om7fSYJ54J4O8nk9guB9HRud8WN97egkR0vdEA+EAt5C+y/q4nIE8B6JafFP/dy2kAwNj1s0gsvjceqZU1LM31G+9vl4O4PBQ1uiM0D78iiGyAWs6/HvT3NAa0EiBJ2sYiGwTevZzeIJAxDUjj7S1Q1HVfU+N0y0/iEoxdP1v0sywOADam7QOOnyOg+/4sA5z/9mfT/ktz39sMcG4kYxqLEAP4qQGv+tdC/qLrX/QErAUBAN1481O9Xna1wcohrRZ8XQVEN4AbB575E4isv2sX1I0A/WATsI8/dAL+sF0O2rZFuiaYz1kcCI9SYm/VAHQ3qNwGqEb9eeZPIKr+niZheApAzGMt8LaVnVi+dt54vXztPLat7DTtc/jEJA6fmDQdR2lrLmkmUFQDeAWv/EXX3/MsKA8BsjlVIvsvzfXb3t93cgyRrglEuiaw7+SY7f35qd6SjUsgugHcwDP/etDfdRJG/2AAka4JUxEIgbd4bRDACvC27bWJgDURpU2/b47+Z6SX+/Ss8d+2vcbSXD/eqKsAdIMSLqz4BH5mAnUD7NCAgKMBaNCCADDEZ/HwimrU3wnVyr+e9S96AlbTgL0XRzB5acjRFE4tGevK4Dd+PRsAqI3861X/JkLArUtgvQQTAuQyvzTXb2p9CQErCScB+o8fQ+/FEVvX5MrSv1J366rvqwgpzN07T11jA2DGplHMAE4m8NoFqoX688wfqF/9jTEgTwGyOVX6LPoR9u7ZjQvjV5kiAJtFdQNd/HMjGQBAPBMoeuWpVwMQ8My/nvU3xmDTmUeY+P0PTF4aspE8E9mhzeSDzG6QFwLnRjJIRNddu1+Ex+zCXQwP9Nn2C4dk7fJQFB2d+yF//I1pWv6N6lyk3osjAMDMjT72hfGrAOAYe36qt2iXxyl3Gqz4tVB/nvnTMepNf+NFLQhA4hQzI9mHPNe/8KhjJh/E8os87j19jsUHjwEAz/55abxfTAA6dj0ZwBqDV/5WDvWivy0AbwG88CD7WL8hEM8EsPwijzcjX9q+mLr0+WjDADWev5VDPehvmgXd6Itr05lHeMaYlcrmVOnYj0mEQxkNmLQRAIoT8Ao3HsW+oHnv6XMc8B2RHXvvnt0YHuizzcxlc/p6LLoBmo3tM3n974EbA/iQYQA/sXnVn2f+LA6i62/LgAyI+48fYw6IyT4AkIiuQ2lrNh4EB24MQLl5GsrN04jcHkTk9qC/KsA8MKcHx2ciOzTA+Ttv5QCJffRQB3NgThuAfgC6AcoRm2f9eeZv5SC6/swsakEAwmN4oM82Q2Vu9SuDejGAGwce+dMcRNff8Si1IADNI3/lB6Pw1nVOKhlbdAO4ceCVP81BZP2LqlgLAhCMnjpi6mZVC6IbwAsHXvnTEFV/12a0VgS4NbvgOfZfX4+bXvuZAHCCqAbwCl75E4iqv+d+DE8BsjlVimcCiGcCRaeRUz0avuv6VH/+1a8ANovvdQrcCaIawCt45s/Sn16Kg+D/qL/nE5AmQK9RslUCXpHNqZKXAiai64YIv3T8BGDrxfdiACUpVdUALAMS8DgBKp1/resPlNYAeCZFz8RZlwanoSQl/Db3JxYfPIZy83TZimDlYuVADACY14YEKvP7CCQ+iWV9fWH8qvE/uHLkTt+xT56TmGTxpVSPVvX6Vyt/VmwavPSn45GFk/3k74sYK3nrQqiVFoDFgy4AzQuAa7d1qxxuzS4wY1fSADQHALZl6itdfxK72vmHQ86rU7M4lGtZfisH1s8CzOSDjg0A4FwD3ytjs04+cnAlKWv3Bw8BWEB8oM/vobeERHQdSlJviUl3ze/iP36QzanSJ6NpLREtvk9FglPHD4dkzXo16G5dxTBV/0rw4JW/dRl+2uy7Dnaae0VtzcbdKeUAaQBYJ182p0q6/2PA7ALIbXKsnweg4fsK2N26apoMsJ7pAEzBAfvAtRzCkGLQCw65JVvO+DQPYPPq74VHuePTLS+P+ED18rfeA2r1H/2eE49S41fC/55ujC2FrBu8FqERvxFf5Pj/AVtpVzbcMdoXAAAAAElFTkSuQmCC",{frameWidth:32,frameHeight:36}),this.load.spritesheet(a.images.mob1,"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAAcCAYAAAD1EPTXAAAAAXNSR0IArs4c6QAAA09JREFUeJztmjFME1Echz+wGgbQNFi4hhCiVRNCTNqJGgY3lY4OOLhclIHJyaUxxhAlHWRiwhiTxqQLk1PRTRIxONFgCIkJAyVNL5CmCRgm9RzwDijX6931+lrq+5amvfa++7/f/12v7woSiUQikUgkEolEIpFIJBKJRCKRSCQSiURy5uho9gE0k4gS0q1e39R2/+txaSVsgxAdoEhfRAnpjz/94MPnr+Zr5WIBLbdMXy7ru1N0baJcjfYF7KTVAozksnojAhTliyghPfr2C+/u3qA3maaUUulUZwiGB4AxNPDVKbq2dsqts5rUCBCglFIpFwsEwwMo0TF2oomqs8YLon0Aa8tL9CbTAPQm0/+aE/PRL0TW1o65WTYoiAuwWb7ZW/28nJ3i25MEj14dDqyBEh3z1SWytnbLrWqDigywGb7i5CQ3e3oojoxwpavrxLZgeMDXs43I2tott6oNKjJA0b5Nbbfj9TkIr6/zfX+fO/l8w84wILa2dsvNskFFByjaZzA6l+X503lG57KnthmzP6KE9HoGWGRt7Zhb1V9YESWkG9cWVpSLBf6kn/m2dOHUB/4tl5y/HtODt+8DcOly/6nBLaVUdqIJgLqWnkTW1qq5efXZfqhWgBuLC76uGTptmL7c4RmvnoYB+P0giR64QCAzfWK7seRUSqn8vDfFUCzO1uoK3R/nPTtF1ebEJTq3enyWH3Aa4PGZD41vmK3VFYZi8boW1I11uzfvMwAEMtNUruMZbCwuMDw+YT730qSia3PiEp1bPb5Tb3QTIGD+ajMG1e0BuPUdx8vMjCgh/dfDF+bzQGaaTnXGfF7rGqqUUh37RNbW6rl59Vk2qNcAj89+pwdQb8N4bVKAnWiC4fEJSinV3HZ0R8kaN2dRkbWdpdzc+Gy/4r0EWC4W2NO2AVwF6dVXz7VhrQt8Y/9DsThwVJsbn8jazlJuTn2W9+KNN0dyWZ3xCWqFaMWBlqfb4Xvd+Cob5qIyiBZNNOQ+c7lY4EDLA/ETC9BuEFlbK+fm1Wf7ZxGAwavXWFteqikyZsNhoKf3U2uA3fi2Vlds9+Fm9ht/FKlkT9s2a7HyeXGJqK2Vc/Pis/2K95tqxTbCZzewfvtEuux87ZBbpe8vdTcj6gdRlY0AAAAASUVORK5CYII=",{frameWidth:28,frameHeight:28}),this.load.spritesheet(a.images.mob2,"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAAAgCAYAAABEmHeFAAAAAXNSR0IArs4c6QAABOpJREFUeJztnD1oI0cYhl9JCZKswiiWOMUEbE6N0xlxlTk4OBOblIZccQ4pUqQIHKRwmqtSpRSkS2FIjoCdUqW5Cz4wCUq3XJWoWYhJ2KxZmUVw+sPklELMenc9K+3PzH6KMy8ItD/a59t3dnZmZ74VoKT0P1aGOoA4qteqE/ZdN62Me5mtu818alGfv0j+W9QBxGGXG0V8+PEWtF9+B1qY7De3cXLUvt5Hq05kxUDNZzGw78r/ZPxs3AD2m9vY2FtFvVad7De3UW4UnY+/QETJf/KdloH95jbaz19hubIkA7lQfHcMyn8x/EgVgNoAANc136VCKe98vzRe31q+8l88P3ILQG0A06g/BgBP0wcAWTOXSh+ciq/8F8uPXAFEBxBW9Vp1srG36in8cqOIO2tl7r63je+X8l8MP3QFoDSANf1PH+WcdYVS3sMulPJYrixhfWdFeD+Yms9iUP6L54eqAJQGMPY3X1Zw98lo5r6sK7BcWRIWAzXfHYPyXzx/bgWgNoAd7+6TET578Pbcfd39YVGi5Cv/5fJDtQBUBtRr1cn6zkrkY7K7YdKLgJrPpPyXx59ZAagNAICt3U3PcqdloNMyApdFi5Kv/JfPnzsTvLW76XnwYrCNvVXusmgxNrv7pcVdFL7yXy5/bgWgNoCnzw8+xV8f/Q0AeG/tXXzb/P7W8pX/cvmxcoGoDfji/tf48eEHAIDHL7/Dz+9Uuf3jS+M1ssjdWP9f5yv/xfFjVYC0DNBNK8OSnfyzn49f/hT4u1F/jF53kHhSiJofJOW/OP7MCkBtANPJUdvJdSmU8p5m//DsylP4bIZUpKj4yn/5/FDDoCdHbYz6Y+fgG3urzsd/9xFtgG5aGVsbotcdYGt30xMHMO0bH55dedi97gC2NhRS+NR8QPkvkx8qQHcWYvv5KwDe8WZWC0UbwBvCe1P7B8A058WvcqMIAMLMp+a741D+y+HP3InSAJbnDuBG88/SgP3rgevmP2kM1HwWg3+d8l8sP/AZIEkAaCR7K4ixecefxQamd8ZedxAHuzB8dwyA8l8mn1sBqA0Argv94twOvY0lhy1XlhJfBJR85X96/MAWgNoAdmxbG4bedmetjKePcvjqWRziYvGV/+nwAysApQG6aWXq2rT/6y/Aeq06YVz/LOjh2RVwdgXc8+4f9SKg5gPK/7T4gRvYAxgvAPadGwCAT+69cR5EeMdIIvZiSJDYiMjFuQ1bG6LcKAodlUmLr/xPhx84D6CbViboR2wM2i82Hu0eopP5LwU8+WdE03pHVjRf+Z8OP/Y7waICkKFRfwxbGzpDhrLFS8dNi+9PB6bwn/L8eYpS/pH/FoUNzbn1269/xg4gjhr33w/cxiaD1ndWkDVzwvNxdNPK+PPReZ4AkMIHpud/cW47bF5rIMv/RTn/IEUt/8QtQKdlIGvmbgQl6wL0a9Qfo9MyPPxed+AMBcpiz0o56LQMpwsjmq+bVub44HTmPp2WId1/qvPnxZGk/ENng/rv/qP+GH+8uHQAxwenzth1oZTHxbntPIDIVK87QLlRxPHBqTMTKlu6aWXwAhPGc4/Jy0gG4/Hr2s25AneZ6D9YUvmU5+9W0vIPXTvZ07d77Jl3cfuDkDkSMS8Wt2T+V45/PJ4Xi2h+FLYMftQYFrX8QyfDRQkwahCKr/hU/H8BzXeMm1Jgfp0AAAAASUVORK5CYII=",{frameWidth:32,frameHeight:32}),this.load.spritesheet(a.images.mob3,"data:image/png;base64,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",{frameWidth:32,frameHeight:32}),this.load.spritesheet(a.images.mob4,"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAAAgCAYAAABEmHeFAAAAAXNSR0IArs4c6QAABXhJREFUeJztXE2L4kgYfrKILKg0CmGcwxwGe5fFU057cZu9jf9hL+u1/4NzWv/DXN2f0Xtr0l765EmGWcMe5hIItMgkMIiQPWjZZT4qValKSkkeCKidzvO89bxvfSUK1KhRYRi6BdSoIYpB3wx5znNcLzO/G7oF1Lg+6PKf8P772+9wV6vM8++AMEuDkEBhAS9eIUVQ9QK8mgRU6P+gb4a8vCIauMUVJUAEeQwgUJkMdQLyQ4WGvNzOboeJv5UvABkBADJFFKmB6FClARAvQBVJeK0JCMj7P+ib4bx9g0GzGbv22XnU33n5f+AVsVguYxePHklYBwHm7RvuXjMJssm/DoK81DENds/k1mH3TOnYae48CaiCH8jvvywGfTO0eyZGlnX+ebOJQbOJkWVhZFkYNJtnGnh9z1wEEwH94fDMAFJt/eEQAOCuVnB2u9PntAAVCbhYLnP1ACqTP28POG/fYNLPXpCxkCd+4LUDyssv6/9tq4Wp0cCsb3LzDyLnOrsdHhYLzMJ9/OSnR8zbN4cCWa3wsNlg3O1yx5dYACoFkP/Ja76KApyFe+lpgEwC3rZauZNQRwdUZgLyYB0EydxHTPwt5sslRpaF8bEdgIPv04zYubZBZQTk7XVUFqDs/FM2ASf+9vCZhh5QtgMC5BNQxgPH9Qy8fXuawn3+8h6//Pxf7PXE38LOMUXOXANEhX/+8j7x9cTf5pqj84DHgMVyif5wiHG3q6QA6ffOboe/FwvcvXix46enxxP3oNnEw2Zzdi2ioegEZMUvwy3rv4rRlwZJ+OhrGvRInMXPvQjOK0AWVSxAGpcQPw1R/3Xfi8niFy4A3ahiAdIoO37dGPTN8M/RKPO8efvm7D3vuiezAIoWcG2oEzAZRfrvrlaYGunL1anRiG2T8o6+XCNAkQKycAkG6MQlxK/Df7IOc1zPuHvxMO52YffMxGPc7cI9bgCIIjUqshPhuJ5xB4R2z8SYcSG3oC0wcu2p0UidhxMD6CmI6gKcPT0yzysjAcuMX5f/9AZEVAP5PK0YCbfITbnYlcoWkIaqF2BVEpAFcu+EcN62WgddjCkm4ea9+ca8D1CGgCguxYA6AfX4T2NkWbCP7Xrbap146YccCeyeedLm7HYHrcf7LywwC6AMASxUuQCBaiRgTL/rGdH7MDR3EmcaeNog5mTZAlioYgHSqEICsjSQKWV0epmF6INxLCTuAhHBtAARyGwDJjUWywByJGFqNKSehBxZFuyeeUp+8gRi0h1hAqKTFIsoLiF+nf7TSNvVIfE+bDbSoy1zG7QMAUmoegFWKQHT4LieMQv3eNhsEnt/u2diFu6xDgKpR7JTC6AsASxUsQBpVCEBeTSkgWiY+NvTAZyvwbI6IeYIUIaALO4qFiBQbPz3nQ73Vzp1+U9r+OvrV6aG6EgsMg3lWpzcdzrhx3fveE49gTQCeZBM9vsAaYguCO2eecYNvO7J33c64adv34S+Bz01Gqlbm3cv3tniGHhtfPI49Czc40PwHYQ3jwZV8fNyRqHTfyC7DVga1kGAZ99HWptzP58uIoDuAVSYIGsAgLNGEElCFQkY5RfVoDp+Uej2n2j4EHzHH2/eHN5zTDOVFYCIgOgwfCkGyGgQTUDV/LrjJxp0+U+DTN+Ijixk8XP/MJbjesanw0tuAaqehyE3olgGJM1/VZn/T+tHfOTVWtCiPC1+Fp+q+IkGXf7ToGI4rSt+bbcBxOf8NP/xnNioK/zLcEkCaBFFgceApAZ/9n0AkDY/moBZiGopMgFZiaYifhq6/GfoOGl59v1EHaw2UPZtnaydBVUG8PLp5r0UHap501C2/yI6yuKuUePqwKwMFT+olASRX0eo+Wv+Ivn/B9wM1cehWIzYAAAAAElFTkSuQmCC",{frameWidth:32,frameHeight:32}),this.load.spritesheet(a.images.lion,l,{frameWidth:48,frameHeight:64}),this.load.spritesheet(a.images.lion,"data:image/png;base64,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",{frameWidth:32,frameHeight:32}),this.load.spritesheet(a.images.clawWhite,"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAgCAYAAADaInAlAAAAAXNSR0IArs4c6QAAATVJREFUeJztmUESgyAMRcUDeNueorf1ANJVZ6wNCAIJ6Hu7siCZ/J80jNMEAABQht9Wb50DGOO31R+NIJ3BjenRBBgwzNzqYqnoGkJIMdy8OEwgU90Abl5cylkrEDuPIgOcFdpqCkhgDJkiA/Rc1F7z6o1mO0CvYIxfhjcAgpbR1AAWC2HIEBhFpvoSqLn4IWo5lw3wLX6oo1t3f078vVE0n6QjUPwK2P+2fvZJpmBKxLlkAL+tPtZJ1t2fk1dBDu9adw1FbMnS+AYQujMWv0EOf+KPaoisCXC2YUujV6Pzz0Z/7c538/I6ntW6v1uudJ51fK3Ov70BYsVPOWsZX0P8kMiPEd86/iji394M2nSwcIqCIr4CiP9gUkd+7LwwfvL/PeIrYP2BJzYNNOIDAAAAAADU4wMSOAr1WKgYWQAAAABJRU5ErkJggg==",{frameWidth:32,frameHeight:32}),this.load.spritesheet(a.images.clawYellow,"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAgCAYAAADaInAlAAAAAXNSR0IArs4c6QAAATtJREFUeJztmTEOgzAMRaESK8fhdB17Oo7DykCnSpQ6ISGJndD3tmaILf9v1xFdBwAAkMa6TJt1DmDMukzb0QjSGdyYGk2AAd08Sl0sFV1DCCnGMM49JpDJboBhnPuQs1IgdhxJBjgrtNUUkMAYMkkGqLmoteZVG8V2gFrBGN80bwAETaOoASwWQpchMIpM9iVQc/FD1HQuG+BTfFdHl+7+mPh7o2g+SVsg+RWw/2397JNMwZTwc8kA6zJtvk6y7v6YvBJyeOW6qyl8S5bGNwDXnb74BXL4Eb9VQ0RNgLMNWxq9Gp1/Nvpzd/4wzs/jWa77q+VK51nH1+r82xvAV/yQs5LxNcR3ifw34lvHb0X825tBmwoWTlFQxFcA8f+Y0JHvO0+MH/x/j/gKWH/g8U0DjfgAAAAAAAD5eAN0KLM4MNO71wAAAABJRU5ErkJggg==",{frameWidth:32,frameHeight:32}),this.load.spritesheet(a.images.catnip,"data:image/png;base64,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",{frameWidth:64,frameHeight:64}),this.load.spritesheet(a.images.expUp,"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAApVJREFUWIXtlkFoE0EUhv9o2BwUoaWbbIuFrSsx8RBbKN60gVwjCj14FQIKgkIvvfViPalg0CKYkxHxEIyH4MGDhUQvEirVHuoaaJuDVBNBEIqwRVkvnU3e7sxk1wRU8B1n5p/vfzszbx/wr4Shqbahqfag9fuCCGqxMfg1wdOnF9sePdeAoan249gYd+P80EhPE4am2nquzp3Tc3Wi9xgwNNV+f/kKAODSgUMkk9XdXTIugl990AYAWNO3iL7ZbJJxAAi7xSzz2s4OkoqC2sHOl5hpbcsSJ5l/ePcSx06chn627cxXF6IAgEiXJuTOfLVcduBTikIAM61tbHz+EgInWOaVV80OXNfJmupC1KP3HIEIHp2dFafeFSJ4apy/nhjIF4t9wW8uPQwE9xiQwZP37vY0IIPfuRAVGzA01c4PjSC7vk4umhsuO389V8eL67pz0Xhwnt75AlOKgqOjHbFfOAtd14neDxxwPcPa3hMMCmeRXmwHggN7z7C7qLAiFATerWdFyA/cMcDbyC98kPr/IY2/oh8wGxP99QPL3nsi7AcqJX79rJTGffUDqYLFnUsVrN79gLk5BwC4fy1EMmm8/UHGRfD5tSwAIHbxO9F/3bDIOMDpB1jmn8yPGE0chtnoLEnEt2SJk8xbKz8Rm96P5PnOfDUT8WhIP2BuzqGx8sSBxyeJPyTiW9L/wfxaFs9flx34sEGB1Yy3NniOQARH+Bw/bVeI4CfVLHc9MVB7lO8LXlwqBYJ7DMjgiSO3exqQwW+knokNsMt3/NQbetFccNn5pwoWnp75hmpGDJf2A/HJMPmf+4WzGDYiRO8HDrieodmY+C04i/RyMDjA6QdYEQoC79azIuQH7hjgbeQXPkj9H4lfsZtb1w+wfZgAAAAASUVORK5CYII=",{frameWidth:16,frameHeight:16}),this.load.audio(a.audios.beam,u),this.load.audio(a.audios.scratch,c),this.load.audio(a.audios.hitMob,p),this.load.audio(a.audios.growl,f),this.load.audio(a.audios.explosion,b),this.load.audio(a.audios.expUp,P),this.load.audio(a.audios.hurt,w),this.load.audio(a.audios.nextLevel,v),this.load.audio(a.audios.gameOver,R),this.load.audio(a.audios.gameClear,y),this.load.audio(a.audios.pauseIn,I),this.load.audio(a.audios.pauseOut,U),this.load.bitmapFont(a.fonts.pixelFont,"data:image/png;base64,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",d)}create(){this.add.text(20,20,"Loading game..."),this.scene.start(s),this.anims.create({key:a.anims.mob1,frames:this.anims.generateFrameNumbers(a.images.mob1),frameRate:12,repeat:-1}),this.anims.create({key:a.anims.mob2,frames:this.anims.generateFrameNumbers(a.images.mob2),frameRate:12,repeat:-1}),this.anims.create({key:a.anims.mob3,frames:this.anims.generateFrameNumbers(a.images.mob3),frameRate:12,repeat:-1}),this.anims.create({key:a.anims.mob4,frames:this.anims.generateFrameNumbers(a.images.mob4),frameRate:12,repeat:-1}),this.anims.create({key:a.anims.lion,frames:this.anims.generateFrameNumbers(a.images.lion),frameRate:12,repeat:-1}),this.anims.create({key:a.anims.lionIdle,frames:this.anims.generateFrameNumbers(a.images.lion,{start:0,end:0}),frameRate:1,repeat:0}),this.anims.create({key:a.anims.player,frames:this.anims.generateFrameNumbers(a.images.player),frameRate:12,repeat:-1}),this.anims.create({key:a.anims.playerIdle,frames:this.anims.generateFrameNumbers(a.images.player,{start:0,end:0}),frameRate:1,repeat:0}),this.anims.create({key:a.anims.explode,frames:this.anims.generateFrameNumbers(a.images.explosion),frameRate:20,repeat:0,hideOnComplete:!0}),this.anims.create({key:a.anims.scratchWhite,frames:this.anims.generateFrameNumbers(a.images.clawWhite),frameRate:20,repeat:0,hideOnComplete:!0}),this.anims.create({key:a.anims.scratchYellow,frames:this.anims.generateFrameNumbers(a.images.clawYellow),frameRate:20,repeat:0,hideOnComplete:!0}),this.anims.create({key:a.anims.catnip,frames:this.anims.generateFrameNumbers(a.images.catnip),frameRate:20,repeat:-1}),this.anims.create({key:a.anims.expRed,frames:this.anims.generateFrameNumbers(a.images.expUp,{start:0,end:0}),frameRate:20,repeat:0}),this.anims.create({key:a.anims.expBlue,frames:this.anims.generateFrameNumbers(a.images.expUp,{start:1,end:1}),frameRate:20,repeat:0}),this.anims.create({key:a.anims.expYellow,frames:this.anims.generateFrameNumbers(a.images.expUp,{start:2,end:2}),frameRate:20,repeat:0}),this.anims.create({key:a.anims.expGreen,frames:this.anims.generateFrameNumbers(a.images.expUp,{start:3,end:3}),frameRate:20,repeat:0})}}const x={width:800,height:600},k={parent:"game-container",type:Phaser.AUTO,width:x.width,height:x.height,backgroundColor:"#028af8",scene:[E,n],pixelArt:!0,physics:{default:"arcade",arcade:{debug:"true"==={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1}.DEBUG}}};new t.Game(k);
