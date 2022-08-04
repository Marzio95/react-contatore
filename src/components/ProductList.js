import axios from "axios"; // se non metto il percorso cerca dentro node_modules
import React from "react";

export function ProductList() {

    const [products, setProducts] = React.useState([]);

    const loadProducts = () => {
        const url = 'http://localhost:4000/products';
        // METEDO BREVE DI RICHIESTA DI DATI
        axios.get(url)
                .then(response => setProducts(response.data));

        // METODO LUNGO
        // axios({
        //     method: 'GET',
        //     url, // url: url (se la chiave è uguale al valore posso mettere solo la chiave)
        // }).then(response => console.log(response.data));
    }

    return (
        <div>
            <h2>ProductList</h2>
            <button onClick={() => loadProducts()}>Carica Lista</button>

           {products.length > 0 && <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => {
                        return (
                            <tr key={product.id}>
                                <td>{index + 1}</td>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                            </tr>
                        )
                    })}
                </tbody>         
            </table>}
        </div>
    );
}