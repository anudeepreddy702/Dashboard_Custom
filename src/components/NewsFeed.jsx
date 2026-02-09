import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const newsItems = [
    {
        id: 1,
        title: 'New Dashboard Features',
        summary: 'We have updated the analytics view with real-time data streaming.',
        date: '2 hours ago',
        tag: 'Feature',
        color: 'primary'
    },
    {
        id: 2,
        title: 'System Maintenance',
        summary: 'Scheduled maintenance for server upgrades on Sunday at 2 AM EST.',
        date: '1 day ago',
        tag: 'Maintenance',
        color: 'warning'
    },
    {
        id: 3,
        title: 'Q3 Financial Report',
        summary: 'The Q3 financial report is now available for download in the reports section.',
        date: '3 days ago',
        tag: 'Report',
        color: 'success'
    },
];

export default function NewsFeed() {
    return (
        <Paper elevation={0} sx={{ p: 3, height: '100%', borderRadius: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" fontWeight="bold">
                    Latest News
                </Typography>
                <Button size="small" endIcon={<ArrowForwardIcon />} sx={{ textTransform: 'none' }}>
                    View All
                </Button>
            </Box>
            <List disablePadding>
                {newsItems.map((item, index) => (
                    <React.Fragment key={item.id}>
                        <ListItem alignItems="flex-start" sx={{ px: 0, py: 2 }}>
                            <ListItemText
                                primary={
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                                        <Typography variant="subtitle2" fontWeight="bold">
                                            {item.title}
                                        </Typography>
                                        <Chip
                                            label={item.tag}
                                            size="small"
                                            color={item.color}
                                            variant="outlined"
                                            sx={{ height: 20, fontSize: '0.625rem' }}
                                        />
                                    </Box>
                                }
                                secondary={
                                    <>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ display: 'block', mb: 0.5 }}
                                        >
                                            {item.summary}
                                        </Typography>
                                        <Typography variant="caption" color="text.disabled">
                                            {item.date}
                                        </Typography>
                                    </>
                                }
                            />
                        </ListItem>
                        {index < newsItems.length - 1 && <Divider component="li" />}
                    </React.Fragment>
                ))}
            </List>
        </Paper>
    );
}
