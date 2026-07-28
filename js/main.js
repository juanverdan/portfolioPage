// --- MENU HAMBÚRGUER ---
const hamburguer = document.querySelector(".hamburguer")
const navMenu = document.querySelector(".nav-menu")

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active")
  navMenu.classList.toggle("active")
})

const navLinks = document.querySelectorAll(".nav-link")

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburguer.classList.remove("active")
    navMenu.classList.remove("active")
  })
})

// --- FILTRO DE PROJETOS ---
const filterButtons = document.querySelectorAll(".filter-btn")
const projectCards = document.querySelectorAll(".cards .card")

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"))
    button.classList.add("active")

    const filterValue = button.getAttribute("data-filter")

    projectCards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category")
      card.style.display =
        filterValue === "all" || cardCategory === filterValue
          ? "flex"
          : "none"
    })
  })
})

// --- SESSÃO: sincroniza a nav e o prompt do terminal com o bloco visível ---
const winbarPath = document.querySelector(".winbar-path")
const blocks = document.querySelectorAll(".session-block")

const prompts = {
  home: "guest@juanverdan:~$",
  sobre: "guest@juanverdan:~/sobre$",
  fluxo: "guest@juanverdan:~/fluxo$",
  projetos: "guest@juanverdan:~/projetos$",
}

const spyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      const id = entry.target.id
      if (winbarPath) winbarPath.textContent = prompts[id] || prompts.home
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`)
      })
    })
  },
  { rootMargin: "-45% 0px -45% 0px" }
)

blocks.forEach((block) => spyObserver.observe(block))

// --- Revela cada bloco (fade + slide) na primeira vez que entra na tela ---
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add("in-view")
      revealObserver.unobserve(entry.target)
    })
  },
  { threshold: 0.15 }
)

blocks.forEach((block) => revealObserver.observe(block))
