import React, { Suspense } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/styles/theme';
import { useRoutes } from 'react-router-dom';
import routes from '~react-pages';

function App() {    
    return (
        <ChakraProvider theme={theme}>
            <Suspense fallback={<p>Loading...</p>}>
                {useRoutes(routes)}
            </Suspense>
        </ChakraProvider>
    );
}

export default App;