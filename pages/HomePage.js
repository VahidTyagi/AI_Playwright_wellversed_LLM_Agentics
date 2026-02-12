class HomePage {
  constructor(page) {
    this.page = page;
  }

  async navigateToHome() {
    await this.page.goto('/');
  }
}

module.exports = { HomePage };
