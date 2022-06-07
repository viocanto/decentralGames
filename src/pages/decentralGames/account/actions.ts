import { By, WebDriver } from 'selenium-webdriver';
import { clickElement, fillText, sleep, refresh, clickMenuElement } from '../../../utils/helpers/actions';
import selectors from './selectors';

export const clickBtnRewards = async (driver: WebDriver) => {
    await clickElement(driver, selectors.btnRewards);
};