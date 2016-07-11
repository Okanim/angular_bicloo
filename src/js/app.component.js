const AppComponent = {
  template: `
  <header>
    <h1>Angular Bicloo</h1>
    <div>A website to work with Angular 1.5 and an open API</div>
    <div><a ui-sref="home">Home</a>
  </header>
  <section ui-view>
  </section>
  `
}

export default AppComponent;
