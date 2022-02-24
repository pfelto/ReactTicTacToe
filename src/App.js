function App() {
  return (
    <div className="container-fluid">
      <h1 className="text-primary text-center">Player X, it's your turn!</h1>
      <div className="row justify-content-center">
        <div class="col-8" style={{ border: "2px solid black" }}>
          <div className="row">
            <div className="col-4">
              <button className="btn btn-primary btn-block">
                <i className="fa fa-circle"></i>
              </button>
            </div>
            <div className="col-4">
              <button className="btn btn-primary btn-block">
                <i className="fa fa-circle"></i>
              </button>
            </div>
            <div className="col-4">
              <button className="btn btn-primary btn-block">
                <i className="fa fa-circle"></i>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <button className="btn btn-primary btn-block">
                <i className="fa fa-circle"></i>
              </button>
            </div>
            <div className="col-4">
              <button className="btn btn-primary btn-block">
                <i className="fa fa-circle"></i>
              </button>
            </div>
            <div className="col-4">
              <button className="btn btn-primary btn-block">
                <i className="fa fa-circle"></i>
              </button>
            </div>
          </div>
          <div className="row" style={{ border: "2px solid red" }}>
            <div className="col-4">
              <button className="btn btn-primary btn-block">
                <i className="fa fa-circle"></i>
              </button>
            </div>
            <div className="col-4">
              <button className="btn btn-primary btn-block">
                <i className="fa fa-circle"></i>
              </button>
            </div>
            <div className="col-4">
              <button className="btn btn-primary btn-block">
                <i className="fa fa-circle"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
