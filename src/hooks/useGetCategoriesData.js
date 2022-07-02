import { useEffect, useState } from 'react'

const useGetCategoriesData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window.fetch('https://petgram-bjvalmaseda-server.vercel.app/categories')
      .then(response => response.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

export { useGetCategoriesData }
