import GetQuery from "@/pages/GetQuery";
import PostQuery from "@/pages/PostQuery";

export const allRoutes = [
  {
    id: 1,
    path: "/get-query",
    element: <GetQuery />,
  },
  {
    id: 2,
    path: "/post-query",
    element: <PostQuery />,
  },
];
