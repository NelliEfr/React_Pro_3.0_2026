import { Box, TextField, Typography } from '@mui/material';
import { useState, type FC } from 'react';

export const UseEffectEvent: FC = () => {
    const [value, setValue] = useState('');

    return (
        <Box sx={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
            <Typography align="center" variant="h3" sx={{ mb: 2 }}>
                useEffectEvent
            </Typography>

            <TextField
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="FIO"
                id="outlined-basic"
                label="FIO"
                variant="outlined"
            />
        </Box>
    );
};
