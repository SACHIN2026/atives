import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { mockJobs, Job } from '../data/jobs';
import { Container, Button, Badge, Input } from '../styles/theme';

const JobsContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
`;

const JobsContent = styled(Container)`
  padding-top: ${props => props.theme.spacing.xl};
  padding-bottom: ${props => props.theme.spacing.xl};
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing['2xl']};
`;

const PageTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes['3xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.gray[900]};
  margin-bottom: ${props => props.theme.spacing.md};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSizes['2xl']};
  }
`;

const PageDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.gray[700]};
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSizes.md};
  }
`;

const FiltersContainer = styled.div`
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.xl};
  margin-bottom: ${props => props.theme.spacing.xl};
  box-shadow: ${props => props.theme.shadows.sm};
`;

const FilterRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr auto;
  gap: ${props => props.theme.spacing.md};
  align-items: end;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: ${props => props.theme.spacing.sm};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xs};
`;

const FilterLabel = styled.label`
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.gray[700]};
`;

const FilterSelect = styled.select`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border: 1px solid ${props => props.theme.colors.gray[300]};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.fontSizes.sm};
  background: ${props => props.theme.colors.white};
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px ${props => props.theme.colors.primary}20;
  }
`;

const JobsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`;

const JobCard = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.xl};
  box-shadow: ${props => props.theme.shadows.sm};
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: ${props => props.theme.shadows.lg};
    transform: translateY(-2px);
  }
`;

const JobHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.lg};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${props => props.theme.spacing.sm};
  }
`;

const CompanyLogo = styled.div`
  width: 60px;
  height: 60px;
  border-radius: ${props => props.theme.borderRadius.lg};
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.accent});
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.lg};
  flex-shrink: 0;
`;

const JobInfo = styled.div`
  flex: 1;
`;

const JobTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.semibold};
  color: ${props => props.theme.colors.gray[900]};
  margin-bottom: ${props => props.theme.spacing.xs};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSizes.lg};
  }
`;

const CompanyName = styled.p`
  font-size: ${props => props.theme.fontSizes.md};
  color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.fontWeights.medium};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const JobMeta = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.gray[600]};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-wrap: wrap;
    gap: ${props => props.theme.spacing.xs};
  }
`;

const JobDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.gray[700]};
  line-height: 1.6;
  margin-bottom: ${props => props.theme.spacing.md};
`;

const JobTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.xs};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const JobActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${props => props.theme.spacing.md};
    align-items: stretch;
  }
`;

const SalaryRange = styled.div`
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: ${props => props.theme.fontWeights.semibold};
  color: ${props => props.theme.colors.gray[900]};
`;

const PostedDate = styled.div`
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.gray[500]};
  margin-top: ${props => props.theme.spacing.xs};
`;

const JobsBoard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobType, setJobType] = useState('all');
  const [location, setLocation] = useState('all');
  const [remote, setRemote] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesType = jobType === 'all' || job.type === jobType;
    const matchesLocation = location === 'all' || job.location === location;
    const matchesRemote = remote === 'all' || (remote === 'remote' ? job.remote : !job.remote);

    return matchesSearch && matchesType && matchesLocation && matchesRemote;
  });

  const sortedJobs = [...filteredJobs].sort((a, b) => {
    switch (sortBy) {
      case 'salary':
        const aSalary = a.salary ? a.salary.max : 0;
        const bSalary = b.salary ? b.salary.max : 0;
        return bSalary - aSalary;
      case 'company':
        return a.company.localeCompare(b.company);
      default:
        return new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime();
    }
  });

  const formatPostedDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  const formatSalary = (job: Job) => {
    if (!job.salary) return 'Salary not disclosed';
    const { min, max, currency } = job.salary;
    if (currency === 'USD') {
      return `$${(min / 1000).toFixed(0)}k - $${(max / 1000).toFixed(0)}k`;
    }
    return `${currency} ${min.toLocaleString()} - ${max.toLocaleString()}`;
  };

  return (
    <JobsContainer>
      <JobsContent>
        <PageHeader>
          <PageTitle>Find Your Next Creative Role</PageTitle>
          <PageDescription>
            Discover amazing job opportunities from top companies in the creative industry
          </PageDescription>
        </PageHeader>

        <FiltersContainer>
          <FilterRow>
            <FilterGroup>
              <FilterLabel htmlFor="search">Search Jobs</FilterLabel>
              <Input
                id="search"
                type="text"
                placeholder="Search for jobs, companies, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </FilterGroup>

            <FilterSelect
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="contract">Contract</option>
              <option value="freelance">Freelance</option>
            </FilterSelect>

            <FilterSelect
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="all">All Locations</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Delhi">Delhi</option>
              <option value="Pune">Pune</option>
            </FilterSelect>

            <FilterSelect
              value={remote}
              onChange={(e) => setRemote(e.target.value)}
            >
              <option value="all">All Options</option>
              <option value="remote">Remote Only</option>
              <option value="onsite">On-site Only</option>
            </FilterSelect>

            <FilterSelect
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="date">Latest</option>
              <option value="salary">Highest Salary</option>
              <option value="company">Company A-Z</option>
            </FilterSelect>
          </FilterRow>
        </FiltersContainer>

        <JobsGrid>
          {sortedJobs.map((job, index) => (
            <JobCard
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <JobHeader>
                <CompanyLogo>
                  {job.company.charAt(0)}
                </CompanyLogo>
                <JobInfo>
                  <JobTitle>{job.title}</JobTitle>
                  <CompanyName>{job.company}</CompanyName>
                  <JobMeta>
                    <span>📍 {job.location}</span>
                    <span>💼 {job.type}</span>
                    {job.remote && <span>🏠 Remote</span>}
                    <span>⏰ {job.experience}</span>
                  </JobMeta>
                </JobInfo>
              </JobHeader>

              <JobDescription>{job.description}</JobDescription>

              <JobTags>
                {job.tags.map((tag: string) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </JobTags>

              <JobActions>
                <div>
                  <SalaryRange>{formatSalary(job)}</SalaryRange>
                  <PostedDate>Posted {formatPostedDate(job.postedAt)}</PostedDate>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <Button variant="outline" size="sm">
                    Save Job
                  </Button>
                  <Button size="sm">
                    Apply Now
                  </Button>
                </div>
              </JobActions>
            </JobCard>
          ))}
        </JobsGrid>

        {sortedJobs.length === 0 && (
          <div style={{ 
            textAlign: 'center', 
            padding: '3rem', 
            color: '#666',
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h3>No jobs found</h3>
            <p>Try adjusting your filters or search terms to find more opportunities.</p>
          </div>
        )}
      </JobsContent>
    </JobsContainer>
  );
};

export default JobsBoard;
