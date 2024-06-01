import type { Animal } from "~/models/animal";
import type { Pagination } from "~/models/pagination";

export interface Animals {
    animals:    Animal[];
    pagination: Pagination;
}
