import { useState } from 'react';
import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('1234567890abcdef', 10);

export const useUniqueId = (): string => {
  const [id] = useState(nanoid());

  return id;
};
