import React, { useEffect, useState } from 'react'
import { SearchBar } from './components/Search/Searchbar'
import {  useSelector } from 'react-redux'
import './App.css'
import PersonInfo from './components/Person/PersonInfo'
import store from './redux/store'

const App = () => {
  const [arr, setArr] = useState<any>([])

  type RootState = ReturnType<typeof store.getState>;
  
  const result = useSelector(
    (state: RootState) => state.person as any
  )
  useEffect(() => {
    arr[0] !== result.result && result?.result !== undefined 
      && setArr((prev: any) => {
        return [
          result.result,
          ...prev
        ]
      })
  }, [result])
  

  return (
    <div className='container'>
      <h1>Probability test</h1>
      <SearchBar />
      {!arr ?
        <div>No data yet</div> :
          arr?.map((item: any) => {
            return <PersonInfo data={item} loading={result.loading}/>
          })}
    </div>
  )
}
// {/*  */}
export default App
