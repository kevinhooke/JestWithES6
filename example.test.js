import { example1, example2WithModule } from './example.js';

test('exported function from a module is executed ok', () => {

    let result = example1('a'); 
    expect(result).toBe('example1 called with: a');
});

test('function in ES module returned original unmocked value', () => {
    let result = example2WithModule();
    expect(result).toBe('value from function / original return value');
});