import { Box, Button, TextField, Typography } from '@mui/material';
import { useState, type ChangeEventHandler, type FC } from 'react';
import { wait } from '6-shared/lib/wait';

type User = { id: number; name: string };

export const UseOptimistic: FC = () => {
    const [value, setValue] = useState('');
    const [users, setUsers] = useState<User[]>([
        {
            id: 1,
            name: 'First',
        },
        {
            id: 2,
            name: 'Second',
        },
    ]);

    const changeHandler: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
        setValue(e.target.value);
    };

    const clickHandler = async () => {
        const newUser = {
            id: Date.now(),
            name: value,
        };

        await wait(2e3);

        setUsers((prev) => {
            return [...prev, newUser];
        });

        setValue('');
    };

    return (
        <>
            <Typography align="center" variant="h3" sx={{ mb: 2 }}>
                useOptimistic
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                <TextField
                    sx={{ mx: 1 }}
                    value={value}
                    onChange={changeHandler}
                    placeholder="Prefix"
                    id="outlined-basic"
                    label="Prefix"
                    variant="outlined"
                />

                <Button onClick={clickHandler} variant="contained">
                    Add
                </Button>
            </Box>
            <Typography align="center" variant="h4" sx={{ mb: 2 }}>
                Users:
            </Typography>
            <Box sx={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
                {users.map(({ id, name }, index) => (
                    <Box key={id}>
                        {index + 1}. {name}
                    </Box>
                ))}
            </Box>
        </>
    );
};
