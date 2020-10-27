const server = require('./server')
const chalk = require('chalk')

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
  console.log(chalk.blue(`>> [Port ${PORT}] I'm listening...`))
}) 