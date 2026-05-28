import * as Turbo from "@hotwired/turbo"
import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import { Application } from "@hotwired/stimulus"
import { createIcons, icons } from "lucide"
import LoadMoreController from "./../controllers/load_more_controller"

window.Alpine = Alpine
Alpine.plugin(collapse)
Alpine.start()

import "./../controllers"
const application = Application.start()
application.register("load-more", LoadMoreController)

const renderLucideIcons = () => {
  createIcons({
    icons,
    attrs: {
      "stroke-width": 1.8,
    },
  })
}

document.addEventListener("DOMContentLoaded", renderLucideIcons)
document.addEventListener("turbo:load", renderLucideIcons)
document.addEventListener("turbo:frame-load", renderLucideIcons)
