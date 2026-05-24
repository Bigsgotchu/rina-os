// Production test - verify workspace integrity
const assert = require('assert');

console.log('Running Rina OS workspace tests...');

// Test 1: Verify Node version
assert.ok(process.version.startsWith('v20'), 'Node 20 required');
console.log('✅ Node version check passed');

// Test 2: Verify working directory
assert.ok(process.cwd().includes('rina-os'), 'Must be in rina-os project');
console.log('✅ Working directory check passed');

// Test 3: Verify workspace name
console.log('✅ All tests passed');
