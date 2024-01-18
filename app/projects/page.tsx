import { Project } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const query = `*[_type == 'project']`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const data = (await getData()) as Project[];
  if (!data || data.length === 0) {
    return (
      <main className="w-full h-full  items-center justify-center">
        <div className="mx-auto flex-grow text-center">
          <img
            className="w-full h-60 object-cover mt-15"
            src="https://images.pexels.com/photos/2707756/pexels-photo-2707756.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          />
          <div className="w-full mx-auto p-5 bg-green-50 pt-0">
            <div className=" bg-blue-500ray-50">
              <div className="py-10  sm:py-16 block lg:py-24 relative bg-opacity-50  z-40 ">
                <div className="relative mx-auto h-full px-4 pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
                  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
                    <div className="max-w-xl mx-auto text-center">
                      <div className="inline-flex px-4 py-1.5 mx-auto rounded-full  ">
                        <p className="text-4xl font-semibold tracking-widest text-g uppercase  border-b-8 border-yellow-400">
                          OUR PROJECTS
                        </p>
                      </div>
                      <p className="mt-1 text-base leading-relaxed text-gray-600 font-sarif group-hover:text-white">
                        Explore some of our recent projects
                      </p>
                    </div>
                    <div className="2xl text-center">
                      No projects at the moment
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className="w-full h-full  items-center justify-center">
      <div className="mx-auto flex-grow text-center">
        <img
          className="w-full h-60 object-cover mt-15"
          src="https://images.pexels.com/photos/2707756/pexels-photo-2707756.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        />
        <div className="w-full mx-auto p-5 bg-green-50 pt-0">
          <div className=" bg-blue-500ray-50">
            <div className="py-10  sm:py-16 block lg:py-24 relative bg-opacity-50  z-40 ">
              <div className="relative mx-auto h-full px-4 pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
                  <div className="max-w-xl mx-auto text-center">
                    <div className="inline-flex px-4 py-1.5 mx-auto rounded-full  ">
                      <p className="text-4xl font-semibold tracking-widest text-g uppercase  border-b-8 border-yellow-400">
                        OUR PROJECTS
                      </p>
                    </div>
                    <p className="mt-1 text-base leading-relaxed text-gray-600 font-sarif group-hover:text-white">
                      Explore some of our recent projects
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-2  mt-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
                    {data.map((project) => (
                      <Link
                        key={project._id}
                        href={`/projects/${project.slug.current}`}
                        className="transition-all  duration-1000 bg-gray-200 rounded-md hover:shadow-xl m-2 p-4 relative z-40 group  "
                      >
                        <div className="absolute bg-green-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-green-800 group-hover:w-1/2  "></div>
                        <div className="max-w-sm  dark:bg-gray-800 dark:border-gray-700">
                          {project.mainImage && (
                            <Image
                              src={urlFor(project.mainImage).url()!}
                              alt="txet"
                              height={350}
                              width={380}
                              className="rounded-t-lg h-45 w-full"
                            />
                          )}
                          <div className="p-5">
                            <h5 className="mb-2 text-xl  font-bold tracking-tight text-yellow-600 dark:text-white">
                              {project.title.length > 65
                                ? `${project.title.slice(0, 65)}...`
                                : project.title}
                            </h5>

                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                              {project.overview.length > 75
                                ? `${project.overview.slice(0, 75)}...`
                                : project.overview}
                            </p>
                            <p className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              Read More...
                              <svg
                                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                              >
                                <path
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                              </svg>
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export const dynamic = "force-dynamic";
