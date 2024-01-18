import { client, urlFor } from "@/app/lib/sanity";
import { Project } from "@/app/lib/interface";
import PortableText from "react-portable-text";

async function getData(slug: string) {
  const query = `*[_type == "project" && slug.current == "${slug}"][0]`;

  console.log("Query:", query);

  try {
    const data = await client.fetch(query, { next: { revalidate: 0 } });
    console.log("Data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default async function SlugPage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const data = (await getData(params.slug)) as Project;
    return (
      <main className="h-full w-full mt-18">
        <div className="max-w-4xl mx-auto bg-gray-100">
          <img
            className="w-full h-96 object-cover mt-20"
            src={urlFor(data.mainImage).url()!}
          />
          <article className="w-full mx-auto p-5">
            <h1 className="text-yellow-500 font-bold text-[32px] border-b-[1px] border-b-yellow-800 mt-10">
              {data.title}
            </h1>
            {"  "}
            <p className="mb-2">
              Published On -{" "}
              <span className="font-semibold text-base">
                {new Date(data._createdAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </span>
            </p>

            <h2 className="text-2xl [18px] mb-2">{data.overview}</h2>
            <div></div>
            <div className="mt-5 mb-10">
              <PortableText
                dataset="production"
                projectId="8ht8zdg8"
                content={data.content}
              />
            </div>
          </article>
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return (
      <div className="text-red-500">
        <p>Error fetching data. Please try again later.</p>
      </div>
    );
  }
}

export const dynamic = "force-dynamic";
