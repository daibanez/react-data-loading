import dataLoadedAction from './dataLoadedAction';

async function callApiService(dispatch) {
  return Promise.resolve({
    name: 'my data',
    value: 12345
  }).then(json => {
    dispatch(dataLoadedAction(json));
  });
}

export default callApiService;
