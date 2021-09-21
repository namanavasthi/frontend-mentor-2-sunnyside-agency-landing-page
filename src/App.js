import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";

function App() {
  return (
    <div className="flex flex-col w-full relative bg-neutral-background">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
