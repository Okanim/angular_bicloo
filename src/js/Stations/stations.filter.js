const StationsFilter = {
  removeNoise: () => (input) => input.substring(input.indexOf('-')+1,  input.length)
}

export default StationsFilter;
