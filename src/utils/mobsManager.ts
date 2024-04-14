import Mob, { MobsKey } from '@characters/Mob';
import { generateRandomPosition } from './math';

interface CustomScene extends Phaser.Scene {
  addMob: (mob: Mob) => void;
}

type PopulateMobsConfig = {
  scene: CustomScene;
  repeatRate: number;
  hp?: number;
  dropRate?: number;
  id: MobsKey;
  speed?: number;
  center: { x: number; y: number };
};
export const populateMobs = ({
  scene,
  center,
  hp,
  dropRate,
  id,
  repeatRate,
}: PopulateMobsConfig) => {
  const timer = scene.time.addEvent({
    delay: repeatRate,
    callback: () => {
      const [x, y] = generateRandomPosition(center.x, center.y);
      const mob = new Mob({
        scene,
        x,
        y,
        id,
        initialHp: hp,
        dropRate,
      });
      scene.addMob(mob);
    },
    loop: true,
  });

  return timer;
};
