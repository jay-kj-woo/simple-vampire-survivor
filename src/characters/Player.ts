import { ASSET_KEYS } from '@config/assetKeys';
import { CONFIG } from '@config/gameConfig';
import { Physics, Scene } from 'phaser';
import { Vector } from '../types/vector';

export default class Player extends Physics.Arcade.Sprite {
  speed: number = 1;
  vector: Vector = { x: 0, y: 0 };

  constructor(scene: Scene) {
    // 화면의 가운데에 player를 추가해줍니다.
    // scene.add.existing : scene에 오브젝트를 추가
    // scene.physics.add.existing : scene의 물리엔진에 오브젝트를 추가

    super(scene, CONFIG.width / 2, CONFIG.height / 2, ASSET_KEYS.images.player);

    // scene.add.existing(this);
    // scene.physics.add.existing(this);
    // scale 프로퍼티를 조절해 크기를 조절할 수 있습니다. (디폴트: 1)
    this.scale = 2;

    // depth를 조절해 어떤 오브젝트가 앞에 오고 뒤에 올지 설정할 수 있습니다.
    // CSS의 z-index와 비슷한 개념입니다. (디폴트: 0)
    this.setDepth(20);

    this.setSpeed(2);
  }

  setPlayerPhysics() {
    // 해당 오브젝트가 물리적으로 얼만큼의 면적을 차지할 지 설정하는 함수입니다.
    // 디폴트로 이미지 사이즈로 설정되는데, 그러면 추후 몹을 추가했을 때 너무 잘 부딪히는 느낌이 드므로 원본 이미지보다 약간 작게 설정해주었습니다.
    // this.setBodySize(28, 32);
    this.setBodySize(28, 32);
  }

  setSpeed(speed: number) {
    this.speed = speed;
  }

  setVector(vector: Vector) {
    this.vector.x = vector.x;
    this.vector.y = vector.y;
  }

  move() {
    this.x += this.vector.x * this.speed;
    this.y += this.vector.y * this.speed;
    if (this.vector.x < 0) {
      this.setFlipX(false);
    }
    if (this.vector.x > 0) {
      this.setFlipX(true);
    }
  }
}
