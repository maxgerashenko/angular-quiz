import { ArrayPipe } from './array.pipe';

describe('ArrayPipe', () => {
  let pipe: ArrayPipe;

  beforeEach(() => {
    pipe = new ArrayPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform an array into a string using the default separator', () => {
    const inputArray = ['apple', 'banana', 'orange'];
    const expectedString = 'apple,banana,orange';

    const result = pipe.transform(inputArray);
    expect(result).toBe(expectedString);
  });

  it('should transform an array into a string using a custom separator', () => {
    const inputArray = ['apple', 'banana', 'orange'];
    const customSeparator = ' | ';
    const expectedString = 'apple | banana | orange';

    const result = pipe.transform(inputArray, customSeparator);
    expect(result).toBe(expectedString);
  });
});
