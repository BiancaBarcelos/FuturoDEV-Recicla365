import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import "../../index.css"
import { useEffect } from 'react';



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

function getStyles(residuo, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(residuo) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip({setResiduosAceitos,residuos,nomeCampo}) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
 
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  useEffect(()=>{
    setResiduosAceitos(personName)
  },[personName])
  return (
    <div className='formRow'>
      <FormControl sx={{ mt: 2 }} className='width-3'>
        <InputLabel id="demo-multiple-chip-label" color="success">{nomeCampo}</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          className='selectMultiple'
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          color="success"
          
          input={<OutlinedInput id="select-multiple-chip" 
          color="success" label={nomeCampo} />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {residuos.map((residuo) => (
            <MenuItem
              key={residuo}
              value={residuo}
              style={getStyles(residuo, personName, theme)}
            >
              {residuo}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
