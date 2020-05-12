import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.png';
import {
  HeaderStyle,
  HomeStyle,
  HowItWorksStyle,
  AboutUsStyle,
  StartStyle,
  ContactStyle
} from './styles';

import mainImage from './images/main-image.svg';
import requestImage from './images/img_pedido.svg';
import scheduleImage from './images/img_schedule.svg';
import takeImage from './images/img_retiro.svg';
import ecommerceImage from './images/icon-ecommerce.svg';
import moneyImage from './images/icon-money.svg';
import personMoneyImage from './images/icon-person-money.svg';
import camargoImage from './images/camargo.jpeg';
import urbanoImage from './images/urbano.jpeg';

function App() {

  const useSticky = () => {
    const [isSticky, setSticky] = useState(false);
    const element = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        // window.scrollY > element.current.getBoundingClientRect().bottom
        //   ? setSticky(true)
        //   : setSticky(false)
        window.scrollY > 50
          ? setSticky(true)
          : setSticky(false)
      }

      // This function handle the scroll performance issue
      const debounce = (func, wait = 20, immediate = true) => {
        let timeOut;
        return () => {
          let context = this,
            args = arguments
          const later = () => {
            timeOut = null
            if (!immediate) func.apply(context, args)
          }
          const callNow = immediate && !timeOut
          clearTimeout(timeOut)
          timeOut = setTimeout(later, wait)
          if (callNow) func.apply(context, args)
        }
      }

      window.addEventListener("scroll", debounce(handleScroll))

      return () => {
        window.removeEventListener("scroll", () => handleScroll)
      }
    }, [])

    return { isSticky, element }
  };

  const { isSticky, element } = useSticky()

  const DEFAULT_VALUES = {
    name: '',
    phone: '',
    company: '',
    city: '',
    address: '',
    businessType: '',
    socialNetwork: [],
    offerServices: [],
    hasEcommerce: '',
  };

  const handleMenuClick = (id) => {
    document.querySelector(`#${id}`).scrollIntoView({behavior: 'smooth'});
  };

  const [cards, setCards] = useState([]);
  const [indexCard, setIndexCard] = useState(0);
  useEffect(() => {
    setCards(document.querySelectorAll('.cards .card'));
  }, []);

  const showCard = (increase) => {
    let newIndexCard = (indexCard + increase);
    newIndexCard = Math.min(
      Math.max(newIndexCard, 0),
      cards.length - 1
    );

    if (newIndexCard === cards.length) {
      newIndexCard--;
    }

    if (newIndexCard <= -1) {
      newIndexCard = -1;
    }

    // cards[newIndexCard].scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'});
    cards[newIndexCard].scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'center'});
    setIndexCard(newIndexCard);
  };

  const [setp1Finished, setStep1Finished] = useState(false);
  const [setp2Finished, setStep2Finished] = useState(false);
  const [setp3Finished, setStep3Finished] = useState(false);
  const [setp4Finished, setStep4Finished] = useState(false);
  const [sending, setSending] = useState(false);
  const [invalidForm, setInvalidForm] = useState(true);
  const [formValues, setFormValues] = useState(DEFAULT_VALUES);
  const changeFormValue = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    setFormValues({
      ...formValues,
      [field]: value
    });
  };

  const handleTypeBusiness = (value) => {
    setFormValues({
      ...formValues,
      businessType: value
    });
    setStep1Finished(true);
  };

  const handleSocialNetwork = (value) => {
    let socials = formValues.socialNetwork;
    if (socials.includes(value)) {
      socials = socials.filter(social => social !== value);
    } else {
      socials.push(value);
    }

    setFormValues({
      ...formValues,
      socialNetwork: socials
    });

    if (socials.length === 0) {
      setStep2Finished(false);
    } else {
      setStep2Finished(true);
    }
  };

  const handleOfferServices = (value) => {
    let services = formValues.offerServices;
    if (services.includes(value)) {
      services = services.filter(service => service !== value);
    } else {
      services.push(value);
    }

    setFormValues({
      ...formValues,
      offerServices: services
    });

    if (services.length === 0) {
      setStep3Finished(false);
    } else {
      setStep3Finished(true);
    }
  };

  const handleHasEcommerce = (value) => {
    setFormValues({
      ...formValues,
      hasEcommerce: value
    });
    setStep4Finished(true);
  };

  const handleSubmitQuestion = () => {
    if (invalidForm) {
      alert('Para prosseguir é necessário preencher todos os dados!');
      return false;
    }

    setSending(true);

    fetch(`${process.env.REACT_APP_API_URL}/sendEmail`,{
        method: 'POST',
        body: JSON.stringify(formValues),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
    })
    .then((response) => (response.json()))
    .then((response) => {
      if (response.status === 'success'){
        alert('Em breve entraremos em contato com você');
        setFormValues(DEFAULT_VALUES);
        window.location.reload();
      } else if (response.status === 'fail'){
        alert('Falha ao enviar suas informações, você pode entrar em contato clicando no menu CONTATO!');
      } else {
        alert('Falha ao enviar suas informações, você pode entrar em contato pelo telefone!');
      }
      setSending(false);
    });
  };

  useEffect(() => {
    const isValidFormQuestion = () => {
      let invalid = true;

      if (setp1Finished && setp2Finished && setp3Finished && setp4Finished) {
        invalid = false;
      }

      Object.keys(formValues).forEach(item => {
        if (formValues[item].length === 0) {
          invalid = true;
        }
      });

      setInvalidForm(invalid);
    };

    isValidFormQuestion();
  }, [formValues, setp1Finished, setp2Finished, setp3Finished, setp4Finished]);

  const [showQuestion, setShowQuestion] = useState('question1');
  const handleSelectQuestions = (question) => {
    setShowQuestion(question);
  };



  const [showContact, setShowContact] = useState('email');
  const [formContactValues, setFormContactValues] = useState({
    email: '',
    phone: '',
    message: '',
  });

  const changeContactFormValue = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    setFormContactValues({
      ...formContactValues,
      [field]: value
    });
  };

  const handleSendContact = () => {
    let invalid = false;

    Object.keys(formContactValues).forEach(item => {
      if (formContactValues[item].length === 0) {
        invalid = true;
      }
    });

    if (invalid) {
      alert('Preencha todos os campos!');
      return false;
    }

    setSending(true);

    fetch(`${process.env.REACT_APP_API_URL}/sendContact`,{
        method: 'POST',
        body: JSON.stringify(formContactValues),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
    })
    .then((response) => (response.json()))
    .then((response) => {
      if (response.status === 'success') {
        alert('Em breve entraremos em contato com você');
        window.location.reload();
      } else if (response.status === 'fail') {
        alert('Falha ao enviar suas informações, você pode entrar em contato clicando no menu CONTATO!');
      } else {
        alert('Falha ao enviar suas informações, você pode entrar em contato pelo telefone!');
      }
      setSending(false);
    });
  };

  return (
    <>
      <HeaderStyle sticky={isSticky} className={isSticky ? "sticky" : ""}>
        <img src={logo} className="logo" alt="logo" />
        <ul>
          <li onClick={() => handleMenuClick('home')}>Home</li>
          <li onClick={() => handleMenuClick('works')}>Como funciona?</li>
          <li onClick={() => handleMenuClick('about')}>Porque usar?</li>
          <li onClick={() => handleMenuClick('contact')}>Contato</li>
          <li onClick={() => handleMenuClick('start')} className="start">Comece já</li>
        </ul>
      </HeaderStyle>

      <HomeStyle ref={element} id="home">
        <div className="window">
          <div className="row">
            <div className="column">
              <h1>
                Venda <span>On-line</span>?<br />
                venda rápida, fácil e segura.
              </h1>

              <div className="divider"></div>

              <p>Hoje, mais do que nunca, os consumidores procuram produtos e pontos de venda on-line, mas... e os produtos em suas lojas, eles aparecem nessas pesquisas? Não?</p>

              <div className="hide-desktop"><img src={mainImage} alt="Imagem principal" /></div>

              <p><strong>QuickPick oferece a você sua loja virtual com um sistema de Entrega e Retirada.</strong></p>

              <button className="start" onClick={() => handleMenuClick('start')}>Começar agora</button>
            </div>
          </div>
          <div className="row"><img src={mainImage} className="main-image" alt="Imagem principal" /></div>
        </div>
      </HomeStyle>

      <HowItWorksStyle id="works">
        <h1 className="content">Como funciona?</h1>
        <div className="divider"></div>

        <p className="content">O QuickPick veio para agilizar suas vendas e transformar seu negócio, passe a vender online agora mesmo. Com o nosso sistema o que você fazia antes de anotar cada pedido por telefone, agora será online:</p>

        <div className="row">
          <div className="step">
            <img src={requestImage} alt="Fazer pedido"/>
            <div className="divider lightgreen"></div>
            <p>Seus clientes entram na sua loja<br />online e fazem seu pedido</p>
          </div>
          <div className="step">
            <img src={scheduleImage} alt="Agendar pedido"/>
            <div className="divider lightgreen"></div>
            <p>Agendam uma hora para retirar</p>
          </div>
          <div className="step">
            <img src={takeImage} alt="Retirar pedido"/>
            <div className="divider lightgreen"></div>
            <p>E passam retirar sua encomenda</p>
          </div>
        </div>

        <p><strong>O famoso sistema drive thru, com hora marcada, agora ao seu alcance.</strong></p>
      </HowItWorksStyle>

      <AboutUsStyle id="about">
        <div className="row">
          <div className="column w35">
            <h1>Porque<br />usar <span>QuickPick</span>?</h1>
            <div className="divider"></div>
            <p>Com taxas super reduzidas o quickpick veio pra lhe ajudar neste momento difícil de crise e o melhor, não ser um sócio do seu negócio, mas seu aliado.</p>
          </div>
          <div className="column w65">
            <div className="option row">
              <img src={ecommerceImage} alt="Ecommerce" />
              <div className="column">
                <p className="title">Crie sua loja virtual grátis</p>
                <p>Nós acreditamos que juntos somos melhores!<br />Crie sua loja virtual grátis e pague somente uma taxa quando vender.</p>
              </div>
            </div>
            <div className="option row">
              <img src={moneyImage} alt="Dinehiro" />
              <div className="column">
                <p className="title">Sem mensalidade fixa</p>
                <p>Para dar aquela ajuda, aqui no QuickPick não cobramos mensalidade.</p>
              </div>
            </div>
            <div className="option row">
              <img src={personMoneyImage} alt="Lojista satisfeito" />
              <div className="column">
                <p className="title">Sem limitações</p>
                <p>Seja livre! Aqui no QuickPick não há limites.<br />Sem limite de produtos, fotos ou acessos.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column w50"></div>
          <div className="column w50">
            <div className="percent">
              <span>70%</span>da populacao
            </div>
            <div className="content">
              <p>
                Até 2020, cerca de 146,5 milhões de pessoas no Brasil<br />
                fazem compras pela Internet, o que você está esperando<br />
                para se conectar a elas?
              </p>
            </div>
          </div>
        </div>
      </AboutUsStyle>

      <StartStyle id="start">

        <div className="cards">
          <div className="card step1">
            <div className="content">
              <h2>Comece hoje mesmo, só depende de você, preencha nosso formulário que entraremos em contato o mais breve possível.</h2>
              <div className="divider"></div>
              <p>Você pode ter certeza de que não solicitaremos dados pessoais</p>
              <button className="start" onClick={() => showCard(1)}>Começar agora</button>
            </div>
          </div>

          <div className="card step2">
            <div className="column">
              <button className="back" onClick={() => showCard(-1)}>Voltar</button>
              <h2>Preencha o formulário em duas etapas muito curtas e fáceis. Quando terminar, entraremos em contato.</h2>
              <div className="row">
                <div className="column">
                  <label htmlFor="name">Qual seu nome?</label>
                  <input type="text" id="name" name="name" onChange={(e) => changeFormValue(e)} />
                </div>
                <div className="column">
                  <label htmlFor="phone">Telefone (Whatsapp)</label>
                  <input type="text" id="phone" name="phone" onChange={(e) => changeFormValue(e)} />
                </div>
                <div className="column">
                  <label htmlFor="company">Nome do seu estabelecimento</label>
                  <input type="text" id="company" name="company" onChange={(e) => changeFormValue(e)} />
                </div>
                <div className="column">
                  <label htmlFor="city">Cidade</label>
                  <input type="text" id="city" name="city" onChange={(e) => changeFormValue(e)} />
                </div>
              </div>
              <div className="row">
                <div className="column">
                  <label htmlFor="address">Endereço completo</label>
                  <input type="text" id="address" name="address" onChange={(e) => changeFormValue(e)} />
                </div>
                <div className="column">
                  <button className="start" onClick={() => showCard(1)}>Seguinte</button>
                </div>
              </div>
            </div>
          </div>

          <div className="card step3">
            <div className="column">
              <button className="back" onClick={() => showCard(-1)}>Voltar</button>
              <h2>Selecione abaixo pergunta por pergunta para finalizar o questionário.</h2>

              <div className="row">
                <div className={"question question1 " + (showQuestion === 'question1' && setp1Finished ? 'selected finished' : (showQuestion === 'question1') ? 'selected' : (setp1Finished) ? 'finished' : '')} onClick={() => handleSelectQuestions('question1')}>
                  <p className={(setp1Finished) ? 'number finished' : 'number'}>1</p>
                  <p className="question">Em qual desta opções seu modelo de negócio se encaixa?</p>
                </div>
                <div className={"question question2 " + (showQuestion === 'question2' && setp2Finished ? 'selected finished' : (showQuestion === 'question2') ? 'selected' : (setp2Finished) ? 'finished' : '')} onClick={() => handleSelectQuestions('question2')}>
                  <p className={(setp2Finished) ? 'number finished' : 'number'}>2</p>
                  <p className="question">Em quais redes socias você divulga seus produtos?</p>
                </div>
                <div className={"question question3 " + (showQuestion === 'question3' && setp3Finished ? 'selected finished' : (showQuestion === 'question3') ? 'selected' : (setp3Finished) ? 'finished' : '')} onClick={() => handleSelectQuestions('question3')}>
                  <p className={(setp3Finished) ? 'number finished' : 'number'}>3</p>
                  <p className="question">Qual desses serviços você oferece atualmente?</p>
                </div>
                <div className={"question question4 " + (showQuestion === 'question4' && setp4Finished ? 'selected finished' : (showQuestion === 'question4') ? 'selected' : (setp4Finished) ? 'finished' : '')} onClick={() => handleSelectQuestions('question4')}>
                  <p className={(setp4Finished) ? 'number finished' : 'number'}>4</p>
                  <p className="question">Possui Loja Virtual?</p>
                </div>
              </div>

              <div className="row">
                <div className={"group-question group-question1 " + (showQuestion === 'question1' ? 'show' : '')}>
                  <div className="questions">
                    <div>
                      <input type="radio" id="mercearia" name="type-business" onClick={() => handleTypeBusiness('mercearia')} />
                      <label htmlFor="mercearia">Mercearia</label>
                    </div>
                    <div>
                      <input type="radio" id="varejao" name="type-business" onClick={() => handleTypeBusiness('varejao')} />
                      <label htmlFor="varejao">Varejao</label>
                    </div>
                    <div>
                      <input type="radio" id="confeitaria" name="type-business" onClick={() => handleTypeBusiness('confeitaria')} />
                      <label htmlFor="confeitaria">Confeitaria</label>
                    </div>
                    <div>
                      <input type="radio" id="minimercado" name="type-business" onClick={() => handleTypeBusiness('minimercado')} />
                      <label htmlFor="minimercado">Mini Mercado</label>
                    </div>
                    <div>
                      <input type="radio" id="padaria" name="type-business" onClick={() => handleTypeBusiness('padaria')} />
                      <label htmlFor="padaria">Padaria</label>
                    </div>
                    <div>
                      <input type="radio" id="farmacia" name="type-business" onClick={() => handleTypeBusiness('farmacia')} />
                      <label htmlFor="farmacia">Farmacia</label>
                    </div>
                    <div>
                      <input type="radio" id="outro" name="type-business" onClick={() => handleTypeBusiness('outro')} />
                      <label htmlFor="outro">Outro</label>
                    </div>
                    <div>
                      {formValues.businessType === 'outro' && <input type="text" name="type-other" id="type-other" />}
                    </div>
                  </div>

                  <div className="actions-buttons">
                    <button className="start" onClick={() => handleSelectQuestions('question2')}>Próxima</button>
                  </div>
                </div>

                <div className={"group-question group-question2 " + (showQuestion === 'question2' ? 'show' : '')}>
                  <div className="questions">
                    <div>
                      <input type="checkbox" id="instagram" name="social-network" onClick={() => handleSocialNetwork('instagram')} />
                      <label htmlFor="instagram">Instagram</label>
                    </div>
                    <div>
                      <input type="checkbox" id="facebook" name="social-network" onClick={() => handleSocialNetwork('facebook')} />
                      <label htmlFor="facebook">Facebook</label>
                    </div>
                    <div>
                      <input type="checkbox" id="twitter" name="social-network" onClick={() => handleSocialNetwork('twitter')} />
                      <label htmlFor="twitter">Twitter</label>
                    </div>
                    <div>
                      <input type="checkbox" id="youtube" name="social-network" onClick={() => handleSocialNetwork('youtube')} />
                      <label htmlFor="youtube">Youtube</label>
                    </div>
                    <div>
                      <input type="checkbox" id="nenhum" name="social-network" onClick={() => handleSocialNetwork('nenhum')} />
                      <label htmlFor="nenhum">Nenhum</label>
                    </div>
                  </div>
                  <div className="actions-buttons">
                    <button className="back" onClick={() => handleSelectQuestions('question1')}>Voltar</button>
                    <button className="start" onClick={() => handleSelectQuestions('question3')}>Próxima</button>
                  </div>
                </div>

                <div className={"group-question group-question3 " + (showQuestion === 'question3' ? 'show' : '')}>
                  <div className="questions">
                    <div>
                      <input type="checkbox" id="delivery" name="services" onClick={() => handleOfferServices('delivery')} />
                      <label htmlFor="delivery">Delivery (Entrega)</label>
                    </div>
                    <div>
                      <input type="checkbox" id="take_away" name="services" onClick={() => handleOfferServices('take_away')} />
                      <label htmlFor="take_away">Take Away (Retirada)</label>
                    </div>
                    <div>
                      <input type="checkbox" id="nenhum1" name="services" onClick={() => handleOfferServices('nenhum')} />
                      <label htmlFor="nenhum1">Nenhum</label>
                    </div>
                  </div>
                  <div className="actions-buttons">
                    <button className="back" onClick={() => handleSelectQuestions('question2')}>Voltar</button>
                    <button className="start" onClick={() => handleSelectQuestions('question4')}>Próxima</button>
                  </div>
                </div>

                <div className={"group-question group-question4 " + (showQuestion === 'question4' ? 'show' : '')}>
                  <div className="questions">
                    <div>
                      <input type="radio" id="sim" name="has-ecommerce" onClick={() => handleHasEcommerce('sim')} />
                      <label htmlFor="sim">Sim</label>
                    </div>
                    <div>
                      <input type="radio" id="nao" name="has-ecommerce" onClick={() => handleHasEcommerce('nao')} />
                      <label htmlFor="nao">Não</label>
                    </div>
                    <div>
                      <input type="radio" id="gostaria" name="has-ecommerce" onClick={() => handleHasEcommerce('gostaria')} />
                      <label htmlFor="gostaria">Gostaria de ter</label>
                    </div>
                  </div>
                  <div className="actions-buttons">
                    <button className="back" onClick={() => handleSelectQuestions('question3')}>Voltar</button>
                    <button className="start" disabled={sending} onClick={() => handleSubmitQuestion()}>Finalizar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StartStyle>

      <ContactStyle id="contact">
        <div className="wrapper-title">
          <h1 className="content">Deixe-nos saber o que você pensa</h1>
          <div className="divider"></div>

          <p className="content">Se desejar, entre em contato conosco enviando uma mensagem, responderemos prontamente.</p>
        </div>

        <div className="column wrapper-contact">
          <div className="tabs row">
            <div className={"tab " + (showContact === 'email' ? 'selected' : '')} onClick={() => setShowContact('email')}>Mensagem</div>
            <div className={"tab " + (showContact === 'phone' ? 'selected' : '')} onClick={() => setShowContact('phone')}>Contatos</div>
          </div>

          <div className={"contact-area contact-email " + (showContact === 'email' ? 'show' : '')}>
            <div className="row">
              <div className="column">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" onChange={(e) => changeContactFormValue(e)} />
              </div>
              <div className="column">
                <label htmlFor="phone1">Telefone</label>
                <input type="text" id="phone1" name="phone" onChange={(e) => changeContactFormValue(e)} />
              </div>
            </div>
            <div className="row">
              <div className="column">
                <label htmlFor="message">Mensagem</label>
                <textarea id="message" name="message" onChange={(e) => changeContactFormValue(e)}></textarea>
              </div>
            </div>
            <div className="row">
              <button className="send" disabled={sending} onClick={() => handleSendContact()}>Enviar</button>
            </div>
          </div>
          <div className={"contact-area contact-phone " + (showContact === 'phone' ? 'show' : '')}>
            <div className="row">
              <div className="row">
                <img src={camargoImage} alt="Camargo"/>
                <div className="card">
                  <p className="name">Wederson Camargo</p>
                  <div className="divider"></div>
                  <p className="email">wederson.camargo@quickpick.com.br</p>
                  <p className="phone">(19) 98236-7108</p>
                </div>
              </div>
              <div className="row">
                <img src={urbanoImage} alt="Urbano"/>
                <div className="card">
                  <p className="name">Tiago Urbano</p>
                  <div className="divider"></div>
                  <p className="email">tiago.urbano@quickpick.com.br</p>
                  <p className="phone">(19) 99264-6673</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <p className="white">Se você conhece alguém que deseja aumentar as vendas on-line, pode falar sobre nós, isso nos deixaria muito felizes.</p>
        </div>
      </ContactStyle>
    </>
  );
}

export default App;
