import { VOSviewerOnlineDimensions } from 'vosviewer-online/dimensions';
import data from './Dimensions_example_network.json';

function App() {
  return (
    <div style={{
      position: 'absolute', top: '100px', left: '100px', width: '1100px', height: '700px', border: 'lightpink solid 5px'
    }}>
      <VOSviewerOnlineDimensions data={data} parameters={{ attraction: 2, repulsion: -1 }} />
    </div>
  );
}

export default App;
