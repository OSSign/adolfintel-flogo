// scripts/sign.cjs
const { GetElectronForgeSignerFunction } = require('@ossign/ossign');

module.exports = async function (configuration) {
  const targetPath = configuration.path;
  const signerFunc = GetElectronForgeSignerFunction('pecoff');

  console.log(`[Custom Sign] Starting signing process for: ${targetPath}`);

  try {
    await signerFunc(targetPath);

    console.log(`[Custom Sign] Successfully signed: ${targetPath}`);
  } catch (error) {
    console.error(`[Custom Sign] Signing failed for ${targetPath}:`, error);
    throw error; 
  }
};