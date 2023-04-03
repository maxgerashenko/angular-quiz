import { IndexPetterPipe } from './index-petter.pipe';

describe('IndexPetterPipe', () => {
  let pipe: IndexPetterPipe;

  beforeEach(() => {
    pipe = new IndexPetterPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform a number into the corresponding lowercase letter', () => {
    // Test cases
    const testCases = [
      { input: 0, expected: 'a' },
      { input: 1, expected: 'b' },
      { input: 25, expected: 'z' },
    ];

    // Run the tests
    testCases.forEach(({ input, expected }) => {
      const result = pipe.transform(input);
      expect(result).toBe(
        expected,
        `Expected ${input} to be transformed into ${expected}`
      );
    });
  });
});
