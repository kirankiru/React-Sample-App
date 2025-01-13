import './styles/global.scss';
import './styles/custom-bootstrap.scss';
import './App.scss';
import Header from './components/common/header';
import DisplayPosts from './components/posts/displayPosts';

const App = () => {
  return (
    <div className="App">
      <Header />
      <DisplayPosts />
    </div>
  );
};

export default App;
