export interface Member {
  name: string;
  en?: string;
  id?: string;
  subtitle?: string;
  role?: { es: string; en: string };
}

export interface Box {
  title: { es: string; en: string };
  isWide?: boolean;
  subColumns?: {
    title: { es: string; en: string };
    members: Member[];
  }[];
  members?: Member[];
  description?: { es: string; en: string };
  titleColor?: string;
}

export interface Category {
  title: { es: string; en: string };
  themeColor: string;
  borderColor: string;
  textColor: string;
  bgDot: string;
  boxes: Box[];
}

export const secondaryCategories: Category[] = [
  {
    title: { es: "Ainur: Los Divinos", en: "Ainur: The Holy Ones" },
    themeColor: "indigo",
    borderColor: "border-indigo-500/20",
    textColor: "text-indigo-600 dark:text-indigo-400",
    bgDot: "bg-indigo-500",
    boxes: [
      {
        title: { es: "El Origen", en: "The Origin" },
        members: [{ name: "Eru Ilúvatar" }]
      },
      {
        title: { es: "Los Valar", en: "The Valar" },
        members: [
          { name: "Manwë Súlimo" },
          { name: "Ulmo" },
          { name: "Aulë el Herrero", en: "Aulë the Smith" },
          { name: "Oromë Aldaron" },
          { name: "Mandos (Námo)" },
          { name: "Lórien (Irmo)" },
          { name: "Tulkas Astaldo" }
        ]
      },
      {
        title: { es: "Las Valier", en: "The Valier" },
        members: [
          { name: "Varda Elentári" },
          { name: "Yavanna Kementári" },
          { name: "Nienna" },
          { name: "Estë la Gentil", en: "Estë the Gentle" },
          { name: "Vairë la Tejedora", en: "Vairë the Weaver" },
          { name: "Vána la Siempre Joven", en: "Vána the Ever-young" },
          { name: "Nessa la Bailarina", en: "Nessa the Dancer" }
        ]
      },
      {
        title: { es: "Los Maiar", en: "The Maiar" },
        members: [
          { name: "Melian (Reina de Doriath)", en: "Melian (Queen of Doriath)", id: "melian" },
          { name: "Eönwë", id: "eonwe" },
          { name: "Ilmarë", id: "ilmare" },
          { name: "Ossë", id: "osse" },
          { name: "Uinen", id: "uinen" },
          { name: "Olórin (Gandalf)", id: "olorin" },
          { name: "Arien", id: "arien" },
          { name: "Tilion", id: "tilion" },
          { name: "Cúrunír (Saruman)", en: "Cúrunír (Saruman)", id: "curunir" },
          { name: "Radagast el Pardo", en: "Radagast the Brown", id: "radagast" }
        ]
      }
    ]
  },
  {
    title: { es: "Elfos: Los Quendi", en: "Elves: The Quendi" },
    themeColor: "sky",
    borderColor: "border-sky-500/20",
    textColor: "text-sky-600 dark:text-sky-400",
    bgDot: "bg-sky-500",
    boxes: [
      {
        title: { es: "Los Noldor (Exiliados)", en: "The Noldor (Exiles)" },
        isWide: true,
        subColumns: [
          {
            title: { es: "CASA DE FINWË", en: "HOUSE OF FINWË" },
            members: [
              { name: "Finwë" },
              { name: "Míriel Serindë" },
              { name: "Fëanor (Curufinwë)", id: "feanor" },
              { name: "Maedhros" },
              { name: "Maglor" },
              { name: "Celegorm" },
              { name: "Caranthir" },
              { name: "Curufin" },
              { name: "Amrod" },
              { name: "Amras" }
            ]
          },
          {
            title: { es: "CASA DE FINGOLFIN", en: "HOUSE OF FINGOLFIN" },
            members: [
              { name: "Fingolfin", id: "fingolfin" },
              { name: "Fingon el Valiente", en: "Fingon the Valiant" },
              { name: "Turgon (Señor de Gondolin)", en: "Turgon (Lord of Gondolin)" },
              { name: "Aredhel la Blanca", en: "Aredhel the White" },
              { name: "Idril Celebrindal" }
            ]
          },
          {
            title: { es: "CASA DE FINARFIN", en: "HOUSE OF FINARFIN" },
            members: [
              { name: "Finarfin" },
              { name: "Finrod Felagund" },
              { name: "Angrod" },
              { name: "Aegnor" },
              { name: "Galadriel" },
              { name: "Orodreth" },
              { name: "Finduilas" }
            ]
          }
        ]
      },
      {
        title: { es: "Los Vanyar", en: "The Vanyar" },
        members: [
          { name: "Ingwë (Alto Rey)", en: "Ingwë (High King)" },
          { name: "Indis" }
        ]
      },
      {
        title: { es: "Los Sindar y Teleri", en: "The Sindar & Teleri" },
        members: [
          { name: "Thingol (Elwë Singollo)" },
          { name: "Celeborn" },
          { name: "Círdan el Carpintero de Barcos", en: "Círdan the Shipwright" },
          { name: "Beleg Cúthalion" },
          { name: "Mablung" },
          { name: "Daeron el Menestrel", en: "Daeron the Minstrel" }
        ]
      },
      {
        title: { es: "Los Nandor", en: "The Nandor" },
        members: [
          { name: "Lenwë" },
          { name: "Denethor (Líder Laiquendi)", en: "Denethor (Leader of Laiquendi)" },
          { name: "Saeros" }
        ]
      }
    ]
  },
  {
    title: { es: "Hombres: Los Edain y Otros", en: "Men: The Edain & Others" },
    themeColor: "blue",
    borderColor: "border-blue-500/20",
    textColor: "text-blue-600 dark:text-blue-400",
    bgDot: "bg-blue-600",
    boxes: [
      {
        title: { es: "Casa de Bëor", en: "House of Bëor" },
        members: [
          { name: "Bëor el Viejo", en: "Bëor the Old" },
          { name: "Barahir (Padre de Beren)", en: "Barahir (Father of Beren)" },
          { name: "Beren Erchamion", id: "beren" },
          { name: "Morwen Eledhwen" }
        ]
      },
      {
        title: { es: "Casa de Hador", en: "House of Hador" },
        members: [
          { name: "Hador Lórindol" },
          { name: "Galdor el Alto", en: "Galdor the Tall" },
          { name: "Húrin Thalion" },
          { name: "Huor" },
          { name: "Túrin Turambar", id: "turin" },
          { name: "Tuor Eladar" }
        ]
      },
      {
        title: { es: "Casa de Haleth", en: "House of Haleth" },
        members: [
          { name: "Haldad" },
          { name: "Lady Haleth" },
          { name: "Haldar" }
        ]
      },
      {
        title: { es: "Los Orígenes Dúnedain", en: "The Dúnedain Origins" },
        members: [
          { name: "Eärendil el Marinero", en: "Eärendil the Mariner" },
          { name: "Elwing la Blanca", en: "Elwing the White" },
          { name: "Elros Tar-Minyatur" },
          { name: "Elrond Medio elfo", en: "Elrond Half-elven" }
        ]
      },
      {
        title: { es: "Orientales (Hombres Cetrinos)", en: "Easterlings (Hombres Cetrinos)" },
        titleColor: "text-red-600 dark:text-red-400",
        members: [
          { name: "Bór y sus Hijos", en: "Bór and his sons" },
          { name: "Ulfang el Negro", en: "Ulfang the Black" },
          { name: "Uldor el Maldito", en: "Uldor the Accursed" },
          { name: "Brodda" }
        ]
      }
    ]
  },
  {
    title: { es: "Enanos: Los Naugrim", en: "Dwarves: The Naugrim" },
    themeColor: "slate",
    borderColor: "border-slate-500/20",
    textColor: "text-slate-600 dark:text-slate-400",
    bgDot: "bg-slate-500",
    boxes: [
      {
        title: { es: "Los Padres", en: "The Fathers" },
        members: [{ name: "Durin el Inmortal", en: "Durin the Deathless" }]
      },
      {
        title: { es: "Señores y Reyes", en: "Lords & Kings" },
        members: [
          { name: "Azaghâl (Señor de Belegost)", en: "Azaghâl (Lord of Belegost)" },
          { name: "Naugladur (Señor de Nogrod)", en: "Naugladur (Lord of Nogrod)" }
        ]
      },
      {
        title: { es: "Los Herreros", en: "The Smiths" },
        members: [
          { name: "Telchar (Creador de Narsil)", en: "Telchar (Maker of Narsil)" },
          { name: "Gamil Zirak" }
        ]
      },
      {
        title: { es: "Enanos Mezquinos", en: "Petty-Dwarves" },
        members: [
          { name: "Mîm" },
          { name: "Ibûn & Khîm" }
        ]
      }
    ]
  },
  {
    title: { es: "La Sombra: Criaturas de la Oscuridad", en: "The Shadow: Creatures of Darkness" },
    themeColor: "red",
    borderColor: "border-red-500/20",
    textColor: "text-red-600 dark:text-red-400",
    bgDot: "bg-red-600",
    boxes: [
      {
        title: { es: "Señores Oscuros y Lugartenientes", en: "Dark Lords & Lieutenants" },
        members: [
          { 
            name: "Sauron (Mairon/Gorthaur)", 
            role: { es: "LUGARTENIENTE DE MORGOTH", en: "MORGOTH'S LIEUTENANT" }
          },
          { 
            name: "Gothmog", 
            role: { es: "SEÑOR DE LOS BALROGS", en: "LORD OF BALROGS" }
          }
        ]
      },
      {
        title: { es: "Grandes Terrores", en: "Great Terrors" },
        members: [
          { name: "Ungoliant (La Gran Araña)", en: "Ungoliant (The Great Spider)" },
          { name: "Glaurung (Padre de Dragones)", en: "Glaurung (Father of Dragons)" },
          { name: "Ancalagon el Negro", en: "Ancalagon the Black" },
          { name: "Carcharoth (Anfauglir)" },
          { name: "Draugluin (Padre de Licántropos)", en: "Draugluin (Sire of Werewolves)" },
          { name: "Thuringwethil (Mensajera de Sauron)", en: "Thuringwethil (Messenger of Sauron)" }
        ]
      },
      {
        title: { es: "Los Valaraukar", en: "The Valaraukar" },
        members: [],
        description: {
          es: "«Los flagelos de fuego, espíritus de sombra y llama que siguieron a Melkor.» \n— Los Balrogs de Angband.",
          en: "“The Scourges of Fire, spirits of shadow and flame that followed Melkor.” \n— The Balrogs of Angband."
        }
      }
    ]
  }
];

export interface SecondaryLoreEntry {
  title: string;
  race: string;
  subtitle?: string;
  epicQuote?: string;
  deeds: string[];
}

export const secondaryLoreDatabaseEs: Record<string, SecondaryLoreEntry> = {
  "Eru Ilúvatar": {
    title: "El Creador de Arda",
    race: "Deidad Suprema",
    epicQuote: "«Y del Silencio de los Espacios Eternos, Eru desató el fuego sagrado de la existencia.»",
    deeds: [
      "Creación del Universo primordial (Eä) y Arda mediante el canto original de los Ainur.",
      "Padre y creador directo de los Primeros y Segundos Nacidos (Elfos y Hombres).",
      "Poseedor absoluto de la Llama Impercedera, de donde emana la vida soberana."
    ]
  },
  "Manwë Súlimo": {
    title: "Alto Rey de Arda, Señor del Aire",
    race: "Vala",
    epicQuote: "«Él rige todos los vientos, ráfagas y brisas, y los servidores alados vuelan a su mandato.»",
    deeds: [
      "Gobernante supremo de Arda tras la expulsión de Melkor a las tinieblas primigenias.",
      "Rey de los Valar en el monte sagrado Taniquetil bajo la luz pura de Aman.",
      "Sus grandes águilas traen crónicas continuas de toda desolación en la Tierra Media."
    ]
  },
  "Ulmo": {
    title: "Señor de las Aguas Profundas",
    race: "Vala",
    epicQuote: "«En las venas de la tierra fluye el eco de la voz de Ulmo, que nunca abandona a los exiliados.»",
    deeds: [
      "Guardián solitario del gran mar exterior (Ekkaia) y de todos los ríos y manantiales.",
      "Sostuvo eternamente la fe de los Elfos exiliados, alertando a Turgon y Finrod sobre fortalezas secretas.",
      "Su místico cantar en las caracolas (Ulumúri) infunde el añoro por el Gran Mar."
    ]
  },
  "Aulë el Herrero": {
    title: "El Gran Hacedor, Señor de la Tierra",
    race: "Vala",
    epicQuote: "«La solidez de las montañas y la destreza en los telares y forjas son obra directa de Aulë.»",
    deeds: [
      "Diseñador de la corteza mineral del mundo y de las dos grandes luminarias de Arda.",
      "Creador directo de los Enanos (Naugrim) a partir de la dura arcilla de la tierra.",
      "Maestro de Fëanor y sabio mentor de la destreza manual de los Noldor."
    ]
  },
  "Oromë Aldaron": {
    title: "El Gran Cazador, Domador de Bestias",
    race: "Vala",
    epicQuote: "«Al sonar el cuerno de Oromë, Valaroma, las sombras de Angband retrocedían despavoridas.»",
    deeds: [
      "Descubrió a los Elfos recién despertados en Cuiviénen y los guió seguros a Valinor.",
      "Cazador legendario de las monstruosidades de Melkor en los bosques oscuros de la Tierra Media.",
      "Maestro de armas y mentor espiritual de los héroes y monteros indómitos."
    ]
  },
  "Mandos (Námo)": {
    title: "El Juez, Guardián de los Muertos",
    race: "Vala",
    epicQuote: "«Él conoce todos los destinos decretados por Eru, y no olvida ningún lamento.»",
    deeds: [
      "Gobernador de las Estancias de Mandos, donde acorrala las almas de los Elfos fallecidos.",
      "Pronunció el trágico Juicio de Mandos contra la deserción forzada de la hueste de Fëanor.",
      "Otorgó a Beren y Lúthien el pasaje de retorno a la mortalidad por el poder del llanto sagrado."
    ]
  },
  "Lórien (Irmo)": {
    title: "Señor de las Visiones y los Sueños",
    race: "Vala",
    deeds: [
      "Gobernador de los idílicos jardines florecientes de Lórien en el bendecido continente de Aman.",
      "Señor del reposo espiritual, el alivio psicológico de los Valar y las místicas visiones nocturnas.",
      "Ofreció eterno cobijo reparador a Míriel tras el colosal parto que concibió la llama de Fëanor."
    ]
  },
  "Tulkas Astaldo": {
    title: "El Luchador, Campeón de Valinor",
    race: "Vala",
    deeds: [
      "Llegó a Arda para auxiliar a los Valar, logrando derrotar físicamente a Melkor en combate singular.",
      "Señor de la fuerza marcial, la pura valentía física, que ríe en mitad de la vorágine bélica.",
      "Persiguió al Gran Enemigo incansablemente durante el secuestro violento de los tres Silmarils."
    ]
  },
  "Varda Elentári": {
    title: "La Reina de las Estrellas",
    race: "Valier",
    epicQuote: "«Elbereth Gilthoniel, cuyas manos alzaron el fuego de las estrellas sagradas sobre los cielos.»",
    deeds: [
      "Encendió las constelaciones celestiales con la mística plata de Telperion al despertar de los Elfos.",
      "La más amada y venerada protectora de los Elfos, cuyo nombre ahuyenta las sombras del mal.",
      "Consagró los venerables Silmarils para evitar que mano pecadora los tocara sin abrasarse."
    ]
  },
  "Yavanna Kementári": {
    title: "La Dadora de Frutos",
    race: "Valier",
    epicQuote: "«Sus cantos fecundan la tierra yerma y rigen el brote de los árboles primordiales.»",
    deeds: [
      "Creadora de los dos Árboles sagrados de Valinor, Laurelin y Telperion.",
      "Ideó los pastores de árboles (Ents) para proteger la naturaleza de los hachazos de los Enanos.",
      "Reunió la última savia brillante que creó el Sol y la Luna tras la ponzoña de Ungoliant."
    ]
  },
  "Nienna": {
    title: "Señora de la Compasión y el Duelo",
    race: "Valier",
    epicQuote: "«A través de las lágrimas puras de Nienna, el espíritu de Arda aprende la sabiduría suprema.»",
    deeds: [
      "Llora continuamente por las heridas de Arda infligidas por el Gran Enemigo.",
      "Regó con sus lágrimas curativas el místico montículo de Ezellohar para intentar sanar los Dos Árboles.",
      "Maestra directa de Olórin (Gandalf), enseñándole el valor sagrado de la piedad y la perseverancia."
    ]
  },
  "Estë la Gentil": {
    title: "Sanadora del Sueño reparador",
    race: "Valier",
    deeds: [
      "Señora de la curación física, la quietud mental y el reposo de las fatigas corporales.",
      "Habita junto a su esposo Irmo en los pacíficos lagos de Aman, brindando salud espiritual.",
      "Alivia a los fatigados de Arda mediante pacíficas brisas nocturnas."
    ]
  },
  "Vairë la Tejedora": {
    title: "Cronista de los Tiempos",
    race: "Valier",
    deeds: [
      "Teje todos los sucesos de la historia de Arda en grandes tapices mágicos eternos.",
      "Sus tapices cubren todas las cavernosas paredes de las estancias de Mandos para perpetuar la memoria.",
      "Registra con precisión solemne el auge y catastrófica caída de reinos elfos e imperios de Hombres."
    ]
  },
  "Vána la Siempre Joven": {
    title: "Señora de la Primavera y el Florecer",
    race: "Valier",
    deeds: [
      "Su presencia hace florecer las flores del camino y provoca el canto lírico de las aves migratorias.",
      "Es el epítome de la eterna renovación juvenil de la mística naturaleza virgen de Arda.",
      "Hermana menor de Yavanna, vigilando de cerca el despertar silvestre primaveral."
    ]
  },
  "Nessa la Bailarina": {
    title: "La Veloz, Danzarina de Valinor",
    race: "Valier",
    deeds: [
      "Señora de la velocidad y el dinamismo salvaje, que corre campo a través acompañada de ciervos salvajes.",
      "Su eterna danza alegra las místicas praderas doradas de la bendecida ciudad de Valmar.",
      "Esposa de Tulkas, encarnando la agilidad gozosa y la audaz vitalidad física."
    ]
  },
  "Melian (Reina de Doriath)": {
    title: "Señora del Cinturón Sagrado",
    race: "Maia",
    epicQuote: "«Mediante canciones de infinito poder, Melian protegió el bosque sagrado del azote de Morgoth.»",
    deeds: [
      "La única Maia que adoptó forma biológica para engendrar linaje directo con el gran rey Thingol.",
      "Tejió el 'Cinturón de Melian', un escudo místico infranqueable de laberintos y sombras alrededor de Doriath.",
      "Madre de Lúthien, heredándole la inigualable belleza y el poder sobre los corazones cansados."
    ]
  },
  "Eönwë": {
    title: "Heraldo de Manwë",
    race: "Maia",
    deeds: [
      "Gobernante máximo y heraldo de las huestes celestiales terrestres de Valinor durante la campaña final.",
      "Considerado el combatiente físico en armas más poderoso en la historia de toda Arda.",
      "Lideró victoriosamente los ejércitos de la Luz que asolaron las defensas de Angband en la Guerra de la Cólera."
    ]
  },
  "Ilmarë": {
    title: "Señorita de las Huestes divinas",
    race: "Maia",
    deeds: [
      "Primera dama del séquito de Varda, ejerciendo autoridad directa sobre las místicas huestes espirituales de Aman.",
      "Guardián celestial de la luz espiritual pura y las constelaciones estelares de la Primera Edad."
    ]
  },
  "Ossë & Uinen": {
    title: "Señores de los Mares Costeros",
    race: "Maia",
    deeds: [
      "Gobernadores de los mares de Arda bajo el mandato directo del supremo Señor de las Aguas, Ulmo.",
      "Ossë domina las olas embravecidas, naufragios y tormentas, mientras Uinen apacigua la mar.",
      "Grandes amigos y eternos protectores de los Elfos navegantes (Teleri)."
    ]
  },
  "Olórin (Gandalf)": {
    title: "El Más Sabio de los Ainur",
    race: "Maia",
    epicQuote: "«Caminaba en secreto por las estancias de los Elfos, infundiendo un coraje indomable en sus pechos.»",
    deeds: [
      "Conoció y perfeccionó la compasión gracias a los tristes llantos continuos de Nienna en Aman.",
      "Enviado milenios después como Gandalf, pero presente activamente en espíritu desde los Días Antiguos.",
      "Señor del fuego purificador y la inquebrantable guía contra del sometimiento oscuro."
    ]
  },
  "Arien & Tilion": {
    title: "Guias del Sol y de la Luna",
    race: "Maia",
    deeds: [
      "Arien es el místico espíritu de fuego que pilota el resplandeciente carro de Sol de Yavanna.",
      "Tilion es el guardián de la luna, pilotando la mística isla lunar que despertó a los Hombres en Hildórien.",
      "Mantienen el dinamismo cósmico temporal frente a las oscuridades de Thangorodrim."
    ]
  },
  "Maedhros": {
    title: "El Alto, Señor de la Frontera Oriental",
    race: "Elfo (Noldor)",
    epicQuote: "«A pesar de los tormentos sufridos en el abismo, Maedhros sostuvo la alianza elfa con una mano indomable.»",
    deeds: [
      "Primogénito de Fëanor, prisionero en Thangorodrim y milagrosamente rescatado por el audaz Fingon.",
      "Líder máximo de la Unión de Maedhros para expulsar de una vez al terror de Angband.",
      "Gobernador estratégico de la Frontera de Maedhros que resistió innumerables asedios de orcos."
    ]
  },
  "Maglor": {
    title: "El Gran Cantor, Poseedor del Silmaril",
    race: "Elfo (Noldor)",
    deeds: [
      "El segundo hijo de Fëanor, cuya inigualable voz cantora relataba la trágica caída de su linaje.",
      "Adoptó amorosamente a los huérfanos de la caída del Sirion: Elrond y Elros.",
      "Recuperó un Silmaril al final del conflicto, arrojándolo al doloroso abismo marino de Beleriand."
    ]
  },
  "Celegorm": {
    title: "El Hermoso, Señor de Himlad",
    race: "Elfo (Noldor)",
    deeds: [
      "Tercer vástago de Fëanor, cazador excelso y gran confidente del místico can Huan de Valinor.",
      "Gobernador militar del paso estratégico de Aglon junto a su hermano Curufin.",
      "Instigador de rebeliones internas y guerras civiles elficas en Nargothrond y Doriath por su soberbia."
    ]
  },
  "Caranthir": {
    title: "El Oscuro, Señor de Thargelion",
    race: "Elfo (Noldor)",
    deeds: [
      "Cuarto hijo de Fëanor, astuto administrador comercial y el primero en cruzar alianzas con los Enanos.",
      "Gobernó las indómitas llanuras orientales de Beleriand, acumulando gran riqueza en mineral.",
      "Falleció empuñando la espada en el devastador segundo fratricidio entre hermanos en Doriath."
    ]
  },
  "Curufin": {
    title: "El Hábil, Mente de Forja",
    race: "Elfo (Noldor)",
    deeds: [
      "Quinto hijo de Fëanor, heredero predilecto de la destreza en metales y la astuta dialéctica oradora de su padre.",
      "Padre de Celebrimbor, el posterior artífice de los místicos anillos de poder de la Segunda Edad.",
      "Trató de usurpar por la fuerza el trono de Nargothrond durante el cautiverio voluntario de Finrod."
    ]
  },
  "Amrod": {
    title: "El Cazador de Mitrim",
    race: "Elfo (Noldor)",
    deeds: [
      "Hijo mellizo de Fëanor, diestro montero de los espesos y fríos bosques del lago de Mithrim.",
      "Participó activamente en todas las batallas del juramento, muriendo empuñando las armas en Beleriand."
    ]
  },
  "Amras": {
    title: "Señor de los Bosques del Sur",
    race: "Elfo (Noldor)",
    deeds: [
      "Hermano mellizo de Amrod, destacado estratega forestal de las tierras vírgenes orientales.",
      "Fiel al juramento heredado, asoló junto a sus hermanos las dispersas colonias del Delta de la Tierra Media."
    ]
  },
  "Fingon el Valiente": {
    title: "Alto Rey de los Noldor, Señor de Hithlum",
    race: "Elfo (Noldor)",
    epicQuote: "«Con un coraje sin límites, Fingon escaló Thangorodrim para curar la herida fratricida del pasado.»",
    deeds: [
      "Rescató heroicamente a su primo Maedhros de las garras de Morgoth en los precipicios de Angband.",
      "Alto Rey de los Noldor tras el martirio de su gran padre Fingolfin ante las puertas de la Sombra.",
      "Falleció heroicamente en la mítica batalla de las Lágrimas Innumerables frente al látigo de Gothmog."
    ]
  },
  "Turgon (Señor de Gondolin)": {
    title: "El Rey Oculto de Gondolin",
    race: "Elfo (Noldor)",
    epicQuote: "«Gondolin resistió durante siglos como un faro de luz perfecto en mitad de un mundo ensombrecido.»",
    deeds: [
      "Fundó y gobernó la idílica y monumental ciudad oculta de Gondolin, en medio de las cordilleras de circundantes.",
      "Estratega sagaz que salvó al contingente aliado en la trágica batalla del Nírnaeth.",
      "Falleció defendiendo heroicamente su trono ante el devastador asedio con dragones de Angband."
    ]
  },
  "Aredhel la Blanca": {
    title: "La Princesa Elfa Amiga de las Águilas",
    race: "Elfo (Noldor)",
    deeds: [
      "Hermana de Turgon, aventurera insaciable que abandonó la seguridad de Gondolin para explorar bosques inexplorados.",
      "Atrapada en el místico bosque oscuro de Nan Elmoth por el esquivo elfo herrero Eöl.",
      "Madre de Maeglin, a quien defendió con su propio pecho de una lanza mortal en las estancias de Gondolin."
    ]
  },
  "Idril Celebrindal": {
    title: "Señora de los Pies de Plata",
    race: "Elfo (Noldor)",
    epicQuote: "«Su sabiduría previó la ruina inminente, construyendo el pasaje subterráneo secreto que salvó las semillas del futuro.»",
    deeds: [
      "Hija de Turgon que contrajo matrimonio con el mortal Tuor, fundiendo los dos excelsos linajes de luz.",
      "Diseñó en estricto secreto la ruta de escape subterránea que rescató a los supervivientes de Gondolin.",
      "Zarpó con Tuor rumbo al místico exilio inmortal del lejano y bendecido Oeste."
    ]
  },
  "Finarfin": {
    title: "Rey de los Noldor Residentes en Aman",
    race: "Elfo (Noldor)",
    deeds: [
      "El más sabio y pacífico de los hijos de Finwë, que arrepentido regresó a Valinor tras el gran Fratricidio.",
      "Gobernador de las diezmadas huestes remanentes de los Noldor bajo el perdón de los Valar.",
      "Comandó el ejército de Aman que asoló Angband y liberó a los esclavizados en la Guerra de la Cólera."
    ]
  },
  "Finrod Felagund": {
    title: "El Buscador de Cuevas, Fundador de Nargothrond",
    race: "Elfo (Noldor)",
    epicQuote: "«Ningún elfo tuvo mayor nobleza, entregando su propia corona para honrar un humilde juramento a un mortal.»",
    deeds: [
      "Fundó la impenetrable fortaleza subterránea de Nargothrond, inspirada en los micos de Menegroth.",
      "El primer elfo en descubrir, acoger y entablar tierna amistad duradera con los Hombres aliados.",
      "Falleció combatiendo orcos en las oscuras mazmorras de Sauron para salvar la vida del humano Beren."
    ]
  },
  "Angrod & Aegnor": {
    title: "Lores de las Tierras de Dorthonion",
    race: "Elfo (Noldor)",
    deeds: [
      "Valientes hermanos de Finrod que custodiaron la estratégica frontera norte de Dorthonion.",
      "Cayeron heroicamente en el frente de batalla abrasados por las lenguas ácidas de fuego de la Dagor Bragollach."
    ]
  },
  "Galadriel": {
    title: "Princesa del Linaje de Finarfin",
    race: "Elfo (Noldor)",
    epicQuote: "«Su mirada de estrellas reflejaba la luz pura de Valinor de los Días Antiguos.»",
    deeds: [
      "Hermana menor de Finrod, de intelecto colosal que estudió la sabiduría sublime de Melian en Doriath.",
      "Participó activamente en el gran exilio voluntario buscando reinos soberanos propios en la Tierra Media.",
      "La más destacada superviviente de la Primera Edad que perdura espléndida en las eras posteriores."
    ]
  },
  "Orodreth": {
    title: "Señor de las Torres de Nargothrond",
    race: "Elfo (Noldor)",
    deeds: [
      "Gobernó la fortaleza subterránea de Nargothrond tras la conmovedora partida heroica de Finrod.",
      "Escuchó fatalmente los bélicos consejos ambiciosos del humano Túrin, abandonando la estrategia defensiva.",
      "Cayó valientemente defendiendo los puentes de cristal en la sangrienta asolación del dragón Glaurung."
    ]
  },
  "Ingwë (Alto Rey)": {
    title: "Señor de los Minyar, Rey del Todo",
    race: "Elfo (Vanyar)",
    deeds: [
      "Gobernante máximo del primer y más bendecido clan de los Primeros Nacidos: los puros y rubios Vanyar.",
      "Habita eternamente en Aman, bajo las mismísimas estancias sagradas de Manwë en la sagrada montaña de Taniquetil.",
      "Considerado el más sabio y reverente de todos los Altos Reyes nacidos en la historia de Arda."
    ]
  },
  "Indis": {
    title: "Reina de los Noldor de Aman",
    race: "Elfo (Vanyar)",
    deeds: [
      "Segunda esposa de Finwë tras la desolación de Míriel. Madre de los nobles príncipes Fingolfin y Finarfin.",
      "De linaje y corazón puramente Vanyar, retornó a su pueblo tras el asesinato sacrílego de su esposo."
    ]
  },
  "Thingol (Elwë Singollo)": {
    title: "Rey de Beleriand, Señor de las Mil Cavernas",
    race: "Elfo (Sindar)",
    epicQuote: "«Con un cetro de luz rigió las selvas infinitas, el gobernante inmortal de la gran dinastía de los Sindar.»",
    deeds: [
      "Fundó y gobernó el espléndido reino oculto de las mil cavernas de Menegroth en Doriath.",
      "Desposó a la divinidad Maia Melian, alcanzando una estatura física y espiritual majestuosa única.",
      "Asesinado trágicamente en sus propias estancias por la traición codiciosa de artesanos Enanos de Nogrod."
    ]
  },
  "Celeborn": {
    title: "Príncipe de Doriath",
    race: "Elfo (Sindar)",
    deeds: [
      "Pariente cercano del gran rey Thingol, kinsman de Doriath que defendía las herencias elfas orientales.",
      "Desposó a la mítica princesa Galadriel, forjando una alianza dinástica milenaria inimaginable."
    ]
  },
  "Círdan el Carpintero de Barcos": {
    title: "Señor de los Puertos de las Falas",
    race: "Elfo (Teleri)",
    epicQuote: "«Quien habita en los puertos construyendo las místicas naves grises que zarpan al lejano e inalcanzable Oeste.»",
    deeds: [
      "Gobernador marítimo de las costas arenosas de Beleriand Occidental (Eglarest y Brithombar).",
      "Fundó los puertos de refugio definitivos de las Bocas del Sirion tras la catástrofe de las caídas de reinos.",
      "Guardián sabio de un anillo de poder y el elfo que más tiempo persistió en la faz de la Tierra Media."
    ]
  },
  "Beleg Cúthalion": {
    title: "El de la Firme Arcada, Montero Jefe de Doriath",
    race: "Elfo (Sindar)",
    epicQuote: "«Su arco Belthronding custodiaba las fronteras salvajes solitarias con silencioso y letal celo.»",
    deeds: [
      "Líder supremo de los guardas fronterizos forestales del sagrado rey Thingol de Doriath.",
      "El más fiel e inseparable amigo del trágico humano Túrin Turambar, a quien rescató incansablemente.",
      "Falleció trágicamente en un espantoso malentendido nocturno, por un flechazo accidental de su protegido."
    ]
  },
  "Mablung": {
    title: "El de la Mano Pesada",
    race: "Elfo (Sindar)",
    deeds: [
      "Gran capitán militar de los ejércitos de Thingol, veterano heroico de la campaña aliada de las Lágrimas Innumerables.",
      "Especializado en la batida y neutralización de las bestias y espías al servicio del Gran Enemigo.",
      "Falleció en la ruina defendiendo los excelsos tesoros de Doriath de los Enanos traidores."
    ]
  },
  "Daeron el Menestrel": {
    title: "El Primer Compositor de Rúnas",
    race: "Elfo (Sindar)",
    deeds: [
      "El más diestro e inigualable bardo de Beleriand, creador de las místicas runas Cirth usadas por los sabios.",
      "Enamorado sin correspondencia de la princesa Lúthien, cuyas místicas andanzas cantaba con dulce flauta."
    ]
  },
  "Lenwë": {
    title: "Líder de los Elfos del Río",
    race: "Elfo (Nandor)",
    deeds: [
      "Lideró la escisión migratoria del gran viaje elfo que rehusó cruzar las temibles Montañas Nubladas.",
      "Fundó el pacífico y errante linaje de los Nandor a lo largo de las fértiles cuencas fluviales."
    ]
  },
  "Denethor (Líder Laiquendi)": {
    title: "Señor de los Elfos Verdes de Ossiriand",
    race: "Elfo (Nandor)",
    deeds: [
      "Condujo con éxito a los Nandor a establecerse en las fértiles tierras protegidas de Ossiriand.",
      "Falleció heroicamente rodeado en la colina de Amon Ereb durante la pavorosa primera invasión orca."
    ]
  },
  "Saeros": {
    title: "Consejero Sátrapa de Doriath",
    race: "Elfo (Nandor)",
    deeds: [
      "Elfo consejero de Thingol de carácter altivo y discriminatorio que hostigó al mortal huérfano Túrin.",
      "Provocó un duelo violento por su propia insolencia, pereciendo en una trágica caída al río."
    ]
  },
  "Bëor el Viejo": {
    title: "El Primer Seguidor de Finrod",
    race: "Hombre (Edain)",
    epicQuote: "«Él guió al primer tropel de Hombres libres al encuentro de la deslumbrante nobleza de los Noldor.»",
    deeds: [
      "Líder de la primera casa de los Hombres aliada que cruzó con coraje los valles de Beleriand Oriental.",
      "Servidor devoto y confidente personal del místico rey elfo Finrod Felagund en Nargothrond.",
      "Falleció venerable anciano pacífico tras una vida entera dedicada fielmente al bien común."
    ]
  },
  "Barahir (Padre de Beren)": {
    title: "Señor de Dorthonion, Héroe del Anillo",
    race: "Hombre (Edain)",
    epicQuote: "«Mediante una coraza humana de escudos y espadas, salvó la vida de Finrod y selló una alianza irrevocable.»",
    deeds: [
      "Comandó la resistencia guerrillera humana contra Morgoth en los densos bosques de Dorthonion.",
      "Salvó al rey Finrod del cerco del fuego sagrado, recibiendo la sortija heráldica de esmeraldas de su linaje.",
      "Martirizado en el paso de Aeluin tras el espantoso engaño perpetrado contra su guerrillero Gorlim."
    ]
  },
  "Morwen Eledhwen": {
    title: "El Esplendor Elfo de los Hombres",
    race: "Hombre (Edain)",
    deeds: [
      "Esposa de Húrin y madre del trágico héroe Túrin Turambar y la hermosa doncella Nienor.",
      "De porte majestuoso similar al de una reina de los Elfos, resistió la esclavitud de Dor-lómin.",
      "Falleció exánime reconciliándose ante el místico túmulo funerario de sus desolados hijos."
    ]
  },
  "Hador Lórindol": {
    title: "Señor de Dor-lómin, Cabellera de Oro",
    race: "Hombre (Edain)",
    deeds: [
      "Gobernador supremo vasallo de las amplias y pastoriles tierras de Dor-lómin otorgadas por su rey Fingon.",
      "Portador del místico y pavoroso Yelmo del Dragón de Dor-lómin en las batallas septentrionales.",
      "Falleció en combate valiente cubriendo la retirada en la desoladora Dagor Bragollach."
    ]
  },
  "Galdor el Alto": {
    title: "Guardián de Barad Eithel",
    race: "Hombre (Edain)",
    deeds: [
      "Hijo de Hador que lideró la brava resistencia humana en las fortalezas rocosas del norte.",
      "Asesinado por el flechazo de un asediador orco en los parapetos defensivos de las fuentes del Sirion."
    ]
  },
  "Húrin Thalion": {
    title: "El Firme, Señor de Dor-lómin",
    race: "Hombre (Edain)",
    epicQuote: "«¡Aurë entuluva! ¡El día volverá a nacer! — Exclamó setenta veces desafiando las sombras del fango.»",
    deeds: [
      "Considerado unánimemente el luchador mortal más formidable e inquebrantable de la Primera Edad.",
      "Capturado vivo tras cubrir con hacha bermeja la huida desesperada del rey Turgon en el Nírnaeth.",
      "Resistió amarrado las místicas tentaciones mentales de Morgoth durante veintiocho años de cruel tortura."
    ]
  },
  "Huor": {
    title: "El Escudo Colector de Dor-lómin",
    race: "Hombre (Edain)",
    deeds: [
      "Hermano menor de Húrin, de estatura excepcional, que contempló la secreta Gondolin en la juventud.",
      "Luchó denodadamente en los pantanos de Serech, cubriendo al ejército aliado con su valiente vida.",
      "Padre de Tuor, el héroe que encendió la mística esperanza última de los Hombres y los Elfos."
    ]
  },
  "Tuor Eladar": {
    title: "El Mensajero del Océano, Guia de Gondolin",
    race: "Hombre (Edain)",
    epicQuote: "«Apareció revestido de una armadura gris marina, con la advertencia directa de las profundidades marinas de Ulmo.»",
    deeds: [
      "Elegido por el Vala Ulmo como gran mensajero para advertir a Turgon de la asolación de Gondolin.",
      "Desposó a la bella princesa elfa Idril Celebrindal, uniendo los dos linajes reales más perfectos.",
      "Luchó valientemente en la caída de la ciudad y guió al contingente remanente a través del túnel."
    ]
  },
  "Haldad": {
    title: "El Patriarca de los Haladin",
    race: "Hombre (Edain)",
    deeds: [
      "Férreo jefe de la indómita tercera casa de los Hombres, organizando la defensa en los oscuros bosques de Brethil.",
      "Falleció en una audaz incursión de asedio orca, defendiendo con arco la frágil empalizada fluvial."
    ]
  },
  "Lady Haleth": {
    title: "La Reina Guerrera del Bosque de Brethil",
    race: "Hombre (Edain)",
    epicQuote: "«Con un carácter soberano indómito, guió a su pueblo a través de peligros inimaginables hacia la paz de los bosques.»",
    deeds: [
      "Lideró a la Casa de Haleth tras el trágico fallecimiento violento de su padre y su hermano.",
      "Cruzó el escalofriante desfiladero de las arañas de Nan Dungortheb, sufriendo místicas visiones de espanto.",
      "Obtuvo el señorío eterno del verde y silencioso bosque de Brethil concedido por el gran rey Thingol."
    ]
  },
  "Haldar": {
    title: "Vanguardia de los Haladin",
    race: "Hombre (Edain)",
    deeds: [
      "Hijo de Haldad que combatió valientemente a la retaguardia de orcos para rescatar a la colonia asediada.",
      "Falleció defendiendo el cuerpo inerte de su heroico padre en el foso fluvial fronterizo."
    ]
  },
  "Eärendil el Marinero": {
    title: "La Estrella del Amanecer, Piloto del Cielo",
    race: "Hombre (Edain / Elfo)",
    epicQuote: "«Navegó por encima de las místicas nubes arrastrando la luz ardiente de la joya de Aman en su frente astral.»",
    deeds: [
      "Zarpó con la nave mágica Vingilot, logrando vadear las islas sombrías para implorar la piedad de los Valar.",
      "Derribó al asolador dragón negro Ancalagon de un golpe durante la colosal Guerra de la Cólera.",
      "Establecido por los Valar como un guardián astral eterno de luz estelar nocturna para guiar a los cansados."
    ]
  },
  "Elwing la Blanca": {
    title: "Gobernadora de los Puertos del Sirion",
    race: "Elfo (Sindar) / Hombre",
    epicQuote: "«Se arrojó al abismo de las olas sosteniendo el Silmaril, pero el Vala Ulmo la vistió con plumaje de águila blanca.»",
    deeds: [
      "Huyó de la trágica caída de Doriath rescatando el místico Silmaril arrebatado a la corona de Morgoth.",
      "Desposó a Eärendil en los Puertos del Sirion, sosteniendo la civilización unificada elfa y humana.",
      "Vuela eternamente unida en los cielos septentrionales en busca de la nave estelar de su amado."
    ]
  },
  "Elros Tar-Minyatur": {
    title: "El Primer Rey de Númenor",
    race: "Medio Elfo (Hombre)",
    deeds: [
      "Hijo de Eärendil que eligió la herencia biológica de la mortalidad, falleciendo venerable rey de Hombres.",
      "Fundó y gobernó el monumental reino de la mística isla de Númenor (Elenna) bendecida por los Valar.",
      "Antepasado directo de los excelsos reyes de los Hombres de Gondor y Arnor en las posteriores eras cósmicas."
    ]
  },
  "Elrond Medio elfo": {
    title: "El Maestro de Arda, El Sabio de Rivendel",
    race: "Medio Elfo (Elfo)",
    epicQuote: "«Su corazón guarda la memoria inalterada de los tres linajes regios y la caída de las fortalezas.»",
    deeds: [
      "Hijo de Eärendil que eligió la inmortalidad excelsa de la estirpe de los Elfos de Aman.",
      "Sirvió como heraldo del supremo rey elfo Gil-galad en las guerras posteriores contra la Sombra.",
      "Fundó el pacífico y sabio santuario forestal de Rivendel para preservar los manuscritos del pasado."
    ]
  },
  "Bór y sus Hijos": {
    title: "Los Orientales Fieles a los Elfos",
    race: "Hombre (Orientales)",
    deeds: [
      "Líder heróico de los Orientales que sellaron sincero vasallaje con Maedhros y Caranthir.",
      "Combatió denodadamente en la retaguardia aliada del Nírnaeth, resistiendo con honor la traición humana.",
      "Asoló valientemente los contingentes de orcos antes de caer glorioso en mitad del fango norteño."
    ]
  },
  "Ulfang el Negro": {
    title: "El Traidor de los Hombres Cetrinos",
    race: "Hombre (Orientales)",
    deeds: [
      "Líder traidor que fingió jurar sincera alianza con los príncipes elfos de la Unión de Maedhros.",
      "Negoció en secreto con Morgoth el sabotaje interno del frente aliado a cambio de amplias tierras sureñas.",
      "Su traición calculada en pleno transcurso de la batalla sentenció la total derrución de las fuerzas aliadas."
    ]
  },
  "Uldor el Maldito": {
    title: "El Destructor de la Alianza Elfa",
    race: "Hombre (Orientales)",
    deeds: [
      "Hijo de Ulfang que sembró informaciones falsas en Hithlum para retrasar el avance militar aliado.",
      "Desató una incursión violenta sorpresa por la retaguardia de los flancos debilitados de Fingon.",
      "Falleció abatido por la espada runica de Maglor en plena refriega fratricida en la colina pantanosa."
    ]
  },
  "Brodda": {
    title: "El Opresor Sátrapa de Dor-lómin",
    race: "Hombre (Orientales)",
    deeds: [
      "Hispano al servicio de Morgoth que usurpó manu militari las pacíficas ricas tierras de Dor-lómin tras el Nírnaeth.",
      "Esclavizó ferozmente a las desamparadas viudas humanas y saqueó los excelsos establos de Hador.",
      "Falleció abatido en su propio salón por la colérica hoja vengadora del retornado Túrin Turambar."
    ]
  },
  "Durin el Inmortal": {
    title: "El Primer Padre bajo la Roca",
    race: "Enano (Naugrim)",
    epicQuote: "«Caminó solitario por las cavernas sin nombre, dando origen al más monumental imperio de la piedra.»",
    deeds: [
      "El más viejo y venerado de los Siete Padres de la raza de los Enanos creados por el Vala Aulë.",
      "Fundó la mística y heráldica ciudad subterránea de Khazad-dûm en el vientre de las Montañas Nubladas.",
      "Llamado 'Inmortal' porque su fisonomía y carácter renacen intactos periódicamente en sus herederos reales."
    ]
  },
  "Azaghâl (Señor de Belegost)": {
    title: "El Férreo Rey de Belegost, Azote de Dragones",
    race: "Enano (Naugrim)",
    epicQuote: "«A pesar del fuego abrasador, la imperturbable armadura de Azaghâl resistió las garras del Dragón Dorado.»",
    deeds: [
      "Gobernó el excelso bastión subterráneo de Belegost en las faldas rocosas occidentales del Ered Luin.",
      "Salvó al contingente elfo en el Nírnaeth conteniendo físicamente al devastador primer dragón Glaurung.",
      "Hirió de gravedad al colosal monstruo reptante antes de caer aplastado bajo el peso colosal de su anatomía."
    ]
  },
  "Naugladur (Señor de Nogrod)": {
    title: "El Codicioso Rey Herrero de Nogrod",
    race: "Enano (Naugrim)",
    deeds: [
      "Lideró la campaña militar punitiva que asoló el pacífico sagrado bosque de Doriath por el collar Nauglamír.",
      "Portador codicioso del Silmaril robado, desafiando abiertamente la legación de la divinidad Melian.",
      "Abatido físicamente en combate singular por Beren en el traicionero paso fluvial de Sarn Athrad."
    ]
  },
  "Telchar (Creador de Narsil)": {
    title: "El Maestro Herrero del Ered Luin",
    race: "Enano (Naugrim)",
    epicQuote: "«Forjó la hoja rúnica que cortaría los frutos del mal y el hierro frío de las coronas septentrionales.»",
    deeds: [
      "El más virtuoso y renombrado forjador de Nogrod, cuyas patentes de metalurgia revolucionaron Arda.",
      "Forjó la espada Angrist que extrajo el Silmaril y la hoja Narsil que posteriormente mutiló a Sauron.",
      "Artesano sagaz del Yelmo del Dragón de Dor-lómin a partir del místico metal endurecido."
    ]
  },
  "Gamil Zirak": {
    title: "El Viejo Maestro de la Forja",
    race: "Enano (Naugrim)",
    deeds: [
      "Mentor espiritual y técnico del célebre herrero Telchar, maestro instructor de las tradiciones góticas mineras.",
      "Diseñó innumerables corazas bruñidas, espadas rúnicas y los mísiles de asedio de las fortalezas enanas."
    ]
  },
  "Mîm": {
    title: "El Último de los Enanos Mezquinos",
    race: "Enano (Noegyth Nibin)",
    deeds: [
      "Habitaba solitario la mística colina de Amon Dhûdh compartiendo secretos heráldicos de herrería antigua.",
      "Traicionó la guarida secreta de los guerrilleros de Túrin a los orcos a cambio de su codiciosa vida humana.",
      "Falleció abatido en la desolada biblioteca subterránea de Nargothrond por el deprimido humano Húrin."
    ]
  },
  "Ibûn & Khîm": {
    title: "Vástagos de la Colina Solitaria",
    race: "Enano (Noegyth Nibin)",
    deeds: [
      "Hijos del huraño herrero Mîm que compartían la dura existencia marginal de su moribundo linaje.",
      "Khîm falleció trágicamente por un disparo de flecha ciego de los proscritos de la hueste errante de Túrin."
    ]
  },
  "Sauron (Mairon/Gorthaur)": {
    title: "El Hechicero de Angband, El Señor de los Lobos",
    race: "Maia (Fascinado por la Sombra)",
    epicQuote: "«Señor de los sortilegios de pavor, que rige la fétida mística isla de las huestes licántropas.»",
    deeds: [
      "Originalmente Mairon el Herrero del séquito de Aulë, seducido por el esplendor industrial de Melkor.",
      "Comandó la ocupación militar de la estratégica isla elfa Minas Tirith en el curso fluvial del Sirion.",
      "Derrotado físicamente en místico combate licántropo por la fuerza conjunta de la princesa Lúthien y Huan."
    ]
  },
  "Gothmog": {
    title: "Señor de los Balrogs, Mariscal de Hierro",
    race: "Amir (Maia Corrupto por el Fuego)",
    epicQuote: "«Hijo del abismo de llamas líquidas, cuyo destructor azote de hierro negro humilla a los reyes elfos.»",
    deeds: [
      "Asesinó físicamente a la deidad Fëanor en la primera gran batalla bajo las místicas constelaciones estelares.",
      "Mariscal supremo de los ejércitos asediadores septentrionales de Angband durante el milenio bélico.",
      "Falleció en la ruina de Gondolin combatiendo en un trágico estanque hondo frente a la maza de Ecthelion."
    ]
  },
  "Ungoliant (La Gran Araña)": {
    title: "La Tejedora del Vacío Atemporal",
    race: "Criatura Primordial de las Tinieblas",
    epicQuote: "«Ella devoró la mismísima luz líquida purísima de los Dos Árboles, tejiendo telarañas de pavor absoluto.»",
    deeds: [
      "Auxilió de forma decisiva a Melkor en el sacrilegio y destrucción violenta de Laurelin y Telperion.",
      "Intentó asfixiar físicamente en un abrazo viscoso al mismísimo Señor Oscuro para arrebatarle los gemas Silmarils.",
      "Antepasada solitaria de todas las pavorosas arañas tejedoras gigantes que asediaron las eras posteriores de Arda."
    ]
  },
  "Glaurung (Padre de Dragones)": {
    title: "El Gran Gusano de Fuego, La Industria Viviente",
    race: "Dragón Urulóki de Angband",
    epicQuote: "«Su aliento abrasador consumió los campos de cultivo y su sádica mirada sepultó el raciocinio de los héroes.»",
    deeds: [
      "El mismísimo primer dragón libre surgido de los hornos subterráneos de la industria militar de Angband.",
      "Desató el terror mental contra Túrin y su hermana Nienor, sumiéndolos en un espantoso olvido trágico.",
      "Abatido físicamente por la letal herida ascendente infligida bajo roca por la espada rúnica Gurthang de Túrin."
    ]
  },
  "Ancalagon el Negro": {
    title: "El Más Grande de los Dragones Alados",
    race: "Dragón Alado Gigante",
    epicQuote: "«Su fulgor negro cubría el Sol, y la caída de su anatomía en llamas quebró las grandes cumbres norteñas.»",
    deeds: [
      "Desatado por Morgoth como su arma secreta última para frenar el implacable avance aéreo de los Valar.",
      "Lideró la pavorosa armada de dragones alados de fuego que hizo retroceder a los ejércitos divinos.",
      "Abatido en mitad del cielo septentrional por Eärendil tras una noche entera de místico combate cósmico."
    ]
  },
  "Carcharoth (Anfauglir)": {
    title: "Las Fauces Rojas, El Gran Lobo de la Puerta",
    race: "Lobo de Angband Gigante",
    epicQuote: "«Alimentado por la mano de Morgoth con carne viva, sus fauces destilaban el veneno del pozo de Angband.»",
    deeds: [
      "Guardián supremo de las pavorosas puertas de entrada al abismo secreto fortificado de Angband.",
      "Arrancó de un mordisco la mano del mortal Beren tragando el Silmaril latente, que abrasó su interior.",
      "Asoló Beleriand en un frenesí ardiente de locura violenta antes de caer abatido por el valiente Huan."
    ]
  },
  "Draugluin (Padre de Licántropos)": {
    title: "El Gran Gobernante de los Lobos de la Sombra",
    race: "Lobo Maia de la Primera Edad",
    deeds: [
      "El ancestro primordial del cual desciende toda la raza de los lobos inteligentes y licántropos de Arda.",
      "Señor de las jaurías de la isla del Sirion Minas Tirith al servicio de su hechicero Sauron.",
      "Falleció herido de gravedad ante la mística e impenetrable mandíbula de Huan de Valinor."
    ]
  },
  "Thuringwethil (Mensajera de Sauron)": {
    title: "La Sombra Alada, la Dama Vampiro",
    race: "Espíritu de las Cavernas (Vampiro)",
    deeds: [
      "Fiel emisaria voladora de Sauron, cuya mística apariencia de murciélago gigante propagaba el pavor nocturno.",
      "Su piel fue arrancada tras fallecer para que la princesa Lúthien se disfrazara e infiltrara el fango enemigo."
    ]
  }
};

export const secondaryLoreDatabaseEn: Record<string, SecondaryLoreEntry> = {
  "Eru Ilúvatar": {
    title: "The Creator of Arda",
    race: "Supreme Deity",
    epicQuote: "“And from the Silence of the Eternal Halls, Eru kindled the sacred fire of existence.”",
    deeds: [
      "Created the primordial Universe (Eä) and Arda through the original song of the Ainur.",
      "Direct Father and creator of both the Firstborn (Elves) and the Followers (Men).",
      "Sole keeper of the Imperishable Flame, from which all sovereign life and consciousness emanate."
    ]
  },
  "Manwë Súlimo": {
    title: "High King of Arda, Lord of the Winds",
    race: "Vala",
    epicQuote: "“He rules all winds, blasts, and breezes, and the winged messengers fly at his command.”",
    deeds: [
      "Supreme ruler of Arda after Melkor was exiled into the primeval outer dark.",
      "King of the Valar upon the holy peak of Taniquetil, standing beneath the pure light of Aman.",
      "His great noble eagles bring continuous news and lore from all suffering shores of Middle-earth."
    ]
  },
  "Ulmo": {
    title: "Lord of the Deep Waters",
    race: "Vala",
    epicQuote: "“Through the veins of the earth flows the eco of Ulmo's voice, which never forsakes the exiled.”",
    deeds: [
      "Solitary guardian of the great outer sea (Ekkaia) and all rivers, lakes, and springs.",
      "Unfailingly supported the exiled Elves in Middle-earth, warning Turgon and Finrod of secret places.",
      "His mystical horns (Ulumúri) plant deep into elven hearts the inconsolable yearning for the Great Sea."
    ]
  },
  "Aulë el Herrero": {
    title: "The Great Maker, Lord of the Earth",
    race: "Vala",
    epicQuote: "“The stability of mountains and the mastery of crafts and smithing are Aulë's direct works.”",
    deeds: [
      "Designed the mineral crust of the world and forged the vessels of the Sun and the Moon.",
      "Directly created the Dwarves (Naugrim) from the hard clay of the earth in secret under the mountains.",
      "Instructed Fëanor and nurtured the manual dexterity and lore of the Noldor craftsmen."
    ]
  },
  "Oromë Aldaron": {
    title: "The Hunter of Valinor, Lord of Beasts",
    race: "Vala",
    epicQuote: "“When Oromë's horn Valaroma sounded, the dark shadows of Angband fled in dismay.”",
    deeds: [
      "Discovered the newly awakened Elves in Cuiviénen and led them safely across Middle-earth to Valinor.",
      "Legendary hunter of Melkor's monsters in the dark primeval forests of ancient Lands.",
      "Master of weapons and spiritual guide for rangers and unyielding hunters of evil."
    ]
  },
  "Mandos (Námo)": {
    title: "The Judge, Keeper of the Dead",
    race: "Vala",
    epicQuote: "“He knows all fates decreed by Eru, and forgets no sorrow.”",
    deeds: [
      "Governor of the Halls of Mandos, where the souls of the deceased Elves are gathered.",
      "Pronounced the tragic Doom of Mandos upon the rebellious host of Fëanor following the Kinslaying.",
      "Granted passage for Beren and Lúthien back to the mortal world through the sacred power of grief."
    ]
  },
  "Lórien (Irmo)": {
    title: "Lord of Visions and Dreams",
    race: "Vala",
    deeds: [
      "Governed the peaceful and enchanting gardens of Lórien in the blessed continent of Aman.",
      "Master of spiritual rest, emotional healing for the Valar, and mystical nocturnal guidance.",
      "Offered loving rest to Míriel when she was consumed of fire after bringing Fëanor into the world."
    ]
  },
  "Tulkas Astaldo": {
    title: "The Wrestler, Champion of Valinor",
    race: "Vala",
    deeds: [
      "Entered Arda to aid his brethren, physically overmastering and binding Melkor in singular combat.",
      "Señor of martial strength and pure physical valor, who laughs in the midst of chaotic battles.",
      "Relentlessly hunted the Great Enemy during the violent theft of the three Silmarils."
    ]
  },
  "Varda Elentári": {
    title: "The Queen of Stars",
    race: "Valier",
    epicQuote: "“Elbereth Gilthoniel, whose hands raised the light of the sacred stars upon the heavens.”",
    deeds: [
      "Kindled the stars using the silver dews of Telperion at the awakening of the Firstborn.",
      "The most beloved and revered protector of the Elves, whose holy name scatters shadows.",
      "Hallowed the Silmarils so that no impure hands could ever touch them without being scorched."
    ]
  },
  "Yavanna Kementári": {
    title: "The Giver of Fruits",
    race: "Valier",
    epicQuote: "“Her songs fertilize barren lands and govern the cycle of all green things.”",
    deeds: [
      "Created the Two Trees of Valinor, Laurelin and Telperion, providing the primeval holy light.",
      "Conceived the Pastors of Trees (Ents) to protect the forest from the axes of the Dwarves.",
      "Gathered the final brilliant spark of the ruined trees to form the vessels of the Sun and Moon."
    ]
  },
  "Nienna": {
    title: "Lady of Pity and Mourning",
    race: "Valier",
    epicQuote: "“Through Nienna's pure tears, the spirit of Arda learns supreme wisdom and endurance.”",
    deeds: [
      "Weeps continuously for the hurts of Arda inflicted by the Great Enemy's malice.",
      "Watered the mound of Ezellohar with her tears to heal the scorched trunks of the Two Trees.",
      "Direct instructor of Olórin (Gandalf), teaching him the supreme value of pity, mercy, and hope."
    ]
  },
  "Estë la Gentil": {
    title: "Healer of the Weary",
    race: "Valier",
    deeds: [
      "Lady of physical healing, mental peace, and the restoration of bodily strength.",
      "Dwells with her spouse Irmo in the quiet waters of Aman, offering rest to those who suffer the hurts of Arda.",
      "Soothes the weary through healing breezes."
    ]
  },
  "Vairë la Tejedora": {
    title: "Weaver of Time and History",
    race: "Valier",
    deeds: [
      "Weaves all deeds of history and fate into grand magical tapestry webs.",
      "Her tapestries drape the vast halls of Mandos to preserve the undying memory of all things.",
      "Chronicles with solemn accuracy the rise and fall of elven kingdoms and mortal empires."
    ]
  },
  "Vána la Siempre Joven": {
    title: "Lady of Spring and Blossoms",
    race: "Valier",
    deeds: [
      "Her presence causes wildflowers to burst open and wild songbirds to sing.",
      "Embodies the untamed, youthful renewal of Arda's wild nature.",
      "Sister of Yavanna, watching over the vernal awakening."
    ]
  },
  "Nessa la Bailarina": {
    title: "The Swift Danzarina of Valinor",
    race: "Valier",
    deeds: [
      "Lady of unmatched speed and wild dynamic grace, dancing in the company of wild deer.",
      "Her dancing enlivens the golden meadows of the holy city of Valmar.",
      "Spouse of Tulkas, embodying joyous agility and bold physical vitality."
    ]
  },
  "Melian (Reina de Doriath)": {
    title: "Lady of the Girdle, Queen of Doriath",
    race: "Maia",
    epicQuote: "“Through songs of infinite power, Melian wove a maze of shadow to shield the greenwood.”",
    deeds: [
      "The only Maia to adopt a biological body in Middle-earth to wed High King Thingol.",
      "Wove the 'Girdle of Melian', a mystical defensive barrier of maze and confusion around Doriath.",
      "Mother of Lúthien, passing onto her the crown of peerless beauty and power over hearts."
    ]
  },
  "Eönwë": {
    title: "Herald of Manwë",
    race: "Maia",
    deeds: [
      "Supreme commander of the Host of the West during the final apocalyptic campaign.",
      "Renowned as the most formidable and skilled physical warrior in all of Arda.",
      "Victoriously led the armies of Light that breached Angband's gates in the War of Wrath."
    ]
  },
  "Ilmarë": {
    title: "Maiden of the Host of Varda",
    race: "Maia",
    deeds: [
      "First handmaiden of Queen Varda, ruling over the holy host of stars and angelic spirits in Aman.",
      "Cosmic guardian of the pure light of the West during the dark years of Middle-earth."
    ]
  },
  "Ossë & Uinen": {
    title: "Gulers of the Coastal Seas",
    race: "Maia",
    deeds: [
      "Governors of the restless seas of Arda under the supreme mandate of Ulmo.",
      "Ossë commands coastal waves and howling storms, while Uinen calmest the waters.",
      "Dearest friends and protectors of the seafaring Elves (Teleri)."
    ]
  },
  "Olórin (Gandalf)": {
    title: "The Wisest of the Ainur",
    race: "Maia",
    epicQuote: "“He walked unseen among the Elves, planting unyielding hope and courage in their hearts.”",
    deeds: [
      "Learned absolute pity and mercy from Nienna's quiet halls of mourning in Valinor.",
      "Sent to Middle-earth ages later as Gandalf, but present in spirit during the Great Wars of Eldar.",
      "Master of the pure flame, guiding hearts against dark, tyrannical forces."
    ]
  },
  "Arien & Tilion": {
    title: "Steerers of the Sun and Moon",
    race: "Maia",
    deeds: [
      "Arien is the pure spirit of fire who steers the radiant vessel of the Sun created by Yavanna.",
      "Tilion is the guardian of the silver moon, piloting the sphere that woke Men in Hildórien.",
      "Sustain the cosmic cycles over the skies of Middle-earth against the shadow of Angband."
    ]
  },
  "Maedhros": {
    title: "Lord of the Eastern March",
    race: "Elf (Noldor)",
    epicQuote: "“Though broken in Thangorodrim's abyss, Maedhros held the alliance with an unyielding grasp.”",
    deeds: [
      "Eldest son of Fëanor, captured and tortured on Thangorodrim, and rescued by Fingon's bravery.",
      "Forged the strategic Union of Maedhros to coordinate Elves, Dwarves, and Men against Morgoth.",
      "Held the exposed Eastern Border of Beleriand against endless incursions of orcs."
    ]
  },
  "Maglor": {
    title: "The Mighty Singer of Eldar",
    race: "Elf (Noldor)",
    deeds: [
      "Second son of Fëanor, whose peerless singing narrated the tragic path of his kin.",
      "Adopted and raised Elrond and Elros of the Haven of Sirion with deep love.",
      "Recovered a Silmaril at the War's end, and cast it into the agonizing waters of the Sea."
    ]
  },
  "Celegorm": {
    title: "The Fair, Lord of Himlad",
    race: "Elf (Noldor)",
    deeds: [
      "Third son of Fëanor, legendary hunter who was gifted the magic hound Huan of Valinor.",
      "Ruled the strategic pass of Aglon alongside his cunning brother Curufin.",
      "Instigated rebellion in Nargothrond and chaos in Doriath as he was blinded by pride for the gems."
    ]
  },
  "Caranthir": {
    title: "The Dark, Ruler of Thargelion",
    race: "Elf (Noldor)",
    deeds: [
      "Fourth son of Fëanor, known for his harsh temper but keen trade relations with Dwarves.",
      "Governed the wild plains of Thargelion, accumulating wealth and mineral wealth.",
      "Fell in combat in the tragic kinslaying in the halls of Doriath."
    ]
  },
  "Curufin": {
    title: "The Crafty, Forge-Minded Prince",
    race: "Elf (Noldor)",
    deeds: [
      "Fifth son of Fëanor, who inherited his father's manual dexterity and silver-tongued speech.",
      "Father of Celebrimbor, who would later craft the elven Rings of Power in the Second Age.",
      "Tried to usurp the crown of Nargothrond while Finrod was away on his quest."
    ]
  },
  "Amrod": {
    title: "The Hunter of Mithrim",
    race: "Elf (Noldor)",
    deeds: [
      "Twin son of Fëanor, master hunter of the cold forests surrounding Lake Mithrim.",
      "Fought in all the conflicts of the Oath, perishing sword in hand in Beleriand."
    ]
  },
  "Amras": {
    title: "Lord of the Southern Woods",
    race: "Elf (Noldor)",
    deeds: [
      "Twin brother of Amrod, skilled in forest warfare and the defense of the wild East.",
      "Accompanied his brothers through all trials of the Oath until the fall of the Elves' haven."
    ]
  },
  "Fingon el Valiente": {
    title: "High King of the Noldor, Lord of Hithlum",
    race: "Elf (Noldor)",
    epicQuote: "“With courage beyond measure, Fingon scaled Thangorodrim to heal the broken past.”",
    deeds: [
      "Rescued his cousin Maedhros from the precipices of Thangorodrim, uniting the houses.",
      "Became High King of the Noldor after his majestic father Fingolfin fell in duel.",
      "Fell heroically under Gothmog's black whip in the Battle of Unnumbered Tears."
    ]
  },
  "Turgon (Señor de Gondolin)": {
    title: "The Hidden King of Gondolin",
    race: "Elf (Noldor)",
    epicQuote: "“Gondolin stood for centuries as a beacon of light in a war-torn world.”",
    deeds: [
      "Founded and ruled the hidden city of Gondolin, nested within protecting mountains.",
      "A shrewd commander who saved the host from complete encirclement in the Nírnaeth.",
      "Died defending his high towers during the dramatic siege of dragons."
    ]
  },
  "Aredhel la Blanca": {
    title: "The White Lady of the Noldor",
    race: "Elf (Noldor)",
    deeds: [
      "Sister of Turgon, who grew weary of Gondolin and rode out to explore dark primeval woods.",
      "Ensnared by Eöl, the dark Elven-smith, in the silent woods of Nan Elmoth.",
      "Mother of Maeglin, whom she shielded with her own body from a poison dart in Gondolin."
    ]
  },
  "Idril Celebrindal": {
    title: "The Silver-Footed Princesa of Gondolin",
    race: "Elf (Noldor)",
    epicQuote: "“Her wisdom foresaw the doom, building a secret way that saved the seeds of the future.”",
    deeds: [
      "Daughter of Turgon who wedded the mortal Tuor, linking the two great dynasties of Arda.",
      "Constructed a secret underground escape tunnel that saved the survivors from the fires.",
      "Zarpó with her husband Tuor into the West, achieving immortal status by grace of the Valar."
    ]
  },
  "Finarfin": {
    title: "King of the Noldor in Valinor",
    race: "Elf (Noldor)",
    deeds: [
      "The gentlest of Finwë's sons, who turned back to Valinor in sorrow after the Kinslaying.",
      "Ruled the remaining Noldor in Aman under the forgiveness of the Valar.",
      "Led the Army of Valinor to Middle-earth to overthrow Morgoth in the War of Wrath."
    ]
  },
  "Finrod Felagund": {
    title: "Lord of Caves, Founder of Nargothrond",
    race: "Elf (Noldor)",
    epicQuote: "“No Elf had greater grace, yielding his own crown to fulfill a humble oath to a mortal.”",
    deeds: [
      "Carved out the subterranean fortress of Nargothrond, inspired by Menegroth's caves.",
      "The first elven lord to discover and befriend Men as they entered Beleriand.",
      "Died in Sauron's dark pits, sacrificing himself to save Beren from a werewolf."
    ]
  },
  "Angrod & Aegnor": {
    title: "Wardens of Dorthonion",
    race: "Elf (Noldor)",
    deeds: [
      "Finrod's brave brothers who held the strategic high-lands of northern Dorthonion.",
      "Abrasados to death by the flame rivers of the Dagor Bragollach."
    ]
  },
  "Galadriel": {
    title: "Princess of the House of Finarfin",
    race: "Elf (Noldor)",
    epicQuote: "“Her starry eyes held the undimmed memory of Valinor's Golden Trees.”",
    deeds: [
      "Finrod's youngest sister, who studied high lore under Melian the Maia in Doriath.",
      "Rode in the exile of the Noldor seeking to rule a domain of her own in Middle-earth.",
      "The most majestic and wise of the Eldar who persisted into the later ages of the world."
    ]
  },
  "Orodreth": {
    title: "Lord of Nargothrond Towers",
    race: "Elf (Noldor)",
    deeds: [
      "Weighed down by governance of Nargothrond after his elder brother Finrod's fall.",
      "Heeded Túrin's aggressive military counsels, leaving the safety of his underground halls.",
      "Fell defending the crossways at the river against Glaurung the Golden's dragon army."
    ]
  },
  "Ingwë (Alto Rey)": {
    title: "Lord of the Vanyar, King of kings",
    race: "Elf (Vanyar)",
    deeds: [
      "High King of the entire elven race and leader of the first and fairest clan: the Vanyar.",
      "Dwells at the feet of Manwë upon the summit of Taniquetil in absolute bliss.",
      "Venerated as the holiest and most faithful of all elven kings to walk Arda."
    ]
  },
  "Indis": {
    title: "Queen of the Noldor in Aman",
    race: "Elf (Vanyar)",
    deeds: [
      "Second wife of King Finwë, mother of the noble princes Fingolfin and Finarfin.",
      "Returning to her kin, the Vanyar, after the tragic murder of Finwë in Formenos."
    ]
  },
  "Thingol (Elwë Singollo)": {
    title: "King of Beleriand, Lord of the Thousand Caves",
    race: "Elf (Sindar)",
    epicQuote: "“With a sceptre of starlight he ruled the endless woods, the immortal builder of Menegroth.”",
    deeds: [
      "Established and ruled the magnificent cavern kingdom of Menegroth in Doriath.",
      "Married the Maia Melian, becoming the tallest and most majestic king of the Sindar.",
      "Slain by greedy Dwarven smiths in his own chambers over the dispute of the Silmaril."
    ]
  },
  "Celeborn": {
    title: "Prince of Doriath",
    race: "Elf (Sindar)",
    deeds: [
      "Kinsman of King Thingol, who defended the borders of Beleriand's central woods.",
      "Wedded the legendary princess Galadriel, forging an alliances that lasted through ages."
    ]
  },
  "Círdan el Carpintero de Barcos": {
    title: "Lord of the Havens, the Shipwright",
    race: "Elf (Teleri)",
    epicQuote: "“He who dwells on the edge of the Sea, keeping the grey ships that sail to the West.”",
    deeds: [
      "Governed the coastal havens of Brithombar and Eglarest in Western Beleriand.",
      "Built the final refuge at the Mouths of Sirion to rescue survivors of the fallen realms.",
      "Bearer of a Ring of Power and the oldest Elf to remain in Middle-earth."
    ]
  },
  "Beleg Cúthalion": {
    title: "Chief March-warden of Doriath",
    race: "Elf (Sindar)",
    epicQuote: "“His bow Belthronding guarded the wild borders of the kingdom with silent, deadly zeal.”",
    deeds: [
      "Captain of the march-wardens of King Thingol, holding Nan Dungortheb clear.",
      "The truest, most faithful friend of the tragic mortal Túrin, whom he sought out and rescued.",
      "Tragically slain in a dark, midnight confusion by Túrin's own blade Gurthang."
    ]
  },
  "Mablung": {
    title: "Mablung of the Heavy Hand",
    race: "Elf (Sindar)",
    deeds: [
      "Thingol's greatest military commander, who fought in the army of Union in the Nírnaeth.",
      "Especialed in hunting down the grand beasts unleashed from Angband's pits.",
      "Slain in the ruin of Menegroth as he guarded the treasury against the Dwarves' raid."
    ]
  },
  "Daeron el Menestrel": {
    title: "The Runesmith Bardo of Doriath",
    race: "Elf (Sindar)",
    deeds: [
      "The greatest minstrel and chronicler of Beleriand, who invented the runic script Cirth.",
      "Loves Lúthien, composing many sorrowful songs under the branches of Doriath."
    ]
  },
  "Lenwë": {
    title: "Leader of the River Elves",
    race: "Elf (Nandor)",
    deeds: [
      "Led the division that turned south during the Great Journey, declining to cross the mountains.",
      "Founded the Nandor, the soft-walking wood-elves of river-valleys."
    ]
  },
  "Denethor (Líder Laiquendi)": {
    title: "Lord of the Green-Elves of Ossiriand",
    race: "Elf (Nandor)",
    deeds: [
      "Led the Nandor into the protected forests of Ossiriand, under the Blue Mountains.",
      "Died heroic on the heights of Amon Ereb, surrounded by Orcs during the First War."
    ]
  },
  "Saeros": {
    title: "Councillor of Doriath",
    race: "Elf (Nandor)",
    deeds: [
      "Nandorin noble who grew proud in Menegroth, mocking and insulting the mortal ward Túrin.",
      "Fled in terror from Túrin's wrath, leaping blindly to his death over a deep chasm."
    ]
  },
  "Bëor el Viejo": {
    title: "The First Follower, Leader of Men",
    race: "Man (Edain)",
    epicQuote: "“He led the first tribe of Men to meet the awesome grace of the elven-lords.”",
    deeds: [
      "Led the First House of the Edain across the Blue Mountains into Beleriand.",
      "Gave faithful service to Finrod Felagund, dwelling in Nargothrond until his days ended.",
      "Died of old age, the first mortal of the alliance to pass away in peace."
    ]
  },
  "Barahir (Padre de Beren)": {
    title: "Lord of Dorthonion",
    race: "Man (Edain)",
    epicQuote: "“With a shield-ring of human lives, he saved Finrod from the spears of Angband.”",
    deeds: [
      "Led the human resistance in the highlands of Dorthonion after the Bragollach.",
      "Saved Finrod Felagund, receiving the ring of green jewels that became the heirloom of his house.",
      "Slain by Orcs in his secret hideout of Tarn Aeluin after the betrayal of Gorlim."
    ]
  },
  "Morwen Eledhwen": {
    title: "The Elven-Fair Lady of Dor-lómin",
    race: "Man (Edain)",
    deeds: [
      "Wife of Húrin Thalion and mother of the tragic Túrin Turambar and Nienor.",
      "Born with the high bearing of an elven queen, she endured the cruel occupation of Dor-lómin.",
      "Died near the burial stone of her children, finding peace at last after a life of grief."
    ]
  },
  "Hador Lórindol": {
    title: "Lord of Dor-lómin, Goldenhead",
    race: "Man (Edain)",
    deeds: [
      "Granted the lordship of Dor-lómin by Fingon, gathering the bravest of Men under his house.",
      "The first to wear the dragon-helm of Dor-lómin in battle against the North.",
      "Slain covering the retreat of his High King Fingon in the Dagor Bragollach."
    ]
  },
  "Galdor el Alto": {
    title: "Warden of Barad Eithel",
    race: "Man (Edain)",
    deeds: [
      "Hador's son, who held the mountain strongholds of Hithlum with absolute duty.",
      "Slain by an arrow during an Orc-raid on the castle walls of Barad Eithel."
    ]
  },
  "Húrin Thalion": {
    title: "The Steadfast, Lord of Dor-lómin",
    race: "Man (Edain)",
    epicQuote: "“Aurë entuluva! Day shall come again! — He cried seventy times as he hacked down the foe.”",
    deeds: [
      "Renowned as the most indomitable and powerful mortal warrior of the First Age.",
      "Captured at the Battle of Tears after slaying seventy trolls to protect Turgon's retreat.",
      "Sat upon Morgoth's high stone chair, defying the Shadow's ultimate curses for 28 years."
    ]
  },
  "Huor": {
    title: "The Tall Shield of Hador",
    race: "Man (Edain)",
    deeds: [
      "Húrin's younger brother, who visited the secret city of Gondolin in his youth.",
      "Stood shoulder-to-shoulder with his brother in Serech, falling to a poison arrow.",
      "Father of Tuor, who carried the last hope of Elves and Men on his shoulders."
    ]
  },
  "Tuor Eladar": {
    title: "Messenger of Ulmo, Lord of the Wing",
    race: "Man (Edain)",
    epicQuote: "“He stood clad in grey mail, bearing the warning of the Sea-Lord Ulmo to the stone halls of Turgon.”",
    deeds: [
      "Chosen by Ulmo to enter Gondolin and warn Turgon of the impending doom of his kingdom.",
      "Wedded the princess Idril, establishing the legendary bloodlines of the half-elves.",
      "Fought in Gondolin's fall, leading the small remnant of survivors safely into the south."
    ]
  },
  "Haldad": {
    title: "Chieftain of the Haladin",
    race: "Man (Edain)",
    deeds: [
      "Led his independent people in the woods, resisting the Orcs in Brethil.",
      "Slain defending a wooden fort on the river banks during a fierce Orc-raid."
    ]
  },
  "Lady Haleth": {
    title: "The Warrior Queen of Brethil",
    race: "Man (Edain)",
    epicQuote: "“With an unyielding will, she guided her people through paths of nightmare to find freedom.”",
    deeds: [
      "Led the Second House of Men after the deaths of her father and brother.",
      "Guided her tribe through Nan Dungortheb, enduring the terrors of the giant spiders.",
      "Granted the rule of Brethil by King Thingol, keeping her people free and sovereign."
    ]
  },
  "Haldar": {
    title: "Defender of the Haladin Forts",
    race: "Man (Edain)",
    deeds: [
      "Haldad's son, who took up weapons to hunt down the invaders around his father's stockade.",
      "Slain alongside his father inside the defensive ditches of the river delta."
    ]
  },
  "Eärendil el Marinero": {
    title: "The Morning Star, Pilot of Vingilot",
    race: "Half-Elf",
    epicQuote: "“He sailed above the dark clouds, carrying the pure starlight of the Silmaril on his brow.”",
    deeds: [
      "Sailed the magical ship Vingilot into the undying West, pleading for the mercy of the Valar.",
      "Slew Ancalagon the Black, the master dragon, during the apocalyptic War of Wrath.",
      "Set as a perpetual star in the heavens to guide the peoples of Middle-earth."
    ]
  },
  "Elwing la Blanca": {
    title: "Keeper of the Silmaril",
    race: "Half-Elf",
    epicQuote: "“She cast herself into the waves with the gem, but Ulmo raised her up as a white bird.”",
    deeds: [
      "Fled the ruin of Doriath, carrying the Silmaril to the safety of the Havens.",
      "Wedded Eärendil on the shores of Sirion, sustaining the remaining refugees.",
      "Flies through the high skies to meet her husband's starship every night."
    ]
  },
  "Elros Tar-Minyatur": {
    title: "The First King of Númenor",
    race: "Half-Elf (Mortal)",
    deeds: [
      "Chosen to be aligned with Mortal Men, ruling as the first king of the Island of Númenor.",
      "Founded the longest-lived lineage of human kings, governing with wisdom for 410 years.",
      "Ancestors of Aragorn Elfstone and the Rangers of the North."
    ]
  },
  "Elrond Medio elfo": {
    title: "The Wise, Lord of Imladris",
    race: "Half-Elf (Immortal)",
    epicQuote: "“His heart keeps the unblemished memory of the ancient kingdoms and the falling stars.”",
    deeds: [
      "Chosen to be aligned with the Eldar, remaining in Middle-earth to preserve high lore.",
      "Served as herald to the High King Gil-galad in the wars against Sauron.",
      "Founded Rivendell, the sanctuary of learning and remembrance."
    ]
  },
  "Bór y sus Hijos": {
    title: "The Faithful Easterlings",
    race: "Man (Easterlings)",
    deeds: [
      "Led his noble tribe to Beleriand, swearing true oaths of allegiance to Maedhros.",
      "Fought with unswerving honor in the Nírnaeth, proving loyal to the end.",
      "Slew their treacherous kin before being overwhelmed in the mud."
    ]
  },
  "Ulfang el Negro": {
    title: "The Betrayer of the Eldar",
    race: "Man (Easterlings)",
    deeds: [
      "Led his black tribe under false pretenses, swearing oaths to the sons of Fëanor.",
      "Conspired in secret with Morgoth to sabotage the Union of Maedhros.",
      "His planned betrayal during the Nírnaeth turned victory into historical ruin."
    ]
  },
  "Uldor el Maldito": {
    title: "The False Leader of Men",
    race: "Man (Easterlings)",
    deeds: [
      "Son of Ulfang who sent false messages to Hithlum to delay the armies of Fingon.",
      "Launched a surprise rear attack on the defensive flanks of Fingon's forces.",
      "Slain by Maglor during the chaotic fighting over the high banner."
    ]
  },
  "Brodda": {
    title: "The Cruel Lord of Hador's Lands",
    race: "Man (Easterlings)",
    deeds: [
      "Seized the lands of Dor-lómin as Morgoth's reward after the Battle of Tears.",
      "Enslaved human widows and plundered the homes of the House of Hador.",
      "Slain by Túrin Turambar in his own hall during the hero's sudden return."
    ]
  },
  "Durin el Inmortal": {
    title: "The First Father, Lord of Khazad-dûm",
    race: "Dwarf (Naugrim)",
    epicQuote: "“He walked alone through names caves, laying down the foundation of the greatest stone empire.”",
    deeds: [
      "The oldest of the Seven Fathers of the Dwarves created by the Vala Aulë.",
      "Founded Khazad-dûm (Moria) beneath the mountain peaks of Celebdil.",
      "His facial features and wisdom recurred in his descendants, earning the name 'Deathless'."
    ]
  },
  "Azaghâl (Señor de Belegost)": {
    title: "Lord of Belegost, Bane of Dragons",
    race: "Dwarf (Naugrim)",
    epicQuote: "“Though scorched by fire, Azaghâl's steel armor resisted the claws of the dragon.”",
    deeds: [
      "Ruled the master dwarf-fortress of Belegost on the slopes of the Blue Mountains.",
      "Saved the elven retreat in the Nírnaeth by containing Glaurung the Golden.",
      "Stabbed the belly of the dragon with his main blade before falling under its weight."
    ]
  },
  "Naugladur (Señor de Nogrod)": {
    title: "The Greedy King of Nogrod",
    race: "Dwarf (Naugrim)",
    deeds: [
      "Led the Dwarven army that raided Menegroth over the dispute of the necklace Nauglamír.",
      "Carried off the Silmaril of Doriath, defying the warning of Melian the Maia.",
      "Slain by Beren at the crossing of Sarn Athrad in Beleriand."
    ]
  },
  "Telchar (Creador de Narsil)": {
    title: "The Master Smith of Nogrod",
    race: "Dwarf (Naugrim)",
    epicQuote: "“Forged the runic blade that would cut the fruits of evil and the iron of dark crowns.”",
    deeds: [
      "The most famous dwarf-smith of Nogrod, whose metals revolutionized warfare.",
      "Forged Angrist, the dagger that cut the Silmaril, and Narsil, the sword that cut Sauron.",
      "Crafted the Dragon-helm of Dor-lómin from hardened steel."
    ]
  },
  "Gamil Zirak": {
    title: "The Elder Smith of the Blue Mountains",
    race: "Dwarf (Naugrim)",
    deeds: [
      "The revered master instructor of Telchar, who preserved the ancient patterns of smelting.",
      "Crafted countless master-works for the elven lords of Doriath."
    ]
  },
  "Mîm": {
    title: "The Last of the Petty-Dwarves",
    race: "Dwarf (Noegyth Nibin)",
    deeds: [
      "Dwelt in the sandstone hill of Amon Dhûdh, keeping the ancient lore of forge-work.",
      "Betrayed Túrin's band of outlaws to the Orcs under pain of torture.",
      "Slain by Húrin in Nargothrond over his attempt to claim the treasure."
    ]
  },
  "Ibûn & Khîm": {
    title: "Sons of the Sandstone Hill",
    race: "Dwarf (Noegyth Nibin)",
    deeds: [
      "The sons of Mîm, who represents the final generation of the Petty-dwarves.",
      "Khîm was shot in the dark by an arrow from Túrin's outlaw band."
    ]
  },
  "Sauron (Mairon/Gorthaur)": {
    title: "The Sorcerer of Angband, Lord of Wolves",
    race: "Maia (Fascinated by Dark)",
    epicQuote: "“Master of phantoms and deceit, ruling the isle of mutated wolves and shadow.”",
    deeds: [
      "Originally Mairon, apprentice to Aulë, seduced by Melkor's industrial perfection.",
      "Captured the elven tower of Tol Sirion, renaming it Tol-in-Gaurhoth (Isle of Werewolves).",
      "Overthrown by Lúthien and Huan, fleeing in vampire bat form to the forests of Taur-nu-Fuin."
    ]
  },
  "Gothmog": {
    title: "Lord of Balrogs, Marshall of Iron",
    race: "Maia (Corrupted by Fire)",
    epicQuote: "“Born of the pits of liquid flame, whose dark whip humiliates elven kings.”",
    deeds: [
      "Slew High King Fëanor in the first great battle under the stars.",
      "Served as High Marshall of Morgoth's forces through the entire first millenary war.",
      "Fell during the sack of Gondolin, dragged into a deep courtyard pool by Ecthelion."
    ]
  },
  "Ungoliant (La Gran Araña)": {
    title: "The Weaver of outer Dark",
    race: "Primordial Creature",
    epicQuote: "“She devoured the pure light of the Two Trees, weaving webs of absolute panic.”",
    deeds: [
      "Aided Melkor in destroying the Two Trees of Aman, draining their radiant wells.",
      "Almost strangled Morgoth himself in her sticky web to seize the Silmarils.",
      "The solitary ancestor of Shelob and the giant spiders of Mirkwood."
    ]
  },
  "Glaurung (Padre de Dragones)": {
    title: "The Great Urulóki, Father of Dragons",
    race: "Dragon of Angband",
    epicQuote: "“His fiery breath consumed the harvest and his sadic eyes bewitched the minds of heroes.”",
    deeds: [
      "The first of the great fire-breathing dragons designed in Angband's deep foundries.",
      "Cast spells of amnesia on Túrin and Nienor, causing their tragic downfall.",
      "Slain by Túrin's black sword Gurthang from underneath as the dragon crossed a gorge."
    ]
  },
  "Ancalagon el Negro": {
    title: "The Greatest of the Winged Dragons",
    race: "Winged Dragon of Angband",
    epicQuote: "“His shadow covered the Sun, and his fiery fall broke the towers of Thangorodrim.”",
    deeds: [
      "Unleashed by Morgoth as his ultimate weapon to beat back the host of the Valar.",
      "Led the squadron of fire-drakes that delayed the elven advance in the skies.",
      "Slew by Eärendil and the great Eagles after an all-night battle in the heavens."
    ]
  },
  "Carcharoth (Anfauglir)": {
    title: "The Red Maw, Warden of the Gate",
    race: "Great Wolf of Angband",
    epicQuote: "“Fed by Morgoth's own hand on raw flesh, his jaws dripped with the venom of the deep pit.”",
    deeds: [
      "Guarded the monumental gates of Angband, preventing entry or escape.",
      "Biting off Beren's hand, swallowing the Silmaril, which burned his insides with madness.",
      "Devastated Beleriand in a blind rage before being brought down by Huan."
    ]
  },
  "Draugluin (Padre de Licántropos)": {
    title: "Father of Werewolves",
    race: "Werewolf Maia",
    deeds: [
      "The sire of all werewolves and talking wolves of Beleriand.",
      "Ruled the packs that stalked the passes of Sirion from Sauron's keep.",
      "Mortally wounded by Huan the hound on the bridge of the Gaurhoth fortress."
    ]
  },
  "Thuringwethil (Mensajera de Sauron)": {
    title: "The Winged Shadow, Vampire Lady",
    race: "Vampiric Spirit",
    deeds: [
      "Sauron's chief airborne messenger, who flew to and from Angband under bat form.",
      "Her skin was worn by Lúthien as a disguise to enter the dark fortress unchallenged."
    ]
  }
};
