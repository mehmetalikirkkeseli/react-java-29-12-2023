import React, { useState, useEffect } from 'react';
import { Button, Icon, Label, Menu, Table } from 'semantic-ui-react';
import ProductService from '../services/productService';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from "../store/actions/cartActions";
import { toast } from "react-toastify";

export default function ProductList() {
    //useDispatch aksiyon çağırmak için kullanılır. 
    const dispatch = useDispatch();

    //hook => react'ın yaşam döngüsüne müdahale etmemiz anlamına gelir.
    const [products, setProducts] = useState([]);

    useEffect(() => {
        let productService = new ProductService();
        productService.getProducts().then(result => setProducts(result.data.products));
    }, [])

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        //react-toastify paketi kullanımı
        toast.success(`${product.title} sepete eklendi!`)
    };

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Ürün Adı</Table.HeaderCell>                     
                        <Table.HeaderCell>Birim Fiyatı</Table.HeaderCell>
                        <Table.HeaderCell>Stok Adedi</Table.HeaderCell>                                            
                        <Table.HeaderCell>Kategori</Table.HeaderCell>
                        <Table.HeaderCell>Marka</Table.HeaderCell>
                        <Table.HeaderCell>Resim</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {products.map((product) => (
                        <Table.Row key={product.id}>
                            <Table.Cell><Link to={`/products/${product.id}`}>{product.title}</Link></Table.Cell>                        
                            <Table.Cell>{product.price}</Table.Cell>
                            <Table.Cell>{product.stock}</Table.Cell>                                                    
                            <Table.Cell>{product.category}</Table.Cell>
                            <Table.Cell>{product.brand}</Table.Cell>
                            <Table.Cell>{product.thumbnail}</Table.Cell>
                            <Table.Cell>
                                <Button onClick={()=>handleAddToCart(product)}>Sepete ekle</Button>
                            </Table.Cell>

                        </Table.Row>
                    ))}
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='6'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
