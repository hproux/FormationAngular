var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","redirectTo":"/login","pathMatch":"full"},{"path":"orders","loadChildren":"./orders/orders.module#OrdersModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/orders/orders-routing.module.ts","module":"OrdersRoutingModule","children":[{"path":"","component":"PageListOrderComponent"}],"kind":"module"}],"module":"OrdersModule"}]},{"path":"clients","loadChildren":"./clients/clients.module#ClientsModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/clients/clients-routing.module.ts","module":"ClientsRoutingModule","children":[{"path":"","component":"PageListClientsComponent"}],"kind":"module"}],"module":"ClientsModule"}]},{"path":"**","loadChildren":"./not-found/not-found.module#NotFoundModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/not-found/not-found-routing.module.ts","module":"NotFoundRoutingModule","children":[{"path":"","component":"PageNotFoundComponent"}],"kind":"module"}],"module":"NotFoundModule"}]}],"kind":"module"}]}