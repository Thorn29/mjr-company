import React from 'react';
import { useTranslation } from 'react-i18next';
import './MachineList.css';

import Img1 from '../../images/basic/machinepark.jpg';

const MachineList = () => {

  const { t } = useTranslation();
  const machineSlots = Array.from({length: 16}, (v, i) => i);

  return(
    <div className='machine-list'>
    <h4 className='machine-list__title'>{t('about.t3')}</h4>
    <div className='machine-list__container'>
      <img className='machine-list__image' src={Img1} alt="Mašinski park MJR Alatnica" />
      <ul className='machine-list__list'>
      {machineSlots.map(el => <li key={el} className='machine-list__item'>{t(`about.li${el + 1}`)}</li>)}
      </ul>
      </div>
    </div>
  );
}

export default MachineList;
