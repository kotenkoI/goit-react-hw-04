import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox"
import ContactList from "../ContactList/ContactList"
import contacts from "/src/contacts.json"
import { useEffect, useState } from "react"
import css from "./App.module.css"

export default function App() {
    const [contactsData, setContactsData] = useState(() => {
        const localStorageData = localStorage.getItem("contactsData")
        if (localStorageData !== null) {
            return JSON.parse(localStorageData)
        }
        return (contacts)
    });

    const [filter, setFilter] = useState('')

    useEffect(() => {
        localStorage.setItem("contactsData", JSON.stringify(contactsData))
    }, [contactsData])

    
    const addContact = (newContact) => {
        setContactsData((contactsData) => {
            return [...contactsData, newContact]
        })
    }

    const deleteContact = (contactId) => {
        setContactsData((contactsData) => {
            return contactsData.filter((contact) => contact.id !== contactId)
        })
    }

    const visibleContacts = contactsData.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))

    
    return (
        <div className={css.container}>
            <h1 className={css.mainTitle}>Phonebook</h1>
            <ContactForm onAdd={addContact} />
            <SearchBox value={filter} onFilter={setFilter} />
            <ContactList contacts={visibleContacts} onDelete={deleteContact} />
        </div>
    )
}