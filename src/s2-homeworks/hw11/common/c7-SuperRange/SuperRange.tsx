import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx = {{
                width: 147,
                '& MuiSlider-root': {color: "#00CC22"},
                '& .MuiSlider-thumb': {
                    width: "18px",
                    height: "18px",
                    backgroundColor: "#ffffff",
                    border: '2px solid #00CC22',
                },
                '& .MuiSlider-thumb:before': {
                    width: '50%',
                    height: '50%',
                    backgroundColor: '#00CC22'
                },


                '& .MuiSlider-track': {
                    backgroundColor: "#00CC22",
                },
                '& .MuiSlider-rail': {
                    backgroundColor: "#000000",
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
