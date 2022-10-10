// Copyright IBM Corp. 2015,2017. All Rights Reserved.
// Node module: loopback-boot
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

module.exports = async function requireNodeOrEsModule(sourceFile) {
  const exports = await requireModule(sourceFile);
  return exports && exports.__esModule ? exports.default : exports;
};

async function requireModule(sourceFile) {
  return ~sourceFile.indexOf('.mjs') ? (await import(sourceFile)).default : require(sourceFile);
}