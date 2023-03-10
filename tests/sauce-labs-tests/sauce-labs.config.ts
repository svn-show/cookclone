import {PlaywrightTestConfig} from '@playwright/test';

const config: PlaywrightTestConfig = {

    testDir: ".",

    use: {
        screenshot: "only-on-failure",
        video: "retain-on-failure",
        baseURL: "https://www.saucedemo.com/",
        browserName: 'chromium',
        colorScheme: "dark",
        launchOptions: {
            executablePath: '/usr/local/bin/chromium',
        },
    },

    reporter: [
        ['list'],
        ['experimental-allure-playwright']
    ],
    grepInvert: [new RegExp("@flaky")],
    workers: 2,
    preserveOutput: "always",
    updateSnapshots: "all",
    retries: 2
};

export default config;