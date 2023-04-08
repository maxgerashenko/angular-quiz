import { inCorrectFirstPipe } from './in-correct-first.pipe';

describe('inCorrectFirst', () => {
  it('create an instance', () => {
    const pipe = new inCorrectFirstPipe();
    expect(pipe).toBeTruthy();
  });
});
