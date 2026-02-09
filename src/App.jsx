import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './theme';
import Layout from './components/Layout';
// Placeholder for Dashboard page
import Dashboard from './pages/Dashboard';

function App() {
  const [mode, setMode] = React.useState('dark');

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const activeTheme = React.useMemo(() => theme(mode), [mode]);

  return (
    <ThemeProvider theme={activeTheme}>
      <Router>
        <Layout mode={mode} toggleColorMode={colorMode.toggleColorMode}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* Add more routes here */}
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
