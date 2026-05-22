import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | TechNova Store",
  description: "Browse premium electronics and accessories.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}