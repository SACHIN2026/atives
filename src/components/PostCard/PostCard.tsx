import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Post } from '../../data/posts';
import { Avatar, Badge, Button } from '../../styles/theme';

const PostContainer = styled(motion.article)`
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.sm};
  border: 1px solid ${props => props.theme.colors.gray[200]};
  overflow: hidden;
  margin-bottom: ${props => props.theme.spacing.lg};
  transition: all 0.2s ease;

  &:hover {
    box-shadow: ${props => props.theme.shadows.md};
  }
`;

const PostHeader = styled.div`
  padding: ${props => props.theme.spacing.lg};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
`;

const AuthorInfo = styled.div`
  flex: 1;
`;

const AuthorName = styled.h4`
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.semibold};
  color: ${props => props.theme.colors.gray[900]};
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const AuthorMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.gray[600]};
`;

const PostImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  cursor: pointer;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    height: 200px;
  }
`;

const PostContent = styled.div`
  padding: ${props => props.theme.spacing.lg};
`;

const PostTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: ${props => props.theme.fontWeights.semibold};
  color: ${props => props.theme.colors.gray[900]};
  margin-bottom: ${props => props.theme.spacing.sm};
  line-height: 1.4;
`;

const PostDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.md};
  color: ${props => props.theme.colors.gray[700]};
  line-height: 1.6;
  margin-bottom: ${props => props.theme.spacing.md};
`;

const PostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const PostActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${props => props.theme.spacing.md};
  border-top: 1px solid ${props => props.theme.colors.gray[200]};
`;

const ActionGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.lg};
`;

const ActionButton = styled.button<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  background: none;
  border: none;
  padding: ${props => props.theme.spacing.sm};
  color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.gray[600]};
  font-size: ${props => props.theme.fontSizes.sm};
  cursor: pointer;
  border-radius: ${props => props.theme.borderRadius.md};
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.theme.colors.gray[100]};
    color: ${props => props.theme.colors.primary};
  }
`;

const FollowButton = styled(Button)`
  font-size: ${props => props.theme.fontSizes.sm};
`;

const VerifiedBadge = styled.span`
  color: ${props => props.theme.colors.primary};
  margin-left: ${props => props.theme.spacing.xs};
`;

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.engagement.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) return 'Today';
    if (days === 1) return '1 day ago';
    if (days < 7) return `${days} days ago`;
    if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
    return date.toLocaleDateString();
  };

  return (
    <PostContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -2 }}
    >
      <PostHeader>
        <Avatar 
          src={post.author.avatar} 
          alt={post.author.name}
          size="md"
        />
        <AuthorInfo>
          <AuthorName>
            {post.author.name}
            <VerifiedBadge>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
              </svg>
            </VerifiedBadge>
          </AuthorName>
          <AuthorMeta>
            <span>{post.author.profession}</span>
            <span>•</span>
            <span>{formatNumber(post.author.followers)} followers</span>
            <span>•</span>
            <span>{formatDate(post.createdAt)}</span>
          </AuthorMeta>
        </AuthorInfo>
        <FollowButton variant="outline" size="sm">
          Follow
        </FollowButton>
      </PostHeader>

      <PostImage 
        src={post.content.image} 
        alt={post.content.title}
        loading="lazy"
      />

      <PostContent>
        <PostTitle>{post.content.title}</PostTitle>
        <PostDescription>{post.content.description}</PostDescription>
        
        <PostTags>
          {post.content.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </PostTags>

        <PostActions>
          <ActionGroup>
            <ActionButton active={isLiked} onClick={handleLike}>
              <motion.svg 
                width="20" 
                height="20" 
                fill={isLiked ? "currentColor" : "none"} 
                stroke="currentColor" 
                strokeWidth="2"
                viewBox="0 0 24 24"
                whileTap={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </motion.svg>
              {formatNumber(likesCount)}
            </ActionButton>
            
            <ActionButton>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              {formatNumber(post.engagement.comments)}
            </ActionButton>
            
            <ActionButton>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
              {formatNumber(post.engagement.shares)}
            </ActionButton>
          </ActionGroup>

          <ActionButton 
            active={isBookmarked} 
            onClick={() => setIsBookmarked(!isBookmarked)}
          >
            <motion.svg 
              width="20" 
              height="20" 
              fill={isBookmarked ? "currentColor" : "none"}
              stroke="currentColor" 
              strokeWidth="2"
              viewBox="0 0 24 24"
              whileTap={{ scale: 1.1 }}
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </motion.svg>
          </ActionButton>
        </PostActions>
      </PostContent>
    </PostContainer>
  );
};

export default PostCard;
