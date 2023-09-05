

# Create a Workspace
- Productive, optimized, maintainable, high performant Worspace with CI Enability
  - Nx Workspace
    - Server-Side
    - Front-End
      - Monorepo
        - server projects in it and run them in parallel

- Install the Nx Globally
  - npm install --global nx (windows Command)
  - sudo npm install --global nx

- create a workspace
  npx create-nx-workspace@latest

 >  NX   Let's create a new workspace [https://nx.dev/getting-started/intro]

✔ Where would you like to create your workspace? · company-org
✔ Which stack do you want to use? · angular
✔ Integrated monorepo, or standalone project? · integrated
✔ Application name · shell
✔ Default stylesheet format · css
✔ Test runner to use for end to end (E2E) tests · cypress
✔ Would you like to use Standalone Components in your application? · No
✔ Would you like to add routing? · Yes
✔ Enable distributed caching to make your CI faster · Yes


# Nx Plugins
"@nx/angular": "16.7.4",
  - Angular App managent plugin for Nx
    - Manages App, Lib and all of its dependencies e.g. Testing ENgine
    - Manages Microfront-Ends
- Generate App
  nx generate @nx/angular:app employee-mfe
- Generate Lib
  nx generate @nx/angular:lib data-store 
- Install NgRx Packages
  npm install @ngrx/store @ngrx/effects @ngrx/store-devtools

- Use Module Federation @angular-architects/module-federation
  - npm install @angular-architects/module-federation
- Enable shell and remote apps for Module Deferation
  - nx g @angular-architects/module-federation:init --project shell --port 4200 --type host

  - nx g @angular-architects/module-federation:init --project employee-mfe --port 4300 --type remote


# Create a Workspace
- Productive, optimized, maintainable, high performant Worspace with CI Enability
  - Nx Workspace
    - Server-Side
    - Front-End
      - Monorepo
        - server projects in it and run them in parallel

- Install the Nx Globally
  - npm install --global nx (windows Command)
  - sudo npm install --global nx

- create a workspace
  npx create-nx-workspace@latest

 >  NX   Let's create a new workspace [https://nx.dev/getting-started/intro]

✔ Where would you like to create your workspace? · company-org
✔ Which stack do you want to use? · angular
✔ Integrated monorepo, or standalone project? · integrated
✔ Application name · shell
✔ Default stylesheet format · css
✔ Test runner to use for end to end (E2E) tests · cypress
✔ Would you like to use Standalone Components in your application? · No
✔ Would you like to add routing? · Yes
✔ Enable distributed caching to make your CI faster · Yes


# Nx Plugins
"@nx/angular": "16.7.4",
  - Angular App managent plugin for Nx
    - Manages App, Lib and all of its dependencies e.g. Testing ENgine
    - Manages Microfront-Ends
- Generate App
  nx generate @nx/angular:app employee-mfe
- Generate Lib
  nx generate @nx/angular:lib data-store 
- Install NgRx Packages
  npm install @ngrx/store @ngrx/effects @ngrx/store-devtools

- Use Module Federation @angular-architects/module-federation
  - npm install @angular-architects/module-federation
- Enable shell and remote apps for Module Deferation
  - nx g @angular-architects/module-federation:init --project shell --port 4200 --type host

  - nx g @angular-architects/module-federation:init --project employee-mfe --port 4300 --type remote











