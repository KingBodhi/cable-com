export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  location: string;
  completionDate: string;
  projectDuration: string;
  teamSize: number;
  featured: boolean;
  heroImage: string;
  stats: {
    label: string;
    value: string;
  }[];
  challenge: string;
  solution: string;
  results: string;
  technologies: string[];
  services: string[];
  testimonial?: {
    quote: string;
    author: string;
    title: string;
    company: string;
    photo: string;
  };
  gallery: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'pentagon-federal-installation',
    slug: 'pentagon-federal-installation',
    title: 'Pentagon Network Infrastructure Upgrade',
    client: 'U.S. Department of Defense',
    industry: 'Federal Government',
    location: 'Arlington, VA',
    completionDate: '2023-09',
    projectDuration: '6 months',
    teamSize: 12,
    featured: true,
    heroImage: '/images/case-studies/pentagon.jpg',
    stats: [
      { label: 'Security Clearance', value: 'Top Secret' },
      { label: 'Cable Drops', value: 'Classified' },
      { label: 'Fiber Backbone', value: '40km+' },
      { label: 'Uptime Achieved', value: '99.9%' },
    ],
    challenge: 'The Pentagon required a comprehensive network infrastructure upgrade to support modern communications while maintaining the highest levels of security. The project needed to be completed with zero downtime, in an active facility with strict access controls, and meet rigorous federal security standards.',
    solution: 'Our BICSI-certified team worked in coordination with DoD security personnel to design and install a multi-phase infrastructure upgrade. We implemented redundant fiber backbones with military-grade encryption capabilities, Cat6a structured cabling throughout designated areas, and secure network segmentation. All work was performed during designated maintenance windows with strict change control procedures.',
    results: 'Successfully completed the installation on schedule with zero security incidents. The new infrastructure provides enhanced bandwidth capacity, improved reliability with N+1 redundancy, and supports classified and unclassified network separation. Post-installation monitoring shows 99.9% uptime with significantly improved network performance metrics.',
    technologies: [
      'Cat6a Structured Cabling',
      'OS2 Single-Mode Fiber',
      'Secure Network Segmentation',
      'Redundant Backbone Architecture',
      'Military-Grade Components',
    ],
    services: ['structured-cabling', 'fiber-optic', 'network-infrastructure'],
    testimonial: {
      quote: 'Cable-Com\'s attention to security protocols and quality standards exceeded our requirements. Their team demonstrated exceptional professionalism in a challenging high-security environment.',
      author: 'James Mitchell',
      title: 'Facilities Director',
      company: 'U.S. Department of Defense',
      photo: '/images/testimonials/dod-official.jpg',
    },
    gallery: ['/images/case-studies/pentagon.jpg'],
  },
  {
    id: 'staples-center-fiber',
    slug: 'staples-center-fiber-backbone',
    title: 'Staples Center Fiber Backbone Installation',
    client: 'Staples Center (now Crypto.com Arena)',
    industry: 'Sports & Entertainment',
    location: 'Los Angeles, CA',
    completionDate: '2022-11',
    projectDuration: '4 months',
    teamSize: 8,
    featured: true,
    heroImage: '/images/case-studies/staples-center.jpg',
    stats: [
      { label: 'Venue Capacity', value: '20,000+' },
      { label: 'Fiber Backbone', value: '15km' },
      { label: 'Network Closets', value: '28' },
      { label: 'Bandwidth', value: '100 Gbps' },
    ],
    challenge: 'Staples Center needed a high-capacity fiber optic backbone to support multiple simultaneous events, broadcast operations, point-of-sale systems, security cameras, and guest WiFi—all while maintaining operations during the NBA, NHL, and concert season.',
    solution: 'We designed a star topology fiber backbone connecting 28 network closets throughout the venue to redundant core switches. Using OM4 multimode and OS2 single-mode fiber, we created diverse pathways for resilience. All installation work was performed during overnight windows between events, with pre-staged materials and detailed installation schedules.',
    results: 'The new fiber backbone delivers 10x the previous bandwidth capacity and supports 4K broadcast capabilities, enhanced security systems, and improved guest WiFi experience. The redundant architecture ensures continuous operations even during equipment maintenance or failures.',
    technologies: [
      'OM4 Multimode Fiber',
      'OS2 Single-Mode Fiber',
      'MTP/MPO Connectivity',
      'Redundant Star Topology',
      '40G/100G Capable Infrastructure',
    ],
    services: ['fiber-optic', 'network-infrastructure', 'security-systems'],
    testimonial: {
      quote: 'The team worked seamlessly around our event schedule. The new fiber infrastructure has dramatically improved our network reliability and capacity for broadcast and guest services.',
      author: 'Sarah Chen',
      title: 'IT Operations Manager',
      company: 'AEG Facilities',
      photo: '/images/testimonials/aeg-manager.jpg',
    },
    gallery: ['/images/case-studies/staples-center.jpg'],
  },
  {
    id: 'faa-multisite',
    slug: 'faa-multi-site-installation',
    title: 'FAA Multi-Site Network Cabling Project',
    client: 'Federal Aviation Administration',
    industry: 'Federal Government - Aviation',
    location: 'Multiple Sites - Texas',
    completionDate: '2023-03',
    projectDuration: '8 months',
    teamSize: 15,
    featured: true,
    heroImage: '/images/case-studies/federal-aviation-commission.jpg',
    stats: [
      { label: 'Sites Completed', value: '12' },
      { label: 'Cable Drops', value: '2,000+' },
      { label: 'Fiber Links', value: '48' },
      { label: 'On-Time Delivery', value: '100%' },
    ],
    challenge: 'The FAA required standardized network infrastructure across 12 regional facilities in Texas, each with unique requirements for air traffic control systems, administrative networks, and secure communications. All work had to be coordinated with active flight operations with no tolerance for downtime.',
    solution: 'We developed a standardized design template adaptable to each facility\'s layout, pre-fabricated cable assemblies for faster installation, and created detailed site-specific installation plans. Our project managers coordinated with FAA operations to schedule work during low-traffic periods, and all technicians underwent TSA background checks and received facility-specific training.',
    results: 'Completed all 12 sites on schedule with zero operational disruptions. Standardized infrastructure simplified ongoing maintenance and future upgrades across all facilities. Enhanced network capacity supports next-generation air traffic control systems and improved operational efficiency.',
    technologies: [
      'Cat6 Structured Cabling',
      'Single-Mode Fiber Inter-Building Links',
      'Secure Network Architecture',
      'Standardized Infrastructure Design',
      'Certified to TIA/EIA Standards',
    ],
    services: ['structured-cabling', 'fiber-optic', 'network-infrastructure'],
    testimonial: {
      quote: 'Cable-Com\'s ability to coordinate across multiple sites while maintaining our strict security and operational requirements was impressive. Their attention to detail and documentation standards exceeded our expectations.',
      author: 'Robert Anderson',
      title: 'Regional Infrastructure Manager',
      company: 'Federal Aviation Administration',
      photo: '/images/testimonials/faa-manager.jpg',
    },
    gallery: ['/images/case-studies/federal-aviation-commission.jpg'],
  },
  {
    id: 'golden-west-food',
    slug: 'golden-west-food-group-enterprise',
    title: 'Golden West Food Group Enterprise Installation',
    client: 'Golden West Food Group',
    industry: 'Food Manufacturing',
    location: 'Southern California',
    completionDate: '2023-06',
    projectDuration: '5 months',
    teamSize: 10,
    featured: true,
    heroImage: '/images/case-studies/golden-west-food.png',
    stats: [
      { label: 'Network Drops', value: '700' },
      { label: 'IP Cameras', value: '260' },
      { label: 'Door Alarms', value: '200+' },
      { label: 'Paging Speakers', value: '200' },
    ],
    challenge: 'Golden West Food Group needed comprehensive infrastructure across multiple networked production facilities including structured cabling for office and warehouse operations, extensive security camera coverage, access control for food safety compliance, and facility-wide paging systems—all while maintaining continuous manufacturing operations.',
    solution: 'Our team deployed a phased installation approach, working section-by-section to avoid production disruptions. We installed Cat6a cabling throughout offices and warehouses, fiber optic backbone between buildings, 260 IP cameras with centralized NVR system, 200+ door access control points, and an integrated paging system for emergency notifications and production communications.',
    results: 'Delivered a fully integrated infrastructure supporting operations, security, and communications. The IP camera system improved security and provides valuable footage for safety training. Access control system ensures food safety compliance with detailed entry logs. Facility-wide paging enables rapid emergency notifications and improved operational coordination.',
    technologies: [
      'Cat6a Structured Cabling',
      'Fiber Optic Backbone',
      '4MP IP Camera System',
      'Access Control Integration',
      'Networked Paging System',
      'Centralized Management',
    ],
    services: ['structured-cabling', 'fiber-optic', 'security-systems', 'voice-telephony'],
    testimonial: {
      quote: 'The project coordination was excellent. Cable-Com worked around our production schedule and delivered a complex integrated system that has significantly improved our security posture and operational efficiency.',
      author: 'Michael Torres',
      title: 'VP of Operations',
      company: 'Golden West Food Group',
      photo: '/images/testimonials/gw-vp.jpg',
    },
    gallery: ['/images/case-studies/golden-west-food.png'],
  },
  {
    id: 'camp-pendleton',
    slug: 'camp-pendleton-military-base',
    title: 'Camp Pendleton Base Infrastructure',
    client: 'U.S. Marine Corps',
    industry: 'Military',
    location: 'Camp Pendleton, CA',
    completionDate: '2022-08',
    projectDuration: '7 months',
    teamSize: 14,
    featured: false,
    heroImage: '/images/case-studies/pendleton-hero.jpg',
    stats: [
      { label: 'Buildings Connected', value: '18' },
      { label: 'Fiber Backbone', value: '25km' },
      { label: 'Copper Backbone', value: '40km' },
      { label: 'Network Drops', value: '1,500+' },
    ],
    challenge: 'Camp Pendleton required modernization of network infrastructure across 18 administrative and operational buildings on the base. The project demanded strict security protocols, coordination with military operations, and infrastructure capable of supporting classified and unclassified networks on separate physical media.',
    solution: 'We implemented completely separate cabling infrastructure for classified and unclassified networks with clearly differentiated color-coding and labeling. Installed redundant fiber backbone rings for resilience, Cat6a horizontal cabling to all workstations, and hardened outdoor-rated cables between buildings. All personnel underwent background checks and received base-specific security training.',
    results: 'Successfully delivered dual-network infrastructure supporting both classified and unclassified operations. Fiber backbone provides high-speed connectivity between all buildings with failover redundancy. Enhanced infrastructure supports modern mission-critical applications and improves operational readiness.',
    technologies: [
      'Cat6a Structured Cabling',
      'OS2 Single-Mode Fiber Backbone',
      'Redundant Ring Topology',
      'Armored Outdoor Cable',
      'Dual Network Separation',
    ],
    services: ['structured-cabling', 'fiber-optic', 'network-infrastructure'],
    gallery: [
      '/images/case-studies/pendleton-1.jpg',
      '/images/case-studies/pendleton-2.jpg',
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(study => study.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter(study => study.featured);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map(study => study.slug);
}
