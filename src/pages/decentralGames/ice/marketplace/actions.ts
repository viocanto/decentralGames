import assert from 'assert';
import { By, WebDriver } from 'selenium-webdriver';
import { clickElement, fillText, sleep, refresh, clickMenuElement } from '../../../../utils/helpers/actions';
import { findElement, findElements } from '../../../../utils/helpers/elements';
import {selectors, avatarImgSrc} from './selectors';

export const clickBtnOpenSea = async (driver: WebDriver) => {
    await clickElement(driver, selectors.btnOpensea)
};

export const clickFitLevels =async (driver: WebDriver) => {
    const fitInactiveSelectors = await findElements(driver, selectors.btnInactiveFitSelector);
    let count = 0;
    while (count < 4){
        await fitInactiveSelectors[count].click();
        await sleep(driver, 3000);
        const ActiveFitLevelSrc= await (await findElement(driver, selectors.btnActiveFitAvatar)).getAttribute("src");
        assert.equal(avatarImgSrc[count],ActiveFitLevelSrc);
        count ++
    };
};
