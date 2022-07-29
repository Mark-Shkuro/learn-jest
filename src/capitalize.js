export const capitalize = (text) => {
    if (text === '') return '';
    const [firstChar, ...otherChars] = text;
    return `${firstChar.toUpperCase()}${otherChars.join('')}`
  };
  