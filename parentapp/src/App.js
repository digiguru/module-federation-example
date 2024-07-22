import React, {useState, Suspense} from 'react';
const RemoteHome = React.lazy(() => import("homeapp/App"))
const RemoteAboutUs = React.lazy(() => import("aboutusapp/App"))


const App = () => {
  const [page, setPage] = useState("home")
  return (

    <div>
      <div
        style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
          backgroundColor: 'greenyellow',
        }}
      >
        <h1>Parent App</h1>
        <nav>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("aboutus")}>About</button>
        </nav>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        {page === "home" && <RemoteHome />}
        {page === "aboutus" && <RemoteAboutUs />}
      </Suspense>
    </div>
  );
};

export default App;
