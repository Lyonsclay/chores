const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'BACKEND_URL': 'https://api.graph.cool/simple/v1/cj3ksckguee5p01616fiw2m4q',
  // 'BACKEND_URL': prod ? 'https://api.example.com' : 'https://localhost:8080'
}
