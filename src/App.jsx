import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header"; // Importing the Header component
import Home from "./components/Home"; // Importing the Home component
import ListPages from "./components/ListPage"; // Importing the ListPages component

import { UserContextProvider } from "./context/usercontext"; // Importing the UserContextProvider from your context folder

function App() {
  return (
    // Main container div with the class "App"
    <div className="App">
      
        {/* Header component for navigation */}
        <Header />

        {/* UserContextProvider wraps the application, providing user-related context */}
        <UserContextProvider>
          {/* Routes component defines the routes and their corresponding components */}
          <Routes>
            {/* Route for the home page, rendering the Home component */}
            <Route path="/" element={<Home />} />
            
            {/* Route for the user list page, rendering the ListPages component */}
            <Route path="/ListPages" element={<ListPages />} />
          </Routes>
        </UserContextProvider>
      
    </div>
  );
}

export default App;