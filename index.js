// Code your solution in this file!

let companyCeo = 'Susan Smith';
const companyName = 'Scuber';
let mostProfitableNeighborhood = 'Chelsea';

describe('index.js', function () {
    describe('companyName', function () {
        it('is set as Scuber', function () {
            expect(companyName).to.equal('Scuber');
        });

    });
    describe('mostProfitableNeighborhood', function () {
        it('is declared as equal to Chelsea', function () {
            expect(mostProfitableNeighborhood).to.equal('Chelsea');
        });
    });

    describe('companyCeo', function () {
        it('is declared as equal to Susan Smith', function () {
            expect(companyCeo).to.equal('Susan Smith');
        });
    });
});
