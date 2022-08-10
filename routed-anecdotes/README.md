# Exercises

## Exercises 7.1.-7.3.

Let's return to working with anecdotes. Use the redux-free anecdote app found in the repository https://github.com/fullstack-hy2020/routed-anecdotes as the starting point for the exercises.

If you clone the project into an existing git repository, remember to _delete the git configuration of the cloned application:_

```bash
cd routed-anecdotes   // go first to directory of the cloned repository
rm -rf .git
```

The application starts the usual way, but first you need to install the dependencies of the application:

```bash
npm install
npm start
```

## 7.1: routed anecdotes, step1

Add React Router to the application so that by clicking links in the _Menu_ component the view can be changed.

At the root of the application, meaning the path `/`, show the list of anecdotes:

![Home page](./readmeimg/40.png)

The _Footer_ component should always be visible at the bottom.

The creation of a new anecdote should happen e.g. in the path _create:_

![Create page](./readmeimg/41.png)
