/* =========================================================================
   CONFIGURAÇÃO DOS LINKS
   formulario: cole aqui o link do formulário da Brevo (Contatos > Formulários
               > Compartilhar > link da página). Enquanto estiver "", a caixa
               de inscrição fica escondida no site.
   ========================================================================= */

const CONFIG = {
  formulario: "",
  youtube:   "https://youtube.com/@catarinadedavid",
  instagram: "https://instagram.com/catarinawaihrichdedavid"
};

/* =========================================================================
   LISTA DE PROJETOS DO SITE
   Para adicionar um projeto novo: copie um bloco inteiro { ... },
   cole no TOPO da lista (o primeiro aparece primeiro) e edite os campos.
   - categoria: agrupa a peça na vitrine ("Mesa posta", "Sala de estar", "Cozinha"...)
   - foto:  nome do arquivo que você subiu na pasta img/
   - video: link do reel ou do vídeo no YouTube ("" esconde o botão)
   - link:  link de afiliado do Mercado Livre ("" mostra "em breve")
   Cuidado apenas com as vírgulas e as aspas.
   ========================================================================= */

const PROJETOS = [
  {
    id: "almofada",
    categoria: "Sala de estar",
    nome: "Almofada de tricô de mão",
    tag: "Sem agulhas",
    foto: "img/IMG_3759.jpg",
    video: "",
    materiais: [
      { nome: "Fio de malha grossa (fio de conforto) 1 kg", obs: "tom cru / off-white", link: "" },
      { nome: "Enchimento de fibra siliconada 500 g", obs: "", link: "" },
      { nome: "Capa interna de algodão 30×50 cm", obs: "", link: "" },
      { nome: "Agulha de tapeçaria ponta romba", obs: "para arrematar as pontas", link: "" },
    ]
  },
  {
    id: "porta-guardanapo",
    categoria: "Mesa posta",
    nome: "Porta guardanapo de flor",
    tag: "Mesa posta",
    foto: "img/IMG_3761.jpg",
    video: "",
    materiais: [
      { nome: "Tecido de linho cru 50 cm", obs: "desfiado na borda, sem costura", link: "" },
      { nome: "Cordão de algodão trançado 5 mm", obs: "para o anel", link: "" },
      { nome: "Cola têxtil de secagem transparente", obs: "", link: "" },
      { nome: "Tesoura de precisão para tecido", obs: "", link: "" },
    ]
  },
  {
    id: "abajur",
    categoria: "Sala de estar",
    nome: "Abajur sem fio",
    tag: "Iluminação",
    foto: "img/IMG_3757.jpg",
    video: "",
    materiais: [
      { nome: "Lâmpada recarregável USB com base E27", obs: "o coração do projeto — sem tomada", link: "" },
      { nome: "Cúpula de linho cônica 30 cm", obs: "", link: "" },
      { nome: "Massa texturizada para efeito pedra", obs: "", link: "" },
      { nome: "Pigmento ocre e terracota em pó", obs: "", link: "" },
      { nome: "Verniz fosco acrílico", obs: "selagem final", link: "" },
    ]
  },
  {
    id: "porta-velas",
    categoria: "Mesa posta",
    nome: "Porta velas de colher de madeira",
    tag: "Upcycling",
    foto: "img/IMG_3758.jpg",
    video: "",
    materiais: [
      { nome: "Colheres descartáveis de madeira (100 un)", obs: "a base de tudo", link: "" },
      { nome: "Copo de vidro cilíndrico 8 cm", obs: "", link: "" },
      { nome: "Cola quente em bastão fino", obs: "", link: "" },
      { nome: "Vela de cera 7×10 cm", obs: "", link: "" },
    ]
  },
  {
    id: "tapa-bolo",
    categoria: "Cozinha",
    nome: "Tapa bolo de corda",
    tag: "Cozinha",
    foto: "img/IMG_3760.jpg",
    video: "",
    materiais: [
      { nome: "Corda de algodão 5 mm — 50 m", obs: "", link: "" },
      { nome: "Tinta acrílica verde sálvia", obs: "", link: "" },
      { nome: "Cúpula de vidro ou tigela como molde", obs: "", link: "" },
      { nome: "Cola branca PVA extra forte", obs: "", link: "" },
    ]
  },
  {
    id: "jogo-americano",
    categoria: "Mesa posta",
    nome: "Jogo americano impermeável",
    tag: "Sem costura",
    foto: "img/IMG_3756.jpg",
    video: "",
    materiais: [
      { nome: "Tecido de algodão cru 1 m", obs: "", link: "" },
      { nome: "Impermeabilizante spray para tecidos", obs: "", link: "" },
      { nome: "Fita adesiva dupla face para tecido", obs: "dispensa a máquina de costura", link: "" },
      { nome: "Carimbo / stencil vintage", obs: "", link: "" },
    ]
  },
];
