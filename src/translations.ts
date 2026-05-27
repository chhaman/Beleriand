export type Language = "es" | "en";

export const translations = {
  es: {
    // Top bar & Nav
    encyclopedia: "Enciclopedia",
    timeline: "Cronología",
    characters: "Personajes",
    atlas: "Atlas",
    searchPlaceholder: "Buscar en los archivos...",
    archiveResults: "Resultados del Archivo",
    close: "Cerrar",
    noResults: "No se encontraron pergaminos relacionados.",
    heroesAndLegends: "Héroes y Leyendas",
    greatBattles: "Grandes Batallas (Atlas)",
    milestones: "Hitos del Tiempo",
    runesOfKnowledge: "Runas del Saber",
    archivesOfNargothrond: "Archivos de Nargothrond",
    library: "Biblioteca",
    bestiary: "Bestiario",
    cartography: "Cartografía",
    scribeOfNoldor: "Escribano de los Noldor",
    finrodSigil: "Sello de Finrod",
    
    // Home View
    beleriandEnc: "La Enciclopedia de Beleriand",
    youngWorldQuote: "«En aquellos días, el mundo era joven y las estrellas nuevas. Aquí se registran los hechos de los Días Antiguos, desde el despertar de los Elfos hasta la caída de Angband.»",
    cantarGestas: "Cantar de Gestas",
    cronicasSilmarils: "Crónicas de los Silmarils",
    cronicasDesc: "El místico relato del destino de las tres joyas perfectas creadas por Fëanor de Aman, y la milenaria guerra del espíritu que consumió a los Noldor y a las fértiles tierras de Beleriand.",
    consultFeanor: "Consultar Fëanor",
    soberaniaHombres: "Soberanías de Hombres",
    reinosEdain: "Reinos de los Edain",
    reinosEdainDesc: "Las heróicas tres casas de los Hombres aliadas que cruzaron las cumbres de Ered Luin.",
    pitsOfIron: "Fosas de Hierro",
    sombraNorte: "La Sombra del Norte",
    sombraDesc: "Las atroces legiones de Morgoth y el imparable alzamiento de la industria bélica de Angband.",
    legendaryCartography: "Cartografía Legendaria",
    firstAgeCartography: "Cartografía de la Primera Edad",
    cartographyDesc: "Explore los mapas manuscritos detallados de Beleriand, desde las costas arenosas de Falas custodiadas por Círdan hasta las gélidas e inhóspitas cumbres de Thangorodrim. Localice las ciudadelas secretas ocultas de Gondolin y Nargothrond que resistieron la ruina absoluta.",
    openAtlas: "Abrir el Atlas",
    gondolinQuote: "«Gondolin ha caído, las naves de Círdan esperan en las bocas del Sirion, pero las canciones de las cinco batallas se entonarán eternamente mientras las estrellas sigan ardiendo.»",
    loreMastersPrefix: "— Sabios de la Casa de los Eldar",

    // Timeline View
    annalsOfElderDays: "Anales de los Días Antiguos",
    timelineTitle: "Cronología de la Primera Edad",
    climaxAge: "Clímax de la Edad",
    historicMilestone: "Hito Histórico",
    hideChronicle: "Ocultar crónica",
    viewScribesNotes: "Ver notas del sabio",
    scribeNoteText: "Transcripción fiel de los archivos de Nargothrond: «Los sabios registran que la trascendencia de este hito modeló decisivamente las posteriores batallas terrestres de Beleriand Occidental.»",
    endedFirstAge: "ASÍ TERMINÓ LA PRIMERA EDAD DEL MUNDO EN LUZ Y EN SOMBRA.",

    // Characters / Bestiary View
    heroesGallery: "Galería de Héroes y Villanos",
    legendsQuote: "«Que se guarden sus nombres en las piedras de Beleriand, pues sus destinos tejieron la música del mundo.»",
    raceFilterLabel: "Raza",
    realmFilterLabel: "Reino",
    keyDeedsLabel: "Hecho Clave",
    closeScrollOf: "Cerrar pergamino de",
    scribeChronicle: "Crónica de Escribano • Erudito de la Primera Edad",
    spouse: "Cónyuge",
    weapon: "Arma",
    status: "Estado",
    readFullBio: "Leer Biografía Completa",
    shareChronicle: "Compartir Relato",
    memorableDeeds: "Hechos Memorables",
    saveSuccessAlert: "¡La leyenda de {name} ha sido guardada en tu pergamino local!",
    feanorMithrim: "Fallecido en Mithrim",
    fingolfinDoor: "Fallecido ante las puertas del Thangorodrim",
    luthienMortal: "Fallecida como Mortal",
    berenTolGalen: "Fallecido en Tol Galen",
    morgothVoid: "Arrojado al Vacío Atemporal",
    turinCabed: "Fallecido en Cabed-en-Aras",
    fingolfinDuelTitle: "El Duelo Final ante Angband",
    fingolfinDuelDesc: "«Fingolfin hirió al Señor Oscuro siete veces, y sus alaridos de dolor deidad conmocionaron los cimientos de la Tierra Media, y Morgoth cojeó por siempre desde aquel fatídico día.»",

    // Atlas View
    warAtlasTitle: "Atlas de Guerras y Ejércitos",
    warAtlasDesc: "Un registro cartográfico interactivo de las cinco grandes batallas de Beleriand y los devastadores conflictos que reconfiguraron la Primera Edad de Arda.",
    mapInteractiveTip: "🧭 Pulsa sobre los glifos de espadas, escudos y llamaradas para consultar la información",
    mapSelectPrompt: "Selecciona una batalla en el mapa para ver los registros cartográficos de Arda",
    warChronicles: "Crónicas Bélicas",
    shadowForces: "Ejércitos de la Sombra",
    freeForces: "Fuerzas del Bien",
    strategicOutcome: "RESULTADO ESTRATÉGICO",
    lightStrategies: "Estrategias de la Luz",
    shadowMachinery: "Maquinaria de la Sombra",
    shadowMachineryDesc1: "Llamas del Bragollach: Pavorosos ríos y lenguas de fuego líquido volcados desde Thangorodrim para arrasar las llanuras agrícolas de Ard-galen.",
    shadowMachineryDesc2: "Glaurung el Dorado: El colosal primer dragón urulóki, desatado como letal tanque orgánico destructor de falanges elfas desprotegidas.",
    lightStrategiesDesc1: "El Cerco de Angband: Durante casi 400 años, las nobles casas de los Noldor mantuvieron a Morgoth bajo estricto asedio en su bastión septentrional.",
    lightStrategiesDesc2: "Unión de Maedhros: Histórico intento confederado para coordinar contingentes de Elfos, Enanos e Hombres frente al Terror.",
    ancientTestimonies: "Testimonios Antiguos",
    chroniclesBeleriand: "Cronistas de Beleriand",
    chroniclesBeleriandDesc: "«Muchos cantos nostálgicos se han compuesto de las cruentas guerras de Beleriand, pero lamentablemente pocos pergaminos logran transmitir la inmensa desolación de los Balrog.»",
    consultArchivesButton: "Consultar Archivos",

    // Footer
    firstAgeSociety: "© Sociedad de Sabios de la Primera Edad. Todas las inscripciones en Quenya. Compilado por los maestros del saber de la Casa de Finwë en el exilio."
  },
  en: {
    // Top bar & Nav
    encyclopedia: "Encyclopedia",
    timeline: "Timeline",
    characters: "Characters",
    atlas: "Atlas",
    searchPlaceholder: "Search archives...",
    archiveResults: "Archive Results",
    close: "Close",
    noResults: "No related scrolls found.",
    heroesAndLegends: "Heroes & Legends",
    greatBattles: "Great Battles (Atlas)",
    milestones: "Historical Milestones",
    runesOfKnowledge: "Runes of Knowledge",
    archivesOfNargothrond: "Archives of Nargothrond",
    library: "Library",
    bestiary: "Bestiary",
    cartography: "Cartography",
    scribeOfNoldor: "Scribe of the Noldor",
    finrodSigil: "Finrod's Sigil",

    // Home View
    beleriandEnc: "The Encyclopedia of Beleriand",
    youngWorldQuote: "“In those days, the world was young and the stars were new. Here are recorded the deeds of the Elder Days, from the awakening of the Elves to the fall of Angband.”",
    cantarGestas: "Song of Epic Deeds",
    cronicasSilmarils: "Chronicles of the Silmarils",
    cronicasDesc: "The mystical tale of the fate of the three perfect jewels created by Fëanor of Aman, and the ancient spiritual war that consumed the Noldor and the fertile lands of Beleriand.",
    consultFeanor: "Consult Fëanor",
    soberaniaHombres: "Sovereignties of Men",
    reinosEdain: "Realms of the Edain",
    reinosEdainDesc: "The heroic three allied houses of Men who crossed the summits of Ered Luin.",
    pitsOfIron: "Pits of Iron",
    sombraNorte: "The Shadow of the North",
    sombraDesc: "The terrible legions of Morgoth and the unstoppable rise of Angband's industrial war machine.",
    legendaryCartography: "Legendary Cartography",
    firstAgeCartography: "First Age Cartography",
    cartographyDesc: "Explore the detailed hand-drawn maps of Beleriand, from the sandy coasts of Falas guarded by Círdan to the freezing peaks of Thangorodrim. Locate the secret hidden fortresses of Gondolin and Nargothrond which resisted absolute ruin.",
    openAtlas: "Open Atlas",
    gondolinQuote: "“Gondolin has fallen, the ships of Círdan await at the Mouths of Sirion, but the songs of the five battles shall be sung forever as long as the stars burn.”",
    loreMastersPrefix: "— Sages of the House of Eldar",

    // Timeline View
    annalsOfElderDays: "Annals of the Elder Days",
    timelineTitle: "Chronology of the First Age",
    climaxAge: "Climax of the Age",
    historicMilestone: "Historical Milestone",
    hideChronicle: "Hide chronicle",
    viewScribesNotes: "Scribe notes",
    scribeNoteText: "Faithful transcription from the archives of Nargothrond: “The wise record that the weight of this milestone decisively shaped the subsequent battles of Western Beleriand.”",
    endedFirstAge: "THUS ENDED THE FIRST AGE OF THE WORLD IN LIGHT AND IN SHADOW.",

    // Characters / Bestiary View
    heroesGallery: "Gallery of Heroes and Villains",
    legendsQuote: "“Let their names be kept in the stones of Beleriand, for their fates wove the music of the world.”",
    raceFilterLabel: "Race",
    realmFilterLabel: "Realm",
    keyDeedsLabel: "Key Deed",
    closeScrollOf: "Close scroll of",
    scribeChronicle: "Scribe Chronicle • First Age Scholar",
    spouse: "Spouse",
    weapon: "Weapon",
    status: "Status",
    readFullBio: "Read Full Biography",
    shareChronicle: "Share Tale",
    memorableDeeds: "Memorable Deeds",
    saveSuccessAlert: "The legend of {name} has been saved to your local scroll!",
    feanorMithrim: "Deceased in Mithrim",
    fingolfinDoor: "Deceased before the gates of Thangorodrim",
    luthienMortal: "Deceased as a Mortal",
    berenTolGalen: "Deceased in Tol Galen",
    morgothVoid: "Cast into the Timeless Void",
    turinCabed: "Deceased in Cabed-en-Aras",
    fingolfinDuelTitle: "The Final Duel before Angband",
    fingolfinDuelDesc: "“Fingolfin wounded the Dark Lord seven times, and his cries of divine pain shook the foundations of Middle-earth, and Morgoth halted ever since that fateful day.”",

    // Atlas View
    warAtlasTitle: "Atlas of Wars and Armies",
    warAtlasDesc: "An interactive cartographic record of the five great battles of Beleriand and the devastating conflicts that reshaped the First Age of Arda.",
    mapInteractiveTip: "🧭 Click on the swords, shields, and flame glyphs to view chronological tactical reports",
    mapSelectPrompt: "Select a battle on the map to display the ancient cartographic records of Arda",
    warChronicles: "War Chronicles",
    shadowForces: "Shadow Forces",
    freeForces: "Forces of Light",
    strategicOutcome: "STRATEGIC OUTCOME",
    lightStrategies: "Strategies of Light",
    shadowMachinery: "Shadow Machinery",
    shadowMachineryDesc1: "Flames of the Bragollach: Dreadful rivers and tongues of liquid fire poured from Thangorodrim to destroy the fertile croplands of Ard-galen.",
    shadowMachineryDesc2: "Glaurung the Golden: The colossal first urulóki dragon, unleashed as a lethal organic tank to crush unguarded Elven phalanxes.",
    lightStrategiesDesc1: "The Siege of Angband: For nearly 400 years, the noble houses of the Noldor kept Morgoth under strict siege in his northern stronghold.",
    lightStrategiesDesc2: "Union of Maedhros: Historic confederate attempt to coordinate forces from Elves, Dwarves, and Men against the Terror.",
    ancientTestimonies: "Ancient Testimonies",
    chroniclesBeleriand: "Scribes of Beleriand",
    chroniclesBeleriandDesc: "“Many nostalgic songs have been composed of the bitter wars of Beleriand, but sadly few scrolls succeed in conveying the absolute desolation of the Balrogs.”",
    consultArchivesButton: "Consult Archives",

    // Footer
    firstAgeSociety: "© First Age Scholarly Society. All inscriptions in Quenya. Compiled by the loremasters of the House of Finwë in exilium."
  }
};

// ========================================================================= 
// DATABASE OVERRIDES IN ENGLISH
// ========================================================================= 

export const dbEnOverrides = {
  // Timeline Events English Text
  timeline: {
    "evt-1": {
      title: "The Awakening of the Elves",
      description: "Under the starlight of Cuiviénen, in the far east of Middle-earth, the Firstborn awoke. Knowing not yet the Valar, they spoke their first words and gazed upon the stars created by Varda."
    },
    "evt-2": {
      title: "The Darkening of Valinor",
      description: "Melkor and Ungoliant destroyed the two holy Trees, Laurelin and Telperion, casting the Blessed Realm into an unnatural darkness. This act of supreme malice forever changed the fate of Arda."
    },
    "evt-3": {
      title: "The Flight of the Noldor",
      description: "Driven by the dire Oath of Fëanor and the theft of the Silmarils, the Noldor departed from Aman, crossing the treacherous grinding ice of Helcaraxë to wage a millenary war against the Great Enemy in Middle-earth."
    },
    "evt-4": {
      title: "The War of Wrath",
      description: "The host of Valinor descended with terrible speed. The colossal dragon Ancalagon the Black fell wrapped in flames from the sky, and Beleriand was broken and sunk beneath the waves in the fury of the Valar. Melkor was finally cast into the Timeless Void."
    }
  },

  // Battles English Text
  battles: {
    "battle-1": {
      title: "Dagor-nuin-Giliath",
      year: "Y.S. 1 F.A.",
      shadowForces: ["Orcs of Angband", "White Wolves"],
      freeForces: ["Host of Fëanor", "Noldor"],
      outcome: "Pyrrhic victory for the Noldor. Death of Fëanor at the hands of Gothmog, Lord of Balrogs."
    },
    "battle-2": {
      title: "Dagor Aglareb",
      year: "Y.S. 60 F.A.",
      shadowForces: ["Legions of Morgoth", "Vanguard Orcs"],
      freeForces: ["House of Fingolfin", "Host of Maedhros", "Dwarves"],
      outcome: "Glorious Elven victory. Commencement of the great Siege of Angband, securing peace for nearly four centuries."
    },
    "battle-3": {
      title: "Dagor Bragollach",
      year: "Y.S. 455 F.A.",
      shadowForces: ["Glaurung the Golden", "Balrog Lords", "Fire-Dragons"],
      freeForces: ["House of Fingolfin", "House of Barahir", "Host of Finrod"],
      outcome: "Absolute disaster for the Free Peoples. The siege is broken under sweeping rivers of liquid fire."
    },
    "battle-4": {
      title: "Nírnaeth Arnoediad",
      year: "Y.S. 472 F.A.",
      shadowForces: ["Gothmog", "Easterling Traitors", "Orcish Legions"],
      freeForces: ["Fingon", "Turgon of Gondolin", "Edain of Húrin"],
      outcome: "The Battle of Unnumbered Tears. Near-total destruction of the confederated league of Elves and Men."
    },
    "battle-5": {
      title: "War of Wrath",
      year: "Y.S. 545-587 F.A.",
      shadowForces: ["Ancalagon the Black", "Morgoth Bauglir", "Hosts of the Pit"],
      freeForces: ["Host of Valinor", "Eärendil the Mariner", "Great Eagles of the Sky"],
      outcome: "Total geological disruption and drowning of Beleriand. Epic end of the First Age and absolute defeat of Melkor."
    }
  },

  // Characters English Text
  characters: {
    "feanor": {
      name: "Fëanor Curufinwë",
      race: "Elf",
      realm: "Hithlum",
      title: "The Spirit of Fire",
      subtitle: "High King of the Noldor, Creator of the Silmarils",
      weapon: "Forge Hammer / Runic Sword",
      status: "Deceased in Mithrim",
      stats: [
        { label: "Lineage", value: "Firstborn of Finwë", icon: "family_history" },
        { label: "High Title", value: "High King of the Noldor", icon: "military_tech" },
        { label: "Greatest Work", value: "Forge of the Silmarils & Tengwar", icon: "auto_stories" }
      ],
      bioBlocks: [
        {
          title: "Firstborn of Finwë",
          text: "Firstborn of Finwë and the craftswoman Míriel Serindë, who spent all her life-force during gestation, departing willingly to Lorien after his birth.",
          icon: "shield"
        },
        {
          title: "High King of the Noldor",
          text: "Proclaimed High King after the murder of his father Finwë in Formenos. Led the glorious but tragic departure into exilium under an unbreakable oath.",
          icon: "swords"
        },
        {
          title: "Master of Arts & Invention",
          text: "His mind surpassed all other Elves in craft. Developed the widespread Tengwar alphabet and forged the Palantíri, the seeing stones.",
          icon: "menu_book"
        }
      ],
      memorableDeeds: [
        {
          title: "The Unbreakable Oath",
          text: "Bound his fate and that of his seven sons in a dreadful covenant before Eru Ilúvatar, swearing to pursue any who withheld the Silmarils.",
          icon: "gavel"
        },
        {
          title: "Rebellion against Aman",
          text: "Defied the authority of the Valar and incited the Noldor to abandon the Blessed Realm to seek independent dominion.",
          icon: "flight_takeoff"
        },
        {
          title: "Burning of the Ships at Losgar",
          text: "Betrayed the hosts of Fingolfin and Finarfin, ordering the burning of the swan-necked ships stolen from Alqualondë.",
          icon: "local_fire_department",
          error: true
        }
      ],
      quote: '"Not even the Valar can undo what has been done."',
      detailedChronicle: {
        numeral: "I",
        era: "Age of the Trees",
        title: "Legacy of the Inner Flame",
        text1: "Fëanor was the greatest of the Eldar in all facets of mind and hand, but also the most proud and wrathful. His indomitable spirit burned so intensely that it eventually consumed him and dragged his people to ruin, epitomized by locking the light of the Trees into the three Silmarils.",
        text2: "His tragic fall matched his grand artistry. The theft of the jewels and murder of Finwë triggered the war. He fell mortally wounded by the whip of Gothmog on the dust plains of Mithrim.",
        quote: "We were not sent here to dwell in peace in other gardens."
      }
    },
    "fingolfin": {
      name: "Fingolfin",
      race: "Elf",
      realm: "Hithlum",
      title: "Greatest of the Eldar",
      subtitle: "High King of Hithlum, most valiant and steadfast",
      weapon: "Ringil, the Ice-Blue Sword",
      status: "Deceased before the gates of Thangorodrim",
      stats: [
        { label: "Royal Seat", value: "Barad Eithel", icon: "castle" },
        { label: "Legendary Sword", value: "Ringil", icon: "swords" },
        { label: "Dominion", value: "Kingdom of Hithlum", icon: "shield" }
      ],
      bioBlocks: [
        {
          title: "The Helcaraxë Crossing",
          text: "Abandoned in Valinor by Fëanor's betrayal, he led the majority of the Noldor across the freezing ice of Helcaraxë, arriving under the first Moonrise.",
          icon: "ac_unit"
        },
        {
          title: "Reign of Hithlum",
          text: "Established his royal seat at Barad Eithel, fortifying the passes and enforcing the long siege that held the Dark Lord at bay for centuries.",
          icon: "castle"
        }
      ],
      memorableDeeds: [
        {
          title: "Healing of the Feud",
          text: "With noble grace, he forgave the slights of Fëanor's sons to present a unified front of the Eldar against the Shadow.",
          icon: "handshake"
        },
        {
          title: "Crowning Duel",
          text: "Riding upon Rochallor, he rode in desperation to the gates of Thangorodrim to challenge Morgoth Bauglir to single combat.",
          icon: "swords"
        }
      ],
      quote: '"Ringil shall bite deep before the bitter setting."',
      detailedChronicle: {
        numeral: "II",
        era: "First Age",
        title: "The Final Duel before Angband",
        text1: "Driven by grief and wrath at the collapse of the northern front in the flames of Bragollach, Fingolfin rode alone like a silver bolt. Arriving at the gates of Angband, he blew his horn to summon the Dark Lord to single combat.",
        text2: "In the legendary duel, Fingolfin dodged the great hammer Grond and struck Morgoth seven times, leaving him forever crippled. Though he fell, Thorondor, King of Eagles, rescued his body from desecration.",
        quote: "And Morgoth went halt from that day forward."
      }
    },
    "luthien": {
      name: "Lúthien Tinúviel",
      race: "Half-Maia",
      realm: "Doriath",
      title: "The Nightingale of legend",
      subtitle: "Princess of Doriath, the fairest of all the Children of Ilúvatar",
      weapon: "Enchanted Song / Veil of Sleep",
      status: "Deceased as a Mortal",
      stats: [
        { label: "Divine Kin", value: "Daughter of Melian the Maia", icon: "auto_awesome" },
        { label: "Consort", value: "Beren One-Handed", icon: "favorite" },
        { label: "Royal Origin", value: "Princess of Doriath", icon: "crown" }
      ],
      bioBlocks: [
        {
          title: "The Dance in Neldoreth",
          text: "Under the stars of Neldoreth forest, she danced to the nightingale. There, Beren, a weary mortal outlaw, found her and changed both their fates.",
          icon: "nightlight"
        },
        {
          title: "Defeat of Sauron",
          text: "With Huan the hound, they defeated the wolves of Sauron at Tol-in-Gaurhoth, forcing him to yield the fortress to rescue Beren.",
          icon: "security"
        }
      ],
      memorableDeeds: [
        {
          title: "Song of Sleep",
          text: "In the dark of Angband, she sang a song of such depth and sorrow that it lulled the entire court and Morgoth himself to sleep.",
          icon: "music_note"
        },
        {
          title: "The Lament in Mandos",
          text: "She was the only Elf whose sorrowful song moved the heart of Mandos, winning a reprieve to return as mortal together.",
          icon: "hourglass_empty"
        }
      ],
      quote: '"The leaves are falling; the song of Tinúviel shall fade from Beleriand."',
      detailedChronicle: {
        numeral: "III",
        era: "First Age",
        title: "Choice of Mortality",
        text1: "Following Beren's death under Carcharoth's fangs, Lúthien's spirit fled to the Halls of Mandos. Standing before the keeper, she sang the most sorrowful lament ever conceived.",
        text2: "Offered a choice: dwell in the bliss of Valinor forever without Beren, or return to Middle-earth to live a brief mortal life with him. She chose to share his mortal fate and left immortality behind.",
        quote: "Under the stars of Menegroth, we shall rest in peace."
      }
    },
    "beren": {
      name: "Beren Erchamion",
      race: "Man",
      realm: "Doriath",
      title: "Hero of the Houses of Men",
      subtitle: "The One-Handed, the Outlaw who crossed the Girdle",
      weapon: "Angrist, the Iron-Cleaving Knife",
      status: "Deceased in Tol Galen",
      stats: [
        { label: "Race", value: "Human (Edain of Beör)", icon: "terrain" },
        { label: "Greatest Deed", value: "Recovered a Silmaril from Angband", icon: "diamond" },
        { label: "Knife", value: "Angrist (Dwarven chisel)", icon: "colorize" }
      ],
      bioBlocks: [
        {
          title: "Outlaw of Dorthonion",
          text: "After the slaughter of Beör's house, he led the last outlaws in guerilla warfare against Orcs occupying Dorthonion.",
          icon: "forest"
        },
        {
          title: "Encounter in Neldoreth",
          text: "Bypassed Melian's Girdle through divine favor. Espied Lúthien dancing under the golden beeches of Neldoreth and loved her.",
          icon: "favorite"
        }
      ],
      memorableDeeds: [
        {
          title: "Quest for the Silmaril",
          text: "Aided by the sacrifice of King Finrod Felagund, they penetrated Angband and used Angrist to cut a Silmaril from the Crown.",
          icon: "diamond"
        },
        {
          title: "Loss of the Hand",
          text: "At the gate, Carcharoth the great wolf bit off his hand containing the Silmaril, driving the beast mad with burning fire.",
          icon: "front_hand"
        }
      ],
      quote: '"The Silmaril is in my hand, yet the hand is no more."',
      detailedChronicle: {
        numeral: "IV",
        era: "First Age",
        title: "The Great Wolf Hunt",
        text1: "Driven mad by the burning jewel, Carcharoth invaded Doriath. Beren rode with Huan the hound and Thingol to stop the beast.",
        text2: "In the final battle, Beren shielded Thingol and took mortal wounds from the wolf's fangs. He returned temporarily through Lúthien's historic choice.",
        quote: "Beneath the peace of Sirion, the One-Handed rests."
      }
    },
    "morgoth": {
      name: "Morgoth Bauglir",
      race: "Ainu",
      realm: "Angband",
      title: "The Primordial Tyrant",
      subtitle: "The First Dark Lord, Enemy of the Ancient World",
      weapon: "Grond, the Hammer of the Underworld",
      status: "Cast into the Timeless Void",
      stats: [
        { label: "Stronghold", value: "The Pits of Angband", icon: "fort" },
        { label: "Iron Mace", value: "Grond, the Great Hammer", icon: "gavel" },
        { label: "Divine Status", value: "First of the Valar in Rebellion", icon: "cyclone" }
      ],
      bioBlocks: [
        {
          title: "Melkor's Original Fall",
          text: "Created as Melkor, greatest of the Ainur. He sowed discord and selfishness during the great Music that shaped existence.",
          icon: "cyclone"
        },
        {
          title: "The Iron Fortress of Angband",
          text: "Delved the dark halls of Angband in the north, capped by the volcanic peaks of Thangorodrim that spewed ash over Beleriand.",
          icon: "fort"
        }
      ],
      memorableDeeds: [
        {
          title: "Destruction of the Trees",
          text: "Accompanied by Ungoliant, he poisoned the sacred Trees of Valinor, casting the realm of the Valar into ancient darkness.",
          icon: "park"
        },
        {
          title: "Theft of the Silmarils",
          text: "Slew Finwë, stole the three Silmarils, and set them into his iron Crown, proclaiming himself master of the world.",
          icon: "diamond"
        },
        {
          title: "Breeding of the Monsters",
          text: "Tortured captured Elves to breed the first Orcs, unleashing dragons, Balrogs, and wolves upon the lands of Beleriand.",
          icon: "skull"
        }
      ],
      quote: '"This is my world, and my shadow lies upon it."',
      detailedChronicle: {
        numeral: "V",
        era: "Elder Days",
        title: "Doom of the Children of Húrin",
        text1: "Morgoth did not just destroy through weapons; he delighted in corrupting the spirits of his enemies. He captured Húrin and chained him to watch the ruin of his kin.",
        text2: "The curse he laid upon Túrin Turambar and Niënor unfolded systematically, leading to the greatest tragedies of the First Age long before the land sank.",
        quote: "There is no hope under the iron grip."
      }
    },
    "turin": {
      name: "Túrin Turambar",
      race: "Man",
      realm: "Nargothrond",
      title: "Master of Fate",
      subtitle: "The Tragic Hero, Slayer of Glaurung the Golden",
      weapon: "Gurthang, the Black Iron Sword",
      status: "Deceased at Cabed-en-Aras",
      stats: [
        { label: "Curse", value: "Cast of Húrin's Doom", icon: "priority_high" },
        { label: "Black Sword", value: "Gurthang", icon: "colorize" },
        { label: "Realms", value: "Doriath / Nargothrond / Brethil", icon: "castle" }
      ],
      bioBlocks: [
        {
          title: "Fostered in Doriath",
          text: "Sent away to escape Easterling outlaws, he was fostered by King Thingol of Doriath, growing into a formidable woodland ranger.",
          icon: "shield"
        },
        {
          title: "Nargothrond's Ruin",
          text: "Advised the building of a great bridge at Nargothrond's gates, showing his pride and allowing Glaurung to locate the kingdom.",
          icon: "castle"
        }
      ],
      memorableDeeds: [
        {
          title: "Slaying of Glaurung",
          text: "Amburned the great gold dragon at the gorge of Cabed-en-Aras, piercing its belly with Gurthang, ending its terror.",
          icon: "skull"
        },
        {
          title: "Wrestling with Fate",
          text: "Renamed himself constantly (Mormegil, Turambar) in a vain, desperate attempt to escape Melkor's doom.",
          icon: "auto_awesome"
        }
      ],
      quote: '"Hail Gurthang, cold steel of betrayal!"',
      detailedChronicle: {
        numeral: "VI",
        era: "First Age",
        title: "Fall of the Black Sword",
        text1: "Túrin was the greatest outlaw captain of his time, spreading terror among Orcs under his Dragon-helm. Yet his courage was forever bound to his pride.",
        text2: "Upon learning Glaurung's final words which revealed his tragic, unwitting union with his sister, he cast himself upon Gurthang's black blade.",
        quote: "And the rocks wept for the end of Turambar."
      }
    }
  }
};

// Localized database helpers
export function getLocalizedTimeline(events: any[], lang: Language) {
  if (lang === "es") return events;
  return events.map(evt => {
    const override = dbEnOverrides.timeline[evt.id as keyof typeof dbEnOverrides.timeline];
    if (override) {
      return { ...evt, ...override };
    }
    return evt;
  });
}

export function getLocalizedBattles(btls: any[], lang: Language) {
  if (lang === "es") return btls;
  return btls.map(b => {
    const override = dbEnOverrides.battles[b.id as keyof typeof dbEnOverrides.battles];
    if (override) {
      return { ...b, ...override };
    }
    return b;
  });
}

export function getLocalizedCharacters(chars: any[], lang: Language) {
  if (lang === "es") return chars;
  return chars.map(c => {
    const override = dbEnOverrides.characters[c.id as keyof typeof dbEnOverrides.characters];
    if (override) {
      return { ...c, ...override };
    }
    return c;
  });
}

