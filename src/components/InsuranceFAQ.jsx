import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Box from '@mui/material/Box';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowDropDownIcon />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function InsuranceFAQ() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: { xs: 4, sm: 8 },
      py: { xs: 8, sm: 10 },
      textAlign: { sm: 'center', md: 'left' },
    }}
  > 
        {/* Please rewrite FAQ Answers */}
        <Typography variant="h3">FAQ</Typography>
        <div>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>What is PPO dental insurance?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
            A PPO is a “Preferred Provider Organization”. PPOs do not require you to choose a primary dentist, although one is recommended. 
            You don’t need referrals to see specialist, either, but you will save money if you see on in your plan’s network. 
            These differ from DHMO insurance plans that typically cover dental services at a low cost and minimal or no copayments with a pre-selected primary care dentist or a dentist facility with multiple dentists. 
            You are required to select a Primary Dentist and are restricted to that Dentist unless otherwise referred to a specialist
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>What is the difference between being in-network vs. out-of-network?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
            Being out of network simply means we do not have a direct contract with your insurance provider. It does not mean we don’t take your insurance. 
            We take all insurances except DHMOs, Medicaid, Healthplex, and Emblem. For those carriers that we do have a direct contract with, they have negotiated prices. 
            When out of network we use the base price for the service and apply the coverage percentages that correspond to your out-of-network benefits to calculate what you’ll owe.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>How does dental insurance work?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
             Dental insurance works similarly to your medical insurance, with the main difference that the Insurance provider is responsible
             for “First Money Out”, meaning they cover up to a “Maximum Allowable” amount in a given benefit period (usually a year) and the patient is responsible for any amount over that limit. 
             The Maximum Allowable amount is unique to your insurance plan and is important to know what it is when seeking more expensive care. Further, as with Medical Co-Insurance, 
             Dental PPO plans typically cover services based on ranges or categories: Preventive, Basic, and Major. 
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography>What does my dental insurance cover?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
            Typically, dental insurance covers all types of dental care ranging from exams and cleanings (typically 2x / year), basic dental care (fillings, crowns, etc.) to oral surgery and orthodontics. 
            Insurances categorize each type of care into Preventive, Basic, and Major services and each is covered at a determined percentage, leaving the remainng balance to the patient (typical breakouts are 100% / 80% / 50% for the coverage percents). 
            Orthodontics are unique and typically have rules around age, who on your plan is allowed to use, and how much is offered (i.e. there is a lifetime max versus and annual amount).
            </Typography>
            </AccordionDetails>
        </Accordion>
        </div>
    </Container>
  );
}