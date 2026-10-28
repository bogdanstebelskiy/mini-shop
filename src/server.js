/*
 * ПОХОДЖЕННЯ: власний код.
 * Автор:     Bohdan Stebelskyi, 2026.
 * Ліцензія:  пропрієтарна (див. LICENSE), усі права застережено.
 */

'use strict'

const http = require('node:http')
const escapeHtml = require('./vendor/escape-html')
const formatPrice = require('./lib/format-price')
const { listProducts, findProductBySlug } = require('./lib/catalog')

const PORT = Number(process.env.PORT) || 3000
const PRODUCT_PATH_PREFIX = '/products/'
const HTML_HEADERS = { 'Content-Type': 'text/html; charset=utf-8' }

function renderPage (title, body) {
  return `<!doctype html><html lang="uk"><meta charset="utf-8">` +
    `<title>${escapeHtml(title)}</title><body>${body}</body></html>`
}

function renderProductList () {
  const items = listProducts()
    .map((p) => `<li><a href="${PRODUCT_PATH_PREFIX}${p.slug}">${escapeHtml(p.name)}</a></li>`)
    .join('')
  return renderPage('Mini Shop', `<h1>Mini Shop</h1><ul>${items}</ul>`)
}

function renderProduct (product) {
  const body = `<h1>${escapeHtml(product.name)}</h1>` +
    `<p>Ціна: ${escapeHtml(formatPrice(product.priceKopecks))}</p>` +
    '<a href="/">Назад</a>'
  return renderPage(product.name, body)
}

function handleRequest (req, res) {
  if (req.url === '/') {
    res.writeHead(200, HTML_HEADERS)
    res.end(renderProductList())
    return
  }

  const slug = req.url.startsWith(PRODUCT_PATH_PREFIX)
    ? decodeURIComponent(req.url.slice(PRODUCT_PATH_PREFIX.length))
    : null
  const product = slug && findProductBySlug(slug)

  if (!product) {
    res.writeHead(404, HTML_HEADERS)
    res.end(renderPage('Не знайдено', '<h1>404</h1>'))
    return
  }

  res.writeHead(200, HTML_HEADERS)
  res.end(renderProduct(product))
}

if (require.main === module) {
  http.createServer(handleRequest).listen(PORT, () => {
    process.stdout.write(`Mini Shop: http://localhost:${PORT}\n`)
  })
}

module.exports = { handleRequest }
