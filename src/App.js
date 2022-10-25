import { VOSviewerOnlineZetaAlpha } from 'vosviewer-online/zeta-alpha';
import data from './Zeta-Alpha_ICLR2022.json';

function App() {
  return (
    <div style={{
      position: 'absolute', top: '100px', left: '100px', width: '1100px', height: '700px', border: 'lightpink solid 5px'
    }}>
      <VOSviewerOnlineZetaAlpha data={data} parameters={{ scale: 1.0 }} />
    </div>
  );
}

export default App;
