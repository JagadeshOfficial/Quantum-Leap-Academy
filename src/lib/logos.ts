
export type Logo = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const logos: Logo[] = [
  {
    "id": "logo-algoworks",
    "description": "Algoworks Logo",
    "imageUrl": "/Algoworks.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-cisco",
    "description": "Cisco Logo",
    "imageUrl": "/Cisco.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-dxc",
    "description": "DXC Logo",
    "imageUrl": "/DXC.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-deloitte",
    "description": "Deloitte Logo",
    "imageUrl": "/Deloitte.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-facebook",
    "description": "Facebook Logo",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-hexaware",
    "description": "Hexaware Logo",
    "imageUrl": "/Hexaware.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-honeywell",
    "description": "Honeywell Logo",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Honeywell_logo.svg/2560px-Honeywell_logo.svg.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-nexgen",
    "description": "Nexgen Logo",
    "imageUrl": "/Nexgen.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-qualcomm",
    "description": "Qualcomm Logo",
    "imageUrl": "/Qualcomm.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-reddy",
    "description": "Dr. Reddy's Logo",
    "imageUrl": "/Reddy.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-salesforce",
    "description": "Salesforce Logo",
    "imageUrl": "/Salesforce.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-wipro",
    "description": "Wipro Logo",
    "imageUrl": "/Wipro.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-hp",
    "description": "HP Logo",
    "imageUrl": "/Hp.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-ibm",
    "description": "IBM Logo",
    "imageUrl": "/Ibm.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-mindtree",
    "description": "Mindtree Logo",
    "imageUrl": "/mindtree.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-mphasis",
    "description": "Mphasis Logo",
    "imageUrl": "/mphasis.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-oracle",
    "description": "Oracle Logo",
    "imageUrl": "/oracle.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-google",
    "description": "Google Logo",
    "imageUrl": "/Google_v2.svg",
    "imageHint": "company logo"
  },
  {
    "id": "logo-microsoft",
    "description": "Microsoft Logo",
    "imageUrl": "/Microsoft_v2.svg",
    "imageHint": "company logo"
  },
  {
    "id": "logo-amazon",
    "description": "Amazon Logo",
    "imageUrl": "/Amazon_v2.svg",
    "imageHint": "company logo"
  },
  {
    "id": "logo-flipkart",
    "description": "Flipkart Logo",
    "imageUrl": "/Flipkart_v2.svg",
    "imageHint": "company logo"
  }
];

export const getLogoById = (id: string): Logo | undefined => {
  return logos.find(logo => logo.id === id);
}