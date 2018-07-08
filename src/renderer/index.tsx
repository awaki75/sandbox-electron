import * as React from 'react';
import { render } from 'react-dom';
import Button from '@material-ui/core/Button';

// tslint:disable-next-line:variable-name
const App = ({ name }: { name: string }) => (
  <Button variant="contained" color="primary">
    Hello {name}
  </Button>
);

render(<App name="Taylor" />, document.getElementById('app'));
