/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	rootDir: './',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
	modulePaths: ['<rootDir>'],
	moduleNameMapper: {
		'^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/tests/mocks/fileMock.ts',
		'^.+\\.(css|less|scss)$': '<rootDir>/tests/mocks/styleMock.ts',
	},
	transform: {
		'.*\\.(tsx?)$': ['@swc/jest', { jsc: { transform: { react: { runtime: 'automatic' } } } }], // using swc instead of babel its super fast !!!!!
	},
}
