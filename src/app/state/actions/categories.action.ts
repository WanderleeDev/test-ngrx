import { createAction, props } from "@ngrx/store";

export const setCategories = createAction(
    '[Main Navbar Page] Set Categories',
    props<{ categories: string[] }>()
);

export const loadCategories = createAction(
    '[Main Navbar Page] Load Category'
);
