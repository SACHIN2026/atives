import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Input, Badge } from '../styles/theme';

const OnboardingContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}10, ${props => props.theme.colors.accent}10);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing.lg};
`;

const OnboardingCard = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.xl};
  box-shadow: ${props => props.theme.shadows.xl};
  padding: ${props => props.theme.spacing['2xl']};
  max-width: 600px;
  width: 100%;
  text-align: center;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.xl};
    margin: ${props => props.theme.spacing.md};
  }
`;

const StepIndicator = styled.div`
  display: flex;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const StepDot = styled.div<{ active: boolean; completed: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  ${props => {
    if (props.completed) {
      return `background: ${props.theme.colors.success};`;
    }
    if (props.active) {
      return `background: ${props.theme.colors.primary};`;
    }
    return `background: ${props.theme.colors.gray[300]};`;
  }}
`;

const WelcomeSection = styled(motion.div)`
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const WelcomeTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes['2xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.gray[900]};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const WelcomeDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.gray[600]};
  line-height: 1.6;
`;

const FormSection = styled(motion.div)`
  text-align: left;
`;

const FormGroup = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const Label = styled.label`
  display: block;
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.gray[700]};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const SkillsSection = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: ${props => props.theme.spacing.sm};
  margin-top: ${props => props.theme.spacing.md};
`;

const SkillButton = styled.button<{ selected: boolean }>`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border: 2px solid ${props => props.selected ? props.theme.colors.primary : props.theme.colors.gray[300]};
  border-radius: ${props => props.theme.borderRadius.md};
  background: ${props => props.selected ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.selected ? 'white' : props.theme.colors.gray[700]};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeights.medium};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    ${props => !props.selected && `
      background: ${props.theme.colors.primary}10;
    `}
  }
`;

const InterestsSection = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const InterestsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: ${props => props.theme.spacing.sm};
  margin-top: ${props => props.theme.spacing.md};
`;

const InterestCard = styled.button<{ selected: boolean }>`
  padding: ${props => props.theme.spacing.lg};
  border: 2px solid ${props => props.selected ? props.theme.colors.primary : props.theme.colors.gray[200]};
  border-radius: ${props => props.theme.borderRadius.lg};
  background: ${props => props.selected ? `${props.theme.colors.primary}10` : props.theme.colors.white};
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.primary}10;
  }

  .icon {
    font-size: 24px;
    margin-bottom: ${props => props.theme.spacing.sm};
    display: block;
  }

  .title {
    font-size: ${props => props.theme.fontSizes.sm};
    font-weight: ${props => props.theme.fontWeights.medium};
    color: ${props => props.theme.colors.gray[700]};
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  justify-content: center;
  margin-top: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const skills = [
  'UI Design', 'UX Design', 'Graphic Design', 'Web Design',
  'Photography', 'Videography', 'Illustration', 'Animation',
  'Branding', 'Typography', '3D Modeling', 'Motion Graphics',
  'Frontend Dev', 'Backend Dev', 'Mobile Dev', 'Product Design'
];

const interests = [
  { id: 'ui-ux', icon: '💻', title: 'UI/UX Design' },
  { id: 'photography', icon: '📸', title: 'Photography' },
  { id: 'illustration', icon: '🎨', title: 'Illustration' },
  { id: 'branding', icon: '🏷️', title: 'Branding' },
  { id: 'motion', icon: '🎬', title: 'Motion Graphics' },
  { id: 'web-dev', icon: '🌐', title: 'Web Development' },
  { id: 'mobile', icon: '📱', title: 'Mobile Design' },
  { id: '3d', icon: '🎯', title: '3D Design' }
];

interface FormData {
  name: string;
  profession: string;
  location: string;
  bio: string;
  selectedSkills: string[];
  selectedInterests: string[];
}

const Onboarding: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    profession: '',
    location: '',
    bio: '',
    selectedSkills: [],
    selectedInterests: []
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleSkill = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      selectedSkills: prev.selectedSkills.includes(skill)
        ? prev.selectedSkills.filter(s => s !== skill)
        : [...prev.selectedSkills, skill]
    }));
  };

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      selectedInterests: prev.selectedInterests.includes(interest)
        ? prev.selectedInterests.filter(s => s !== interest)
        : [...prev.selectedInterests, interest]
    }));
  };

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding and redirect to home
      navigate('/');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    if (currentStep === 1) {
      return formData.name.trim() && formData.profession.trim();
    }
    if (currentStep === 2) {
      return formData.selectedSkills.length > 0 || formData.selectedInterests.length > 0;
    }
    return true;
  };

  return (
    <OnboardingContainer>
      <OnboardingCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <StepIndicator>
          <StepDot active={currentStep === 1} completed={currentStep > 1} />
          <StepDot active={currentStep === 2} completed={currentStep > 2} />
        </StepIndicator>

        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <WelcomeSection>
                <WelcomeTitle>Welcome to Atives! 🎨</WelcomeTitle>
                <WelcomeDescription>
                  Let's set up your creative profile to help you connect with the right community and opportunities.
                </WelcomeDescription>
              </WelcomeSection>

              <FormSection>
                <FormGroup>
                  <Label>What's your name?</Label>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e: any) => handleInputChange('name', e.target.value)}
                  />
                </FormGroup>

                <FormGroup>
                  <Label>What's your profession?</Label>
                  <Input
                    type="text"
                    placeholder="e.g., UI/UX Designer, Photographer, Illustrator"
                    value={formData.profession}
                    onChange={(e: any) => handleInputChange('profession', e.target.value)}
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Where are you located? (Optional)</Label>
                  <Input
                    type="text"
                    placeholder="e.g., New York, NY"
                    value={formData.location}
                    onChange={(e: any) => handleInputChange('location', e.target.value)}
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Tell us about yourself (Optional)</Label>
                  <Input
                    as="textarea"
                    rows={3}
                    placeholder="Write a brief bio about your creative journey..."
                    value={formData.bio}
                    onChange={(e: any) => handleInputChange('bio', e.target.value)}
                    style={{ minHeight: '80px', resize: 'vertical' }}
                  />
                </FormGroup>
              </FormSection>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <WelcomeSection>
                <WelcomeTitle>What are your skills & interests?</WelcomeTitle>
                <WelcomeDescription>
                  Help us recommend relevant content and connect you with the right creative community.
                </WelcomeDescription>
              </WelcomeSection>

              <FormSection>
                <SkillsSection>
                  <Label>Your Skills (Select all that apply)</Label>
                  <SkillsGrid>
                    {skills.map((skill) => (
                      <SkillButton
                        key={skill}
                        type="button"
                        selected={formData.selectedSkills.includes(skill)}
                        onClick={() => toggleSkill(skill)}
                      >
                        {skill}
                      </SkillButton>
                    ))}
                  </SkillsGrid>
                </SkillsSection>

                <InterestsSection>
                  <Label>Areas of Interest</Label>
                  <InterestsGrid>
                    {interests.map((interest) => (
                      <InterestCard
                        key={interest.id}
                        type="button"
                        selected={formData.selectedInterests.includes(interest.id)}
                        onClick={() => toggleInterest(interest.id)}
                      >
                        <span className="icon">{interest.icon}</span>
                        <span className="title">{interest.title}</span>
                      </InterestCard>
                    ))}
                  </InterestsGrid>
                </InterestsSection>
              </FormSection>
            </motion.div>
          )}
        </AnimatePresence>

        <ActionButtons>
          {currentStep > 1 && (
            <Button variant="outline" onClick={handleBack}>
              Back
            </Button>
          )}
          <Button 
            onClick={handleNext}
            disabled={!isStepValid()}
          >
            {currentStep === 2 ? 'Complete Setup' : 'Continue'}
          </Button>
        </ActionButtons>

        {currentStep === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ 
              marginTop: '24px', 
              fontSize: '14px', 
              color: '#666',
              textAlign: 'center'
            }}
          >
            You can always update these preferences later in your profile settings.
          </motion.div>
        )}
      </OnboardingCard>
    </OnboardingContainer>
  );
};

export default Onboarding;
