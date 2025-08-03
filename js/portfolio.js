const portfolioItems = [
    {
        id: "byond-bsi",
        title: "Byond by BSI",
        image: "img/portfolio/byond/byond-logo.png",
        shortDescription: "BYOND by BSI is a comprehensive SuperApp for digital banking.",
        overview: "BYOND by BSI is a comprehensive \"SuperApp\" launched by Bank Syariah Indonesia (BSI) as an upgrade to its existing BSI Mobile app. It integrates financial, social, and spiritual services into a single platform, aiming to enhance user convenience and meet the increasing demands of digital banking. Features include investment options, savings accounts, payments, and QRIS transactions. BYOND by BSI reflects BSI's commitment to digital transformation, providing a user-friendly, secure, and multifunctional banking experience",
        role: "iOS Developer",
        techStack: ["Swift", "RxSwift", "UIKit (Auto Layout)", "Alamofire", "Zoloz", "Dynatrace", "AppFlyers"],
        tools: ["GitLab", "Figma", "Jira"],
        contributions: [
            "Developed and integrated the revamped MVP feature for online account opening and debit card activation, using Swift, UIKit, and a VIPER architecture to ensure scalability and future enhancements.",
            "Built the “Byond Lyfe” lifestyle feature, a dynamic, scroll-driven module with custom animations and personalized menus, enhancing user engagement and navigation.",
            "Implemented KAI (Kereta Api Indonesia) booking and payment system, integrating third-party APIs and designing a smooth, reliable ticketing flow within the app.",
            "Integrated Firebase Analytics and Appsflyer to track user behavior, install attribution, and in-app events, supporting data-driven product and marketing decisions.",
            "Applied MVVM architecture and modular design patterns to ensure codebase clarity, maintainability, and ease of testing across growing features.",
            "Created reusable UI components and layouts with UIKit, Auto Layout, and storyboard/code-based interfaces, ensuring consistency and reducing development time.",
            "Played a key role in the code review process, helping maintain high code quality and preventing bugs during merges to pre-release and production branches.",
            "Identified and resolved UI performance issues using Instruments (Time Profiler, Allocations), leading to smoother user experience on both mid- and low-tier devices.",
            "Supported cross-functional collaboration with design, backend, QA, and product teams, ensuring features were aligned with business goals and user expectations.",
            "Contributed to the release cycle and sprint planning using JIRA ensuring timely delivery within tight deadlines."
        ],
        links: {
            appStore: "https://apps.apple.com/id/app/byond-by-bsi/id6444697752",
            github: null
        },
        screenshots: [
            "img/portfolio/byond/byond1.jpg",
            "img/portfolio/byond/byond2.jpg",
            "img/portfolio/byond/byond3.jpg",
            "img/portfolio/byond/byond4.jpg",
            "img/portfolio/byond/byond5.jpg",
            "img/portfolio/byond/byond6.jpg",
            "img/portfolio/byond/byond7.jpg",
            "img/portfolio/byond/byond8.jpg"
        ]
    },
    {
        id: "tribunx",
        title: "TribunX",
        image: "img/portfolio/tribunx/tribunx-logo.png",
        shortDescription: "TribunX is a hyperlocal news superapp by Tribun Network.",
        overview: "TribunX is a super app developed by Tribun Network, part of Kompas Gramedia, a leading media company in Indonesia. The app aims to integrate various services into one platform, combining the network’s expertise in news delivery with additional features for diverse user needs. It offers hyperlocal news, live streaming, Video-On-Demand (VOD), and interactive social features like TribunMe, where users can connect with influential figures.",
        role: "iOS Developer",
        techStack: ["Swift", "SwiftUI", "Combine", "Core Data", "Moya", "TCA", "Firebase", "Jixie", "AppFlyers"],
        tools: ["GitLab", "Figma"],
        contributions: [
            [
                "Researched appropriate tech stack and built the app from scratch, focusing on performance, scalability, and long-term maintainability. Maintained and developed the Tribun news app using SwiftUI, delivering fast and reliable news content to users across Indonesia.",
                "Created custom reusable components such as a WebView manager, Core Data manager, custom pop-ups, and alert handlers, standardizing UI/UX across the app.",
                "Developed key features like SSO (Single Sign-On), Detail Article, Detail Video, Live Video, and Bookmarks, all integrated into a TCA architecture.",
                "Implemented video playback and short video support, integrating with the company’s internal Kotlin Multiplatform (KMP) video SDK for seamless media delivery.",
                "Built infinite scrolling and lazy loading for article and video feeds, optimizing performance and reducing memory usage.",
                "Integrated push notifications using Firebase Cloud Messaging (FCM) for real-time news alerts, live event updates, and reader re-engagement.",
                "Implemented bookmarking with Core Data, enabling users to save and access articles offline.",
                "Integrated Firebase Analytics to track in-app events and user behavior, supporting editorial and product strategy decisions.",
                "Enhanced deep linking, routing, and navigation flow to handle shared links from social media and external platforms directly into in-app content."
            ]
        ],
        links: {
            appStore: "https://apps.apple.com/id/app/tribunx/id6448592070?platform=iphone",
            github: null
        },
        screenshots: [
            "img/portfolio/tribunx/tribunx1.png",
            "img/portfolio/tribunx/tribunx2.png",
            "img/portfolio/tribunx/tribunx3.png",
            "img/portfolio/tribunx/tribunx4.png",
            "img/portfolio/tribunx/tribunx5.png",
            "img/portfolio/tribunx/tribunx6.png",
            "img/portfolio/tribunx/tribunx7.png",
        ]
    },
    {
        id: "tokokopikiri",
        title: "TokoKopiKiri",
        image: "img/portfolio/tokokopikiri/tokokopikiri-preview.png",
        shortDescription: "TokoKopiKiri is well known coffee shop",
        overview: "TokoKopiKiri, also known as \"Kopi Kita Tiap Hari\" (\"Our Daily Coffee\"), is a coffee shop concept originating from Aceh, Indonesia. It aims to provide a positive daily coffee experience with its signature \"Kiri Blend,\" a unique mix of 100% Arabica beans offering a rich flavor and lower caffeine content. The blend is crafted to suit a wide audience, focusing on quality and taste.",
        role: "iOS Developer",
        techStack: ["Swift", "SwiftUI", "Combine", "Kotlin Multi Platform (KMP)", "MVVM"],
        tools: ["GitHub", "Figma"],
        contributions: [
            "Developed the Tokokopikiri iOS app using Swift and UIKit, focusing on delivering a modern, scalable shopping experience.",
            "Created custom views and base components aligned with the app’s design system, including buttons, cards, segmented controls, page controls, and more.",
            "Built core features such as Single Sign-On (SSO), Payments, Vouchers, and Membership management, ensuring a smooth and secure user experience.",
            "Collaborated with product and design teams to translate UI/UX designs into pixel-perfect interfaces, ensuring consistency across iOS platforms.",
            "Integrated Firebase Cloud Messaging (FCM) to enable push notifications for promotions, order updates, and engagement campaigns.",
            "Set up Firebase Analytics to monitor user behavior and conversion funnels, supporting data-driven product development.",
            "Applied MVVM architecture and modular design principles to keep the codebase clean, reusable, and testable.",
            "Built reusable components for rapid feature development and consistent UI across multiple screens.",
            "Contributed to performance optimization and memory management, ensuring smooth operation even with media-heavy product pages.",
            "Supported app deployment and release cycles via TestFlight, Git, and CI/CD workflows, ensuring stable releases on schedule."
        ],
        links: {
            appStore: "https://apps.apple.com/id/app/tokokopikiri/id6476023951",
            github: null
        },
        screenshots: [
            "img/portfolio/tokokopikiri/tokokopikiri1.png",
            "img/portfolio/tokokopikiri/tokokopikiri2.png",
            "img/portfolio/tokokopikiri/tokokopikiri3.png",
            "img/portfolio/tokokopikiri/tokokopikiri4.png",
        ]
    },
    {
        id: "temanquran",
        title: "TemanQuran",
        image: "img/portfolio/temanquran/temanquran-logo.png",
        shortDescription: "TemanQuran is a digital platform for learning and teaching the Qur'an anytime, anywhere, with guidance from experienced teachers across Indonesia.",
        overview: "TemanQuran is a non-formal education initiative run by Yayasan TemanQuran International, dedicated to advancing Qur'an education through digital technology. The TemanQuran app was developed by a team of qualified Qur’an memorizers and professional IT experts, supported by generous donors who care deeply about Qur'an education. Officially launched during Ramadan 1445 H (2024), the platform enables Muslims—especially in Indonesia—to study the Qur'an wherever and whenever they wish, guided by certified and experienced teachers. TemanQuran also aims to help improve the livelihood of Qur'an teachers throughout Indonesia.",
        role: "iOS Developer",
        techStack: ["Swift", "UIKit (XIB)", "VIPER", "Combine", "Moya", "Alamofire", "Zego", "SocketIO"],
        tools: ["GitHub", "Figma"],
        contributions: [
            "Developed and maintained the TemanQuran iOS app using Swift and UIKit, supporting spiritual and lifestyle needs for Muslim users.",
            "Created a full suite of custom views and base components following the app’s design system, including buttons, collection layouts, segmented controls, page controls, popups, dialogs, and custom navigation.",
            "Built and integrated major features such as Single Sign-On (SSO), Payment, and Video Call, ensuring a secure and seamless user experience.",
            "Integrated real-time streaming using WebSocket technology, enabling features like live events, sessions, and real-time user interactions.",
            "Implemented push notification services using Firebase Cloud Messaging (FCM) to support reminders, live session alerts, and user engagement.",
            "Applied VIPER architecture and followed modular programming principles to maintain a scalable and testable codebase.",
            "Developed reusable layout systems for collection-based UIs, optimizing performance and memory usage on devices with varying specs.",
            "Integrated video call functionality using third-party SDKs, enabling live 1-on-1 and group interaction experiences within the app.",
            "Collaborated with backend and product teams to design APIs and handle real-time communication, error handling, and socket reconnect logic.",
            "Contributed to UI polish and user experience enhancements, aligning with Islamic design principles and accessibility standards."
        ],
        links: {
            appStore: "https://apps.apple.com/id/app/temanquran/id6746782432",
            github: null
        },
        screenshots: [
            "img/portfolio/temanquran/temanquran13.webp",
            "img/portfolio/temanquran/temanquran14.webp",
            "img/portfolio/temanquran/temanquran15.webp",
            "img/portfolio/temanquran/temanquran16.webp",
        ]
    },
    {
        id: "hifzmate",
        title: "HifzMate",
        image: "img/portfolio/hifzmate/hifzmate-logo.png",
        shortDescription: "Introducing HifzMate - Your Ultimate Quran Memorization Companion",
        overview: "HifzMate is a revolutionary application designed to assist Quran memorization enthusiasts in their journey of memorizing the Holy Quran. With its comprehensive set of features, HifzMate aims to make the memorization process more engaging, structured, and rewarding",
        role: "iOS Developer",
        techStack: ["Swift", "SwiftUI", "Firebase", "CoreAnimation", "Moya"],
        tools: ["GitHub", "Figma"],
        contributions: [
            "Contributed as an iOS Developer to build HifzMate, an app designed to support users in memorizing the Holy Quran through structured and engaging features.",
            "Developed the entire user interface using SwiftUI, focusing on responsiveness, accessibility, and modern declarative design.",
            "Implemented Firebase Authentication, supporting Google Sign-In and Sign in with Apple to provide secure and frictionless access.",
            "Integrated Firebase Firestore as a cloud database, managing user profiles, progress tracking, and personalized memorization plans.",
            "Utilized Moya for structured and testable network layer implementation, ensuring clean API communication patterns.",
            "Applied Core Animation to enhance UI interactivity, including memorization progress animations and feedback visuals.",
            "Worked closely with designers via Figma to ensure pixel-perfect implementation of screens and user flows.",
            "Used GitHub for version control and collaboration, following pull request reviews and clean branching strategies.",
            "Conducted testing across multiple devices and screen sizes, ensuring a smooth experience across all supported iPhones.",
            "Successfully released the final product to the App Store, handling distribution, provisioning profiles, and app metadata setup."
        ],
        links: {
            appStore: "https://apps.apple.com/in/app/hifzmate/id6501949968",
            github: null
        },
        screenshots: [
            "img/portfolio/hifzmate/hifzmate1.png",
            "img/portfolio/hifzmate/hifzmate2.png",
            "img/portfolio/hifzmate/hifzmate3.png",
            "img/portfolio/hifzmate/hifzmate4.png",
            "img/portfolio/hifzmate/hifzmate5.png",
            "img/portfolio/hifzmate/hifzmate6.png",
        ]
    },
    {
        id: "pokepedia",
        title: "Poképedia",
        image: "img/portfolio/pokepedia/pokepedia-logo.png",
        shortDescription: "Poképedia is a pokedex application that provide all pokemon informations",
        overview: "Poképedia  is an app that provide all data pokemon like Pokedex and detail pokemon. This apps is consume Pokeapi to provide all detail data about pokemon. Poképedia is my individual project during my time learning core tech stack of iOS Developer",
        role: "iOS Developer",
        techStack: ["Swift", "UIKit (Programmatically)", "Alamofire", "RxSwift", "Realm", "DGChart", "Lottie", "SDWebImage", "VIPER", "Generic Patter", "Modularization", "Github Action"],
        tools: ["GitHub", "Figma"],
        contributions: [
            "Built Poképedia, a full-featured Pokédex app consuming data from the PokeAPI, as a self-initiated project to deepen understanding of core iOS development principles.",
            "Designed the complete UI/UX and app assets using Figma, maintaining a consistent visual language across the app.",
            "Developed all UI components programmatically using UIKit, without Storyboards or XIBs, to strengthen layout and view hierarchy control.",
            "Applied VIPER architecture to enforce a clean separation of concerns and improve code maintainability and testability.",
            "Implemented Modularization using generic protocol-oriented programming, enabling scalable and reusable feature modules.",
            "Integrated RxSwift for reactive state management and binding between the view and data layers.",
            "Used Alamofire for structured and maintainable API networking, handling complex requests to the PokéAPI.",
            "Implemented local caching and an offline-first strategy using Realm, allowing users to browse previously viewed Pokémon without internet.",
            "Added visual enhancements with Lottie animations, DGCharts for base stat visualizations, and SDWebImage for efficient image loading.",
            "Configured GitHub Actions for CI/CD pipelines to automate build and testing workflows, practicing DevOps best practices."
        ],
        links: {
            appStore: null,
            github: "https://github.com/rivaldofez/Pokepedia"
        },
        screenshots: [
            "img/portfolio/pokepedia/pokepedia1.png",
            "img/portfolio/pokepedia/pokepedia2.png",
            "img/portfolio/pokepedia/pokepedia3.png",
            "img/portfolio/pokepedia/pokepedia4.png",
            "img/portfolio/pokepedia/pokepedia5.png",
            "img/portfolio/pokepedia/pokepedia6.png",
            "img/portfolio/pokepedia/pokepedia7.png",
            "img/portfolio/pokepedia/pokepedia8.png",
            "img/portfolio/pokepedia/pokepedia9.png",
            "img/portfolio/pokepedia/pokepedia10.png",
            "img/portfolio/pokepedia/pokepedia11.png",
            "img/portfolio/pokepedia/pokepedia12.png",
            "img/portfolio/pokepedia/pokepedia13.png",
            "img/portfolio/pokepedia/pokepedia14.png",
        ]
    },
    {
        id: "chroma",
        title: "Chroma",
        image: "img/portfolio/chroma/logo.png",
        shortDescription: "Chroma is a simple color filter image app",
        overview: "Chroma is an apps that provide simple monochrome filter color to your image and camera. This Filter provide RGB based color filter to enable all color possibility to your camera.",
        role: "iOS Developer",
        techStack: ["Swift", "UIKIt", "Combine", "MetalKit", "AVFoundation", "CoreImage", "CoreAnimation"],
        tools: ["GitHub", "Figma"],
        contributions: [
  "Built ChromaFilter, an iOS app that applies customizable monochrome RGB-based filters to images and live camera input, exploring low-level image processing.",
  "Designed and implemented the UI programmatically using UIKit with layout anchors, avoiding Storyboards for full control over view hierarchy and layout constraints.",
  "Applied VIPER architecture and clean architecture principles to achieve strict separation of concerns and modular design.",
  "Developed a simple but powerful RGB color filtering engine to generate dynamic monochrome effects in real time.",
  "Worked with AVFoundation to access the device camera and apply live filters to video input streams.",
  "Implemented reusable components and base classes to streamline new feature development and reduce code duplication.",
  "Practiced good software engineering practices including version control with GitHub, clean commit history, and modular code organization.",
  "Used this project to strengthen understanding of UIKit layouting, camera integration, and architecture patterns in a production-style setup."
],
        links: {
            appStore: null,
            github: "https://github.com/rivaldofez/ChromaFilter"
        },
        screenshots: [
            "img/portfolio/chroma/image_1.png",
            "img/portfolio/chroma/image_2.png",
            "img/portfolio/chroma/image_3.png",
            "img/portfolio/chroma/image_4.png",
            "img/portfolio/chroma/image_5.png",
            "img/portfolio/chroma/image_6.png",
            "img/portfolio/chroma/image_7.png",
            "img/portfolio/chroma/image_8.png",
            "img/portfolio/chroma/image_9.png",
            "img/portfolio/chroma/image_10.png",
        ]
    },
    {
        id: "chromatics",
        title: "Chromatic",
        image: "img/portfolio/chromatic/Logo.png",
        shortDescription: "Chromatic is a simple color game to assist color perceptions",
        overview: "Chromatic is an app to test your sight and color perception. This application generate a set of coloreach level and give NxN color button which only one have a different color from others. Your challenge is to guess the button that have different color. To guess the button, you only have 1 minute :)",
        role: "iOS Developer",
        techStack: ["SwiftUI", "Swift", "Swift Playground", "Realm", "CoreAnimation"],
        tools: ["GitHub", "Figma"],
        contributions: [
  "Developed Chromatic, a color perception game built to challenge visual acuity through time-based color differentiation tasks.",
  "Designed and implemented the UI entirely using SwiftUI, creating a smooth, responsive, and animated interface.",
  "Built a dynamic NxN color grid generator, where one square has a subtly different color — the player must identify it within one minute.",
  "Applied Core Animation and visual feedback techniques to highlight success, failure, and transitions between levels.",
  "Used Realm to persist user progress, best scores, and time statistics, enabling offline gameplay and local history tracking.",
  "Conducted visual design in Figma, focusing on contrast, accessibility, and user-friendly touch targets.",
  "Packaged and tested the app inside Swift Playgrounds, making it accessible for learners and test users on iPad.",
  "Used GitHub for version control, maintaining clean commits and modular game logic components for future expansion."
        ],
        links: {
            appStore: null,
            github: "https://github.com/rivaldofez/chromatic"
        },
        screenshots: [
            "img/portfolio/chromatic/image_1.png",
            "img/portfolio/chromatic/image_2.png",
            "img/portfolio/chromatic/image_3.png",
            "img/portfolio/chromatic/image_4.png",
            "img/portfolio/chromatic/image_5.png",
            "img/portfolio/chromatic/image_6.png",
            "img/portfolio/chromatic/image_7.png",
            "img/portfolio/chromatic/image_8.png",
            "img/portfolio/chromatic/image_9.png",
            "img/portfolio/chromatic/image_10.png",
            "img/portfolio/chromatic/image_11.png",
            "img/portfolio/chromatic/image_12.png",
            "img/portfolio/chromatic/image_13.png",
            "img/portfolio/chromatic/image_14.png",
            "img/portfolio/chromatic/image_15.png",
            "img/portfolio/chromatic/image_16.png",
            "img/portfolio/chromatic/image_17.png",
            "img/portfolio/chromatic/image_18.png",
            "img/portfolio/chromatic/image_19.png",
            "img/portfolio/chromatic/image_20.png",
        ]
    },
    {
        id: "eweapon",
        title: "E-Weapon",
        image: "img/portfolio/eweapon/Logo.png",
        shortDescription: "E-Weapon is inventory app that manage weapon rental",
        overview: "E-Weapon is an inventory app that manage weapon rental or service in Shooting Sport provider. Besides manage weapon, this app also provide information for admin to recap and list down status each weapon such as in use, or in repair at workshop",
        role: "iOS Developer",
        techStack: ["SwiftUI", "Swift", "Realm", "RxSwift", "XLSX Writer", "Lottie"],
        tools: ["GitHub", "Figma"],
        contributions: [
            []
        ],
        links: {
            appStore: null,
            github: "https://github.com/rivaldofez/e-weapon"
        },
        screenshots: [
            "img/portfolio/eweapon/Image_1.png",
            "img/portfolio/eweapon/Image_2.png",
            "img/portfolio/eweapon/Image_3.png",
            "img/portfolio/eweapon/Image_4.png",
            "img/portfolio/eweapon/Image_5.png",
            "img/portfolio/eweapon/Image_6.png",
            "img/portfolio/eweapon/Image_7.png",
            "img/portfolio/eweapon/Image_8.png",
            "img/portfolio/eweapon/Image_9.png",
            "img/portfolio/eweapon/Image_10.png",
            "img/portfolio/eweapon/Image_11.png",
            "img/portfolio/eweapon/Image_12.png",
            "img/portfolio/eweapon/Image_13.png",
            "img/portfolio/eweapon/Image_14.png",
            "img/portfolio/eweapon/Image_15.png",
            "img/portfolio/eweapon/Image_16.png",
            "img/portfolio/eweapon/Image_17.png",
            "img/portfolio/eweapon/Image_18.png",
            "img/portfolio/eweapon/Image_19.png",
        ]
    },
    {
        id: "wawai",
        title: "Wawai",
        image: "img/portfolio/wawai/logo.png",
        shortDescription: "Wawai, Lampung Script gamification app",
        overview: "Wawai is an application that provides various features for learning Lampung script, such as a canvas for learning to make Lampung script, quizzes to evaluate learning and there is scoring which is a measure of success and a component that is an encouragement to continue learning",
        role: "iOS Developer",
        techStack: ["SwiftUI", "Swift", "Swift Playground", "Lottie", "CoreAnimation"],
        tools: ["GitHub", "Figma"],
        contributions: [
  "Conducted research and observation to identify user challenges in learning Lampung script and formulated the app concept to gamify the experience.",
  "Created the UI/UX design and all necessary visual assets using Figma, tailored to native iOS interfaces.",
  "Implemented the full user interface using SwiftUI, focusing on fluid interactions and accessibility.",
  "Built features such as a drawing canvas to practice writing Lampung script and quizzes to evaluate progress.",
  "Applied MVVM architecture to ensure modularity and easier testability of business logic.",
  "Utilized AppStorage to persist user preferences, quiz scores, and other lightweight data.",
  "Added animations using Lottie and CoreAnimation to increase engagement during quizzes and learning progress."
],
        links: {
            appStore: null,
            github: "https://github.com/rivaldofez/Wawai"
        },
        screenshots: [
            "img/portfolio/wawai/image_1.png",
            "img/portfolio/wawai/image_2.png",
            "img/portfolio/wawai/image_3.png",
            "img/portfolio/wawai/image_4.png",
            "img/portfolio/wawai/image_5.png",
            "img/portfolio/wawai/image_6.png",
            "img/portfolio/wawai/image_7.png",
            "img/portfolio/wawai/image_8.png",
            "img/portfolio/wawai/image_9.png",
            "img/portfolio/wawai/image_10.png",
            "img/portfolio/wawai/image_11.png",
            "img/portfolio/wawai/image_12.png",
        ]
    },
    {
        id: "cofit",
        title: "CoFit",
        image: "img/portfolio/cofit/logo.png",
        shortDescription: "CoFit is fitness app inspired by COVID-19 pandemic",
        overview: "CoFitness is home workout apps that created to people in their isolation mode at home. User can do lot of exercise and track their record and progress easily",
        role: "Mobile Developer",
        techStack: ["Swift", "Kotlin", "Swift", "Lottie"],
        tools: ["GitHub", "Figma"],
        contributions: [],
        links: {
            appStore: null,
            github: "https://github.com/rivaldofez/CoFit19"
        },
        screenshots: [
            "img/portfolio/cofit/cofit_1.png",
            "img/portfolio/cofit/cofit_2.png",
            "img/portfolio/cofit/cofit_3.png",
            "img/portfolio/cofit/cofit_4.png",
            "img/portfolio/cofit/cofit_5.png",
            "img/portfolio/cofit/cofit_6.png",
            "img/portfolio/cofit/cofit_7.png",
            "img/portfolio/cofit/cofit_8.png",
            "img/portfolio/cofit/cofit_9.png",
            "img/portfolio/cofit/cofit_10.png",
            "img/portfolio/cofit/cofit_11.png",
            "img/portfolio/cofit/cofit_12.png",
            "img/portfolio/cofit/cofit_13.png",
            "img/portfolio/cofit/cofit_14.png",
        ]
    },
];

function renderPortfolio() {
    const container = document.getElementById('portfolio-container');

    portfolioItems.forEach(item => {
        const col = document.createElement('div');
        col.className = 'col-lg-4 mb-5';

        col.innerHTML = `
      <div class="h-100 d-flex flex-column border rounded overflow-hidden">
        <div class="position-relative mb-3" style="aspect-ratio: 4/3; background: #f8f9fa; display: flex; align-items: center; justify-content: center;">
          <img 
            src="${item.image}" 
            alt="${item.title}" 
            style="max-width: 100%; max-height: 100%; object-fit: contain;" 
            class="d-block mx-auto"
          >
        </div>
        <div class="px-3 pb-3 d-flex flex-column flex-grow-1">
          <h5 class="font-weight-medium mb-2">${item.title}</h5>
          <p class="flex-grow-1">${item.shortDescription}</p>
          <a class="btn btn-sm btn-outline-primary mt-auto py-2" href="detail.html?id=${item.id}">See Details</a>
        </div>
      </div>
    `;

        container.appendChild(col);
    });
}


// Run when DOM is ready
document.addEventListener("DOMContentLoaded", renderPortfolio);
