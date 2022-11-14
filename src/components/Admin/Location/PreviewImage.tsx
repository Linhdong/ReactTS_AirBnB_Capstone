import React, {useState} from 'react'

type Props = {
    file: any,
    setImage: any
}

export default function PreviewImage({ file, setImage }: Props) {
    const [preview, setPreview] = useState<any>({})
    if(file){
        const reader = new FileReader();
        reader.readAsDataURL(file as any);
        reader.onload = () => {
            setPreview(reader.result);
            // setImage(reader.result);
        }
    }
  return (
    <div>
        <img style={{width:'100px', height: '100px'}} src={preview} alt="...."/>
    </div>
  )
}