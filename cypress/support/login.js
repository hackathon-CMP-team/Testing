import HOST from '../data/host.json'
import LOGIN_DATA from '../data/login.json'

class Login {
  navigate() {
    cy.visit(HOST.host_name + LOGIN_DATA.URL);
    cy.wait(1000);
  }

  /* <===================================== Getters for all the elements =====================================> */

  get_header() {
    return cy.get(LOGIN_DATA.header_class);
  }

  get_phone_number_textbox() {
    return cy.get(LOGIN_DATA.phone_number_textbox_id);
  }

  get_phone_number_required_message() {
    return cy.get(LOGIN_DATA.phone_number_required_message_class);
  }

  get_password_textbox() {
    return cy.get(LOGIN_DATA.password_textbox_id);
  }

  get_password_hide_button() {
    return cy.get(LOGIN_DATA.password_hide_button_id);
  }

  get_password_required_message() {
    return cy.get(LOGIN_DATA.password_required_message_class);
  }
  
  get_forget_password_ref() {
    return cy.get(LOGIN_DATA.forget_password_attr);
  }
  
  get_login_button() {
    return cy.get(LOGIN_DATA.login_button_attr);
  }
  
  get_register_button() {
    return cy.get(LOGIN_DATA.register_button_attr);
  }

  /* <===================================== Label getters for all the elements =====================================> */

  get_page_title() {
    return cy.title().then(text => text.toString());
  }

  get_header_label() {
    return this.get_header().invoke('text').then(text => text.trim());
  }
  
  get_phone_number_textbox_label() {
    return cy.get(LOGIN_DATA.phone_number_textbox_label_id).invoke('text').then(text => text.trim());
  }
  
  get_password_textbox_label() {
    return cy.get(LOGIN_DATA.password_textbox_label_id).invoke('text').then(text => text.trim());
  }
  
  get_forget_password_label() {
    return this.get_forget_password_ref().invoke('text').then(text => text.trim());
  }
  
  get_login_button_label() {
    return this.get_login_button().invoke('text').then(text => text.trim());
  }

  get_register_button_label() {
    return this.get_register_button().invoke('text').then(text => text.trim());
  }

  /* <===================================== Actions for all the elements =====================================> */
  click_on_header() {
    this.get_header().click();
  }

  click_on_phone_number_textbox() {
    this.get_phone_number_textbox().click();
  }

  click_on_password_textbox() {
    this.get_password_textbox().click();
  }

  click_password_hide_button() {
    this.get_password_hide_button().click();
  }
  
  click_on_forget_password_ref() {
    this.get_forget_password_ref().click();
  }
  
  click_on_login_button() {
    this.get_login_button().click();
  }
  
  click_on_register_buttin() {
    this.get_register_button().click();
  }

  /* <===================================== General Utilities =====================================> */
  chech_right_redirection() {
    assert.equal(cy.url(), HOST.host_name + LOGIN_DATA.URL);
  }

  /* Note: It just type phone number, password and click login. It will not make any validations which is intended */
  login(phone_number, password) {
    if (phone_number != null)
      this.get_phone_number_textbox().type(phone_number);

    if (password != null)
      this.get_password_textbox().type(password);

    this.click_on_login_button();
  }
}

export default Login