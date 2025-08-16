import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { mockMembers, Member, mockResources, Resource } from '../data/members';
import { Container, Button, Badge, Avatar, Input } from '../styles/theme';

const ExploreContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
`;

const ExploreContent = styled(Container)`
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

const SearchBar = styled.div`
  margin-bottom: ${props => props.theme.spacing.xl};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${props => props.theme.spacing.xl};
  border-bottom: 1px solid ${props => props.theme.colors.gray[200]};
`;

const Tab = styled.button<{ active: boolean }>`
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  border: none;
  background: none;
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.medium};
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;
  color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.gray[600]};
  
  ${props => props.active && `
    border-bottom-color: ${props.theme.colors.primary};
  `}
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
    font-size: ${props => props.theme.fontSizes.sm};
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.lg};
  }
`;

const MemberCard = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.xl};
  box-shadow: ${props => props.theme.shadows.sm};
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: ${props => props.theme.shadows.lg};
    transform: translateY(-4px);
  }
`;

const MemberCover = styled.div<{ image: string }>`
  height: 120px;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}40, ${props => props.theme.colors.accent}40);
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const MemberInfo = styled.div`
  padding: ${props => props.theme.spacing.lg};
  text-align: center;
`;

const MemberAvatar = styled(Avatar)`
  width: 80px;
  height: 80px;
  margin: -40px auto ${props => props.theme.spacing.md} auto;
  border: 4px solid ${props => props.theme.colors.white};
`;

const MemberName = styled.h3`
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: ${props => props.theme.fontWeights.semibold};
  color: ${props => props.theme.colors.gray[900]};
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const MemberTitle = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.gray[600]};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const MemberSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.xs};
  justify-content: center;
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const MemberActions = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.sm};
  justify-content: center;
`;

const ResourceCard = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.xl};
  box-shadow: ${props => props.theme.shadows.sm};
  padding: ${props => props.theme.spacing.lg};
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: ${props => props.theme.shadows.lg};
    transform: translateY(-2px);
  }
`;

const ResourceIcon = styled.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.accent});
  border-radius: ${props => props.theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.theme.fontSizes.xl};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const ResourceTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: ${props => props.theme.fontWeights.semibold};
  color: ${props => props.theme.colors.gray[900]};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const ResourceDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.gray[600]};
  margin-bottom: ${props => props.theme.spacing.md};
  line-height: 1.5;
`;

const ResourceMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.gray[500]};
`;

const BookmarkButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: ${props => props.theme.spacing.xs};
  border-radius: ${props => props.theme.borderRadius.md};
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.theme.colors.gray[100]};
  }
`;

const ExploreFeed: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'members' | 'resources'>('members');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMembers = mockMembers.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredResources = mockResources.filter(resource =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ExploreContainer>
      <ExploreContent>
        <PageHeader>
          <PageTitle>Explore Creatives</PageTitle>
          <PageDescription>
            Discover talented creatives and valuable resources to inspire your next project
          </PageDescription>
        </PageHeader>

        <SearchBar>
          <Input
            type="text"
            placeholder="Search for creatives, skills, or resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchBar>

        <TabsContainer>
          <Tab 
            active={activeTab === 'members'} 
            onClick={() => setActiveTab('members')}
          >
            Creatives ({filteredMembers.length})
          </Tab>
          <Tab 
            active={activeTab === 'resources'} 
            onClick={() => setActiveTab('resources')}
          >
            Resources ({filteredResources.length})
          </Tab>
        </TabsContainer>

        {activeTab === 'members' && (
          <GridContainer>
            {filteredMembers.map((member, index) => (
              <MemberCard
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <MemberCover image={member.coverImage || ''} />
                <MemberInfo>
                  <MemberAvatar src={member.avatar} alt={member.name} />
                  <MemberName>{member.name}</MemberName>
                  <MemberTitle>{member.title}</MemberTitle>
                  <MemberSkills>
                    {member.skills.slice(0, 3).map(skill => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </MemberSkills>
                  <MemberActions>
                    <Button size="sm" variant="outline">
                      View Profile
                    </Button>
                    <Button size="sm">
                      Follow
                    </Button>
                  </MemberActions>
                </MemberInfo>
              </MemberCard>
            ))}
          </GridContainer>
        )}

        {activeTab === 'resources' && (
          <GridContainer>
            {filteredResources.map((resource, index) => (
              <ResourceCard
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ResourceIcon>
                  {resource.type === 'Tutorial' && '📚'}
                  {resource.type === 'Tool' && '🛠️'}
                  {resource.type === 'Template' && '📄'}
                  {resource.type === 'Inspiration' && '💡'}
                  {resource.type === 'Article' && '📖'}
                </ResourceIcon>
                <ResourceTitle>{resource.title}</ResourceTitle>
                <ResourceDescription>{resource.description}</ResourceDescription>
                <ResourceMeta>
                  <span>{resource.type}</span>
                  <BookmarkButton>
                    🔖
                  </BookmarkButton>
                </ResourceMeta>
              </ResourceCard>
            ))}
          </GridContainer>
        )}

        {activeTab === 'members' && filteredMembers.length === 0 && (
          <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
            <p>No creatives found matching your search.</p>
          </div>
        )}

        {activeTab === 'resources' && filteredResources.length === 0 && (
          <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
            <p>No resources found matching your search.</p>
          </div>
        )}
      </ExploreContent>
    </ExploreContainer>
  );
};

export default ExploreFeed;
