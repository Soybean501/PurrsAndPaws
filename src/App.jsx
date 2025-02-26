import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    petDetails: ''
  });
  
  const [showModal, setShowModal] = useState(false);
  const [themeColors, setThemeColors] = useState({
    primary: '#4f46e5',
    secondary: '#f472b6',
    accent: '#fef08a'
  });
  
  const servicePrices = {
    'cat-sitting': 25,
    'dog-walking-30': 20,
    'dog-walking-60': 35,
    'overnight': 75
  };
  
  const serviceNames = {
    'cat-sitting': 'Cat Sitting',
    'dog-walking-30': 'Dog Walking (30 min)',
    'dog-walking-60': 'Dog Walking (60 min)',
    'overnight': 'Overnight Pet Sitting'
  };
  
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
  
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };
  
  const formatTime = (timeString) => {
    if (!timeString) return '';
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minutes} ${ampm}`;
  };
  
  const handleCompletePayment = () => {
    alert('Booking confirmed! You will receive a confirmation email shortly.');
    setShowModal(false);
    setFormData({
      service: '',
      date: '',
      time: '',
      name: '',
      email: '',
      phone: '',
      petDetails: ''
    });
  };
  
  return (
    <div style={{ 
      '--primary-color': themeColors.primary,
      '--secondary-color': themeColors.secondary,
      '--accent-color': themeColors.accent
    }}>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <div className="logo-icon">🐾</div>
              <span>Purrs and Paws</span>
            </div>
            <nav>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#booking">Book Now</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <h1>Professional Pet Care Services</h1>
          <p>Loving care for your furry family members when you can't be there. Experienced, insured, and passionate about pets.</p>
          <a href="#booking" className="btn btn-secondary">Book a Service</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>We offer a variety of pet care services to meet your needs</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-image">🐱</div>
              <div className="service-content">
                <h3>Cat Sitting</h3>
                <p>In-home visits to feed, play with, and check on your feline friends while you're away.</p>
                <p><strong>Starting at $25 per visit</strong></p>
                <a href="#booking" className="btn">Book Now</a>
              </div>
            </div>
            <div className="service-card">
              <div className="service-image">🐶</div>
              <div className="service-content">
                <h3>Dog Walking</h3>
                <p>Regular exercise and bathroom breaks for your canine companion. Available in 30 or 60 minute sessions.</p>
                <p><strong>Starting at $20 per walk</strong></p>
                <a href="#booking" className="btn">Book Now</a>
              </div>
            </div>
            <div className="service-card">
              <div className="service-image">🏠</div>
              <div className="service-content">
                <h3>Overnight Pet Sitting</h3>
                <p>Overnight care in your home so your pets can maintain their routine while you're away.</p>
                <p><strong>Starting at $75 per night</strong></p>
                <a href="#booking" className="btn">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="booking-section">
        <div className="container">
          <div className="section-header">
            <h2>Book a Service</h2>
            <p>Schedule pet care services quickly and easily</p>
          </div>
          <div className="booking-container">
            <div className="booking-form">
              <form id="bookingForm" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="service">Select Service</label>
                  <select 
                    id="service" 
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">Choose a service...</option>
                    <option value="cat-sitting">Cat Sitting ($25)</option>
                    <option value="dog-walking-30">Dog Walking - 30 min ($20)</option>
                    <option value="dog-walking-60">Dog Walking - 60 min ($35)</option>
                    <option value="overnight">Overnight Pet Sitting ($75)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input 
                    type="date" 
                    id="date" 
                    required
                    value={formData.date}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="time">Time</label>
                  <input 
                    type="time" 
                    id="time" 
                    required
                    value={formData.time}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="petDetails">Pet Details</label>
                  <textarea 
                    id="petDetails" 
                    placeholder="Pet name, breed, age, and any special instructions..."
                    value={formData.petDetails}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-secondary" id="bookNowBtn">Book Now</button>
              </form>
            </div>
            <div className="booking-info">
              <h3>Why Book With Us?</h3>
              <ul>
                <li>✓ Licensed and insured pet care professionals</li>
                <li>✓ Regular updates and photos during visits</li>
                <li>✓ Flexible scheduling including holidays</li>
                <li>✓ Pet first aid certified</li>
                <li>✓ Secure online payment</li>
              </ul>
              <p>Questions about our services? Contact us at <strong>info@purrsandpaws.com</strong> or call <strong>(555) 123-4567</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>Happy Clients</h2>
            <p>See what pet parents are saying about our services</p>
          </div>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Purrs and Paws has been a lifesaver for my busy schedule. My dog Baxter loves his daily walks and I love the peace of mind knowing he's in good hands."</p>
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">👤</div>
                <div className="testimonial-info">
                  <h4>Sarah Johnson</h4>
                  <p>Dog parent to Baxter</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"I was nervous about leaving my cats while on vacation, but the daily updates and photos put my mind at ease. My cats were happy and well-cared for!"</p>
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">👤</div>
                <div className="testimonial-info">
                  <h4>Michael Chen</h4>
                  <p>Cat parent to Luna and Sol</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The overnight pet sitting service was perfect for my senior dog who needs medication. The sitter followed his routine perfectly and he was so happy."</p>
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">👤</div>
                <div className="testimonial-info">
                  <h4>Jessica Rodriguez</h4>
                  <p>Dog parent to Charlie</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <h3>Purrs and Paws</h3>
              <p>Professional pet care services for your furry family members.</p>
              <div className="social-links">
                <a href="#" className="social-link">📱</a>
                <a href="#" className="social-link">📘</a>
                <a href="#" className="social-link">📸</a>
              </div>
            </div>
            <div className="footer-column">
              <h3>Services</h3>
              <ul>
                <li><a href="#services">Cat Sitting</a></li>
                <li><a href="#services">Dog Walking</a></li>
                <li><a href="#services">Overnight Pet Sitting</a></li>
                <li><a href="#services">Pet Medication</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Contact Us</h3>
              <ul>
                <li>📍 123 Pet Street, Anytown</li>
                <li>📞 (555) 123-4567</li>
                <li>✉️ info@purrsandpaws.com</li>
                <li>⏰ Mon-Fri: 8am-7pm</li>
                <li>⏰ Sat-Sun: 9am-5pm</li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#booking">Book Now</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2025 Purrs and Paws Pet Care. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Payment Modal */}
      {showModal && (
        <div className="modal active">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Complete Your Booking</h3>
              <button className="modal-close" onClick={() => setShowModal(false)}>&times;</button>
            </div>
            <div id="bookingSummary">
              <h4>Booking Summary</h4>
              <p><strong>Service:</strong> {serviceNames[formData.service]}</p>
              <p><strong>Date:</strong> {formatDate(formData.date)}</p>
              <p><strong>Time:</strong> {formatTime(formData.time)}</p>
              <div className="payment-total">
                <p><strong>Total:</strong> ${formData.service ? servicePrices[formData.service].toFixed(2) : '0.00'}</p>
              </div>
            </div>
            <div className="payment-form">
              <div className="form-group">
                <label htmlFor="cardName">Name on Card</label>
                <input type="text" id="cardName" required />
              </div>
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" required />
              </div>
              <div className="form-group" style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <label htmlFor="cardExpiry">Expiry Date</label>
                  <input type="text" id="cardExpiry" placeholder="MM/YY" required />
                </div>
                <div style={{ flex: 1 }}>
                  <label htmlFor="cardCvc">CVC</label>
                  <input type="text" id="cardCvc" placeholder="123" required />
                </div>
              </div>
              <button type="button" className="btn" onClick={handleCompletePayment}>Complete Payment</button>
            </div>
          </div>
        </div>
      )}

      {/* Theme Controls */}
      <div className="theme-controls">
        <h4>Customize Theme</h4>
        <div className="color-picker">
          <div className="color-option">
            <label htmlFor="primaryColor">Primary Color</label>
            <input 
              type="color" 
              id="primaryColor" 
              value={themeColors.primary}
              onChange={(e) => setThemeColors({...themeColors, primary: e.target.value})}
            />
          </div>
          <div className="color-option">
            <label htmlFor="secondaryColor">Secondary Color</label>
            <input 
              type="color" 
              id="secondaryColor" 
              value={themeColors.secondary}
              onChange={(e) => setThemeColors({...themeColors, secondary: e.target.value})}
            />
          </div>
          <div className="color-option">
            <label htmlFor="accentColor">Accent Color</label>
            <input 
              type="color" 
              id="accentColor" 
              value={themeColors.accent}
              onChange={(e) => setThemeColors({...themeColors, accent: e.target.value})}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
