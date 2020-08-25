const core = require('@actions/core');
import {MessageApiClient} from '@cmdotcom/text-sdk';

async function run() {
  const from: string = core.getInput('from');
  const to: string = core.getInput('to');
  const message: string = core.getInput('message');

  const productToken: string =
    core.getInput('CM_PRODUCT_TOKEN') || process.env.CM_PRODUCT_TOKEN;

  core.debug('Sending Message');

  const messageApi = new MessageApiClient(productToken);

  const result = await messageApi
    .createMessage()
    .setMessage([to], from, message)
    .send();
   
  core.debug('Statuscode from CM.com: ' + result.response.statusCode);
  core.setOutput('reference', result.body.messages[0].reference);

  return result;
}

async function execute() {
  try {
    return await run();
  } catch({ message }) {
    core.error('Failed to send message', message);
    core.setFailed(message);
  }
}

module.exports = execute;

execute();
