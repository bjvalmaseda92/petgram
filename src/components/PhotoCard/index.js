import React, { Fragment, useEffect, useRef, useState } from 'react'
import { ImgWrapper, Img, Button, Article } from './style'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_dogs.jpg'
const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`
  const element = useRef(null)
  const [show, setShow] = useState(false)
  const [like, setLike] = useState(() => {
    try {
      return window.localStorage.getItem(key)
    } catch (e) {
      return false
    }
  })

  const setLikeLocalStorage = value => {
    try {
      window.localStorage.setItem(key, value)
      setLike(value)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    const observer = new window.IntersectionObserver(entries => {
      const { isIntersecting } = entries[0]
      console.log(isIntersecting)
      if (isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    })
    observer.observe(element.current)
  }, [])

  const Icon = like ? MdFavorite : MdFavoriteBorder
  return (
    <Article ref={element}>
      {
        show &&
          <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>

            <Button onClick={() => setLikeLocalStorage(!like)}>
              <Icon size='32px' /> {likes} likes!
            </Button>
          </>
      }

    </Article>
  )
}

export { PhotoCard }
