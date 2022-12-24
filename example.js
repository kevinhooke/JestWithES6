import { exampleFunctionFromModule } from './example-module.js';

export const example1 = (param) => {
    return `example1 called with: ${param}`;
}

export const example2WithModule = () => {
    return "value from function / " + exampleFunctionFromModule();     
}
