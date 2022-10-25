import { VOSviewerOnlineDimensions } from 'vosviewer-online/dimensions';
import data from './Dimensions_example_network.json';
import data2 from './Dimensions_scientometrics_researcher_co-authorship_network.json';

function App() {
  return (
    <>
      <div style={{
        position: 'absolute', top: '10px', left: '10px', width: '800px', height: '700px', border: 'lightpink solid 5px'
      }}>
        <VOSviewerOnlineDimensions data={data} parameters={{ attraction: 2, repulsion: -1 }} />
      </div>
      <div style={{
        position: 'absolute', top: '10px', left: '840px', width: '800px', height: '700px', border: 'lightpink solid 5px'
      }}>
        <VOSviewerOnlineDimensions data={data2} parameters={{ looker_ui: true }} />
      </div>
    </>
  );
}

export default App;
