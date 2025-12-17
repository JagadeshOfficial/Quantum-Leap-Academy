export type Logo = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const logos: Logo[] = [
    {
      "id": "logo-johnson-and-johnson",
      "description": "Johnson & Johnson Logo",
      "imageUrl": "/images/jnj.png",
      "imageHint": "company logo"
    },
    {
      "id": "logo-ubs",
      "description": "UBS Logo",
      "imageUrl": "/images/ubs.png",
      "imageHint": "company logo"
    },
    {
      "id": "logo-bank-of-america",
      "description": "Bank of America Logo",
      "imageUrl": "/images/boa.png",
      "imageHint": "company logo"
    },
    {
      "id": "logo-spinnaker",
      "description": "Spinnaker Analytics Logo",
      "imageUrl": "/images/spinnaker.png",
      "imageHint": "company logo"
    },
    {
      "id": "logo-kpmg",
      "description": "KPMG Logo",
      "imageUrl": "/images/kpmg.png",
      "imageHint": "company logo"
    },
    {
      "id": "logo-oracle",
      "description": "Oracle Logo",
      "imageUrl": "/images/oracle.png",
      "imageHint": "company logo"
    },
    {
      "id": "logo-microsoft",
      "description": "Microsoft Logo",
      "imageUrl": "/images/microsoft.png",
      "imageHint": "company logo"
    },
    {
      "id": "logo-american-express",
      "description": "American Express Logo",
      "imageUrl": "/images/amex.png",
      "imageHint": "company logo"
    },
    {
      "id": "logo-google",
      "description": "Google Logo",
      "imageUrl": "/images/google.png",
      "imageHint": "company logo"
    },
    {
      "id": "logo-amazon",
      "description": "Amazon Logo",
      "imageUrl": "/images/amazon.png",
      "imageHint": "company logo"
    },
    {
      "id": "logo-deloitte",
      "description": "Deloitte Logo",
      "imageUrl": "/images/deloitte.png",
      "imageHint": "company logo"
    },
    {
      "id": "logo-accenture",
      "description": "Accenture Logo",
      "imageUrl": "/images/accenture.png",
      "imageHint": "company logo"
    },
    {
      "id": "logo-tcs",
      "description": "TCS Logo",
      "imageUrl": "/images/tcs.png",
      "imageHint": "company logo"
    },
    {
      "id": "logo-pwc",
      "description": "PwC Logo",
      "imageUrl": "/images/pwc.png",
      "imageHint": "company logo"
    },
    {
      "id": "logo-ibm",
      "description": "IBM Logo",
      "imageUrl": "/images/ibm.png",
      "imageHint": "company logo"
    },
    {
      "id": "logo-wipro",
      "description": "Wipro Logo",
      "imageUrl": "/images/wipro.png",
      "imageHint": "company logo"
    },
    {
      "id": "logo-flipkart",
      "description": "Flipkart Logo",
      "imageUrl": "/images/flipkart.png",
      "imageHint": "company logo"
    },
    {
      "id": "logo-zoho",
      "description": "Zoho Logo",
      "imageUrl": "/images/zoho.png",
      "imageHint": "company logo"
    }
];

export const getLogoById = (id: string): Logo | undefined => {
    return logos.find(logo => logo.id === id);
}
