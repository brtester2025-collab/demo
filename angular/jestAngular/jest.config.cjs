module.exports = {
    preset: 'jest-preset-angular',
    testEnvironment: 'jsdom',
    globalSetup: 'jest-preset-angular/global-setup',
    setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
    testMatch: ['**/?(*.)+(spec|test).ts'],
    moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
};