import Header from './components/Header'
import Introduction from './components/Introduction'
const App = () => {
  return (
    <div className="h-screen bg-cover overflow-hidden bg-gray-500">
      <Header/>
      <Introduction/>
    </div>
  );
}

export default App;
