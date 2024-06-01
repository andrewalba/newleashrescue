import type { Organization } from "~/models/Organization";
import type { Pagination } from "~/models/Pagination";

export interface Organizations {
    organizations: Organization[];
    pagination:    Pagination;
}
