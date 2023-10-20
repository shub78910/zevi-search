export const debounce = (func: any, delay: number) => {
  let timeoutId: NodeJS.Timeout;

  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
