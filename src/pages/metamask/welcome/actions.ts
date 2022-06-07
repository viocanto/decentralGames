import { By, WebDriver } from 'selenium-webdriver';
import { clickElement, fillText, sleep, refresh } from '../../../utils/helpers/actions';
import selectors from './selectors';


export const clickBtnStartNow = async (driver: WebDriver) => {
  await clickElement(driver, selectors.btnStartNow);
};

export const clickBtnImportWallet = async (driver: WebDriver) => {
  await clickElement(driver, selectors.btnImportWallet);
};

export const clickBtnNoThanks = async (driver: WebDriver) => {
  await clickElement(driver, selectors.btnNoThanks);
};

export const fillRecoveryPhrase = async (driver: WebDriver, phrase: string) => {
  await fillText(driver, selectors.inputRecoveryPhrase, phrase);
};

export const fillNewPassword = async (driver: WebDriver, password: string) => {
  await fillText(driver, selectors.inputNewPassword, password);
};

export const fillConfirmPassword = async (driver: WebDriver, password: string) => {
  await fillText(driver, selectors.inputConfirmPassword, password);
};

export const checkTermsOfUse = async (driver: WebDriver) => {
  await clickElement(driver, selectors.checkboxTermsOfUse);
};

export const clickBtnImport = async (driver: WebDriver) => {
  await clickElement(driver, selectors.btnImport);
};

export const clickBtnDone = async (driver: WebDriver) => {
  await sleep(driver, 3000)
  await clickElement(driver, selectors.btnDone);
};

export const clickBtnClose = async (driver:WebDriver) => {
  await sleep(driver, 3000)
  await clickElement(driver, selectors.btnClose)
}

export const clickBtnNext = async (driver:WebDriver) => {
  await clickElement(driver, selectors.btnNext)
}

export const clickBtnConfirm = async (driver:WebDriver) => {
  await clickElement(driver, selectors.btnConfirm)
}

export const clickBtnSign = async (driver:WebDriver) => {
  await clickElement(driver, selectors.btnSign)
}
