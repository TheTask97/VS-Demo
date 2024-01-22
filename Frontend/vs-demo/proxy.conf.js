const BACKEND_API_URL = process.env.BACKEND_API_URL || 'http://localhost:8080';

module.exports = {
  '/todo/*': {
    target: BACKEND_API_URL,
    secure: false,
    logLevel: 'debug',
    changeOrigin: true,
  },
  // Add other proxy configurations as needed
};
