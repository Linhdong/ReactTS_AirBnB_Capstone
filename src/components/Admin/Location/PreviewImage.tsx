import React, {useState} from 'react'

type Props = {
    setImage?: any
}

export default function PreviewImage({ setImage }: Props) {
    const [preview, setPreview] = useState<any>({})

  return (
    <div>
        <img style={{width:'100px', height: '100px'}} src={preview} alt="...."/>
    </div>
  )
}