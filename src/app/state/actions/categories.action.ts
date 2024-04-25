import { createAction, props } from "@ngrx/store";

export const setCategories = createAction(
    '[Main Navbar Page] Set Categories',
    props<{ categories: string[] }>()
);
