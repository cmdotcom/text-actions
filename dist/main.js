"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core = require('@actions/core');
const text_sdk_1 = require("@cmdotcom/text-sdk");
async function run() {
    const from = core.getInput('from');
    const to = core.getInput('to');
    const message = core.getInput('message');
    const productToken = core.getInput('CM_PRODUCT_TOKEN') || process.env.CM_PRODUCT_TOKEN;
    core.debug('Sending Message');
    const messageApi = new text_sdk_1.MessageApiClient(productToken);
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
    }
    catch ({ message }) {
        core.error('Failed to send message', message);
        core.setFailed(message);
    }
}
module.exports = execute;
execute();
