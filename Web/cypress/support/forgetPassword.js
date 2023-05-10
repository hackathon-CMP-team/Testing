import HOST from '../data/host.json'
import LOGIN_DATA from '../data/forget_password.json'

class Login {
  navigate() {
    cy.visit(HOST.host_name + LOGIN_DATA.URL);
    cy.wait(1000);
  }

  /* <===================================== Getters for all the elements =====================================> */

  get_header() {
    return cy.get(LOGIN_DATA.header_class);
  }

  get_sub_header() {
    return cy.xpath(LOGIN_DATA.sub_header_xpath);
  }

  get_phone_number_textbox() {
    return cy.get(LOGIN_DATA.phone_number_textbox_id);
  }

  get_phone_number_required_message() {
    return cy.xpath(LOGIN_DATA.phone_number_required_message_xpath);
  }

  get_phone_number_is_not_valid_message() {
    return cy.xpath(LOGIN_DATA.phone_number_is_not_valid_message_xpath);
  }
  
  get_back_to_login_ref() {
    return cy.xpath(LOGIN_DATA.back_to_login_ref_xpath);
  }
  
  get_send_button() {
    return cy.get(LOGIN_DATA.send_button_xpath);
  }

  /* <===================================== Label getters for all the elements =====================================> */

  get_page_title() {
    return cy.title().then(text => text.toString());
  }

  get_header_label() {
    return this.get_header().invoke('text').then(text => text.trim());
  }

  get_sub_header_label() {
    return this.get_sub_header().invoke('text').then(text => text.trim());
  }
  
  get_phone_number_textbox_label() {
    return cy.get(LOGIN_DATA.phone_number_textbox_label_id).invoke('text').then(text => text.trim());
  }
  
  get_back_to_login_label() {
    return this.get_back_to_login_ref().invoke('text').then(text => text.trim());
  }
  
  get_send_button_label() {
    return this.get_send_button().invoke('text').then(text => text.trim());
  }

  /* <===================================== Actions for all the elements =====================================> */
  
  click_on_header() {
    this.get_header().click();
  }

  click_on_sub_header() {
    this.get_sub_header().click();
  }

  click_on_phone_number_textbox() {
    this.get_phone_number_textbox().click();
  }

  click_on_back_to_login_ref() {
    this.get_back_to_login_ref().click();
  }
  
  click_on_send_button() {
    this.get_send_button().click();
  }
}

export default Login