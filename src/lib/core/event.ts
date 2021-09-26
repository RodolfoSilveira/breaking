export const getFont = (font = 'Roboto') => {
  const fallbackFonts =
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";

  return `${font}, ${fallbackFonts}`;
};
