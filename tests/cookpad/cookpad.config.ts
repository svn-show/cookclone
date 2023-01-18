import {PlaywrightTestConfig} from '@playwright/test';

const config: PlaywrightTestConfig = {

    testDir: ".",

    use: {
        headless: false,
        // screenshot: "only-on-failure",
        // video: "retain-on-failure",
        baseURL: "http://cookpad.com",
        browserName: 'chromium',
        launchOptions: {
            executablePath: '/usr/local/bin/chromium',
        },

    },
    reporter: [
        ['list'],
        // ['experimental-allure-playwright']
    ],
    // grepInvert: [new RegExp("@flaky")],
    workers: 2,
    // preserveOutput: "failures-only",

};

export default config;