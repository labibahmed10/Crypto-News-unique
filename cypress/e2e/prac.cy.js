/// <reference types="cypress" />

describe("Trying to figure out what cypress is", () => {
   it("should go to the signup page and sign up a user", () => {
      cy.visit("https://extraordinary-zabaione-d385bf.netlify.app/signup");

      cy.get("#email").type("labib.372@gmail.com");
      cy.get("input[name='password']").type("asdasd");
      cy.get("input[name='conpassword']").type("asdasd");
      cy.get("#checkbox").click();
      cy.get("input[name='submit']");
   });
});
