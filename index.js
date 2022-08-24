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
