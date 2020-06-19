## Running locally

1. run `docker-compose up`
1. run `gulp watch`
1. navigate to `localhost:4000`

### Notes

- If there is an error saying "Node Sass does not support environment: Linux 64-bit with Unsupported runtime", may need to update Node version, then rebuild Node Sass: `npm rebuild node-sass`
- If CSS isn't updating during development (e.g. while running `gulp watch`), try deleting contents of `screen.css` and making a change in a .scss file to trigger a recompile.
- Sass layouts must be imported in `screen.scss` before they will work
