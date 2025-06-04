// Banco de dados de exames (categorias e exames)
const examCategories = [
    { id: "hemograma-leucograma", name: "Hemograma e Leucograma" },
    { id: "perfil-metabolico-cardiovascular", name: "Perfil Metabólico e Cardiovascular" },
    { id: "perfil-hepatico", name: "Perfil Hepático" },
    { id: "perfil-tireoideano", name: "Perfil Tireoideano" },
    { id: "adrenal", name: "Adrenal" },
    { id: "adequacao-calcio", name: "Adequação Cálcio" },
    { id: "minerais-vitaminas", name: "Minerais e Vitaminas" },
    { id: "hormonios-masculinos", name: "Hormônios Masculinos" },
    { id: "hormonios-femininos", name: "Hormônios Femininos" },
    { id: "metais-toxicos", name: "Metais Tóxicos" },
    { id: "urina", name: "Urina" },
    { id: "saude-intestinal", name: "Saúde Intestinal" }
];

const allExams = {
    // Hemograma e Leucograma
    "eritrocitos": { name: "Eritrócitos", unit: "× 10⁶/mm³", reference: { M: "4,5-6", F: "4-5,5" }, ideal: { M: "4,5-6", F: "4-5,5" }, category: "hemograma-leucograma" },
    "hemoglobina": { name: "Hemoglobina", unit: "g/dL", reference: { M: "13-17", F: "12-15,5" }, ideal: { M: "14-16", F: "13,5-15,5" }, category: "hemograma-leucograma" },
    "hematocrito": { name: "Hematócrito", unit: "%", reference: { M: "39-52", F: "36-47" }, ideal: { M: "42-48", F: "39-47" }, category: "hemograma-leucograma" },
    "vcm": { name: "VCM", unit: "fl", reference: "80-98", ideal: "88-92", category: "hemograma-leucograma" },
    "hcm": { name: "HCM", unit: "pg", reference: "26-34", ideal: "27-33", category: "hemograma-leucograma" },
    "chcm": { name: "CHCM", unit: "g/dL", reference: "31-36", ideal: "31-35", category: "hemograma-leucograma" },
    "rdw": { name: "RDW", unit: "%", reference: "11,5-14,5", ideal: "11,5-13", category: "hemograma-leucograma" },
    "vsg": { name: "VSG", unit: "mm", reference: "< 15", ideal: "<10 – 1 hora", category: "hemograma-leucograma" },
    "leucocitos": { name: "Leucócitos", unit: "/mm³", reference: "3500-10500", ideal: "4000-6500", category: "hemograma-leucograma" },
    "neutrofilos": { name: "Neutrófilos", unit: "%", reference: "1700-7000/mm³", ideal: "45-55%", category: "hemograma-leucograma" },
    "linfocitos": { name: "Linfócitos", unit: "%", reference: "900-2900/mm³", ideal: "25-35%", category: "hemograma-leucograma" },
    "rel-neutro-linfo": { name: "Rel. Neutrófilos/Linfócitos", unit: "", reference: "N/A", ideal: "1-1,5", category: "hemograma-leucograma", calculated: true, dependencies: ["neutrofilos", "linfocitos"] },
    "monocitos": { name: "Monócitos", unit: "%", reference: "100-1000/mm³", ideal: "3-8%", category: "hemograma-leucograma" },
    "eosinofilos": { name: "Eosinófilos", unit: "%", reference: "50-500/mm³", ideal: "<1%", category: "hemograma-leucograma" },
    "basofilos": { name: "Basófilos", unit: "%", reference: "25-80/mm³", ideal: "<0,5%", category: "hemograma-leucograma" },
    "plaquetas": { name: "Plaquetas", unit: "/mm³", reference: "150.000-450.000", ideal: "200.000-300.000", category: "hemograma-leucograma" },
    "saturacao-transferrina": { name: "Saturação da Transferrina", unit: "%", reference: "20-50", ideal: "25-40", category: "hemograma-leucograma" },
    "capacidade-total-ligacao-ferro": { name: "Capacidade total de ligação de ferro", unit: "mcg/dL", reference: "250-450", ideal: "2º e 3º quartil", category: "hemograma-leucograma" },
    "transferrina": { name: "Transferrina", unit: "mg/dL", reference: "200-360", ideal: "2º e 3º quartil", category: "hemograma-leucograma" },
    "ferritina": { name: "Ferritina", unit: "mcg/L", reference: { M: "30-300", F: "30-200" }, ideal: { M: "70-200", F: "70-150" }, category: "hemograma-leucograma" },
    "b12": { name: "B12", unit: "ng/L", reference: "300-900", ideal: "500-900", category: "hemograma-leucograma", notes: "Também medido em pg/mL" },
    "acido-folico": { name: "Ácido Fólico", unit: "ng/mL", reference: ">3,9", ideal: "12-20", category: "hemograma-leucograma" },
    "holotranscobalamina": { name: "Holotranscobalamina", unit: "pmol/L", reference: "> 50", ideal: ">60", category: "hemograma-leucograma" },
    "acido-metilmalonico": { name: "Ácido metilmalônico", unit: "mmol/L", reference: "N/A", ideal: "<220", category: "hemograma-leucograma" },
    "homocisteina": { name: "Homocisteína", unit: "umol/L", reference: "3-14", ideal: "5-9", category: "hemograma-leucograma" },
    
    // Perfil Metabólico e Cardiovascular
    "glicose": { name: "Glicose jejum", unit: "mg/dL", reference: "70-110", ideal: "75-90 (<100 em DM)", category: "perfil-metabolico-cardiovascular" },
    "hba1c": { name: "HbA1C", unit: "%", reference: "4,7-6,5", ideal: "5-5,3", category: "perfil-metabolico-cardiovascular", notes: "Atenção: valores <5 podem indicar hiperinsulinismo" },
    "insulina": { name: "Insulina jejum", unit: "mcUI/mL", reference: "5-25", ideal: "<8", category: "perfil-metabolico-cardiovascular" },
    "pro-insulina": { name: "Pró-insulina", unit: "pmol/L", reference: "até 19,1", ideal: "<10", category: "perfil-metabolico-cardiovascular" },
    "homa-ir": { name: "HOMA-IR", unit: "", reference: "inferior a 2,15", ideal: "Ao redor de 1", category: "perfil-metabolico-cardiovascular", calculated: true, dependencies: ["glicose", "insulina"] },
    "homa-beta": { name: "HOMA-BETA", unit: "", reference: "entre 167 e 175", ideal: "Ao redor de 100", category: "perfil-metabolico-cardiovascular", notes: "Só utilizar este índice em pacientes insulino resistentes", calculated: true, dependencies: ["glicose", "insulina"] },
    "ttg-glicose-1h": { name: "TTG Glicose 1h após 75g", unit: "mg/dL", reference: "120-180", ideal: "Até 140", category: "perfil-metabolico-cardiovascular" },
    "ttg-glicose-2h": { name: "TTG Glicose 2h após 75g", unit: "mg/dL", reference: "85-140", ideal: "Ao redor de 100", category: "perfil-metabolico-cardiovascular" },
    "ttg-glicose-3h": { name: "TTG Glicose 3h após 75g", unit: "mg/dL", reference: "-", ideal: "Similar ao jejum", category: "perfil-metabolico-cardiovascular" },
    "ttg-insulina-1h": { name: "TTG Insulina 1h após 75g", unit: "mcUI/mL", reference: "29-88", ideal: "Até 50", category: "perfil-metabolico-cardiovascular" },
    "ttg-insulina-2h": { name: "TTG Insulina 2h após 75g", unit: "mcUI/mL", reference: "22-79", ideal: "Até 25", category: "perfil-metabolico-cardiovascular" },
    "ttg-insulina-3h": { name: "TTG Insulina 3h após 75g", unit: "mcUI/mL", reference: "-", ideal: "Similar ao jejum", category: "perfil-metabolico-cardiovascular" },
    "colesterol-total": { name: "Colesterol Total (CT)", unit: "mg/dL", reference: "<200", ideal: "<200 (>240=alto)", category: "perfil-metabolico-cardiovascular" },
    "hdl": { name: "HDL", unit: "mg/dL", reference: { M: ">45", F: ">40" }, ideal: { M: "50-73", F: "60-93" }, category: "perfil-metabolico-cardiovascular" },
    "ldl": { name: "LDL", unit: "mg/dL", reference: "<130", ideal: "<100 (130-159 limítrofe, >190 muito alto)", category: "perfil-metabolico-cardiovascular" },
    "rel-ct-hdl": { name: "Relação CT/HDL", unit: "", reference: "N/A", ideal: "<3,3", category: "perfil-metabolico-cardiovascular", calculated: true, dependencies: ["colesterol-total", "hdl"] },
    "rel-tg-hdl": { name: "Relação TG/HDL", unit: "", reference: "<2,5", ideal: { M: "<1,38", F: "<1,15" }, category: "perfil-metabolico-cardiovascular", calculated: true, dependencies: ["triglicerides", "hdl"] },
    "rel-ldl-hdl": { name: "Relação LDL/HDL", unit: "", reference: "N/A", ideal: "<2,3", category: "perfil-metabolico-cardiovascular", calculated: true, dependencies: ["ldl", "hdl"] },
    "triglicerides": { name: "Triglicérides", unit: "mg/dL", reference: "< 250", ideal: "<100", category: "perfil-metabolico-cardiovascular" },
    "apo-a1": { name: "Apo A1", unit: "mg/dL", reference: { M: "88-180", F: "98-210" }, ideal: { M: ">130", F: ">145" }, category: "perfil-metabolico-cardiovascular" },
    "apo-b": { name: "Apo B", unit: "mg/dL", reference: { M: "55-151", F: "44-148" }, ideal: "<100", category: "perfil-metabolico-cardiovascular" },
    "rel-apo-b-apo-a1": { name: "Relação Apo B/Apo A1", unit: "", reference: "N/A", ideal: { M: "<0,69", F: "<0,59" }, category: "perfil-metabolico-cardiovascular", calculated: true, dependencies: ["apo-b", "apo-a1"] },
    "fibrinogenio": { name: "Fibrinogênio", unit: "mg/dL", reference: "150-350", ideal: "<250 (risco baixo), 250-400 (médio risco), >400 (alto risco)", category: "perfil-metabolico-cardiovascular" },
    "lipoproteina-a": { name: "Lipoproteína (a)", unit: "mg/dL", reference: "≤ 30", ideal: "<15 (baixo risco), 15-30 (médio), >30 (alto risco)", category: "perfil-metabolico-cardiovascular" },
    "lp-pla2": { name: "Lp-PLA2", unit: "ng/mL", reference: "120-342", ideal: "<201", category: "perfil-metabolico-cardiovascular" },
    "ldl-oxidado": { name: "LDL oxidado", unit: "EU/mL", reference: "Negativo: < 20,0; Positivo: > 25,0", ideal: "Negativo: H <30, M <45", category: "perfil-metabolico-cardiovascular" },
    "adiponectina": { name: "Adiponectina", unit: "mcg/mL", reference: "1,5-25,00", ideal: ">15", category: "perfil-metabolico-cardiovascular" },
    "pcr-ultrassensivel": { name: "PCR ultrassensível", unit: "mg/L", reference: "<5", ideal: "<1 (baixo risco CV), 1-3 (moderado), >3 (alto risco CV)", category: "perfil-metabolico-cardiovascular" },
    "mieloperoxidase": { name: "Mieloperoxidase", unit: "pmol/L", reference: "Baixo risco <470, Médio risco 470-539", ideal: "<470", category: "perfil-metabolico-cardiovascular" },
    "acido-urico": { name: "Ácido Úrico", unit: "mg/dL", reference: "2,5-8", ideal: { M: "<4,9", F: "<3,9" }, category: "perfil-metabolico-cardiovascular" },
    "creatinina": { name: "Creatinina no soro", unit: "mg/dL", reference: "0,7-1,3", ideal: "0,8-1,2 (proporcional à massa magra)", category: "perfil-metabolico-cardiovascular" },
    "ureia": { name: "Ureia", unit: "mg/dL", reference: "25-45", ideal: "35-45", category: "perfil-metabolico-cardiovascular" },
    "microalbuminuria": { name: "Microalbuminúria", unit: "mg/24h", reference: "< 30", ideal: "<8 mcg/mg creat. (ideal ZERO)", category: "perfil-metabolico-cardiovascular", notes: "Também medido como Alb/creat < 20 mcg/24h" },
    "coenzima-q10": { name: "Coenzima Q10", unit: "mg/L", reference: "0,40-1,10", ideal: ">1", category: "perfil-metabolico-cardiovascular", notes: "Também medido em umol/L (0,4-1,0), ideal > 0,86" },
    
    // Perfil Hepático
    "gama-gt": { name: "Gama GT", unit: "U/L", reference: "5-50", ideal: { M: "< 22", F: "<18" }, category: "perfil-hepatico" },
    "tgo": { name: "TGO", unit: "U/L", reference: "0-35", ideal: { M: "17,1-30,9", F: "16,1-29,9" }, category: "perfil-hepatico" },
    "tgp": { name: "TGP", unit: "U/L", reference: "0-35", ideal: { M: "14-35", F: "13-31" }, category: "perfil-hepatico" },
    "fosfatase-alcalina": { name: "Fosfatase Alcalina", unit: "U/L", reference: "36-150", ideal: "50-75", category: "perfil-hepatico" },
    "bilirrubina-total": { name: "Bilirrubina Total", unit: "mg/dL", reference: "0,3-1,2", ideal: ">0,8 (quanto maior, menor risco)", category: "perfil-hepatico" },
    "bilirrubina-direta": { name: "Bilirrubina Direta", unit: "mg/dL", reference: "<0,3", ideal: "Pacientes com >0,31 = menor risco", category: "perfil-hepatico", notes: "Apenas dois estudos considerados" },
    "bilirrubina-indireta": { name: "Bilirrubina Indireta", unit: "mg/dL", reference: "<0,8", ideal: "Pacientes com 1,07 = menor risco", category: "perfil-hepatico", notes: "Apenas um estudo considerado", calculated: true, dependencies: ["bilirrubina-total", "bilirrubina-direta"] },
    "albumina": { name: "Albumina sérica", unit: "g/dL", reference: "3,5-5,4", ideal: "4,4-5,5 (ao redor de 4,5-5 parece ótimo)", category: "perfil-hepatico" },
    
    // Perfil Tireoideano
    "tsh": { name: "TSH", unit: "mcUI/mL", reference: "0,3-4,2", ideal: "1-2,5", category: "perfil-tireoideano" },
    "t4-total": { name: "T4 total", unit: "mcg/dL", reference: "5-12", ideal: "2º e 3º quartil", category: "perfil-tireoideano" },
    "t4-livre": { name: "T4 livre", unit: "ng/dL", reference: "0,7-1,9", ideal: "0,9-1,3", category: "perfil-tireoideano", notes: "Também medido em pg/mL (7-19)" },
    "t3-total": { name: "T3 total", unit: "ng/dL", reference: "80-200", ideal: "120-160", category: "perfil-tireoideano" },
    "t3-livre": { name: "T3 livre", unit: "pg/mL", reference: "2,5-3,9", ideal: "3-3,4", category: "perfil-tireoideano" },
    "t3-reverso": { name: "T3 reverso", unit: "ng/mL", reference: "0,1-0,35", ideal: "0,1-0,25", category: "perfil-tireoideano" },
    "rel-t3-total-t3-reverso": { name: "Rel. T3 total/T3 reverso", unit: "", reference: "N/A", ideal: "Ao redor de 6", category: "perfil-tireoideano", calculated: true, dependencies: ["t3-total", "t3-reverso"] },
    "rel-t3-livre-t4-livre": { name: "Rel. T3 livre/T4 livre", unit: "", reference: "N/A", ideal: ">0,31", category: "perfil-tireoideano", notes: "Também pode ser >3,1 ou >31 conforme unidade utilizada", calculated: true, dependencies: ["t3-livre", "t4-livre"] },
    "anti-tpo": { name: "Anticorpos Anti-TPO", unit: "U/mL", reference: "< 34", ideal: "Negativo", category: "perfil-tireoideano", notes: "O importante é dar abaixo do valor de referência" },
    "anti-tg": { name: "Anticorpos Anti-TG", unit: "U/mL", reference: "< 100", ideal: "Negativo", category: "perfil-tireoideano", notes: "O importante é dar abaixo do valor de referência" },
    "tireoglobulina": { name: "Tiroglobulina", unit: "ng/mL", reference: "< 40", ideal: "8-13 (ótimo 11,5)", category: "perfil-tireoideano" },
    "iodo-urina": { name: "Iodo Urina (1ª urina da manhã ou 24h)", unit: "mcg/L", reference: "N/A", ideal: "200-300", category: "perfil-tireoideano" },
    "iodo-urina-lemos": { name: "Iodo urina (amostra – lab. Lemos)", unit: "mcg/L", reference: "51-536", ideal: "294-536", category: "perfil-tireoideano" },
    "iodo-salivar-lemos": { name: "Iodo Salivar (amostra – lab. Lemos)", unit: "mcg/L", reference: "51-536", ideal: "294-536", category: "perfil-tireoideano" },
    "rel-saliva-urina-iodo": { name: "Rel. Saliva/Urina-Lab Lemos", unit: "", reference: "0,85-2,20", ideal: "0,85-2,20", category: "perfil-tireoideano", calculated: true, dependencies: ["iodo-salivar-lemos", "iodo-urina-lemos"] },
    
    // Adrenal
    "cortisol-serico": { name: "Cortisol sérico até 1h pós despertar", unit: "mg/dL", reference: "5-20", ideal: "10-20", category: "adrenal" },
    "cortisol-salivar-total": { name: "Cortisol salivar: Total", unit: "ng/dL", reference: "N/A", ideal: "<1500", category: "adrenal" },
    "cortisol-salivar-manha": { name: "Cortisol salivar: Manhã", unit: "ng/dL", reference: "130-640", ideal: "130-640", category: "adrenal" },
    "cortisol-salivar-tarde": { name: "Cortisol salivar: Tarde", unit: "ng/dL", reference: "70-300", ideal: "70-300", category: "adrenal" },
    "cortisol-salivar-noite": { name: "Cortisol salivar: Noite", unit: "ng/dL", reference: "<100", ideal: "<100", category: "adrenal" },
    "dhea": { name: "DHEA", unit: "mcg/dL", reference: { M: "180-1250", F: "130-980" }, ideal: { M: "350-500", F: "250-400" }, category: "adrenal" },
    "dhea-s": { name: "DHEA-S", unit: "mcg/dL", reference: { M: "130-550", F: "65-380" }, ideal: { M: "350-500", F: "250-400" }, category: "adrenal" },
    "pregnenolona": { name: "Pregnenolona", unit: "ng/dL", reference: "<150", ideal: { M: "100-150", F: "100-150" }, category: "adrenal" },
    
    // Adequação Cálcio
    "calcio-total": { name: "Cálcio Total", unit: "mg/dL", reference: "8,5-10,5", ideal: "9,2-10", category: "adequacao-calcio" },
    "calcio-ionico": { name: "Cálcio Iônico", unit: "mg/dL", reference: "4,6-5,3", ideal: "4,8-5,2", category: "adequacao-calcio" },
    "pth": { name: "PTH", unit: "pg/mL", reference: "10-65", ideal: "15-35", category: "adequacao-calcio" },
    "vitamina-d-25oh": { name: "Vitamina D (25-OH)", unit: "ng/mL", reference: "30-100", ideal: "40-60", category: "adequacao-calcio" },
    "vitamina-d-125oh": { name: "Vitamina D (1,25-OH)", unit: "pg/mL", reference: "15-60", ideal: "30-45", category: "adequacao-calcio" },
    "rel-125d3-25d3": { name: "Rel. 1,25-D3/25-D3", unit: "", reference: "N/A", ideal: "<1,2", category: "adequacao-calcio", calculated: true, dependencies: ["vitamina-d-125oh", "vitamina-d-25oh"] },
    "calcio-urina-24h": { name: "Cálcio Urina 24h", unit: "mg/24h", reference: "100-300", ideal: "100-250", category: "adequacao-calcio" },
    "rel-calcio-creatinina-urina": { name: "Rel. Cálcio/Creatinina Urina", unit: "", reference: "<0,2", ideal: "<0,14", category: "adequacao-calcio", calculated: true, dependencies: ["calcio-urina-24h", "creatinina-urina-24h"] }, // Depende de creatinina urinária
    "creatinina-urina-24h": { name: "Creatinina Urina 24h", unit: "mg/24h", reference: "800-1800", ideal: "800-1800", category: "adequacao-calcio" }, // Exame auxiliar para cálculo

    // Minerais e Vitaminas
    "magnesio-serico": { name: "Magnésio Sérico", unit: "mg/dL", reference: "1,6-2,6", ideal: "2-2,3", category: "minerais-vitaminas" },
    "magnesio-eritrocitario": { name: "Magnésio Eritrocitário", unit: "mg/dL", reference: "4,2-6,8", ideal: "5,2-6,8", category: "minerais-vitaminas" },
    "fosforo": { name: "Fósforo", unit: "mg/dL", reference: "2,5-4,5", ideal: "3-4", category: "minerais-vitaminas" },
    "zinco-serico": { name: "Zinco Sérico", unit: "mcg/dL", reference: "70-120", ideal: "90-120", category: "minerais-vitaminas" },
    "zinco-eritrocitario": { name: "Zinco Eritrocitário", unit: "mcg/g Hb", reference: "40-50", ideal: "40-50", category: "minerais-vitaminas" },
    "cobre-serico": { name: "Cobre Sérico", unit: "mcg/dL", reference: "70-140", ideal: "80-120", category: "minerais-vitaminas" },
    "ceruloplasmina": { name: "Ceruloplasmina", unit: "mg/dL", reference: "20-60", ideal: "20-35", category: "minerais-vitaminas" },
    "selenio": { name: "Selênio", unit: "mcg/L", reference: "50-120", ideal: "90-120", category: "minerais-vitaminas" },
    "manganes": { name: "Manganês", unit: "mcg/L", reference: "0,4-1,4", ideal: "0,8-1,2", category: "minerais-vitaminas" },
    "cromo": { name: "Cromo", unit: "mcg/L", reference: "0,1-0,5", ideal: "0,3-0,5", category: "minerais-vitaminas" },
    "molibdenio": { name: "Molibdênio", unit: "mcg/L", reference: "0,1-0,6", ideal: "0,3-0,6", category: "minerais-vitaminas" },
    "vanadio": { name: "Vanádio", unit: "mcg/L", reference: "<0,2", ideal: "<0,1", category: "minerais-vitaminas" },
    "potassio-serico": { name: "Potássio Sérico", unit: "mEq/L", reference: "3,5-5,1", ideal: "4-4,5", category: "minerais-vitaminas" },
    "potassio-eritrocitario": { name: "Potássio Eritrocitário", unit: "mEq/L", reference: "N/A", ideal: "85-95", category: "minerais-vitaminas" },
    "vitamina-a": { name: "Vitamina A (Retinol)", unit: "mcg/dL", reference: "30-80", ideal: "50-80", category: "minerais-vitaminas" },
    "vitamina-e": { name: "Vitamina E (Tocoferol)", unit: "mg/L", reference: "5-20", ideal: "10-18", category: "minerais-vitaminas" },
    "vitamina-k": { name: "Vitamina K", unit: "ng/mL", reference: "0,13-1,89", ideal: "0,5-1,5", category: "minerais-vitaminas" },
    "vitamina-c": { name: "Vitamina C", unit: "mg/dL", reference: "0,4-2,0", ideal: "1-1,5", category: "minerais-vitaminas" },
    "vitamina-b1": { name: "Vitamina B1 (Tiamina)", unit: "nmol/L", reference: "70-180", ideal: "100-150", category: "minerais-vitaminas" },
    "vitamina-b2": { name: "Vitamina B2 (Riboflavina)", unit: "mcg/dL", reference: "4-24", ideal: "10-20", category: "minerais-vitaminas" },
    "vitamina-b3": { name: "Vitamina B3 (Niacina)", unit: "mg/L", reference: "0,5-8,45", ideal: "3-8", category: "minerais-vitaminas" },
    "vitamina-b5": { name: "Vitamina B5 (Ác. Pantotênico)", unit: "ng/mL", reference: "200-1200", ideal: "400-1000", category: "minerais-vitaminas" },
    "vitamina-b6": { name: "Vitamina B6 (Piridoxina)", unit: "mcg/L", reference: "5-50", ideal: "20-40", category: "minerais-vitaminas" },
    "biotina": { name: "Biotina", unit: "ng/mL", reference: "0,2-1,2", ideal: "0,5-1", category: "minerais-vitaminas" },

    // Hormônios Masculinos
    "testosterona-total-m": { name: "Testosterona Total", unit: "ng/dL", reference: "240-850", ideal: "500-750", category: "hormonios-masculinos" },
    "testosterona-livre-m": { name: "Testosterona Livre", unit: "pg/mL", reference: "32-168", ideal: "100-150", category: "hormonios-masculinos" },
    "testosterona-biodisponivel-m": { name: "Testosterona Biodisponível", unit: "ng/dL", reference: "72-440", ideal: "250-400", category: "hormonios-masculinos" },
    "shbg-m": { name: "SHBG", unit: "nmol/L", reference: "10-57", ideal: "20-35", category: "hormonios-masculinos" },
    "dht": { name: "DHT", unit: "ng/dL", reference: "25-99", ideal: "50-80", category: "hormonios-masculinos" },
    "estradiol-m": { name: "Estradiol", unit: "pg/mL", reference: "<50", ideal: "20-35", category: "hormonios-masculinos" },
    "prolactina-m": { name: "Prolactina", unit: "ng/mL", reference: "2-18", ideal: "5-10", category: "hormonios-masculinos" },
    "lh-m": { name: "LH", unit: "mUI/mL", reference: "1,5-9,3", ideal: "4-7", category: "hormonios-masculinos" },
    "fsh-m": { name: "FSH", unit: "mUI/mL", reference: "1,4-18,1", ideal: "4-8", category: "hormonios-masculinos" },

    // Hormônios Femininos
    "estradiol-f": { name: "Estradiol", unit: "pg/mL", reference: "Fase Folicular: 20-150, Pico Ovulatório: 150-400, Fase Lútea: 50-250, Pós-Menopausa: <30", ideal: "Fase Folicular: 50-100, Fase Lútea: 100-200", category: "hormonios-femininos" },
    "progesterona-f": { name: "Progesterona", unit: "ng/mL", reference: "Fase Folicular: <1, Fase Lútea: 5-20, Pós-Menopausa: <1", ideal: "Fase Lútea: 10-20", category: "hormonios-femininos" },
    "testosterona-total-f": { name: "Testosterona Total", unit: "ng/dL", reference: "15-70", ideal: "30-50", category: "hormonios-femininos" },
    "testosterona-livre-f": { name: "Testosterona Livre", unit: "pg/mL", reference: "0,8-10", ideal: "2-5", category: "hormonios-femininos" },
    "shbg-f": { name: "SHBG", unit: "nmol/L", reference: "18-114", ideal: "50-80", category: "hormonios-femininos" },
    "prolactina-f": { name: "Prolactina", unit: "ng/mL", reference: "3-25", ideal: "5-15", category: "hormonios-femininos" },
    "lh-f": { name: "LH", unit: "mUI/mL", reference: "Fase Folicular: 2-10, Pico Ovulatório: 15-60, Fase Lútea: 1-12, Pós-Menopausa: >20", ideal: "Fase Folicular: 4-7, Fase Lútea: 3-8", category: "hormonios-femininos" },
    "fsh-f": { name: "FSH", unit: "mUI/mL", reference: "Fase Folicular: 3-12, Pico Ovulatório: 8-22, Fase Lútea: 1-8, Pós-Menopausa: >30", ideal: "Fase Folicular: 5-8", category: "hormonios-femininos" },

    // Metais Tóxicos
    "aluminio-serico": { name: "Alumínio Sérico", unit: "mcg/L", reference: "<10", ideal: "<5", category: "metais-toxicos" },
    "arsenio-urinario": { name: "Arsênio Urinário", unit: "mcg/g creat.", reference: "<50", ideal: "<10", category: "metais-toxicos" },
    "cadmio-sanguineo": { name: "Cádmio Sanguíneo", unit: "mcg/L", reference: "<1", ideal: "<0,5", category: "metais-toxicos" },
    "chumbo-sanguineo": { name: "Chumbo Sanguíneo", unit: "mcg/dL", reference: "<10", ideal: "<2", category: "metais-toxicos" },
    "mercurio-sanguineo": { name: "Mercúrio Sanguíneo", unit: "mcg/L", reference: "<5", ideal: "<2", category: "metais-toxicos" },
    "mercurio-urinario": { name: "Mercúrio Urinário", unit: "mcg/g creat.", reference: "<20", ideal: "<5", category: "metais-toxicos" },

    // Urina
    "ph-urina": { name: "pH Urina", unit: "", reference: "4,5-8,0", ideal: "6,0-6,5", category: "urina" },
    "densidade-urina": { name: "Densidade Urina", unit: "", reference: "1,005-1,030", ideal: "1,015-1,025", category: "urina" },

    // Saúde Intestinal
    "zonulina-serica": { name: "Zonulina Sérica", unit: "ng/mL", reference: "Depende do método", ideal: "Valores mais baixos", category: "saude-intestinal", notes: "Consultar valores de referência do laboratório" },
    "calprotectina-fecal": { name: "Calprotectina Fecal", unit: "mcg/g", reference: "<50", ideal: "<50", category: "saude-intestinal" },
    "elastase-pancreatica-fecal": { name: "Elastase Pancreática Fecal", unit: "mcg/g", reference: ">200", ideal: ">500", category: "saude-intestinal" }
};

// Variáveis globais
let addedExams = new Set();
let examData = {}; // Armazena os valores dos exames
let currentModalExamId = null;
let isAddingExam = false; // Flag para diferenciar adição de edição no modal

// Função para obter valor baseado no gênero
function getValueByGender(value, gender) {
    if (typeof value === 'object' && value !== null && (value.M || value.F)) {
        return gender === 'F' ? (value.F || value.M || 'N/A') : (value.M || value.F || 'N/A');
    }
    return value !== undefined && value !== null ? String(value) : 'N/A';
}

// Função para calcular valores dependentes
function calculateDependentValue(examId, currentValues) {
    const exam = allExams[examId];
    if (!exam || !exam.calculated || !exam.dependencies) return null;

    const depValues = exam.dependencies.map(depId => {
        const inputElement = document.getElementById(`exam-value-${depId}`);
        return inputElement ? parseFloat(inputElement.value) : NaN;
    });

    if (depValues.some(isNaN)) return null; // Se alguma dependência não for número, retorna null

    try {
        switch (examId) {
            case "rel-neutro-linfo":
                return (depValues[0] / depValues[1]).toFixed(2);
            case "homa-ir": // Glicose (mg/dL) * Insulina (µU/mL) / 405
                return (depValues[0] * depValues[1] / 405).toFixed(2);
            case "homa-beta": // (20 * Insulina (µU/mL)) / (Glicose (mg/dL) - 3.5)
                 // Converter Glicose para mmol/L (dividir por 18)
                 const glicoseMmol = depValues[0] / 18;
                 if (glicoseMmol <= 3.5) return "Inválido"; // Evita divisão por zero ou negativo
                 return ((20 * depValues[1]) / (glicoseMmol - 3.5)).toFixed(2);
            case "rel-ct-hdl":
                return (depValues[0] / depValues[1]).toFixed(2);
            case "rel-tg-hdl":
                return (depValues[0] / depValues[1]).toFixed(2);
            case "rel-ldl-hdl":
                return (depValues[0] / depValues[1]).toFixed(2);
            case "rel-apo-b-apo-a1":
                return (depValues[0] / depValues[1]).toFixed(2);
            case "bilirrubina-indireta":
                return (depValues[0] - depValues[1]).toFixed(2);
            case "rel-t3-total-t3-reverso":
                // Ajustar unidades se necessário (ex: T3 total ng/dL, T3 reverso ng/mL)
                // Assumindo que T3 total está em ng/dL e T3 reverso em ng/mL (1 ng/mL = 100 ng/dL)
                // Se T3 reverso estiver em ng/dL, a conversão não é necessária.
                // Vamos assumir que ambos estão em ng/dL para simplificar, ou que a conversão já foi feita no input.
                // Se T3 reverso for 0, retorna inválido
                if (depValues[1] === 0) return "Inválido";
                return (depValues[0] / depValues[1]).toFixed(2);
            case "rel-t3-livre-t4-livre":
                 // T3 livre (pg/mL), T4 livre (ng/dL). Converter T4 livre para pg/mL (1 ng/dL = 10 pg/mL)
                 const t4LivrePgMl = depValues[1] * 10;
                 if (t4LivrePgMl === 0) return "Inválido";
                 return (depValues[0] / t4LivrePgMl).toFixed(2);
            case "rel-saliva-urina-iodo":
                if (depValues[1] === 0) return "Inválido";
                return (depValues[0] / depValues[1]).toFixed(2);
            case "rel-125d3-25d3":
                // Vitamina D (1,25-OH) (pg/mL), Vitamina D (25-OH) (ng/mL)
                // Converter 25-OH para pg/mL (1 ng/mL = 1000 pg/mL)
                const vitD25ohPgMl = depValues[1] * 1000;
                if (vitD25ohPgMl === 0) return "Inválido";
                // A relação é geralmente calculada como (1,25-OH / 25-OH) * 1000 ou similar
                // Vamos usar a fórmula direta (1,25-OH em pg/mL) / (25-OH em ng/mL)
                if (depValues[1] === 0) return "Inválido";
                return (depValues[0] / depValues[1]).toFixed(2);
            case "rel-calcio-creatinina-urina":
                // Cálcio Urina 24h (mg/24h), Creatinina Urina 24h (mg/24h)
                // A relação é Cálcio (mg/dL) / Creatinina (mg/dL) em amostra isolada.
                // Para 24h, a relação é Cálcio (mg/24h) / Creatinina (g/24h).
                // Precisamos da Creatinina em g/24h.
                const creatininaG = depValues[1] / 1000;
                if (creatininaG === 0) return "Inválido";
                return (depValues[0] / creatininaG).toFixed(2);
            default:
                return null;
        }
    } catch (error) {
        console.error(`Erro ao calcular ${examId}:`, error);
        return "Erro";
    }
}

// Função para atualizar cálculos que dependem de um exame específico
function updateDependentCalculations(changedExamId) {
    Object.keys(allExams).forEach(examId => {
        const exam = allExams[examId];
        if (exam.calculated && exam.dependencies && exam.dependencies.includes(changedExamId)) {
            const calculatedValue = calculateDependentValue(examId);
            const inputElement = document.getElementById(`exam-value-${examId}`);
            if (inputElement) {
                inputElement.value = calculatedValue !== null ? calculatedValue : "";
                // Atualiza o status do exame calculado
                updateExamStatus(examId);
            }
        }
    });
}

// Função para verificar o status do exame (Normal, Atenção, Alerta)
function checkStatus(value, reference, ideal, gender) {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return { text: "-", className: "" };

    const ref = getValueByGender(reference, gender);
    const idl = getValueByGender(ideal, gender);

    let refMin, refMax, idealMin, idealMax;
    let refOperator, idealOperator;
    let refSingleValue, idealSingleValue;

    // Parse Reference Range
    if (ref.includes("-")) {
        [refMin, refMax] = ref.split("-").map(parseFloat);
    } else if (ref.startsWith(">")) {
        refOperator = ">";
        refSingleValue = parseFloat(ref.substring(1));
    } else if (ref.startsWith("<")) {
        refOperator = "<";
        refSingleValue = parseFloat(ref.substring(1));
    } else if (ref.startsWith("≤")) {
        refOperator = "≤";
        refSingleValue = parseFloat(ref.substring(1));
    } else if (ref.startsWith("≥")) {
        refOperator = "≥";
        refSingleValue = parseFloat(ref.substring(1));
    } else if (!isNaN(parseFloat(ref))) {
        refSingleValue = parseFloat(ref);
        refOperator = "=="; // Assume equality if single value
    }

    // Parse Ideal Range
    if (idl.includes("-")) {
        [idealMin, idealMax] = idl.split("-").map(parseFloat);
    } else if (idl.startsWith(">")) {
        idealOperator = ">";
        idealSingleValue = parseFloat(idl.substring(1));
    } else if (idl.startsWith("<")) {
        idealOperator = "<";
        idealSingleValue = parseFloat(idl.substring(1));
    } else if (idl.startsWith("≤")) {
        idealOperator = "≤";
        idealSingleValue = parseFloat(idl.substring(1));
    } else if (idl.startsWith("≥")) {
        idealOperator = "≥";
        idealSingleValue = parseFloat(idl.substring(1));
    } else if (!isNaN(parseFloat(idl))) {
        idealSingleValue = parseFloat(idl);
        idealOperator = "=="; // Assume equality if single value
    }

    // Check against Ideal Range first
    let isIdeal = false;
    if (idealMin !== undefined && idealMax !== undefined) {
        isIdeal = numValue >= idealMin && numValue <= idealMax;
    } else if (idealOperator === ">") {
        isIdeal = numValue > idealSingleValue;
    } else if (idealOperator === "<") {
        isIdeal = numValue < idealSingleValue;
    } else if (idealOperator === "≤") {
        isIdeal = numValue <= idealSingleValue;
    } else if (idealOperator === "≥") {
        isIdeal = numValue >= idealSingleValue;
    } else if (idealOperator === "==") {
        isIdeal = numValue === idealSingleValue;
    }

    if (isIdeal) {
        return { text: "Ideal", className: "badge-normal" };
    }

    // Check against Reference Range if not Ideal
    let isReference = false;
    if (refMin !== undefined && refMax !== undefined) {
        isReference = numValue >= refMin && numValue <= refMax;
    } else if (refOperator === ">") {
        isReference = numValue > refSingleValue;
    } else if (refOperator === "<") {
        isReference = numValue < refSingleValue;
    } else if (refOperator === "≤") {
        isReference = numValue <= refSingleValue;
    } else if (refOperator === "≥") {
        isReference = numValue >= refSingleValue;
    } else if (refOperator === "==") {
        isReference = numValue === refSingleValue;
    }

    if (isReference) {
        // Dentro da referência, mas fora do ideal -> Atenção
        return { text: "Atenção", className: "badge-warning" };
    } else {
        // Fora da referência -> Alerta
        return { text: "Alerta", className: "badge-danger" };
    }
}

// Função para atualizar o status de um exame na tabela
function updateExamStatus(examId) {
    const exam = allExams[examId];
    const inputElement = document.getElementById(`exam-value-${examId}`);
    const statusElement = document.getElementById(`exam-status-${examId}`);
    const gender = document.getElementById("gender").value;

    if (!exam || !inputElement || !statusElement) return;

    const value = inputElement.value;
    const status = checkStatus(value, exam.reference, exam.ideal, gender);

    statusElement.textContent = status.text;
    statusElement.className = `badge ${status.className}`;
}

// Função para renderizar a lista de exames por categoria
function renderExamList(searchTerm = "") {
    const categoriesContainer = document.getElementById("exam-categories");
    categoriesContainer.innerHTML = "";
    const lowerSearchTerm = searchTerm.toLowerCase().normalize("NFD").replace(/[\[\]\(\)\u0300-\u036f]/g, "");

    examCategories.forEach(category => {
        const categoryDiv = document.createElement("div");
        categoryDiv.className = "category";
        categoryDiv.textContent = category.name;
        categoryDiv.onclick = () => {
            const list = categoryDiv.nextElementSibling;
            list.style.display = list.style.display === "none" ? "block" : "none";
        };

        const examListDiv = document.createElement("div");
        examListDiv.className = "exam-list";
        examListDiv.style.display = "none"; // Começa oculto

        let hasVisibleExams = false;
        Object.keys(allExams).forEach(examId => {
            const exam = allExams[examId];
            if (exam.category === category.id) {
                const examNameLower = exam.name.toLowerCase().normalize("NFD").replace(/[\[\]\(\)\u0300-\u036f]/g, "");
                if (lowerSearchTerm === "" || examNameLower.includes(lowerSearchTerm)) {
                    const examItem = document.createElement("div");
                    examItem.className = "exam-item";
                    examItem.textContent = exam.name;
                    examItem.onclick = (e) => {
                        e.stopPropagation(); // Evita que o clique feche a categoria
                        if (isMobileDevice()) {
                            openValueInputModal(examId, true); // Abre modal no mobile para adicionar
                        } else {
                            addExamToTable(examId);
                        }
                    };
                    examListDiv.appendChild(examItem);
                    hasVisibleExams = true;
                }
            }
        });

        // Só adiciona a categoria se ela tiver exames visíveis (ou se não houver busca)
        if (hasVisibleExams) {
            categoriesContainer.appendChild(categoryDiv);
            categoriesContainer.appendChild(examListDiv);
            // Se houver busca, expande a categoria
            if (lowerSearchTerm !== "") {
                examListDiv.style.display = "block";
            }
        }
    });
}

// Função para adicionar um exame à tabela
function addExamToTable(examId, initialValue = '') {
    if (addedExams.has(examId)) {
        // Focar no input existente se já foi adicionado
        const existingInput = document.getElementById(`exam-value-${examId}`);
        if (existingInput) {
            existingInput.focus();
            existingInput.select();
        }
        return null; // Retorna null pois não adicionou nova linha
    }

    const exam = allExams[examId];
    if (!exam) return null;

    addedExams.add(examId);
    const tableBody = document.getElementById("exams-table-body");
    const newRow = tableBody.insertRow();
    newRow.id = `exam-row-${examId}`;

    const cellName = newRow.insertCell();
    const cellValue = newRow.insertCell();
    const cellStatus = newRow.insertCell();
    const cellActions = newRow.insertCell();

    // Adiciona atributos data-label para responsividade
    cellName.setAttribute("data-label", "Exame");
    cellValue.setAttribute("data-label", "Valor");
    cellStatus.setAttribute("data-label", "Status");
    cellActions.setAttribute("data-label", "Ações");

    cellName.innerHTML = `${exam.name} ${exam.calculated ? 
'<small><i>(Calculado)</i></small>' : ''}`;
    
    const valueInput = document.createElement("input");
    valueInput.type = "number";
    valueInput.step = "any";
    valueInput.id = `exam-value-${examId}`;
    valueInput.placeholder = "Valor";
    valueInput.value = initialValue;
    valueInput.disabled = exam.calculated;
    valueInput.addEventListener("input", () => {
        updateExamStatus(examId);
        updateDependentCalculations(examId);
        saveExamData();
    });
    // Adiciona listener para abrir modal no mobile ao clicar no input
    valueInput.addEventListener("click", () => {
        if (isMobileDevice() && !exam.calculated) {
            openValueInputModal(examId, false); // Abre modal no mobile para editar
        }
    });
    valueInput.addEventListener("focus", () => {
        if (isMobileDevice() && !exam.calculated) {
            openValueInputModal(examId, false); // Abre modal no mobile para editar
        }
    });

    const unitSpan = document.createElement("span");
    unitSpan.textContent = exam.unit || "";
    unitSpan.style.marginLeft = "5px";

    const refDiv = document.createElement("div");
    const idealDiv = document.createElement("div");
    refDiv.style.fontSize = "0.8rem";
    refDiv.style.color = "#6c757d";
    idealDiv.style.fontSize = "0.8rem";
    idealDiv.style.color = "#6c757d";
    
    const gender = document.getElementById("gender").value;
    refDiv.textContent = `Ref: ${getValueByGender(exam.reference, gender)}`;
    idealDiv.textContent = `Ideal: ${getValueByGender(exam.ideal, gender)}`;

    cellValue.appendChild(valueInput);
    cellValue.appendChild(unitSpan);
    cellValue.appendChild(refDiv);
    cellValue.appendChild(idealDiv);
    
    if (exam.notes) {
        const notesSmall = document.createElement("small");
        notesSmall.style.display = "block";
        notesSmall.style.fontStyle = "italic";
        notesSmall.style.color = "#6c757d";
        notesSmall.textContent = `Nota: ${exam.notes}`;
        cellValue.appendChild(notesSmall);
    }

    const statusBadge = document.createElement("span");
    statusBadge.id = `exam-status-${examId}`;
    statusBadge.className = "badge";
    statusBadge.textContent = "-";
    cellStatus.appendChild(statusBadge);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remover";
    removeButton.className = "btn-danger";
    removeButton.onclick = () => {
        tableBody.removeChild(newRow);
        addedExams.delete(examId);
        delete examData[examId]; // Remove o valor também
        saveExamData();
        // Atualiza cálculos que dependiam deste exame removido
        Object.keys(allExams).forEach(id => {
            const ex = allExams[id];
            if (ex.calculated && ex.dependencies && ex.dependencies.includes(examId)) {
                const inputElem = document.getElementById(`exam-value-${id}`);
                if (inputElem) {
                    inputElem.value = ""; // Limpa o valor calculado
                    updateExamStatus(id); // Atualiza o status
                }
            }
        });
    };
    cellActions.appendChild(removeButton);

    // Atualiza o status inicial e salva
    if (exam.calculated) {
        const calculatedValue = calculateDependentValue(examId);
        valueInput.value = calculatedValue !== null ? calculatedValue : "";
    }
    updateExamStatus(examId);
    saveExamData();
    
    // Foca no input recém-adicionado (se não for mobile e não for calculado)
    if (!isMobileDevice() && !exam.calculated) {
        valueInput.focus();
        valueInput.select();
    }
    
    return newRow; // Retorna a linha adicionada
}

// Função para filtrar exames na lista
document.getElementById("exam-search").addEventListener("input", (e) => {
    renderExamList(e.target.value);
});

// Função para salvar dados no localStorage
function saveExamData() {
    const dataToSave = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        gender: document.getElementById("gender").value,
        addedExams: Array.from(addedExams),
        examValues: {}
    };
    addedExams.forEach(examId => {
        const inputElement = document.getElementById(`exam-value-${examId}`);
        if (inputElement) {
            dataToSave.examValues[examId] = inputElement.value;
        }
    });
    localStorage.setItem("examAnalyzerData", JSON.stringify(dataToSave));
}

// Função para carregar dados do localStorage
function loadExamData() {
    const savedData = localStorage.getItem("examAnalyzerData");
    if (savedData) {
        const data = JSON.parse(savedData);
        document.getElementById("name").value = data.name || "";
        document.getElementById("age").value = data.age || "";
        // Set gender select value directly
        const genderSelect = document.getElementById("gender");
        genderSelect.value = data.gender || "M"; // Default to 'M' if not saved
        
        addedExams = new Set(data.addedExams || []);
        examData = data.examValues || {};

        // Limpa a tabela antes de recarregar
        document.getElementById("exams-table-body").innerHTML = '';

        // Adiciona os exames salvos à tabela
        addedExams.forEach(examId => {
            const initialValue = examData[examId] !== undefined ? examData[examId] : '';
            addExamToTable(examId, initialValue);
        });
        
        // Atualiza todos os cálculos dependentes após carregar todos os valores
        addedExams.forEach(examId => updateDependentCalculations(examId));
    }
}

// Função para gerar o relatório
function generateReport() {
    const reportSection = document.getElementById("report-section");
    const reportContent = document.getElementById("report-content");
    const patientInfoDiv = document.getElementById("report-patient-info");
    reportContent.innerHTML = "";

    const name = document.getElementById("name").value || "Não informado";
    const age = document.getElementById("age").value || "Não informada";
    const gender = document.getElementById("gender").value;
    const genderText = gender === "M" ? "Masculino" : "Feminino";

    patientInfoDiv.innerHTML = `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Idade:</strong> ${age}</p>
        <p><strong>Sexo:</strong> ${genderText}</p>
        <p><strong>Data do Relatório:</strong> ${new Date().toLocaleDateString('pt-BR')}</p>
    `;

    if (addedExams.size === 0) {
        reportContent.innerHTML = "<p>Nenhum exame adicionado para gerar o relatório.</p>";
        reportSection.style.display = "block";
        return;
    }

    let reportHTML = "";
    examCategories.forEach(category => {
        const categoryExamsInReport = Array.from(addedExams)
            .filter(examId => allExams[examId].category === category.id)
            .sort((a, b) => allExams[a].name.localeCompare(allExams[b].name));

        if (categoryExamsInReport.length > 0) {
            reportHTML += `<div class="report-section">
                             <h3>${category.name}</h3>
                             <table class="table">
                                 <thead>
                                     <tr><th>Exame</th><th>Resultado</th><th>Referência</th><th>Ideal</th><th>Status</th></tr>
                                 </thead>
                                 <tbody>`;
            
            categoryExamsInReport.forEach(examId => {
                const exam = allExams[examId];
                const inputElement = document.getElementById(`exam-value-${examId}`);
                const value = inputElement ? inputElement.value : "N/A";
                const statusElement = document.getElementById(`exam-status-${examId}`);
                const statusHTML = statusElement ? statusElement.innerHTML : "-";
                
                reportHTML += `<tr>
                                 <td>${exam.name} ${exam.calculated ? '<small><i>(Calculado)</i></small>' : ''}</td>
                                 <td>${value} ${exam.unit || ''}</td>
                                 <td>${getValueByGender(exam.reference, gender)}</td>
                                 <td>${getValueByGender(exam.ideal, gender)}</td>
                                 <td>${statusHTML}</td>
                             </tr>`;
                if (exam.notes) {
                     reportHTML += `<tr><td colspan="5"><small><i>Nota: ${exam.notes}</i></small></td></tr>`;
                }
            });

            reportHTML += `</tbody></table></div>`;
        }
    });

    reportContent.innerHTML = reportHTML;
    reportSection.style.display = "block";
    reportSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Função para limpar todos os exames
function clearAllExams() {
    if (confirm("Tem certeza de que deseja remover todos os exames adicionados?")) {
        addedExams.clear();
        examData = {};
        document.getElementById("exams-table-body").innerHTML = "";
        document.getElementById("report-section").style.display = "none";
        // Limpa também os dados pessoais do localStorage ao limpar tudo
        const savedData = localStorage.getItem("examAnalyzerData");
        if (savedData) {
            const data = JSON.parse(savedData);
            data.addedExams = [];
            data.examValues = {};
            localStorage.setItem("examAnalyzerData", JSON.stringify(data));
        } else {
             localStorage.removeItem("examAnalyzerData"); // Garante remoção se não houver dados pessoais
        }
        // Recarrega a lista de exames (opcional, mas bom para resetar a busca)
        renderExamList();
    }
}

// Funções para modal mobile
function isMobileDevice() {
    // Considera mobile se a largura for 768px ou menos
    return window.matchMedia("(max-width: 768px)").matches;
}

function openValueInputModal(examId, isAdding = false) {
    const exam = allExams[examId];
    if (!exam) return;
    
    currentModalExamId = examId;
    isAddingExam = isAdding;
    
    // Obter o valor atual, se existir (apenas se não for adição)
    let currentValue = '';
    if (!isAdding) {
        const inputElement = document.getElementById(`exam-value-${examId}`);
        currentValue = inputElement ? inputElement.value : '';
    }
    
    // Configurar o modal
    document.getElementById('modal-title').textContent = isAdding ? 'Adicionar Valor' : 'Editar Valor';
    document.getElementById('modal-exam-name').textContent = exam.name;
    document.getElementById('modal-exam-unit').textContent = exam.unit || '';
    
    const gender = document.getElementById("gender").value;
    document.getElementById('modal-exam-ref').textContent = `Referência: ${getValueByGender(exam.reference, gender)}`;
    document.getElementById('modal-exam-ideal').textContent = `Ideal: ${getValueByGender(exam.ideal, gender)}`;
    
    const notesElement = document.getElementById('modal-exam-notes');
    if (exam.notes) {
        notesElement.textContent = `Nota: ${exam.notes}`;
        notesElement.style.display = 'block';
    } else {
        notesElement.style.display = 'none';
    }
    
    const valueInput = document.getElementById('modal-exam-value');
    valueInput.value = currentValue;
    valueInput.disabled = exam.calculated;
    
    // Abrir o modal
    document.getElementById('value-modal').style.display = 'flex'; // Usar flex para centralizar
    
    // Focar no input (se não for calculado)
    if (!exam.calculated) {
        setTimeout(() => {
            valueInput.focus();
            valueInput.select(); // Seleciona o texto para facilitar a edição
        }, 100); // Pequeno delay para garantir que o modal esteja visível
    }
}

function closeModal() {
    document.getElementById('value-modal').style.display = 'none';
    currentModalExamId = null;
}

function saveValueFromModal() {
    if (!currentModalExamId) return;
    
    const value = document.getElementById('modal-exam-value').value;
    let targetRow = null;
    
    // Se for adição, adiciona à tabela primeiro
    if (isAddingExam) {
        targetRow = addExamToTable(currentModalExamId, value);
    } else {
        // Atualizar o valor no input da tabela
        const inputElement = document.getElementById(`exam-value-${currentModalExamId}`);
        if (inputElement) {
            inputElement.value = value;
            // Disparar evento de input para atualizar status e cálculos
            const event = new Event('input', { bubbles: true, cancelable: true });
            inputElement.dispatchEvent(event);
            targetRow = document.getElementById(`exam-row-${currentModalExamId}`);
        }
    }
    
    // Fechar o modal
    closeModal();
    
    // Rolar a página para a linha do exame adicionado/editado
    if (targetRow) {
        // Pequeno delay para garantir que o DOM foi atualizado
        setTimeout(() => {
            targetRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Adiciona um destaque temporário (opcional)
            targetRow.style.transition = 'background-color 0.5s ease';
            targetRow.style.backgroundColor = '#fff3cd'; // Amarelo claro
            setTimeout(() => {
                targetRow.style.backgroundColor = ''; // Remove o destaque
            }, 1500); // Duração do destaque
        }, 100);
    }
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
    renderExamList();
    loadExamData();
    
    // Adiciona listeners aos inputs de dados pessoais
    document.getElementById('name').addEventListener('input', saveExamData);
    document.getElementById('age').addEventListener('input', saveExamData);
    document.getElementById('gender').addEventListener('change', () => {
        saveExamData();
        // Re-renderizar valores e status que dependem do gênero
        addedExams.forEach(examId => {
            const inputElement = document.getElementById(`exam-value-${examId}`);
            if (inputElement) {
                 // Atualiza placeholders e infos na tabela
                 const exam = allExams[examId];
                 const valueCell = inputElement.closest('td');
                 if (valueCell) {
                     const refDiv = valueCell.querySelector('div:nth-of-type(1)');
                     const idealDiv = valueCell.querySelector('div:nth-of-type(2)');
                     if(refDiv) refDiv.textContent = `Ref: ${getValueByGender(exam.reference, document.getElementById("gender").value)}`;
                     if(idealDiv) idealDiv.textContent = `Ideal: ${getValueByGender(exam.ideal, document.getElementById("gender").value)}`;
                 }
            }
            updateExamStatus(examId);
            updateDependentCalculations(examId); // Recalcula tudo que depende do gênero indiretamente
        });
    });
    
    // Adiciona listener para tecla Enter no input do modal
    document.getElementById('modal-exam-value').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            saveValueFromModal();
        }
    });
    
    // Adiciona listener para clique fora do modal para fechar
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('value-modal');
        if (event.target == modal) {
            closeModal();
        }
    });
});

    </script>
</body>
</html>

