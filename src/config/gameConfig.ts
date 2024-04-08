import { Game } from '@scenes/Game';
import Loading from '@scenes/Loading';
import { Types } from 'phaser';

export const CONFIG = {
  width: 800,
  height: 600,
} as const;

const Config: Types.Core.GameConfig = {
  parent: 'game-container',
  type: Phaser.AUTO,
  width: CONFIG.width,
  height: CONFIG.height,
  backgroundColor: '#028af8',

  // 사용할 scene은 config의 scene 프로퍼티의 배열에 추가해줘야 합니다.
  scene: [Loading, Game],

  // pixelArt를 사용할 경우 pixelArt: true로 설정해야 선명하게 보입니다.
  pixelArt: true,

  // 물리엔진은 arcade, matter 등이 있는데 가벼운 arcade를 사용할 것입니다.
  // .env 파일에 DEBUG=true로 설정되어 있으면 디버그 모드로 실행됩니다.
  // 디버그 모드에서는 게임 오브젝트들이 차지하는 면적이 분홍색 경계선으로 표시되고,
  // 움직이는 오브젝트의 경우 방향도 표시되어 더 편하게 개발할 수 있습니다.
  physics: {
    default: 'arcade',
    arcade: {
      debug: import.meta.env.DEBUG === 'true',
    },
  },
};

export default Config;

// //  Find out more information about the Game Config at:
// //  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
// export const config: Types.Core.GameConfig = {
//     type: Phaser.AUTO,
//     width: 1024,
//     height: 768,
//     parent: 'game-container',
//     backgroundColor: '#028af8',
//     scale: {
//       mode: Phaser.Scale.FIT,
//       autoCenter: Phaser.Scale.CENTER_BOTH,
//     },
//     scene: [Loading],
//   };
