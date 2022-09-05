import { VOSviewerOnline } from 'vosviewer-online';
import data from './JOI_2007-2016_co-authorship_network.json';

function App() {
  return (
    <div style={{
      position: 'absolute', top: '100px', left: '100px', width: '1100px', height: '700px', border: 'lightpink solid 5px'
    }}>
      <VOSviewerOnline data={data} parameters={{ scale: 1.0 }} />
    </div>
  );
}

export default App;
