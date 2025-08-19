// src/components/About/About.jsx
import { Code, Palette, Zap, Heart } from 'lucide-react';
import './About.css';
import john117 from '../../assets/images/117.jpg';

function About() {
  const skills = [
    { name: 'Frontend Development', icon: <Code size={24} />, color: '#3b82f6' },
    { name: 'UI/UX Design', icon: <Palette size={24} />, color: '#10b981' },
    { name: 'Performance Optimization', icon: <Zap size={24} />, color: '#f59e0b' },
    { name: 'Problem Solving', icon: <Heart size={24} />, color: '#ef4444' }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p className="about-description">
              สวัสดีครับ ผมชื่อ บาส ผมหลงใหลในการเปลี่ยนไอเดียให้กลายเป็นเว็บไซต์ที่ใช้งานได้จริง 
              ผมเริ่มต้นเส้นทางนี้ด้วยการเรียนรู้ HTML, CSS และ JavaScript และตอนนี้กำลังสนุกกับการใช้ 
              React เพื่อสร้างส่วนหน้าเว็บที่มีประสิทธิภาพ
            </p>
            <p className="about-description">
              ผมยังอยู่ในช่วงของการเรียนรู้และฝึกฝนอยู่ครับ บางครั้งก็เจอปัญหาที่ต้องใช้เวลาแก้ 
              แต่ผมก็ไม่เคยท้อ ผมเชื่อว่าทุกปัญหามีทางออกเสมอ และพร้อมที่จะรับมือกับความท้าทายใหม่ๆ 
              เพื่อพัฒนาตัวเองให้เก่งขึ้นในทุก ๆ วันครับ
            </p>
            
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div 
                    className="skill-icon"
                    style={{ backgroundColor: skill.color + '20', color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>

            <div className="about-actions">
              <a href="/resume.pdf" className="btn-primary" download>
                Download Resume
              </a>
              <button 
                className="btn-secondary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div className="about-image">
            <div className="image-placeholder">
              <div className="placeholder-content">
                <img src={john117} alt="Profile Photo" className="profile-photo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;