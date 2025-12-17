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
      "imageUrl": "https://logo.clearbit.com/jnj.com",
      "imageHint": "company logo"
    },
    {
      "id": "logo-ubs",
      "description": "UBS Logo",
      "imageUrl": "https://logo.clearbit.com/ubs.com",
      "imageHint": "company logo"
    },
    {
      "id": "logo-bank-of-america",
      "description": "Bank of America Logo",
      "imageUrl": "https://logo.clearbit.com/bankofamerica.com",
      "imageHint": "company logo"
    },
    {
      "id": "logo-spinnaker",
      "description": "Spinnaker Analytics Logo",
      "imageUrl": "https://logo.clearbit.com/spinnakeranalytics.com",
      "imageHint": "company logo"
    },
    {
      "id": "logo-kpmg",
      "description": "KPMG Logo",
      "imageUrl": "https://logo.clearbit.com/kpmg.com",
      "imageHint": "company logo"
    },
    {
      "id": "logo-oracle",
      "description": "Oracle Logo",
      "imageUrl": "https://logo.clearbit.com/oracle.com",
      "imageHint": "company logo"
    },
    {
      "id": "logo-microsoft",
      "description": "Microsoft Logo",
      "imageUrl": "https://logo.clearbit.com/microsoft.com",
      "imageHint": "company logo"
    },
    {
      "id": "logo-american-express",
      "description": "American Express Logo",
      "imageUrl": "https://logo.clearbit.com/americanexpress.com",
      "imageHint": "company logo"
    },
    {
      "id": "logo-google",
      "description": "Google Logo",
      "imageUrl": "https://logo.clearbit.com/google.com",
      "imageHint": "company logo"
    },
    {
      "id": "logo-amazon",
      "description": "Amazon Logo",
      "imageUrl": "https://logo.clearbit.com/amazon.com",
      "imageHint": "company logo"
    },
    {
      "id": "logo-deloitte",
      "description": "Deloitte Logo",
      "imageUrl": "https://logo.clearbit.com/deloitte.com",
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
      "id": "logo-ibm",
      "description": "IBM Logo",
      "imageUrl": "https://logo.clearbit.com/ibm.com",
      "imageHint": "company logo"
    },
    {
      "id": "logo-wipro",
      "description": "Wipro Logo",
      "imageUrl": "https://logo.clearbit.com/wipro.com",
      "imageHint": "company logo"
    },
    {
      "id": "logo-flipkart",
      "description": "Flipkart Logo",
      "imageUrl": "https://logo.clearbit.com/flipkart.com",
      "imageHint": "company logo"
    },
    {
      "id": "logo-zoho",
      "description": "Zoho Logo",
      "imageUrl": "https://logo.clearbit.com/zoho.com",
      "imageHint": "company logo"
    }
];

export const getLogoById = (id: string): Logo | undefined => {
    return logos.find(logo => logo.id === id);
}
