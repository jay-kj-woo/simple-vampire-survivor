import { Scene } from 'phaser';

import fontPng from '@assets/font/font.png';
import fontXml from '@assets/font/font.xml';

import backgroundImage1 from '@assets/images/background.png';
import backgroundImage2 from '@assets/images/background-2.png';
import backgroundImage3 from '@assets/images/background-3.png';
import beamImage from '@assets/images/beam.png';

import explosionImage from '@assets/spritesheets/explosion.png';
import playerImage from '@assets/spritesheets/player.png';
import expUpImage from '@assets/spritesheets/expUp.png';
import mobImage1 from '@assets/spritesheets/mob1.png';
import mobImage2 from '@assets/spritesheets/mob2.png';
import mobImage3 from '@assets/spritesheets/mob3.png';
import mobImage4 from '@assets/spritesheets/mob4.png';
import lionImage from '@assets/spritesheets/lion.png';
import catnipImage from '@assets/spritesheets/catnip.png';
import clawWhiteImage from '@assets/spritesheets/claw-white.png';
import clawYellowImage from '@assets/spritesheets/claw-yellow.png';

import beamOgg from '@assets/sounds/beam.ogg';
import scratchOgg from '@assets/sounds/scratch.ogg';
import hitMobOgg from '@assets/sounds/hitMob.ogg';
import growlOgg from '@assets/sounds/growl.ogg';
import explosionOgg from '@assets/sounds/explosion.ogg';
import hurtOgg from '@assets/sounds/hurt.ogg';
import expUpOgg from '@assets/sounds/expUp.ogg';
import nextLevelOgg from '@assets/sounds/nextLevel.ogg';
import gameOverOgg from '@assets/sounds/gameover.ogg';
import gameClearOgg from '@assets/sounds/gameClear.ogg';
import pauseInOgg from '@assets/sounds/pauseIn.ogg';
import pauseOutOgg from '@assets/sounds/pauseOut.ogg';

import { ASSET_KEYS } from '../config/assetKeys';
import { SCENE_KEYS } from '../config/sceneKeys';

// 사용할 모든 asset(image, sprite image, audio, font 등)을 load해 놓습니다.
export default class Loading extends Scene {
  constructor() {
    // super에 파라미터로 넘겨주는 string이 해당 scene의 identifier가 됩니다.
    super(SCENE_KEYS.loading);
  }

  preload() {
    // IMAGES
    this.load.image(ASSET_KEYS.images.background1, backgroundImage1);
    this.load.image(ASSET_KEYS.images.background2, backgroundImage2);
    this.load.image(ASSET_KEYS.images.background3, backgroundImage3);
    this.load.image(ASSET_KEYS.images.beam, beamImage);

    // SPRITESHEETS
    this.load.spritesheet(ASSET_KEYS.images.player, playerImage, {
      frameWidth: 32,
      frameHeight: 36,
    });
    this.load.spritesheet(ASSET_KEYS.images.mob1, mobImage1, {
      frameWidth: 28,
      frameHeight: 28,
    });
    this.load.spritesheet(ASSET_KEYS.images.mob2, mobImage2, {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet(ASSET_KEYS.images.mob3, mobImage3, {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet(ASSET_KEYS.images.mob4, mobImage4, {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet(ASSET_KEYS.images.lion, lionImage, {
      frameWidth: 48,
      frameHeight: 64,
    });
    this.load.spritesheet(ASSET_KEYS.images.lion, explosionImage, {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet(ASSET_KEYS.images.clawWhite, clawWhiteImage, {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet(ASSET_KEYS.images.clawYellow, clawYellowImage, {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet(ASSET_KEYS.images.catnip, catnipImage, {
      frameWidth: 64,
      frameHeight: 64,
    });
    this.load.spritesheet(ASSET_KEYS.images.expUp, expUpImage, {
      frameWidth: 16,
      frameHeight: 16,
    });

    // AUDIOS
    this.load.audio(ASSET_KEYS.audios.beam, beamOgg);
    this.load.audio(ASSET_KEYS.audios.scratch, scratchOgg);
    this.load.audio(ASSET_KEYS.audios.hitMob, hitMobOgg);
    this.load.audio(ASSET_KEYS.audios.growl, growlOgg);
    this.load.audio(ASSET_KEYS.audios.explosion, explosionOgg);
    this.load.audio(ASSET_KEYS.audios.expUp, expUpOgg);
    this.load.audio(ASSET_KEYS.audios.hurt, hurtOgg);
    this.load.audio(ASSET_KEYS.audios.nextLevel, nextLevelOgg);
    this.load.audio(ASSET_KEYS.audios.gameOver, gameOverOgg);
    this.load.audio(ASSET_KEYS.audios.gameClear, gameClearOgg);
    this.load.audio(ASSET_KEYS.audios.pauseIn, pauseInOgg);
    this.load.audio(ASSET_KEYS.audios.pauseOut, pauseOutOgg);

    // FONT
    this.load.bitmapFont(ASSET_KEYS.fonts.pixelFont, fontPng, fontXml);
  }

  create() {
    this.add.text(20, 20, 'Loading game...');
    // this.scene.start(SCENE_KEYS.game);

    // MOBS
    this.anims.create({
      key: ASSET_KEYS.anims.mob1,
      frames: this.anims.generateFrameNumbers(ASSET_KEYS.images.mob1),
      frameRate: 12,
      repeat: -1,
    });
    this.anims.create({
      key: ASSET_KEYS.anims.mob2,
      frames: this.anims.generateFrameNumbers(ASSET_KEYS.images.mob2),
      frameRate: 12,
      repeat: -1,
    });
    this.anims.create({
      key: ASSET_KEYS.anims.mob3,
      frames: this.anims.generateFrameNumbers(ASSET_KEYS.images.mob3),
      frameRate: 12,
      repeat: -1,
    });
    this.anims.create({
      key: ASSET_KEYS.anims.mob4,
      frames: this.anims.generateFrameNumbers(ASSET_KEYS.images.mob4),
      frameRate: 12,
      repeat: -1,
    });
    this.anims.create({
      key: ASSET_KEYS.anims.lion,
      frames: this.anims.generateFrameNumbers(ASSET_KEYS.images.lion),
      frameRate: 12,
      repeat: -1,
    });
    this.anims.create({
      key: ASSET_KEYS.anims.lionIdle,
      frames: this.anims.generateFrameNumbers(ASSET_KEYS.images.lion, {
        start: 0,
        end: 0,
      }),
      frameRate: 1,
      repeat: 0,
    });

    // PLAYERS
    this.anims.create({
      key: ASSET_KEYS.anims.player,
      frames: this.anims.generateFrameNumbers(ASSET_KEYS.images.player),
      frameRate: 12,
      repeat: -1,
    });
    this.anims.create({
      key: ASSET_KEYS.anims.playerIdle,
      frames: this.anims.generateFrameNumbers(ASSET_KEYS.images.player, {
        start: 0,
        end: 0,
      }),
      frameRate: 1,
      repeat: 0,
    });

    // EFFECT
    this.anims.create({
      key: ASSET_KEYS.anims.explode,
      frames: this.anims.generateFrameNumbers(ASSET_KEYS.images.explosion),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true,
    });

    // ATTACKS
    this.anims.create({
      key: ASSET_KEYS.anims.scratchWhite,
      frames: this.anims.generateFrameNumbers(ASSET_KEYS.images.clawWhite),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true,
    });
    this.anims.create({
      key: ASSET_KEYS.anims.scratchYellow,
      frames: this.anims.generateFrameNumbers(ASSET_KEYS.images.clawYellow),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true,
    });
    this.anims.create({
      key: ASSET_KEYS.anims.catnip,
      frames: this.anims.generateFrameNumbers(ASSET_KEYS.images.catnip),
      frameRate: 20,
      repeat: -1,
    });

    // EXP UP ITEMS
    this.anims.create({
      key: ASSET_KEYS.anims.expRed,
      frames: this.anims.generateFrameNumbers(ASSET_KEYS.images.expUp, {
        start: 0,
        end: 0,
      }),
      frameRate: 20,
      repeat: 0,
    });
    this.anims.create({
      key: ASSET_KEYS.anims.expBlue,
      frames: this.anims.generateFrameNumbers(ASSET_KEYS.images.expUp, {
        start: 1,
        end: 1,
      }),
      frameRate: 20,
      repeat: 0,
    });
    this.anims.create({
      key: ASSET_KEYS.anims.expYellow,
      frames: this.anims.generateFrameNumbers(ASSET_KEYS.images.expUp, {
        start: 2,
        end: 2,
      }),
      frameRate: 20,
      repeat: 0,
    });
    this.anims.create({
      key: ASSET_KEYS.anims.expGreen,
      frames: this.anims.generateFrameNumbers(ASSET_KEYS.images.expUp, {
        start: 3,
        end: 3,
      }),
      frameRate: 20,
      repeat: 0,
    });
  }
}
