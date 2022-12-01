import React, { useState } from "react";
import { VOSviewerOnline } from 'vosviewer-online';
import dataset1 from './JOI_2007-2016_co-authorship_network.json';
import dataset2 from './Economics_journal_co-citation_network.json';

function App() {
  const [loadDataset1, setLoadDataset1] = useState(true);
  const [useSimpleUi, setUseSimpleUi] = useState(true);

  return (
    <div style={{ position: 'absolute', top: '50px', left: '100px' }}>
      <div style={{ margin: "10px 0" }}>
        <button onClick={() => setLoadDataset1(!loadDataset1)}>
          Load a different dataset
        </button>
        <button onClick={() => setUseSimpleUi(!useSimpleUi)}>
          Toggle simple_ui option
        </button>
      </div>
      <div style={{ width: '1100px', height: '700px', border: 'lightpink solid 5px' }}>
        <VOSviewerOnline
          data={loadDataset1 ? dataset1 : dataset2}
          parameters={{
            simple_ui: useSimpleUi,
          }}
        />
      </div>
    </div>
  );
}

export default App;
