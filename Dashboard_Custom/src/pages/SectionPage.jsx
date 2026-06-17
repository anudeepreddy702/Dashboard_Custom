import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

export default function SectionPage({ title }) {
    const navigate = useNavigate();

    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                {title}
            </Typography>
            <Paper sx={{ p: 3, borderRadius: 2 }}>
                <Typography color="text.secondary" sx={{ mb: 2 }}>
                    This section is wired into the dashboard navigation and ready for its real content.
                </Typography>
                <Button startIcon={<ArrowBackIcon />} variant="contained" onClick={() => navigate('/')}>
                    Back to overview
                </Button>
            </Paper>
        </Box>
    );
}
