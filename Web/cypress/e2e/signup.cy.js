import SignUp from '../support/signup'
import TEST_DATA from '../data/test_data.json'
import HOST from '../data/host.json'
import SIGNUP_DATA from '../data/signup.json'

describe('Login Page UI/UX and Functionality Test', () => {
  const signupPage = new Signup();

  beforeEach(() => {
    cy.clearLocalStorage();

    // loginPage.navigate();
    // cy.url().should("include", "/auth/login");
  });

  it("Test if the home tap is exist", () => {
    signupPage.get_home_tap().should('exist');
  });
});