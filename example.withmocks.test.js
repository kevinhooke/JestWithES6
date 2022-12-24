import {jest} from '@jest/globals';

//See Jest issue: https://github.com/facebook/jest/issues/10025
//use unstable_mockModule to mock the return value for exampleFunctionFromModule()
jest.unstable_mockModule('./example-module.js', () => ({
    exampleFunctionFromModule: jest.fn(
        () => {
            return 'mocked return!';
        }
    )
}));
//IMPORTANT! based on comments in this issue that are not covered in the docs
//at this point, the only way this approch works is you MUST await
//the import to complete before the test runs
const { example2WithModule } = await import('./example.js');

//does NOT work with a regular inport
//import { example2WithModule } from './example.js';

test('function in ES module returns mocked value', () => {    
    let result = example2WithModule();
    expect(result).toBe('value from function / mocked return!');
})