describe('Application', () => {
    test('Application should be running', async () => {
      const response = await page.goto('http://localhost:3000');
      const status = response.status();

      expect(status).toBe(200);
    });
});