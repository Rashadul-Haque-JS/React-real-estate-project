import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Login from "./views/Login";
import Register from "./views/Register";
import Task from "./views/Task";
import Profile from "./views/Profile";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { LoginContextProvider } from "./context/authState/loginState";
import { TaskCtxProvider } from "./context/taskState";
import { RegiContextProvider } from "./context/authState/regiState";
import { UserContextProvider } from "./context/userState";

function App() {
  return (
    <LoginContextProvider>
      <RegiContextProvider>
        <UserContextProvider>
          <TaskCtxProvider>
            <div className="App">
              <BrowserRouter>
                <header className="App-header">
                  <Navigation />
                </header>
                <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/task" element={<Task />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </main>
                <footer>
                  <Footer />
                </footer>
              </BrowserRouter>
              <ToastContainer theme="colored" />
            </div>
          </TaskCtxProvider>
        </UserContextProvider>
      </RegiContextProvider>
    </LoginContextProvider>
  );
}

export default App;
