import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar"
import { FaSearch } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import {collection,getDocs} from 'firebase/firestore';
import { db } from "./Config/Firebase";
import {HiOutlineUserCircle} from "react-icons/hi";
import {IoMdTrash} from "react-icons/io";
import {RiEditCircleLine} from "react-icons/ri";
import ContactCard from "./Components/ContactCard";
import Modal from "./Components/Modal";

const App = () => {

  const[contacts, setContacts] = useState([]);

  const [isOpen, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const getContacts = async() =>{
      try{
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = contactsSnapshot.docs.map((doc)=> {
          return {
            id:doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);
        
      } catch(error) {
        console.log(error);
        
      }
    };
    getContacts();
  },[])

  return (
    <>
    <div className="max-w-[370px] max-auto px-4 ">
      <Navbar/>
      <div className="flex gap-2">
      <div className="relative flex flex-grow items-center">
        <FaSearch className="ml-1 absolute text-white text-3xl "/>
        <input type="text" className="h-10 bg-transparent border border-white rounded-md flex-grow text-white pl-9" />
      </div>
    
      <FaPlusCircle onClick={onOpen} className="text-5xl cursor-pointer text-white"/>
      </div>
      <div className="mt-4 flex gap-3 flex-col">{
        contacts.map((contact) => (
          <ContactCard key = {contact.id} contact = {contact}/>
        ))}
        </div>
    </div>
    <Modal isOpen={isOpen} onClose={onClose}>

    </Modal>
    </>
  );
};

export default App