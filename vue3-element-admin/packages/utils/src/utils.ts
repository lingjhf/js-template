
/**
 * 设置一个异步等待时间
 * 
 * @param duration 接受一个毫秒为单位的时间
 * @returns 
 */
export async function sleep(duration: number) {
  return new Promise((resolve, _) => setTimeout(() => resolve(true), duration))
}