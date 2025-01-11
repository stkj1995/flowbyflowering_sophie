/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  
  
    theme: {
      extend: {
        /* Farvepalette */
        colors: {
          transparent: "transparent",
          current: "currentColor",
          beige: {
            100: "#FEFBFB", 
            200: "#FCF8F7",
            300: "#FBF4F4",
            400: "#FAF1F0",
            500: "#F9EFEE", //beige baggrundsfarve (skriv: bg-beige-500)
            600: "#DFA9A5", 
            700: "#C6665D",
            800: "#8F3A33",
            900: "#481D19",
          },
          rosa: {
            50: "#FFF", 
            200: "#FFFBFA",
            500: "#FFF9F8", // rosa sektionsfarve (skriv: bg-rosa-500)
            600: "#FFA494",
            700: "#FF4D2E",
            800: "#C71E00",
            900: "#660F00",
          },
          greyblue: {
            50: "#F0F2F4", 
            100: "#E1E5EA", 
            200: "#C4CAD4",
            300: "#A6B0BF",
            400: "#8B98AC",
            500: "#6D7D96", // gråblå til mikrokonvertering (sekundære knapper), (skriv: bg-greyblue-500)
            600: "#58657A", 
            700: "#404A59",
            800: "#2B313B",
            900: "#15191E",
          },
          blue: {
            50: "#D6D9FF", 
            100: "#A8AEFF", 
            200: "#525DFF",
            300: "#0011FA",
            400: "#000BA3",
            500: "#00054E", // blå til overskrifter (skriv: text-blue-500)
            600: "#00043D", 
            700: "#00032E",
            800: "#00021F",
            900: "#00010F",
          },
          darkgreyblue: {
            500: "#505379", // mørk gråblå til brødtekst (skriv: text-darkgreyblue-500)
          },
          denimblue: {
            500: "#2B3D5A", // denimblå til makrokonvertering (primære knapper), (skriv: bg-denimblue-500)
          }
        },     
  
        /* Spacing */
        spacing: {
          "spacing-none": "0",
          sm: "30px", // 30x (MOBILE) i spacing IMELLEM OVERSKRIFT, UNDEROVERSKRIFT OG BRØDTEKST
          m: "40px", // 40x (DESKTOP) i spacing IMELLEM OVERSKRIFT, UNDEROVERSKRIFT OG BRØDTEKST
          lg: "80px", // 80x i spacing I ÅBEN BURGERMENU
          xl: "120px", // Evt. 120x spacing imellem sektioner
        },
  
        /* Fonte */
        fontFamily: {
          WindstoneSerif: ["WindstoneSerif", "serif"], //H1, H1 uppercase, H2, H3
          LivvicRegular: ["Regular", "sans-serif"], //Paragraph generelt
          LivvicMedium: ["Medium", "sans-serif"], //Paragraph medium (steps i card)
          LivvicBold: ["Bold", "sans-serif"], //Paragraph bold (highlights i tekst)
          LivvicItalic: ["Italic", "sans-serif"], //Paragraph italic (citat i anmeldelser)
        },
  
        /* Typografisk hierarki */
        fontSize: {
          "12": "12px", // Footer Link
          "16": "16px", // P Footer
          "18": "18px", // Paragraph
          "30": "30px", // H3 Mobile
          "40": "40px", // H2 Mobile + H3 Desktop
          "50": "50px", // H1 Mobile + H2 Desktop
          "200": "200px", // H1 Desktop
        },
  
        /* Fontvægt */
        fontWeight: {
          regular: "400", // generel paragraph
          medium: "500", // steps i cards
          bold: "700", // highlights i tekst
        },

        /* FontStyle */
        fontStyle: {
          italic: "italic", //citater
        },

        /* Text-transform */
        textTransform: {
          uppercase: "uppercase", //H1 hero
        },
  
        /* Border størrelser */
        borderWidth: {
          0: "0px",
          1: "1px", //nyhedsbrev label-stroke
          2: "2px", // button-stroke
        },
  
        /* Border radius størrelser */
        borderRadius: {
          none: "0px",
          "20": "20px", //sm
          "30": "30px", //m
          "40": "40px", //ml
          "50": "50px", //xl
        },
      },
    },
    plugins: [
      require("@tailwindcss/typography"),
      require("@tailwindcss/forms"),
      require("@tailwindcss/aspect-ratio"),
      require("@tailwindcss/container-queries"),
    ],
  };
  