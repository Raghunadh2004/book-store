const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const app = require('../index.js'); // Your Express app
const Order = require('../src/orders/order.model.js'); // Import your Order model

const { expect } = chai;
chai.use(chaiHttp);

describe('GET /orders/email/:email', () => {
    let findStub;

    afterEach(() => {
        // if (findStub) {
        //     findStub.restore(); // Restore the stub after each test
        // }
    });
      
    it('should return orders when orders are found for the email', async function() {
        const fakeOrders = [
            { _id: '123', name: 'Order1', email: 'test@example.com', totalPrice: 100 },
            { _id: '124', name: 'Order2', email: 'test@example.com', totalPrice: 150 }
        ];

        // Stub the find method to return fake orders
        // findStub = sinon.stub(Order, 'find').resolves(fakeOrders);

        const res = await chai.request(app).get('/api/orders/email/user@user.com');

        expect(res.status).to.equal(200);
        expect(res.body).to.have.lengthOf(7);
        expect(res.body[0].email).to.equal('user@user.com');
    });
    

    it('should return 404 if no orders are found for the email', async () => {
        const fakeOrders = [];
        
        // Stub the find method to return no orders
        // findStub = sinon.stub(Order, 'find').resolves(fakeOrders);
        
        const res = await chai.request(app).get('/api/orders/email/test@example.com');
        
        expect(res.status).to.equal(404);
        expect(res.body.message).to.equal('Order not found');
    });

});
