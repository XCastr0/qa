// pageObjects/RedefinirSenha.js

class RedefinirSenha {
    constructor(page) {
        this.page = page;
        this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot Your Password?' });
        this.emailInput = 'input[name="email"]';
        this.resetButton = page.getByRole('button', { name: 'Reset My Password' });
        this.confirmationMessage = 'text=If there is an account associated with';
    }

    async goToForgotPasswordPage() {
        await this.page.goto('https://magento.softwaretestingboard.com/customer/account/login');
        await this.page.locator('.authorization-link').first().click();
        await this.forgotPasswordLink.click();
    }

    async fillEmail(email) {
        await this.page.fill(this.emailInput, email);
    }

    async resetPassword() {
        await this.resetButton.click();
    }

    async verifyConfirmationMessage() {
        return this.page.locator(this.confirmationMessage);
    }
}

module.exports = RedefinirSenha;
