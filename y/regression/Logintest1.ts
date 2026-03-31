describe('Open YouTube and wait', () => {
    it('should open youtube for 30 seconds', async () => {
        await browser.url('https://www.youtube.com')
        await browser.pause(5000)
    })
})