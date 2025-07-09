export interface TypeContent {
    id: string;
    title: string;
    body: {
        title: string;
        text: string;
        link: string;
        image: string;
        logo: string;
        left: {
            text: string;
            icon: string;
            link: string;
        }
        center: {
            text: string;
            icon: string;
            link: string;
        }
        right: {
            text: string;
            icon: string;
            link: string;
        }
    };
    meta: {
        text: string;
    };
    description?: string;
    path: string;
    seo?: {
        title: string;
    };
}