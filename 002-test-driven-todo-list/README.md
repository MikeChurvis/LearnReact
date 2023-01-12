# Test-Driven To-Do List

This is mainly an experiment in how to migrate an application to a new codebase using existing high-level test coverage instead of just shoehorning in legacy code.

When you install Playwright as your end-to-end test runner, it comes with an example test suite out of the box. This example targets a to-do list app written by the Playwright devs. It covers the full feature set of the application, testing functionality at the highest level.

I have a theory: I can take this suite of tests, point it at my own empty React application, run it, and every test will fail. Then, I build the React app. I do this until the all of the tests pass. When that is done, I will have a to-do app with the exact same specifications as the one in production.

## Stack

Current:

- Vite
- React
- TypeScript
- Playwright

Planned:

- Tailwind
- Vitest(?)
