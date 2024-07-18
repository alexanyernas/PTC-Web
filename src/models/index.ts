interface Image {
    title: string;
    src: string;
}

export interface LessionItemModel {
    id: string;
    title: string;
    color: string;
    video?: string;
    images?: Image[];
    content?: string[];
    references?: string[];
}