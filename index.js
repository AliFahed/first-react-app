function Navbar() {
  return (
    <nav>
      <div>
        <h1>React</h1>
      </div>

      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>
    </nav>
  );
}

function MainContent() {
  return (
    <main>
      <h2>Welcome to React page!</h2>
      <p>React is a JavaScript Library.</p>
    </main>
  );
}

ReactDOM.render(
  <div>
    <Navbar />
    <MainContent />
  </div>,
  document.getElementById("root")
);
