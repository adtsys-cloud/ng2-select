const CHAR_MAP: any = {
  Á: 'A', À: 'A', Ã: 'A', Â: 'A',
  É: 'E', È: 'E', Ẽ: 'E', Ê: 'E', Ë: 'E',
  Í: 'I', Ì: 'I', Ĩ: 'I', Î: 'I', Ï: 'I',
  Ó: 'O', Ò: 'O', Õ: 'O', Ô: 'O', Ö: 'O',
  Ú: 'U', Ù: 'U', Ũ: 'I', Û: 'U', Ü: 'U',
  Ç: 'C',
  á: 'a', à: 'a', ã: 'a', â: 'a', ä: 'a',
  é: 'e', è: 'e', ẽ: 'e', ê: 'e', ë: 'e',
  í: 'i', ì: 'i', ĩ: 'i', î: 'i', ï: 'i',
  ó: 'o', ò: 'o', õ: 'o', ô: 'o', ö: 'o',
  ú: 'u', ù: 'u', û: 'u', ü: 'u',
  ç: 'c'
};

const nonASCIIRegexp = /[^\u0000-\u007F]/ig;

export function escapeRegexp(queryToEscape:string):string {
  return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}

export function stripAccents(string:string): string {
  // Used 'uni range + named function' from http://jsperf.com/diacritics/18
  return string
    ? string.replace(nonASCIIRegexp, char => CHAR_MAP[char] || char)
    : '';
}
