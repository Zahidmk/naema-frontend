import { notFound } from "next/navigation";
import ProductListing from "../components/ProductListing";

const categoryMap: Record<string, string> = {
  dates: "Dates",
  nuts: "Nuts",
  "dry-fruits": "Dry Fruits",
  "dry-fruits-and-nuts": "Dry Fruits and Nuts",
  "other-products": "Other Products",
};

const CategoryProductPage = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params; // ✅ FIX

  const label =
    categoryMap[category] ||
    category
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

  return <ProductListing category={category} label={label} />;
};

export default CategoryProductPage;