import React from 'react'
import {Slider, SliderProps, useTheme} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
  const theme = useTheme()
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
              marginLeft: 0.1,
              marginRight: 2.5,
              width: 147,
              color: theme.palette.primary.main,
              '& .MuiSlider-thumb': {
                width: 18,
                height: 18,
                backgroundColor: theme.palette.primary.main,
                border: `6px solid white`,
                borderRadius: '50%',
                outline: `1px solid ${theme.palette.primary.main}`
              },
              '& .MuiSlider-rail': {
                backgroundColor: theme.palette.primary.light
              }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
