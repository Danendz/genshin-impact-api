import router from "@config/router"

router.get("/", async (ctx) => {
    ctx.body = { message: "Hello World" }
})

export default router
