const allWords = ["Buffy", "Vulcão", "Paixão", "Galo", "Electricidade", "Viking", "Alarme", "Dança", "Hulk", 
"Deserto","Barbie","Chocolate","Neve","Gravata","Vento","Pirata","Férias","Elfo","Íman","Garfo",
"Passagem","Pinguim","Cela","Gandhi","Oásis","Concha","Shakespeare","Gigante","Espuma","Cave","Ferro","Batman",
"Canção","Nilo","Cinema","Rádio","Pêra","Gladiador","Sol","Cereal","Prisão","Buraco","Punk","Noite","Mapa","César",
"Noodle","Boné","Dentista","Trigo","Cordel","Austrália","Castelo","Guarda","Ovelha","Fracasso","História","Cerveja",
"Fado","Presidente","Caixa","PlayStation","Loiro","Íris","Membro","Tecido","Vampiro","Monopólio","Manga","Hotel",
"Génio","Dráculo","Leão","Meia","Sexta-feira","Casa","Padrinho","Guerra","Corda","Vinho","Relâmpago","Jardim","Pintura",
"Cabana","Trégua","Crocodilo","Jóia","Metro","Óculos","Mariza","Dinossauro","Amarelo","Cogumelo","Pombo","Pikachu",
"Faca","Almofada","Armstrong","Espada","Roubo","Nintendo","Aposta","Sal","Manual","Gel","Hollywood","Mosquito","Lança",
"Saco","Fino","Doping","Alho","Cubo","Rocky","Leite","Borboleta","Pó","Porcelana","Mercado","Casulo","Granada","Brincadeira",
"Escova","Porco","Toy","Espelho","Réveillon","Banho","Osso","Fada","Forno",
"Tomada","Páscoa","Mangueira","Faixa","Chinelo","Folha","Puma","Revolução","Saara","Halloween","Pulga","Bebé","Cantil","Par",
"Parafuso","Ancinho","Computador","Starbucks","Baile","Churrasco","Panda","Sonho","Casamento","Umbigo","Grua","Operação","Rap",
"Musa","Defesa","Godzilla","Uniforme","Chuva","Incêndio","Capacete","Clube","Natal","Costura","Estação","Lanterna","Veneno",
"Estrela","Lobo","Tintim","Aniversário","Poppins","Doutor","Morango","Nuclear","Lotaria","Alcatraz","Fumo","Avelã","Diamante",
"Rosa","Avatar","Moinho","Selva","Freira","Petardo","Oprah","Ninja","Edredom","Caçador","Legume","Escada","Anjo","Louco","Cabelo",
"Matrix","Mito","Facebook","Bolota","Decreto","Ponte","Cemitério","Cupido","Guarda-Chuva","Salto","Raíz","Baía","Estudo","Gótico",
"Titanic","Máquina","Guilhotina","Mágico","Hóquei","Banana","Camões","Melão","Âncora","Israel","Cacto","Ténis","Lagarta","Humor",
"Canto","Antártida","Salsicha","Xarope","Floresta","Balança","Zeus","Comboio","Sardinha","Moeda","Cleópatra","Janela","Anão",
"Circo","Elvis","Tractor","Pedra","Martelo","Chile","Morcela","Imperador","Papa","Bairro","Rock","Tigre","Agulha","Sabão","Pimenta",
"Triângulo","Boneca","Itália","Cenário","Bengala","Mosqueteiro","Fio","Tulipa","Ikea","Plástico","Raio","Cartão","Seixo","Evereste",
"Miragem","Ramsés","Fogo","Cruzamento","Princesa","Bolo","Garanhão","México","Branca","Careca","Vela","Camembert","Shrek","Pólo","Faroeste",
"Gato","Palácio","Eleição","Mel","Rambo","Marioneta","Jogo","Vegas","Cofre","Avião","Cavaleiro","Paz","Flor","Suíça","Calendário","Chapéu",
"Trevo","Botão","Queijo","Chewbacca","Terminator","Carta","Almôndega","Paraíso","Ovo","Montanha","Amendoim","Lâmpada","Jedi","Piripíri",
"Jackson","Cigarro","Pulseira","Metereologia","Torre","Pensamento","Frankenstein","Acento","Duche","Vingança","Chefe","Urgência","Cruz",
"Valsa","Solitário","Sopa","Onda","Escola","Lego","Ramo","Cinderela","Crepe","Ilha","Táxi","Cocktail","Mario","Tampa","Violino","Pêssego","Google",
"Arco","Março","Golfe","Bilhete","Navio","Bowling","Churchill","Carneiro","Espião","Tango","Amora","Templo","Areia","Barata","Reggae","Estrume",
"Lago","Macaco","Farol","Olímpico","Escalada","Advogado","Tolkien","Rio","Bomba","Aladino","Cano","Cinto","Bar","Múmia","Bateria","Feira","Karaté",
"Papagaio","Máfia","Grande","Míssil","Microsoft","Ski","Rei","Ballet","Banda","Álcool","Lava","Coração","Moscovo","Bilhar","Unicórnio","Laranja",
"Cérebro","Máscara","Concerto","Tróia","Tubarão","Ratatouille","Canadá","Zoo","Cachimbo","Livro","Spartacus","Pêlo","Tornado","Pirâmide","Aliança",
"Luz","Sofá","Mozart","Anel","Pizza","Tóquio","Calcanhar","Frango","Helicóptero","Coronel","Açúcar","Teatro","Pá","Dune","Muralha","Raposa",
"Polícia","Simpson","Jornal","Padeiro","Perfume","Chama","Zombie","Joker","Tesouro","Piloto","Mickey","Esgoto","Galáxia","Tradição","Serpente",
"Taça","Picasso","Relógio","Ardósia","Bombeio","Copo","Cuscuz","Grécia","Caverna","Pessoa","Casino","Caramelo","Fonte","Gelado","Flauta","Champanhe",
"Safári","Alien","Ratazana","Alicate","Amazon","Tabaco","Régua","Polar","Rato","Colar","Quinta","Bélgica","Tatuagem","Spielberg","Maçã","Sereia",
"Boxe","Funeral","Elástico","Panela","Flash","Túnel","Darwin","Tomate","Paraquedas","Canhão","Binóculos","Tapete","Pónei","Coroa","Novo","Tarantino",
"Astérix","Robô","Comédia","Língua","Cabeleireiro","Cabra","Pão","Diabo","Primário","Tarzan","Boca","Carrossel","Psycho","Relva","Queda","Bigode","Borbulha",
"Cadeira","Stark","Bolacha","Toalha","Vénus","Polvo","Ciclo","Ópera","Joaninha","Mostarda","Sherlock","Garrafa","Vírus","Croissant","Fantasma","Palha",
"Prego","Potter","Série","Ninho","Especiaria","Elefante","Carnaval","Cárie","Managa","Gremlins","Póquer","Tarte","Número","Decathlon","Rum","Metal","Atum",
"França","Lua","Refeitório","Pássaro","Ferramenta","Música","Garganta","América","Café","Febre"];

export default {
	allWords
};