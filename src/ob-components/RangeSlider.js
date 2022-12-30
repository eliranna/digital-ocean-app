import React, {useState, useEffect} from 'react'
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: '#FF385C',
  height: 3,
  padding: '13px 0',
  '& .MuiSlider-thumb': {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
    },
    '& .airbnb-bar': {
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  '& .MuiSlider-track': {
    height: 3,
  },
  '& .MuiSlider-rail': {
    color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
    opacity: theme.palette.mode === 'dark' ? undefined : 1,
    height: 3,
  },
}));

function AirbnbThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

const RangeSlider = ({max, min, defaultValue, valueLabelFormat, onValueChange}) => {

    return (
        <AirbnbSlider
            slots={{ thumb: AirbnbThumbComponent }}
            getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
            defaultValue={defaultValue}
            valueLabelDisplay="auto"
            max={max}
            min={min}
            valueLabelFormat={valueLabelFormat}
            onChange={onValueChange}
        />
    )
}

export default RangeSlider;