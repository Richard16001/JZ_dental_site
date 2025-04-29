import { Box, Typography, Container, Grid, Card, CardContent, Rating, Avatar } from '@mui/material'; // Added Container, Grid, Card, CardContent, Rating, Avatar
import React from 'react';

// Placeholder review data
const reviewsData = [
  { name: 'Jessica M.', rating: 5, comment: 'Absolutely wonderful experience! The staff was friendly, professional, and made me feel comfortable throughout my visit. Highly recommend!' },
  { name: 'David R.', rating: 5, comment: 'Dr. Zarate is fantastic. Very knowledgeable and takes the time to explain everything clearly. The office is clean and modern.' },
  { name: 'Sarah L.', rating: 4, comment: 'Good service overall. Wait times can sometimes be a bit long, but the quality of care is excellent.' },
];

function Reviews() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: '#FFFFFF' }}> {/* Added padding and white background */}
      <Container maxWidth="lg">
        {/* Removed sx fontSize override */}
        <Typography variant="h2" align="center" sx={{ mb: 6, color: '#4E5283' }}>
          What Our Patients Say
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {reviewsData.map((review, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}> {/* Responsive grid items */}
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3, p: 2 }}> {/* Added padding and shadow */}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar sx={{ bgcolor: '#4BC6B9', mr: 2 }}>{review.name.charAt(0)}</Avatar> {/* Avatar with initial */}
                    <Box>
                      <Typography variant="h6" component="div" sx={{ color: '#4E5283' }}>
                        {review.name}
                      </Typography>
                      <Rating name={`rating-${index}`} value={review.rating} readOnly precision={0.5} />
                    </Box>
                  </Box>
                  <Typography variant="body1" color="text.secondary">
                    "{review.comment}"
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Reviews;
