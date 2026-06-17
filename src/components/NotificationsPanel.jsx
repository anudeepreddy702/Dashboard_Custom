import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import WarningIcon from '@mui/icons-material/Warning';
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const initialNotifications = [
    { id: 1, type: 'alert', message: 'High CPU usage detected', time: '10 mins ago', icon: <WarningIcon color="error" />, read: false },
    { id: 2, type: 'info', message: 'Database backup completed', time: '45 mins ago', icon: <CheckCircleIcon color="success" />, read: false },
    { id: 3, type: 'message', message: 'New message from Support', time: '2 hours ago', icon: <InfoIcon color="info" />, read: false },
    { id: 4, type: 'reminder', message: 'Meeting with team at 3 PM', time: '4 hours ago', icon: <NotificationsActiveIcon color="warning" />, read: true },
];

export default function NotificationsPanel() {
    const [notifications, setNotifications] = React.useState(initialNotifications);
    const unreadCount = notifications.filter((notification) => !notification.read).length;

    const handleMarkAllRead = () => {
        setNotifications((prev) => prev.map((notification) => ({ ...notification, read: true })));
    };

    return (
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: '100%', borderRadius: 3, boxShadow: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Typography component="h2" variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>Notifications</Typography>
                <Button size="small" onClick={handleMarkAllRead} disabled={!unreadCount}>
                    Mark all read
                </Button>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {unreadCount ? `${unreadCount} unread` : 'All caught up'}
            </Typography>
            <List sx={{ width: '100%' }}>
                {notifications.map((notification, index) => (
                    <React.Fragment key={notification.id}>
                        <ListItem sx={{ px: 0, opacity: notification.read ? 0.7 : 1 }}>
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
