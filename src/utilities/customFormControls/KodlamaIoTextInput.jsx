import { useField } from 'formik';
import React from 'react';
import { FormField, Label } from 'semantic-ui-react';

//Kendi oluşturduğumuz form kontrolleri burada yer alır.
export default function KodlamaIoTextInput({...props}) {
    //console.log(props)

    //field oluşturma
    //meta hata mesajı bilgisini verir.
    const [field,meta] = useField(props)
    //console.log(meta)

  return (
    //touched input'taki metne dokunma anlamındadır.
    //!! işareti true-false ifadesidir.
    <FormField error={meta.touched && !!meta.error}>
        <input {...field} {...props}/>
        {/* Hata varsa label içindeki mesaj gösterilir. */}
        {meta.touched && !!meta.error ? (
            <Label pointing basic color="red" content={meta.error}></Label>
        ):null} 
    </FormField>
  )
}
