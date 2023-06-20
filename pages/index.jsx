import React, { useState } from 'react';
import Header from '../components/ui/Header';
import Head from 'next/head';
import Link from 'next/link';

// import { Container } from './styles';

function Index(props) {
    const [user, setUser] = useState(null);

    const [dash_data, setDashData] = useState({});

    const cards = [
        {
            title: 'Notas Fiscais', value: dash_data.total_orders, icon: "receipt", col: "col-md-4", color: 'warning', options: [
                { url: "receipts?type=open", title: 'Notas em Aberto', value: dash_data.total_orders, color: 'warning' },
                { url: "receipts?type=emitted", title: 'Notas Recebidas', value: dash_data.total_orders, color: 'warning' },
                { url: "receipts?type=cancelled", title: 'Notas Canceladas', value: dash_data.total_orders, color: 'warning' },
                { url: "receipts?type=unuse", title: 'Notas Inutilizadas', value: dash_data.total_orders, color: 'warning' }
            ]
        },
        {
            title: 'Produtos', value: dash_data.total_orders, icon: "boxes", col: "col-md-4", color: 'warning', options: [
                { title: 'Produtos Cadastrados', value: dash_data.total_orders, color: 'warning' },
                { title: 'Produtos em Falta', value: dash_data.total_orders, color: 'warning' },
                { title: 'Produtos em Estoque', value: dash_data.total_orders, color: 'warning' },
                { title: 'Produtos em Promoção', value: dash_data.total_orders, color: 'warning' }
            ]
        },
        {
            title: 'Clientes', value: dash_data.total_orders, icon: "users", col: "col-md-4", color: 'warning', options: [
                { title: 'Clientes Cadastrados', value: dash_data.total_orders, color: 'warning' },
                // { title: 'Clientes em Falta', value: dash_data.total_orders, color: 'warning' },
                // { title: 'Clientes em Estoque', value: dash_data.total_orders, color: 'warning' },
                // { title: 'Clientes em Promoção', value: dash_data.total_orders, color: 'warning' }
            ]
        },
        {
            title: "Pagamentos", value: dash_data.total_orders, icon: "credit-card", col: "col-md-4", color: 'warning', options: [
                { title: "Ver todos", value: dash_data.total_orders, color: 'warning' },
                { title: "em Aberto", value: dash_data.total_orders, color: 'warning' },
                { title: "Recebidos", value: dash_data.total_orders, color: 'warning' },
                { title: "Cancelados", value: dash_data.total_orders, color: 'warning' }
            ]
        },

    ]


    return <>
        <Head>
            <title>Link tributos | Página inicial</title>
        </Head>
        <Header title={''} {...props} />
        <div style={{ backgroundColor: "#eeeeee", height: "100%", minHeight: "calc(100vh - 60px)" }}>
            <div className="container py-3">
                <div className="row g-2">
                    {cards.map((card, index) => (<div className={`col-12 ${card.col}`}>
                        <div className={`card card-${card.color}`}>
                            <article className="card-body">
                                <header className="d-flex gap-2">
                                    <i className={`fad fa-${card.icon} h4 m-0`}></i>
                                    <h4 className="card-title">{card.title}</h4>
                                </header>
                                <div className="row gap-2">
                                    {card.options && card.options.map((option, index) => (<div className={`col-12 ${option.col}`}>
                                        <div className={`card card-${option.color}`}>
                                            <Link href={option.url ?? ""}>
                                                <article className="card-body d-flex justify-content-between align-items-center">
                                                    <header className="d-flex gap-2">
                                                        <h6 className="card-title m-0">{option.title}</h6>
                                                    </header>

                                                    <footer>
                                                        <i className="fad fa-chevron-right"></i>
                                                    </footer>
                                                </article>
                                            </Link>
                                        </div>
                                    </div>))}
                                </div>
                            </article>
                        </div>
                    </div>))}
                </div>
            </div >
        </div >
    </>;
}

export default Index;