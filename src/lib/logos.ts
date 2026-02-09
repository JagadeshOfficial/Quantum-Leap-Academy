
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
    "imageUrl": "/algoworks.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-cisco",
    "description": "Cisco Logo",
    "imageUrl": "/cisco.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-dxc",
    "description": "DXC Logo",
    "imageUrl": "/dxc.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-deloitte",
    "description": "Deloitte Logo",
    "imageUrl": "/deloitte.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-facebook",
    "description": "Facebook Logo",
    "imageUrl": "/facebook.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-hexaware",
    "description": "Hexaware Logo",
    "imageUrl": "/hexaware.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-nexgen",
    "description": "Nexgen Logo",
    "imageUrl": "/nexgen.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-qualcomm",
    "description": "Qualcomm Logo",
    "imageUrl": "/qualcomm.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-reddy",
    "description": "Dr. Reddy's Logo",
    "imageUrl": "/reddy.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-salesforce",
    "description": "Salesforce Logo",
    "imageUrl": "/salesforce.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-wipro",
    "description": "Wipro Logo",
    "imageUrl": "/wipro.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-hp",
    "description": "HP Logo",
    "imageUrl": "/hp.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-ibm",
    "description": "IBM Logo",
    "imageUrl": "/ibm.png",
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
    "imageUrl": "/google.svg",
    "imageHint": "company logo"
  },
  {
    "id": "logo-microsoft",
    "description": "Microsoft Logo",
    "imageUrl": "/microsoft.svg",
    "imageHint": "company logo"
  },
  {
    "id": "logo-amazon",
    "description": "Amazon Logo",
    "imageUrl": "/amazon.svg",
    "imageHint": "company logo"
  },
  {
    "id": "logo-flipkart",
    "description": "Flipkart Logo",
    "imageUrl": "/flipkart.svg",
    "imageHint": "company logo"
  }
];

export const getLogoById = (id: string): Logo | undefined => {
  return logos.find(logo => logo.id === id);
}