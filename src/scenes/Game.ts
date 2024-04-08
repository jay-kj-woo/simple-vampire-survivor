import Player from '@characters/Player';
import { ASSET_KEYS } from '@config/assetKeys';
import { SCENE_KEYS } from '@config/sceneKeys';
import { GameObjects, Scene, Sound, Types } from 'phaser';
import { setBackground } from '@utils/backgroundManager';
import { CONFIG } from '@config/gameConfig';

export class Game extends Scene {
  background: GameObjects.TileSprite;
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
  cursorKeys: Types.Input.Keyboard.CursorKeys | null;

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
    this.addBackground();

    // set keyboard cursor keys
    this.cursorKeys = this.input.keyboard?.createCursorKeys() || null;
  }

  addBackground() {
    this.background = setBackground(this, ASSET_KEYS.images.background1);
  }

  update() {
    this.movePlayer();
    this.followCameraOnPlayer();
  }

  movePlayer() {
    if (!this.cursorKeys) {
      return;
    }
    const player = this.player;
    const { left, right, up, down } = this.cursorKeys;
    if (left.isDown || right.isDown || up.isDown || down.isDown) {
      player.play(ASSET_KEYS.anims.player, true);
    } else {
      player.play(ASSET_KEYS.anims.playerIdle, true);
      player.setVector({ x: 0, y: 0 });
    }

    player.setVector({ x: 0, y: 0 });

    if (left.isDown) {
      player.setVector({ x: -1, y: player.vector.y });
    } else if (right.isDown) {
      player.setVector({ x: 1, y: player.vector.y });
    }
    if (up.isDown) {
      player.setVector({ x: player.vector.x, y: -1 });
    } else if (down.isDown) {
      player.setVector({ x: player.vector.x, y: 1 });
    }

    player.move();
  }

  followCameraOnPlayer() {
    this.cameras.main.startFollow(this.player);
    this.background.setX(this.player.x - CONFIG.width / 2);
    this.background.setY(this.player.y - CONFIG.height / 2);
    this.background.tilePositionX = this.player.x - CONFIG.width / 2;
    this.background.tilePositionY = this.player.y - CONFIG.height / 2;
  }

  addPlayer(player: Player) {
    this.add.existing(player);
    this.physics.add.existing(player);
    player.setPlayerPhysics();
  }
}
