function dataLoadedAction(data) {
  return {
    type: 'DATA_LOADED',
    payload: data
  };
}

export default dataLoadedAction;
