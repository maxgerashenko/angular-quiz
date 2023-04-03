import { CorrectFirstPipe } from './correct-first.pipe';

describe('CorrectFirstPipe', () => {
  let pipe: CorrectFirstPipe;

  beforeEach(() => {
    pipe = new CorrectFirstPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should sort questions by putting correct answers first', () => {
    const questions = [
      { question: 'Q1', answer: 'A' },
      { question: 'Q2', answer: 'B' },
      { question: 'Q3', answer: 'C' },
    ];
    const answers = ['A', 'X', 'C'];
    const expected = [
      { question: 'Q1', answer: 'A', selected: 'A' },
      { question: 'Q3', answer: 'C', selected: 'C' },
      { question: 'Q2', answer: 'B', selected: 'X' },
    ];

    const result = pipe.transform(questions, answers);
    expect(result).toEqual(expected);
  });

  it('should sort questions by putting incorrect answers first when isInversed is true', () => {
    const questions = [
      { question: 'Q1', answer: 'A' },
      { question: 'Q2', answer: 'B' },
      { question: 'Q3', answer: 'C' },
    ];
    const answers = ['A', 'X', 'C'];
    const expected = [
      { question: 'Q2', answer: 'B', selected: 'X' },
      { question: 'Q1', answer: 'A', selected: 'A' },
      { question: 'Q3', answer: 'C', selected: 'C' },
    ];

    const result = pipe.transform(questions, answers, true);
    expect(result).toEqual(expected);
  });
});
