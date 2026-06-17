import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import { useNavigate } from 'react-router-dom';

export default function SectionPage({ title }) {
    const navigate = useNavigate();
    const [settings, setSettings] = React.useState({
        emailNotifications: true,
        autoBackup: false,
        betaFeatures: true,
    });

    const handleToggle = (key) => {
        setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const staffMembers = [
        { name: 'Ava Carter', role: 'Product Manager', status: 'Online', color: 'success' },
        { name: 'Marcus Hill', role: 'UX Designer', status: 'Away', color: 'warning' },
        { name: 'Hannah Lee', role: 'Engineering Lead', status: 'Online', color: 'success' },
        { name: 'Samuel Brooks', role: 'Support Specialist', status: 'Offline', color: 'default' },
    ];

    const messages = [
        { id: 1, sender: 'Lisa Wong', subject: 'Monthly report review', preview: 'Please review the draft report before tomorrow.', time: '1h ago' },
        { id: 2, sender: 'Dev Team', subject: 'Deployment status update', preview: 'The new release is scheduled for tonight.', time: '3h ago' },
        { id: 3, sender: 'Finance', subject: 'Invoice #0219 sent', preview: 'Please confirm receipt and payment schedule.', time: '5h ago' },
    ];

    const integrations = [
        { name: 'Slack', status: 'Connected', description: 'Team notifications and alerts', action: 'Manage' },
        { name: 'Stripe', status: 'Connected', description: 'Payment processing and subscriptions', action: 'Manage' },
        { name: 'Mailchimp', status: 'Paused', description: 'Email campaigns and audience sync', action: 'Resume' },
    ];

    const analyticsSummary = [
        { label: 'Sessions', value: '185K' },
        { label: 'Bounce Rate', value: '28%' },
        { label: 'New Leads', value: '4,912' },
    ];

    const renderSection = () => {
        switch (title) {
            case 'Staff':
                return (
                    <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 2 }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                            Team Directory
                        </Typography>
                        <List>
                            {staffMembers.map((member) => (
                                <React.Fragment key={member.name}>
                                    <ListItem sx={{ px: 0, py: 2 }}>
                                        <ListItemAvatar>
                                            <Avatar>{member.name.split(' ').map((word) => word[0]).join('')}</Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={member.name}
                                            secondary={member.role}
                                        />
                                        <Chip label={member.status} color={member.color} size="small" />
                                    </ListItem>
                                    <Divider />
                                </React.Fragment>
                            ))}
                        </List>
                    </Paper>
                );
            case 'Analytics':
                return (
                    <Grid container spacing={3}>
                        {analyticsSummary.map((item) => (
                            <Grid item xs={12} sm={4} key={item.label}>
                                <Paper sx={{ p: 2, borderRadius: 3, boxShadow: 2 }}>
                                    <Typography variant="subtitle2" color="text.secondary">
                                        {item.label}
                                    </Typography>
                                    <Typography variant="h5" fontWeight="bold">
                                        {item.value}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                        <Grid item xs={12}>
                            <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 2 }}>
                                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                                    Monthly Trend
                                </Typography>
                                <Typography color="text.secondary" sx={{ mb: 3 }}>
                                    The latest traffic and sales performance in one place.
                                </Typography>
                                <Stack spacing={2}>
                                    <Box>
                                        <Typography variant="subtitle2" sx={{ mb: 1 }}>Goal Completion</Typography>
                                        <LinearProgress variant="determinate" value={84} sx={{ height: 10, borderRadius: 5 }} />
                                    </Box>
                                    <Box>
                                        <Typography variant="subtitle2" sx={{ mb: 1 }}>Ad Campaign ROI</Typography>
                                        <LinearProgress variant="determinate" value={72} color="success" sx={{ height: 10, borderRadius: 5 }} />
                                    </Box>
                                </Stack>
                            </Paper>
                        </Grid>
                    </Grid>
                );
            case 'Integrations':
                return (
                    <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 2 }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                            Connected Integrations
                        </Typography>
                        <List>
                            {integrations.map((integration) => (
                                <React.Fragment key={integration.name}>
                                    <ListItem sx={{ px: 0, py: 2 }}>
                                        <ListItemAvatar>
                                            <Avatar>{integration.name[0]}</Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={integration.name}
                                            secondary={integration.description}
                                        />
                                        <Chip label={integration.status} size="small" sx={{ mr: 2 }} />
                                        <Button variant="outlined" size="small">
                                            {integration.action}
                                        </Button>
                                    </ListItem>
                                    <Divider />
                                </React.Fragment>
                            ))}
                        </List>
                    </Paper>
                );
            case 'Messages':
                return (
                    <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 2 }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                            Inbox
                        </Typography>
                        <List>
                            {messages.map((message) => (
                                <React.Fragment key={message.id}>
                                    <ListItem alignItems="flex-start" sx={{ px: 0, py: 2 }}>
                                        <ListItemAvatar>
                                            <Avatar>{message.sender.split(' ').map((word) => word[0]).join('')}</Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={`${message.sender} — ${message.subject}`}
                                            secondary={
                                                <>
                                                    <Typography component="span" variant="body2" color="text.secondary">
                                                        {message.preview}
                                                    </Typography>
                                                    <Typography display="block" variant="caption" color="text.disabled">
                                                        {message.time}
                                                    </Typography>
                                                </>
                                            }
                                        />
                                    </ListItem>
                                    <Divider />
                                </React.Fragment>
                            ))}
                        </List>
                    </Paper>
                );
            case 'Settings':
                return (
                    <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 2 }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                            Application Settings
                        </Typography>
                        <Stack spacing={2}>
                            <FormControlLabel
                                control={<Switch checked={settings.emailNotifications} onChange={() => handleToggle('emailNotifications')} />}
                                label="Email notifications"
                            />
                            <FormControlLabel
                                control={<Switch checked={settings.autoBackup} onChange={() => handleToggle('autoBackup')} />}
                                label="Auto backup"
                            />
                            <FormControlLabel
                                control={<Switch checked={settings.betaFeatures} onChange={() => handleToggle('betaFeatures')} />}
                                label="Enable beta features"
                            />
                        </Stack>
                        <Box sx={{ mt: 3 }}>
                            <Button variant="contained" onClick={() => alert('Settings saved')}>
                                Save changes
                            </Button>
                        </Box>
                    </Paper>
                );
            default:
                return (
                    <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 2 }}>
                        <Typography color="text.secondary" sx={{ mb: 2 }}>
                            This section is wired into the dashboard navigation and ready for its real content.
                        </Typography>
                    </Paper>
                );
        }
    };

    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                {title}
            </Typography>
            {renderSection()}
            <Box sx={{ mt: 3 }}>
                <Button startIcon={<ArrowBackIcon />} variant="contained" onClick={() => navigate('/')}>Back to overview</Button>
            </Box>
        </Box>
    );
}
