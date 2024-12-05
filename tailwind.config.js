/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    fontFamily: {
      primary: ["Arimo", "Jost", "Open Sans"],
      secondary: ["Open Sans"],
      gothic: ["Zen Kaku Gothic Antique", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        parallex:
          "url('https://hp-ca-web-prod.s3.ca-central-1.amazonaws.com/public/images/img-14.webp')",
        ourclient:
          "url('https://hp-ca-web-prod.s3.ca-central-1.amazonaws.com/public/images/base5.webp')",
        social:
          "url('https://hp-ca-web-prod.s3.ca-central-1.amazonaws.com/public/images/img-13.webp')",
        employer:
          "url('https://hp-ca-web-prod.s3.ca-central-1.amazonaws.com/public/images/employer.webp')",
        enextsteps:
          "url('https://hp-ca-web-prod.s3.ca-central-1.amazonaws.com/public/images/img-17.webp')",
        agency:
          "url('https://hp-ca-web-prod.s3.ca-central-1.amazonaws.com/public/images/agencies.webp')",
        "about-us": "url('/about.webp')",
        refer:
          "url('https://hp-ca-web-prod.s3.ca-central-1.amazonaws.com/public/images/refer-page.jpeg')",
        thankyou: "url('/thankyou.webp')",
        rbanner:
          "url('https://hp-ca-web-prod.s3.ca-central-1.amazonaws.com/public/images/techhr-header.webp')",
        cbanner: "url('/contactus.gif')",
        testimonial:
          "url('https://hp-ca-web-prod.s3.ca-central-1.amazonaws.com/public/images/testimonial-banner.jpg')",
        landingbanner:
          "url('https://hp-ca-web-prod.s3.ca-central-1.amazonaws.com/public/imageshiring-video-bg.webp')",
        requestademo:
          "url('https://hp-ca-web-prod.s3.ca-central-1.amazonaws.com/public/laptop.gif')",
        globe: "url('/globe.png')",
        career : "url('/career.jpg')"
      },
    },
  },
  plugins: [],
};
