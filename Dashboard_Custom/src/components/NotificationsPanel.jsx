import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import WarningIcon from '@mui/icons-material/Warning';
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const notifications = [
    { id: 1, type: 'alert', message: 'High CPU usage detected', time: '10 mins ago', icon: <WarningIcon color="error" /> },
    { id: 2, type: 'info', message: 'Database backup completed', time: '45 mins ago', icon: <CheckCircleIcon color="success" /> },
    { id: 3, type: 'message', message: 'New message from Support', time: '2 hours ago', icon: <InfoIcon color="info" /> },
    { id: 4, type: 'reminder', message: 'Meeting with team at 3 PM', time: '4 hours ago', icon: <NotificationsActiveIcon color="warning" /> },
];

export default function NotificationsPanel() {
    return (
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: '100%', borderRadius: 3, boxShadow: 2 }}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom sx={{ fontWeight: 'bold' }}>
                Notifications
            </Typography>
            <List sx={{ width: '100%' }}>
                {notifications.map((notification, index) => (
                    <React.Fragment key={notification.id}>
                        <ListItem sx={{ px: 0 }}>
                            <ListItemIcon>
                                {notification.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={notification.message}
                                secondary={notification.time}
                                primaryTypographyProps={{ fontWeight: 500 }}
                            />
                        </ListItem>
                        {index < notifications.length - 1 && <Divider component="li" />}
                    </React.Fragment>
                ))}
            </List>
        </Paper>
    );
}
