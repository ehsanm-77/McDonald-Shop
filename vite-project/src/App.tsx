import { Sidebar } from './layout/sidebar';
import { Main } from './layout/main';
function App() {
  return (
    <>
      <div className="bg-red-500 grid grid-cols-1">
        <Main />
        <Sidebar />
      </div>
    </>
  );
}
export default App;
