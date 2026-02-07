// jest.config.js - The "Zero Tolerance" Configuration
module.exports = {
  // Core stability settings
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  
  // Resource leak detection
  detectOpenHandles: true,
  detectOpenHandlesTimeout: 1000,
  
  // Don't hide problems
  forceExit: false,
  
  // Reasonable timeouts
  testTimeout: 10000,
  
  // Find hidden dependencies
  randomize: true,
  
  // Smart parallelization
  projects: [
    {
      displayName: 'unit',
      testMatch: ['**/*.test.{ts,tsx}', '!**/*.integration.test.{ts,tsx}'],
      maxWorkers: '50%'
    },
    {
      displayName: 'integration',
      testMatch: ['**/*.integration.test.{ts,tsx}'],
      maxWorkers: 1,
      testTimeout: 30000
    }
  ],
  
  // Setup files
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
