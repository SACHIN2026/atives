import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles/theme';
import Layout from './components/Layout/Layout';
import HomeFeed from './pages/HomeFeed';
import JobsBoard from './pages/JobsBoard';
import ExploreFeed from './pages/ExploreFeed';
import Profile from './pages/Profile';
import Onboarding from './pages/Onboarding';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/" element={
            <Layout>
              <HomeFeed />
            </Layout>
          } />
          <Route path="/jobs" element={
            <Layout>
              <JobsBoard />
            </Layout>
          } />
          <Route path="/explore" element={
            <Layout>
              <ExploreFeed />
            </Layout>
          } />
          <Route path="/profile" element={
            <Layout>
              <Profile />
            </Layout>
          } />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
