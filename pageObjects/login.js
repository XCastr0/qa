// pageObjects/Login.js

class Login {
    constructor(page) {
        this.page = page;
        this.usernameInput = 'input[name="login[username]"]';
        this.passwordInput = 'input[name="login[password]"]';
        this.signInButton = page.getByRole('button', { name: 'Sign In' });
        this.loggedInUserLocator = '.logged-in';
    }

    async goToLoginPage() {
        await this.page.goto('https://magento.softwaretestingboard.com');
        await this.page.locator('.authorization-link').first().click();
    }

    async fillCredentials(username, password) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
    }

    async signIn() {
        await this.signInButton.click();
        await this.page.waitForLoadState('networkidle');
    }

    async verifyUserLoggedIn() {
        return this.page.locator(this.loggedInUserLocator).first();
    }
}

module.exports = Login;
