const { Component } = require('@serverless/core')

const validEnvs = ['dev', 'staging', 'prod']

class Deploy extends Component {
  async default(inputs = {}) {
    const { stage } = inputs
    if (validEnvs.includes(stage)) {
      require('dotenv').config({ path: `${__dirname}/.env-${stage}` })

      const template = await this.load('@serverless/template', stage)
      return await template({ template: 'serverless.yml' })
    } else {
      this.context.log('No environment defined... Choices are staging and prod')
    }
  }

  // Remove will allow the stage to be set on the command line
  // run like so: serverless remove --stage=staging
  async remove(inputs = {}) {
    const { stage } = inputs
    if (validEnvs.includes(stage)) {
      const template = await this.load('@serverless/template', stage)
      return await template.remove()
    }
  }
}

module.exports = Deploy
