import { By, WebDriver } from 'selenium-webdriver';
import { clickElement, fillText, sleep, refresh, clickMenuElement } from '../../../utils/helpers/actions';
import selectors from './selectors';

export const clickBtnConnect = async (driver: WebDriver) => {
  await clickElement(driver, selectors.btnMetamask);
  };

export const clickBtnMyAccount = async (driver: WebDriver) => {
  await sleep(driver, 3000)
  await clickMenuElement(driver, selectors.btnMyAccount, 1);
  };

export const clickDropdownMyAccount = async (driver: WebDriver) => {
  await clickBtnMyAccount(driver);
  await clickMenuElement(driver, selectors.btnDropdown, 0);
  };
  
export const clickDropdownMyItems = async (driver: WebDriver) => {
  await clickBtnMyAccount(driver);
  await clickMenuElement(driver, selectors.btnDropdown, 1);
  };

export const clickDropdownMyHistory = async (driver: WebDriver) => {
  await clickBtnMyAccount(driver);
  await clickMenuElement(driver, selectors.btnDropdown, 2);
  };

export const clickDropdownDisconnect = async (driver: WebDriver) => {
  await clickBtnMyAccount(driver);
  await clickMenuElement(driver, selectors.btnDropdown, 3);
  };
