describe('Introduction to wdio basic features', () => {
    it('searches for a product', async () => {
        browser.url('https://ecommerce-playground.lambdatest.io/')
        await $('input[name="search"]').setValue("iphone")
        await $('button[type="submit"]').click()
        await browser.pause(6000)

    })
})