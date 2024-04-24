import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import Container from '@mui/material/Container';

export default function MarkerList() {
  return (
    <Container
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: { xs: 12, sm: 6 },
      py: { xs: 8, sm: 10 },
      textAlign: { sm: 'center', md: 'left' },
    }}
  >
        <Typography variant="h3">
            Accepted Insurances
        </Typography>
        <Grid container spacing = {3}>
        <Grid xs>
            <List sx={{ listStyleType: 'disc' , pl: 4}}>
                <ListItem sx = {{display: 'list-item'}}> The Shawshank Redemption </ListItem>
                <ListItem sx = {{display: 'list-item'}}>Star Wars</ListItem>
                <ListItem sx = {{display: 'list-item'}}>The Lord of the Rings: The Two Towers</ListItem>
            </List>
        </Grid>
        <Grid xs>
            <List sx={{ listStyleType: 'disc' , pl: 4}}>
                <ListItem sx = {{display: 'list-item'}}> The Shawshank Redemption </ListItem>
                <ListItem sx = {{display: 'list-item'}}>Star Wars</ListItem>
                <ListItem sx = {{display: 'list-item'}}>The Lord of the Rings: The Two Towers</ListItem>
        </List>
        </Grid>
        <Grid xs>
            <List sx={{ listStyleType: 'disc' , pl: 4}}>
                <ListItem sx = {{display: 'list-item'}}> The Shawshank Redemption </ListItem>
                <ListItem sx = {{display: 'list-item'}}>Star Wars</ListItem>
                <ListItem sx = {{display: 'list-item'}}>The Lord of the Rings: The Two Towers</ListItem>
            </List>
        </Grid>
        </Grid>
    </Container>
  );
}