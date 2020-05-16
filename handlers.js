const getItem = (req, res) => {
  console.log('##### Getting item')
  res.json({
    foo: 'bar'
  })
}

const addItem = (req, res) => {
  console.log('##### Adding item')
  res.json({
    foo: 'bar'
  })
}

module.exports = {
  getItem,
  addItem
}
