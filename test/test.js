import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
 * @type { import("../src") }
 */
const {default: pxByDefault} = indexModule

it("should run", () => {
  expect(pxByDefault(30)).toBe("30px")
  expect(pxByDefault("3rem")).toBe("3rem")
  expect(pxByDefault(" 100vw ")).toBe(" 100vw ")
})