class SigninPage {
  constructor(page) {
    this.page = page;

    this.signinLink = 'text=Sign In';
    this.emailInput = 'input[type="email"]';
    this.passwordInput = 'input[type="password"]';
    this.submitButton = 'button[type="submit"]';
  }

  async navigateToSignin() {
    await this.page.goto('/');
    await this.page.click(this.signinLink);
  }

  async login(email, password) {
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.submitButton);
  }
}

module.exports = { SigninPage };
