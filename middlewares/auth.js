function authentication(req, res, next) {
  console.log('auth')
  next()
}

module.exports = authentication