
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
    "imageUrl": "/Facebook.webp",
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
    "imageUrl": "/Honeywell.jpg",
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
    "imageUrl": "/hp.jpg",
    "imageHint": "company logo"
  },
  {
    "id": "logo-ibm",
    "description": "IBM Logo",
    "imageUrl": "/ibm.webp",
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
  }
];

export const getLogoById = (id: string): Logo | undefined => {
  return logos.find(logo => logo.id === id);
}