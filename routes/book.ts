import { Router } from "https://deno.land/x/oak/mod.ts";
import BookController from "../controller/book.ts";

const router = new Router();
const bookController = new BookController();

router.get("/", async (ctx) => {
    console.log(bookController.getBooks())
    ctx.response.body = await bookController.getBooks();
});

router.get("/:id/info", async (ctx) => {
    const { id } = ctx.params;
    const info = await bookController.bookInfo(Number(id));
    if(info) {
        ctx.response.body = info;
    } else {
        ctx.response.status = 404;
        ctx.response.body = {
            message: "Record not found"
        };
    }
});

router.post("/create", async({ request, response }: { request: any; response: any }) => {
    if (!request.hasBody) {
        response.status = 400;
        response.body = {
          success: false,
          message: "No data provided",
        };
        return;
    }
    const body = await request.body();
    const books = await bookController.create(await body.value);
    response.body = books;
});



export default router;