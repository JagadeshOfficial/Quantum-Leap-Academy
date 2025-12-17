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
      "imageUrl": "https://firebasestudio-hosting.web.app/images/jnj.png",
      "imageHint": "company logo"
    },
    {
      "id": "logo-ubs",
      "description": "UBS Logo",
      "imageUrl": "https://firebasestudio-hosting.web.app/images/ubs.png",
      "imageHint": "company logo"
    },
    {
      "id": "logo-bank-of-america",
      "description": "Bank of America Logo",
      "imageUrl": "https://firebasestudio-hosting.web.app/images/boa.png",
      "imageHint": "company logo"
    },
    {
      "id": "logo-spinnaker",
      "description": "Spinnaker Analytics Logo",
      "imageUrl": "https://firebasestudio-hosting.web.app/images/spinnaker.png",
      "imageHint": "company logo"
    },
    {
      "id": "logo-kpmg",
      "description": "KPMG Logo",
      "imageUrl": "https://firebasestudio-hosting.web.app/images/kpmg.png",
      "imageHint": "company logo"
    },
    {
      "id": "logo-oracle",
      "description": "Oracle Logo",
      "imageUrl": "https://firebasestudio-hosting.web.app/images/oracle.png",
      "imageHint": "company logo"
    },
    {
      "id": "logo-microsoft",
      "description": "Microsoft Logo",
      "imageUrl": "https://firebasestudio-hosting.web.app/images/microsoft.png",
      "imageHint": "company logo"
    },
    {
      "id": "logo-american-express",
      "description": "American Express Logo",
      "imageUrl": "https://firebasestudio-hosting.web.app/images/amex.png",
      "imageHint": "company logo"
    },
    {
      "id": "logo-google",
      "description": "Google Logo",
      "imageUrl": "https://firebasestudio-hosting.web.app/images/google.png",
      "imageHint": "company logo"
    },
    {
      "id": "logo-amazon",
      "description": "Amazon Logo",
      "imageUrl": "https://firebasestudio-hosting.web.app/images/amazon.png",
      "imageHint": "company logo"
    },
    {
      "id": "logo-deloitte",
      "description": "Deloitte Logo",
      "imageUrl": "https://firebasestudio-hosting.web.app/images/deloitte.png",
      "imageHint": "company logo"
    },
    {
      "id": "logo-accenture",
      "description": "Accenture Logo",
      "imageUrl": "https://firebasestudio-hosting.web.app/images/accenture.png",
      "imageHint": "company logo"
    },
    {
      "id": "logo-tcs",
      "description": "TCS Logo",
      "imageUrl": "https://firebasestudio-hosting.web.app/images/tcs.png",
      "imageHint": "company logo"
    },
    {
      "id": "logo-pwc",
      "description": "PwC Logo",
      "imageUrl": "https://firebasestudio-hosting.web.app/images/pwc.png",
      "imageHint": "company logo"
    },
    {
      "id": "logo-ibm",
      "description": "IBM Logo",
      "imageUrl": "https://firebasestudio-hosting.web.app/images/ibm.png",
      "imageHint": "company logo"
    },
    {
      "id": "logo-wipro",
      "description": "Wipro Logo",
      "imageUrl": "https://firebasestudio-hosting.web.app/images/wipro.png",
      "imageHint": "company logo"
    },
    {
      "id": "logo-flipkart",
      "description": "Flipkart Logo",
      "imageUrl": "https://firebasestudio-hosting.web.app/images/flipkart.png",
      "imageHint": "company logo"
    },
    {
      "id": "logo-zoho",
      "description": "Zoho Logo",
      "imageUrl": "https://firebasestudio-hosting.web.app/images/zoho.png",
      "imageHint": "company logo"
    }
];

export const getLogoById = (id: string): Logo | undefined => {
    return logos.find(logo => logo.id === id);
}
