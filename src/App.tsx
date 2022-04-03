import powerImage from './assets/powered.png';
import styles from './App.module.css';
import { useState } from 'react';
import { GridItem } from './components/GridItem';
import leftArrowImage from './assets/leftarrow.png';

import { calculateImc, level, levels } from './helpers/imc';

const App = () => {

  const [heightField, setHeihtField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState< level | null> (null);

  const handleCalculeButton = () => {
    if(heightField && weightField){
      setToShow(calculateImc(heightField, weightField));
    }else{
      alert('Digite todos os campos.');
    }
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeihtField(0);
    setWeightField(0);
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
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeihtField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <input 
            type="number"
            placeholder='Digite seu peso. Ex 75.4 (em kg)'
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />

          <button 
            onClick={handleCalculeButton} 
            disabled={toShow ? true : false} 
          > Calcular
          </button>
        </div>
        <div className={styles.rightSide}>
          {!toShow &&
            <div className={styles.grid}>
              {levels.map((item, key)=>(
                <GridItem key={key} item={item} />
              ))}
            </div>
          }
          {toShow && 
            <div className={styles.rigthBig}>
              <div className={styles.rigthArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt='' width={25} />
              </div>
              <GridItem item={toShow}/>
            </div>
          }
        </div>
      </div>
    </div>
  );
} 

export default App;
