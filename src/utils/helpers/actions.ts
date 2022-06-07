import { Key, WebDriver } from 'selenium-webdriver';

import { findElement, findElements } from './elements';
import { TByOptions } from './_types';

export const clickElement = async (driver: WebDriver, selector: string, by?: TByOptions) => {
  const element = await findElement(driver, selector, by);
  await element.click();
};

export const clickMenuElement = async (driver: WebDriver, selector: string, index: number, by?: TByOptions) => {
  const elements = await findElements(driver, selector, by);
  const element = elements[index];
  await element.click();
};

export const fillText = async (
  driver: WebDriver,
  selector: string,
  text: string,
  by?: TByOptions,
) => {
  const element = await findElement(driver, selector, by);
  await element.sendKeys(text);
};

export const sleep = async (driver: WebDriver, timeMs: number) => {
  await driver.sleep(timeMs);
}

export const refresh = async (driver: WebDriver) => {
  await driver.navigate().refresh;
}

export const switchTab = async (driver: WebDriver) => {
  const originalWindow = await driver.getWindowHandle();
  await driver.wait(
    async () => (await driver.getAllWindowHandles()).length === 2,
    10000
  );
  const windows = await driver.getAllWindowHandles();
  windows.forEach(async handle => {
    if (handle !== originalWindow) {
      await driver.switchTo().window(handle);
    }
  });
  return originalWindow;
};

export const switchBack = async (driver: WebDriver, originalWindow: string) => {
  await driver.switchTo().window(originalWindow);
};