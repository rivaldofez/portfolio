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
            "Create, integrate and implement revamp MVP Feature  for opening account online, activation with debit card",
            "Working on Lifestyle feature as core feature “Byond Lyfe” with dynamic menu and scroll driven animation",
            "Working on the KAI booking and payment feature",
            "Working on tracking and analytics features with appflyer and firebase",
            "Playing role as a code reviewer when merging code into pre-release and production"
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
        tools: ["GitHub", "Figma"],
        contributions: [
            "Create custom view and base component such as web view manager, core data manager, pop up, alert etc",
            "Working on main feature such as SSO, Detail Article, Detail Video, Live Video, Bookmarks",
            "Working on Notification and analytics feature with Firebase Cloud Messaging"
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
            "Create custom view and base component based on design system like button, card, segment, page control etc",
            "Working on main feature such as SSO, Payment, Voucher, Membership etc",
            "Working on Notification and analytics feature"
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
            "Create custom view and base component based on design system like button, collection, segment, page control, popup, dialog, navigation etc",
            "Working on all features like SSO, Payment, Video Call",
            "Working on Notification and Reatime Stream using Socket"
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
