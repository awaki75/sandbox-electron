interface SimpleAction<T> {
  type: T;
}

export type Action = SimpleAction<'INCREMENT'> | SimpleAction<'DECREMENT'>;
