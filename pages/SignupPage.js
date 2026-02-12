class SignupPage {
  constructor(page) {
    this.page = page;

    this.signupLink = 'text=Sign Up';
    this.emailInput = 'input[type="email"]';
    this.passwordInput = 'input[type="password"]';
    this.submitButton = 'button[type="submit"]';
  }

  async navigateToSignup() {
    await this.page.goto('/');
    await this.page.click(this.signupLink);
  }

  async register(email, password) {
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.submitButton);
  }
}

module.exports = { SignupPage };
