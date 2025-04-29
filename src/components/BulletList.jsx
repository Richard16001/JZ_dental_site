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
        <Grid container spacing={3} sx={{ width: '100%' }}> {/* Ensure container takes full width */}
          {[
            ['Insurance Plan A', 'Insurance Plan B', 'Insurance Plan C'],
            ['Insurance Plan D', 'Insurance Plan E', 'Insurance Plan F'],
            ['Insurance Plan G', 'Insurance Plan H', 'Insurance Plan I'],
          ].map((listItems, index) => (
            <Grid item xs={12} sm={4} key={index}> {/* Added item prop and responsive sizing */}
              <Card sx={{ bgcolor: '#D6E7EB', height: '100%', p: 2 }}> {/* Added Card wrapper and styling */}
                <CardContent>
                  <List sx={{ listStyleType: 'disc', pl: 2 }}> {/* Adjusted padding */}
                    {listItems.map((item, itemIndex) => (
                      <ListItem key={itemIndex} sx={{ display: 'list-item', pb: 1 }}>
                        {item}
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
    </Container>
  );
}
