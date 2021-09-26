export const base = process.env.REACT_APP_API_BASE_PATH;
const characters = 'characters';

export const CHARACTERS = `${base}/${characters}`;
export const CHARACTERS_BY_ID = (id: number | string) =>
  `${base}/${characters}/${id}`;
