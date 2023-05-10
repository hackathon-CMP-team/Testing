import HOST from '../data/host.json'
import SIGNUP_DATA from '../data/signup.json'

class Signup {
  navigate() {
    cy.visit(HOST.host_name + SIGNUP_DATA.URL);
    cy.wait(1000);
  }

  /* <===================================== Getters for all the elements =========================================> */
  get_header() {
    return cy.xpath(SIGNUP_DATA.header_xpath);
  }

  get_parent_and_children_avatar() {
    return cy.xpath(SIGNUP_DATA.parent_and_children_avatar_xpath);
  }

  get_first_name_textbox() {
    return cy.xpath(SIGNUP_DATA.first_name_textbox_xpath);
  }

  get_last_name_textbox() {
    return cy.xpath(SIGNUP_DATA.last_name_textbox_xpath);
  }

  get_phone_number_textbox() {
    return cy.xpath(SIGNUP_DATA.phone_number_textbox_xpath);
  }

  get_parent_phone_number_textbox() {
    return cy.xpath(SIGNUP_DATA.parent_phone_number_textbox_xpath);
  }
  
  get_email_textbox() {
    return cy.xpath(SIGNUP_DATA.email_textbox_xpath);
  }

  get_birthdate_textbox() {
    return cy.xpath(SIGNUP_DATA.birthdate_textbox_xpath);
  }

  get_password_textbox() {
    return cy.xpath(SIGNUP_DATA.password_textbox_xpath);
  }

  get_password_hide_button() {
    return cy.xpath(SIGNUP_DATA.password_hide_button_xpath);
  }

  get_confirm_password_textbox() {
    return cy.xpath(SIGNUP_DATA.confirm_password_textbox_xpath);
  }
  
  get_confirm_password_hide_button() {
    return cy.xpath(SIGNUP_DATA.confirm_password_hide_button_xpath);
  }

  get_already_have_an_email() {
    return cy.xpath(SIGNUP_DATA.already_have_an_email_xpath);
  }
  
  get_register_button() {
    return cy.xpath(SIGNUP_DATA.register_button_xpath);
  }
  
  /* <===================================== Label getters for all the elements ====================================> */
  get_header_label() {
    return this.get_header().invoke('text').then(text => text.trim());
  }

  get_parent_and_children_avatar_label() {
    return this.get_parent_and_children_avatar().invoke('text').then(text => text.trim());
  }

  get_first_name_textbox_label() {
    return this.get_first_name_textbox().invoke('text').then(text => text.trim());
  }

  get_last_name_textbox_label() {
    return this.get_last_name_textbox().invoke('text').then(text => text.trim());
  }

  get_phone_number_textbox_label() {
    return this.get_phone_number_textbox().invoke('text').then(text => text.trim());
  }

  get_parent_phone_number_textbox_label() {
    return this.get_header().invoke('text').then(text => text.trim());
  }
  
  get_parent_phone_number_textbox_label() {
    return this.get_header().invoke('text').then(text => text.trim());
  }

  get_birthdate_textbox_label() {
    return this.get_birthdate_textbox().invoke('text').then(text => text.trim());
  }

  get_password_textbox_label() {
    return this.get_password_textbox().invoke('text').then(text => text.trim());
  }

  get_password_hide_button_label() {
    return this.get_password_hide_button().invoke('text').then(text => text.trim());
  }

  get_confirm_password_textbox_label() {
    return this.get_confirm_password_textbox().invoke('text').then(text => text.trim());
  }
  
  get_confirm_password_hide_button_label() {
    return this.get_confirm_password_hide_button().invoke('text').then(text => text.trim());
  }

  get_already_have_an_email_label() {
    return this.get_already_have_an_email().invoke('text').then(text => text.trim());
  }
  
  get_register_button_label() {
    return this.get_register_button().invoke('text').then(text => text.trim());
  }

  /* <===================================== Actions for all the elements ==========================================> */
  click_on_header() {
    return this.get_header().click();
  }

  click_on_parent_and_children_avatar() {
    return this.get_parent_and_children_avatar().click();
  }

  click_on_first_name_textbox() {
    return this.get_first_name_textbox().click();
  }

  click_on_last_name_textbox() {
    return this.get_last_name_textbox().click();
  }

  click_on_phone_number_textbox() {
    return this.get_phone_number_textbox().click();
  }

  click_on_parent_phone_number_textbox() {
    return this.get_header().click();
  }
  
  click_on_parent_phone_number_textbox() {
    return this.get_header().click();
  }

  click_on_birthdate_textbox() {
    return this.get_birthdate_textbox().click();
  }

  click_on_password_textbox() {
    return this.get_password_textbox().click();
  }

  click_on_password_hide_button() {
    return this.get_password_hide_button().click();
  }

  click_on_confirm_password_textbox() {
    return this.get_confirm_password_textbox().click();
  }
  
  click_on_confirm_password_hide_button() {
    return this.get_confirm_password_hide_button().click();
  }

  click_on_already_have_an_email() {
    return this.get_already_have_an_email().click();
  }
  
  click_on_register_button() {
    return this.get_register_button().click();
  }

  /* <============================================= General Utilities =============================================> */
  signup(first_name, last_name, phone_number, email, birthday, password) {
    if (first_name == null || last_name == null || phone_number == null || email == null || birthday == null || password == null) {
      return;
    }

    this.get_first_name_textbox().type(first_name);
    this.get_last_name_textbox().type(last_name);
    this.get_phone_number_textbox().type(phone_number);
    this.get_email_textbox().type(email);
    this.get_birthday_textbox().type(birthday);
    this.get_password_textbox().type(password);

    this.click_on_register_button();
  }
}

export default Signup