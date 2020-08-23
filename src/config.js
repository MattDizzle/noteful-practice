module.exports = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://dunder_mifflin:new123@localhost/noteful',
  TEST_DATABASEB_URL:process.env.TEST_DATABASE_URL || 'postgresql://dunder_mifflin:new123@localhost/noteful_test'
};