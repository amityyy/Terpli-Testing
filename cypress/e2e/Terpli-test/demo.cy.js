describe('Terpli Dev Coding Test', () => {
    const testLocations = [
        'https://demo.terpli.io?hwcannabis.co',
        'https://traderoots.buzz/menu/?debug=demo.terpli.io',
        'https://demo.terpli.io?livewithsol.com'
    ];

    testLocations.forEach(location => {
        describe(`Testing Locations：${location}`, () => {
            beforeEach(() => {
                cy.visit(location); 
                if (location.includes('traderoots.buzz')) {
                    // if it's traderoots.buzz，deal with the age restriction
                    cy.get('.age-gate-buttons .age-gate-submit-yes', { timeout: 10000 }).should('be.visible').click();
                }
                cy.wait(15000); // wait for page to load
            });

            it('Verify Terpli launcher button presence', () => {
                cy.get('#terpli_launcher_button').should('be.visible'); 
            });

            it('Trigger Terpli launcher button', () => {
                cy.visit(location);
                cy.wait(15000);
                cy.get('#terpli_launcher_button').click();
                cy.wait(9000);
            });

            it('Confirm Terpli plugin (modal) display', () => {
                cy.visit(location);
                cy.wait(15000); 
                cy.get('#terpli_launcher_button').click(); 
                cy.get('#terpli_app').should('be.visible'); 
            });

            if (location.includes('traderoots.buzz')) {
                beforeEach(() => {
                    cy.visit(location);
                    cy.viewport(1080, 600);
                    cy.wait(15000);
                });

                it('Interact with multi-location website dropdown', function() {

                    cy.get('body').then((body) => {
                        if (body.find('.age-gate-buttons .age-gate-submit-yes').length > 0) {
                            cy.get('.age-gate-buttons .age-gate-submit-yes').click();
                        }
                    });
                    // open the "Categories" drop down button
                    cy.get('nav.elementor-nav-menu--main').contains('Categories').click();
                    cy.wait(2000); 
                    // pick "flower" from the dropdown button and open
                    cy.get('ul[id^="sm-"]').contains('Flower').click();
                    // test if "flower" is successfully opened or not
                    cy.url().should('include', '/categories/flower');

                });

                it('Switch between locations in dropdown', function() {
                    cy.get('body').then((body) => {
                        if (body.find('.age-gate-buttons .age-gate-submit-yes').length > 0) {
                            cy.get('.age-gate-buttons .age-gate-submit-yes').click();
                        }
                    });
                    cy.get('nav.elementor-nav-menu--main').contains('Resources').click();
                    cy.wait(2000); 
                    cy.get('ul[id^="sm-"]').contains('Virtual Budtender').click();
                    cy.url().should('include', '/virtual-budtender');
                });
            }
        });
    });
});