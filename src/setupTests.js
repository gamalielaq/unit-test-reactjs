
// import '@testing-library/jest-dom/extend-expect';

import Enzyme from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

expect.addSnapshotSerializer( createSerializer({ mode: 'deep'}) );
