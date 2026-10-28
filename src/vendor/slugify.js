/*
 * ПОХОДЖЕННЯ: сторонній код зі Stack Overflow, адаптований.
 * Автор:     Peter Boughton (https://stackoverflow.com/users/9360/peter-boughton)
 * Джерело:   https://stackoverflow.com/a/1054862
 *            (питання "How to convert a Title to a URL slug in jQuery?")
 * Ліцензія:  CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/)
 * Зміни:     функцію перейменовано на slugify, параметр Text -> text,
 *            додано CommonJS-експорт, прибрано console.log з прикладу.
 * Умови:     зазначення авторства, посилання на ліцензію, позначення змін;
 *            адаптований фрагмент поширюється на умовах CC BY-SA 4.0 (ShareAlike).
 */

'use strict'

function slugify (text) {
  return text.toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

module.exports = slugify
