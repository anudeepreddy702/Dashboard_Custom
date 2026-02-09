import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StatCard from '../components/StatCard';
import RecentActivity from '../components/RecentActivity';
import NotificationsPanel from '../components/NotificationsPanel';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function Dashboard() {
    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
                Overview
            </Typography>

            {/* Top Section: 4 Summary Cards */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <StatCard title="Total Revenue" value="$45,231" icon={<AttachMoneyIcon />} color="#4caf50" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StatCard title="New Users" value="1,203" icon={<PeopleIcon />} color="#2196f3" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StatCard title="New Orders" value="892" icon={<ShoppingCartIcon />} color="#ff9800" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StatCard title="Growth" value="+12.5%" icon={<TrendingUpIcon />} color="#9c27b0" />
                </Grid>
            </Grid>

            {/* Middle Section: Recent Activity & Notifications */}
            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <RecentActivity />
                </Grid>
                <Grid item xs={12} md={4}>
                    <NotificationsPanel />
                </Grid>
            </Grid>
        </Box>
    );
}
