export const media = () => {
  const width = window.innerWidth;
  return width < 768 ? "mobile" : width < 1204 ? "tablet" : "desktop";
};
