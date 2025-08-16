import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { mockPosts, Post } from '../data/posts';
import PostCard from '../components/PostCard/PostCard';
import { Container, Button } from '../styles/theme';

const HomeContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
`;

const FeedContainer = styled(Container)`
  max-width: 800px;
  padding-top: ${props => props.theme.spacing.xl};
  padding-bottom: ${props => props.theme.spacing.xl};
`;

const WelcomeSection = styled(motion.div)`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing['2xl']};
  padding: ${props => props.theme.spacing.xl};
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}20, ${props => props.theme.colors.accent}20);
  border-radius: ${props => props.theme.borderRadius.xl};
  border: 1px solid ${props => props.theme.colors.gray[200]};
`;

const WelcomeTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes['3xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.gray[900]};
  margin-bottom: ${props => props.theme.spacing.md};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSizes['2xl']};
  }
`;

const WelcomeDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.gray[700]};
  margin-bottom: ${props => props.theme.spacing.lg};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSizes.md};
  }
`;

const FilterTabs = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.xl};
  overflow-x: auto;
  padding-bottom: ${props => props.theme.spacing.sm};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: ${props => props.theme.spacing.sm};
  }
`;

const FilterTab = styled.button<{ active: boolean }>`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  border: none;
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeights.medium};
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  
  ${props => props.active ? `
    background: ${props.theme.colors.primary};
    color: white;
  ` : `
    background: ${props.theme.colors.gray[100]};
    color: ${props.theme.colors.gray[700]};
    
    &:hover {
      background: ${props.theme.colors.gray[200]};
    }
  `}
`;

const PostsGrid = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoadMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${props => props.theme.spacing.xl};
`;

const EmptyState = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing['2xl']};
  color: ${props => props.theme.colors.gray[500]};
`;

const StatsBar = styled.div`
  display: flex;
  justify-content: center;
  gap: ${props => props.theme.spacing.xl};
  margin-bottom: ${props => props.theme.spacing.xl};
  padding: ${props => props.theme.spacing.lg};
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.sm};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-wrap: wrap;
    gap: ${props => props.theme.spacing.md};
  }
`;

const StatItem = styled.div`
  text-align: center;
  
  .number {
    font-size: ${props => props.theme.fontSizes.xl};
    font-weight: ${props => props.theme.fontWeights.bold};
    color: ${props => props.theme.colors.primary};
    display: block;
  }
  
  .label {
    font-size: ${props => props.theme.fontSizes.sm};
    color: ${props => props.theme.colors.gray[600]};
    margin-top: ${props => props.theme.spacing.xs};
  }
`;

const filters = [
  { id: 'all', label: 'All Posts', icon: '🎨' },
  { id: 'ui-design', label: 'UI Design', icon: '💻' },
  { id: 'photography', label: 'Photography', icon: '📸' },
  { id: 'illustration', label: 'Illustration', icon: '✏️' },
  { id: 'branding', label: 'Branding', icon: '🏷️' },
  { id: 'motion', label: 'Motion', icon: '🎬' }
];

const HomeFeed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    // Simulate loading posts
    const loadPosts = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 800));
      setPosts(mockPosts);
      setLoading(false);
    };

    loadPosts();
  }, []);

  const filteredPosts = posts.filter(post => {
    if (activeFilter === 'all') return true;
    return post.content.tags.some((tag: string) => 
      tag.toLowerCase().includes(activeFilter.replace('-', ' '))
    );
  });

  const loadMorePosts = async () => {
    setLoadingMore(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    // In a real app, this would load more posts from the API
    setLoadingMore(false);
    setHasMore(false);
  };

  if (loading) {
    return (
      <HomeContainer>
        <FeedContainer>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '400px' 
          }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              style={{
                width: 40,
                height: 40,
                border: '3px solid #f3f3f3',
                borderTop: '3px solid #6C5CE7',
                borderRadius: '50%'
              }}
            />
          </div>
        </FeedContainer>
      </HomeContainer>
    );
  }

  return (
    <HomeContainer>
      <FeedContainer>
        <WelcomeSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <WelcomeTitle>Welcome to Atives</WelcomeTitle>
          <WelcomeDescription>
            Discover amazing creative work from talented professionals around the world. 
            Connect, collaborate, and get inspired by the creative community.
          </WelcomeDescription>
        </WelcomeSection>

        <StatsBar>
          <StatItem>
            <span className="number">50K+</span>
            <div className="label">Creatives</div>
          </StatItem>
          <StatItem>
            <span className="number">₹50L+</span>
            <div className="label">Profit Generated</div>
          </StatItem>
          <StatItem>
            <span className="number">Zero</span>
            <div className="label">Commission</div>
          </StatItem>
          <StatItem>
            <span className="number">Global</span>
            <div className="label">Community</div>
          </StatItem>
        </StatsBar>

        <FilterTabs>
          {filters.map((filter) => (
            <FilterTab
              key={filter.id}
              active={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.icon} {filter.label}
            </FilterTab>
          ))}
        </FilterTabs>

        <PostsGrid>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <PostCard post={post} />
              </motion.div>
            ))
          ) : (
            <EmptyState>
              <h3>No posts found</h3>
              <p>Try selecting a different filter or check back later for new content.</p>
            </EmptyState>
          )}
        </PostsGrid>

        {filteredPosts.length > 0 && hasMore && (
          <LoadMoreContainer>
            <Button 
              onClick={loadMorePosts} 
              disabled={loadingMore}
              variant="outline"
            >
              {loadingMore ? 'Loading...' : 'Load More Posts'}
            </Button>
          </LoadMoreContainer>
        )}
      </FeedContainer>
    </HomeContainer>
  );
};

export default HomeFeed;
