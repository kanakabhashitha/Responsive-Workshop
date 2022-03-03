import "bootstrap/dist/css/bootstrap.min.css";

import ResponsiveBehaviorNavBar from "./components/ResponsiveBehaviorNavBar";
import NavbarOffcanvas from "./components/NavbarOffcanvas";
import GridSystem from "./components/GridSystem";

function App() {
  return (
    <>
      <ResponsiveBehaviorNavBar />
      <NavbarOffcanvas />
      <GridSystem />
    </>
  );
}

export default App;
