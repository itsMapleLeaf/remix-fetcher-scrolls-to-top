import { redirect } from "@remix-run/node"
import { Form, useFetcher } from "@remix-run/react"

export function action() {
  return redirect("/")
}

export default function Index() {
  const fetcher = useFetcher()
  return (
    <div>
      <div style={{ height: "80vh" }} />
      <fetcher.Form method="post">
        <button>submit (fetcher)</button>
      </fetcher.Form>
      <Form method="post">
        <button>submit (Form)</button>
      </Form>
      <div style={{ height: "80vh" }} />
    </div>
  )
}
