
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    window.scrollTo({
      top: targetSection.offsetTop - 80,
      behavior: 'smooth'
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.rover-card, .future-card, .way-card');
  
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function checkVisibility() {
    cards.forEach(card => {
      if (isInViewport(card)) {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }
    });
  }
  
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  window.addEventListener('load', checkVisibility);
  window.addEventListener('scroll', checkVisibility);
  
  const yearSpan = document.querySelector('footer p');
  const currentYear = new Date().getFullYear();
  yearSpan.innerHTML = yearSpan.innerHTML.replace('2023', currentYear);
});

document.addEventListener('DOMContentLoaded', function() {
  const modal = document.createElement('div');
  modal.className = 'rover-modal';
  modal.style.display = 'none';
  modal.style.position = 'fixed';
  modal.style.zIndex = '1000';
  modal.style.left = '0';
  modal.style.top = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.overflow = 'auto';
  modal.style.backgroundColor = 'rgba(0,0,0,0.9)';
  
  const modalContent = document.createElement('div');
  modalContent.className = 'rover-modal-content';
  
  const closeBtn = document.createElement('span');
  closeBtn.className = 'close';
  closeBtn.innerHTML = '&times;';
  closeBtn.style.position = 'absolute';
  closeBtn.style.top = '15px';
  closeBtn.style.right = '35px';
  closeBtn.style.color = '#f1f1f1';
  closeBtn.style.fontSize = '40px';
  closeBtn.style.fontWeight = 'bold';
  closeBtn.style.cursor = 'pointer';
  
  modal.appendChild(modalContent);
  modal.appendChild(closeBtn);
  document.body.appendChild(modal);
  
  const roverData = {
    'Sojourner': {
      name: 'Sojourner',
      period: '1997',
      mission: 'Mars Pathfinder',
      duration: '83 days',
      size: '65 cm long',
      weight: '11.5 kg',
      landing_site: 'Ares Vallis',
      distance_traveled: '100 meters',
      power_source: 'Solar panels',
      image: 'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/mars/resources/detail_files/4/4067_pathfinder_PIA01551_modest-web.jpg',
      description: `Sojourner was the first rover to operate on Mars. Part of the Mars Pathfinder mission, it was primarily designed as a technology demonstration. Despite its small size, Sojourner carried scientific instruments including a camera and an Alpha Proton X-ray Spectrometer (APXS) that analyzed the composition of Martian rocks and soil.`,
      achievements: [
        'The first wheeled vehicle to operate on another planet besides Earth and the Moon.',
        'It was designed for a mission lasting 7 sols but greatly outlasted this initial plan.',
        'The rover transmitted more than 550 images, while the lander relayed over 16,500 images, along with data on wind, weather, and atmospheric conditions.',
        'Performed more than 15 chemical analyses of rocks and soil.'
      ],
      end_of_mission: 'The Pathfinder lander transmitted data for about 3 months and then shut down'
    },
    'Spirit': {
      name: 'Spirit (MER-A)',
      period: '2004-2010',
      mission: 'Mars Exploration Rover',
      duration: '6 years, 2 months, 19 days',
      size: '1.6 m long',
      weight: '185 kg',
      landing_site: 'Gusev Crater',
      distance_traveled: '7.73 km',
      power_source: 'Solar panels',
      image: 'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/07/rover2-1.jpg',
      description: `Spirit was one of NASA's twin Mars Exploration Rovers. It was active from 2004 to 2010, far exceeding its planned 90-day mission. It landed in Gusev Crater, which scientists believed was once filled with water. The rover's suite of scientific instruments included cameras, spectrometers, and a rock abrasion tool.`,
      achievements: [
        'Unearthed a patch of nearly pure silica in 2007 (the main ingredient of window glass).',
        'Found evidence of an ancient explosion at a bright, low plateau called Home Plate.',
        'Discovered evidence that Mars was once a wet environment.',
        'Captured several movies of dust devils in motion, providing the best look of the wind effects on the Martian surface as they were happening.',
      ],
      end_of_mission: 'Got stuck in soft soil in 2009 and stopped communicating in 2010'
    },
    'Opportunity': {
      name: 'Opportunity (MER-B)',
      period: '2004-2018',
      mission: 'Mars Exploration Rover',
      duration: '14 years, 138 days',
      size: '1.6 m long',
      weight: '185 kg',
      landing_site: 'Meridiani Planum',
      distance_traveled: '45.16 km',
      power_source: 'Solar panels',
      image: 'https://mars.nasa.gov/system/feature_items/images/6037_msl_banner.jpg',
      description: `Opportunity, Opportunity holds the record for the longest-operating rover on Mars. It landed in Meridiani Planum and explored the plains, craters, and dunes of Mars for nearly 15 years. The rover was equipped with multiple cameras, spectrometers, and a rock abrasion tool.`,
      achievements: [
        'Found hematite-rich spherules, nicknamed "blueberries", which are evidence of past water activity.',
        'Longest distance traveled on another planet, more than 45 kilometers across the Martian surface.',
        'Identified the first meteorite on another planet, an iron meteorite.',
        'Sent back over a quarter-million images'
      ],
      end_of_mission: 'Lost contact during a global dust storm in June 2018'
    },
    'Curiosity': {
      name: 'Curiosity (MSL)',
      period: '2012-Present',
      mission: 'Mars Science Laboratory',
      duration: 'Ongoing (landed 2012)',
      size: '2.9 m long',
      weight: '899 kg',
      landing_site: 'Gale Crater',
      distance_traveled: '28+ km (ongoing)',
      power_source: 'Radioisotope Thermoelectric Generator (RTG)',
      image: 'https://d2pn8kiwq2w21t.cloudfront.net/original_images/spaceimagesimageslargesizePIA14156_hires.jpg',
      description: `Curiosity is a car-sized rover designed to explore Gale Crater as part of NASA's Mars Science Laboratory mission. It was launched on November 26, 2011, and landed on Mars on August 6, 2012. The rover is still active and continues to explore the Martian terrain. Unlike previous rovers, Curiosity is powered by a radioisotope thermoelectric generator instead of solar panels.`,
      achievements: [
        'Determined that Mars once had conditions favorable for microbial life',
        'Found organic molecules in ancient lake-bed sediments',
        'Detected fluctuations in methane levels in the Martian atmosphere',
        'Assessed radiation levels on Mars for future human missions',
        'Demonstrated new landing techniques with the sky crane system'
      ],
      end_of_mission: 'Still operational'
    },
    'Perseverance': {
      name: 'Perseverance',
      period: '2021-Present',
      mission: 'Mars 2020',
      duration: 'Ongoing (landed 2021)',
      size: '3 m long',
      weight: '1,025 kg',
      landing_site: 'Jezero Crater',
      distance_traveled: '33+ km (ongoing)',
      power_source: 'Radioisotope Thermoelectric Generator (RTG)',
      image: 'https://d2pn8kiwq2w21t.cloudfront.net/original_images/24804_1-PIA23764-RoverNamePlateonMars-web_CiPm7xe.jpg',
      description: `Perseverance is NASA's most advanced rover to date, designed to search for signs of ancient microbial life and collect samples for future return to Earth. It carries innovative technologies including the Ingenuity helicopter, the first aircraft to perform powered flight on another planet. The rover has seven primary science instruments and 23 cameras.`,
      achievements: [
        'Discovered igneous rock, which showed evidence of interaction with water, and could record habitable conditions for microbial life.',
        'Demonstrated MOXIE technology that produces oxygen from Martian CO2.',
        'MOXIE ran 16 times, producing about a total of 4 ounces (122 grams) of oxygen, which would support an astronaut for about four hours.',
        'Captured high-quality audio recordings of Mars for the first time.'
      ],
      end_of_mission: 'Still operational'
    },
    'Zhurong': {
      name: 'Zhurong',
      period: '2021-Present',
      mission: 'Tianwen-1',
      duration: 'Ongoing (landed 2021)',
      size: '2.6 m long',
      weight: '240 kg',
      landing_site: 'Utopia Planitia',
      distance_traveled: '1.9+ km (ongoing)',
      power_source: 'Solar arrays',
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Zhurong_rover_3x2_crop.png',
      description: `Zhurong is China's first Mars rover, part of the Tianwen-1 mission. It landed in Utopia Planitia, a vast plain that may have once contained an ocean. The rover is designed to study the Martian surface composition, geological structure, climate, and environment. It carries six scientific instruments including cameras, ground-penetrating radar, and a magnetic field detector.`,
      achievements: [
        'First successful Chinese mission to land on Mars',
        'Completed primary mission of 90 Martian days and entered extended mission phase',
        'Discovered evidence of water activity in the recent past at its landing site',
        'Used ground-penetrating radar to map subsurface structures'
      ],
      end_of_mission: 'Still operational'
    }
  };
  
  const roverCards = document.querySelectorAll('.rover-card');
  
  roverCards.forEach(card => {
    card.style.cursor = 'pointer';
    
    card.addEventListener('click', function() {
      const roverName = this.querySelector('h3').textContent.split(' ')[0];
      const rover = roverData[roverName];
      
      if (rover) {
        let achievementsList = '';
        rover.achievements.forEach(achievement => {
          achievementsList += `<li>${achievement}</li>`;
        });
        
        modalContent.innerHTML = `
          <div class="rover-detail">
            <div class="rover-detail-header">
              <img src="${rover.image}" alt="${rover.name}">
              <div class="rover-detail-title">
                <h2>${rover.name}</h2>
                <h3>${rover.period} | ${rover.mission}</h3>
              </div>
            </div>
            
            <div class="rover-detail-content">
              <p class="rover-description">${rover.description}</p>
              
              <div class="rover-specs">
                <h3>Specifications</h3>
                <ul>
                  <li><strong>Duration:</strong> ${rover.duration}</li>
                  <li><strong>Size:</strong> ${rover.size}</li>
                  <li><strong>Weight:</strong> ${rover.weight}</li>
                  <li><strong>Landing Site:</strong> ${rover.landing_site}</li>
                  <li><strong>Distance Traveled:</strong> ${rover.distance_traveled}</li>
                  <li><strong>Power Source:</strong> ${rover.power_source}</li>
                  <li><strong>End of Mission:</strong> ${rover.end_of_mission || 'Still operational'}</li>
                </ul>
              </div>
              
              <div class="rover-achievements">
                <h3>Key Achievements</h3>
                <ul>
                  ${achievementsList}
                </ul>
              </div>
            </div>
          </div>
        `;
        
        modal.style.display = 'block';
      }
    });
  });
  
  const futureImages = document.querySelectorAll('.future-card img');
  
  futureImages.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function(e) {
      e.stopPropagation();
      modalContent.innerHTML = `<img src="${this.src}" alt="${this.alt}" style="max-width: 90%; max-height: 80vh; display: block; margin: 0 auto;">`;
      modal.style.display = 'block';
    });
  });
  
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });
  
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
