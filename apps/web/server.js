const http = require('http')
const serveHandler = require('serve-handler')

const port = process.env.PORT || 5000
const options = {
  public: './dist',
  rewrites: [{ source: '/*', destination: '/index.html' }],
  headers: [
    {
      source: '**/*.@(jpg|jpeg|gif|png|js|css|woff|webb)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'max-age=31536000',
        },
      ],
    },
    {
      source: '404.html',
      headers: [
        {
          key: 'Cache-Control',
          value: 'max-age=300',
        },
      ],
    },
  ],
}

const server = http.createServer(async (request, response) => {
  return serveHandler(request, response, options)
})

server.listen(port, () => {
  console.log(`Running at http://localhost:${port}`)
})