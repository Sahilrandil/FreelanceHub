import { useState } from 'react';

export default function FreelancerProfile() {
  const [profile] = useState({
    photo: 'https://via.placeholder.com/150',
    name: 'John Doe',
    title: 'Full Stack Developer',
    bio: 'Experienced developer with 5+ years in web development. Specialized in React, Node.js, and cloud technologies.',
    skills: ['React', 'Node.js', 'JavaScript', 'Python', 'AWS', 'MongoDB'],
    hourlyRate: 50,
    availability: 'Available',
    rating: 4.8,
    reviewsCount: 127,
    jobSuccess: 95,
    completionRate: 98,
    portfolio: [
      { id: 1, title: 'E-commerce Platform', image: 'https://via.placeholder.com/300x200', link: '#' },
      { id: 2, title: 'Mobile App', image: 'https://via.placeholder.com/300x200', link: '#' },
      { id: 3, title: 'Dashboard UI', image: 'https://via.placeholder.com/300x200', link: '#' }
    ],
    reviews: [
      { id: 1, author: 'Sarah M.', rating: 5, text: 'Excellent work! Very professional and delivered on time.', date: '2 weeks ago' },
      { id: 2, author: 'Mike R.', rating: 5, text: 'Great communication and quality code.', date: '1 month ago' }
    ]
  });

  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '40px',
        borderRadius: '12px',
        marginBottom: '30px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          <img 
            src={profile.photo} 
            alt={profile.name}
            style={{ 
              width: '150px', 
              height: '150px', 
              borderRadius: '50%',
              border: '4px solid white',
              objectFit: 'cover'
            }}
          />
          <div style={{ flex: 1 }}>
            <h1 style={{ margin: '0 0 10px 0', fontSize: '2.5em' }}>{profile.name}</h1>
            <h2 style={{ margin: '0 0 15px 0', fontSize: '1.5em', fontWeight: 'normal', opacity: 0.9 }}>
              {profile.title}
            </h2>
            <div style={{ display: 'flex', gap: '30px', fontSize: '1.1em' }}>
              <div>
                <span>⭐ {profile.rating}/5</span>
                <span style={{ opacity: 0.8, marginLeft: '5px' }}>({profile.reviewsCount} reviews)</span>
              </div>
              <div>💼 {profile.jobSuccess}% Job Success</div>
              <div>✅ {profile.completionRate}% Completion Rate</div>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '2em', fontWeight: 'bold' }}>${profile.hourlyRate}/hr</div>
            <div style={{ 
              marginTop: '10px',
              padding: '8px 16px',
              background: '#4ade80',
              borderRadius: '20px',
              fontSize: '0.9em'
            }}>
              {profile.availability}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        {/* Left Column */}
        <div>
          {/* About Section */}
          <section style={{ 
            background: 'white', 
            padding: '30px', 
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            marginBottom: '30px'
          }}>
            <h3 style={{ marginTop: 0, fontSize: '1.5em', color: '#333' }}>About Me</h3>
            <p style={{ lineHeight: '1.6', color: '#666' }}>{profile.bio}</p>
          </section>

          {/* Portfolio Section */}
          <section style={{ 
            background: 'white', 
            padding: '30px', 
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            marginBottom: '30px'
          }}>
            <h3 style={{ marginTop: 0, fontSize: '1.5em', color: '#333' }}>Portfolio</h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
              gap: '20px' 
            }}>
              {profile.portfolio.map(item => (
                <a 
                  key={item.id}
                  href={item.link}
                  style={{ 
                    textDecoration: 'none', 
                    color: 'inherit',
                    transition: 'transform 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    style={{ 
                      width: '100%', 
                      borderRadius: '8px',
                      marginBottom: '10px'
                    }}
                  />
                  <h4 style={{ margin: 0, color: '#333' }}>{item.title}</h4>
                </a>
              ))}
            </div>
          </section>

          {/* Reviews Section */}
          <section style={{ 
            background: 'white', 
            padding: '30px', 
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ marginTop: 0, fontSize: '1.5em', color: '#333' }}>
              Reviews ({profile.reviewsCount})
            </h3>
            {profile.reviews.map(review => (
              <div 
                key={review.id}
                style={{ 
                  padding: '20px',
                  background: '#f9fafb',
                  borderRadius: '8px',
                  marginBottom: '15px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <strong style={{ color: '#333' }}>{review.author}</strong>
                  <span style={{ color: '#666', fontSize: '0.9em' }}>{review.date}</span>
                </div>
                <div style={{ color: '#fbbf24', marginBottom: '10px' }}>
                  {'⭐'.repeat(review.rating)}
                </div>
                <p style={{ margin: 0, color: '#666', lineHeight: '1.6' }}>{review.text}</p>
              </div>
            ))}
          </section>
        </div>

        {/* Right Column - Skills */}
        <div>
          <section style={{ 
            background: 'white', 
            padding: '30px', 
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            position: 'sticky',
            top: '20px'
          }}>
            <h3 style={{ marginTop: 0, fontSize: '1.5em', color: '#333' }}>Skills & Expertise</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {profile.skills.map((skill, index) => (
                <span 
                  key={index}
                  style={{
                    padding: '8px 16px',
                    background: '#e0e7ff',
                    color: '#4338ca',
                    borderRadius: '20px',
                    fontSize: '0.9em',
                    fontWeight: '500'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            <button style={{
              width: '100%',
              marginTop: '30px',
              padding: '15px',
              background: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1.1em',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.target.style.background = '#5568d3'}
            onMouseOut={(e) => e.target.style.background = '#667eea'}
            >
              Contact Freelancer
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}