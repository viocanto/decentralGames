// @ts-check
import { Options as OptionsChrome } from 'selenium-webdriver/chrome';
import { setupDriver } from '../setup';
import { BrowsersEnum } from '../utils/_types';
import { METAMASK_EXTENSION_PATH } from '../utils/_consts';
import { importMetamaskAccount, signMetamaskMessage, connectMetamaskAccount } from './useMetamask';
import * as utilActions from '../utils/helpers/actions';
import * as mainSiteActions from '../pages/decentralGames/home/actions'
import * as myAccountActions from '../pages/decentralGames/account/actions'
import * as iceClaimActions from '../pages/decentralGames/ice/claim/actions'
import * as marketPlaceActions from '../pages/decentralGames/ice/marketplace/actions'
import { WebDriver } from 'selenium-webdriver';
import assert from "assert";

let driver: WebDriver;

/**
 * Decentral Games Test Suite using Mocha
 * The different test cases and steps are executed sequentially on each 'it.' block
 */
describe('Decental Games', async function () {
  this.timeout(100000);
  
  /**
   * @param  {} '#SetupMetamask'
   * Initialize a WebDriver instance, install Metemask extension and input an existing wallet.
   */
  it('#Setup Metamask', async function () {
    const options = new OptionsChrome().addExtensions([METAMASK_EXTENSION_PATH]);
    driver = await setupDriver({ browser: BrowsersEnum.Chrome, options, hasExtension: true });
    await driver.manage().window().maximize();
    await importMetamaskAccount(driver);
  });
  
  /**
   * @param  {} '#ConnectMetamaskandsignloginmessage'
   * Launch the Decentral Games site and sign in using Metamask
   */
  it('#Connect Metamask and sign login message', async function () {
    await driver.get("https://decentral.games/");
    await connectMetamaskAccount(driver);
    await mainSiteActions.clickBtnConnect(driver);
    await utilActions.sleep(driver, 5000)
    await signMetamaskMessage(driver);
  });

  /**
   * @param  {} '#TestMyAccountDropdownMenu'
   * Browse through the different My Account pages using the dropdown menu
   */
  it('#Test My Account Dropdown Menu', async function () {
    await mainSiteActions.clickDropdownMyItems(driver);
    await mainSiteActions.clickDropdownMyHistory(driver);
    await mainSiteActions.clickDropdownMyAccount(driver);
  });

  /**
   * @param  {} '#NavigatefromICERewardstoDGMarketplace'
   * Browse through My Acount > ICE Rewards > Decentral Games NFT Fits Marketplace
   */
  it('#Navigate from ICE Rewards to DG Marketplace', async function () {
    await myAccountActions.clickBtnRewards(driver);
    await utilActions.sleep(driver, 3000);
    await driver.executeScript("window.scrollBy(0,1000)");
    await iceClaimActions.clickBtnBrowseWearables(driver);
  });

  /**
   * @param  {} '#VerifyFitLevelsandvalidateeachimage'
   * Click through the different Fit Levels and assert the src of the 
   * img object being displayed after each level
   */
  it('#Verify Fit Levels and validate each image', async function () {
    await marketPlaceActions.clickFitLevels(driver);
  });
  
  /**
   * @param  {} '#TestOpenSearedirectandAssertURL'
   * Test the 'Buy on secondary' button redirects a user to the 
   * proper OpenSea collection URL using assert and switch back to DG website.
   */
  it('#Test OpenSea redirect and Assert URL', async function () {
    const openSeaURL = 'https://opensea.io/collection/decentral-games-ice';
    await marketPlaceActions.clickBtnOpenSea(driver);
    const originalWindow = await utilActions.switchTab(driver);
    await utilActions.sleep(driver, 2000)
    const newWindowURL = await driver.getCurrentUrl();
    assert.equal(openSeaURL, newWindowURL);
    await driver.close()
    utilActions.switchBack(driver, originalWindow);
  });

  /**
   * @param  {} '#DisconnectWalletfromDG'
   * Logout of Decentral Games and Quit.
   */
  it('#Disconnect Wallet from DG', async function() {
    await mainSiteActions.clickDropdownDisconnect(driver);
    await driver.quit();
  });
  
});