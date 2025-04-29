import * as React from 'react';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Box from '@mui/material/Box';

// FAQ Data
const faqData = [
  {
    id: 'panel1',
    question: 'What is PPO dental insurance?',
    answer: 'A PPO is a “Preferred Provider Organization”. PPOs do not require you to choose a primary dentist, although one is recommended. You don’t need referrals to see specialists, either, but you will save money if you see one in your plan’s network. These differ from DHMO insurance plans that typically cover dental services at a low cost and minimal or no copayments with a pre-selected primary care dentist or a dentist facility with multiple dentists. You are required to select a Primary Dentist and are restricted to that Dentist unless otherwise referred to a specialist.'
  },
  {
    id: 'panel2',
    question: 'What is the difference between being in-network vs. out-of-network?',
    answer: 'Being out of network simply means we do not have a direct contract with your insurance provider. It does not mean we don’t take your insurance. We take all insurances except DHMOs, Medicaid, Healthplex, and Emblem. For those carriers that we do have a direct contract with, they have negotiated prices. When out of network we use the base price for the service and apply the coverage percentages that correspond to your out-of-network benefits to calculate what you’ll owe.'
  },
  {
    id: 'panel3',
    question: 'How does dental insurance work?',
    answer: 'Dental insurance works similarly to your medical insurance, with the main difference that the Insurance provider is responsible for “First Money Out”, meaning they cover up to a “Maximum Allowable” amount in a given benefit period (usually a year) and the patient is responsible for any amount over that limit. The Maximum Allowable amount is unique to your insurance plan and is important to know what it is when seeking more expensive care. Further, as with Medical Co-Insurance, Dental PPO plans typically cover services based on ranges or categories: Preventive, Basic, and Major.'
  },
  {
    id: 'panel4',
    question: 'What does my dental insurance cover?',
    answer: 'Typically, dental insurance covers all types of dental care ranging from exams and cleanings (typically 2x / year), basic dental care (fillings, crowns, etc.) to oral surgery and orthodontics. Insurances categorize each type of care into Preventive, Basic, and Major services and each is covered at a determined percentage, leaving the remaining balance to the patient (typical breakouts are 100% / 80% / 50% for the coverage percents). Orthodontics are unique and typically have rules around age, who on your plan is allowed to use, and how much is offered (i.e. there is a lifetime max versus and annual amount).'
  }
];

export default function InsuranceFAQ() {
  const [expanded, setExpanded] = React.useState(false); // Start with none expanded or a default like 'panel1'

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container
      maxWidth="md" // Constrain width for better readability
      sx={{
        py: { xs: 6, sm: 8 }, // Adjusted padding
        textAlign: 'center', // Center title
      }}
    >
      {/* Removed sx fontSize override */}
      <Typography variant="h2" sx={{ mb: 6, color: '#4E5283' }}>
        Frequently Asked Questions
      </Typography>
      <Box sx={{ textAlign: 'left' }}> {/* Align accordion content left */}
        {faqData.map((faqItem) => (
          <MuiAccordion
            key={faqItem.id}
            expanded={expanded === faqItem.id}
            onChange={handleChange(faqItem.id)}
            elevation={2} // Add slight shadow
            sx={{
              mb: 2, // Margin between accordions
              '&:before': { // Remove default top border line
                display: 'none',
              },
              '&.Mui-expanded': { // Remove margin when expanded if desired
                 mb: 2, // Keep margin when expanded
              },
              borderRadius: '8px', // Add rounded corners
              overflow: 'hidden' // Ensure content respects border radius
            }}
          >
            <MuiAccordionSummary
              expandIcon={<ArrowDropDownIcon sx={{ color: '#4E5283' }} />} // Style icon color
              aria-controls={`${faqItem.id}-content`}
              id={`${faqItem.id}-header`}
              sx={{
                bgcolor: '#F8F8F8', // Light background for summary
                borderBottom: '1px solid rgba(0, 0, 0, .125)', // Add bottom border
                '& .MuiAccordionSummary-content': {
                  // Optional: Adjust content margin if needed
                },
              }}
            >
              <Typography sx={{ fontWeight: 'medium', color: '#4E5283' }}> {/* Style question text */}
                {faqItem.question}
              </Typography>
            </MuiAccordionSummary>
            <MuiAccordionDetails sx={{ p: 3, bgcolor: '#FFFFFF' }}> {/* Padding and background for details */}
              <Typography sx={{ color: '#555', lineHeight: 1.7 }}> {/* Style answer text */}
                {faqItem.answer}
              </Typography>
            </MuiAccordionDetails>
          </MuiAccordion>
        ))}
      </Box>
    </Container>
  );
}
