import Table from './components/table/Table';
import { theaders, tableData } from './etc/sample-data';
import './styles/globals.scss';

function App() {
  return (
    <div>
      <Table headers={theaders} data={tableData} />
    </div>
  );
}

export default App;
