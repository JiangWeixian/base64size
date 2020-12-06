/**
 * @description compute base64 string original filesize
 * @returns bytes
 */
export function base64Size(base64Str: string) {
  /**
   * @todo 
   *  -`==` y = 2
   *  - `=` y = 1
  */
  return base64Str.length * (3 / 4) - 2;
}
