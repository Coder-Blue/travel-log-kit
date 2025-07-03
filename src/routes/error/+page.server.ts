import { error } from "@sveltejs/kit";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ url }) => {
  const errorMessage = url.searchParams.get("error");

  throw error(500, {
    message: errorMessage || "An unknown error occured",
  });
};
