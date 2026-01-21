import { Routes, Route, Link } from 'react-router-dom';
import './App.css'
import FreelancerProfile from "./pages/FreelancerProfile";
import SearchDiscovery from "./pages/SearchDiscovery";

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb' }}>
      {/* Navigation */}
      <nav style={{ 
        background: '#1f2937', 
        padding: '20px 0',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto', 
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '40px'
        }}>
          <h1 style={{ 
            margin: 0, 
            fontSize: '1.5em', 
            color: 'white',
            fontWeight: 'bold'
          }}>
            FreelanceHub
          </h1>
          <div style={{ display: 'flex', gap: '30px' }}>
            <Link 
              to="/" 
              style={{ 
                color: 'white', 
                textDecoration: 'none',
                fontSize: '1.05em',
                transition: 'color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.color = '#667eea'}
              onMouseOut={(e) => e.target.style.color = 'white'}
            >
              🏠 Home
            </Link>
            <Link 
              to="/profile" 
              style={{ 
                color: 'white', 
                textDecoration: 'none',
                fontSize: '1.05em',
                transition: 'color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.color = '#667eea'}
              onMouseOut={(e) => e.target.style.color = 'white'}
            >
              👤 Freelancer Profile
            </Link>
            <Link 
              to="/search" 
              style={{ 
                color: 'white', 
                textDecoration: 'none',
                fontSize: '1.05em',
                transition: 'color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.color = '#667eea'}
              onMouseOut={(e) => e.target.style.color = 'white'}
            >
              🔍 Search & Discovery
            </Link>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            padding: '60px 20px',
            textAlign: 'center'
          }}>
            <h1 style={{ 
              fontSize: '3.5em', 
              margin: '0 0 20px 0',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Welcome to FreelanceHub
            </h1>
            <p style={{ 
              fontSize: '1.3em', 
              color: '#666',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px auto'
            }}>
              Connect with top freelancers or find your next project
            </p>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px',
              marginTop: '60px',
              textAlign: 'left'
            }}>
              <div style={{
                background: 'white',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '3em', marginBottom: '20px' }}>👤</div>
                <h3 style={{ fontSize: '1.5em', margin: '0 0 15px 0', color: '#333' }}>
                  Freelancer Profiles
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  Showcase your skills, portfolio, and experience to attract clients
                </p>
                <Link 
                  to="/profile"
                  style={{
                    display: 'inline-block',
                    marginTop: '20px',
                    padding: '12px 24px',
                    background: '#667eea',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: '500',
                    transition: 'background 0.2s'
                  }}
                  onMouseOver={(e) => e.target.style.background = '#5568d3'}
                  onMouseOut={(e) => e.target.style.background = '#667eea'}
                >
                  View Profile →
                </Link>
              </div>

              <div style={{
                background: 'white',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '3em', marginBottom: '20px' }}>🔍</div>
                <h3 style={{ fontSize: '1.5em', margin: '0 0 15px 0', color: '#333' }}>
                  Search & Discovery
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  Find the perfect freelancer or job with advanced filters and search
                </p>
                <Link 
                  to="/search"
                  style={{
                    display: 'inline-block',
                    marginTop: '20px',
                    padding: '12px 24px',
                    background: '#667eea',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: '500',
                    transition: 'background 0.2s'
                  }}
                  onMouseOver={(e) => e.target.style.background = '#5568d3'}
                  onMouseOut={(e) => e.target.style.background = '#667eea'}
                >
                  Start Searching →
                </Link>
              </div>
            </div>
          </div>
        } />
        
        {/* Freelancer Profile Page */}
        <Route path="/profile" element={<FreelancerProfile />} />
        
        {/* Search & Discovery Page */}
        <Route path="/search" element={<SearchDiscovery />} />
      </Routes>

      {/* Footer */}
      <footer style={{ 
        marginTop: '80px',
        padding: '40px 20px', 
        background: '#1f2937', 
        color: 'white', 
        textAlign: 'center' 
      }}>
        <p style={{ margin: 0, fontSize: '1em' }}>
          © 2026 FreelanceHub. All rights reserved.
        </p>
      </footer>
    </div>
  );
}