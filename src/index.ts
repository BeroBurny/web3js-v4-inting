import { eth, utils } from 'web3';

const to = '0x1e0e2323F326199213ED44Ab1E1f91fc2E4EC64e';

// As string as there is some strange behavior with utils.toWei
const numbers = [
  '1',
  '0.1',
  '0.01',
  '0.001',
  '0.0001',
  '0.00001',
  '0.000001',
  '0.0000001',
];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Using Number as value
 */
numbers.forEach((ether) => {
  try {
    utils.toWei(Number(ether), 'ether');
    console.log('\x1b[32m', `[toWei] Number works with: ${ether}`);
  } catch (e) {
    console.log('\x1b[31m', `[toWei] Number failed with: ${ether}`);
  }
});

/**
 * Using String as value
 */
numbers.forEach((ether) => {
  try {
    utils.toWei(ether, 'ether');
    console.log('\x1b[32m', `[toWei] String works with: ${ether}`);
  } catch (e) {
    console.log('\x1b[31m', `[toWei] String failed with: ${ether}`);
  }
});

console.log();
console.log();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Using Hex as value
 */
numbers.forEach((ether) => {
  try {
    const value = utils.toHex(utils.toWei(ether, 'ether'));
    new eth.accounts.Transaction({ to, value });
    console.log('\x1b[32m', `[Transaction] Hex works with: ${ether}`);
  } catch (e) {
    console.log('\x1b[31m', `[Transaction] Hex failed with: ${ether}`);
  }
});

/**
 * Using BigInt as value
 */
numbers.forEach((ether) => {
  try {
    const value = BigInt(utils.toWei(ether, 'ether'));
    new eth.accounts.Transaction({ to, value });
    console.log('\x1b[32m', `[Transaction] BigInt works with: ${ether}`);
  } catch (e) {
    console.log('\x1b[31m', `[Transaction] BigInt failed with: ${ether}`);
  }
});

/**
 * Using number as value
 */
numbers.forEach((ether) => {
  try {
    const value = Number(utils.toWei(ether, 'ether'));
    new eth.accounts.Transaction({ to, value });
    console.log('\x1b[32m', `[Transaction] Number works with: ${ether}`);
  } catch (e) {
    console.log('\x1b[31m', `[Transaction] Number failed with: ${ether}`);
  }
});

/**
 * Using sting as value
 */
numbers.forEach((ether) => {
  try {
    const value = utils.toWei(ether, 'ether');
    new eth.accounts.Transaction({ to, value });
    console.log('\x1b[32m', `[Transaction] String works with: ${ether}`);
  } catch (e) {
    console.log('\x1b[31m', `[Transaction] String failed with: ${ether}`);
  }
});
