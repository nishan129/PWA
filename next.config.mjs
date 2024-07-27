import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */
const withPWA = withPWAInit({
  dest: "public",
});

const nextConfig = {
  images: {
    domains: ['utfs.io'],
  },
};

export default withPWA(nextConfig);
