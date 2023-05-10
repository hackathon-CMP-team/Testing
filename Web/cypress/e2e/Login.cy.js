import Login from '../support/login'
import TEST_DATA from '../data/test_data.json'
import HOST from '../data/host.json'
import LOGIN_DATA from '../data/login.json'

describe('Login Page UI/UX and Functionality Test', () => {
  const loginPage = new Login();

  beforeEach(() => {
    cy.clearLocalStorage();

    loginPage.navigate();
    cy.url().should("include", "/auth/login");
  });

  /* [TODO]: Test the colors of the elements */
  it('Test that the labels of the elements are exist in their right positions', () => {
    /* Check that the title of the page is 'Tap Cash' */
    loginPage.get_page_title().then((title) => {
      assert.equal(title.toLowerCase(), 'tap cash');
    });

    /* Check that the header of the page is 'Tap Cash' */
    loginPage.get_header_label().then((label) => {
      assert.equal(label.toLowerCase(), 'tap cash');
    });

    /* Check that the label in the phone textbox is 'Phone' */
    loginPage.get_phone_number_textbox_label().then((label) => {
      assert.equal(label.toLowerCase(), 'phone');
    });

    /* Check that the label in the PIN textbox is 'Password' */
    loginPage.get_password_textbox_label().then((label) => {
      assert.equal(label.toLowerCase(), 'password');
    });

    /* Check that the label in the forget password is 'Forget Password ?' */
    loginPage.get_forget_password_label().then((label) => {
      assert.equal(label.toLowerCase(), 'forget password ?');
    });

    /* Check that the label in the login button is 'LOGIN' */
    loginPage.get_login_button_label().then((label) => {
      assert.equal(label.toLowerCase(), 'login');
    });

    /* Check that the label in the register buttin is 'REGISTER' */
    loginPage.get_register_button_label().then((label) => {
      assert.equal(label.toLowerCase(), 'register');
    });
  });

  it('Test that the phone number textbox is clickable', () => {
    loginPage.get_phone_number_textbox().should('be.enabled');
  });

  it('Test that the password textbox is clickable', () => {
    loginPage.get_password_textbox().should('be.enabled');
  });

  it('Test that the password hide/unhide button is clickable', () => {
    loginPage.get_password_hide_button().should('have.prop', 'onclick')
  });

  it('Test that the forget password link is clickable', () => {
    loginPage.get_forget_password_ref().should('have.attr', 'href');
  });

  it('Test that the login button is clickable', () => {
    loginPage.get_login_button().should('be.enabled');
  });

  it('Test that the register button is clickable', () => {
    loginPage.get_register_button().should('be.enabled');
  });

  it('Test the frontend validation on the phone', () => {
    loginPage.get_password_textbox().type('123456');
    loginPage.click_on_login_button();
    loginPage.get_phone_number_required_message().should('exist');
    loginPage.get_password_required_message().should('not.exist');

    loginPage.get_phone_number_textbox().type('01098473674');
    loginPage.click_on_login_button();
    loginPage.get_phone_number_required_message().should('not.exist');
    loginPage.get_password_required_message().should('not.exist');
  });

  it('Test the frontend validation on the password', () => {
    loginPage.get_phone_number_textbox().type('01098473674');
    loginPage.click_on_login_button();
    loginPage.get_password_required_message().should('exist');
    loginPage.get_phone_number_required_message().should('not.exist');

    loginPage.get_password_textbox().type('123456');
    loginPage.click_on_login_button();
    loginPage.get_phone_number_required_message().should('not.exist');
    loginPage.get_password_required_message().should('not.exist');
  });

  it('Test the redirection is right after login', () => {
    loginPage.get_phone_number_textbox().type(TEST_DATA.account_1.phone_number);
    loginPage.get_password_textbox().type(TEST_DATA.account_1.password);
    loginPage.click_on_login_button();
    cy.url().should('eq', HOST.host_name + LOGIN_DATA.AfterLoginURL);
  });

  it('Test the validations by frontend', () => {
    loginPage.get_phone_number_required_message().should('not.exist');

    loginPage.click_on_phone_number_textbox();
    loginPage.click_on_header();

    loginPage.get_phone_number_required_message().should('exist');

    loginPage.get_password_required_message().should('not.exist');

    loginPage.click_on_password_textbox();
    loginPage.click_on_header();

    loginPage.get_password_required_message().should('exist');
  });

  it('Test the password revealing using hide button', () => {
    loginPage.get_password_textbox().type('123456');
    loginPage.get_password_textbox().should('have.attr', 'type', 'password');

    loginPage.click_password_hide_button();
    loginPage.get_password_textbox().should('have.attr', 'type', 'text');

    loginPage.click_password_hide_button();
    loginPage.get_password_textbox().should('have.attr', 'type', 'password');
  });

  it('Test the phone number validations', () => {
    loginPage.get_phone_number_textbox().type('01023456789');
    loginPage.get_password_textbox().type('123456');
    loginPage.click_on_login_button();
  });
  
  it('Test forget password functionality', () => {
    loginPage.click_on_forget_password_ref();
    cy.url().should('eq', HOST.host_name + LOGIN_DATA.AfterForgetPassword);
  });

  it('Test phone number is not valid', () => {
    loginPage.get_phone_number_textbox().type("01928202598");
    loginPage.click_on_header();

    loginPage.get_phone_number_is_not_valid_message().should('exist');
  });

  it('Test password doesn\'t accept more than 6 digits', () => {
    loginPage.get_phone_number_textbox().type('01023456789');
    loginPage.get_password_textbox().type('123456789');

    loginPage.click_on_login_button();
    loginPage.get_password_is_not_valid_message().should('exist');
  });

  it('Test password doesn\'t accept anything except integer digits', () => {
    loginPage.get_phone_number_textbox().type('01023456789');
    loginPage.get_password_textbox().type('ahmed7');

    loginPage.click_on_login_button();
    loginPage.get_password_is_not_valid_message().should('exist');
  });
});