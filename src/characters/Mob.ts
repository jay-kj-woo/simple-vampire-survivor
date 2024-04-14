import { ASSET_KEYS } from '@config/assetKeys';
import { Physics, Scene } from 'phaser';

export type MobsKey = 'mob1' | 'mob2' | 'mob3' | 'mob4' | 'lion';
type MobData = {
  texture: string;
  animKey: string;
  initialHp: number;
  dropRate: number;
  bodysize: { width: number; height: number };
};
const MOBS_DATA: Record<MobsKey, MobData> = {
  mob1: {
    texture: ASSET_KEYS.images.mob1,
    animKey: ASSET_KEYS.anims.mob1,
    initialHp: 1,
    dropRate: 0.1,
    bodysize: { width: 24, height: 14 },
  },
  mob2: {
    texture: ASSET_KEYS.images.mob2,
    animKey: ASSET_KEYS.anims.mob2,
    initialHp: 2,
    dropRate: 0.2,
    bodysize: { width: 24, height: 32 },
  },
  mob3: {
    texture: ASSET_KEYS.images.mob3,
    animKey: ASSET_KEYS.anims.mob3,
    initialHp: 3,
    dropRate: 0.3,
    bodysize: { width: 24, height: 32 },
  },
  mob4: {
    texture: ASSET_KEYS.images.mob4,
    animKey: ASSET_KEYS.anims.mob4,
    initialHp: 4,
    dropRate: 0.4,
    bodysize: { width: 24, height: 32 },
  },
  lion: {
    texture: ASSET_KEYS.images.lion,
    animKey: ASSET_KEYS.anims.lion,
    initialHp: 5,
    dropRate: 0.5,
    bodysize: { width: 40, height: 64 },
  },
};

export default class Mob extends Physics.Arcade.Sprite {
  animKey: string;
  initialHp: number;
  dropRate: number;
  id: MobsKey;
  speed: number = 1;

  constructor({
    scene,
    x,
    y,
    id,
    initialHp,
    dropRate,
  }: {
    scene: Scene;
    x: number;
    y: number;
    id: MobsKey;
    initialHp?: number;
    dropRate?: number;
  }) {
    const {
      texture,
      initialHp: defaultInitialHp,
      dropRate: defaultDropRate,
    } = MOBS_DATA[id];

    super(scene, x, y, texture);
    this.id = id;
    this.play(ASSET_KEYS.anims[id]);
    this.setDepth(10);
    this.initialHp = initialHp || defaultInitialHp;
    this.dropRate = dropRate || defaultDropRate;
    this.setSpeed(50);
    this.scale = 2;
  }

  setMobPhysics() {
    const mob = MOBS_DATA[this.id];
    this.setBodySize(mob.bodysize.width, mob.bodysize.height);
  }

  setSpeed(speed: number) {
    this.speed = speed;
  }

  facePlayer(player: Physics.Arcade.Sprite) {
    if (this.x < player.x) {
      this.setFlipX(true);
    } else {
      this.setFlipX(false);
    }
  }

  moveToPlayer(scene: Scene, player: Physics.Arcade.Sprite) {
    scene.physics.moveToObject(this, player, this.speed);
  }
  //   move() {
  //     this.x += this.vector.x * this.speed;
  //     this.y += this.vector.y * this.speed;
  //     if (this.vector.x < 0) {
  //       this.setFlipX(false);
  //     }
  //     if (this.vector.x > 0) {
  //       this.setFlipX(true);
  //     }
  //   }
}
