import { CONFIG } from '@config/gameConfig';

/**
 * (x, y)로부터 r만큼 랜덤하게 떨어진(각도랜덤) 좌표를 반환합니다.
 * @param {Number} x
 * @param {Number} y
 */
export function generateRandomPosition(x: number, y: number) {
  const randRad = Math.random() * Math.PI * 2;
  const _r =
    Math.sqrt(CONFIG.width * CONFIG.width + CONFIG.height * CONFIG.height) / 2;
  const _x = x + _r * Math.cos(randRad);
  const _y = y + _r * Math.sin(randRad);
  return [_x, _y];
}
