import { Box, Card, CardContent, Grid, Typography, Stack, Container, Divider } from '@mui/material';
// Import all staff and provider photos
import {
    staffDei, staffDeo, staffGleah, staffIrma, staffJessie,
    staffMarianne, staffMark, staffMicoh, staffNina, staffShakila, staffTeo,
    provider1, providerKhervy, providerRh, providerJacCu, providerJacHb, providerJk
} from '../assets';
import React from 'react';

// --- Data Arrays ---

// Only includes individuals with photos from 'provider photos' folder
const providerData = [
    {
        title: 'Dentist', name: 'Dr. Khervy', img: providerKhervy, alt: 'Dr. Khervy profile picture',
        description: ["Dr. Khervy combines an artist's eye with advanced dental techniques to craft stunning, healthy smiles. Patients love his warm demeanor and the genuine passion he brings to cosmetic and restorative dentistry, making every visit a positive experience."]
    },
    {
        title: 'Dentist', name: 'Dr. RH', img: providerRh, alt: 'Dr. RH profile picture',
        description: ["With a gentle touch and a focus on long-term oral health, Dr. RH is dedicated to providing exceptional care for the whole family. He believes in building trusting relationships and ensuring every patient feels comfortable and informed."]
    },
    {
        title: 'Dentist', name: 'Dr. Jac (CU)', img: providerJacCu, alt: 'Dr. Jac CU profile picture',
        description: ["Dr. Jac makes dental visits fun for our youngest patients! Specializing in pediatric dentistry, she creates a welcoming and playful atmosphere, ensuring children develop positive associations with dental care from an early age."]
    },
    {
        title: 'Dentist', name: 'Dr. Jac (HB)', img: providerJacHb, alt: 'Dr. Jac HB profile picture',
        description: ["An expert in oral surgery and dental implants, Dr. Jac is committed to restoring both function and confidence. Her precision and dedication to utilizing the latest advancements ensure optimal outcomes for complex cases."]
    },
    {
        title: 'Dentist', name: 'Dr. JK', img: providerJk, alt: 'Dr. JK profile picture',
        description: ["Dr. JK excels in the intricate field of endodontics. Using state-of-the-art technology, he tackles complex root canal treatments with precision and a calm, reassuring approach, saving teeth and alleviating pain."]
    },
    {
        title: 'Dentist', name: 'Dr. Placeholder', img: provider1, alt: 'Dr. Placeholder profile picture',
        description: ["Dr. Placeholder offers a wide range of general dentistry services with a conservative and patient-centered philosophy. He focuses on effective, minimally invasive treatments to maintain your natural smile."]
    },
];

// Staff data (Hygienists, Support Staff, and Dr. Micoh)
const staffData = [
     // Add Dr. Micoh here as their photo is in 'staff photos'
     {
        title: 'Lead Dentist', name: 'Dr. Micoh', img: staffMicoh, alt: 'Dr. Micoh profile picture',
        description: ["As our Lead Dentist, Dr. Micoh sets the standard for excellence. His meticulous approach and passion for comprehensive care ensure every patient receives personalized treatment plans designed for lasting oral health."]
    },
     // Hygienists
     {
        title: 'Lead Hygienist', name: 'Jessie, RDH', img: staffJessie, alt: 'Jessie profile picture',
        description: ["Jessie, our Lead Hygienist, is a cornerstone of our preventative care program. Her extensive knowledge and thorough approach empower patients to maintain optimal oral hygiene between visits."]
    },
    {
        title: 'Dental Hygienist', name: 'Marianne Kae', img: staffMarianne, alt: 'Marianne Kae profile picture',
        description: ["Marianne Kae's dedication to gentle yet thorough cleanings makes hygiene appointments a breeze. Her friendly personality and focus on patient education help everyone feel at ease."]
    },
    {
        title: 'Dental Hygienist', name: 'Nina', img: staffNina, alt: 'Nina profile picture',
        description: ["Nina's passion for oral health shines through in her gentle technique and encouraging attitude. She loves helping patients achieve and maintain healthy gums and a sparkling smile."]
    },
    // Support Staff
     {
        title: 'Office Manager', name: 'Mark', img: staffMark, alt: 'Mark profile picture',
        description: ["Mark, our Office Manager, keeps everything running seamlessly behind the scenes. His leadership ensures our team is supported and our patients experience efficient, organized care."]
    },
    {
        title: 'Front Office Coordinator', name: 'Gleah', img: staffGleah, alt: 'Gleah profile picture',
        description: ["Gleah's warm smile is often the first you'll see! As Front Office Coordinator, she excels at making patients feel welcome and ensuring their scheduling and administrative needs are handled smoothly."]
    },
    {
        title: 'Treatment Coordinator', name: 'Irma', img: staffIrma, alt: 'Irma profile picture',
        description: ["Irma, our Treatment Coordinator, expertly guides patients through their treatment options and financial arrangements. Her compassionate approach makes understanding complex care simple and stress-free."]
    },
     {
        title: 'Dental Assistant', name: 'Dei', img: staffDei, alt: 'Dei profile picture',
        description: ["Dei is a vital part of our clinical team, assisting the dentists with skill and a positive attitude. She's adept at preparing treatment rooms and ensuring patients feel comfortable during procedures."]
    },
   {
        title: 'Dental Assistant', name: 'Deo', img: staffDeo, alt: 'Deo profile picture',
        description: ["Deo's calm presence and skillful assistance are invaluable during dental treatments. Patients appreciate his reassuring nature and dedication to supporting our clinical team."]
    },
    {
        title: 'Dental Assistant', name: 'Shakila', img: staffShakila, alt: 'Shakila profile picture',
        description: ["Shakila works alongside our dentists with precision and care. Her commitment to maintaining a sterile environment and assisting efficiently contributes significantly to successful treatments."]
    },
    {
        title: 'Front Desk Reception', name: 'Teo', img: staffTeo, alt: 'Teo profile picture',
        description: ["Teo greets every patient with a helpful attitude at the front desk. He's always ready to answer questions and ensure your visit starts on a positive and organized note."]
    }
];


// --- Helper Function ---

const renderStaffCard = (person, index) => {
    // Alternate layout based on index within its own group
    const imageOrder = index % 2 === 0 ? 1 : 2;
    const textOrder = index % 2 === 0 ? 2 : 1;

    // Use a unique key combining name and index in case names aren't unique
    return (
        <Card key={`${person.name}-${index}`} sx={{ display: 'flex', bgcolor: '#FFFFFF', boxShadow: 3, overflow: 'hidden' }}>
            <Grid container>
                <Grid item xs={12} md={5} order={{ xs: 1, md: imageOrder }}>
                    <Box
                        component="img"
                        src={person.img}
                        alt={person.alt}
                        sx={{
                            width: '100%',
                            height: { xs: 300, md: '100%' },
                            objectFit: 'cover',
                            display: 'block'
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={7} order={{ xs: 2, md: textOrder }}>
                    <CardContent sx={{ p: { xs: 3, sm: 4, md: 5 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Stack spacing={2} sx={{ flexGrow: 1 }}>
                            <Typography variant='h6' sx={{ color: '#4BC6B9', fontWeight: 'bold' }}>
                                {person.title}
                            </Typography>
                            <Typography variant='h4' sx={{ color: '#4E5283' }}>
                                {person.name}
                            </Typography>
                            {person.description.map((paragraph, pIndex) => (
                                <Typography key={pIndex} variant='body1' sx={{ color: '#555', lineHeight: 1.7 }}>
                                    {paragraph}
                                </Typography>
                            ))}
                        </Stack>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    );
};

// --- Main Component ---

function StaffCards() {
    return (
        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>

            {/* --- Dental Providers Section --- */}
            <Typography variant="h2" align="center" sx={{ mb: 6, color: '#4E5283' }}>
                Our Providers
            </Typography>
            <Stack spacing={6} sx={{ mb: 8 }}> {/* Add margin bottom to separate sections */}
                {providerData.map((provider, index) => renderStaffCard(provider, index))}
            </Stack>

            <Divider sx={{ my: 8 }} /> {/* Divider between sections */}

            {/* --- Staff Section --- */}
            <Typography variant="h2" align="center" sx={{ mb: 6, color: '#4E5283' }}>
                Our Staff
            </Typography>
            <Stack spacing={6}>
                {staffData.map((staff, index) => renderStaffCard(staff, index))}
            </Stack>

        </Container>
    );
}

export default StaffCards;
