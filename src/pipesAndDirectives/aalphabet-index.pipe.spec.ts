import { AlphabetIndexPipe } from './alphabet-index.pipe';

describe('AlphabetIndexPipe', () => {
  let pipe: AlphabetIndexPipe;

  beforeEach(() => {
    pipe = new AlphabetIndexPipe();
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
});
