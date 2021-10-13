import {expect, test} from '@playwright/test';
import * as elementsManipulations from "../../.././../helpers/elements.manipulation";
import {checkCookies} from "../../../../helpers/empty.cookies.detector";
import {CheckoutPage} from "../../../../pages/checkout.page";
import {checkInnerText} from "../../../../helpers/expects";


test.use({storageState: 'tests/sauce-labs-tests/specs.sauce-labs/states/state.item.chosen.json'})

test('Occurs an error when postal code input missed', async function ({page, context}) {
    const checkoutPage = new CheckoutPage(page, context);

    await checkCookies(context);

    await checkoutPage.openUrl();

    await checkoutPage.firstNameFill(`testUser${Date.now()}`);
    await checkoutPage.lastNameFill(`testUser${Date.now()}`);

    await checkoutPage.clickOnContinue();

    await checkInnerText(page, checkoutPage.error, 'Error: Postal Code is required');

});

