// --- LÓGICA DO MENU HAMBÚRGUER ---
const hamburguer = document.querySelector(".hamburguer")
const navMenu = document.querySelector(".nav-menu")

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// --- LÓGICA DO FILTRO DE PROJETOS ---
// Garante que o código do filtro só rode se estivermos na página de projetos
if (document.querySelector(".filter-container")) {
  // 1. Seleciona todos os botões de filtro e todos os cards de projeto.
  const filterButtons = document.querySelectorAll(".filter-btn")
  const projectCards = document.querySelectorAll(".cards .card") // Seletor mais específico

  // 2. Adiciona um "ouvinte" de clique para cada botão.
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove a classe 'active' de todos os botões para limpar o estado anterior.
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      // Adiciona a classe 'active' apenas no botão que foi clicado.
      button.classList.add("active")

      // Pega o valor do filtro do botão clicado (ex: "python", "javascript", "all").
      const filterValue = button.getAttribute("data-filter")

      // 3. Passa por cada card de projeto para decidir se ele deve ser mostrado ou escondido.
      projectCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category")

        // Se o filtro for "all" OU a categoria do card for a mesma do filtro...
        if (filterValue === "all" || cardCategory === filterValue) {
          card.style.display = "flex" // Mostra o card.
        } else {
          card.style.display = "none" // Esconde o card.
        }
      })
    })
  })
}
