import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';

export default function StatCard({ title, value, icon, color }) {
    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 3, boxShadow: 3 }}>
            <CardContent sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', p: 3 }}>
                <Box sx={{ mr: 2, display: 'flex', p: 1.5, borderRadius: '50%', bgcolor: `${color}20`, color: color }}>
                    {icon}
                </Box>
                <Box>
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="h4" component="div" fontWeight="bold">
                        {value}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
