import { VOSviewerOnlineDimensions } from 'vosviewer-online/dimensions';
import data from './Dimensions_scientometrics_researcher_co-authorship_network.json';

function App() {
  return (
    <div style={{
      position: 'absolute', top: '100px', left: '100px', width: '1100px', height: '700px', border: 'lightpink solid 5px'
    }}>
      <VOSviewerOnlineDimensions data={data} parameters={{ scale: 1.0 }} />
    </div>
  );
}

export default App;
