import reducer from '../reducer';

test('increment', () => {
  const x = reducer(0, { type: 'INCREMENT' });
  expect(x).toBe(1);
});

test('decrement', () => {
  const x = reducer(0, { type: 'DECREMENT' });
  expect(x).toBe(-1);
});

test('unknwon', () => {
  const x = reducer(1, { type: 'UNKNOWN' } as any);
  expect(x).toBe(1);
});

test('default value', () => {
  const x = reducer(undefined, { type: 'UNKNOWN' } as any);
  expect(x).toBe(0);
});
