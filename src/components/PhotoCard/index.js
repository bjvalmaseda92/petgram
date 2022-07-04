import React from 'react'
import { ImgWrapper, Img, Button, Article } from './style'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useToggleLike } from '../../hooks/useToggleLike'
import { Link } from 'react-router-dom'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_dogs.jpg'
const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`
  const [show, element] = useNearScreen()
  const [like, setLike] = useLocalStorage(key, false)
  const [mutateLikes] = useToggleLike()

  const handleLike = () => {
    setLike(!like)
    !like && mutateLikes({ variables: { input: { id } } })
  }

  const Icon = like ? MdFavorite : MdFavoriteBorder
  return (
    <Article ref={element}>
      {
        show &&
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>

            <Button onClick={handleLike}>
              <Icon size='32px' /> {likes} likes!
            </Button>
          </>
      }

    </Article>
  )
}

export { PhotoCard }
