import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

const projectId = 'xbasdnrd'
const dataset= 'production'
const apiVersion = '2023-01-01'


export const  config = {
    projectId,
    dataset,
    apiVersion,
    useCdn: true
};

export const  client = createClient(config);

export const  urlFor = (source:any) => createImageUrlBuilder(config).image(source);