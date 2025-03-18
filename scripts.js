
// Lista de vídeos com título e banda/música
const videos = [
  { id: "OlETRETdx5c", title: "Angry Chair - Alice in Chains", banda: "Alice in Chains" },
  { id: "UpM83IM8Rlc", title: "Blead the Freak - Alice in Chains", banda: "Alice in Chains" },  
  { id: "k4RYdqAcreA", title: "Heaven Beside You - Alice in Chains", banda: "Alice in Chains" },
  { id: "eSlrnwSNxK8", title: "Man In The Box - Alice In Chains", banda: "Alice in Chains" },
  { id: "vFJtlkDEL_Y", title: "Stone - Alice in Chains", banda: "Alice in Chains" },
  { id: "unA9JduIbxs", title: "Would? - Alice in Chains", banda: "Alice in Chains" },

  { id: "yofB8jO-6PI", title: "Caught In A Mosh - Anthrax", banda: "Anthrax" },
  { id: "VPqch-EzdSw", title: "Madhouse - Anthrax", banda: "Anthrax" },
  { id: "TTFI4ux4J5A", title: "Sabbath Blood Sabbath - Anthrax", banda: "Anthrax" },
  { id: "TRxxp6cUsSo", title: "She - Anthrax", banda: "Anthrax" },
  { id: "qAZX9ja1OXY", title: "The Devils You Know - Anthrax", banda: "Anthrax" },

  { id: "5ly7kWwNtc4", title: "N.I.B - Black Sabbath", banda: "Black Sabbath" },

  { id: "anlKUavRTYA", title: "Everlong - Foo Fighters", banda: "Foo Fighters" },

  { id: "AxBOta7O8M8", title: "Fear of the Dark - Iron Maiden", banda: "Iron Maiden" },
  { id: "Z1TLUL-KC2M", title: "Ghost Of The Navigator - Iron Maiden", banda: "Iron Maiden" },
  { id: "v45pYTFApKE", title: "Powerslave - Iron Maiden", banda: "Iron Maiden" },
  { id: "JFNXF7EsM5s", title: "The Trooper - Iron Maiden", banda: "Iron Maiden" },

  { id: "gfZeyf_hbWw", title: "Electric Eye - Judas Priest", banda: "Judas Priest" },
  { id: "3u8IJiPYimo", title: "Living After Midnight - Judas Priest", banda: "Judas Priest" },
  { id: "k_1ITV9uD7U", title: "Night Crawler - Judas Priest", banda: "Judas Priest" },

  { id: "dEvQTVc9Hh0", title: "Black Session - Katatonia", banda: "Katatonia" },
  { id: "-h_fQErd5Z0", title: "Chrome - Katatonia", banda: "Katatonia" },
  { id: "mGctEjs21sI", title: "Cold Ways - Katatonia", banda: "Katatonia" },
  { id: "KVbwFFsQXNc", title: "Dispossession - Katatonia", banda: "Katatonia" },
  { id: "MfDPvCIRVmQ", title: "Fractured - Katatonia", banda: "Katatonia" },
  { id: "eGmduw4eADo", title: "Had To Leave - Katatonia", banda: "Katatonia" },
  { id: "IZs7TB7hwVU", title: "I Transpire - Katatonia", banda: "Katatonia" },
  { id: "pPuSwTyxg_4", title: "Rainroom - Katatonia", banda: "Katatonia" },
  { id: "eEJRquTkUPg", title: "Stalemate - Katatonia", banda: "Katatonia" },
  { id: "sEVkyH1Y0UE", title: "The Northern Silence - Katatonia", banda: "Katatonia" },
  { id: "R5pbd9C0Ovo", title: "Without God - Katatonia", banda: "Katatonia" },
    
  { id: "4WatL5lF0VE", title: "Blind - Korn", banda: "Korn" },
  { id: "GlQvkikzrqQ", title: "Did My Time - Korn", banda: "Korn" },

  { id: "Z-MC0nH0UoA", title: "My generation - Limp Bizkit", banda: "Limp Bizkit" },
  { id: "VKvbjs9B5aw", title: "My Way - Limp Bizkit", banda: "Limp Bizkit" },
  { id: "es88UEkxDPU", title: "Take A Look Around - Limp Bizkit", banda: "Limp Bizkit" },
    
  { id: "ATKgtRJMQJU", title: "A Secret Place - Megadeth", banda: "Megadeth" },
  { id: "wllP7q7FnEg", title: "A Tout Le Monde - Megadeth", banda: "Megadeth" },
  { id: "8wBcpLdPRR8", title: "Addicted To Chaos - Megadeth", banda: "Megadeth" },
  { id: "KlxMHdA0vfM", title: "Angry Again - Megadeth", banda: "Megadeth" },
  { id: "pAo8baV7p6w", title: "Black Curtains - Megadeth", banda: "Megadeth" },
  { id: "4Wgkgi31U8E", title: "Elysian Fields - Megadeth", banda: "Megadeth" },
  { id: "7Fs5_wZkOds", title: "Family Tree - Megadeth", banda: "Megadeth" },
  { id: "KvomR398XIU", title: "I Thought I Knew It All - Megadeth", banda: "Megadeth" },
  { id: "hsc5C_6amzU", title: "Reckoning Day - Megadeth", banda: "Megadeth" },
  { id: "5X2-2nE2I3I", title: "She-Wolf - Megadeth", banda: "Megadeth" },
  { id: "dBI39jKimjg", title: "Train Of Consequences - Megadeth", banda: "Megadeth" },
  { id: "JpNVRobGAro", title: "Trust - Megadeth", banda: "Megadeth" },
  { id: "FwDm28tBfC4", title: "Youthanasia - Megadeth", banda: "Megadeth" },
  
  { id: "74j0m_bQ6wU", title: "...And Justice For All... - Metallica", banda: "Metallica" },
  { id: "A-IHbpeX9SA", title: "Am I Evil - Metallica", banda: "Metallica" },
  { id: "99qkLorEV2c", title: "Creeping Death - Metallica", banda: "Metallica" },
  { id: "G5PkxhToOj8", title: "Dont Tread on Me - Metallica", banda: "Metallica" },
  { id: "qJuDnoUYwSk", title: "Enter Sandman - Metallica", banda: "Metallica" },
  { id: "nqApzyjYyIw", title: "Eye of The Beholder - Metallica", banda: "Metallica" },
  { id: "HRkjahqKwnY", title: "Fade to Black - Metellica", banda: "Metallica" },
  { id: "ZbNLjMfaBCo", title: "Havester of Sorrow - Metallica", banda: "Metallica" },
  { id: "gmBkxTEX874", title: "Hit the Lights - Metallica", banda: "Metallica" },
  { id: "yL_Lq9E1CjY", title: "Holie than thou - Metallica", banda: "Metallica" },
  { id: "U1LlCnrdgac", title: "Lux Eterna - Metallica", banda: "Metallica" },
  { id: "oYNcVNp8dRw", title: "Master of Puppets - Metallica", banda: "Metallica" },
  { id: "R9bDBr9OLu4", title: "Metal Militia - Metallica", banda: "Metallica" },
  { id: "QcF_rbRkwlc", title: "My Friend of Misery - Metallica", banda: "Metallica" },
  { id: "WwKDTW_mzMo", title: "No Remorse - Metallica", banda: "Metallica" },
  { id: "oozm5XgSMAY", title: "Of Wolf the Man - Metallica", banda: "Metallica" },
  { id: "RNXRRXK0UYw", title: "One - Metallica", banda: "Metallica" },
  { id: "yarFWmCrR4A", title: "Orion - Metallica", banda: "Metallica" },
  { id: "1hH4gUdqkmk", title: "Ride the Lightning - Metallica", banda: "Metallica" },
  { id: "YkegErycoZg", title: "Sad But True - Metallica", banda: "Metallica" },
  { id: "QNxl0cvsoK8", title: "Seek & Destroy - Metallica", banda: "Metallica" },
  { id: "W2YDR057DNU", title: "The Day That Never Comes - Metallica", banda: "Metallica" },
  { id: "K5kWa6FUoDs", title: "The God That Failed - Metallica", banda: "Metallica" },
  { id: "GQGG6ss7Wxw", title: "The Memory Remains - Metallica", banda: "Metallica" },
  { id: "0wCZIZ9EMjs", title: "The Shortest Straw - Metallica", banda: "Metallica" },
  { id: "Mmrnv8FVJmw", title: "The Struggle Within - Metallica", banda: "Metallica" },
  { id: "jqXn1j1kRNE", title: "The Thing That Should Not Be - Metallica", banda: "Metallica" },
  { id: "Miw-53VnRq8", title: "Through the Never - Metallica", banda: "Metallica" },
  { id: "4NiM-w_MQFc", title: "To Live is To Die - Metallica", banda: "Metallica" },
  { id: "uee2yGfAbd4", title: "Turn the Page - Metallica", banda: "Metallica" },
  { id: "s06vMxmOHf4", title: "Wherever I May Roam - Metallica", banda: "Metallica" },
  
  { id: "PffS1WDXzMA", title: "Teutonic Terror - Accept", banda: "Mix Metal Songs" },
  { id: "4zG2m2mhIZ4", title: "Scream - Avenged Sevenfold", banda: "Mix Metal Songs" },  
  { id: "tk5HmJU9lkg", title: "Crazy - Aerosmith", banda: "Mix Metal Songs" },
  { id: "TGlzShVh2xs", title: "Animals - Architects", banda: "Mix Metal Songs" },
  { id: "HohjdGxTmo8", title: "Dead Butterflies - Architects", banda: "Mix Metal Songs" },
  { id: "LKtamghpvyo", title: "Impermanence - Architects", banda: "Mix Metal Songs" },
  { id: "YURv6h8SVog", title: "Burn - Deep Purple", banda: "Mix Metal Songs" },
  { id: "ufLN4TBtPGM", title: "Perfect Strangers - Deep Purple", banda: "Mix Metal Songs" },
  { id: "zbCQ8BTLfPo", title: "Smoke On The Water - Deep Purple", banda: "Mix Metal Songs" },
  { id: "KcopcrvpHM4", title: "Hungry For Heaven - DIO", banda: "Mix Metal Songs" },
  { id: "io-RTgwd6dQ", title: "Bury Me In Smoke - Down", banda: "Mix Metal Songs" },
  { id: "4FCogBtLRZo", title: "The Book Of Heavy Metal - Dream Evil", banda: "Mix Metal Songs" },
  { id: "-qX9gjdtRVI", title: "Going Under - Evanescence", banda: "Mix Metal Songs" },
  { id: "Fb9RMzdDXgI", title: "Epic - Faith no More", banda: "Mix Metal Songs" },
  { id: "bYfkSjr17vM", title: "Holy Diver - Killswitch Engage", banda: "Mix Metal Songs" },
  { id: "VjlC40mZp5o", title: "Detroit Rock City - KISS", banda: "Mix Metal Songs" },
  { id: "8Cd3N_L932A", title: "War Machine - KISS", banda: "Mix Metal Songs" },
  { id: "bc6QOdBAMrs", title: "Black Label - Lamb of God", banda: "Mix Metal Songs" },
  { id: "Q9ZFW791w6s", title: "Omerta - Lamb of God", banda: "Mix Metal Songs" },
  { id: "LbaI10MAlFI", title: "Papercut - Linkin Park", banda: "Mix Metal Songs" },
  { id: "f_DaHIlMtgU", title: "Astonishing Panorama Of The Endtimes - Marilyn Manson", banda: "Mix Metal Songs" },
  { id: "2hFFfuJvgs0", title: "Rock is Dead - Marilyn Manson", banda: "Mix Metal Songs" },
  { id: "EyMgh642dmU", title: "Sweet Dreams - Marilyn Manson", banda: "Mix Metal Songs" },
  { id: "3hhdZ2Uf80E", title: "Dig - Mudvayne", banda: "Mix Metal Songs" },
  { id: "vC2klX-osLA", title: "Decode - Paramore", banda: "Mix Metal Songs" },
  { id: "8TPKaK5piM4", title: "Hollow - Pantera", banda: "Mix Metal Songs" },
  { id: "q7ccnDTqEdM", title: "Forever My Queen - Pentagram", banda: "Mix Metal Songs" },
  { id: "qQ2WIYNhc5g", title: "The Ghoul - Pentagram", banda: "Mix Metal Songs" },  
  { id: "ojng6ysSNYg", title: "The Sky Is Fallin - Queens of the Stone Age", banda: "Mix Metal Songs" },
  { id: "Dkbq-0XQ50Y", title: "Open - Queensrÿche", banda: "Mix Metal Songs" },
  { id: "2QQw1WiYBTo", title: "Dragula - Rob Zombie", banda: "Mix Metal Songs" },
  { id: "6NWrk6D1fPI", title: "Praise - Sevendust", banda: "Mix Metal Songs" },
  { id: "FR2xGPHgUQc", title: "Freak - Silverchair", banda: "Mix Metal Songs" },
  { id: "fbBJ5cRrEOg", title: "Comatose - Skillet", banda: "Mix Metal Songs" },
  { id: "VS2Eg_vusI4", title: "Return To Serenity - Testament", banda: "Mix Metal Songs" },
  { id: "JuaR5Ygm2tI", title: "Painkiller - Three Days Grace", banda: "Mix Metal Songs" },
  { id: "kWhQ-qYmHOo", title: "In Waves - Trivium", banda: "Mix Metal Songs" },
  { id: "TPqdZoR9JxA", title: "Wild Child - W.A.S.P", banda: "Mix Metal Songs" },

  { id: "exysvRIPjxo", title: "Gets Me Through - Ozzy Osbourn", banda: "Ozzy Osbourne" },
  { id: "Yk1bfdoeQis", title: "Mr Crowley - Ozzy Osbourne", banda: "Ozzy Osbourne" },
    
  { id: "Z-zU9-hcIYM", title: "Bombtrack - Rage Against the Machine", banda: "Rage Against the Machine" },
  { id: "QXKZo6wSLoY", title: "Renegades of Funk - Rage Against the Machine", banda: "Rage Against the Machine" },
  { id: "071fmEoZZ_k", title: "Roll Right - Rage Against the Machine", banda: "Rage Against the Machine" },
  { id: "6U33UmvWu5c", title: "Sleep Now In The Fire - Rage Against the Machine", banda: "Rage Against the Machine" },
  { id: "6wTPHb976oE", title: "Vietnow - Rage Against the Machine", banda: "Rage Against the Machine" },
  { id: "c1D7xN8ePMo", title: "Wake Up - Rage Against the Machine", banda: "Rage Against the Machine" },
  { id: "45rQIEqN2CE", title: "Without A Face - Rage Against the Machine", banda: "Rage Against the Machine" },

  { id: "u9Wu8TXNsXI", title: "Amerika - Rammstein", banda: "Rammstein" },
  { id: "oINNFLw9_Ss", title: "Asche Zu Asche - Rammstein", banda: "Rammstein" },
  { id: "M9_KHjk3eYY", title: "Benzin - Rammstein", banda: "Rammstein" },
  { id: "Y5tZkZN0HzE", title: "Bestrafe Mich - Rammstein", banda: "Rammstein" },
  { id: "2zwCMzeJ_T4", title: "Bück Dich - Rammstein", banda: "Rammstein" },
  { id: "w16MBq0eWng", title: "Das Alte Leid - Rammstein", banda: "Rammstein" },
  { id: "zg31oF7VPk0", title: "Deutschland - Rammstein", banda: "Rammstein" },
  { id: "DxpLKh_fyFQ", title: "Dicke Titten - Rammstein", banda: "Rammstein" },
  { id: "B2xvx5YxiEo", title: "Du Riechst So Gut - Rammstein", banda: "Rammstein" },
  { id: "SN50Rt64IOk", title: "Eifersucht - Rammstein", banda: "Rammstein" },
  { id: "Pqs3BsCyIMA", title: "Ein Lied - Rammstein", banda: "Rammstein" },
  { id: "eoi0OQcWbJI", title: "Engel - Rammstein", banda: "Rammstein" },
  { id: "EACoKlQef3o", title: "Feuer Frei! - Rammstein", banda: "Rammstein" },
  { id: "mu5UerF3lg0", title: "Heirate Mich - Rammstein", banda: "Rammstein" },
  { id: "kAK6jiyP_TI", title: "Herzeleid - Rammstein", banda: "Rammstein" },
  { id: "_O0ltHlMHwU", title: "Ich Will - Rammstein", banda: "Rammstein" },
  { id: "DiUvdfi3AIk", title: "Keine Lust - Rammstein", banda: "Rammstein" },
  { id: "g-W3nysbDdM", title: "Links 234 - Rammstein", banda: "Rammstein" },
  { id: "1pQ0Srlgjhw", title: "Mein Herz Brennt - Rammstein", banda: "Rammstein" },
  { id: "lpkpiAq64DU", title: "Mein Land - Rammstein", banda: "Rammstein" },
  { id: "8ErXzL2APbo", title: "Mein Teil - Rammstein", banda: "Rammstein" },
  { id: "wPNWzyI0DdI", title: "Mutter - Rammstein", banda: "Rammstein" },
  { id: "C3ETnvmmVoc", title: "Radio - Rammstein", banda: "Rammstein" },
  { id: "Hjwme5AWdXA", title: "Rammlied - Rammstein", banda: "Rammstein" },
  { id: "91VF191OOU8", title: "Rammstein - Rammstein", banda: "Rammstein" },
  { id: "Ru_EGx0eyAI", title: "Rein Raus - Rammstein", banda: "Rammstein" },
  { id: "rkmrrcqr3a0", title: "Reise, Reise - Rammstein", banda: "Rammstein" },
  { id: "l-g74ihzIBQ", title: "Sehnsucht - Rammstein", banda: "Rammstein" },
  { id: "Im8D6ITqMR0", title: "Spiel Mit Mir - Rammstein", banda: "Rammstein" },
  { id: "S0n-ZBQ9z3w", title: "Sonne - Rammstein", banda: "Rammstein" },
  { id: "IRAFmWibJX0", title: "Stein Um Stein - Rammstein", banda: "Rammstein" },
  { id: "_a6E5ZoxGaU", title: "Te Quiero Puta! - Rammstein", banda: "Rammstein" },
  { id: "86cyUI46xTw", title: "Tier - Rammstein", banda: "Rammstein" },
  { id: "aZNlfrgKTAo", title: "Zeig Dich - Rammstein", banda: "Rammstein" },  
    
  { id: "yE-8qq0qdoc", title: "Amen - Sepultura", banda: "Sepultura" },
  { id: "FSSHgn77dOc", title: "Clenched Fist - Sepultura", banda: "Sepultura" },
  { id: "Ss6fyzXDxWk", title: "Propaganda - Sepultura", banda: "Sepultura" },
  { id: "w6PL-CK3veg", title: "Orgasmatron - Sepultura", banda: "Sepultura" },
  { id: "C6wzf-2PFds", title: "Refuse/Resist - Sepultura", banda: "Sepultura" },
  { id: "sKtxPaK6Enk", title: "Roots Bloody Roots - Sepultura", banda: "Sepultura" },
  { id: "AxquTswhNHs", title: "Symphony of Destruction - Megadeth", banda: "Megadeth" },
  { id: "EGVTCUiLUmc", title: "Territory - Sepultura", banda: "Sepultura" },
  { id: "_RQbhWzqyzo", title: "We Who Are Not As Others - Sepultura", banda: "Sepultura" },

  { id: "1Gy2zJcB2Qk", title: "Angel Of Death - Slayer", banda: "Slayer" },
  { id: "QNUUdVWkeCw", title: "Bloodline - Slayer", banda: "Slayer" },
  { id: "WEB7rAGzS_E", title: "Catatonic - Slayer", banda: "Slayer" },
  { id: "uhi5R_bmEss", title: "Disciple - Slayer", banda: "Slayer" },
  { id: "FI_Azh5XpmA", title: "Seasons In The Abyss - Slayer", banda: "Slayer" },
  { id: "87i6ThWVXYY", title: "Skeletons Of Society - Slayer", banda: "Slayer" },
  
  { id: "3fugvpFsVr8", title: "Before I Forget - Slipknot", banda: "Slipknot" },
  { id: "tb-T0KA1_hU", title: "Duality - Slipknot", banda: "Slipknot" },
  { id: "eSzpgIxv7uI", title: "Liberate - Slipknot", banda: "Slipknot" },
  { id: "UnAMAb4YJHA", title: "People = Shit - Slipknot", banda: "Slipknot" },

  { id: "bneHBp8htLM", title: "Gone Sovereign - Stone Sour", banda: "Stone Sour" },
  { id: "sMjEBkhrAhs", title: "Song#3 - Stone Sour", banda: "Stone Sour" },
  { id: "w-GjF6Lib9Q", title: "Through Glass - Stone Sour", banda: "Stone Sour" },
  

  { id: "ZYutZ-vxLZs", title: "Bounce - System of a Down", banda: "System of a Down" },
  { id: "__ovuI42qwo", title: "BYOB - System of a Down", banda: "System of a Down" },
  { id: "TJrZAdkRl94", title: "Deer Dance - System of a Down", banda: "System of a Down" },
  { id: "h1fVpEJ1-Rk", title: "Forest - System of a Down", banda: "System of a Down" },
  { id: "Mi0wmRZfq5o", title: "I E A I A I O - System of a Down", banda: "System of a Down" },
  { id: "gIcNiD35G9Y", title: "Jet Pilot - System of a Down", banda: "System of a Down" },
  { id: "AY0yHKnowus", title: "Needles - System of a Down", banda: "System of a Down" },
  { id: "nXOxjcVn4fs", title: "Prison Song - System of a Down", banda: "System of a Down" },
  { id: "kqhQJb5Y6xo", title: "Psyco - System of a Down", banda: "System of a Down" },
  { id: "W0H4EyNfusA", title: "Violent Pornography - System of a Down", banda: "System of a Down" },
 
  
];
    
  let currentVideoIndex = 0; // Índice do vídeo atualmente exibido no player
  const videoIframe = document.getElementById('youtube-video');
  const playlistButtons = document.getElementById('playlist-buttons');
  const playlistVideos = document.getElementById('playlist-videos');
  const closePlaylistButton = document.getElementById('close-playlist');
  
  // Função para carregar o vídeo no player principal
  function loadVideo(index) {
      if (index >= 0 && index < videos.length) {
          videoIframe.src = `https://www.youtube.com/embed/${videos[index].id}`;
          currentVideoIndex = index; // Atualiza o índice do vídeo atual
      }
  }
  
  // Função que inicializa o vídeo apenas uma vez (sem sobrescrever manualmente)
  function initializeVideo() {
      if (!videoIframe.src) { // Verifica se o player ainda não foi inicializado
          loadVideo(0); // Carrega apenas o primeiro vídeo ao iniciar
      }
  }
  
  // Verifica o tamanho da tela sem alterar o vídeo já escolhido pelo usuário
  function checkScreenSize() {
      if (window.innerWidth <= 768 && !videoIframe.src) {
          initializeVideo(); // Somente inicializa se nenhum vídeo estiver carregado
      }
  }
  
  // Evento: Verificar o tamanho da tela ao carregar a página
  window.addEventListener('load', () => {
      initializeVideo(); // Inicializa o vídeo ao carregar a página
  });
  
  // Evento: Verificar o tamanho da tela ao redimensionar
  window.addEventListener('resize', checkScreenSize);
  
  // Controles de navegação
  document.getElementById('prev-video').addEventListener('click', () => {
      if (currentVideoIndex > 0) {
          loadVideo(currentVideoIndex - 1);
      }
  });
  
  document.getElementById('next-video').addEventListener('click', () => {
      if (currentVideoIndex < videos.length - 1) {
          loadVideo(currentVideoIndex + 1);
      }
  });
  
  // Lógica para carregar playlists
  const playlists = {};
  videos.forEach(video => {
      if (!playlists[video.banda]) {
          playlists[video.banda] = [];
      }
      playlists[video.banda].push(video);
  });
  
  // Criação dos botões de playlists
  Object.keys(playlists).forEach(banda => {
      const button = document.createElement('button');
      button.textContent = banda;
      button.addEventListener('click', () => {
          loadPlaylist(banda);
      });
      playlistButtons.appendChild(button);
  });
  
  // Carregar vídeos de uma playlist específica
  function loadPlaylist(banda) {
      playlistVideos.innerHTML = ''; // Limpa a lista de vídeos antes de exibir
      playlists[banda].forEach((video) => {
          const videoItem = document.createElement('div');
          videoItem.className = 'video-item';
          videoItem.innerHTML = `<h4>${video.title}</h4>`;
          videoItem.addEventListener('click', () => {
              const selectedIndex = videos.findIndex(v => v.id === video.id);
              if (selectedIndex !== -1) {
                  loadVideo(selectedIndex); // Carrega o vídeo selecionado no player
                  closePlaylist(); // Fecha a playlist após o clique
              }
          });
          playlistVideos.appendChild(videoItem);
      });
      closePlaylistButton.style.display = 'block'; // Exibe o botão para fechar a playlist
  }
  
  // Função para fechar a playlist
  function closePlaylist() {
      playlistVideos.innerHTML = ''; // Limpa a lista de vídeos
      closePlaylistButton.style.display = 'none'; // Esconde o botão de fechar
  }
  
  closePlaylistButton.addEventListener('click', closePlaylist);
  
  // Botão "Voltar ao topo"
  window.onscroll = function () {
      scrollFunction();
  };
  
  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("back-to-top").style.display = "block";
      } else {
          document.getElementById("back-to-top").style.display = "none";
      }
  }
  
  document.getElementById("back-to-top").addEventListener("click", function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');
  
    // Alternar a visibilidade do menu ao clicar no botão
    menuToggle.addEventListener('click', function () {
      nav.classList.toggle('active');
    });
  
    // Fechar o menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        nav.classList.remove('active');
      });
    });
  
    // Fechar o menu ao clicar fora dele
    document.addEventListener('click', function (event) {
      const isClickInsideMenu = nav.contains(event.target);
      const isClickOnToggle = menuToggle.contains(event.target);
  
      if (!isClickInsideMenu && !isClickOnToggle) {
        nav.classList.remove('active');
      }
    });
  });




