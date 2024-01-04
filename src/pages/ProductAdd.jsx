import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { Button, FormField, Label } from 'semantic-ui-react';
import * as Yup from 'yup';
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput';

//Formik ve yup paketleri yüklenmiştir.
export default function ProductAdd() {
    const initialValues = { title: "", price: 10 }

    //Doğrulama şeması => yup paketinden gelir.
    //productName yerine title kullanılmıştır.
    //unitPrice yerine price kullanılmıştır.
    //Hata mesajı oluşturmak için ErrorMessage kullanılır.

    const schema = Yup.object({
        title: Yup.string().required("Ürün adı zorunlu"),
        price: Yup.number().required("Ürün fiyatı zorunlu"),
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values)
            }}
        >
            <Form className="ui form">
                {/* Form kontrolü eklenmiştir. */}
                <KodlamaIoTextInput name="title" placeholder="Ürün adı" />
                <KodlamaIoTextInput name="price" placeholder="Ürün fiyatı" />

                {/* Form field, semantic ui react'tan alınmıştır. */}
                {/* <FormField>
                    <Field name="title" placeholder="Ürün adı"></Field>
                    <ErrorMessage name="title" render={error =>
                        <Label pointing basic color="red" content={error}></Label>
                    }></ErrorMessage>
                </FormField> */}
                {/* <FormField>
                    <Field name="price" placeholder="Ürün fiyatı"></Field>
                    <ErrorMessage name="price" render={error =>
                        <Label pointing basic color="red" content={error}></Label>
                    }></ErrorMessage>
                </FormField> */}
                <Button color="green" type="submit">Ekle</Button>
            </Form>
        </Formik>
    );
}
