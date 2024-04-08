import Player from '@characters/Player';
import { ASSET_KEYS } from '@config/assetKeys';
import { SCENE_KEYS } from '@config/sceneKeys';
import { Scene, Sound } from 'phaser';
import { setBackground } from '@utils/backgroundManager';

export class Game extends Scene {
  player: Player;
  beamSound: Sound.BaseSound;
  scratchSound: Sound.BaseSound;
  hitMobSound: Sound.BaseSound;
  growlSound: Sound.BaseSound;
  explosionSound: Sound.BaseSound;
  expUpSound: Sound.BaseSound;
  hurtSound: Sound.BaseSound;
  nextLevelSound: Sound.BaseSound;
  gameOverSound: Sound.BaseSound;
  gameClearSound: Sound.BaseSound;
  pauseInSound: Sound.BaseSound;
  pauseOutSound: Sound.BaseSound;

  constructor() {
    super(SCENE_KEYS.game);
  }

  create() {
    // 사용할 sound들을 추가해놓는 부분입니다.
    // load는 전역적으로 어떤 scene에서든 asset을 사용할 수 있도록 load 해주는 것이고,
    // add는 해당 scene에서 사용할 수 있도록 scene의 멤버 변수로 추가할 때 사용하는 것입니다.
    this.sound.pauseOnBlur = false;
    this.beamSound = this.sound.add(ASSET_KEYS.audios.beam);
    this.scratchSound = this.sound.add(ASSET_KEYS.audios.scratch);
    this.hitMobSound = this.sound.add(ASSET_KEYS.audios.hitMob);
    this.growlSound = this.sound.add(ASSET_KEYS.audios.growl);
    this.explosionSound = this.sound.add(ASSET_KEYS.audios.explosion);
    this.expUpSound = this.sound.add(ASSET_KEYS.audios.expUp);
    this.hurtSound = this.sound.add(ASSET_KEYS.audios.hurt);
    this.nextLevelSound = this.sound.add(ASSET_KEYS.audios.nextLevel);
    this.gameOverSound = this.sound.add(ASSET_KEYS.audios.gameOver);
    this.gameClearSound = this.sound.add(ASSET_KEYS.audios.gameClear);
    this.pauseInSound = this.sound.add(ASSET_KEYS.audios.pauseIn);
    this.pauseOutSound = this.sound.add(ASSET_KEYS.audios.pauseOut);

    // player를 m_player라는 멤버 변수로 추가합니다.
    this.player = new Player(this);
    this.addPlayer(this.player);

    // PlayingScene의 background를 설정합니다.
    setBackground(this, ASSET_KEYS.images.background1);
  }

  addPlayer(player: Player) {
    this.add.existing(player);
    this.physics.add.existing(player);
    player.setPlayerPhysics();
  }
}
