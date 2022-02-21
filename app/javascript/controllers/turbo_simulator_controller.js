import { Controller } from "@hotwired/stimulus"

let elementIndex = 1

export default class extends Controller {
  append() {
    var htmlEl = document.getElementsByTagName("html")[0]

    let template = `
    <turbo-stream action="append" target="posts">
      <template>
        <div data-controller="auto-remove">
          ${elementIndex}. Hello world
        </div>
      </template>
    </turbo-stream>
    `

    htmlEl.insertAdjacentHTML("beforeend", template)
    elementIndex++;
  }
}
