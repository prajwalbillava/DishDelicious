import "./App.css";
//import Navbar from "./components/Navbar";

import Navbar1 from "./components/Navbar1";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Login from "./components/Login";
import Footer from "./components/Footer";
import RecipeShow from "./components/RecipeShow";
import ShowDetail from "./components/ShowDetail";
import PrivateRoute from "./components/PrivateRoute";
import RecipePDFGenerator from "./components/RecipePDFGenerator";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  Link,
} from "react-router-dom";
import Forgotpassword from "./components/Forgotpassword";
import Errorpage from "./components/Errorpage";
import ErrorBoundry from "./components/ErrorBoundry";
import SignUp from "./components/SignUp";
import Login1 from "./components/Login1";
import { ShowContext } from "./Context/ShowContext";
import { useState } from "react";
import { AuthProvider } from "./Context/AuthContext";
import Profile from "./components/Profile";
import SavedRecipe from "./components/SavedRecipe";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const [recipes, setRecipes] = useState([]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <>
            <Navbar1 />
            <div className="outlet">
              <ErrorBoundry>
                <Outlet />
              </ErrorBoundry>
            </div>
            <Footer />
          </>
        }
      >
        <Route element={<PrivateRoute />}>
          <Route index element={<Home />}></Route>
        </Route>
        <Route path="/login1" element={<Login1 linkComponent={Link} />}></Route>
        <Route path="/signup" element={<SignUp linkComponent={Link} />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/login" element={<Login linkComponent={Link} />}></Route>
        <Route
          path="/recipesearch"
          element={<RecipeShow linkComponent={Link} />}
        ></Route>
        <Route path="/recipeshow/:id" element={<ShowDetail />}></Route>
        <Route path="/recipepdf/:id" element={<RecipePDFGenerator />}></Route>
        <Route path="/forgotpass" element={<Forgotpassword />}></Route>
        <Route path="/savedrecipe" element={<SavedRecipe />}></Route>
        <Route path="*" element={<Errorpage linkComponent={Link} />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <ErrorBoundry>
        <Provider store={store}>
          <ShowContext.Provider value={{ recipes, setRecipes }}>
            <AuthProvider>
              <RouterProvider router={router} />
            </AuthProvider>
          </ShowContext.Provider>
        </Provider>
      </ErrorBoundry>
    </div>
  );
}

export default App;
