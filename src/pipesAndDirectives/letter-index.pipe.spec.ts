import { LetterIndexPipe } from './letter-index.pipe';

describe('LetterIndexPipe', () => {
  let pipe: AlphabetIndexPipe;

  beforeEach(() => {
    pipe = new LetterIndexPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform a valid letter to its corresponding index', () => {
    expect(pipe.transform('a')).toBe(0);
    expect(pipe.transform('b')).toBe(1);
    expect(pipe.transform('z')).toBe(25);
  });

  it('should transform an invalid letter to 0', () => {
    expect(pipe.transform('1')).toBe(0);
    expect(pipe.transform(' ')).toBe(0);
    expect(pipe.transform('!')).toBe(0);
  });

  it('should return correct index for uppercase letters', () => {
    const result = pipe.transform('D');
    expect(result).toEqual(3);
  });

  it('should return 0 for invalid characters', () => {
    const expectedOutput = 0;
    const result = pipe.transform('@');
    expect(result).toEqual(0);
  });
});
