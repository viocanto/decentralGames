
import * as metamaskWelcomeActions from '../pages/metamask/welcome/actions';
import * as utilActions from '../utils/helpers/actions'
import {FAKE_RECOVERY_PHRASE, FAKE_PASSWORD } from '../utils/_consts';
import { WebDriver } from 'selenium-webdriver';

export async function importMetamaskAccount(driver: WebDriver) {

  try {
    await metamaskWelcomeActions.clickBtnStartNow(driver);
    await metamaskWelcomeActions.clickBtnImportWallet(driver);
    await metamaskWelcomeActions.clickBtnNoThanks(driver);
    await metamaskWelcomeActions.fillRecoveryPhrase(driver, FAKE_RECOVERY_PHRASE);
    await metamaskWelcomeActions.fillNewPassword(driver, FAKE_PASSWORD);
    await metamaskWelcomeActions.fillConfirmPassword(driver, FAKE_PASSWORD);
    await metamaskWelcomeActions.checkTermsOfUse(driver);
    await metamaskWelcomeActions.clickBtnImport(driver);
    await metamaskWelcomeActions.clickBtnDone(driver);
    await metamaskWelcomeActions.clickBtnClose(driver);
  } catch(error){
    console.log(error);
  }
}

export async function connectMetamaskAccount(driver: WebDriver) {
  try {
    const originalWindow = await utilActions.switchTab(driver);
    await metamaskWelcomeActions.clickBtnNext(driver);
    await metamaskWelcomeActions.clickBtnConfirm(driver);
    await utilActions.switchBack(driver, originalWindow);
  } catch (error) {
    console.log(error);
  }
}

export async function signMetamaskMessage(driver:WebDriver) {
  try {
    const originalWindow = await utilActions.switchTab(driver);
    await metamaskWelcomeActions.clickBtnSign(driver);
    await utilActions.switchBack(driver, originalWindow);
  } catch (error) {
    console.log(error);
  }
}
