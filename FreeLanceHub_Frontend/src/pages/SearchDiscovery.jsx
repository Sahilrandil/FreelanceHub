import { useState } from 'react';

export default function SearchDiscovery() {
  const [searchType, setSearchType] = useState('freelancers');
  const [filters, setFilters] = useState({
    searchQuery: '',
    category: '',
    minPrice: '',
    maxPrice: '',
    rating: '',
    experience: '',
    sortBy: 'relevance'
  });

  const categories = ['Web Development', 'Mobile Apps', 'Design', 'Writing', 'Marketing', 'Data Science'];
  const experienceLevels = ['Entry Level', 'Intermediate', 'Expert'];
  const sortOptions = ['Relevance', 'Newest', 'Price: Low to High', 'Price: High to Low', 'Rating'];

  const [freelancers] = useState([
    { id: 1, name: 'Sarah Johnson', title: 'UI/UX Designer', rate: 45, rating: 4.9, reviews: 156, category: 'Design', experience: 'Expert', image: 'https://via.placeholder.com/80' },
    { id: 2, name: 'Mike Chen', title: 'Full Stack Developer', rate: 60, rating: 4.8, reviews: 203, category: 'Web Development', experience: 'Expert', image: 'https://via.placeholder.com/80' },
    { id: 3, name: 'Emma Davis', title: 'Content Writer', rate: 30, rating: 4.7, reviews: 89, category: 'Writing', experience: 'Intermediate', image: 'https://via.placeholder.com/80' },
    { id: 4, name: 'Alex Kumar', title: 'Mobile Developer', rate: 55, rating: 4.9, reviews: 178, category: 'Mobile Apps', experience: 'Expert', image: 'https://via.placeholder.com/80' },
    { id: 5, name: 'Lisa Wang', title: 'Digital Marketer', rate: 40, rating: 4.6, reviews: 92, category: 'Marketing', experience: 'Intermediate', image: 'https://via.placeholder.com/80' },
    { id: 6, name: 'Tom Brown', title: 'Data Scientist', rate: 70, rating: 4.8, reviews: 134, category: 'Data Science', experience: 'Expert', image: 'https://via.placeholder.com/80' }
  ]);

  const [jobs] = useState([
    { id: 1, title: 'Build E-commerce Website', budget: '2000-5000', category: 'Web Development', posted: '2 hours ago', proposals: 12 },
    { id: 2, title: 'Logo Design for Startup', budget: '500-1000', category: 'Design', posted: '5 hours ago', proposals: 28 },
    { id: 3, title: 'Mobile App Development', budget: '5000-10000', category: 'Mobile Apps', posted: '1 day ago', proposals: 45 },
    { id: 4, title: 'SEO Content Writing', budget: '300-800', category: 'Writing', posted: '3 days ago', proposals: 19 },
    { id: 5, title: 'Social Media Campaign', budget: '1000-3000', category: 'Marketing', posted: '4 days ago', proposals: 34 },
    { id: 6, title: 'Data Analysis Project', budget: '3000-7000', category: 'Data Science', posted: '1 week ago', proposals: 23 }
  ]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const filteredResults = searchType === 'freelancers' ? freelancers : jobs;

  return (
    <div style={{ 
      maxWidth: '1400px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Header */}
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2.5em', margin: '0 0 10px 0', color: '#333' }}>
          Search & Discovery
        </h1>
        <p style={{ color: '#666', fontSize: '1.1em' }}>
          Find the perfect freelancer or project for your needs
        </p>
      </div>

      {/* Search Type Toggle */}
      <div style={{ 
        display: 'flex', 
        gap: '10px', 
        marginBottom: '30px',
        background: 'white',
        padding: '10px',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        width: 'fit-content'
      }}>
        <button
          onClick={() => setSearchType('freelancers')}
          style={{
            padding: '12px 30px',
            background: searchType === 'freelancers' ? '#667eea' : 'transparent',
            color: searchType === 'freelancers' ? 'white' : '#666',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1em',
            fontWeight: '500',
            transition: 'all 0.2s'
          }}
        >
          🧑‍💼 Find Freelancers
        </button>
        <button
          onClick={() => setSearchType('jobs')}
          style={{
            padding: '12px 30px',
            background: searchType === 'jobs' ? '#667eea' : 'transparent',
            color: searchType === 'jobs' ? 'white' : '#666',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1em',
            fontWeight: '500',
            transition: 'all 0.2s'
          }}
        >
          💼 Find Jobs
        </button>
      </div>

      {/* Main Search Bar */}
      <div style={{
        background: 'white',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginBottom: '30px'
      }}>
        <input
          type="text"
          placeholder={searchType === 'freelancers' ? 'Search for skills, names, or titles...' : 'Search for jobs...'}
          value={filters.searchQuery}
          onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
          style={{
            width: '100%',
            padding: '15px 20px',
            fontSize: '1.1em',
            border: '2px solid #e5e7eb',
            borderRadius: '8px',
            outline: 'none',
            transition: 'border 0.2s'
          }}
          onFocus={(e) => e.target.style.borderColor = '#667eea'}
          onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
        />
      </div>

      {/* Filters and Results Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '30px' }}>
        {/* Filters Sidebar */}
        <div>
          <div style={{
            background: 'white',
            padding: '25px',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            position: 'sticky',
            top: '20px'
          }}>
            <h3 style={{ marginTop: 0, fontSize: '1.3em', color: '#333' }}>Filters</h3>

            {/* Category Filter */}
            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '10px', color: '#555' }}>
                Category
              </label>
              <select
                value={filters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '6px',
                  border: '1px solid #e5e7eb',
                  fontSize: '0.95em',
                  cursor: 'pointer'
                }}
              >
                <option value="">All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '10px', color: '#555' }}>
                Price Range ($)
              </label>
              <div style={{ display: 'flex', gap: '10px' }}>
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.minPrice}
                  onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '6px',
                    border: '1px solid #e5e7eb',
                    fontSize: '0.95em'
                  }}
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.maxPrice}
                  onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '6px',
                    border: '1px solid #e5e7eb',
                    fontSize: '0.95em'
                  }}
                />
              </div>
            </div>

            {/* Rating Filter */}
            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '10px', color: '#555' }}>
                Minimum Rating
              </label>
              <select
                value={filters.rating}
                onChange={(e) => handleFilterChange('rating', e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '6px',
                  border: '1px solid #e5e7eb',
                  fontSize: '0.95em',
                  cursor: 'pointer'
                }}
              >
                <option value="">Any Rating</option>
                <option value="4.5">4.5+ ⭐</option>
                <option value="4.0">4.0+ ⭐</option>
                <option value="3.5">3.5+ ⭐</option>
              </select>
            </div>

            {/* Experience Filter */}
            {searchType === 'freelancers' && (
              <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '10px', color: '#555' }}>
                  Experience Level
                </label>
                <select
                  value={filters.experience}
                  onChange={(e) => handleFilterChange('experience', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '6px',
                    border: '1px solid #e5e7eb',
                    fontSize: '0.95em',
                    cursor: 'pointer'
                  }}
                >
                  <option value="">All Levels</option>
                  {experienceLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Clear Filters */}
            <button
              onClick={() => setFilters({
                searchQuery: '',
                category: '',
                minPrice: '',
                maxPrice: '',
                rating: '',
                experience: '',
                sortBy: 'relevance'
              })}
              style={{
                width: '100%',
                padding: '12px',
                background: '#f3f4f6',
                color: '#374151',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.95em',
                fontWeight: '500'
              }}
            >
              Clear All Filters
            </button>
          </div>
        </div>

        {/* Results Area */}
        <div>
          {/* Sort and Count */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <h3 style={{ margin: 0, color: '#333' }}>
              {filteredResults.length} {searchType === 'freelancers' ? 'Freelancers' : 'Jobs'} Found
            </h3>
            <select
              value={filters.sortBy}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              style={{
                padding: '10px 15px',
                borderRadius: '6px',
                border: '1px solid #e5e7eb',
                fontSize: '0.95em',
                cursor: 'pointer',
                background: 'white'
              }}
            >
              {sortOptions.map(option => (
                <option key={option} value={option.toLowerCase().replace(/:/g, '').replace(/ /g, '_')}>
                  Sort by: {option}
                </option>
              ))}
            </select>
          </div>

          {/* Results List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {searchType === 'freelancers' ? (
              // Freelancer Cards
              filteredResults.map(freelancer => (
                <div
                  key={freelancer.id}
                  style={{
                    background: 'white',
                    padding: '25px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                  }}
                >
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <img
                      src={freelancer.image}
                      alt={freelancer.name}
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        objectFit: 'cover'
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <h4 style={{ margin: '0 0 5px 0', fontSize: '1.3em', color: '#333' }}>
                        {freelancer.name}
                      </h4>
                      <p style={{ margin: '0 0 10px 0', color: '#667eea', fontWeight: '500' }}>
                        {freelancer.title}
                      </p>
                      <div style={{ display: 'flex', gap: '20px', fontSize: '0.9em', color: '#666' }}>
                        <span>⭐ {freelancer.rating} ({freelancer.reviews} reviews)</span>
                        <span>📁 {freelancer.category}</span>
                        <span>🎓 {freelancer.experience}</span>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.8em', fontWeight: 'bold', color: '#667eea' }}>
                        ${freelancer.rate}/hr
                      </div>
                      <button style={{
                        marginTop: '10px',
                        padding: '10px 20px',
                        background: '#667eea',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '0.95em',
                        fontWeight: '500'
                      }}>
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              // Job Cards
              filteredResults.map(job => (
                <div
                  key={job.id}
                  style={{
                    background: 'white',
                    padding: '25px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ margin: '0 0 10px 0', fontSize: '1.3em', color: '#333' }}>
                        {job.title}
                      </h4>
                      <div style={{ display: 'flex', gap: '20px', fontSize: '0.9em', color: '#666', marginBottom: '15px' }}>
                        <span>💰 ${job.budget}</span>
                        <span>📁 {job.category}</span>
                        <span>🕒 {job.posted}</span>
                      </div>
                      <div style={{ 
                        display: 'inline-block',
                        padding: '5px 12px',
                        background: '#e0e7ff',
                        color: '#4338ca',
                        borderRadius: '12px',
                        fontSize: '0.85em',
                        fontWeight: '500'
                      }}>
                        {job.proposals} proposals
                      </div>
                    </div>
                    <button style={{
                      padding: '12px 24px',
                      background: '#667eea',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.95em',
                      fontWeight: '500'
                    }}>
                      Apply Now
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}