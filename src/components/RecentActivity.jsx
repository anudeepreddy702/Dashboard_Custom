import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import LoginIcon from '@mui/icons-material/Login';
import UpdateIcon from '@mui/icons-material/Update';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const activities = [
    { id: 1, type: 'login', user: 'Admin User', action: 'logged in', time: '2 mins ago', icon: <LoginIcon />, color: '#4caf50' },
    { id: 2, type: 'update', user: 'System', action: 'updated software', time: '1 hour ago', icon: <UpdateIcon />, color: '#2196f3' },
    { id: 3, type: 'signup', user: 'New User', action: 'registered', time: '3 hours ago', icon: <PersonAddIcon />, color: '#ff9800' },
    { id: 4, type: 'login', user: 'John Doe', action: 'logged in', time: '5 hours ago', icon: <LoginIcon />, color: '#4caf50' },
    { id: 5, type: 'update', user: 'Admin User', action: 'changed settings', time: '1 day ago', icon: <UpdateIcon />, color: '#2196f3' },
];

export default function RecentActivity() {
    return (
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: '100%', borderRadius: 3, boxShadow: 2 }}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom sx={{ fontWeight: 'bold' }}>
                Recent Activity
            </Typography>
            <List sx={{ width: '100%' }}>
                {activities.map((activity, index) => (
                    <React.Fragment key={activity.id}>
                        <ListItem alignItems="flex-start" sx={{ px: 0 }}>
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: activity.color }}>
                                    {activity.icon}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={
                                    <Typography
                                        sx={{ display: 'inline', fontWeight: 600 }}
                                        component="span"
                                        variant="body1"
                                        color="text.primary"
                                    >
                                        {activity.user}
                                    </Typography>
                                }
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {` ${activity.action}`}
                                        </Typography>
                                        {` — ${activity.time}`}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        {index < activities.length - 1 && <Divider variant="inset" component="li" />}
                    </React.Fragment>
                ))}
            </List>
        </Paper>
    );
}
