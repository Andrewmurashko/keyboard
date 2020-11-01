const data = [
    {
      ru: { letter: "ё", symbol: "$" },
      en: { letter: "`", symbol: "$" },
      data: "symbol",
    },
    {
      ru: { letter: "1", symbol: "€" },
      en: { letter: "1", symbol: "€" },
      data: "symbol",
    },
    {
      ru: { letter: "2", symbol: '¥' },
      en: { letter: "2", symbol: '¥' },
      data: "symbol",
    },
    {
      ru: { letter: "3", symbol: "£" },
      en: { letter: "3", symbol: "£" },
      data: "symbol",
    },
    {
      ru: { letter: "4", symbol: "₪" },
      en: { letter: "4", symbol: "₪" },
      data: "symbol",
    },
    {
      ru: { letter: "5", symbol: "₣" },
      en: { letter: "5", symbol: "₣" },
      data: "symbol",
    },
    {
      ru: { letter: "6", symbol: "¢" },
      en: { letter: "6", symbol: "¢" },
      data: "symbol",
    },
    {
      ru: { letter: "7", symbol: "¤" },
      en: { letter: "7", symbol: "¤" },
      data: "symbol",
    },
    {
      ru: { letter: "8", symbol: "฿" },
      en: { letter: "8", symbol: "฿" },
      data: "symbol",
    },
    {
      ru: { letter: "9", symbol: "₠" },
      en: { letter: "9", symbol: "₠" },
      data: "symbol",
    },
    {
      ru: { letter: "0", symbol: "₡" },
      en: { letter: "0", symbol: "₡" },
      data: "symbol",
    },
    {
      ru: { letter: "-", symbol: "₢" },
      en: { letter: "-", symbol: "₢" },
      data: "symbol",
    },
    {
      ru: { letter: "=", symbol: "₤" },
      en: { letter: "=", symbol: "₤" },
      data: "symbol",
    },
    {
      ru: { letter: "", symbol: "" },
      en: { letter: "", symbol: "" },
      data: "backspace",
    },
  
    {
      ru: { letter: "RU", symbol: "RU" },
      en: { letter: "EN", symbol: "EN" },
      data: "language",
    },
    {
      ru: { letter: "й", symbol: "<" },
      en: { letter: "q", symbol: "<" },
      data: "symbol",
    },
    {
      ru: { letter: "ц", symbol: ">" },
      en: { letter: "w", symbol: ">" },
      data: "symbol",
    },
    {
      ru: { letter: "у", symbol: "{" },
      en: { letter: "e", symbol: "{" },
      data: "symbol",
    },
    {
      ru: { letter: "к", symbol: "}" },
      en: { letter: "r", symbol: "}" },
      data: "symbol",
    },
    {
      ru: { letter: "е", symbol: "[" },
      en: { letter: "t", symbol: "[" },
      data: "symbol",
    },
    {
      ru: { letter: "н", symbol: "]" },
      en: { letter: "y", symbol: "]" },
      data: "symbol",
    },
    {
      ru: { letter: "г", symbol: "(" },
      en: { letter: "u", symbol: "(" },
      data: "symbol",
    },
    {
      ru: { letter: "ш", symbol: ")" },
      en: { letter: "i", symbol: ")" },
      data: "symbol",
    },
    {
      ru: { letter: "щ", symbol: "+" },
      en: { letter: "o", symbol: "+" },
      data: "symbol",
    },
    {
      ru: { letter: "з", symbol: "-" },
      en: { letter: "p", symbol: "-" },
      data: "symbol",
    },
    {
      ru: { letter: "х", symbol: "/" },
      en: { letter: "(", symbol: "/" },
      data: "symbol",
    },
    {
      ru: { letter: "ъ", symbol: "*" },
      en: { letter: ")", symbol: "*" },
      data: "symbol",
    },
    {
      ru: { letter: ",", symbol: "=" },
      en: { letter: "?", symbol: "=" },
      data: "symbol",
    },
    // ???????????????????????????????????????????????????????????????????????????????????????????
    {
      ru: { letter: "CAPS", symbol: "CAPS" },
      en: { letter: "CAPS", symbol: "CAPS" },
      data: "caps",
    },
    {
      ru: { letter: "ф", symbol: '"' },
      en: { letter: "a", symbol: '"' },
      data: "symbol",
    },
    {
      ru: { letter: "ы", symbol: "'" },
      en: { letter: "s", symbol: "'" },
      data: "symbol",
    },
    {
      ru: { letter: "в", symbol: ":" },
      en: { letter: "d", symbol: ":" },
      data: "symbol",
    },
    {
      ru: { letter: "а", symbol: ";" },
      en: { letter: "f", symbol: ";" },
      data: "symbol",
    },
    {
      ru: { letter: "п", symbol: "," },
      en: { letter: "g", symbol: "," },
      data: "symbol",
    },
    {
      ru: { letter: "р", symbol: "." },
      en: { letter: "h", symbol: "." },
      data: "symbol",
    },
    {
      ru: { letter: "о", symbol: "!" },
      en: { letter: "j", symbol: "!" },
      data: "symbol",
    },
    {
      ru: { letter: "л", symbol: "?" },
      en: { letter: "k", symbol: "?" },
      data: "symbol",
    },
  
    {
      ru: { letter: "д", symbol: "~" },
      en: { letter: "l", symbol: "~" },
      data: "symbol",
    },
    {
      ru: { letter: "ж", symbol: "#" },
      en: { letter: ":", symbol: "#" },
      data: "symbol",
    },
    {
      ru: { letter: "э", symbol: "№" },
      en: { letter: ";", symbol: "№" },
      data: "symbol",
    },
    {
      ru: { letter: "ENTER", symbol: "ENTER" },
      en: { letter: "ENTER", symbol: "ENTER" },
      data: "enter",
    },
    // ????????????????????????????????????????????????????????????????????????????????????????????
    {
      ru: { letter: "SHIFT", symbol: "SHIFT" },
      en: { letter: "SHIFT", symbol: "SHIFT" },
      data: "shift",
    },
    {
      ru: { letter: "я", symbol: "←" },
      en: { letter: "z", symbol: "←" },
      data: "symbol",
    },
    {
      ru: { letter: "ч", symbol: "↑" },
      en: { letter: "x", symbol: "↑" },
      data: "symbol",
    },
    {
      ru: { letter: "с", symbol: "→" },
      en: { letter: "c", symbol: "→" },
      data: "symbol",
    },
    {
      ru: { letter: "м", symbol: "↓" },
      en: { letter: "v", symbol: "↓" },
      data: "symbol",
    },
    {
      ru: { letter: "и", symbol: "™" },
      en: { letter: "b", symbol: "™" },
      data: "symbol",
    },
    {
      ru: { letter: "т", symbol: "©" },
      en: { letter: "n", symbol: "©" },
      data: "symbol",
    },
    {
      ru: { letter: "ь", symbol: "®" },
      en: { letter: "m", symbol: "®" },
      data: "symbol",
    },
    {
      ru: { letter: "б", symbol: "@" },
      en: { letter: ",", symbol: "@" },
      data: "symbol",
    },
    {
      ru: { letter: "ю", symbol: "^" },
      en: { letter: ".", symbol: "^" },
      data: "symbol",
    },
  
    {
      ru: { letter: ".", symbol: "§" },
      en: { letter: "!", symbol: "§" },
      data: "symbol",
    },
    {
      ru: { letter: "↑", symbol: "↑" },
      en: { letter: "↑", symbol: "↑" },
      data: "controlCursor",
    },
    {
      ru: { letter: "+=[]", symbol: "АБВ" },
      en: { letter: "+=[]", symbol: "ABC" },
      data: "lettersOrSymbols",
    },
  
    {
      ru: { letter: "SPACE", symbol: "SPACE" },
      en: { letter: "SPACE", symbol: "SPACE" },
      data: "space",
    },
    {
      ru: { letter: "←", symbol: "←" },
      en: { letter: "←", symbol: "←" },
      data: "controlCursor",
    },
  
    {
      ru: { letter: "↓", symbol: "↓" },
      en: { letter: "↓", symbol: "↓" },
      data: "controlCursor",
    },
    {
      ru: { letter: "→", symbol: "→" },
      en: { letter: "→", symbol: "→" },
      data: "controlCursor",
    },
  ];
  
  export default data;
  