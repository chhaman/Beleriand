# TODO - Maiar: botones individuales por personaje

- [ ] 1) Encontrar dónde se renderiza la sección “Maiar” en la UI (probables: `src/data/secondaryLore.ts`, `src/components/CharactersView.tsx`, `src/data.ts`).
- [ ] 2) Confirmar el formato actual del destino de navegación para Maiar (si ya existe una sección o ruta por personaje).
- [ ] 3) Identificar cómo evitar el navbar/header interno de las fichas `public/characters/maiar/**/code.html`.
- [ ] 4) Implementación personaje por personaje (orden alfabético por carpeta):
  - [ ] 4.1) Arien (carpeta `ficha_de_personaje_arien_silk`): crear/ajustar botón + pantalla destino.
  - [ ] 4.2) Curunír (Saruman) (`ficha_de_personaje_curun_r_silk`): crear/ajustar.
  - [ ] 4.3) Eönwë (`ficha_de_personaje_e_nw_silk`): crear/ajustar.
  - [ ] 4.4) Ilmarë (`ficha_de_personaje_ilmar_silk`): crear/ajustar.
  - [ ] 4.5) Melian (`ficha_de_personaje_melian_silk`): crear/ajustar.
  - [ ] 4.6) Olórin / Gandalf (`ficha_de_personaje_ol_rin_gandalf_silk`): crear/ajustar.
  - [ ] 4.7) Ossë (`ficha_de_personaje_oss_silk`): crear/ajustar.
  - [ ] 4.8) Radagast (`ficha_de_personaje_radagast_silk`): crear/ajustar.
  - [ ] 4.9) Tilion (`ficha_de_personaje_tilion_silk`): crear/ajustar.
  - [ ] 4.10) Uinen (`ficha_de_personaje_uinen_silk`): crear/ajustar.
- [ ] 5) Agregar nombres formateados: 
  - [ ] 5.1) Curunir debe mostrarse como “Curunir (Saruman)”
  - [ ] 5.2) Alwendil debe mostrarse como “Alwendil (Radagast)” (cuando toque crear/ajustar esa entrada en UI)
- [ ] 6) Verificar al final que todos los botones queden separados y que cada destino muestre la ficha correcta sin romper navegación global.


