import { notFound } from "next/navigation";
import {
  getMarkdownBySlug,
  getAllMarkdownFiles,
  getPrevNextNavigation,
} from "@/lib/markdown";
import MarkdownContent from "@/components/MarkdownContent";
import NavigationButtons from "@/components/NavigationButtons";
import LearnLayout from "@/components/LearnLayout";
import Layout from "@/components/Layout";

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

// Generate static paths for all markdown files
export async function generateStaticParams() {
  const files = getAllMarkdownFiles();

  return files
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.(md|mdx)$/, "").split("/");
      return { slug };
    });
}

export default async function MarkdownPage({ params }: PageProps) {
  const { slug } = await params;

  const markdownData = getMarkdownBySlug(slug);

  if (!markdownData) {
    notFound();
  }

  const currentPath = `/learn/${slug.join("/")}`;
  const navigation = getPrevNextNavigation(currentPath);

  return (
    <Layout>
      <LearnLayout currentPath={currentPath} title={markdownData.title}>
        <article className="max-w-none">
          {markdownData.frontmatter.description && (
            <div className="mb-6">
              <p className="text-xl text-gray-600 dark:text-gray-400 italic">
                {markdownData.frontmatter.description}
              </p>
            </div>
          )}

          <MarkdownContent content={markdownData.content} />

          {/* Navigation to previous/next articles */}
          <NavigationButtons navigation={navigation} />
        </article>
      </LearnLayout>
    </Layout>
  );
}

// Generate metadata for each page
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const markdownData = getMarkdownBySlug(slug);

  if (!markdownData) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: `${markdownData.title} | HIMABIOS Learning`,
    description:
      markdownData.frontmatter.description ||
      `Learn about ${markdownData.title}`,
  };
}
