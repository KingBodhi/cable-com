export interface Service {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
  applications: string[];
  pricing: {
    starting: string;
    description: string;
  };
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const services: Service[] = [
  {
    id: 'structured-cabling',
    name: 'Structured Network Cabling',
    slug: 'structured-cabling',
    tagline: 'Enterprise-grade Cat5e, Cat6, Cat6a installation',
    description: 'Professional structured cabling infrastructure that forms the backbone of your business communications. From small offices to enterprise campuses, we design and install scalable network cabling systems that deliver reliable performance for decades.',
    icon: '🔌',
    features: [
      'Cat5e, Cat6, Cat6a, Cat7 installation',
      'Horizontal and backbone cabling',
      'Cable certification and testing',
      'Comprehensive labeling and documentation',
      'Future-proof design for scalability',
      '25-year manufacturer warranty',
    ],
    benefits: [
      'Faster data transfer speeds (up to 10 Gbps)',
      'Reduced network downtime',
      'Scalable for future growth',
      'Improved network security',
      'Lower total cost of ownership',
      'Compliance with TIA/EIA standards',
    ],
    applications: [
      'Office networks and workstations',
      'Data centers and server rooms',
      'Manufacturing facilities',
      'Healthcare institutions',
      'Educational campuses',
      'Government buildings',
      'Retail and hospitality',
    ],
    pricing: {
      starting: '$85 per drop',
      description: 'Pricing varies based on cable type, distance, complexity, and volume. Includes installation, testing, certification, and documentation.',
    },
    process: [
      {
        step: 1,
        title: 'Site Survey & Design',
        description: 'Our BICSI-certified team conducts a thorough site assessment, reviews your requirements, and designs a comprehensive cabling infrastructure plan.',
      },
      {
        step: 2,
        title: 'Material Selection',
        description: 'We specify premium-grade cables, connectors, and hardware from industry-leading manufacturers like CommScope, Panduit, and Belden.',
      },
      {
        step: 3,
        title: 'Professional Installation',
        description: 'Experienced technicians install cabling following TIA/EIA standards, ensuring proper bend radius, cable management, and fire code compliance.',
      },
      {
        step: 4,
        title: 'Testing & Certification',
        description: 'Every cable run is tested with Fluke DSX-5000 analyzers and certified to exceed Category 6/6a performance specifications.',
      },
      {
        step: 5,
        title: 'Documentation & Handover',
        description: 'Receive comprehensive as-built drawings, test reports, warranty documentation, and detailed labeling for easy maintenance.',
      },
    ],
    faqs: [
      {
        question: 'What is the difference between Cat6 and Cat6a?',
        answer: 'Cat6 supports up to 1 Gbps at 100 meters and 10 Gbps at 55 meters. Cat6a supports 10 Gbps at the full 100-meter distance and has better alien crosstalk protection, making it ideal for dense cable environments and future-proofing.',
      },
      {
        question: 'How long does a typical installation take?',
        answer: 'A 50-drop office installation typically takes 3-5 business days. Larger projects (200+ drops) may take 2-4 weeks depending on complexity. We work after hours to minimize business disruption.',
      },
      {
        question: 'Do you provide warranties?',
        answer: 'Yes, we offer a 2-year labor warranty and manufacturer warranties up to 25 years on materials when we install a complete system (cables, connectors, patch panels, jacks).',
      },
      {
        question: 'Can you work around our business hours?',
        answer: 'Absolutely. We offer after-hours, weekend, and holiday installation services to minimize disruption to your operations. Emergency service is available 24/7.',
      },
      {
        question: 'What standards do you follow?',
        answer: 'We adhere to TIA/EIA-568-C standards, National Electrical Code (NEC), and BICSI best practices. All installations are inspected and certified to ensure compliance.',
      },
    ],
  },
  {
    id: 'fiber-optic',
    name: 'Fiber Optic Installation',
    slug: 'fiber-optic',
    tagline: 'High-speed single-mode and multi-mode fiber solutions',
    description: 'Lightning-fast fiber optic cabling for bandwidth-intensive applications. Whether you need fiber backbones between buildings, data center connectivity, or fiber-to-the-desktop, our certified technicians deliver precision installations with industry-leading performance.',
    icon: '🌐',
    features: [
      'Single-mode fiber (OS2) for long distances',
      'Multi-mode fiber (OM3, OM4, OM5)',
      'Fusion splicing and mechanical terminations',
      'OTDR testing and certification',
      'Indoor/outdoor rated cables',
      'Fiber backbone infrastructure',
    ],
    benefits: [
      'Gigabit to 100+ Gbps speeds',
      'Immunity to electromagnetic interference',
      'Longer transmission distances (up to 40km+)',
      'Higher bandwidth capacity',
      'Future-proof infrastructure',
      'Lower signal loss and latency',
    ],
    applications: [
      'Campus backbone connections',
      'Data center interconnects',
      'Telecommunications infrastructure',
      'Industrial control systems',
      'Medical imaging and healthcare',
      'Security and surveillance systems',
      'High-performance computing',
    ],
    pricing: {
      starting: '$15 per foot',
      description: 'Fiber pricing depends on fiber type (single/multi-mode), connector type (LC, SC, ST, MTP), splice count, and installation environment. Includes testing and certification.',
    },
    process: [
      {
        step: 1,
        title: 'Fiber Design',
        description: 'Engineering team designs fiber pathways, calculates loss budgets, and specifies appropriate fiber types and connector styles for your application.',
      },
      {
        step: 2,
        title: 'Pathway Preparation',
        description: 'Install conduit, innerduct, and cable trays. Pull ropes and establish proper fiber routes with appropriate bend radius protection.',
      },
      {
        step: 3,
        title: 'Cable Installation',
        description: 'Professional fiber pulling using proper tension monitoring equipment. Armored or plenum-rated cables selected based on environment.',
      },
      {
        step: 4,
        title: 'Splicing & Termination',
        description: 'Fusion splicing for permanent connections or field-installable connectors. All work performed in clean, controlled environments.',
      },
      {
        step: 5,
        title: 'OTDR Testing',
        description: 'Complete optical time-domain reflectometer testing, loss measurement, and certification. Bidirectional testing ensures compliance with specifications.',
      },
    ],
    faqs: [
      {
        question: 'Single-mode vs multi-mode fiber - which do I need?',
        answer: 'Single-mode fiber is for long distances (10km+) and higher bandwidths, ideal for campus backbones and telecom applications. Multi-mode is cost-effective for shorter runs (up to 550m for 10G) and is perfect for building backbones and data centers.',
      },
      {
        question: 'Can you upgrade our existing copper to fiber?',
        answer: 'Yes, we can design a hybrid approach or complete fiber migration. We assess your current infrastructure, bandwidth needs, and budget to create an optimal upgrade path.',
      },
      {
        question: 'How do you handle outdoor fiber installations?',
        answer: 'We use armored, direct-burial rated, or aerial fiber cables depending on the application. All outdoor installations follow utility codes and include proper grounding, splice closures, and moisture protection.',
      },
      {
        question: 'What kind of testing do you provide?',
        answer: 'We provide comprehensive OTDR testing, insertion loss testing, optical return loss measurement, and polarity verification. You receive detailed test reports showing all parameters meet or exceed industry standards.',
      },
    ],
  },
  {
    id: 'data-center',
    name: 'Data Center Cabling',
    slug: 'data-center',
    tagline: 'High-density structured cabling for mission-critical environments',
    description: 'Precision-engineered data center infrastructure optimized for maximum uptime, scalability, and airflow efficiency. We specialize in high-density copper and fiber installations following TIA-942 standards for world-class data centers.',
    icon: '🖥️',
    features: [
      'Hot aisle / cold aisle design',
      'High-density cable management',
      'Redundant fiber backbones',
      'Cat6a/Cat8 for 10G/25G/40G',
      'Raised floor and overhead installations',
      'Zone cabling architecture',
    ],
    benefits: [
      'Improved airflow and cooling efficiency',
      'Reduced cable congestion',
      'Easier troubleshooting and maintenance',
      'Support for high-density blade servers',
      'N+1 redundancy options',
      'Scalable for future expansion',
    ],
    applications: [
      'Enterprise data centers',
      'Colocation facilities',
      'Cloud service provider infrastructure',
      'Server rooms and network closets',
      'Edge computing installations',
      'Disaster recovery sites',
    ],
    pricing: {
      starting: 'Custom quote',
      description: 'Data center projects are quoted based on rack count, density requirements, redundancy needs, and timeline. Contact us for a detailed assessment.',
    },
    process: [
      {
        step: 1,
        title: 'TIA-942 Assessment',
        description: 'Evaluate your data center tier requirements, power/cooling capacity, and design a cabling infrastructure that supports current and future density needs.',
      },
      {
        step: 2,
        title: 'Cable Pathway Design',
        description: 'Engineer overhead ladder rack, under-floor conduit, or zone distribution architecture optimized for your specific equipment layout.',
      },
      {
        step: 3,
        title: 'High-Density Installation',
        description: 'Install trunk cables, breakout panels, and patch cords using proper cable management to maintain airflow and accessibility.',
      },
      {
        step: 4,
        title: 'Redundancy Implementation',
        description: 'Implement diverse pathways, redundant fiber backbones, and failover architectures to ensure maximum uptime.',
      },
      {
        step: 5,
        title: 'Documentation & Monitoring',
        description: 'Provide comprehensive labeling, as-built drawings, DCIM integration data, and ongoing maintenance support.',
      },
    ],
    faqs: [
      {
        question: 'What is zone cabling and why is it better?',
        answer: 'Zone cabling consolidates connections in zone distribution areas closer to equipment, reducing cable lengths, improving airflow, and simplifying moves/adds/changes compared to traditional home-run cabling.',
      },
      {
        question: 'Can you work in a live data center?',
        answer: 'Yes, we specialize in live data center work with strict change control procedures, maintenance windows, and safety protocols to ensure zero downtime during installations.',
      },
      {
        question: 'How do you handle cable management in high-density racks?',
        answer: 'We use a combination of vertical cable managers, horizontal finger ducts, and bend radius management to maintain proper airflow while ensuring cables are organized and accessible for maintenance.',
      },
    ],
  },
  {
    id: 'security-systems',
    name: 'Security Systems',
    slug: 'security-systems',
    tagline: 'Enterprise CCTV, surveillance, and intrusion detection',
    description: 'Comprehensive security system installations including IP cameras, NVR/DVR systems, access control, and intrusion detection. Protect your facility with enterprise-grade surveillance and monitoring infrastructure.',
    icon: '🔒',
    features: [
      'IP camera installation (4K, PTZ, fixed)',
      'NVR and DVR systems',
      'Access control integration',
      'Video analytics and AI detection',
      'Remote monitoring capabilities',
      'Integration with existing systems',
    ],
    benefits: [
      '24/7 surveillance coverage',
      'Enhanced facility security',
      'Real-time alerts and notifications',
      'Evidence recording and storage',
      'Deterrent against theft and vandalism',
      'Insurance premium reductions',
    ],
    applications: [
      'Office buildings and campuses',
      'Manufacturing facilities',
      'Retail stores and shopping centers',
      'Warehouses and distribution centers',
      'Healthcare facilities',
      'Educational institutions',
      'Government buildings',
    ],
    pricing: {
      starting: '$800 per camera',
      description: 'Pricing includes camera, cabling, power (PoE), mounting, configuration, and integration. NVR systems quoted separately based on storage and channel requirements.',
    },
    process: [
      {
        step: 1,
        title: 'Security Assessment',
        description: 'Conduct site survey to identify coverage areas, camera placement, lighting conditions, and integration requirements.',
      },
      {
        step: 2,
        title: 'System Design',
        description: 'Design comprehensive surveillance system including camera types, network architecture, storage capacity, and monitoring setup.',
      },
      {
        step: 3,
        title: 'Infrastructure Installation',
        description: 'Install Cat6 cabling for IP cameras, PoE switches, NVR systems, and network connectivity for centralized management.',
      },
      {
        step: 4,
        title: 'Camera Deployment',
        description: 'Mount and configure cameras, optimize viewing angles, adjust settings for lighting conditions, and configure analytics.',
      },
      {
        step: 5,
        title: 'System Integration & Training',
        description: 'Integrate with access control, configure alerts, set up remote monitoring, and train your team on system operation.',
      },
    ],
    faqs: [
      {
        question: 'How many cameras do I need?',
        answer: 'It depends on your facility layout, coverage requirements, and security objectives. During our assessment, we identify all critical areas and recommend optimal camera placement for comprehensive coverage.',
      },
      {
        question: 'What resolution should my cameras be?',
        answer: 'We typically recommend 4MP minimum for general surveillance and 4K (8MP) for areas requiring facial recognition or license plate capture. Lower resolutions may suffice for general monitoring.',
      },
      {
        question: 'How long is video footage stored?',
        answer: 'Storage duration depends on camera count, resolution, frame rate, and storage capacity. We design systems for 30-90 days retention typically, with longer retention for critical areas.',
      },
    ],
  },
  {
    id: 'voice-telephony',
    name: 'Voice & Telephony Systems',
    slug: 'voice-telephony',
    tagline: 'Modern VoIP and unified communications',
    description: 'Future-ready voice communication systems from traditional PBX to modern cloud-based VoIP solutions. Unify your communications with feature-rich phone systems that scale with your business.',
    icon: '📞',
    features: [
      'VoIP phone system installation',
      'Hosted PBX solutions',
      'SIP trunking and connectivity',
      'Conference room audio/video',
      'Paging and intercom systems',
      'Integration with Microsoft Teams/Zoom',
    ],
    benefits: [
      'Lower monthly phone costs',
      'Work from anywhere capability',
      'Advanced call features',
      'Easy scalability',
      'Integration with CRM systems',
      'Unified communications',
    ],
    applications: [
      'Office phone systems',
      'Call centers',
      'Conference rooms',
      'Reception and lobby areas',
      'Manufacturing floor paging',
      'Emergency notification systems',
    ],
    pricing: {
      starting: '$200 per phone',
      description: 'Includes VoIP phone, cabling, PoE power, installation, and configuration. Monthly service fees vary by provider and feature set selected.',
    },
    process: [
      {
        step: 1,
        title: 'Communication Needs Analysis',
        description: 'Assess your calling patterns, required features, number of users, and integration requirements to design the optimal solution.',
      },
      {
        step: 2,
        title: 'System Selection',
        description: 'Recommend appropriate phone system (on-premise PBX, hosted, or hybrid) and select phones/devices based on user roles.',
      },
      {
        step: 3,
        title: 'Network Preparation',
        description: 'Ensure network infrastructure can support VoIP (QoS, VLAN, bandwidth, PoE switches) and install additional cabling if needed.',
      },
      {
        step: 4,
        title: 'Phone Deployment',
        description: 'Install phones, configure extensions, set up voicemail, auto-attendant, and advanced features like call routing and hunt groups.',
      },
      {
        step: 5,
        title: 'Training & Support',
        description: 'Train your team on system features, provide user guides, and establish ongoing support for moves/adds/changes.',
      },
    ],
    faqs: [
      {
        question: 'Should I choose on-premise or hosted VoIP?',
        answer: 'Hosted VoIP requires lower upfront investment, includes automatic updates, and offers geographic flexibility. On-premise provides more control and may be more cost-effective for larger installations (100+ users). We help you analyze both options.',
      },
      {
        question: 'Will VoIP work during a power outage?',
        answer: 'VoIP requires power and internet connectivity. We recommend UPS battery backup for phones and network equipment, plus fail-over to mobile devices or POTS lines for critical communications.',
      },
      {
        question: 'Can you integrate with our existing CRM?',
        answer: 'Yes, most modern VoIP systems integrate with popular CRM platforms like Salesforce, HubSpot, and Microsoft Dynamics, enabling click-to-dial, screen pops, and call logging.',
      },
    ],
  },
  {
    id: 'network-infrastructure',
    name: 'Network Infrastructure',
    slug: 'network-infrastructure',
    tagline: 'Complete network design and implementation',
    description: 'Comprehensive network infrastructure services from design to implementation. We architect, install, and support enterprise-grade wired and wireless networks that deliver reliable, secure connectivity throughout your facility.',
    icon: '🌐',
    features: [
      'Network design and planning',
      'WiFi 6/6E wireless installation',
      'Switch and router configuration',
      'Network security implementation',
      'Server room buildouts',
      'Ongoing support and monitoring',
    ],
    benefits: [
      'Fast, reliable connectivity',
      'Seamless WiFi roaming',
      'Enhanced network security',
      'Reduced downtime',
      'Scalable architecture',
      'Expert ongoing support',
    ],
    applications: [
      'Office network infrastructure',
      'Warehouse WiFi coverage',
      'Guest network separation',
      'IoT device connectivity',
      'Server room consolidation',
      'Network modernization projects',
    ],
    pricing: {
      starting: 'Custom quote',
      description: 'Network infrastructure projects are priced based on size, complexity, equipment selection, and support requirements. We provide detailed proposals with multiple options.',
    },
    process: [
      {
        step: 1,
        title: 'Network Assessment',
        description: 'Evaluate current infrastructure, identify bottlenecks, assess security posture, and document requirements for an optimized design.',
      },
      {
        step: 2,
        title: 'Architecture Design',
        description: 'Create detailed network diagram, specify equipment (switches, routers, access points), plan IP addressing, VLANs, and security policies.',
      },
      {
        step: 3,
        title: 'Equipment Procurement',
        description: 'Leverage our vendor partnerships (Cisco, HPE, Ubiquiti, Ruckus) to procure equipment at competitive pricing with proper licensing.',
      },
      {
        step: 4,
        title: 'Installation & Configuration',
        description: 'Install network equipment, configure routing/switching, implement security policies, deploy wireless access points, and optimize settings.',
      },
      {
        step: 5,
        title: 'Testing & Handover',
        description: 'Conduct thorough testing, document configuration, provide network diagrams, and train your IT team on management and monitoring.',
      },
    ],
    faqs: [
      {
        question: 'Do we need WiFi 6 or is WiFi 5 sufficient?',
        answer: 'WiFi 6 offers significant improvements: better performance in dense environments, lower latency, improved battery life for devices, and support for more concurrent clients. For new installations, WiFi 6 is highly recommended for future-proofing.',
      },
      {
        question: 'Can you help with network security?',
        answer: 'Yes, we implement multiple security layers: network segmentation, firewall configuration, intrusion detection, secure WiFi with 802.1X authentication, and network access control to prevent unauthorized devices.',
      },
      {
        question: 'Do you provide ongoing network support?',
        answer: 'We offer managed service contracts including 24/7 monitoring, proactive maintenance, firmware updates, performance optimization, and on-site support with guaranteed response times.',
      },
    ],
  },
  {
    id: 'starlink-installation',
    name: 'Starlink Business Installation',
    slug: 'starlink-installation',
    tagline: 'Enterprise satellite internet with Pentagon-grade network integration',
    description: 'Professional Starlink Business installation and network integration for enterprises, remote sites, and mission-critical backup connectivity. From rooftop to router, we deliver complete satellite internet solutions with automatic failover, priority support, and seamless integration into your existing network infrastructure.',
    icon: '🛰️',
    features: [
      'Professional rooftop or ground mounting',
      'Network integration with existing infrastructure',
      'Automatic failover configuration',
      'Priority business data access',
      'Public IPv4 address setup',
      'Enterprise firewall integration',
    ],
    benefits: [
      '40-220+ Mbps speeds with low latency',
      'Works anywhere with clear sky view',
      'Priority network access over residential',
      '24/7 business-grade support',
      'Disaster recovery and backup internet',
      'No trenching or traditional ISP required',
    ],
    applications: [
      'Remote construction sites',
      'Oil and gas field operations',
      'Rural healthcare facilities',
      'Temporary offices and events',
      'Disaster recovery backup',
      'Government remote installations',
      'Agricultural operations',
    ],
    pricing: {
      starting: '$1,200 per installation',
      description: 'Installation includes professional mounting, network integration, router configuration, and testing. Equipment costs $699-$2,500 (client purchased). Monthly service $140-$500 through Starlink.',
    },
    process: [
      {
        step: 1,
        title: 'Site Assessment & Planning',
        description: 'Use Starlink app to verify clear sky view, assess optimal mounting location, review power requirements, and plan network integration points.',
      },
      {
        step: 2,
        title: 'Equipment Procurement',
        description: 'Assist client in ordering Starlink Business kit, recommend mounting hardware, and specify network equipment for failover configuration.',
      },
      {
        step: 3,
        title: 'Professional Installation',
        description: 'Install mounting hardware, position and secure dish, run power and data cables, weatherproof all connections, and ensure proper grounding.',
      },
      {
        step: 4,
        title: 'Network Integration',
        description: 'Configure router and firewall, set up automatic failover to existing internet, implement network security policies, and test connectivity.',
      },
      {
        step: 5,
        title: 'Testing & Documentation',
        description: 'Conduct speed tests, verify failover operation, document configuration, provide user training, and deliver maintenance guidelines.',
      },
    ],
    faqs: [
      {
        question: 'What is Starlink Business and who needs it?',
        answer: 'Starlink Business is SpaceX\'s enterprise satellite internet service offering 40-220+ Mbps speeds with priority access, 24/7 support, and SLA guarantees. It\'s ideal for remote sites, backup internet, construction projects, and locations where traditional internet is unavailable or unreliable.',
      },
      {
        question: 'How does Starlink compare to traditional internet?',
        answer: 'Starlink works anywhere with a clear view of the sky, requires no trenching or infrastructure, and provides speeds comparable to cable internet. Business plans include priority network access, public IP addresses, and guaranteed uptime - perfect for backup connectivity or primary internet in remote locations.',
      },
      {
        question: 'Can you integrate Starlink with our existing network?',
        answer: 'Yes, we specialize in seamless integration. We configure automatic failover between your primary internet and Starlink backup, implement security policies, maintain your existing IP scheme, and ensure zero downtime during switching. Your users won\'t notice when failover occurs.',
      },
      {
        question: 'What does installation include?',
        answer: 'Professional installation includes site survey, optimal dish placement and mounting, weatherproof cable runs, power configuration, router setup, network integration, firewall configuration, failover testing, and complete documentation. Typical installation takes 4-8 hours.',
      },
      {
        question: 'Do I need a clear view of the sky?',
        answer: 'Yes, Starlink requires an unobstructed view of the northern sky (in North America). We use the Starlink app during site assessment to identify obstructions and determine the best mounting location. Trees, buildings, and other obstacles can degrade performance.',
      },
      {
        question: 'What are the ongoing costs?',
        answer: 'Equipment costs $699-$2,500 (one-time, client purchased). Monthly service is $140-$500 depending on data needs. We offer optional managed service packages for $150-$300/month including monitoring, support, and maintenance.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map(service => service.slug);
}
