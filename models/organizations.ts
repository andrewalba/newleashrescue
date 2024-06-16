import type { Organization } from "~/models/organization";
import type { Pagination } from "~/models/pagination";

export interface Organizations {
    organizations: Organization[];
    pagination:    Pagination;
}
