const withPWA = require('next-pwa')({
    dest: 'public', // Output the service worker in the public directory
    register: true,
    skipWaiting: true,
  });
  
  module.exports = withPWA({
    // Your Next.js config goes here
  });