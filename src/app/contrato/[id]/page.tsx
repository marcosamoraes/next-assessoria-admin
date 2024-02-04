'use client'

import { IOrder } from '@/interfaces/IOrder'
import { useEffect, useState } from 'react'
import * as $Order from '@/services/Order'

export default function Page({ params }: any) {
  const [order, setOrder] = useState<IOrder>({} as IOrder)

  const { id } = params

  useEffect(() => {
    if (id) {
      $Order.find(id).then((res: any) => {
        const data: IOrder = res.data.order
        setOrder(data)
      })
    }
  }, [id])

  return (
    <div style={{ display: 'flex', marginTop: 50, justifyContent: 'center' }}>
      <div style={{ background: 'white', color: 'black', border: '1px solid black', borderRadius: 25, width: '90%', padding: 15, marginBottom: 50 }}>
        <b>Contrato de Compra e Venda</b><br />
        <b>CONTRATO DE PROMESSA DE COMPRA E VENDA DE PISTOLA</b><br /><br />

        DAS PARTES<br /><br />

        PROMITENTE COMPRADORA:<br /><br />

        Nome: {`${order.user?.name} ${order.user?.last_name}`}<br />
        CPF: {order.user?.details?.document}<br />
        RG: {order.user?.details?.rg}<br />
        Endereço: {`${order.user?.address?.street}, ${order.user?.address?.number} ${order.user?.address?.complement ?? ''} - ${order.user?.address?.neighborhood} - CEP: ${order.user?.address?.zipcode}`}<br />
        Cidade/Estado: {`${order.user?.address?.city}/${order.user?.address?.state}`}<br />
        Telefone: {order.user?.whatsapp}<br />
        Email: {order.user?.email}<br /><br />

        PROMITENTE VENDEDORA:<br /><br />

        Nome: NEXT ASSESSORIA E CONSULTORIA LTDA<br />
        CNPJ: 26.712.675/0001-57<br />
        Endereço: Avenida Cidade Jardim, nº 400 – 5º Andar – Conjunto 51 – Jardim Paulistano – CEP:  01454-000<br />
        Cidade: São Paulo/SP<br />
        Representante Daiane Cristine dos Santos Sangi<br />
        CPF: 360.938.788-21<br /><br />

        CLÁUSULA PRIMEIRA – DO OBJETO DO CONTRATO<br /><br />

        1.1 O presente contrato tem como objeto a promessa de compra pela PROMITENTE COMPRADORA e promessa de venda pela PROMITENTE VENDEDORA da pistola abaixo descriminada:<br /><br />

        PRODUTOS<br />
        {order.order_products && order.order_products.map((order_product, index) => (
          <div key={index}>
            {index+1}<br />
            {order_product.product?.title}<br /><br />
          </div>
        ))}

        1.2 O presente instrumento de Promessa de Compra e Venda tem como objeto somente a(s) pistola(s) da marca GLOCK, classificada(s) como “arma de fogo semi-automática de uso permitido”, de acordo com o Anexo I – Relação de Produtos Controlados pelo Exército, constante no Decreto 3.665 de 20 de novembro de 2000.<br /><br />

        1.3 A PROMITENTE COMPRADORA está ciente de que a venda de pistolas está restrita para atiradores desportivos regularmente registrados no Exército Brasileiro e/ou nos demais órgãos nacionais eventualmente exigidos pela legislação pátria.<br /><br />

        CLÁUSULA SEGUNDA – DO PREÇO, DA FORMA DE PAGAMENTO E DO PRAZO<br /><br />

        2.1 Pela pistola descrita na cláusula 1.1, a PROMITENTE COMPRADORA pagará à PROMITENTE VENDEDORA o valor total de R$ {Number(order.total).toFixed(2).replace('.', ',')}.<br /><br />

        2.2 O valor acima descrito poderá ser pago pela PROMITENTE COMPRADORA, após o recebimento de comunicado a ser enviado via e-mail pela PROMITENTE VENDEDORA atestando a regularidade da documentação descrita na cláusula 3.1 e incisos, das seguintes formas:<br /><br />

        à vista via depósito bancário identificado; ou<br /><br />

        em 2 (duas) a 10 (dez) parcelas mensais, iguais e consecutivas com o acréscimo de juros e taxas bancárias vigentes quando do pagamento.<br /><br />

        2.3 Sem prejuízo do disposto no caput, as Partes reconhecem que o valor da pistola poderá sofrer reajuste - sem aviso prévio, em decorrência da taxa cambial, taxas de frete, tributos, etc, os quais serão justificados pela PROMITENTE VENDEDORA e suplementado pela/restituído à PROMITENTE COMPRADORA.<br /><br />

        2.4 No valor descrito na cláusula 2.1, não estão incluídas as despesas com relação ao frete para remessa/entrega da pistola para a PROMITENTE COMPRADORA, as quais deverão ser pagas na forma e no prazo informados pela PROMITENTE VENDEDORA.<br /><br />

        2.5 No valor descrito na cláusula 2.1, não estão incluídos qualquer tipo de serviço ou despesas referentes ou necessários para regularização ou obtenção da documentação da PROMITENTE COMPRADORA exigida nas cláusulas terceira e quarta.<br /><br />

        2.6 No valor descrito na cláusula 2.1, não estão incluídas as taxas necessárias para registro da pistola, conforme exige a Lei nº 10.826/03 e o Decreto 9.847/2019 e eventuais legislações supervenientes.<br /><br />

        2.7 Caso haja a inadimplência dos valores acima descritos, inclusive referentes ao frete, haverá a incidência de multa de 10% sobre o valor inadimplido, acrescido de juros e correção monetária, sendo que o presente contrato será suspenso até a regularização da pendência e posterior envio da pistola adquirida, isentando a PROMITENTE VENDEDORA da devolução de eventuais valores já pagos, bem como de qualquer responsabilidade pelo atraso.<br /><br />

        2.8 A troca do modelo da pistola, somente será possível se realizada antes da emissão da nota fiscal pela PROMITENTE VENDEDORA e conforme disponibilidade a ser confirmada por esta.<br /><br />

        CLÁUSULA TERCEIRA – DAS OBRIGAÇÕES DA PROMITENTE COMPRADORA<br /><br />

        3.1 A PROMITENTE COMPRADORA obriga-se a fornecer todos os documentos solicitados pela PROMITENTE VENDEDORA, incluindo, mas não se limitando, os documentos abaixo descritos, e cumprir as demais cláusulas deste instrumento:<br /><br />

        Cópia de documento oficial com foto (RG, CHN, funcional);<br /><br />

        Cópia do Certificado de Registro Pessoa Física - CRPF emitido pela Região Militar em cuja área de responsabilidade esteja domiciliada a PROMITENTE COMPRADORA, nos termos da legislação vigente;<br /><br />

        Via original da declaração/autorização de compra, deferida pela Região Militar de vinculação, caso sua autorização seja expedida pelo próprio órgão de vinculação, a mesma deverá conter: timbre da instituição e carimbo de autenticidade. (O texto da autorização deverá conter menção a legislação interna que dá competência ao órgão expedir tal documento); sendo de responsabilidade do cliente o modelo da pistola que consta na autorização ser idêntico ao modelo adquirido.<br /><br />

        Cópia autentica do Certificado de Registro de Arma de Fogo (“CRAF”).<br /><br />

        3.1.1 Os documentos exigidos pela PROMITENTE VENDEDORA à PROMITENTE COMPRADORA poderão sofrer modificação conforme eventual alteração da legislação vigente e aplicável ao objeto deste instrumento ou mesmo conforme exigência dos órgãos fiscalizadores.<br /><br />

        3.1.2 A PROMITENTE COMPRADORA deverá encaminhar os documentos acima conforme orientação disponibilizada pela PROMITENTE VENDEDORA.<br /><br />

        3.1.3 Caso a documentação da PROMITENTE COMPRADORA esteja irregular, a PROMITENTE VENDEDORA encaminhará comunicado, via e-mail, esclarecendo as irregularidades e solicitando sua regularização.<br /><br />

        3.2 Caso a PROMITENTE COMPRADORA não forneça a documentação solicitada pela PROMITENTE VENDEDORA de acordo com a legislação pátria vigente, não será possível a remessa da pistola adquirida, sendo que, em qualquer uma destas hipóteses, a PROMITENTE VENDEDORA não poderá ser responsabilizada por eventuais atrasos e/ou danos causados.<br /><br />

        3.3 Após a realização da compra a PROMITENTE COMPRADORA deverá entrar em contato via e-mail com a PROMITENTE VENDEDORA informando se a pistola deverá ser entregue via transportadora. Neste caso, será cobrado o frete de forma antecipada e o valor do frete será acrescido na Nota Fiscal de compra.<br /><br />

        3.4 A mercadoria será entregue no endereço constante na Nota Fiscal, caso não seja possível localizar a PROMITENTE COMPRADORA, enviaremos pela segunda vez a mercadoria, sendo cobrada de uma taxa de entrega pela transportadora no valor de 30% (trinta) do frete contratado. Em caso de novo insucesso, a pistola deverá ser retirada pessoalmente no endereço da transportadora no prazo máximo de 10 (dez) dias corridos contados a partir da 2ª tentativa, após este período, com ou sem a retirada da pistola, as partes dão a mais ampla e geral quitação do presente instrumento.<br /><br />

        3.4.1 Caso a mercadoria não seja retirada na transportadora no prazo de 10 (dez) dias corridos contados a partir da 2ª tentativa, a mercadoria é devolvida automaticamente para a PROMITENTE VENDEDORA, e a PROMITENTE COMPRADORA deverá arcar com o frete de retorno e todos os custos inerentes a esta devolução.<br /><br />

        3.5 A PROMITENTE COMPRADORA se compromete a observar e seguir todas as orientações de uso, manuseio e manutenção fornecidas pela PROMITENTE VENDEDORA e contidas no manual da pistola, sob pena de perda de qualquer garantia ou suporte da PROMITENTE VENDEDORA.<br /><br />

        CLÁUSULA QUARTA – DAS OBRIGAÇÕES DA PROMITENTE VENDEDORA<br /><br />

        4.1 A PROMITENTE VENDEDORA compromete-se, além do fornecimento da pistola, a prestar os serviços abaixo descritos:<br /><br />

        Orientação e explicação de todos os procedimentos inerentes à operação disposta no presente instrumento;<br /><br />

        Conferência de todos os documentos e dados pessoais da PROMITENTE COMPRADORA, orientando sobre eventuais irregularidades;<br /><br />

        Orientações sobre o frete da pistola; e<br /><br />

        Orientação e informação sobre a data, horário e procedimentos referentes à remessa da pistola.<br /><br />

        4.2 Após o recebimento dos documentos elencados na cláusula 3.1 e incisos, o pagamento dos valores descritos na cláusula 2.1, a PROMITENTE VENDEDORA compromete-se a emitir, no prazo máximo de 15 (quinze) dias uteis, nota fiscal de simples faturamento indicando a descrição completa do produto, seus acessórios e o número de série da Pistola, para que a PROMITENTE COMPRADORA a utilize no apostilamento descrito na cláusula terceira.<br /><br />

        4.2.1 Após o recebimento de cópia autentica do Certificado de Registro de Arma de Fogo (“CRAF”), a PROMITENTE VENDEDORA emitirá a respectiva nota de remessa de venda para entrega futura da pistola adquirida pela PROMITENTE COMPRADORA.<br /><br />

        4.3 Após a obtenção e envio de todos os documentos mencionados nas cláusulas terceira e quarta, a PROMITENTE VENDEDORA compromete-se a enviar a pistola adquirida para a PROMITENTE COMPRADORA no prazo aproximado de 45 (quarenta e cinco) dias contados a partir do recebimento pela PROMITENTE VENDEDORA do CRAF a ser emitido nos termos da legislação vigente.<br /><br />

        4.3.1 Caso a PROMITENTE COMPRADORA esteja localizada em São Paulo, o fornecimento da pistola poderá ser concluído mediante apresentação do CRAF e da Guia de Tráfego.<br /><br />

        4.4 A PROMITENTE VENDEDORA emitirá Guia de Tráfego provisória quando da remessa da pistola adquirida para a PROMITENTE COMPRADORA.<br /><br />

        4.4.1 Caso a PROMITENTE COMPRADORA esteja localizada no Estado de São Paulo, a forma de entrega deverá ser ajustada com a PROMITENTE VENDEDORA via e-mail.<br /><br />

        4.5 Caso haja qualquer defeito de fábrica, a PROMITENTE VENDEDORA dará o suporte necessário para regularização do defeito identificado, sem custo, desde que a PROMITENTE COMPRADORA utilize a pistola e realize a manutenção conforme orientado pela PROMITENTE VENDEDORA e de acordo com o manual que acompanha a pistola.<br /><br />

        CLÁUSULA QUINTA – DA VIGÊNCIA E DA ABRANGÊNCIA DO CONTRATO<br /><br />

        5.1 O presente contrato é firmado por prazo indeterminado, iniciando sua vigência após a comprovação do pagamento dos valores descritos a cláusula 2.1 do presente instrumento.<br /><br />

        5.2 A vigência, validade e eficácia deste contrato é exaurida após a regular entrega da pistola no endereço constante da Nota Fiscal da PROMITENTE COMPRADORA.<br /><br />

        CLÁUSULA SEXTA – DA DESISTÊNCIA OU CANCELAMENTO DO PRESENTE CONTRATO<br /><br />

        6.1 A PROMITENTE COMPRADORA poderá, até sete dias após a assinatura do contrato pela PROMITENTE VENDEDORA, optar pela desistência da compra e venda da pistola e cancelamento do presente contrato, mediante pedido formal encaminhado via e-mail, desde que a pistola não tenha sido registrada junto ao Exército Brasileiro, Polícia Federal, outro órgão competente ou retirada pela PROMITENTE VENDEDORA.<br /><br />

        6.2 Na hipótese da desistência ocorrer única e exclusivamente por culpa da PROMITENTE COMPRADORA, a PROMITENTE VENDEDORA restituirá o montante equivalente à 70% (setenta por cento) de todo e qualquer valor já pago pela PROMITENTE COMPRADORA, sendo que a diferença será destinada para remuneração dos serviços administrativos prestados pela PROMITENTE VENDEDORA e reembolso das respectivas despesas incorridas.<br /><br />

        6.3 A PROMITENTE COMPRADORA possui ciência da legislação vigente e declara atender às exigências legais para aquisição do produto objeto do presente contrato, sendo que a PROMITENTE VENDEDORA não poderá ser responsabilizada por qualquer prejuízo e/ou descumprimento contratual decorrente da alteração legislativa, não podendo a PROMITENTE COMPRADORA pleitear da PROMITENTE VENDEDORA qualquer valor a título de restituição ou indenização.<br /><br />

        CLÁUSULA SÉTIMA – DA CONFIDENCIALIDADE E DO SIGILO<br /><br />

        7.1 As partes, comprometem-se, mesmo após o término do presente contrato, a manter completa confidencialidade e sigilo sobre quaisquer dados, documentos ou informações obtidas em razão do presente contrato, reconhecendo que não poderão ser divulgados ou fornecidos a terceiros, salvo com expressa autorização, por escrito, da outra parte, ou quando da requisição dos órgãos Públicos e pelo Poder Judiciário, sob pena de responsabilização civil e penal no descumprimento desta cláusula de confidencialidade e sigilo.<br /><br />

        7.1.1 Não caracterizará infração à cláusula acima, o fornecimento de informações e dados para terceiros parceiros ou que façam parte do registro, frete ou outro procedimento necessário para a aquisição da pistola pela PROMITENTE COMPRADORA.<br /><br />

        CLÁUSULA OITAVA – DAS DISPOSIÇÕES GERAIS<br /><br />

        8.1 A PROMITENTE VENDEDORA não é responsável por eventuais problemas técnicos ou de funcionamento que a pistola eventualmente apresentar em decorrência de má utilização ou má manutenção.<br /><br />

        8.2 As omissões deste contrato serão regidas pelo Código Civil Brasileiro, e pela legislação extravagante vigente.<br /><br />

        8.3 O presente contrato respeitará a legislação pátria vigente, incluindo eventuais alterações ou ajustes às quais as Partes deverão observar e atender.<br /><br />

        8.3.1 Os atos acima descritos e eventualmente contrários a qualquer disposição do presente instrumento, não serão caracterizados como infração contratual, desde que exigidos e de acordo com a legislação vigente.<br /><br />

        CLÁUSULA NONA – DO FORO DE ELEIÇÃO<br /><br />

        9.1 As partes elegem o Foro Central da Comarca de São Paulo, Estado de São Paulo, em detrimento de qualquer outro, para dirimir quaisquer dúvidas a respeito deste contrato.<br /><br />

        E por estarem assim, justas e contratadas, firmam o presente compromisso, mediante o aceite da PROMITENTE COMPRADORA no campo abaixo.<br /><br />

        São Paulo, {new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}.
      </div>
    </div>
  )
}