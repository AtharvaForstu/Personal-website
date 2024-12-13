import Card3D from './Card3D';

export default function AboutSection() {
  const glowStyle = {
    color: '#3E5AED',
    textShadow: '0 0 12px rgba(62, 90, 237, 1), 0 0 24px rgba(62, 90, 237, 0.8)',
  };

  const backgroundGlowStyle = {
    backgroundColor: 'black', // Black background
    boxShadow: '0 0 30px rgba(128, 0, 128, 0.6)', // More visible subtle purple glow around the section
    padding: '8rem 1rem',
  };

  return (
    <section id="about" style={backgroundGlowStyle}>
      <div
        style={{
          maxWidth: '84rem',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '5rem',
        }}
      >
        {/* Hero Text */}
        <div style={{ textAlign: 'center' }}>
          <h1
            style={{
              fontFamily: "'Press Start 2P', sans-serif",
              fontSize: '2.125rem', // Increased by 2px
              lineHeight: '1.5',
              fontWeight: 'bold', // Made bold
            }}
          >
            Hello, I'm{' '}
            <span style={glowStyle}>Atharva</span>
          </h1>
        </div>

        {/* 3D Card */}
        <Card3D />

        {/* About Content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1.5rem',
            marginTop: '4rem',
          }}
        >
          <div>
            <h2
              style={{
                color: '#A855F7',
                fontSize: '1.875rem',
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                marginBottom: '1rem',
              }}
            >
              Celebrating Achievements
            </h2>
            <h3
              style={{
                fontSize: '3rem',
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                color: '#FFF',
                marginBottom: '1.5rem',
              }}
            >
              Crafting Digital Solutions
            </h3>
          </div>
          <div>
            <p
              style={{
                color: '#D1D5DB',
                fontSize: '1.125rem',
                lineHeight: '1.75',
              }}
            >
              Welcome to my portfolio. I am a dedicated computer engineer with a passion 
              for creating innovative solutions. My expertise spans across various domains, 
              ensuring that I can tackle any challenge with confidence.
              <br />
              <br />
              Explore my projects and skills to see how I can contribute to your next big idea. 
              Let's build something amazing together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
