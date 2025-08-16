import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { mockMembers, Member } from '../data/members';
import { mockPosts } from '../data/posts';
import PostCard from '../components/PostCard/PostCard';
import { Container, Button, Badge, Avatar } from '../styles/theme';

const ProfileContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
`;

const ProfileContent = styled(Container)`
  padding-top: ${props => props.theme.spacing.xl};
  padding-bottom: ${props => props.theme.spacing.xl};
`;

const ProfileHeader = styled.div`
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.sm};
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const CoverImage = styled.div<{ image: string }>`
  height: 250px;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}40, ${props => props.theme.colors.accent}40);
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    height: 180px;
  }
`;

const ProfileInfo = styled.div`
  padding: ${props => props.theme.spacing.xl};
  position: relative;
`;

const ProfileAvatar = styled(Avatar)`
  width: 120px;
  height: 120px;
  border: 6px solid ${props => props.theme.colors.white};
  margin-top: -60px;
  margin-bottom: ${props => props.theme.spacing.md};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100px;
    height: 100px;
    margin-top: -50px;
  }
`;

const ProfileDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${props => props.theme.spacing.lg};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${props => props.theme.spacing.md};
  }
`;

const ProfileText = styled.div`
  flex: 1;
`;

const ProfileName = styled.h1`
  font-size: ${props => props.theme.fontSizes['2xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.gray[900]};
  margin-bottom: ${props => props.theme.spacing.xs};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSizes.xl};
  }
`;

const ProfileTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.fontWeights.medium};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const ProfileBio = styled.p`
  font-size: ${props => props.theme.fontSizes.md};
  color: ${props => props.theme.colors.gray[700]};
  line-height: 1.6;
  margin-bottom: ${props => props.theme.spacing.md};
`;

const ProfileSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.xs};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${props => props.theme.borderRadius.lg};
  background: ${props => props.theme.colors.gray[100]};
  color: ${props => props.theme.colors.gray[600]};
  text-decoration: none;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.theme.colors.primary};
    color: white;
    transform: translateY(-2px);
  }
`;

const ProfileActions = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.sm};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: ${props => props.theme.spacing.lg} 0;
  border-top: 1px solid ${props => props.theme.colors.gray[200]};
  margin-top: ${props => props.theme.spacing.lg};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: ${props => props.theme.spacing.md};
  }
`;

const StatItem = styled.div`
  text-align: center;
  
  .number {
    font-size: ${props => props.theme.fontSizes.xl};
    font-weight: ${props => props.theme.fontWeights.bold};
    color: ${props => props.theme.colors.gray[900]};
    display: block;
  }
  
  .label {
    font-size: ${props => props.theme.fontSizes.sm};
    color: ${props => props.theme.colors.gray[600]};
    margin-top: ${props => props.theme.spacing.xs};
  }
`;

const ContentTabs = styled.div`
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.sm};
`;

const TabsHeader = styled.div`
  display: flex;
  border-bottom: 1px solid ${props => props.theme.colors.gray[200]};
`;

const Tab = styled.button<{ active: boolean }>`
  flex: 1;
  padding: ${props => props.theme.spacing.lg};
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
    background: ${props.theme.colors.primary}05;
  `}
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const TabContent = styled.div`
  padding: ${props => props.theme.spacing.xl};
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.lg};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const PortfolioItem = styled(motion.div)`
  background: ${props => props.theme.colors.gray[100]};
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const PortfolioImage = styled.div<{ image: string }>`
  height: 180px;
  background-color: ${props => props.theme.colors.gray[200]};
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

const PortfolioInfo = styled.div`
  padding: ${props => props.theme.spacing.md};
`;

const PortfolioTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.semibold};
  color: ${props => props.theme.colors.gray[900]};
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const PortfolioDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.gray[600]};
  line-height: 1.4;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing['2xl']};
  color: ${props => props.theme.colors.gray[500]};
  
  h3 {
    margin-bottom: ${props => props.theme.spacing.sm};
    color: ${props => props.theme.colors.gray[700]};
  }
`;

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'posts' | 'projects' | 'saved'>('posts');
  
  // Using the first member as the current user profile
  const currentUser: Member = mockMembers[0];
  const userPosts = mockPosts.filter((post: any) => post.author.name === currentUser.name);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  return (
    <ProfileContainer>
      <ProfileContent>
        <ProfileHeader>
          <CoverImage image={currentUser.coverImage || ''} />
          <ProfileInfo>
            <ProfileAvatar src={currentUser.avatar} alt={currentUser.name} />
            
            <ProfileDetails>
              <ProfileText>
                <ProfileName>{currentUser.name}</ProfileName>
                <ProfileTitle>{currentUser.title}</ProfileTitle>
                <ProfileBio>{currentUser.bio}</ProfileBio>
                
                <ProfileSkills>
                  {currentUser.skills.map(skill => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </ProfileSkills>
                
                <SocialLinks>
                  {currentUser.socialLinks.website && (
                    <SocialLink href={currentUser.socialLinks.website} target="_blank">
                      🌐
                    </SocialLink>
                  )}
                  {currentUser.socialLinks.instagram && (
                    <SocialLink href={currentUser.socialLinks.instagram} target="_blank">
                      📷
                    </SocialLink>
                  )}
                  {currentUser.socialLinks.behance && (
                    <SocialLink href={currentUser.socialLinks.behance} target="_blank">
                      🎨
                    </SocialLink>
                  )}
                  {currentUser.socialLinks.dribbble && (
                    <SocialLink href={currentUser.socialLinks.dribbble} target="_blank">
                      🏀
                    </SocialLink>
                  )}
                </SocialLinks>
              </ProfileText>
              
              <ProfileActions>
                <Button variant="outline">
                  Message
                </Button>
                <Button>
                  Follow
                </Button>
              </ProfileActions>
            </ProfileDetails>
            
            <StatsContainer>
              <StatItem>
                <span className="number">{formatNumber(currentUser.stats.followers)}</span>
                <div className="label">Followers</div>
              </StatItem>
              <StatItem>
                <span className="number">{formatNumber(currentUser.stats.following)}</span>
                <div className="label">Following</div>
              </StatItem>
              <StatItem>
                <span className="number">{formatNumber(currentUser.stats.likes)}</span>
                <div className="label">Likes</div>
              </StatItem>
              <StatItem>
                <span className="number">{formatNumber(currentUser.stats.projects)}</span>
                <div className="label">Projects</div>
              </StatItem>
            </StatsContainer>
          </ProfileInfo>
        </ProfileHeader>

        <ContentTabs>
          <TabsHeader>
            <Tab active={activeTab === 'posts'} onClick={() => setActiveTab('posts')}>
              Posts ({userPosts.length})
            </Tab>
            <Tab active={activeTab === 'projects'} onClick={() => setActiveTab('projects')}>
              Projects ({currentUser.portfolio.length})
            </Tab>
            <Tab active={activeTab === 'saved'} onClick={() => setActiveTab('saved')}>
              Saved
            </Tab>
          </TabsHeader>
          
          <TabContent>
            {activeTab === 'posts' && (
              <div>
                {userPosts.map((post: any) => (
                  <PostCard key={post.id} post={post} />
                ))}
                {userPosts.length === 0 && (
                  <EmptyState>
                    <h3>No posts yet</h3>
                    <p>This user hasn't shared any posts yet.</p>
                  </EmptyState>
                )}
              </div>
            )}
            
            {activeTab === 'projects' && (
              <PortfolioGrid>
                {currentUser.portfolio.map((item: any, index: number) => (
                  <PortfolioItem
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <PortfolioImage image={item.image} />
                    <PortfolioInfo>
                      <PortfolioTitle>{item.title}</PortfolioTitle>
                      <PortfolioDescription>{item.description}</PortfolioDescription>
                    </PortfolioInfo>
                  </PortfolioItem>
                ))}
              </PortfolioGrid>
            )}
            
            {activeTab === 'saved' && (
              <EmptyState>
                <h3>No saved items</h3>
                <p>Items you save will appear here for easy access later.</p>
              </EmptyState>
            )}
          </TabContent>
        </ContentTabs>
      </ProfileContent>
    </ProfileContainer>
  );
};

export default Profile;
