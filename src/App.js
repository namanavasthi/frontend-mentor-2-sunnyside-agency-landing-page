import { Header } from "./Header";
import { Nav } from "./Nav";
import { Main } from "./Main";
import { Footer } from "./Footer";

function App() {
  return (
    <div className="flex">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
