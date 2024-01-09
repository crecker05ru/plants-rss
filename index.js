console.log("Scores: 100/100")

let cities = [
  {
    name: "Yonkers, NY",
    phone: "+1 914 678 0003",
    office: "511 Warburton Ave",
  },
  {
    name: "Canandaigua, NY",
    phone: "+1 585 393 0001",
    office: "151 Charlotte Street",
  },
  {
    name: "Sherrill, NY",
    phone: "+1 315 908 0004",
    office: "14 WEST Noyes BLVD",
  },
  {
    name: "New York City",
    phone: "+1 212 456 0002",
    office: "9 East 91st Street",
  },
]

const burger = document.querySelector(".nav-burger-svg")
const navigation = document.querySelector(".nav")
const gardensButton = document.querySelector("#gardens")
const lawnButton = document.querySelector("#lawn")
const plantingButton = document.querySelector("#planting")
const serviceButtons = document.querySelectorAll(".service-button")
const gardensCards = document.querySelectorAll(".service-gallery-item")
const serviceGallery = document.querySelector(".service-gallery")
const accordionsButtons = document.querySelectorAll(
  ".prices-list-accordion-button"
)
const accordionsArrows = document.querySelectorAll(
  ".prices-list-accordion-arrow"
)
const accordionsItems = document.querySelectorAll(".prices-list-accordion-item")
const accordionsItemsContent = document.querySelectorAll(
  ".prices-list-accordion-content"
)
const contactsSelect = document.querySelector(".contacts-select")
const contactsSelectArrow = document.querySelector(".contacts-select-arrow")
const contactsSelectCard = document.querySelector(".contacts-select-card")
const contactsCardButton = document.querySelector(
  ".contacts-select-card-button"
)
const select = contactsSelect.getElementsByTagName("select")[0]
const cardContentRight = document.querySelector(".card-content-right")
let activeButtons = []
let activeCards = []

let selectedCityNumber = ""
function callNumber() {
  window.location = "tel:" + selectedCityNumber
}
contactsCardButton.addEventListener("click", callNumber)
window.addEventListener("load", makeCustomSelect)
function makeCustomSelect() {
  let divSelected = document.createElement("DIV")
  divSelected.setAttribute("class", "select-selected")
  divSelected.innerHTML = select.options[select.selectedIndex].innerHTML
  contactsSelect.appendChild(divSelected)
  itemDiv = document.createElement("DIV")
  itemDiv.setAttribute("class", "select-items")
  for (let i = 1; i < select.length; i++) {
    sameDiv = document.createElement("DIV")
    sameDiv.setAttribute("class", "select-option")
    sameDiv.innerHTML = select.options[i].innerHTML
    sameDiv.addEventListener("click", function (e) {
      let selected =
        this.parentNode.parentNode.getElementsByTagName("select")[0]
      let previous = this.parentNode.previousSibling

      for (let i = 0; i < selected.length; i++) {
        if (selected.options[i].innerHTML == this.innerHTML) {
          selected.selectedIndex = i
          previous.innerHTML = this.innerHTML
          let asSelected =
            this.parentNode.getElementsByClassName("same-as-selected")
          for (let k = 0; k < asSelected.length; k++) {
            asSelected[k].classList.remove("same-as-selected")
          }
          this.classList.add("same-as-selected")
          break
        }
      }
      previous.click()
    })
    itemDiv.appendChild(sameDiv)
  }
  contactsSelect.appendChild(itemDiv)

  divSelected.addEventListener("click", function (e) {
    closeAllSelect(this)
    if (e.target.innerText !== "City") {
      let cityData = cities.find((i) => i.name === e.target.innerText)
      cardContentRight.children[0].innerText = cityData.name
      cardContentRight.children[1].innerText = cityData.phone
      cardContentRight.children[2].innerText = cityData.office
      selectedCityNumber = cityData.phone
      contactsSelectCard.classList.toggle("contacts-select-card-show")
    }
    divSelected.classList.add("select-active")
    this.nextSibling.classList.toggle("select-items-active")
    contactsSelectArrow.classList.toggle("contacts-select-arrow-active")
  })
}

function closeAllSelect(element) {
  let array = []
  let selectItems = document.getElementsByClassName("select-items")
  let selectSelected = document.getElementsByClassName("select-selected")
  for (let i = 0; i < selectSelected.length; i++) {
    if (element == selectSelected[i]) {
      array.push(i)
    } else {
      selectSelected[i].classList.remove("select-arrow-active")
    }
  }
  for (let i = 0; i < selectItems.length; i++) {
    if (array.indexOf(i)) {
      selectItems[i].classList.add("select-hide")
    }
  }
}

document.addEventListener("click", closeAllSelect)

accordionsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    location.href = "#contacts"
  })
})

let activeArrows = []
let activeAccordions = []

function accrodionHandler() {
  if (activeArrows.includes(this.id)) {
    activeArrows.splice(activeArrows.indexOf(this.id), 1)
  } else {
    activeArrows.push(this.id)
  }

  if (activeArrows.length > 1) {
    activeArrows.shift()
  }
  accordionsArrows.forEach((arrow) => {
    if (activeArrows.includes(arrow.id)) {
      arrow.classList.add("arrow-active")
    } else {
      arrow.classList.remove("arrow-active")
    }
  })

  accordionsItems.forEach((item) => {
    if (activeArrows.includes(item.classList[1])) {
      item.classList.add("accordion-active")
    } else {
      item.classList.remove("accordion-active")
    }
  })

  accordionsItemsContent.forEach((item) => {
    if (activeArrows.includes(item.classList[1])) {
      item.classList.add("item-content-active")
    } else {
      item.classList.remove("item-content-active")
    }
  })
}

accordionsArrows.forEach((arrow) => {
  arrow.addEventListener("click", accrodionHandler)
})
function blurCards(cardsClass) {
  if (activeButtons.includes(this.id)) {
    activeButtons.splice(activeButtons.indexOf(this.id), 1)
    activeCards.splice(activeCards.indexOf(cardsClass), 1)
  } else {
    activeButtons.push(this.id)
    activeCards.push(cardsClass)
  }

  if (activeButtons.length > 2) {
    activeButtons.shift()
    activeCards.shift()
  }

  gardensCards.forEach((card) => {
    if (activeCards.includes(card.classList[1])) {
      card.classList.add("blur-cancel")
    } else {
      card.classList.remove("blur-cancel")
    }
  })

  serviceButtons.forEach((button) => {
    if (activeButtons.includes(button.id)) {
      button.classList.add("button-active")
    } else {
      button.classList.remove("button-active")
    }
  })
  activeButtons.length === 0
    ? serviceGallery.classList.remove("blur-childrens")
    : serviceGallery.classList.add("blur-childrens")
}

gardensButton.addEventListener(
  "click",
  blurCards.bind(gardensButton, "garden-care")
)

lawnButton.addEventListener("click", blurCards.bind(lawnButton, "lawn-care"))

plantingButton.addEventListener(
  "click",
  blurCards.bind(plantingButton, "planting")
)

document.body.addEventListener("click", (e) => {
  console.log('burger',burger)
  console.log('e.target',e.target)
  if (e.target !== burger) {
    navigation.classList.remove("nav-show")
    burger.children[0].classList.remove("active-line1")
    burger.children[1].classList.remove("active-line2")
    burger.children[2].classList.remove("active-line3")
    burger.children[3].classList.remove("active-line4")
  } else {
    return
  }
})

burger.addEventListener("click", toggleClass)

function toggleClass() {
  navigation.classList.toggle("nav-show")
  burger.children[0].classList.toggle("active-line1")
  burger.children[1].classList.toggle("active-line2")
  burger.children[2].classList.toggle("active-line3")
  burger.children[3].classList.toggle("active-line4")
}
