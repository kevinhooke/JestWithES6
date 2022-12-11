import { example1 } from './example.js'; 
test('exported function from a module is executed ok', () => {

    let result = example1('a'); 
    expect(result).toBe('example1 called with: a');
})