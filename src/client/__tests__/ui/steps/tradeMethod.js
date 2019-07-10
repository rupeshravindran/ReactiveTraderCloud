'use strict'

const TradePage = require('../pages/tradePage.js')

const EC = protractor.ExpectedConditions
const maxWaitTime = 10000

async function fillNotional(newNotionalValue) {
  await browser.wait(EC.visibilityOf(TradePage.textAmountThirdCell), maxWaitTime)
  const textNotional = await TradePage.textAmountThirdCell.getAttribute('value')
  expect(textNotional).toEqual('1,000,000')
  await TradePage.textAmountThirdCell.clear()
  await TradePage.textAmountThirdCell.sendKeys(newNotionalValue)
}

exports.GBPToUSDTrade = async () => {
  await browser.wait(EC.visibilityOf(TradePage.linkAll), maxWaitTime)
  await TradePage.linkAll.click()
  await fillNotional('1,111,111')
  await browser.wait(EC.visibilityOf(TradePage.buttonSellThirdCell), maxWaitTime)
  await TradePage.buttonSellThirdCell.click()
  await browser.wait(EC.visibilityOf(TradePage.tradeSuccessMessage), maxWaitTime)
  expect(await TradePage.tradeSuccessMessage.getText()).toBeTruthy()
  expect(await TradePage.tradeSuccessMessage.getText()).toContain('You sold')
  await browser.wait(EC.visibilityOf(TradePage.buttonCloseTradeSuccess), maxWaitTime)
  await TradePage.buttonCloseTradeSuccess.click()
}

exports.EURToJPYTrade = async () => {
  await browser.wait(EC.visibilityOf(TradePage.linkAll), maxWaitTime)
  await TradePage.linkAll.click()
  await browser.wait(EC.visibilityOf(TradePage.buttonBuyFifthCell), maxWaitTime)
  await TradePage.buttonBuyFifthCell.click()
  await browser.wait(EC.visibilityOf(TradePage.tradeExecutionTimeOutMessage), maxWaitTime)
  expect(await TradePage.tradeExecutionTimeOutMessage.getText()).toEqual('Trade Execution taking longer then Expected')
  await browser.wait(EC.visibilityOf(TradePage.tradeSuccessMessage), maxWaitTime)
  expect(await TradePage.tradeSuccessMessage.getText()).toBeTruthy()
  expect(await TradePage.tradeSuccessMessage.getText()).toContain('You bought')
}

exports.EURToCADTrade = async () => {
  await browser.wait(EC.visibilityOf(TradePage.linkAll), maxWaitTime)
  await TradePage.linkAll.click()
  await browser.wait(EC.visibilityOf(TradePage.buttonSellNinthCell), maxWaitTime)
  await TradePage.buttonSellNinthCell.click()
  await browser.wait(EC.visibilityOf(TradePage.tradeSuccessMessage), maxWaitTime)
  expect(await TradePage.tradeSuccessMessage.getText()).toBeTruthy()
  expect(await TradePage.tradeSuccessMessage.getText()).toContain('You sold')
  await browser.wait(EC.visibilityOf(TradePage.buttonCloseTradeSuccess), maxWaitTime)
  await TradePage.buttonCloseTradeSuccess.click()
}

exports.GBPToJPYTrade = async () => {
  await browser.wait(EC.visibilityOf(TradePage.linkAll), maxWaitTime)
  await TradePage.linkAll.click()
  await browser.wait(EC.visibilityOf(TradePage.buttonBuySecondCell), maxWaitTime)
  await TradePage.buttonBuySecondCell.click()
  await browser.wait(EC.visibilityOf(TradePage.tradeRejectedMessage), maxWaitTime)
  expect(await TradePage.tradeRejectedMessage.getText()).toEqual('Your trade has been rejected')
  await browser.wait(EC.visibilityOf(TradePage.buttonCloseTradeRejected), maxWaitTime)
  await TradePage.buttonCloseTradeRejected.click()
}
