import Navbar from "./components/Navbar";
import NewsAddForm from "./components/NewsAddForm";
import NewsFilter from "./components/NewsFilters/NewsFilter";
import NewsList from "./components/NewsList/NewsList";

function App() {
  return (
    <div className="app">
      <div className=" container">
        <Navbar />
        <div className="content">
          <NewsList />
          <div className="content_Page">
            <NewsAddForm />
            <NewsFilter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
