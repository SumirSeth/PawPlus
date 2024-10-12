export const useUseVisibilityState = () => {
  return useState('isElementVisible', () => false);
}
