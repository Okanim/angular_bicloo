import controller from './app.controller';

const AppComponent = {
  controller,
  template: `
  <header>
    <h1>Angular Bicloo</h1>
    <div>A website to work with Angular 1.5 and an open API</div>
    <div><a ui-sref="home">Home</a></div>
    <leafmap positions="$ctrl.stationsPositions"></leafmap>
  </header>
  <section ui-view>
  </section>
  `
}

export default AppComponent;
