import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './theme';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import SectionPage from './pages/SectionPage';

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
        <Layout toggleColorMode={colorMode.toggleColorMode}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/staff" element={<SectionPage title="Staff" />} />
            <Route path="/analytics" element={<SectionPage title="Analytics" />} />
            <Route path="/integrations" element={<SectionPage title="Integrations" />} />
            <Route path="/messages" element={<SectionPage title="Messages" />} />
            <Route path="/settings" element={<SectionPage title="Settings" />} />
            <Route path="*" element={<SectionPage title="Page not found" />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
