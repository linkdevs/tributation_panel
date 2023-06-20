import Header from '@/root/components/ui/Header';
import Masked from '@/root/src/libs/mask';
import { dateTimeMask, handleResponseError, priceMask } from '@/root/src/libs/utils';
import React, { useEffect, useState } from 'react';

// import { Container } from './styles';

function ListReceipts() {

    const [loading, toggleLoading] = useState(true);
    const [filters, setFilters] = useState({})
    const [receipts, setReceipts] = useState([
        {
            id: 1,
            key: '12345678901234567890123456789012345678901234',
            protocol: "132165461321",
            date: '2021-01-01',
            value: 1000,
            status: 'open',
            status_text: 'Aberta',
            status_color: 'warning',
            status_icon: 'exclamation-circle',

        }
    ]);

    const [error, setError] = useState(null);
    const [errorAlertCounter, setErrorAlertCounter] = useState(0);
    const errorHandler = (error) => {
        const message = handleResponseError(error);

        setError(message);
        var value = 0;
        const interval = setInterval(() => {
            value += 33.33

            setErrorAlertCounter(value)

            if (Math.ceil(value) >= 100) {
                clearInterval(interval);
                setError(null)
                value = 0
            }

        }, 2000);
    }

    const getReceipts = async () => {
        toggleLoading(true);
        try {


        } catch (error) {
            errorHandler(error);
        } finally {
            toggleLoading(false);
        }
    }

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Pesquisar');
    }

    useEffect(() => {
        getReceipts();
        errorHandler("100")
    }, []);


    return <>
        <Header />


        {error && <div className="position-absolute alert alert-danger mt-3 ms-3 w-25 p-0" style={{ minWidth: 300, top: "85%" }} role="alert">
            <div className="d-flex justify-content-between align-items-center p-3">
                <div className="">
                    {error}
                </div>
                <div>
                    <button className='btn' onClick={() => setError()}><i className='fad fa-times text-danger'></i></button>
                </div>
            </div>
            <div className="progress" style={{ height: 5 }}>
                <div className="progress-bar bg-danger" role="progressbar" style={{ width: errorAlertCounter + "%" }} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>}

        <div className="container py-3">
            <header className='d-flex align-items-center gap-3'>
                <i className="fad fa-receipt h1"></i>
                <h1 className="h2">Notas fiscais</h1>
            </header>

            <form onSubmit={handleSearch} className='row g-1'>
                <div className="col-12 col-md-8">
                    <input type="text" className="form-control" placeholder="Pesquisar por chave ou protocolo" />
                </div>
                <div className="col-12 col-md-3">
                    <select className="form-select">
                        <option selected>todos</option>
                        <option value="1">Filtro 1</option>
                    </select>
                </div>

                <div className="col-12 col-md-1">
                    <button type="submit" className="btn btn-primary w-100">
                        <i className="fad fa-search"></i>
                    </button>
                </div>
            </form>

            {loading ? <div className="d-flex justify-content-center align-items-center mt-5">
                <div className="spinner-border text-dark" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div> : <table className="table table-striped mt-3">
                <thead>
                    <tr>
                        <th scope="col">info</th>
                        <th scope="col">Data</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {receipts.map(receipt => (
                        <tr key={receipt.id}>
                            <td>
                                <div className="d-flex align-items-center gap-3">
                                    <div>
                                        <h5 className="h6">{receipt.key}</h5>
                                        <p className="mb-0">{receipt.protocol}</p>
                                    </div>
                                </div>
                            </td>
                            <td>{dateTimeMask(receipt.date)}</td>
                            <td>{priceMask(receipt.value)}</td>
                            <td>{receipt.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>}
        </div>
    </>;
}

export default ListReceipts;