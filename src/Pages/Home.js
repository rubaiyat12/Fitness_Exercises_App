import React from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Excersises from '../components/Excersises';

const Home = () => {
    return (
        <Box>
            <HeroBanner />
            <SearchExercises />
            <Excersises />
        </Box>
    );
};

export default Home;