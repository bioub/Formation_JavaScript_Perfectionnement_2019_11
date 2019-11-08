export function timeout(delayMs, ...args) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(args);
    }, delayMs);
  });
}
