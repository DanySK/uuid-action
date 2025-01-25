const core = require('@actions/core');
const { uuidv7 } = require('uuidv7');

async function run() {
  try {
    let uuid = uuidv7();
    core.setOutput('uuid', uuid);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
