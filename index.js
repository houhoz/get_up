const axios = require('axios')
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
        Authorization: 'token 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',
      },
    })
    console.log('res :>> ', res)
  } catch (error) {
    console.log('error :>> ', error.response.data)
  }
}

addIssue()
