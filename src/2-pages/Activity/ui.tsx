import { Box, CircularProgress, Tab, Tabs, TextField, Typography } from '@mui/material';
import {
    Activity,
    Suspense,
    use,
    useEffect,
    useState,
    type FC,
    type PropsWithChildren,
    type SyntheticEvent,
} from 'react';
import { useConsistentPromiseCb } from '6-shared/lib/useUse';

export const ActivityPage: FC = () => {
    const [tab, setTba] = useState('one');

    const handleChange = (_event: SyntheticEvent, newValue: string) => {
        setTba(newValue);
    };

    return (
        <>
            <Typography align="center" variant="h3" sx={{ mb: 2 }}>
                Activity
            </Typography>
            <Tabs
                value={tab}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
                centered
                variant="fullWidth"
                sx={{ mb: 4 }}
            >
                <Tab value="one" label="Обычный компонент" />
                <Tab value="two" label="Activity" />
            </Tabs>

            {tab === 'one' && <div>First Tab Content</div>}
            {tab === 'two' && <TabContent index={2} />}
        </>
    );
};

export const TabContent: FC<PropsWithChildren<{ index: number }>> = ({ index }) => {
    const [value, setValue] = useState('');

    useEffect(() => {
        console.log(`${index} render`);

        return () => console.log(`${index} unmount`);
    }, [index]);

    return (
        <Box>
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
