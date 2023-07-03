import React, { useState, useContext, createContext } from 'react'
import './App.css';
import Header from './Components/Header';
import InputField from './Components/InputField';
import BookList from './Components/BookList';

export const AppContext = createContext<any>(null);

function App() {
  const [themeState, setThemeState] = useState(false);
  const [formData, setFormData] = useState(
		{bookTitle: "", authorName: "", ISBN:"", completed:false}
	)
  const [bookListData, setBookListData] = useState([]);
  return ( 
    <div className={themeState ? 'App light' : 'App dark'}>
      <AppContext.Provider 
        value={
          {
            themeState,
            setThemeState,
            formData, 
            setFormData,
            bookListData,
            setBookListData
          }
        }
      >
      <Header/>
      <InputField/>
      <BookList/>
      </AppContext.Provider>
    </div>
  )
}


export default App



