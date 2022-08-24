const axios = require('axios')
const args = require('minimist')(process.argv.slice(2))
const { token = '' } = args
console.log('args :>> ', args)
async function addIssue() {
  try {
    const res = await axios({
      method: 'post',
      url: 'https://api.github.com/repos/houhoz/get_up/issues',
      data: {
        title: 'Creating issue from API',
        body: 'Posting a issue from Insomnia',
      },
      headers: {
        Authorization: `token ${token}`,
      },
    })
    console.log('res :>> ', res)
  } catch (error) {
    console.log('error :>> ', error.response.data)
  }
}

addIssue()
