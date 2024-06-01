export interface Pagination {
    count_per_page: number;
    total_count:    number;
    current_page:   number;
    total_pages:    number;
    _links:         Links;
}

export interface Links {
    previous: Next;
    next:     Next;
}

export interface Next {
    href: string;
}
