import feedLogo from '@/assets/images/about/feed-logo.jpg';
import feedFarm from '@/assets/images/about/sections/feed-farm.jpg';
import feedCard from '@/assets/images/about/sections/feedcard.webp';
import membersGroup from '@/assets/images/about/sections/members-become.webp';
import presenceMap from '@/assets/images/about/sections/presence-map-india.webp';
import worldAgriculture from '@/assets/images/about/sections/world-agriculture.png';
import worldExports from '@/assets/images/about/sections/world-exports.jpg';
import worldProcessing from '@/assets/images/about/sections/world-processing.jpg';
import worldMarkets from '@/assets/images/about/sections/world-markets.png';

/*
 * Content for the About-page sections below the hero (01 to 08), taken from
 * "ABoutUsHomePageContent.docx". Edit text here; the components only lay it out.
 *
 * Every section listed here is shown, in this order, numbered 01, 02, 03...
 *
 * Each section:
 *  - id / navLabel   anchor id and the label in the "On This Page" list
 *  - layout          'media' = picture on the left, text on the right
 *                    'split' = text on the left, highlights on the right
 *  - media           the picture for 'media' sections
 *  - tagline, quote, intro, chips   shown before "Read more"
 *  - highlights      tiles / stats / pins / covers / tiers / comingSoon / cta
 *  - details         shown when "Read more" is clicked (leave it out to hide
 *                    the button). Blocks: paragraphs, quote, cards, table, features.
 *
 * Icons are names from src/components/common/Icon/Icon.jsx.
 * Section 01 shows the FEED logo (same file as the hero logo). The Our Impact
 * photo is feedfarm (feed-farm.jpg). The members photo and magazine covers are
 * cut from the feedabo design; the map is the image from the content document.
 */

export const onThisPageTitle = 'On This Page';

export const aboutSections = [
  {
    id: 'about-feed',
    navLabel: 'About FEED MSCS LTD.',
    title: 'About FEED MSCS LTD.',
    layout: 'media',
    media: {
      type: 'logo',
      src: feedLogo,
      alt: 'FEED logo: a globe surrounded by farming, export, cooperative, training, processing and finance tiles, with the motto “कृषि एव जयते”',
      width: 640,
      height: 786,
    },
    quote:
      'There may be boundaries to the land a farmer cultivates, but there should be no boundaries to the markets where that farmer can sell what they grow.',
    intro: [
      'Guided by this vision, FARM TO FOREIGN EXPORTS ENTREPRENEURSHIP DEVELOPMENT MULTI STATE COOPERATIVE SOCIETY LTD. (FEED MSCS LTD.) is a Multi-State Cooperative Society registered under the Multi-State Cooperative Societies Act, 2002, bearing Registration No. MSCS/CR/1295/2020.',
    ],
    details: [
      {
        type: 'paragraphs',
        items: [
          "FEED MSCS LTD. is committed to strengthening India's agricultural and export ecosystem through a cooperative-led approach that connects farmers, Farmer Producer Organisations (FPOs), cooperatives, entrepreneurs, Micro, Small and Medium Enterprises (MSMEs), and other stakeholders with domestic and international market opportunities.",
          'With a focus on export facilitation, entrepreneurship development, market linkages and institutional collaboration, FEED has initiated an integrated ecosystem designed to enable Indian producers to access wider markets, enhance their participation in global trade and create sustainable economic opportunities.',
          'Our vision is to create an enabling ecosystem where every producer has the opportunity, knowledge and support to move beyond geographical boundaries and participate in global markets — truly taking India from Farm to Foreign Markets.',
        ],
      },
      {
        type: 'quote',
        icon: 'target',
        title: 'Main Objective',
        paragraphs: [
          'To work for the collective welfare of its members by building a cooperative, technology-driven export ecosystem that connects district-level production to international markets.',
          'To support members through export awareness, farm-level consultation, production planning aligned with international quality standards, and end-to-end export facilitation.',
          'By coordinating with government, financial, and export institutions through technology, FEED helps members access global markets on fair terms while retaining ownership of the products they produce or trade.',
        ],
      },
      {
        type: 'cards',
        items: [
          {
            icon: 'eye',
            title: 'Vision Statement of FEED',
            paragraphs: [
              'To build a prosperous, empowered and self-reliant cooperative community across India, where members collectively create greater economic value, opportunities and sustainable livelihoods.',
            ],
          },
          {
            icon: 'flag',
            title: 'Mission Statement of FEED',
            paragraphs: [
              'To promote the economic and social welfare of its members across multiple states through cooperation, collective enterprise, knowledge, innovation, market access and shared opportunities, enabling members to achieve sustainable growth and greater value from their resources and capabilities.',
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'key-activities',
    navLabel: 'Our Key Activities',
    title: 'Our Key Activities',
    layout: 'split',
    intro: [
      'FEED MSCS LTD. undertakes various initiatives to promote entrepreneurship, strengthen the agricultural ecosystem, facilitate exports and create sustainable opportunities for farmers, institutions and businesses.',
    ],
    highlights: {
      type: 'tiles',
      items: [
        { icon: 'rocket', label: 'FEED STARTUP', caption: 'Services', tone: 'green' },
        { icon: 'megaphone', label: 'EPM', caption: 'Export Promotional Meetings', tone: 'orange' },
        { icon: 'sprout', label: 'KYJ', caption: 'Krushi Yeva Jayate', tone: 'blue' },
        { icon: 'shieldCheck', label: 'SAFE Mission', caption: 'Sustainable Agriculture for Farm Exports', tone: 'rose' },
      ],
    },
    details: [
      {
        type: 'cards',
        items: [
          {
            icon: 'rocket',
            title: 'FEED STARTUP',
            paragraphs: [
              'FEED STARTUP is the digital platform that carries EPM and KYJ to every district, mandal and village. It is a single platform with 16 services in Telugu, English and Hindi, covering exports, KYJ, markets, schemes, finance, education and more, and is proposed to link with e-NAM and State apps. Inauguration is planned for November 2026.',
            ],
          },
          {
            icon: 'megaphone',
            title: 'EPM (Export Promotional Meetings)',
            paragraphs: [
              'EPM is a district-level export activation platform held at each district headquarters. It brings farmers, traders, MSMEs, exporters, banks, ports, customs and government departments onto one stage, bridging the gap between farm production and global markets. It is the entry point to KYJ, FEED STARTUP and DSMS for the S.A.F.E Mission.',
            ],
          },
          {
            icon: 'sprout',
            title: 'KYJ (Krushi Yeva Jayate)',
            paragraphs: [
              'KYJ is the farmer-to-exporter pathway. The farmer keeps ownership of the produce, and FEED, as Third-Party Exporter, handles buyers, compliance, logistics and realisation. The major share of the FOB value goes to the farmer, backed by FIRC-verified income. The target is 100 consignments and 100 success stories.',
            ],
          },
          {
            icon: 'shieldCheck',
            title: 'S.A.F.E Mission — Sustainable Agriculture for Farm Exports',
            paragraphs: [
              'SAFE Mission moves farmers from “selling what they grow” to “producing what the market needs”. It uses multi-layer farming to EU standards, common facilities and value addition, export linkage, bulk trade and shared assets. Each district gets a DSMS and a model export zone of about 20 acres. The target is 4–5 lakh farmers.',
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'our-impact',
    navLabel: 'Our Impact',
    title: 'Our Impact',
    layout: 'media',
    media: {
      type: 'picture',
      src: feedFarm,
      alt: 'Smiling farmer in a white turban holding a bunch of freshly harvested paddy in a green rice field',
      width: 1200,
      height: 800,
    },
    intro: ['Stakeholder impact of each FEED initiative.'],
    highlights: {
      type: 'stats',
      items: [
        { icon: 'megaphone', value: '1.4 Lakh+', label: 'Reach through EPM', tone: 'orange' },
        { icon: 'ship', value: '100', label: 'Consignments under KYJ', tone: 'green' },
        { icon: 'smartphone', value: '25–50 Lakh', label: 'Stakeholders on FEED STARTUP', tone: 'green' },
        { icon: 'sprout', value: '4–5 Lakh', label: 'Farmers under SAFE Mission', tone: 'green' },
      ],
    },
    details: [
      {
        type: 'table',
        columns: ['FEED Initiative', 'Description', 'Stakeholder Impact'],
        rows: [
          {
            initiative: 'EPM (Export Promotional Meetings)',
            description: 'District-level export awareness and identification of export opportunities.',
            impact: ['28 Districts', '5,000+ Stakeholders per District', '1.4 Lakh+ Reach'],
          },
          {
            initiative: 'Project KYJ (Krushi Yeva Jayate)',
            description: 'Connects producers with global buyers and facilitates export opportunities.',
            impact: ['100 Consignments', '100 Success Stories', 'Demonstration Export Models'],
          },
          {
            initiative: 'FEED STARTUP',
            description:
              'Export facilitation platform connecting FPOs, SHGs, PACS, Farmers and MSMEs to global markets; user-friendly and available in regional languages.',
            impact: ['25–50 Lakh Stakeholders'],
          },
          {
            initiative: 'SAFE Mission',
            description: 'Multi-layered agriculture, value addition, AI and IoT in agriculture, exports and scheme convergence.',
            impact: ['4–5 Lakh Farmers'],
          },
        ],
      },
    ],
  },

  {
    id: 'collaborators',
    navLabel: 'Collaborators',
    title: 'Collaborators',
    layout: 'split',
    highlights: {
      type: 'comingSoon',
      icon: 'handshake',
      title: 'Coming Soon',
      text: 'Our collaborators will be listed here.',
    },
  },

  {
    id: 'our-presence',
    navLabel: 'Our Presence',
    title: 'Our Presence',
    layout: 'media',
    media: {
      type: 'map',
      src: presenceMap,
      alt: 'Map of India highlighting FEED’s current operating states, Telangana and Andhra Pradesh',
      width: 535,
      height: 576,
    },
    tagline: 'Our Current Operating States',
    highlights: {
      type: 'pins',
      items: ['Andhra Pradesh', 'Telangana'],
    },
  },

  {
    id: 'feed-world',
    navLabel: 'FEED WORLD',
    title: 'FEED WORLD',
    layout: 'split',
    tagline: 'Monthly Magazine & Digital Publication',
    intro: [
      'FEED WORLD is a monthly multilingual publication available through both print and digital platforms, bringing together the latest developments from Indian and international markets.',
    ],
    chips: [
      { icon: 'calendar', label: 'Every month' },
      { icon: 'languages', label: 'English · Telugu · Hindi' },
      { icon: 'newspaper', label: 'Print & Digital' },
    ],
    highlights: {
      type: 'covers',
      masthead: 'FEED WORLD',
      items: [
        { title: 'Agricultural Innovations', image: worldAgriculture },
        { title: 'Export Opportunities', image: worldExports },
        { title: 'Industry Developments', image: worldProcessing },
        { title: 'Market News & Trends', image: worldMarkets },
      ],
    },
    details: [
      {
        type: 'paragraphs',
        items: [
          'It covers market news, emerging trends, agricultural innovations, new technologies, government initiatives, business and export opportunities, industry developments and inspiring farmer and entrepreneur success stories.',
          'Published every month in English, Telugu and Hindi, FEED WORLD aims to keep farmers, FPOs, cooperatives, entrepreneurs, MSMEs, exporters and other stakeholders informed and connected with evolving opportunities across the agricultural, business and export ecosystem.',
        ],
      },
      {
        type: 'cards',
        items: [
          {
            icon: 'badgeCheck',
            title: 'Verified Success Stories & Income Reporting',
            paragraphs: [
              "FEED follows a documentation-based verification approach for publishing export income and financial achievement claims. No individual's export income details are published without supporting bank documentation, including the applicable Foreign Inward Remittance Certificate (FIRC), wherever relevant.",
            ],
          },
          {
            icon: 'newspaper',
            title: 'Publication Registration',
            paragraphs: [
              'Registered with the Press Registrar General of India (PRGI) under Registration No. APMUL/25/A0382.',
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'membership-card',
    navLabel: 'FEED Membership & Reward Card',
    title: 'FEED Membership & Reward Card',
    layout: 'media',
    media: {
      type: 'cardImage',
      src: feedCard,
      alt: 'FEED MSCS LTD. Membership & Reward Card',
      width: 960,
      height: 578,
    },
    intro: [
      'The FEED Membership & Reward Card is a member-benefit initiative designed to recognise participation, encourage export entrepreneurship and reward members for their contribution to the FEED ecosystem.',
    ],
    highlights: {
      type: 'tiers',
      items: [
        { icon: 'idCard', label: 'Basic', caption: 'On registering at an EPM' },
        { icon: 'medal', label: 'Gold', caption: 'Earned through exports' },
        { icon: 'gem', label: 'Diamond', caption: 'Earned through exports' },
        { icon: 'crown', label: 'Platinum', caption: 'Earned through exports' },
      ],
    },
    details: [
      {
        type: 'paragraphs',
        items: [
          'The membership identity card is offered across four levels: Basic, Gold, Diamond and Platinum. Individuals registering through Export Promotional Meetings (EPMs) are eligible for the Basic Membership Card. Higher membership levels are earned through actual participation and income generation from export activities. These upgraded membership levels are based on achievement and contribution, not monetary purchases.',
        ],
      },
      {
        type: 'features',
        icon: 'coins',
        title: 'Krishi Coins – Earn Rewards, Unlock Benefits',
        intro:
          'Members can earn Krishi Coins through eligible activities under the Krushi Yeva Jayate (KYJ) initiative. These coins can be redeemed to avail discounts and benefits on eligible purchases, including seeds, fertilisers and other products and services across the FEED ecosystem and its partner network.',
        subtitle: 'Krishi Coins – Key Features:',
        items: [
          { icon: 'coins', label: 'Maximum Accumulation', text: 'Up to 12,500 Krishi Coins per KYJ cycle.' },
          { icon: 'rupee', label: 'Coin Value', text: '1 Krishi Coin = ₹0.10 (10 paise).' },
          { icon: 'tag', label: 'Redemption', text: 'Redeemable against eligible purchases to avail discounts and benefits.' },
          { icon: 'clock', label: 'Validity', text: 'Krishi Coins expire 12 months from the date of credit.' },
          { icon: 'ban', label: 'Non-Cashable', text: 'Krishi Coins are non-transferable and cannot be converted into cash.' },
        ],
      },
      {
        type: 'paragraphs',
        items: [
          'The initiative aims to create a value-driven membership ecosystem that rewards active participation, recognises export achievements and provides tangible benefits to members while strengthening their engagement with FEED MSCS LTD.',
        ],
      },
    ],
  },

  {
    id: 'become-member',
    navLabel: 'Become a Member of FEED',
    title: 'Become a Member of FEED',
    layout: 'media',
    media: {
      type: 'photo',
      src: membersGroup,
      alt: 'Line drawing of three smiling FEED members, two men and a woman, above a "Become a FEED Member" badge',
      width: 1536,
      height: 1024,
    },
    intro: [
      'Join FEED MSCS LTD. and become part of a growing cooperative network committed to collaboration, entrepreneurship and collective progress. Membership provides an opportunity to connect with a wider ecosystem of individuals, institutions, farmers, businesses and entrepreneurs, while accessing relevant services, resources, initiatives and opportunities across the agriculture, business and export sectors.',
    ],
    highlights: {
      type: 'cta',
      label: 'Join FEED Today',
      // Replace with the membership sign-up page link when it exists.
      href: '#become-member',
    },
  },
];
