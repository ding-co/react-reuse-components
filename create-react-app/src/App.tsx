import { Routes, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Table from './components/table/Table';
import { tableData, theaders } from './mock-data/mock-data';
import { Home } from './pages';
import './styles/globals.scss';

function App() {
  return (
    <div style={{ padding: '150px' }}>
      <nav style={{ width: '100%', textAlign: 'center' }}>
        <Link to="/">Home</Link> | <Link to="/table">Table</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/table"
          element={
            <Table
              headers={theaders}
              data={tableData}
              options={{ clickable: true, navigatePath: '/table' }}
            />
          }
        />
        <Route path="/table/:id" element={<></>} />
      </Routes>
    </div>
  );
}

export default App;
