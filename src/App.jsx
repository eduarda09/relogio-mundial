
import { useState } from 'react';

import TimeZoneClock from './components/TimeZoneClock';


function App() {
  const fusosHorarios = [
    "UTC",
    "GMT",
    "America/New_York",
    "America/Chicago",
    "America/Denver",
    "America/Los_Angeles",
    "Europe/London",
    "Europe/Berlin",
    "Asia/Tokyo",
  ];

  const fusoHorarioLocal = Intl.DateTimeFormat().resolvedOptions().timeZone

  const [fusosHorariosSelecionado, setFusosHorariosSelecionados] = useState([fusoHorarioLocal,

  ]);

  const adicionarFuso = (e) => {
    const novoFuso = e.target.value;

    if(!fusosHorariosSelecionado.includes(novoFuso)) {
      setFusosHorariosSelecionados([...fusosHorariosSelecionado, novoFuso]);
    }
  };


  return (
    <>
    <div>
      <h1>Relógio Mundial</h1>
      <select onChange ={(e) => adicionarFuso(e)}>
        <option value="" disabled select>
          Selecione um fuso horário
        </option>
        {fusosHorarios.map((fuso) => (
          <option key={fuso} value={fuso}>{fuso}</option>
        ))}
      </select>
      <div>
        {fusosHorariosSelecionado.map((fuso) => (
          <TimeZoneClock key={fuso} timeZone={fuso} />
        ))}

      </div>
    </div>
    </>
  )
}

export default App
