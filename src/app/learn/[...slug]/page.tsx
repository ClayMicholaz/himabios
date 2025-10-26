import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  getMarkdownBySlug,
  getAllMarkdownFiles,
  getPrevNextNavigation,
  getNavigationStructure,
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

  const params = files
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.(md|mdx)$/, "").split("/");
      return { slug };
    });

  // Add directory-level routes for folders with index files
  const directoryParams: { slug: string[] }[] = [];

  // Check for all directories with index files
  const directoriesWithIndex = [
    "python",
    "flutter",
    "algorithm",
    "intro-to-programming",
    "algorithm/sorting",
    "intro-to-programming/best-practices",
  ];

  directoriesWithIndex.forEach((dir) => {
    if (
      files.some(
        (file) => file === `${dir}/index.md` || file === `${dir}/index.mdx`
      )
    ) {
      directoryParams.push({ slug: dir.split("/") });
    }
  });

  return [...params, ...directoryParams];
}

export default async function MarkdownPage({ params }: PageProps) {
  const { slug } = await params;

  const markdownData = getMarkdownBySlug(slug);

  if (!markdownData) {
    notFound();
  }

  const currentPath = `/learn/${slug.join("/")}`;
  const navigation = getPrevNextNavigation(currentPath);
  const navigationStructure = getNavigationStructure();

  return (
    <Layout>
      <LearnLayout
        currentPath={currentPath}
        title={markdownData.title}
        navigationStructure={navigationStructure}
      >
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

// Generate dynamic metadata for SEO
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const markdownData = getMarkdownBySlug(slug);

  if (!markdownData) {
    return {
      title: "Page Not Found - BIOS UBM",
      description: "Halaman yang Anda cari tidak ditemukan.",
    };
  }

  const title = markdownData.title || slug[slug.length - 1];
  const description =
    markdownData.frontmatter?.description ||
    `Pelajari ${title} - Materi programming gratis dari BIOS UBM. Tutorial lengkap dengan contoh kode dan penjelasan mudah dipahami.`;

  const url = `https://next-himabios.vercel.app/learn/${slug.join("/")}`;

  return {
    title: `${title} - Tutorial Programming`,
    description,
    keywords: [
      title.toLowerCase(),
      "programming tutorial",
      "belajar coding",
      "BIOS UBM",
      "algoritma",
      "struktur data",
      "tutorial gratis",
    ],
    openGraph: {
      title: `${title} - Tutorial Programming | BIOS UBM`,
      description,
      url,
      type: "article",
      publishedTime:
        (markdownData.frontmatter?.date as string) || new Date().toISOString(),
      authors: ["HIMA BIOS UBM"],
      section: "Programming Tutorial",
      tags: [title, "Programming", "Tutorial", "BIOS UBM"],
      images: [
        {
          url: "/BIOS.png",
          width: 1200,
          height: 630,
          alt: `${title} - BIOS UBM Tutorial`,
        },
      ],
    },
    alternates: {
      canonical: url,
    },
  };
}
