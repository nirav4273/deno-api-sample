import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import bookRoute from './routes/book.ts'

const app = new Application();

app.use(bookRoute.routes());
app.use(bookRoute.allowedMethods());

await app.listen({ port: 8000 });
console.log("server started");