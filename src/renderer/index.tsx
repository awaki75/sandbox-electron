import * as React from 'react';
import { render } from 'react-dom';

// tslint:disable-next-line:variable-name
const App = ({ name }: { name: string }) => <div>Hello {name}</div>;

render(<App name="Taylor" />, document.getElementById('app'));
