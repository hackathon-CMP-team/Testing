import HOST from '../data/host.json'
import HOME_DATA from '../data/home.json'

class Login {
  navigate() {
    cy.visit(HOST.host_name + LOGIN_DATA.URL);
    cy.wait(1000);
  }

  /* <===================================== Getters for all the elements =====================================> */
  get_header() {
    return cy.xpath(HOST.host_name + HOME_DATA.header_xpath);
  }

  get_home_tap() {
    return cy.xpath(HOST.host_name + HOME_DATA.home_tap_xpath);
  }

  get_services_tap() {
    return cy.xpath(HOST.host_name + HOME_DATA.services_tap_xpath);
  }

  get_management_tap() {
    return cy.xpath(HOST.host_name + HOME_DATA.management_tap_xpath);
  }

  get_help_center_tap() {
    return cy.xpath(HOST.host_name + HOME_DATA.help_center_tap_xpath);
  }

  get_transfer_tap() {
    return cy.xpath(HOST.host_name + HOME_DATA.transfer_tap_xpath);
  }

  get_payments_tap() {
    return cy.xpath(HOST.host_name + HOME_DATA.payments_tap_xpath);
  }

  get_with_draw_tap() {
    return cy.xpath(HOST.host_name + HOME_DATA.with_draw_tap_xpath);
  }

  get_help_tap() {
    return cy.xpath(HOST.host_name + HOME_DATA.help_tap_xpath);
  }

  get_virtual_card_tap_xpath() {
    return cy.xpath(HOST.host_name + HOME_DATA.virtual_card_tap_xpath);
  }

  get_total_balance_container() {
    return cy.xpath(HOST.host_name + HOME_DATA.total_balance_container_xpath);
  }

  get_income_container() {
    return cy.xpath(HOST.host_name, HOME_DATA.income_container_xpath);
  }

  get_outcome() {
    return cy.xpath(HOST.host_name + HOME_DATA.outcome_xpath);
  }

  get_notification_icon() {
    return cy.xpath(HOST.host_name, HOME_DATA.notification_icon_xpath);
  }

  get_profile_icon() {
    return cy.xpath(HOST.host_name + HOME_DATA.profile_icon_xpath);
  }

  /* <===================================== Label getters for all the elements =====================================> */

  get_page_title() {
    return cy.title().then(text => text.toString());
  }

  get_header_label() {
    return this.get_header().invoke('text').then(text => text.trim());
  }

  get_home_tap_label() {
    return this.get_home_tap().invoke('text').then(text => text.trim());
  }

  get_services_tap_label() {
    return this.get_services_tap().invoke('text').then(text => text.trim());
  }

  get_management_tap_label() {
    return this.get_management_tap().invoke('text').then(text => text.trim());
  }

  get_help_center_tap_label() {
    return this.get_help_center_tap().invoke('text').then(text => text.trim());
  }

  get_transfer_tap_label() {
    return this.get_transfer_tap().invoke('text').then(text => text.trim());
  }

  get_payments_tap_label() {
    return this.get_payments_tap().invoke('text').then(text => text.trim());
  }

  get_with_draw_tap_label() {
    return this.get_with_draw_tap().invoke('text').then(text => text.trim());
  }

  get_help_tap_label() {
    return this.get_help_tap().invoke('text').then(text => text.trim());
  }

  get_virtual_card_tap_label() {
    return this.get_virtual_card_tap().invoke('text').then(text => text.trim());
  }

  get_total_balance_container_label() {
    return this.get_total_balance_container().invoke('text').then(text => text.trim());
  }

  get_income_containe_label() {
    return this.get_income_container().invoke('text').then(text => text.trim());
  }

  get_outcome_label() {
    return this.get_outcome().invoke('text').then(text => text.trim());
  }

  get_notification_icon_label() {
    return this.get_notification_icon().invoke('text').then(text => text.trim());
  }

  get_profile_icon_label() {
    return this.get_profile_icon().invoke('text').then(text => text.trim());
  }

  /* <===================================== Actions for all the elements =====================================> */



  /* <===================================== General Utilities =====================================> */



}

export default Login