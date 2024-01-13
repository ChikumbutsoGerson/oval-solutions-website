export interface Service {
    name: string;
    description: string;
    _id: string;
    _createdAt: string;
    serviceImage: {
        asset: {
            url: string;
        }
    }

}
export interface Client {
    name: string;
    _id: string;
    clientLogo: {
        asset: {
            url: string;
        }
    }

}
export interface Team {
    fullname: string;
    position: string;
    brief: string;
    _id: string;
    _createdAt: string;
    memberImage: {
        asset: {
            url: string;
        }
    }

}
export interface Project {
    title: string;
    overview: string;
    content: any;
    _id: string;
    slug: {
        current: string;
    };
    _createdAt: string;
    mainImage: {
        asset: {
            url: string;
        }
    }

}