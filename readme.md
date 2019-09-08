### Figured Challenge

- Build a blog application where users can read posts and where an admin user can log in and create, update and delete posts.

### What was created?
Backend  and FrontEnd should not be the same application, both should be connected with an API.
Based on that premise, i created both FrontEnd and Backend folders on the repository that contains each app.
Frontend distribution has been added to Laravel views in order to make it run smoothly, but keept separated to be able to work independently of each other

### Frameworks Used
- Backend => Laravel Framework skeleton provided by Figured
- Frontend => VueJs with Vuex and Boostrap, Sg generator and Webpack

#### Created code for Backend
- `API Controllers => PostController | UserController`
- `API Routes`
- `Resources => PostResource | PostsResource`
- `Middlewares => JWTMiddleware`
- `Models, Migrations & Seeders => Post | Category | Tag`
- `Main Test Controllers (For testing on blade before creating the FrontEnd) => HomeController | BlogController`

#### Created code for Frontend
- `_helpers && userServices => User Login and VuexStates`
- `Vuex Account & Post Module to handle API requests`
- `Admin, Home and Login pages`
- `Post Component`

#### How to build
- Create docker for Backend with **./start-app.sh**
- Start backend with **./init-app.sh**
- Run docker-compose exec app php artisan key:generate
- Run docker-compose exec app php artisan jwt:secret
- Backend should run on localhost:8080
- cd FrontEnd folder  and run **yarn run dev**
- Frontend should run on localhost:8081
