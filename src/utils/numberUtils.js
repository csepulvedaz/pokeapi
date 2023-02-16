// Generate a number between min and max, including both min and max
export const randomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
