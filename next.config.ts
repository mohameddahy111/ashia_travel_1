import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
   remotePatterns: [
     {
       protocol: "https",
       hostname: "i0.wp.com",
     },
     {
       protocol: "https",
       hostname: "pic.uhomes.com",
     },
     {
       protocol: "https",
       hostname: "vcdn.merlinx.eu",
     },
     {
       protocol: "https",
       hostname: "i.pinimg.com",
     },
   ],
  },
};

export default withNextIntl(nextConfig);
