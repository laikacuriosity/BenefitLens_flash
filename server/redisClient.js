const redis = require('redis');

const client = redis.createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379'
});

client.on('error', (err) => {
  console.error('Redis Error:', err);
});

(async () => {
  try {
    await client.connect();
    console.log('Redis Connected');
  } catch (err) {
    console.error('Failed to connect Redis:', err);
  }
})();

module.exports = client;
