import api from 'services/api';
import { CHARACTERS_BY_ID } from 'constants/endpoints';
import { GET } from 'constants/verbs'

export const handleOnceCharacter = async (id: number | string) => {
  try {
    if (Number(id)) {
      const { data } = await api({
        method: GET,
        url: CHARACTERS_BY_ID(id),
      })
      return data[0];
    }
  } catch (error: unknown) {
    throw new Error('something gave an error');
  }
};
