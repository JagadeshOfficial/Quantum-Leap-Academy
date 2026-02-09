
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
    "imageUrl": "/logos/algoworks.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-cisco",
    "description": "Cisco Logo",
    "imageUrl": "/logos/cisco.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-dxc",
    "description": "DXC Logo",
    "imageUrl": "/logos/dxc.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-deloitte",
    "description": "Deloitte Logo",
    "imageUrl": "/logos/deloitte.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-facebook",
    "description": "Facebook Logo",
    "imageUrl": "/logos/facebook.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-hexaware",
    "description": "Hexaware Logo",
    "imageUrl": "/logos/hexaware.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-nexgen",
    "description": "Nexgen Logo",
    "imageUrl": "/logos/nexgen.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-qualcomm",
    "description": "Qualcomm Logo",
    "imageUrl": "/logos/qualcomm.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-reddy",
    "description": "Dr. Reddy's Logo",
    "imageUrl": "/logos/reddy.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-salesforce",
    "description": "Salesforce Logo",
    "imageUrl": "/logos/salesforce.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-wipro",
    "description": "Wipro Logo",
    "imageUrl": "/logos/wipro.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-hp",
    "description": "HP Logo",
    "imageUrl": "/logos/hp.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-ibm",
    "description": "IBM Logo",
    "imageUrl": "/logos/ibm.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-mindtree",
    "description": "Mindtree Logo",
    "imageUrl": "/logos/mindtree.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-mphasis",
    "description": "Mphasis Logo",
    "imageUrl": "/logos/mphasis.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-oracle",
    "description": "Oracle Logo",
    "imageUrl": "/logos/oracle.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-google",
    "description": "Google Logo",
    "imageUrl": "/logos/google.svg",
    "imageHint": "company logo"
  },
  {
    "id": "logo-microsoft",
    "description": "Microsoft Logo",
    "imageUrl": "/logos/microsoft.svg",
    "imageHint": "company logo"
  },
  {
    "id": "logo-amazon",
    "description": "Amazon Logo",
    "imageUrl": "/logos/amazon.svg",
    "imageHint": "company logo"
  },
  {
    "id": "logo-flipkart",
    "description": "Flipkart Logo",
    "imageUrl": "/logos/flipkart.svg",
    "imageHint": "company logo"
  },
  {
    "id": "logo-honeywell",
    "description": "Honeywell Logo",
    "imageUrl": "/logos/honeywell.png",
    "imageHint": "company logo"
  },
  {
    "id": "logo-accenture",
    "description": "Accenture Logo",
    "imageUrl": "https://logo.clearbit.com/accenture.com",
    "imageHint": "company logo"
  },
  {
    "id": "logo-tcs",
    "description": "TCS Logo",
    "imageUrl": "https://logo.clearbit.com/tcs.com",
    "imageHint": "company logo"
  },
  {
    "id": "logo-pwc",
    "description": "PwC Logo",
    "imageUrl": "https://logo.clearbit.com/pwc.com",
    "imageHint": "company logo"
  },
  {
    "id": "logo-zoho",
    "description": "Zoho Logo",
    "imageUrl": "https://logo.clearbit.com/zoho.com",
    "imageHint": "company logo"
  },
  {
    "id": "logo-infosys",
    "description": "Infosys Logo",
    "imageUrl": "https://logo.clearbit.com/infosys.com",
    "imageHint": "company logo"
  },
  {
    "id": "logo-capgemini",
    "description": "Capgemini Logo",
    "imageUrl": "https://logo.clearbit.com/capgemini.com",
    "imageHint": "company logo"
  },
  {
    "id": "logo-hcl",
    "description": "HCL Logo",
    "imageUrl": "https://logo.clearbit.com/hcl.com",
    "imageHint": "company logo"
  }
];

export const getLogoById = (id: string): Logo | undefined => {
  return logos.find(logo => logo.id === id);
}