import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

// global.fetch = jest.fn(() => Promise.resolve({
//   json: () => {
//     return (
//       [{
//         EpochTime: 1234,
//         HasPrecipitation: true,
//         IsDayTime: true,
//         Link: 'string',
//         LocalObservationDateTime: 'string',
//         MobileLink: 'string',
//         PrecipitationType: 'string',
//         Temperature: { Imperial: { Value: 60 }, Metric: { Value: 10 } },
//         WeatherIcon: 12,
//         WeatherText: 'string'
//       }]
//     );
//   }
// }));
jest.useFakeTimers();
describe('renders app', () => {
  afterAll(() => cleanup());


  it('renders learn react link', () => {
    const { asFragment } = render(<App />);
    
    expect(asFragment()).toMatchSnapshot();
  });
});

