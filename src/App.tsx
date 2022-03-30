import powerImage from './assets/powered.png';
import styles from './App.module.css';
import { useState } from 'react';
const App = () => {

  const [heihtField, setHeihtField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  const handleCalculeButton = () => {
    if(heihtField && weightField){

    }else{
      alert('Digite todos os campos.');
    }
  }

  return (
    <div className={styles.main}>
      <header className={styles.headerContainer}>
        <img src={powerImage} alt="" width={200} />
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmentro
            adorado pela Organização Mudial de Saúde para calcular o peso ideal
            para cada pessoa.
          </p>

          <input 
            type="number"
            placeholder='Digite sua altura. Ex 1.5 (em métros)'
            value={heihtField > 0 ? heihtField : ''}
            onChange={e => setHeihtField(parseFloat(e.target.value))}
          />
          <input 
            type="number"
            placeholder='Digite seu peso. Ex 75.4 (em kg)'
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
          />

          <button onClick={handleCalculeButton} >Calcular</button>
        </div>
        <div className={styles.rightSide}>
          ....
        </div>
      </div>
    </div>
  );
} 

export default App;
