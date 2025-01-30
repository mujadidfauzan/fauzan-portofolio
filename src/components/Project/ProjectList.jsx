import { getImagesArray, getImagesByPrefix } from '../../assets';

const projects = [
  {
    title: 'FoodTopia: AI-Powered Nutrition App',
    description: 'An Android app designed to tackle nutritional challenges in Indonesia by offering personalized diet recommendations.',
    category: 'Machine Learning',
    image: getImagesByPrefix(['foodtopia']),
    techStack: getImagesArray('10.webp', '12.webp'),
    longDescription: `FoodTopia is a machine learning-powered mobile application that provides personalized recipe and dietary recommendations. It integrates Machine Learning, Mobile Development, and Cloud Computing to deliver a seamless user experience.
    Key Features

    - Ingredient-Based Recipe Recommendations – Uses Cosine Similarity to suggest recipes based on available ingredients, reducing food waste.
    - Dietary Meal Planning – Implements Deep Neural Networks (DNN) to generate meal plans tailored to user goals (e.g., low-calorie, high-protein).
    - On-Device ML Integration – Runs ML models directly on the mobile app, ensuring fast and efficient performance.
    - Cloud-Hosted API & Database – Utilizes Cloud Run & Firestore, with billing alerts for cost control.

    My Role – Machine Learning Developer
    🔹 Developed and optimized ML models using TensorFlow.
    🔹 Implemented TF-IDF vectorization & cosine similarity for recipe matching.
    🔹 Designed DNN-based dietary recommendation for personalized meal plans.

    FoodTopia combines AI and cloud technology to create a smart, health-focused food assistant, helping users make better meal choices effortlessly.`,
    link: 'https://github.com/akiraka123/Bangkit_Project_Capstone_FoodTopia/tree/main/ML',
  },
  {
    title: 'Abu Robocon Robot',
    description: 'Participated in the ABU Robocon Contest Indonesia 2024, developing robots based on the theme "Harvest Day" to simulate agricultural harvesting tasks.',
    category: 'Robotics',
    image: getImagesByPrefix(['krai', 'kewir']),
    techStack: getImagesArray('4.webp', '5.webp', '10.webp', '13.webp', '14.webp'),
    longDescription: `As head of programming division at Airlangga University robot team we engineered two robots focused on agricultural automation for the "Harvest Day" theme. Our solution featured:
    - Custom PID-controlled mobility system
    - Computer vision-powered ball detection using OpenCV
    - Precision robotic arm mechanism 
    - Gazebo and ROS for simulation
    The robot successfully completed complex harvesting simulations in 85% of trial runs, earning us a top 16 national ranking.`,
    link: 'https://github.com/mujadidfauzan/robot2_auto_krai2024',
  },
  {
    title: 'Munashoroh Website',
    description: 'Developed the Munashoroh website as a frontend developer using React.js and Tailwind CSS to ensure a modern, responsive user interface.',
    category: 'Web',
    image: getImagesByPrefix(['munashoroh']),
    techStack: getImagesArray('1.webp', '2.webp', '9.webp', '7.webp'),
    longDescription: `As the Frontend Developer for the Munashoroh Website, I designed and implemented a modern, responsive, and user-friendly interface using React.js and Tailwind CSS. Key features and accomplishments include:

    - Modern UI/UX Design: Created an intuitive and visually appealing interface with a focus on user experience, ensuring seamless navigation across all devices.
    - Responsive Design: Utilized Tailwind CSS to build a fully responsive layout that adapts perfectly to desktops, tablets, and mobile devices.
    - Dynamic Content Loading: Implemented React components to enable dynamic content rendering, reducing page load times by 40%.
    - Custom Components: Developed reusable React components (e.g., navigation bars, modals, and cards) to maintain consistency across the website.`,
    link: 'https://github.com/The-Foundation-Tech/frontend-web-ymi',
  },
  {
    title: 'Fixed Wing UAV for River Flood Response',
    description: 'This project focuses on deploying a UAV (Unmanned Aerial Vehicle) team as first responders in river flood disaster areas.',
    category: 'Robotics',
    image: getImagesByPrefix(['fw']),
    techStack: getImagesArray('22.png'),
    longDescription: `As the Head of Ground Control Station (GCS) Operator Division in the Kontes Robot Indonesia (KRI) team, I led the development and operation of a Fixed Wing UAV (Unmanned Aerial Vehicle) designed for flood disaster response. My responsibilities and our achievements included:

    - Mission Planning & Execution: Designed and implemented autonomous flight plans using waypoint navigation and obstacle avoidance algorithms, ensuring precise mission execution.
    - Real-Time Monitoring: Oversaw the integration of FPV (First Person View) cameras and telemetry systems, providing live video feeds and GPS tracking for accurate UAV control.
    
    Our UAV demonstrated exceptional performance in both simulation and real-world testing, showcasing its potential for disaster response applications. This experience honed my skills in UAV operations, team leadership, and real-time problem-solving under pressure.`,
  },
  {
    title: 'Genetic Algorithm for Wireless Sensor Network Optimization',
    description: 'Optimized wireless sensor networks (WSNs) in Surabaya using genetic algorithms to improve energy efficiency and expand network coverage.',
    category: 'Machine Learning',
    image: getImagesByPrefix(['wireless']),
    techStack: getImagesArray('10.webp', '20.webp', '17.webp'),
    longDescription: `This project focuses on optimizing Wireless Sensor Networks (WSN) in Surabaya using genetic algorithms to enhance energy efficiency and network coverage.

    - Background: Surabaya faces challenges in traffic management, disaster response, and air quality monitoring. WSN can help address these issues through a more efficient monitoring system.
    - Method: Genetic algorithms are applied to determine the optimal sensor placement and power consumption, improving network performance.
    - Results: The study shows that this method reduces operational costs, maximizes sensor coverage, and increases public satisfaction without compromising service quality.

    This project supports the development of smart infrastructure and can be applied across various sectors, including security, environmental monitoring, and transportation`,
    link: 'https://github.com/mujadidfauzan/genetic-algorithm-wireless-network',
  },
  {
    title: 'Smart Egg Incubator: Automated IoT Solution',
    description: 'Developed an IoT-based egg incubator enabling real-time monitoring of temperature and humidity to improve hatching success rates.',
    category: 'IoT',
    image: getImagesByPrefix(['egg']),
    techStack: getImagesArray('5.webp', '18.webp', '19.webp'),
    longDescription: `This project focuses on developing an IoT-based automatic egg incubator to enhance efficiency and productivity in poultry farming. Using ESP32 as the main controller, the system monitors temperature, humidity, and egg presence in real-time. Key features include:

    - Automated Temperature & Humidity Control – Uses DHT22 and LM35 sensors to regulate heating and ventilation via relays.
    - Real-Time Monitoring & Alerts – Sends updates and allows control via WhatsApp commands.
    - Smart Egg Detection – Uses HC-SR04 ultrasonic sensor to detect egg presence and ensure optimal incubation conditions.

    This innovation optimizes energy use, improves hatching success rates, and supports sustainable poultry farming through IoT automation.`,
    link: 'https://github.com/mujadidfauzan/Automated-IoT-Solution-for-Optimal-Hatching',
  },
  {
    title: 'Landing Page Surabaya Dev Community',
    description: 'Developed a responsive landing page for Surabaya Dev using HTML and Bootstrap 5, providing concise information about the community.',
    category: 'Web',
    image: getImagesByPrefix(['surabaya']),
    techStack: getImagesArray('1.webp', '2.webp', '16.webp'),
    longDescription: `Developed a responsive and engaging landing page for Surabaya Dev, a community for developers in Surabaya, using HTML and Bootstrap 5. Hosted on Vercel, the page provides concise information about the community's activities and events, with easy navigation and a modern layout.`,
    link: 'https://github.com/mujadidfauzan/landing-page-surabayadev',
  },
  {
    title: 'Line Follower Robot',
    description: 'Developed a line follower robot that autonomously follows a path using line-tracing technology with an Arduino Nano.',
    category: 'Robotics',
    image: getImagesByPrefix(['linefol']),
    techStack: getImagesArray('5.webp', '21.webp', '23.webp'),
    longDescription: `This project involves developing a line follower robot that autonomously follows a path from a start area to a finish area using line-tracing technology. The robot is built using an Arduino Nano as the microcontroller, a TB6612FNG motor driver, and an OLED display for feedback. This robot using Custom IR sensor array with 8-channel multiplexing with PID-controlled motors.`,
  },

  {
    title: 'Automated Guided Vehicle Robot',
    description: `Developed a a line follower robot with a trolley-lifting mechanism`,
    category: 'Robotics',
    image: getImagesByPrefix(['agv']),
    techStack: getImagesArray('5.webp', '21.webp', '23.webp'),
    longDescription: `The AGV in this project is a line-following robot with a trolley lifting mechanism. The chassis is made of laser-cut acrylic for high precision. The robot has two levels:
    - Bottom Level – Houses two motors, a PCB with electronic circuits, and sensors.
    - Top Level – Contains the lifting mechanism, which operates using a lead screw to convert rotational motion into linear motion for lifting the trolley.
    Robot Analysis

    Initially, the lifting mechanism had two supports, but this caused instability and frequent jamming. The design was revised, replacing the two supports with four supports for better balance. Additionally, bolts were replaced with 3mm shafts and linear bearings, ensuring smoother movement and preventing jams.`,
  },
];

export default projects;
