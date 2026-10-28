/*
 * ПОХОДЖЕННЯ: код отримано від іншого розробника ("Розробник Б", фрилансер)
 * через месенджер як готовий фрагмент.
 * Ліцензія:  НЕ ВКАЗАНА. Договору про передання майнових прав або
 *            ліцензійного договору немає.
 * Статус:    права на використання НЕ ВИЗНАЧЕНІ. Не використовувати в
 *            комерційному релізі, доки не підписано договір (див. README).
 */

'use strict'

const KOPECKS_IN_HRYVNIA = 100
const CURRENCY_SUFFIX = ' грн'

function formatPrice (kopecks) {
  const hryvnias = Math.floor(kopecks / KOPECKS_IN_HRYVNIA)
  const rest = String(kopecks % KOPECKS_IN_HRYVNIA).padStart(2, '0')
  const grouped = String(hryvnias).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  return grouped + ',' + rest + CURRENCY_SUFFIX
}

module.exports = formatPrice
