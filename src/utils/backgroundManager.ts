import { CONFIG } from '@config/gameConfig';
import { Scene } from 'phaser';

export const setBackground = (scene: Scene, textureKey: string) => {
  return scene.add
    .tileSprite(0, 0, CONFIG.width, CONFIG.height, textureKey)
    .setOrigin(0, 0);
};
