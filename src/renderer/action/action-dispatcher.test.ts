import { ActionDispatcher } from './action-dispatcher';

test('increment', () => {
  const fn = jest.fn();
  const actions = new ActionDispatcher(fn);

  actions.increment();

  expect(fn.mock.calls).toEqual([[{ type: 'INCREMENT' }]]);
});

test('decrement', () => {
  const fn = jest.fn();
  const actions = new ActionDispatcher(fn);

  actions.decrement();

  expect(fn.mock.calls).toEqual([[{ type: 'DECREMENT' }]]);
});
