import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import LinearProgress from '@mui/material/LinearProgress';
import StatCard from '../components/StatCard';
import RecentActivity from '../components/RecentActivity';
import NotificationsPanel from '../components/NotificationsPanel';
import NewsFeed from '../components/NewsFeed';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const dashboardPeriods = {
    Weekly: {
        stats: [
            { title: 'Total Revenue', value: '$45,231', icon: <AttachMoneyIcon />, color: '#FF6D00' },
            { title: 'New Users', value: '1,203', icon: <PeopleIcon />, color: '#6D8CF4' },
            { title: 'New Orders', value: '892', icon: <ShoppingCartIcon />, color: '#FFB547' },
            { title: 'Growth', value: '+12.5%', icon: <TrendingUpIcon />, color: '#A855F7' },
        ],
        performance: [
            { title: 'Conversion Rate', value: '5.9%', progress: 62, color: 'primary' },
            { title: 'Customer Satisfaction', value: '88%', progress: 88, color: 'success' },
            { title: 'Server Uptime', value: '99.97%', progress: 99, color: 'info' },
        ],
        channels: [
            { name: 'Organic Search', share: 38 },
            { name: 'Referral', share: 27 },
            { name: 'Email Campaigns', share: 18 },
            { name: 'Social Media', share: 17 },
        ],
    },
    Monthly: {
        stats: [
            { title: 'Total Revenue', value: '$181,540', icon: <AttachMoneyIcon />, color: '#FF6D00' },
            { title: 'New Users', value: '5,318', icon: <PeopleIcon />, color: '#6D8CF4' },
            { title: 'New Orders', value: '3,432', icon: <ShoppingCartIcon />, color: '#FFB547' },
            { title: 'Growth', value: '+18.2%', icon: <TrendingUpIcon />, color: '#A855F7' },
        ],
        performance: [
            { title: 'Conversion Rate', value: '6.8%', progress: 68, color: 'primary' },
            { title: 'Customer Satisfaction', value: '91%', progress: 91, color: 'success' },
            { title: 'Server Uptime', value: '99.99%', progress: 100, color: 'info' },
        ],
        channels: [
            { name: 'Organic Search', share: 42 },
            { name: 'Referral', share: 24 },
            { name: 'Email Campaigns', share: 20 },
            { name: 'Social Media', share: 14 },
        ],
    },
    Yearly: {
        stats: [
            { title: 'Total Revenue', value: '$2.1M', icon: <AttachMoneyIcon />, color: '#FF6D00' },
            { title: 'New Users', value: '64,210', icon: <PeopleIcon />, color: '#6D8CF4' },
            { title: 'New Orders', value: '42,718', icon: <ShoppingCartIcon />, color: '#FFB547' },
            { title: 'Growth', value: '+24.4%', icon: <TrendingUpIcon />, color: '#A855F7' },
        ],
        performance: [
            { title: 'Conversion Rate', value: '7.4%', progress: 73, color: 'primary' },
            { title: 'Customer Satisfaction', value: '93%', progress: 93, color: 'success' },
            { title: 'Server Uptime', value: '99.99%', progress: 100, color: 'info' },
        ],
        channels: [
            { name: 'Organic Search', share: 45 },
            { name: 'Referral', share: 23 },
            { name: 'Email Campaigns', share: 18 },
            { name: 'Social Media', share: 14 },
        ],
    },
};

export default function Dashboard() {
    const [period, setPeriod] = React.useState('Weekly');
    const currentPeriod = dashboardPeriods[period];

    return (
        <Box>
            <Paper
                sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    p: { xs: 3, md: 4 },
                    mb: 4,
                    borderRadius: 4,
                    backgroundColor: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                }}
            >
                <Box sx={{ position: 'absolute', inset: 0, opacity: 0.08, background: 'radial-gradient(circle at top right, #FF6D00, transparent 36%)' }} />
                <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' }, justifyContent: 'space-between', gap: 3 }}>
                    <Box sx={{ maxWidth: { xs: '100%', md: '52%' } }}>
                        <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.25em', mb: 2, display: 'block' }}>
                            PRODUCT OPERATIONS
                        </Typography>
                        <Typography variant="h2" sx={{ fontWeight: 900, mb: 2, maxWidth: { xs: '100%', sm: '90%', md: '80%' } }}>
                            Fast, polished dashboards built for product teams.
                        </Typography>
                        <Typography color="text.secondary" sx={{ mb: 3, maxWidth: 560 }}>
                            A modern analytics experience inspired by product-led portfolio design, with crisp typography, dark glass surfaces, and clean data layouts.
                        </Typography>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                            <Button variant="contained" size="large">Explore metrics</Button>
                            <Button variant="outlined" size="large">View reports</Button>
                        </Stack>
                    </Box>
                    <Box sx={{ flex: 1, minWidth: 280, borderRadius: 4, overflow: 'hidden', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <Box sx={{ p: 3 }}>
                            <Typography variant="subtitle2" color="primary.main" sx={{ letterSpacing: '0.2em', mb: 2 }}>
                                DASHBOARD HIGHLIGHT
                            </Typography>
                            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                Quarterly performance snapshot
                            </Typography>
                            <Typography color="text.secondary" sx={{ mb: 3 }}>
                                Keep every stakeholder aligned with real-time conversion, usage, and trend insights.
                            </Typography>
                            <Button variant="contained" size="small">Open overview</Button>
                        </Box>
                    </Box>
                </Box>
            </Paper>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 2, mb: 3 }}>
                <Box>
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Overview</Typography>
                    <Typography color="text.secondary">Styled like a product portfolio, optimized for speed and clarity.</Typography>
                </Box>
                <Stack direction="row" spacing={1}>
                    {Object.keys(dashboardPeriods).map((key) => (
                        <Button
                            key={key}
                            variant={period === key ? 'contained' : 'outlined'}
                            onClick={() => setPeriod(key)}
                            size="small"
                        >
                            {key}
                        </Button>
                    ))}
                </Stack>
            </Box>

            <Grid container spacing={3} sx={{ mb: 4 }}>
                {currentPeriod.stats.map((card) => (
                    <Grid key={card.title} item xs={12} sm={6} md={3}>
                        <StatCard title={card.title} value={card.value} icon={card.icon} color={card.color} />
                    </Grid>
                ))}
            </Grid>

            <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} lg={7}>
                    <Paper sx={{ p: 3, borderRadius: 4, boxShadow: 4, height: '100%', backgroundColor: 'rgba(255,255,255,0.04)' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 2 }}>
                            <Box>
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                    Performance Snapshot
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Summary of the most important growth metrics for {period.toLowerCase()} performance.
                                </Typography>
                            </Box>
                            <Chip label={period} color="primary" />
                        </Box>
                        <Stack spacing={3}>
                            {currentPeriod.performance.map((item) => (
                                <Box key={item.title}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                        <Typography variant="subtitle2" fontWeight={700}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="subtitle2" color="text.secondary">
                                            {item.value}
                                        </Typography>
                                    </Box>
                                    <LinearProgress variant="determinate" value={item.progress} color={item.color} sx={{ height: 12, borderRadius: 6 }} />
                                </Box>
                            ))}
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={12} lg={5}>
                    <Paper sx={{ p: 3, borderRadius: 4, boxShadow: 4, height: '100%', backgroundColor: 'rgba(255,255,255,0.04)' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                            Traffic Breakdown
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                            Top acquisition channels for this period and their contribution to total traffic.
                        </Typography>
                        <Stack spacing={2}>
                            {currentPeriod.channels.map((source) => (
                                <Box key={source.name} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Typography sx={{ minWidth: 130, fontWeight: 700 }}>{source.name}</Typography>
                                    <LinearProgress
                                        variant="determinate"
                                        value={source.share}
                                        sx={{ flexGrow: 1, height: 10, borderRadius: 5, backgroundColor: 'rgba(255,255,255,0.08)' }}
                                    />
                                    <Typography sx={{ minWidth: 40, textAlign: 'right', fontWeight: 700 }}>
                                        {source.share}%
                                    </Typography>
                                </Box>
                            ))}
                        </Stack>
                    </Paper>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} lg={8}>
                    <RecentActivity />
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <NotificationsPanel />
                        <NewsFeed />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
