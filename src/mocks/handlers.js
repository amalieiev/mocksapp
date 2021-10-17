import { rest } from "msw";

const todos = [
  {
    id: 1,
    title: "Learn React",
    done: false,
  },
  {
    id: 2,
    title: "Learn Hooks",
    done: false,
  },
];

export const handlers = [
  rest.get("/todos", (req, res, ctx) => {
    return res(ctx.json(todos));
  }),
];
