import { GameObjects, Scene } from 'phaser';

export const addCharacter = (
  scene: Scene,
  character: GameObjects.Image | GameObjects.Sprite
) => {
  scene.add.existing(character);
};
