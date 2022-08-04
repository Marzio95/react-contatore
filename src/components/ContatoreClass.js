import React from "react";

export class ContatoreClass extends React.Component {

   state = {
            contatore: 0
    };

    dec() {
        // this.setState({   // questo è il modo di cambiare lo stato di un componente non in redux
        //     contatore: this.state.contatore - 1
        // })

            this.setState( prev => ({  // prev è una variabile che contiene lo stato precedente, lo state precedente, FONDAMENTALE IN REDUX
                contatore: prev.contatore - 1
        }))
    }

    inc () {
           this.setState({   // questo è il modo di cambiare lo stato di un componente non in redux
            contatore: this.state.contatore + 1
        }) 
    }

    random() {
        const url = 'https://www.random.org/integers/?num=1&min=1&max=100&col=5&base=10&format=plain&rnd=new';
        const rnd = async () => {
            try {
                const res = await fetch(url);  // await serve per attendere che la promise sia risolta senza l'asincrono
                const data = await res.text();
                console.log(data);
                this.setState( prev => ({contatore: prev.contatore + parseInt(data)}));
            } 
            catch (e) { 
                console.log(e) 
            }
        }
        return rnd();
    }

    render() {
        return (
            <div>
                <h1>{this.state.contatore}</h1>
                <button onClick={() => this.inc()}>+</button>
                <button onClick={() => this.dec()}>-</button> {/*  in questo caso si usa un arrow function per avere il this che si riferisce all'oggetto */}
                <button onClick={() => this.random()}>Random</button>
            </div>
        )
    }
}