import { Character, TimelineEvent, Battle } from "./types";

export const timelineEvents: TimelineEvent[] = [
  {
    id: "evt-1",
    title: "El Despertar de los Elfos",
    description: "Bajo la luz estelar de Cuiviénen, en el extremo oriental de la Tierra Media, despertaron los Primeros Nacidos. Sin conocer aún a los Valar, pronunciaron sus primeras palabras y contemplaron las estrellas creadas por Varda.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD36NcgK6xPI3tlh_WKKDKmsjJ37nswyP6gePPviduKvTqhbs7nKNgRvSFfP_uOVqj7pTGixf2oZA4pkeXirwbtzX_c6PzpcxU2FYbUVnrKrc2_HlAjRFvboJio2NsJqZkSFC9XYdiF_3Yfh3Do_v5IK6dIP5v4RnYLIuTOXWMy7kMe4nkwTOcdO89PrseHP2jZ0V24jY3f4kjxeS4EStjt6uWOAfMigHEtG77sqeNCzVnNHYf-Wi3kU2pb7-hhf1tfx1BIwkv8hg",
    nodeText: "DE"
  },
  {
    id: "evt-2",
    title: "El Oscurecimiento de Valinor",
    description: "Melkor y Ungoliant destruyeron los Dos Árboles sagrados, Laurelin y Telperion, sumiendo al Reino Bendecido en una oscuridad antinatural. Este acto de supremo rencor cambió para siempre el destino de Arda.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9660Ajk63Pkfx7YagOaoxJXd15Jimtvrl1OrjQzkcE1SCcFNe_o96OxJcVqkxZg9AO73bjDYthqCf_TDvxw-ajn2nzzJl7vuj6JDbUsBEEBnugQF-212SK6er7J6PFMuy9Bvf53I0bmat8nudXtm11Za_qM7qGj6tk7cyc0nUnvvRpqvGPL9hk5dW_u1dRcxM8ekEfZM9uuhKXjJf392B2eilYFND_OE7s0TZKtV5Mu7v_yUv5j4hhCEYQTmpwM3NJ1EoBiIQ8A",
    nodeText: "OV"
  },
  {
    id: "evt-3",
    title: "La Huida de los Noldor",
    description: "Impulsados por el terrible Juramento de Fëanor y el robo de los Silmarils, los Noldor partieron de Aman, cruzando el traicionero hielo crujiente del Helcaraxë para librar una guerra milenaria contra el Gran Enemigo en la Tierra Media.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhDZcBFM0Io01nlW4RbJCf2kkP91_Cf407SBTrzVEuoer4W_yGkjOLOrLQRwBr8iJYX5wyqxgKNE74mCOgnvUohIR9_08keFztgkVl-BQmj3zV6OqBGR_lsXE2ZTcXTUGy0-UU4k6RYVB9WbHFfBV328uC-hBsy5j5OW3JueHWvAgNpDlAHzvr1okSDyBi2ENKLb0rpzDFEp-fFylHXFUeJ2UkkAYNJZtD85sj66DsLFYrktT6B3lqvvS8HsCG0fM-z-_vg9CQVQ",
    nodeText: "HN"
  },
  {
    id: "evt-4",
    title: "La Guerra de la Cólera",
    description: "La hueste de Valinor descendió con un fulgor terrible. El colosal dragón Ancalagon el Negro cayó envuelto en llamas desde los cielos, y la geografía de Beleriand se quebró y hundió bajo las aguas ante el furor de los Valar. Melkor fue finalmente arrojado al Vacío Atemporal.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_i91JCuMyqu2p1BwdqBymh5D42HM8EZ2mX6FvCSkgHLkPWhrG8-bwo8nowUSAve1WhjQm4MZ3P51ow9nR5wTlWxjTeIijlhTrREILMkyCIKUVqLo5fc69WALcsRXZvMFoA5hN5Pc14Tv6U2wMNHF0wQXYMuhu0R-HZEgjFbdO1lf4E_6wGEtvt9cZcqgZdhHlOdFcdtTi4WUaDE3i0dUt6cULrPxPHdR2tPCE80RyDrCdnyCQGZpy3wnf9vRVCTSjw4g_JeTefA",
    nodeText: "GC",
    isClimax: true
  }
];

export const battles: Battle[] = [
  {
    id: "battle-1",
    title: "Dagor-nuin-Giliath",
    year: "Año 1 P.E.",
    image: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    shadowForces: ["Orcos de Angband", "Lobos Blancos"],
    freeForces: ["Hueste de Fëanor", "Noldor"],
    outcome: "Victoria pírrica de los Noldor. Muerte de Fëanor a manos de Gothmog, Señor de los Balrogs.",
    x: "65%",
    y: "25%",
    icon: "swords",
    color: "tertiary"
  },
  {
    id: "battle-2",
    title: "Dagor Aglareb",
    year: "Año 60 P.E.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    shadowForces: ["Legiones de Morgoth", "Orcos de Vanguardia"],
    freeForces: ["Casas de Fingolfin", "Hueste de Maedhros", "Enanos"],
    outcome: "Gran victoria elfa. Inicio del glorioso Cerco de Angband que mantendría la paz durante casi cuatro siglos.",
    x: "55%",
    y: "35%",
    icon: "shield",
    color: "primary"
  },
  {
    id: "battle-3",
    title: "Dagor Bragollach",
    year: "Año 455 P.E.",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    shadowForces: ["Glaurung el Primero", "Señores Balrog", "Dragones de Fuego"],
    freeForces: ["Casas de Fingolfin", "Casa de Barahir", "Hueste de Finrod"],
    outcome: "Desastre absoluto para los Pueblos Libres. El cerco se rompe bajo arrasadores ríos de fuego líquido.",
    x: "45%",
    y: "30%",
    icon: "local_fire_department",
    color: "error"
  },
  {
    id: "battle-4",
    title: "Nírnaeth Arnoediad",
    year: "Año 472 P.E.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    shadowForces: ["Gothmog", "Traidores Orientales", "Legiones Orcas"],
    freeForces: ["Fingon", "Turgon de Gondolin", "Edain de Húrin"],
    outcome: "La Batalla de las Lágrimas Innumerables. Destrucción casi total del frente confederado de Elfos e Hombres.",
    x: "35%",
    y: "40%",
    icon: "skull",
    color: "secondary"
  },
  {
    id: "battle-5",
    title: "Guerra de la Cólera",
    year: "Año 545-587 P.E.",
    image: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    shadowForces: ["Ancalagon el Negro", "Morgoth Bauglir", "Huestes del Abismo"],
    freeForces: ["Hueste de Valinor", "Eärendil el Marinero", "Águilas del Cielo"],
    outcome: "El hundimiento geográfico total de Beleriand. Fin épico de la Primera Edad y derrota definitiva de Melkor.",
    x: "20%",
    y: "60%",
    icon: "military_tech",
    color: "primary"
  }
];

export const characters: Character[] = [
  {
    id: "feanor",
    name: "Fëanor Curufinwë",
    race: "Elf",
    realm: "Hithlum",
    title: "El Espíritu de Fuego",
    subtitle: "Alto Rey de los Noldor, Creador de los Silmarils",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEz4Cw34kkjPhR145Vx6VpkvuuRThsoL-8Bgg2Qc4qv9yZ928Nc6HG6o3t9sgWhDdikHQzo7vpNsCZxgepsCaw6DNrsyNNqnr_i9vRdrmrCKCZEyJlJ8LZYuprLxkiL-qW2NcKQMsI5yJAH75QxVBRQT-KN1wcJE4X5SXk3RTz7LtmAUBmBty6XAY3g0Pfogt6yguwFo8_DWsD_TvlpmDE0bTg7hLH57bAgKO5up2c75JvLVrQVRBWJjm0jWF-c5eLw-Q6LuDyeA",
    weapon: "Martillo de la Forja / Espada Runica",
    status: "Fallecido en Mithrim",
    father: "Finwë",
    mother: "Míriel Serindë",
    stats: [
      { label: "Linaje", value: "Primogénito de Finwë", icon: "family_history" },
      { label: "Título Nobiliario", value: "Alto Rey de los Noldor", icon: "military_tech" },
      { label: "Mayor Logro", value: "Forja de los Silmarils y Tengwar", icon: "auto_stories" }
    ],
    bioBlocks: [
      {
        title: "Primogénito de Finwë",
        text: "Hijo de la artesana Míriel Serindë, quien consumió toda su fuerza vital durante la gestación de este hijo excelso, partiendo voluntariamente a las estancias de Lorien tras su alumbramiento.",
        icon: "shield"
      },
      {
        title: "Alto Rey de los Noldor",
        text: "Proclamado Alto Rey tras el asesinato de su excelso padre Finwë en Formenos. Lideró la gloriosa pero trágica marcha de regreso al exilio de la Tierra Media bajo juramento irrevocable.",
        icon: "swords"
      },
      {
        title: "Maestro de Artes e Invenciones",
        text: "Su ingenio superó al de cualquier otro elfo en la historia. Desarrolló el alfabeto Tengwar de amplia difusión y fue el creador de las Palantíri, las piedras videntes de Arda.",
        icon: "menu_book"
      }
    ],
    memorableDeeds: [
      {
        title: "El Juramento Irrevocable",
        text: "Ató su destino y el de sus siete hijos espirituales en un espantoso pacto invocado ante el Altísimo Eru Ilúvatar, jurando perseguir hasta el fin del mundo a cualquiera que retuviera los Silmarils.",
        icon: "gavel"
      },
      {
        title: "La Rebelión contra Aman",
        text: "Desafió la autoridad legítima de los Valar y espoleó apasionadamente a las huestes exaltadas de los Noldor para abandonar el Reino Bendecido en pos de un destino soberano.",
        icon: "flight_takeoff"
      },
      {
        title: "La Quema de las Naves en Losgar",
        text: "Traicionó vilmente a las huestes de sus medio hermanos Fingolfin y Finarfin, ordenando quemar los hermosos y sagrados barcos con forma de cisnes custodiados en Alqualondë.",
        icon: "local_fire_department",
        error: true
      }
    ],
    quote: '"Ni aun los Valar pueden deshacer lo que se ha hecho."',
    detailedChronicle: {
      numeral: "I",
      era: "Edad de los Árboles",
      title: "El legado de la llama interna",
      text1: "Fëanor fue el más grande de los Eldar en todas las facetas de la mente y la destreza manual, pero también el más colérico y soberbio. Su espíritu indomable ardía con una llama interna tan intensa que acabó consumiéndole a él y arrastrando a su pueblo a la ruina, plasmada de forma sublime en el aprisionamiento de la luz de Laurelin y Telperion en los tres Silmarils sagrados.",
      text2: "Su dramática caída corrió pareja a la magnitud de sus excelsas obras artísticas. El ultraje incalculable perpetrado por Melkor y la terrible muerte de Finwë desencadenaron la guerra de las joyas, cambiando el norte de la Tierra Media por eternidades. Cayó finalmente herido de muerte por el látigo ígneo de Gothmog en los campos de ceniza de Mithrim.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3g4y2A-rOIwPEDTda4j6Hb2pIRUtNooMEeiE72quXvKXx4krfIuOihBzuZbBJQKUJd6s3pFywgM1D3PRhoDtl2URi6zrVtsoD9QH2lVLC2uWo_1cdbV6hSnXlNS0svJeXmGElmbPpXYGg4d80qMRYoj5kcoTF1jlQbvryT6RgmeuwC36x8kyHfHKAaz6hG11xp1AyqU6-bTFJo6U0HLRf8WgEFYNqGSZK3JE4-l6RMFKG6bxCl_TC1kw88yi13ItuYz3OoTp_Fg",
      quote: "No fuimos enviados aquí para reinar en paz en jardines ajenos."
    }
  },
  {
    id: "fingolfin",
    name: "Fingolfin",
    race: "Elf",
    realm: "Hithlum",
    title: "El más valioso de los Eldar",
    subtitle: "Alto Rey de Hithlum, el más valiente y gallardo de los Eldar",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-Ya09mgajaSBKqQ_TVNQKaNcogAU2QqCWWq_UQOoNBRjKiocl19lREGXTGdtyL49YpGPyk8Lb1Pgtxl5NMfr0QkhTeVemKfa1w1NvPa_nJ4SXCC-LhkB4qRo0JbFE87OGT2Gsfk45JrD49KA7nXxi9G6ZkAWLLqg58jujWcyMXXywPCC3AcVCLDC929mjF6TkwXZFGRjJL1nbvbIqt2Aos-eNnu3wZizosjYaPJXQJVUYMVI8JZlj_jLGKO8BKWUoMBd-2xfCGA",
    weapon: "Ringil, el Filo de Hielo Azul",
    status: "Fallecido ante las puertas del Thangorodrim",
    spouse: "Anairë",
    father: "Finwë",
    stats: [
      { label: "Sede de Sabor", value: "Barad Eithel", icon: "castle" },
      { label: "Espada Leyenda", value: "Ringil", icon: "swords" },
      { label: "Dominio", value: "Reino de Hithlum", icon: "shield" }
    ],
    bioBlocks: [
      {
        title: "El Paso del Helcaraxë",
        text: "Abandonado a su suerte en Valinor por la quema de naves de Fëanor, lideró valientemente a la gran mayoría de los Noldor por el mortal desierto de hielo crujiente, guiándoles a la Tierra Media bajo el despertar lunar.",
        icon: "ac_unit"
      },
      {
        title: "El Largo Reinado en Hithlum",
        text: "Estableció su sede real fortificada en Barad Eithel, defendiendo heroicamente los pasos montañosos del norte y decretando el asedio secular que contuvo al Señor Oscuro en un periodo dorado de paz.",
        icon: "castle"
      }
    ],
    memorableDeeds: [
      {
        title: "Cura del Gran Cisma",
        text: "Con una nobleza de carácter insuperable, perdonó de inmediato las afrentas perpetradas por los hijos de Fëanor en aras de mantener un frente elfo unificado para combatir al Terror.",
        icon: "handshake"
      },
      {
        title: "Duelo Singular de las Eras",
        text: "Montado sobre su corcel Rochallor, cabalgó desesperadamente hasta los pies malditos del Thangorodrim para retar en combate uno a uno a Morgoth Bauglir en persona.",
        icon: "swords"
      }
    ],
    quote: '"Ringil herirá profundamente antes del amargo ocaso."',
    detailedChronicle: {
      numeral: "II",
      era: "Primera Edad",
      title: "El Duelo Final ante Angband",
      text1: "Lleno de una cólera divina y una inmensa desesperanza al percatarse de la destrucción del frente elfo tras el azote de las llamas del Bragollach, Fingolfin cabalgó en solitario hacia el norte como un relámpago plateado. Al tocar las grandes y ominosas puertas de hierro de Angband, sopló su cuerno dorado desafiando a combate singular a la mayor de las deidades oscuras.",
      text2: "En el épico duelo inmortalizado por generaciones, Fingolfin esquivó ágilmente la inmensa maza Grond y mutiló al macabro dios derrotado en siete ocasiones, infligiéndole cicatrices eternas. Aunque acabó sucumbiendo bajo el insoportable peso divino, su cadáver fue rescatado de la profanación por el Rey de las Águilas Thorondor, marcando un hito imborrable.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-Ya09mgajaSBKqQ_TVNQKaNcogAU2QqCWWq_UQOoNBRjKiocl19lREGXTGdtyL49YpGPyk8Lb1Pgtxl5NMfr0QkhTeVemKfa1w1NvPa_nJ4SXCC-LhkB4qRo0JbFE87OGT2Gsfk45JrD49KA7nXxi9G6ZkAWLLqg58jujWcyMXXywPCC3AcVCLDC929mjF6TkwXZFGRjJL1nbvbIqt2Aos-eNnu3wZizosjYaPJXQJVUYMVI8JZlj_jLGKO8BKWUoMBd-2xfCGA",
      quote: "Y Morgoth salió cojeando desde aquel fatídico día."
    }
  },
  {
    id: "luthien",
    name: "Lúthien Tinúviel",
    race: "Half-Maia",
    realm: "Doriath",
    title: "El Ruiseñor Legendario",
    subtitle: "Princesa de Doriath, la más bella de los hijos de Ilúvatar",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHkc6dbFPrcDoRAE8x1PmLSeQlZHDIzfzYUI8lDg4FJLIkse0DmzVI64AajPWEPxx3PEoRKeEGH71jJXj6zKwzVGs6gaLmdftdfv9y1VK1xc44IypLKZyuisLEwKd2sQvXD-xskmLxuKE9SVP1JNUWcZja7bWl7Hbu_6ArcrxPCdeIO0z54Ab2F30uv-l_hS6LN4AZuk5fBrRbD5cuCpv0vEK2SmCgQgMuh7MBscrkLROVt-SF3qckPecACMa8uExa_tvLApMRjA",
    weapon: "Canto Hechicero / Cabello Teñido de Sueño",
    status: "Fallecida como Mortal",
    spouse: "Beren Erchamion",
    father: "Rey Thingol (Elu)",
    mother: "Melian la Maia",
    stats: [
      { label: "Linaje Sagrado", value: "Hija de Melian la Maia", icon: "auto_awesome" },
      { label: "Consorte", value: "Beren el Manco", icon: "favorite" },
      { label: "Linaje de Reyes", value: "Princesa de Doriath", icon: "crown" }
    ],
    bioBlocks: [
      {
        title: "La Danza Eterna en Neldoreth",
        text: "Bajo el velo nocturno de los frondosos bosques de Neldoreth, danzaba grácilmente al son del ruiseñor. Fue allí donde Beren, un proscrito mortal exhausto, la descubrió por vez primera y el destino eterno de ambos reinos quedó sellado por amor.",
        icon: "nightlight"
      },
      {
        title: "La Infiltración y Derrota de Sauron",
        text: "Utilizando su gran sabueso Huan, derrocó las legiones lupinas de Tol-in-Gaurhoth y obligó al mismísimo Sauron a entregar las llaves de la fortaleza de los licántropos para liberar a Beren.",
        icon: "security"
      }
    ],
    memorableDeeds: [
      {
        title: "El Canto que Durmió a Morgoth",
        text: "Franqueando las defensas insondables de las fosas de Angband, entonó un canto tan profundo y etéreo que sumió a toda la tiranía ocre en un letargo hipnótico masivo.",
        icon: "music_note"
      },
      {
        title: "La Conmoción de las Estancias de Mandos",
        text: "Fue la única criatura elfa cuyo trágico lamento amoroso conmovió el imperturbable corazón del Vala Mandos, obteniendo un permiso milagroso para regresar como mortal.",
        icon: "hourglass_empty"
      }
    ],
    quote: '"Las hojas heladas caen y el canto de Tinúviel cesará en Beleriand."',
    detailedChronicle: {
      numeral: "III",
      era: "Primera Edad",
      title: "La Elección de la Mortalidad",
      text1: "Tras el ataque brutal del enorme lobo Carcharoth que segó la heroicidad mortal de Beren, Lúthien Tinúviel prefirió que su espíritu partiera de inmediato por dolor a las oscuras estancias de la muerte en Aman. Al postrarse de hinojos frente al guardián inmortal, derramó el canto más desolador que jamás haya resonado entre los Ainur.",
      text2: "Se le ofreció entonces una drástica decisión: morar por los siglos de los siglos en el gozo del Valinor celestial desprovista de Beren, o retornar junto a él compartiendo un destino de mortalidad el cual le traería la vejez elfo y la muerte terrenal irremediable. Con entera certeza de espíritu, tomó la mano mortal de Beren y abandonó para siempre el plano de los inmortales.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHkc6dbFPrcDoRAE8x1PmLSeQlZHDIzfzYUI8lDg4FJLIkse0DmzVI64AajPWEPxx3PEoRKeEGH71jJXj6zKwzVGs6gaLmdftdfv9y1VK1xc44IypLKZyuisLEwKd2sQvXD-xskmLxuKE9SVP1JNUWcZja7bWl7Hbu_6ArcrxPCdeIO0z54Ab2F30uv-l_hS6LN4AZuk5fBrRbD5cuCpv0vEK2SmCgQgMuh7MBscrkLROVt-SF3qckPecACMa8uExa_tvLApMRjA",
      quote: "Bajo las estrellas de Menegroth, moriremos en paz."
    }
  },
  {
    id: "beren",
    name: "Beren Erchamion",
    race: "Man",
    realm: "Doriath",
    title: "Héroe de los Hijos de Hombres",
    subtitle: "El Manco, el Héroe Audaz que Cruzó los Girdles",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBwXzJViFWss40Jdpty018kDioMtz0_cEyzjdNEidtCzlroi0dNRcvUYXHJygLx6vQ4hTUSeNIXQ1GS6ORON4GypDIdneKnwSXaQ9LYSildNhq4aoYw0dtEMHnRpgLvrJA3KBz0oIDmVAWa8t8m9OaJCuscvDyo2vODMaU4ujEizh8LqYJgwvr63mntC61YF1NyJ2eFXvrPlr6cY6MwXJXoXmJiVZXenhcVw_C8O9sy1te7Tpis5cnoWkX8wPCPQkgdfvODwMliA",
    weapon: "Angrist, el Cuchillo Cortador de Hierro",
    status: "Fallecido en Tol Galen",
    spouse: "Lúthien Tinúviel",
    father: "Barahir de Dorthonion",
    stats: [
      { label: "Raza", value: "Humano (Edain de Beör)", icon: "terrain" },
      { label: "Mayor Hazaña", value: "Recuperó un Silmaril de Angband", icon: "diamond" },
      { label: "Cuchillo", value: "Angrist (cincel elfo)", icon: "colorize" }
    ],
    bioBlocks: [
      {
        title: "Proscrito de los Claros de Dorthonion",
        text: "Tras la terrible masacre de la Casa de Beör, lideró a los últimos guerreros supervivientes en una guerra asimétrica de guerrillas contra las abrumadoras fuerzas orcas que asolaban Dorthonion.",
        icon: "forest"
      },
      {
        title: "El Encuentro en el Bosque de Neldoreth",
        text: "Superó el cinturón impenetrable de Melian guiado por un designio divino insondable. Avistó a Lúthien bailando en la penumbra de las hayas doradas de Neldoreth, uniendo sus almas.",
        icon: "favorite"
      }
    ],
    memorableDeeds: [
      {
        title: "Gesta del Silmaril Sagrado",
        text: "Ayudado por el sacrificio del sabio rey elfo Finrod Felagund, penetró en las profundidades basálticas de Angband y empleó el cincel Angrist para extraer una de las excelsas de la deidad del mal.",
        icon: "diamond"
      },
      {
        title: "El Desgaje de la Mano Humana",
        text: "En el umbral maldito de las puertas oscuras, el monstruoso lobo Carcharoth le amputó la mano con el Silmaril de cuajo, consumiendo al can en una violenta locura destructiva.",
        icon: "front_hand"
      }
    ],
    quote: '"El Silmaril está en mi mano, mas la mano ya no existe."',
    detailedChronicle: {
      numeral: "IV",
      era: "Primera Edad",
      title: "La Cacería canina en Doriath",
      text1: "El can corrupto de Morgoth, devorado por las entrañas de fuego abrasador surgidas por tragar el Silmaril bendecido, irrumpió en Doriath sembrando el pánico absoluto. Beren marchó presuroso del brazo del sabueso Huan y el Rey Thingol para poner fin a la bestia de una vez y por todas.",
      text2: "En el cruento combate en los espesores fluviales, Beren defendió con su propia existencia la realeza del elfo ancestral, sufriendo heridas venenosas desgarradoras inducidas por las fauces de Carcharoth antes de expirar provisionalmente. Su alma esperó fielmente a que el canto de Tinúviel obrara el único retorno definitivo concedido a la humanidad.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCalep8u0fh3t88VyMQboNoORhb3PTwgSZozZHye140Y3s5eRlSm3YNu467aP3ZCTeU6c9SM0efwVn7YyjMu7pjxv6M4kurgb2XRBaeRKLuR-AGZgD-MrgPA9sxlP_jSyfbX0WGt9Hb-lQLhG2OlHsD9N5GJ20zEkHnsau3M-luxAofNaBBoAlh_oqEecSVBvQ5Vj5K4cIuS8dZeg1NnunwJvoB8qafTsapHdFZp5ft_7meqM1LxK2DFg115FJv1a4-HDuSF828BQ",
      quote: "Bajo la paz del Sirion, el Manco descansa al fin."
    }
  },
  {
    id: "morgoth",
    name: "Morgoth Bauglir",
    race: "Ainu",
    realm: "Angband",
    title: "El Tirano Primigenio",
    subtitle: "El Primer Señor Oscuro, el Enemigo del Mundo Antiguo",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdgrEGr-stEkaapfTgyym2Z27qFaf7gFsegyCw-rd4o4IyVAYHwZRw-l3jDT4FeaOIUeo5oeYj-gncundzNFs07-DuQvJyVVpNGSpgPU5zDZmywy8wdB2KnlKf4rC1swz0dos8Zzd4O9X-xX1aYw7km8XClKucVcNSu3bs0nPB7AIf8jKjgnQjP9z0Mfp7pnAUVAo6EbCebtywlPtwH7u9PGxA0CahQ1hfQj5D8kfeg-wrUj4i1nfF5yFJfgkPeRYg1E0iRc_Chg",
    weapon: "Grond, el Martillo del Inframundo",
    status: "Arrojado al Vacío Atemporal",
    stats: [
      { label: "Fortaleza", value: "Las Fosas de Angband", icon: "fort" },
      { label: "Maza Sagrada", value: "Grond, el Martillo", icon: "gavel" },
      { label: "Estatus Real", value: "Primer de los Valar en Rebelión", icon: "cyclone" }
    ],
    bioBlocks: [
      {
        title: "Origen Primordial y Rebelión Celestial",
        text: "Creado como Melkor, fue imbuido con la mayor porción de dones divinos celestiales por Eru Ilúvatar. Introdujo ruidosas y soberbias disonancias de ego durante la música sagrada de creación de las esferas celestes.",
        icon: "cyclone"
      },
      {
        title: "La Fortaleza de Hierro en Angband",
        text: "Excavó el subsuelo septentrional construyendo la inexpugnable base militar de Angband, flanqueada por las tres imponentes chimeneas humeantes basálticas de Thangorodrim que vertían ceniza sobre los reinos.",
        icon: "fort"
      }
    ],
    memorableDeeds: [
      {
        title: "Arrasamiento de los Dos Árboles",
        text: "Mediante una alianza con el horror informe Ungoliant, envenenó los troncos dorados de las luminarias Laurelin y Telperion, sumiendo a toda la corte ancestral de Elfos en la desoladora oscuridad.",
        icon: "park"
      },
      {
        title: "Robo e Implante de los Silmarils",
        text: "Asesinó fríamente al rey Finwë, capturó los tres Silmarils creados y los colocó permanentemente sobre su pesadísima Corona de Hierro, proclamándose deidad indiscutible de Arda.",
        icon: "diamond"
      },
      {
        title: "Corrupción y Forja de Bestias",
        text: "Atormentó y distorsionó la estirpe elfa prisionera para dar forma de pesadilla a los primeros Orcos, liberando letales dragones de fuego y huestes Balrog contra las tierras de Beleriand.",
        icon: "skull"
      }
    ],
    quote: '"Este es mi mundo y yo he decretado sus sombras."',
    detailedChronicle: {
      numeral: "V",
      era: "Edad Antigua",
      title: "La Maldición de los Hijos de Húrin",
      text1: "Morgoth Bauglir no solo destruyó las huestes elfas en combate directo; su principal goce estribaba en demeritar de forma pérfida la voluntad de los clanes proscritos humanos que se le oponían valerosamente. Capturó al noble guerrero Húrin y lo encadenó sobre las alturas de Thangorodrim bajo hechizo para obligarlo a contemplar el desastre de su prole.",
      text2: "La maldición mental vertida sobre Túrin Turambar y su desvalida hermana Niënor operó de manera implacable e invisible, sumiendo las heroicas y erráticas andanzas de los proscritos en la mayor tragedia familiar. Morgoth personificó un tormento de proporciones colosales el cual asoló Beleriand mucho antes del hundimiento definitivo.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdgrEGr-stEkaapfTgyym2Z27qFaf7gFsegyCw-rd4o4IyVAYHwZRw-l3jDT4FeaOIUeo5oeYj-gncundzNFs07-DuQvJyVVpNGSpgPU5zDZmywy8wdB2KnlKf4rC1swz0dos8Zzd4O9X-xX1aYw7km8XClKucVcNSu3bs0nPB7AIf8jKjgnQjP9z0Mfp7pnAUVAo6EbCebtywlPtwH7u9PGxA0CahQ1hfQj5D8kfeg-wrUj4i1nfF5yFJfgkPeRYg1E0iRc_Chg",
      quote: "No hay esperanza bajo la garra de hierro."
    }
  },
  {
    id: "turin",
    name: "Túrin Turambar",
    race: "Man",
    realm: "Nargothrond",
    title: "Amo de su Propio Destino",
    subtitle: "El Héroe Trágico, el Matador de Glaurung el Dorado",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAasY0djZ-LWif0GfNAF1yxh_UVw_NqJJJIOv5yew6pgw__kX9J4s8L2fYyo-wYjUwI3uS9cFjfi87RzJx12d3gB1EhBxsRIQT3v-u5s27_RTEhS04ARAegLv09HN_hrdsef4gnA5LSg_Of0I6m73hfWcD5RhwdRb0GI8fzKM4z5bM0CKQm5kx_184_UPgz6jhBYPer74RxPVjbkGdLvdqCGLFxCJA5dZ71PotVkuXDskH2HYvCk50RzK1WjnyjV5mjH8gGX9UKzw",
    weapon: "Gurthang, la Espada de Hierro Negro",
    status: "Fallecido en Cabed-en-Aras",
    father: "Húrin Thalion",
    mother: "Morwen Eledhwen",
    stats: [
      { label: "Maldición", value: "Casta Maldita de Húrin", icon: "priority_high" },
      { label: "Espada Negra", value: "Gurthang", icon: "colorize" },
      { label: "Dominio", value: "Gorgoth / Brethil / Nargothrond", icon: "castle" }
    ],
    bioBlocks: [
      {
        title: "El Destierro hacia Doriath",
        text: "Enviado por su temerosa madre Morwen para salvarlo de los proscritos invasores orientales, se crió como hijo de adopción en la realeza del Rey elfo Thingol, convirtiéndose en el más recio espadachín forestal.",
        icon: "shield"
      },
      {
        title: "La Tragedia de Nargothrond",
        text: "Aconsejó equivocadamente al sabio rey Orodreth erigir un puente masivo ostentoso a las puertas pétreas secretas, descuidando el sigilo y propiciando que el dragón Glaurung arrasara la corona.",
        icon: "castle"
      }
    ],
    memorableDeeds: [
      {
        title: "Muerte del Dragón Glaurung",
        text: "Emboscó al inmenso dragón dorado en el abismo vertical de Cabed-en-Aras, hundiéndole su acero elfo Gurthang de lado a lado y liberando finalmente a Beleriand de esta monstruosidad.",
        icon: "skull"
      },
      {
        title: "Búsqueda del Destino Soberano",
        text: "Se bautizó orgullosamente a sí mismo con infinitos seudónimos (Mormegil, Neithan, Turambar) en un infructuoso forcejeo dialéctico para zafarse de la implacable maldición mental de Melkor.",
        icon: "auto_awesome"
      }
    ],
    quote: '"¡Salve Gurthang, acero hermafrodita de la profanación!"',
    detailedChronicle: {
      numeral: "VI",
      era: "Primera Edad",
      title: "La caída de una sombra heroica",
      text1: "Túrin destacó como el más excelso estratega forestal de las tierras de Brethil y Nargothrond, infundiendo un pavor formidable a las legiones orcas invasoras bajo el yelmo del dragón de Dor-lómin. Su bravura sin embargo se entrelazó letalmente con el orgullo desmedido.",
      text2: "Luego del postrero estertor del can de fuego Glaurung, a resultas del cual descubrió el cruel y retorcido engaño mental que le unía trágicamente a su hermana Niënor, desenvainó su espada negra Gurthang. Al hundir su filo oscuro en su propio pecho, reclamó morir de inmediato para aplacar su inmenso y tormentoso dolor.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAasY0djZ-LWif0GfNAF1yxh_UVw_NqJJJIOv5yew6pgw__kX9J4s8L2fYyo-wYjUwI3uS9cFjfi87RzJx12d3gB1EhBxsRIQT3v-u5s27_RTEhS04ARAegLv09HN_hrdsef4gnA5LSg_Of0I6m73hfWcD5RhwdRb0GI8fzKM4z5bM0CKQm5kx_184_UPgz6jhBYPer74RxPVjbkGdLvdqCGLFxCJA5dZ71PotVkuXDskH2HYvCk50RzK1WjnyjV5mjH8gGX9UKzw",
      quote: "Y las rocas lloraron el fin de Turambar."
    }
  }
];
