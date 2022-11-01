import Head from "next/head";
import Link from "next/link";

import Header from "@/root/components/ui/Header";
import Footer from "@/root/components/ui/Footer";
import { useEffect, useState } from "react";
import { getStates } from "../src/libs/utils";
import { api } from "../src/libs/api";
import FormInput from "../components/layout/FormInput";

export default function Home({ props }) {
    const [loading, toggleLoading] = useState(true);
    const [states, setStates] = useState([]);
    const [tributation, setTributation] = useState({});
    const [tributations, setTributations] = useState([]);


    const getTributations = async () => {
        try {
            toggleLoading(true)
            const res = await api.get("/tributations");
            const { data: tributations } = res;
            setTributations(tributations);
        } catch (error) {
            console.log(error)
        } finally {
            toggleLoading(false);
        }
    };

    const saveTributation = async (e) => {
        e.preventDefault();
        try {
            toggleLoading(true)
            console.log(tributation)
            const res = await api.post("/tributations", tributation);
            const { data: tributation_response } = res;
            setTributation(tributation_response);
        } catch (error) {
            console.log(error)
        } finally {
            toggleLoading(false);
        }
    };

    useEffect(() => {
        getTributations()
        setStates(getStates())
    }, []);

    useEffect(() => {
        console.log(tributation)
    }, [tributation]);


    const tributation_form = [];
    tributation_form.push({ type: "number", name: "ean_produto", label: "EAN", placeholder: "EAN DO PRODUTO", column_size: "col-md-4" });
    tributation_form.push({ type: "text", name: "segmento", label: "segmento", placeholder: "segmento", column_size: "col-md-8" });
    tributation_form.push({ type: "textarea", name: "descricao", label: "Descrição da tributação", placeholder: "Nome", rows: 4 });
    tributation_form.push({ type: "textarea", name: "desc_regra", label: "Descrição da regra", placeholder: "Nome", rows: 4 });
    tributation_form.push({ type: "radio", name: "importado", label: "importado", placeholder: "importado", column_size: "col-md-12" });
    tributation_form.push({ type: "number", name: "ncm", label: "ncm", placeholder: "ncm", column_size: "col-md-3" });
    tributation_form.push({ type: "number", name: "cfop_venda", label: "cfop venda", placeholder: "cfop venda", column_size: "col-md-3" });
    tributation_form.push({ type: "text", name: "ncmex", label: "ncmex", placeholder: "ncmex", column_size: "col-md-3" });
    tributation_form.push({ type: "number", name: "ipi", label: "ipi", placeholder: "ipi", column_size: "col-md-3" });
    tributation_form.push({ type: "number", name: "pis", label: "pis", placeholder: "pis", column_size: "col-md-3" });
    tributation_form.push({ type: "number", name: "cofins", label: "cofins", placeholder: "cofins", column_size: "col-md-3" });
    tributation_form.push({ type: "text", name: "cest", label: "cest", placeholder: "cest", column_size: "col-md-3" });
    tributation_form.push({ type: "number", name: "cod_beneficio", label: "codigo benefício", placeholder: "codigo benefício", column_size: "col-md-3" });
    tributation_form.push({ column_size: "col-md-12" });

    tributation_form.push({ title: "PIS/COFINS", column_size: "col-md-12" });
    tributation_form.push({ type: "number", name: "piscofins_situacao", label: "situacao", placeholder: "situacao", column_size: "col-md-6" });
    tributation_form.push({ type: "number", name: "piscofins_cst_entrada", label: "cst de entrada", placeholder: "cst de entrada", column_size: "col-md-4" });
    tributation_form.push({ type: "number", name: "piscofins_cst_saida", label: "cst de saída", placeholder: "cst de saída", column_size: "col-md-4" });
    tributation_form.push({ type: "number", name: "piscofins_naturezarec", label: "naturezarec", placeholder: "naturezarec", column_size: "col-md-4" });

    tributation_form.push({ title: "ICMS", column_size: "col-md-12" });
    tributation_form.push({ type: "number", name: "icms_entrada", label: "icms de entrada", placeholder: "icms de entrada", column_size: "col-md-4" });
    tributation_form.push({ type: "number", name: "icms_saida", label: "icms de saída", placeholder: "icms de saída", column_size: "col-md-4" });
    tributation_form.push({ type: "number", name: "icms_fcp", label: "icms fcp", placeholder: "icms fcp", column_size: "col-md-4" });
    tributation_form.push({ type: "number", name: "icms_saida_percentual_reducao", label: "icms de saída percentual redução", placeholder: "icms de saída percentual redução", column_size: "col-md-4" });
    tributation_form.push({ type: "number", name: "icms_saida_aliquota_cheia", label: "icms de saída aliquota cheia", placeholder: "icms de saída aliquota cheia", column_size: "col-md-4" });
    tributation_form.push({ type: "text", name: "icms_saida_cst", label: "icms de saída cst", placeholder: "icms de saída cst", column_size: "col-md-4" });
    tributation_form.push({ type: "text", name: "icms_saida_csosn", label: "icms de saída csosn", placeholder: "icms de saída csosn", column_size: "col-md-4" });
    tributation_form.push({ type: "number", name: "icms_saida_sublimite", label: "icms de saída sublimite", placeholder: "icms de saída sublimite", column_size: "col-md-4" });
    tributation_form.push({ type: "number", name: "icms_fcp_sublimite", label: "icms fcp sublimite", placeholder: "icms fcp sublimite", column_size: "col-md-4" });
    tributation_form.push({ type: "number", name: "icms_saida_cst_sublimite", label: "icms de saída cst sublimite", placeholder: "icms de saída cst sublimite", column_size: "col-md-4" });
    tributation_form.push({ type: "number", name: "icms_entrada_UF_cd", label: "icms entrada UF cd", placeholder: "icms entrada UF cd", column_size: "col-md-4" });
    tributation_form.push({ type: "number", name: "icms_entrada_UF_atacado", label: "icms entrada UF atacado", placeholder: "icms entrada UF atacado", column_size: "col-md-4" });
    tributation_form.push({ type: "number", name: "icms_entrada_UF_industria", label: "icms entrada UF industria", placeholder: "icms entrada UF industria", column_size: "col-md-4" });

    tributation_form.push({ title: "DESONERAÇÃO", column_size: "col-md-12" });
    tributation_form.push({ type: "text", name: "desoneracao_motivo", label: "desoneracao motivo", placeholder: "desoneracao motivo", column_size: "col-md-4" });
    tributation_form.push({ type: "text", name: "desoneracao_icms", label: "desoneracao icms", placeholder: "desoneracao icms", column_size: "col-md-4" });
    tributation_form.push({ type: "text", name: "desoneracao_fcp", label: "desoneracao fcp", placeholder: "desoneracao fcp", column_size: "col-md-4" });
    tributation_form.push({ type: "number", name: "desoneracao_descontar_icms", label: "desoneracao descontar icms", placeholder: "desoneracao descontar icms", column_size: "col-md-4" });
    tributation_form.push({ type: "number", name: "desoneracao_descontar_piscofins", label: "desoneracao descontar piscofins", placeholder: "desoneracao descontar pis e cofins", column_size: "col-md-5" });

    tributation_form.push({ title: "MVA", column_size: "col-md-12" });
    tributation_form.push({ type: "number", name: "mva", label: "mva", placeholder: "mva", column_size: "col-md-4" });
    tributation_form.push({ type: "number", name: "mva_importado", label: "mva importado", placeholder: "mva importado", column_size: "col-md-4" });
    tributation_form.push({ type: "number", name: "mva_ajustado_UF_atacado", label: "mva ajustado UF atacado", placeholder: "mva ajustado UF atacado", column_size: "col-md-4" });
    tributation_form.push({ type: "number", name: "mva_ajustado_UF_industria", label: "mva ajustado UF industria", placeholder: "mva ajustado UF industria", column_size: "col-md-4" });
    tributation_form.push({ type: "number", name: "mva_ajustado_UF_cd", label: "mva ajustado UF cd", placeholder: "mva ajustado UF cd", column_size: "col-md-4" });

    tributation_form.push({ title: "OUTROS", column_size: "col-md-12" });
    tributation_form.push({ type: "text", name: "lista", label: "lista", placeholder: "lista", column_size: "col-md-4" });
    tributation_form.push({ type: "text", name: "subitem", label: "subitem", placeholder: "subitem", column_size: "col-md-4" });
    tributation_form.push({ type: "text", name: "base_reduzida", label: "base reduzida", placeholder: "base reduzida", column_size: "col-md-4" });
    tributation_form.push({ type: "number", name: "modalidade_bc", label: "modalidade bc", placeholder: "modalidade bc", column_size: "col-md-4" });
    tributation_form.push({ type: "number", name: "pauta", label: "pauta", placeholder: "pauta", column_size: "col-md-4" });
    tributation_form.push({ type: "number", name: "pauta_valor", label: "pauta da valor", placeholder: "pauta da valor", column_size: "col-md-4" });
    tributation_form.push({ type: "number", name: "substituicao_tributaria", label: "substituicao tributaria", placeholder: "substituicao tributaria", column_size: "col-md-4" });
    tributation_form.push({ type: "number", name: "cesta_basica", label: "cesta basica", placeholder: "cesta basica", column_size: "col-md-4" });
    tributation_form.push({ type: "text", name: "codigo_anp", label: "codigo anp", placeholder: "codigo anp", column_size: "col-md-4" });

    return <main>
        <Header title={''} {...props} />

        {loading ? <div className="d-flex justify-content-center my-3">
            <i class="fad fa-spinner-third fa-spin fa-2x"></i>
        </div> : <section className="container-fluid container-lg p-3 d-flex flex-column gap-3">
            <form className="row g-3" onSubmit={saveTributation}>
                <div className="col-12">
                    <h1 className="text-uppercase h3">Adicionar Tributação</h1>
                    <hr />
                </div>
                {tributation_form.map((input, index) => {
                    return <div className={`col-12 ${input.column_size}`}>
                        <FormInput key={index} {...input} value={tributation[input.name]} controller={[tributation, setTributation]} />
                    </div>
                })}
                <button type="submit" className="btn btn-success fw-bold">Salvar</button>
            </form>
        </section>}

        <Footer title={''} {...props} />
    </main>
}
0