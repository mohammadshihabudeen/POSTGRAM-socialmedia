import { createContext } from "react";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import useAxiosGet from '../Hooks/useAxiosFetch';
const DataContext = createContext({})

export const DataProvider= ({children}) =>{
    const [Posts, setPosts] = useState([])
    const [search, setSearch] = useState("")
    const [title, seTitle] = useState("")
    const [content, setContent] = useState("")
    const [updatedTitle, setUpdatedTitle] = useState("")
    const [updatedContent, setUpdatedContent] = useState("")
    const [searchItems,seSearchItems] = useState([])
    const navigation = useNavigate()
    const { response, loading, error }= useAxiosGet('https://expense-tracker-476c6-default-rtdb.firebaseio.com/Posts.json')
    useEffect(() => {
      const data = []
      for (const key in response) {
        const post = {
          id: key,
          title: response[key].title,
          time: response[key].time,
          content: response[key].content
        }
        data.push(post)
      }
  
      setPosts(data.reverse())
    }, [response])
    useEffect(() => {
      const searchItem = Posts.filter((post) => {
        return (
          post.title.toLowerCase().includes(search.toLowerCase()) ||
          post.content.toLowerCase().includes(search.toLowerCase())
        )
      })
      seSearchItems(searchItem)
    }, [search,Posts])
    const searchHandler = (e) => {
      e.preventDefault();
    }
  
    const addNewHandler = async (e) => {
      e.preventDefault()
      const newItem = {
        id: Math.random(),
        title: title,
        time: new Date().toISOString(),
        content: content
      }
      try {
       const response = await api.post("/Posts.json", newItem)
       newItem.id = response.data.name
       setPosts((posts) => [newItem,...posts])
      }
      catch (err) {
        console.log(err)
      }
      seTitle('')
      setContent('')
      navigation('/')
  
    }
    const handleDelete = async (id) => {
      const newList = Posts.filter(pos => pos.id != id)
      try {
        await api.delete(`/Posts/${id}.json`);
      }
      catch (err) {
        console.log(err)
      }
      setPosts(newList.reverse())
      navigation('/')
    }
    const HandleUpdate = async (id) => {
      const updatedItem = {
        id: id,
        title: updatedTitle,
        time: new Date().toISOString(),
        content: updatedContent
      }
      const updatedList = Posts.map((post) => post.id == id ? updatedItem : post)
      setPosts(updatedList)
      try {
        await api.put(`/Posts/${id}.json`, updatedItem);
      }
      catch (err) {
        console.log(err)
      }
      setUpdatedTitle("")
      setUpdatedContent("")
      navigation('/')
    }
    return(
      <DataContext.Provider
    value={{
        searchHandler,search,setSearch,
        searchItems,loading,error,
        title,seTitle,content,setContent,addNewHandler,
        Posts,handleDelete,
        HandleUpdate,updatedTitle,setUpdatedTitle,updatedContent,setUpdatedContent,
        Count : Posts.length
    }}
    >{children}</DataContext.Provider>
    )
}

export default DataContext