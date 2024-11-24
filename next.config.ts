import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
   remotePatterns: [
     {
       hostname: "i0.wp.com",
     },
     {
       hostname: "pic.uhomes.com",
     },
     {
       hostname: "vcdn.merlinx.eu",
     },
     {
       hostname: "i.pinimg.com",
     },
   ],
  },
};

export default withNextIntl(nextConfig);
