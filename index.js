const form = document.querySelector('#form')
const nameContact = document.querySelector('#name')
const telContact = document.querySelector('#tel')
const btnDelete = document.querySelector('#btn-delete')
const deleteContact = document.querySelector('#delete')

const contactList = []

const createObjContact = (id, name, tel) => {
  return {
    id,
    name,
    tel
  }
}

const clearContactsDiv = (div) => {
  while (div.hasChildNodes()) {
    div.removeChild(div.firstChild)
  }
}

const contactsDiv = () => {
  const divResulted = document.querySelector('#resulted')
  clearContactsDiv(divResulted)
  contactList.forEach(e => {
    const paragraph = document.createElement('p')
    paragraph.textContent = `id: ${e.id} nombre: ${e.name} Telefono: ${e.tel}`
    divResulted.appendChild(paragraph)
    divResulted.appendChild(document.createElement('hr'))
  })
}

const resetInput = () => {
  nameContact.value = ''
  telContact.value = ''
  deleteContact.value = ''
}

const clearListContact = () => {
  while (contactList.length !== 0) {
    contactList.pop()
  }
} 

const deleteContacts = (id) => {
  if (id === '' || isNaN(id)) {
    alert('ID invalido')
    return null
  }
  id = Number(id)
  const newList = contactList.filter(res => res.id !== id)
  clearListContact()
  newList.forEach(e => {
    e.id = contactList.length
    contactList.push(e)
  })
  contactsDiv()
  resetInput()
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  contactList.push(createObjContact(contactList.length, nameContact.value, telContact.value))
  contactsDiv()
  resetInput()
})

btnDelete.addEventListener('click', () => deleteContacts(deleteContact.value))