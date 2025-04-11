
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import ConstructionIcon from "@mui/icons-material/Construction";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

import EditNoteIcon from "@mui/icons-material/EditNote";
import TungstenIcon from "@mui/icons-material/Tungsten";
import FeedbackIcon from "@mui/icons-material/Feedback";
import EngineeringIcon from "@mui/icons-material/Engineering";
import HandymanIcon from "@mui/icons-material/Handyman";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LinkIcon from "@mui/icons-material/Link";
import WarehouseIcon from '@mui/icons-material/Warehouse';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import WorkIcon from '@mui/icons-material/Work';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import BugReportIcon from '@mui/icons-material/BugReport';
import TapAndPlayIcon from '@mui/icons-material/TapAndPlay';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import DrawIcon from '@mui/icons-material/Draw';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import AdbIcon from '@mui/icons-material/Adb';


import CGI from "../assets/isometric-view-3d-rendering-neon-city.jpg";


type ITServiceItem = {
    title: string;
    description?: string; // Optional because some items might not have a description
    content?: { icon: React.ElementType; name: string }[]; // Array of content items
    promises?: string[]; // Array of promises
  };


type VFXTool = string;

interface VFXContent {
  image: string;
  description: string;
}

interface VFXSection {
  title: string;
  content: VFXContent[];
  tools: VFXTool[];
}


interface SupportScope {
  name: string;
  needs: string[];
}

interface SupportItem {
  title: string;
  description: string;
  tools: string[];
  scope: SupportScope[]; // can be empty array []
}

 export  const ITservice :ITServiceItem[] = [
    {
      title: "Custom Application development",

      description:
        "Custom Software Development is a process of designing, building, integrating software solutions as per the business need to address the pressing needs or to achieve your business objectives. Being a Custom App Development company, rostram can help you from the requirement phase to support & on-going enhancement phases where you can focus on core business while we do the tech work as your partner. rostram will add value to your requirement by being an advisory member for your technology requirement. We leverage the experience of our resources who have worked on varied technologies, in different industries across the globe. \n\nThis strength gives us to be a strong player in delivering work with high quality, on-time and within the stipulated budget. Our technology stack ranges from older to latest technologies like Classic ASP to .NET Core, Java, NodeJS, PHP, Python, Ruby on Rails, HTML5, Angular, React, Vuejs, MySQL, SQL, Oracle DB, AWS, GCP and Azure etc. rostram can create a customized development process for you which fits your need and we also setup an end-to-end activity for DevOps, CD, CT, CI & CD, also does a Security Review of your whole infrastructure & application architecture. As part of Custom Application Development we develop Web, Mobile and Desktop applications along with integration of 3rd party applications.",

      content: [
        {
          icon: AutoFixHighIcon,
          name: "Custom App Design and Development",
        },
        {
          icon: IntegrationInstructionsIcon,
          name: "App Integration",
        },
        {
          icon: ConstructionIcon,
          name: "API Development",
        },
        {
          icon: AutoAwesomeIcon,
          name: "Enhancements",
        },
      ],
      promises: [
        "Unparalleled technology experience and expertise",
        "Completion within the budget and timelines",
        "Ramp up or ramp down the resources with short notice",
        "24/7 Support and Maintenance",
        "Agile in execution",
        "Quick turnaround time",
        "Direct interaction with resources",
        "Timely updates on the project status",
      ],
    },
    {
      title: "Product Development",
      description:
        "At Rostram, we are empowered by a dynamic team of professionals from diverse business domains — technology, design, strategy, and operations. This unique blend of expertise allows us to transform ideas into successful, market-ready products. Whether it's a startup with a disruptive concept or an enterprise seeking innovation, we walk alongside our clients from the initial spark of an idea all the way to full-scale production.\n\nWe've developed a structured process and a robust framework that enables seamless product development. Our methodology ensures that every stage — from ideation and prototyping to testing and launch — is aligned with our client's vision and market needs.",
      content: [
        {
          icon: EditNoteIcon,
          name: "Requirement Evocation and Detailing",
        },
        {
          icon: TungstenIcon,
          name: "Digital Lab and Design Thinking",
        },
        {
          icon: FeedbackIcon,
          name: "User Feedback Analysis",
        },
        {
          icon: EngineeringIcon,
          name: "Architecture Design and Development",
        },
        {
          icon: HandymanIcon,
          name: "Adoption of Competent Tech Stack",
        },
        {
          icon: MobileFriendlyIcon,
          name: "Application Development",
        },
        {
          icon: SupportAgentIcon,
          name: "Maintenance and Support",
        },
        {
          icon: LinkIcon,
          name: "Enterprise Application Integration",
        },
      ],
    },
    {
      title: "Data Analytics Services",
      description: "Data Analytics is the science of inspecting, analysing and transforming raw data with the goal of producing actionable information that helps in decision makingUnderstanding your customers and anticipating their needs through data analytics is essential for businesses aiming to stay competitive. By harnessing predictive data analytics, companies can gain insights into customer behavior, allowing them to forecast trends and identify potential risks, such as fraud, before they become significant issues. This not only enhances security but also improves customer experience by enabling businesses to respond proactively to emerging needs.rostram will add value to your requirement by being an advisory member for your technology requirement. \n\n We leverage the experience of our resources who have worked on varied technologies, in different industries across the globe. This strength gives us to be a strong player in delivering work with high quality, on-time and within the stipulated budget.Additionally, data analytics plays a crucial role in efficient user segmentation, which is key to optimizing marketing strategies. By analyzing customer data, businesses can create more targeted marketing campaigns that resonate with specific segments, leading to higher engagement and improved conversion rates. Moreover, the insights gained from data analytics help streamline operations, enabling companies to allocate resources more effectively, ultimately driving higher ROI and fostering sustainable growth." ,
      content: [
        {
          icon: WarehouseIcon,
          name: "Data Warehousing",
        },
        {
          icon: AutoGraphIcon,
          name: "Data Analytics",
        },
        {
          icon:LeaderboardIcon,
          name: "Data Visualisation",
        },
        {
          icon: WorkIcon,
          name: "Business Intelligence",
        },
      ],
    },
    {
      title: "Product Re-Engineering",
    description: "Revamp your existing technology platform in line with the latest technology trends. Along with utilising the latest technology stack, new features can also be added.Product re-engineering plays a crucial role in maintaining competitiveness within your domain. By optimizing your existing product, you can effectively fight off competition and stay relevant in a fast-paced market. This approach not only ensures that your product remains aligned with the latest technological advancements in the industry but also allows for a more seamless adoption of new features and improvements that can set you apart from competitors.\n\nMoreover, re-engineering leads to remarkable improvements in performance due to code optimization, which enhances the overall user experience and efficiency of your product.\n\n Additionally, it minimizes risks associated with starting from scratch by leveraging the existing codebase and infrastructure. This strategic approach not only reduces development time and costs but also ensures a more stable and reliable product, helping you maintain a competitive edge in the market." ,
    content: [
      {
        icon: EditNoteIcon,
        name: "Experience Design",
      },
    
      {
        icon:MilitaryTechIcon,
        name: "Mobility",
      },
      {
        icon: BugReportIcon,
        name: "Quality Testing and Engineering",
      },
    ],  
  },

    {
      title: "Mobile Application development",
      description: "It is the process of designing and developing mobile applications that focus on user needs. Adopting mobile first strategy, we create elegant solutions using complex engineering.\n\nIn the rapidly evolving landscape of mobile application development, providing core intelligent interfaces is essential for ensuring seamless connectivity across devices and platforms. These interfaces enable users to interact effortlessly with applications, enhancing their overall experience. By integrating advanced technologies and intuitive designs, developers can create applications that adapt to user needs, offering smooth and uninterrupted connectivity in various environments.\n\nAs mobile applications continue to grow in popularity, their ever-increasing presence offers developers access to a large and diverse customer base. This expanding user base drives innovation and encourages the development of more sophisticated applications. By focusing on creating seamless and intelligent interfaces, developers can tap into this vast market, ensuring that their applications meet the demands of a growing audience and remain competitive in the dynamic mobile app industry." ,
      content: [
        {
          icon: MobileFriendlyIcon,
          name: "Custom Mobile Application",
        },
      
        {
          icon:TapAndPlayIcon,
          name: "Hybrid Mobile Application",
        },
        {
          icon: AppShortcutIcon,
          name: "Native Mobile Application",
        },
        {
          icon: DrawIcon,
          name: "Experience Design",
        },
        {
          icon: BugReportIcon,
          name: "QA and Testing Services",
        },
        {
          icon: UpgradeIcon,
          name: "Up-gradation & Migration",
        },
      ], 
    
    },
    {
      title: "Testing",
      description: "It is the process of verifying and validating the software with an aim to find bugs, difference in developed requirement as against actual requirement. It helps to maintain the quality of the software.\n\nIn the realm of application development, ensuring high-quality products is paramount. Rigorous testing plays a crucial role in this process, helping to identify and rectify potential issues before they reach the end user. By meticulously testing applications, developers can minimize bugs, ensuring that the final product is not only functional but also reliable. This thorough approach to testing guarantees that the application performs as expected across various scenarios, leading to fewer post-launch issues and a smoother experience for both the developers and the users.\n\nWhen bugs are kept to a minimum, the result is a significantly enhanced user experience. Users are more likely to trust and engage with an application that is stable, intuitive, and responsive. Effective testing goes beyond merely finding and fixing errors; it also contributes to the overall usability of the product. By focusing on both quality and user experience during the testing phase, developers can deliver applications that not only meet but exceed user expectations, fostering satisfaction and loyalty in a competitive market." ,
      content: [
        {
          icon: EditNoteIcon,
          name: "Performance Testing",
        },
      
        {
          icon: MobileFriendlyIcon,
          name: "Mobile Cloud Testing",
        },
        {
          icon: BugReportIcon,
          name: "Quality Testing and Engineering",
        },
        {
          icon: AdbIcon,
          name: "Test Automation",
        },
      ],   
    },

  ];


  export  const VFXData: VFXSection[] = [
      {
        title: "VFX Production",
        content: [
          {
            image: "https://www.rostram.com/images/services/2.png",
            description:
              "We elevate brand distinction with awe-inspiring, refined visual design, embodying a design philosophy that exudes elegance. Our expertise lies in crafting cinematic visuals that captivate audiences, communicate emotion, and enhance storytelling. With a blend of cutting-edge technology and artistic precision, we transform concepts into immersive experiences that leave a lasting impression. Whether it's through high-end simulations, stylized CGI, or seamless VFX integration, our solutions push the boundaries of creativity and innovation.",
          },
        ],
        tools: [
          "VFX",
          " VFX Simulation",
          "VFX Production",
          "VFX Tools",
        ],
      },
      {
        title: "VFX Pipeline Development",
        content: [
          {
            image: "https://www.rostram.com/images/services/4.png",
            description:
              "We specialize in engineering cutting-edge VFX tools that empower seamless production workflows and enhance creative possibilities. Trusted by leading studios and production houses, our solutions play a pivotal role in shaping the future of VFX pipeline development — driving efficiency, scalability, and innovation from concept to final frame.",
          },
        ],
        tools: [
          "VFX Tool Development",
          " VFX Pipeline",
        ],
      },
      {
        title: "CGI Tools Development",
        content: [
          {
            image: CGI,
            description:
              "We amplify brand presence through sophisticated, story-driven visual design that resonates with modern audiences. Our design philosophy is intricately aligned with the technical and creative demands of CGI development — ensuring every visual element integrates seamlessly into complex pipelines while maintaining artistic integrity and brand coherence.",
          },
        ],
        tools: [
          " Green Matte removals",
          "Wire removals",
          "CGI Production",
        ],
      },
      {
        title: "3D & GAME Production",
        content: [
          {
            image: "https://www.rostram.com/images/services/2.png",
            description:
              "We craft mesmerizing digital experiences across video games, virtual reality, film, and a wide range of digital platforms. Backed by a collaborative team of visionary artists, designers, programmers, and technical experts, we bring ideas to life through striking 3D models, immersive environments, and dynamic animations. Every project is a fusion of creativity and precision, designed to captivate audiences and elevate digital storytelling to new heights.",
          },
        ],
        tools: [
          "3D Modeling & Animation",
          " Game Modeling & Animation",
          "VFX Pre Production",
          "VFX Post Production",
          "CGI Tools Development",
        ],
      },
    ];



   export const supportData: SupportItem[] = [
        {
          title: "App Support & Maintenance",
          description:
            "The business growth will happen if you continuously deliver the best to your customers with their ever changing consumption or purchase behavior. It is an integrated activity of any growing business to work with partners for the regular activity so that they can focus on the major purpose of their business.\n\nTo stay agile, humble and cost effective in this competitive world, businesses has to innovate on new business products and deploy latest technologies to support them while controlling IT costs. rostram's end-to-end expertise in handling the entire application life cycle empowers us to support any application in any stage of it from our offshore center.",
          tools: [
            "Run the business demands without interrupting operations",
            "Lower the total cost of ownership to maintain the IT Eco System",
            "Focus resources on growing the business while supporting the enterprise",
            "Maintain visibility and control over the applications",
          ],
          scope: [],
        },
        {
          title: "Quality Assurance",
          description:
            "Quality assurance is a systematic process that ensures products and services meet specified requirements and standards. It involves planning, monitoring, and evaluating processes to prevent defects and ensure consistent quality. By implementing QA practices, organizations can enhance customer satisfaction, reduce costs associated with rework, and maintain compliance with industry regulations.",
          tools: [
            "Lean and agile partner to scale your product",
            "On-time releases",
            "High-quality software",
            "Optimized testing costs",
          ],
    
          scope: [
            {
              name: "Business Need",
              needs: [
                "Functional",
                "Usability",
                "Security",
                "Performance",
                "Configuration",
                "Localization",
              ],
            },
            {
              name: "Technical Need",
              needs: ["Manual", "Automated UI Testing", "Automated API Testing"],
            },
            {
              name: "Application Type",
              needs: [
                "Web App",
                "Cloud Apps",
                "Security",
                "Mobile Apps",
                "Desktop Apps",
              ],
            },
            {
              name: "Stage of App lifecycle",
              needs: [
                "New feature testing",
                "Regression testing",
                "Release testing",
                "Integration testing",
              ],
            },
          ],
        },
        {
          title: "Data Insights",
          description:
            "Data drives the businesses to the direction of growth if it is utilized properly. There are a lot of hidden insights in the huge data and detecting the opportunities from that is a tedious job. The technology has advanced in all the aspects of business and the latest advancements in Data management helps companies in innovation to reinvent themselves to stay ahead in the market.\n\nEvery business needs a digital presence to capture the space in consumer mind. With the deep penetration of internet, smart phones, increase in connected devices in all the markets, digital space is becoming more competitive and becoming difficult for companies to maintain their status quo.\n\nRostram IT Labs provides end-to-end Data Insights services that drives better business outcomes to take informed and faster",
          tools: [
            "Leverage cutting-edge data analytics solutions",
            "Derive near real-time actionable insights",
            "Discover innovative solutions to business problems",
            "Drive informed decision making",
          ],
          scope: [],
        },
        {
          title: "DevOps",
          description:
            "The agile process in software industry has brought tremendous changes in different ways and the results are good for all the stakeholders. Fast-paced development and time-to-market along with quality are driving businesses towards the success in this competitive world.\n\nBeing agile helps organizations to implement DevOps approach for software delivery. Rostram IT Labs help you to achieve greater agility and shorter delivery cycles.            \n\nRostram automates your end-to-end software delivery pipeline and stay competitive by driving digital transformation and agility with our Cloud and DevOps expertise.",
          tools: [
            "Continuous Development",
            "Continuous Integration",
            "Continuous Testing",
            "Release Management",
            "Continuous Deployment",
          ],
          scope: [],
        },
      ];

