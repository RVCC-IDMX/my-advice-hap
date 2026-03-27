import { advice } from './data.js';

export function getAdviceByMood(mood) {
  return advice.filter((item) => item.mood === mood);
}
