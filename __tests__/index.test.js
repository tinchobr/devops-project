const request = require('supertest');
const app = require('../index');

describe('API Endpoints', () => {

  it('should return status OK for health check', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'OK');
  });

  it('should create a new user', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        name: 'John Doe',
        email: 'johndoe@example.com',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('name', 'John Doe1');
    expect(res.body).toHaveProperty('email', 'johndoe@example.com');
  });

  it('should fetch all users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should fetch a user by ID', async () => {
    // Create a user first
    await request(app)
      .post('/users')
      .send({
        name: 'Jane Doe',
        email: 'janedoe@example.com',
      });

    // Now fetch the user by ID
    const res = await request(app).get('/users/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', 1);
    expect(res.body).toHaveProperty('name', 'John Doe'); // Assuming this is the first user created
  });

  it('should update an existing user', async () => {
    const res = await request(app)
      .put('/users/1')
      .send({
        name: 'Jane Doe',
        email: 'janedoe@example.com',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name', 'Jane Doe');
    expect(res.body).toHaveProperty('email', 'janedoe@example.com');
  });

  it('should delete a user', async () => {
    const res = await request(app).delete('/users/1');
    expect(res.statusCode).toEqual(204);
  });
});
