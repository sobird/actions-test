import * as core from '@actions/core';
import * as github from '@actions/github';

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  // console.log(`The event payload: ${payload}`);

  const testState = core.getState('test-state');
  console.log('test-state:', testState)

  core.saveState('test-state', +new Date);
} catch (error) {
  core.setFailed((error as Error).message);
}
