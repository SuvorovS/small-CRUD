import React from 'react';
import { DateField } from 'react-date-picker';

import './dp.scss';

export default ({defaultValue, dateFormat }) => {
  return <DateField
    defaultValue = {defaultValue}
    dateFormat = {dateFormat}
  />
}