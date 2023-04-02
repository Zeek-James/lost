import { Routes } from "../../config/routes";

type Params = { route: string };

let route = Routes.notes;

export function useRouter() {
  return { pathname: route };
}

export const decorator = ({ parameters }: { parameters: Params }) => {
  if (parameters && parameters.route) {
    route = parameters.route;
  }
};
