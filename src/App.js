import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from "./Home"
import About from './About';
import PostPage from './PostPage'
import NewPost from './NewPost'
import NavBar from './NavBar';
import Footer from './Footer';
import EditPost from './EditPost';
import Missing from './Missing'
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataProvider } from './context/DataContext';
function App() {
 
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
    <DataProvider>
      <div style={{ paddingBottom: 50 }}>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/post' element={<NewPost />
          } />
          <Route path='/aboutus' element={<About />} />
          <Route path='/viewpost/:id' element={<PostPage/>} />
          <Route path='/edit/:id' element={<EditPost />} />
          <Route path='*' element={<Missing />}/>
        </Routes>
      </div>
      <div>
        <Footer />
      </div>

    </DataProvider>
    </div>

  );
}

export default App;
