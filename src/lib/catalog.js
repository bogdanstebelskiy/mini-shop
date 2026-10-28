/*
 * ПОХОДЖЕННЯ: власний код.
 * Автор:     Bohdan Stebelskyi, 2026.
 * Ліцензія:  пропрієтарна (див. LICENSE), усі права застережено.
 */

'use strict'

const slugify = require('../vendor/slugify')

const PRODUCTS = [
  { name: 'Laptop Lenovo IdeaPad 5', priceKopecks: 3299900 },
  { name: 'Mechanical Keyboard <RGB>', priceKopecks: 249900 },
  { name: 'USB-C Hub 7 in 1', priceKopecks: 89950 }
]

function withSlug (product) {
  return { ...product, slug: slugify(product.name) }
}

const catalog = PRODUCTS.map(withSlug)

function listProducts () {
  return catalog
}

function findProductBySlug (slug) {
  return catalog.find((product) => product.slug === slug)
}

module.exports = { listProducts, findProductBySlug }
