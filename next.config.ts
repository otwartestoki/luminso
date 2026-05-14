import createMDX from "@next/mdx";

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    unoptimized: true,
  },
};
const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
