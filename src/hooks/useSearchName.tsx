import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import { getCountryProbability} from "../redux/actions/personAction";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [query, setQuery] = useState<string>('')
  const [debouncedQuery, setDebouncedQuery] = useState<string>(query)

  const dispatch = useDispatch()

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedQuery(query)
    }, 1000)

    return () => {
      clearTimeout(timerId)
    }
  }, [query])

  useEffect(() => {
    const searchAction = () => {
      if(query.length > 1) {
        dispatch(getCountryProbability(query))
      }
    }
    if (query) searchAction()
  }, [dispatch, debouncedQuery])


  return [query, setQuery] as const

}